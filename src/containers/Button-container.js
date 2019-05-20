import { connect } from 'react-redux';
import { Buttons } from '../components/Buttons';
import { goAction, cautionAction, stopAction } from '../actions/actions';

const mapStateToProps = state => {
  return {
    lightStatus: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    go:      () => { dispatch(goAction) },
    caution: () => { dispatch(cautionAction) },
    stop:    () => { dispatch(stopAction) }
  }
}

export const ButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);