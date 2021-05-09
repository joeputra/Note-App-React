import ActionTypes from '../ActionTypes'
const initialState = {
    notes: []
}
export default (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.ADD_NOTE: {
            const notes = state.notes
            notes.push(action.note)
                return {
                    notes,
                }
        }
        case ActionTypes.UPDATE_NOTE: {
            const { index, note } = action
            const notes = state.notes
            notes [index] =  note
                return {
                    notes,
                }
        }
        case ActionTypes.REMOVE_NOTE: {
            const { index } = action
            const notes = state.notes
            delete notes [index]
                return {
                notes,   
                }  
        }
        default :
        return state;
    }
}
