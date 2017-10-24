import { 
    LOAD_SPEAKERS,
    LOAD_SPEAKER
} from './actions';

const initialState = {
    store: Ext.create('Ext.data.Store', {
        proxy: {
            type: 'ajax',
            url: 'http://localhost:3005/player'

            // add get and post stuff here like local host 3005/api/player for example
        }
    }),
};

export default function speakersReducer(state = initialState, action) {
    
    switch (action.type) {
        case LOAD_SPEAKERS: {
            if (!state.store.isLoaded()) {
                state.store.load()
            }
            return state;
        }
        case LOAD_SPEAKER: {
            return { ...state, record: action.speaker, showSpeaker: true }
        }
        default:
            return state;
    }
    
}