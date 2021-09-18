import { connect } from 'react-redux'
import { setVisibilityFilter } from '../store/actions'
import Link from '../components/Link'
// 属性
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}
// 方法
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      console.log("ownProps",ownProps.filter)
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink