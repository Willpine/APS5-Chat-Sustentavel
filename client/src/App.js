import React from 'react';

// Permite a definição de rotas e o que será feito nelas
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

// O ponto inicial da aplicação
//Quando o usuário entrar no site, ele estará em /.
//Então, o componente Join será renderizado, isso é determinando pelo
//route. Quando o usuário acessar a página chat, o componente chat será
//renderizado.
//A rota de Chat não é exata pois na hora que chamarmos a URL
//haverão paramêtros nela, como o nome do usuário que varia.
const App = () => (
    <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
    </Router>
);

export default App;