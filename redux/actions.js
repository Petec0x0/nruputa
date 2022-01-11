// defining the action creators

export const resetTimer = (countdownTimer) => ({
    type: 'UPDATE_TIMER',
    countdownTimer
});

export const switchSession = (data) => ({
    type: 'SWITCH_SESSION',
    data
})

export const updateSettings = (keyValuePair) => ({
    type: 'UPDATE_SETTINGS',
    payload: keyValuePair
})