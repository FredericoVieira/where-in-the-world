export const setRegion = (store, region) => {
  const regions = {
    ...store.state.regions,
    selected: region
  }
  store.setState({ ...store.state, regions })
}

export const handleFilterRegion = (store, selection) => {
  setRegion(store, selection)
}
