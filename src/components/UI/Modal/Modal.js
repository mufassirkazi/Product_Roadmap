import React from 'react';
import classes from './Modal.css';
import Aux from '../../../containers/hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

/*
class Modal extends Component {

    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate () {
        console.log('[Modal] Will Update');
    }
    render () {
        return (
            <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className={classes.Modal}
             style ={{
                transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: this.props.show ? '1' : '0'
                   }} 
              >
        {this.props.children}
    </div>
    </Aux>
        );
    }
} 

export default Modal;
*/




const modal = (props) => (
  
            <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className={classes.Modal}
             style ={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
                   }} 
              >
        {props.children}
    </div>
    </Aux>
        );
    

export default modal;


