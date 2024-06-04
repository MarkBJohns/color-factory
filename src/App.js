import { Switch, Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import ColorFactory from './ColorFactory';
import ColorForm from './ColorForm';
import Color from "./Color";
import colorList from './colorList';
import './App.css';
import { useState } from 'react';

function App() {
  const [colors, setColors] = useState(colorList);
  
  const addColor = (newColor) => {
    setColors([newColor, ...colors]);
  }
  
  return (
    <div className="App">
      <h1>Color Factory</h1>
      <Switch>
        <Route exact path="/colors" render={() => <ColorFactory colors={colors} />} />
        <Route path="/colors/new" render={() => <ColorForm addColor={addColor} /> } />
        <Route path="/colors/:color" render={(routeProps) => {
          const formattedColor = routeProps.match.params.color;
          const colorObj = colors.find(c => c.formatted === formattedColor);
          if (!colorObj) return <Redirect to="/colors" />;
          return <Color {...colorObj} />;
        }}
        />
        <Route render={() => <Redirect to="/colors" />} />
      </Switch>
    </div>
  );
}

export default App;
