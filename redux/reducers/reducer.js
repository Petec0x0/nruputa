// Get today's date which will be used as key for storing today's statistics
const today = `${new Date().getFullYear()} ${new Date().getMonth()} ${new Date().getDate()}`;

// The initial state for the reducer
const initialState = {
    // settings for storing users preferences
    settings: {
        pomodoroTime: (25),
        breakTime: (5),
        longBreak: true,
        longBreakLength: (20),
        longBreakAfter: 4
    },
    // countdownTimer for storing the current 
    // state of the countdown timer
    countdownTimer: {
        key: 0,
        isPlaying: false,
        duration: (25*60),
        sessionCount: 4
    },
    // buttonText for storing the title displayed 
    // at Pomodoro screen Button for each session
    buttonText: 'START POMODORO',
    // message for storing messages for each session
    message: 'STAY FOCUSED',
    // isOnWorkingSession for knowing the current session
    isOnWorkingSession: true,
    // for storing users usage of the Pomodoro according the date
    statistics: {
        [today]: {
            pomodoros: 0,
            shortBreaks: 0,
            longBreaks: 0
        }
    }
}

const appReducer  = (state = initialState, action) => {
    switch (action.type) {
        // When the 'UPDATE_TIMER' is dispatched, start the 
        // countdown timer or reset it depending on 
        // 'isPlaying' state
        case 'UPDATE_TIMER':
            // reset the countdown timer if it is 
            // currently playing then update the 'isPlaying' status
            if(state.countdownTimer.isPlaying){
                return {
                    ...state,
                    countdownTimer: {
                        ...state.countdownTimer, 
                        isPlaying: !state.countdownTimer.isPlaying,
                        key: state.countdownTimer.key + 1
                        }
                }
            }
            // Start the countdown timer instead if it is not playing
            return {
                ...state,
                countdownTimer: {
                    ...state.countdownTimer, 
                    isPlaying: !state.countdownTimer.isPlaying
                    }
            }
        case 'SWITCH_SESSION':
            // check if working session is on and switch to break
            if(state.isOnWorkingSession){
                return{
                    ...state,
                    buttonText: 'TAKE A BREAK',
                    message: 'RELAX',
                    isOnWorkingSession: false,
                    countdownTimer: {
                        ...state.countdownTimer,
                        // update the sessionCount to know when to switch to long break
                        sessionCount: state.countdownTimer.sessionCount - 1,
                        key: state.countdownTimer.key + 1,
                        duration: !(state.countdownTimer.sessionCount == 1) ? state.settings.breakTime*60 : state.settings.longBreakLength*60
                    },
                    // update the usage statistics
                    statistics: {
                        ...state.statistics,
                        [today]: {
                            ...state.statistics[today],
                            pomodoros: (state.statistics[today] && state.statistics[today].pomodoros) ? 
                                        state.statistics[today].pomodoros + 1 : 1,
                        }
                    }
                }
            }
            // Switch to working session instead if it is already on break
            return {
                ...state,
                buttonText: 'START POMODORO',
                message: 'STAY FOCUSED',
                isOnWorkingSession: true,
                countdownTimer: {
                    ...state.countdownTimer,
                    key: state.countdownTimer.key + 1,
                    duration: state.settings.pomodoroTime*60,
                    // Update the 'sessionCount' with the value of 
                    // 'longBreakAfter' from the settings if it turns to zero
                    sessionCount: (state.countdownTimer.sessionCount == 1) ? 
                                    state.settings.longBreakAfter : state.countdownTimer.sessionCount
                },
                // update the usage statistics
                statistics: {
                    ...state.statistics,
                    [today]: {
                        ...state.statistics[today],
                        shortBreaks: (state.statistics[today] && state.statistics[today].shortBreaks) ? 
                                        state.statistics[today].shortBreaks + 1 : 1,
                        // update the long break if it is time for one
                        longBreaks: ((state.countdownTimer.sessionCount < 1) && 
                                        (state.statistics[today] && state.statistics[today].longBreaks)) ? 
                                            state.statistics[today].longBreaks + 1 : 0
                    }
                }

            }
        case 'UPDATE_DURATION':
            // Update the value of 'duration' and 'sessionCount' for 
            // settings when 'UPDATE_DURATION' is dispatched
            return {
                ...state,
                countdownTimer: {
                    ...state.countdownTimer,
                    key: state.countdownTimer.key + 1,
                    duration: action.payload*60,
                    sessionCount: state.settings.longBreakAfter
                }

            }
        case 'UPDATE_SETTINGS':
            // Update the settings state when 'UPDATE_SETTINGS' is 
            // dispatched with the values passed as payload
            if('pomodoroTime' in {...action.payload}){
                return {
                    ...state,
                    settings: {
                        ...state.settings,
                        ...action.payload 
                    },
                    // The countdown state should be updated too
                    // if the settings includes Pomodoro Time
                    countdownTimer: {
                        ...state.countdownTimer,
                        key: state.countdownTimer.key + 1,
                        duration: action.payload.pomodoroTime*60
                    }
                }
            }else if('longBreakAfter' in {...action.payload}){
                return {
                    ...state,
                    settings: {
                        ...state.settings,
                        ...action.payload 
                    },
                    // The sessionCount state should be updated too
                    // if the settings includes longBreakAfter
                    countdownTimer: {
                        ...state.countdownTimer,
                        sessionCount: action.payload.longBreakAfter
                    }
                }
            }
            return {
                ...state,
                settings: {
                    ...state.settings,
                    ...action.payload
                }
            }
    
        default:
            return state;
    }
}

export default appReducer;