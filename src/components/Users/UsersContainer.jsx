import React from 'react';
import Users from './Users';
import { connect } from "react-redux";
import {
    follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsersThunkCreator
} from "../../redux/users-reducer";
import Preloader from '../common/preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>    
            { this.props.isFetching ? <Preloader /> : null }
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// export default withAuthRedirect(
//     connect(mapStateToProps, {
//     follow, unfollow, setUsers,
//     setCurrentPage, setTotalUsersCount, toggleIsFetching,
//     toggleFollowingProgress,
//     getUsers: getUsersThunkCreator
//     } )(UsersContainer)
// );

export default compose(
    connect(mapStateToProps, {
        follow, unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers: getUsersThunkCreator
        }),
    withAuthRedirect
)(UsersContainer)