export const toggleTheme = (store, theme) => {
  const newTheme = theme === "light" ? "dark" : "light";
  const configurations = {
    ...store.state.configurations,
    theme: newTheme,
  };
  store.setState({ ...store.state, configurations });
};
