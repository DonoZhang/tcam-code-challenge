import React from 'react';
import TCAMLoader from 'tcam-loader'
import { connect } from 'react-redux'

import { getLoading } from '../../store/selectors';

interface LoaderType {
    loading?: boolean
    className?: string
}

const Loader:React.FunctionComponent<LoaderType> = ({
    loading,
    className
}) => <TCAMLoader loading={loading} className={className} />


const mapStateToProps = (state:IState) => ({
    loading: getLoading(state)
})


export default connect (
    mapStateToProps,
    null,
)(Loader)
