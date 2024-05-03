
export const markAsRead = (index) => {
  return {
    type: 'MARK_AS_READ',
    index
  }
}

export const setNotificationFilter = (filter) => {
  return {
    type: 'SET_TYPE_FILTER',
    filter
  }
}
