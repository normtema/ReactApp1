import Dialogs from './Dialogs'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/people-reducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return { 
        people: state.people
    };
};

const mapDispatchToProps = (dispatch) => {
    return { 
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateNewMessageText: (text) => {
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action);
        }
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;