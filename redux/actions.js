// defining the action creators

// An action creator for starting the timer and 
// reseting the timer
export const resetTimer = () => ({
    type: 'UPDATE_TIMER'
});

// Action creator for switching working session 
// and break session
export const switchSession = () => ({
    type: 'SWITCH_SESSION'
})

// Action creator for updating the settings state 
// with the given keyValue pair data
export const updateSettings = (keyValuePair) => ({
    type: 'UPDATE_SETTINGS',
    payload: keyValuePair
})

// Action creator for updating the duration an sessionCount
// from the persisted state
export const updateDurationFromStorage = (duration) => ({
    type: 'UPDATE_DURATION',
    payload: duration
})