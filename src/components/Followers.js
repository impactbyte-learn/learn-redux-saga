import React from "react";
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";

const Followers = props => (
  <div>
    {props.state.loading ? (
      "Loading ..."
    ) : (
      <ul>
        {props.state.data.map((item, i) => (
          <li key={i}>{item.login}</li>
        ))}
      </ul>
    )}
  </div>
);

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => ({
  getFollowers: () => dispatch({ type: "FETCH_FOLLOWERS" })
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.getFollowers();
    }
  })
)(Followers);
