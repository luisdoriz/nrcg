const getReduxCode = () => (`
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps);

`);

module.exports = getReduxCode;
