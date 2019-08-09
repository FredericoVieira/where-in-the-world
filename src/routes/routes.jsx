import React from 'react';
import Home from '../components/content/Home';
import Country from '../components/content/Country';


const routes = {
  '/': () => <Home />,
  '/country/:name': ({ name }) => <Country country={name} />
}

export default routes
