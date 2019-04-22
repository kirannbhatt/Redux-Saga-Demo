import React from 'react'
import { connect } from 'react-redux'
import img from '../spin.gif'

const Loading = ({ loading }) => (
    loading ?
        <div style={{textAlign: 'center'}}>
            <img src={img} alt="loading" />
            <h3>Loading</h3>
        </div>: null
)

const mapStateToProps = (state) => ({ loading: state.loading})

export default connect(mapStateToProps)(Loading);