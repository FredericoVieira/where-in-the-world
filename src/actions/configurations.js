export const toggleTheme = (store, theme) => {
  const newtheme = theme === 'light' ? 'dark' : 'light'
  const configurations = {
    ...store.state.configurations,
    theme: newtheme
  }
  store.setState({ ...store.state, configurations })
}
  