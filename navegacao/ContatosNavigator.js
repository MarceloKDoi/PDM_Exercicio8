import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import CadastroTela from '../telas/CadastroTela';
import ContatosTela from '../telas/ContatosTela';
import Cores from '../constantes/Cores';

const ContatosNavigator = createStackNavigator({

    ListaDeContatos: ContatosTela,
    Cadastro: CadastroTela
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Cores.primary : 'white',
                headerTintColor: Platform.OS === 'android' ? 'white' : Cores.primary
            }
        }
    }
)

export default createAppContainer(ContatosNavigator);