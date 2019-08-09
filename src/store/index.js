import React from 'react'
import useGlobalHook from './useGlobalHook'
import * as actions from '../actions'
import initial from '../states/initial'

export const useGlobal = useGlobalHook(React, initial, actions)

export default useGlobal
