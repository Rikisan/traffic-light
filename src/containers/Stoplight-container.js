import { connect } from 'react-redux';
import { Stoplight } from '../components/Stoplight';

const mapStateToProps = state => {
  return {
    goColor:      state === 'GO'      ? 'rgb(39,232,51)' : 'white',
    cautionColor: state === 'CAUTION' ? 'yellow' : 'white',
    stopColor:    state === 'STOP'    ? 'red' : 'white'
  }
}

const mapDispatchToProps = null;

export const StoplightContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Stoplight);