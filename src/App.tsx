import {Redirect, Route} from 'react-router-dom';
import {IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs,} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {gameController, settings} from 'ionicons/icons';
import Options from './pages/Options';
import Minesweeper from './pages/Minesweeper';
import React from 'react';

// Core CSS required for Ionic components to work properly
import '@ionic/react/css/core.css';

// Basic CSS for apps built with Ionic
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

// Optional CSS utils that can be commented out
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

// Theme variables
import './theme/variables.css';

const App: React.FC = () => {
    return (
        <IonApp>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route exact path="/options">
                            <Options/>
                        </Route>
                        <Route exact path="/minesweeper">
                            <Minesweeper/>
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/options"/>
                        </Route>
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom">
                        <IonTabButton tab="options" href="/options">
                            <IonIcon icon={settings}/>
                            <IonLabel>Options</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="game" href="/minesweeper">
                            <IonIcon icon={gameController}/>
                            <IonLabel>Minesweeper</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>
        </IonApp>
    );
}

export default App;
