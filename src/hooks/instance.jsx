import React from 'react'
import axios from 'axios'
import { API } from './getEnv'

export const instance = () => axios.create({baseURL:API})
