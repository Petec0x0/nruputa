const initialState = {
    countdownTimer: {
        key: 0,
        isPlaying: false,
        duration: (25),
        onComplete: () => [false, 1000]
    }
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
            break;
    
        default:
            return state;
    }
}

export default appReducer;