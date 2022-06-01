import React from 'react';
import TCAMLoader from 'tcam-loader'
import { connect } from 'react-redux'

import { getLoading } from '../../store/selectors';
import * as styles from './styles'

interface LoaderType {
    loading?: boolean
}

const Loader:React.FunctionComponent<LoaderType> = ({
    loading,
}) => <TCAMLoader loading={loading} className={styles.loaderContainr} />


const mapStateToProps = (state:IState) => ({
    loading: getLoading(state)
})


export default connect (
    mapStateToProps,
    null,
)(Loader)
