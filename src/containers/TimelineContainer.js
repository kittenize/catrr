import Timeline from '../components/Timeline';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    messages: state.messages
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);