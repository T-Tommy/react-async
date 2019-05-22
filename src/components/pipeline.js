import fields from '../services/selectFields';
import makeList from './makeList';
import makeContainer from '../containers/makeContainer';
import addErrorBoundary from './ErrorBoundary';

export default fields.reduce((acc, cur) => ({
  ...acc,
  [`All${cur.displayName}s`]: addErrorBoundary(makeContainer(makeList(cur)))
}), {});
