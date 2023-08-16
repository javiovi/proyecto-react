/** 
 * Componente de tipo clase que dipsone los metodos de ciclo de vidas
 */

import React, { Component } from 'react'
import  PropTypes  from 'prop-types'

class LifeCycleExample extends Component {

    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: cuando se instancia')
    }

    componentWillMount() {
        console.log('WILLMOUNT: antes del montaje')

    }

    componentDidMount() {
        console.log('DidMount: Justo al montaje del componente')

    }
    componentWillReceiveProps(nextProps) {
        console.log('WillReceiveProps si va a recibir nuevas props')


    }

    render(){
        return (
            <div></div>
        )
    }

}