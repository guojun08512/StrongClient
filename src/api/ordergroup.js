import axios from '@/config/request'

export const addordergroup = (info) => {
  const data = info
  return axios.request({
    url: 'v1/ordergroup/add',
    data,
    method: 'post'
  })
}

export const deleteordergroup = (info) => {
  const data = info
  return axios.request({
    url: 'v1/ordergroup/delete',
    data,
    method: 'post'
  })
}

export const queryordergroup = (curpage) => {
  let curPage = 1
  const data = {
    curPage: curPage
  }
  return axios.request({
    url: 'v1/ordergroup/query',
    data,
    method: 'post'
  })
}

export const OrderGroup = (info) => {
  const data = info
  return axios.request({
    url: 'v1/ordergroup/sign',
    data,
    method: 'post'
  })
}
