export default (state = {length: 0}, { type, payload }) => {
    switch (type) {
      case 'SET_VALUE': 
      return {
          text: payload,
          length: payload.length
        }
      default:
        return state
    }
  }