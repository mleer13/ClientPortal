

export default function reducer(state, action) {

    switch(action.type) {
        case 'setRosters': {
            return {
                ...state,
                rosters: [...state.rosters, action.data]
            }
        }
        case 'deleteRosters': {
            return {
                ...state,
                rosters: [
                    ...state.rosters.slice(0, action.data),
                    ...state.rosters.slice(action.data+1)
                ]
            }
        }
        case 'initialiseEditBox': {
            return {
                ...state,
                isShowEditBox: true,
                editBoxMessage: state.rosters[action.data].roster,
                selectedRosterId: action.data
            }
        }
        case 'updateEditBoxMessage' : {
            return {
                ...state,
                editBoxMessage: action.data
            }
        }
        case 'saveRoster' : {
            const updatedRosters= state.rosters.slice();
            updatedRosters[state.selectedRosterId] = state.editBoxMessage;
            return {
                ...state,
                rosters: updatedRosters,
                isShowEditBox: false
            }
        }
        default: return state;
    }
}