const initialState = {
    settings: {
        pomodoroTime: (25*60),
        breakTime: (5*50),
        longBreak: true,
        longBreakLength: (20*60),
        longBreakAfter: 4
    },
    countdownTimer: {
        key: 0,
        isPlaying: false,
        duration: (10),
    },
    buttonText: 'START POMODORO',
    message: 'STAY FOCUSED',
    isOnWorkingSession: true
}

const appReducer  = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TIMER':
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
                        key: state.countdownTimer.key + 1,
                        duration: (state.settings.longBreakAfter) ? state.settings.breakTime : state.settings.longBreakLength
                    },
                    settings: {
                        ...state.settings,
                        longBreakAfter: state.settings.longBreakAfter - 1
                    }
                }
            }
            return {
                ...state,
                buttonText: 'START POMODORO',
                message: 'STAY FOCUSED',
                isOnWorkingSession: true,
                countdownTimer: {
                    ...state.countdownTimer,
                    key: state.countdownTimer.key + 1,
                    duration: state.settings.pomodoroTime
                },
                settings: {
                    ...state.settings,
                    longBreakAfter: (state.settings.longBreakAfter < 0) ? 4 : state.settings.longBreakAfter
                }

            }
    
        default:
            return state;
    }
}

export default appReducer;