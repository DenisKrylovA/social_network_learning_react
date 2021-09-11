import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getStatusTC, getUserPofileTC, updateStatusTC } from '../../redux/profile_reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    
    componentDidMount () {
        
        let userId = this.props.match.params.userId;
        debugger
        if (!userId) {
            userId = this.props.authorizedUserId;
        }

        this.props.getUserPofileTC(userId);
        this.props.getStatusTC(userId);
    }

    render() {
        return (
            <Profile 
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatusTC} 
            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth 
});

export default compose(
    connect(mapStateToProps, { getUserPofileTC, getStatusTC, updateStatusTC }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
