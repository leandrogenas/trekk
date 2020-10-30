import React, { PureComponent } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { Neomorph } from 'react-native-neomorph-shadows';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

//import { startNFC, stopNFC } from "./helpers/NFCHelper";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      titleMessage: "Aproxime o dispositivo a uma tag NFC",
      descriptionMessage: "Aguardando aproximação...",
      tagValue: null
    };
  }

  componentWillMount() {
    //startNFC(this.handleNFCTagReading);
  }

  componentWillUnmount() {
    //stopNFC();
  }

  handleNFCTagReading = nfcResult => {
    if (nfcResult.Error) {
      this.setState({
        titleMessage: nfcResult.Error.Title,
        descriptionMessage: nfcResult.Error.Message
      });
    } else {
      this.setState({ tagValue: nfcResult.tagValue });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#353a40', '#181a1d']} style={styles.linearGradient}>
        
          <View style={styles.trekk}>
            <Text style={styles.trekkIn}>trekk</Text>
            <Text style={styles.trekkOut}>trekk</Text>
          </View>

            <TouchableHighlight style={styles.butao} onPress={()=>{}}>
            <Neomorph style={styles.btnIniciarNeomorph}>
              <LinearGradient style={styles.gradFora} colors={['#FF5E00', '#CE2A00']}>
                <LinearGradient style={styles.gradDentro} colors={['#CE2A00', '#FF5E00']}>
                  <View style={styles.iniciarTreino}>
                  <FontAwesomeIcon icon="coffee" />
                  </View>
                </LinearGradient>
              </LinearGradient>
              </Neomorph>
            </TouchableHighlight>

            <View style={styles.opcoes}>
              <TouchableHighlight style={styles.opcao} onPress={() => {}}>
                <Neomorph style={styles.btnPeqNeoMorph} >
                </Neomorph>
              </TouchableHighlight>

              <TouchableHighlight style={styles.opcao} onPress={() => {}}>
                <Neomorph style={styles.btnPeqNeoMorph} >
                </Neomorph>
              </TouchableHighlight>
            </View>
      
        </LinearGradient>
      </View>
    );
  }
}

/*
box-shadow: -5px -5px 20px 5px rgba(255, 255, 255, 0.1),
    5px 5px 20px 5px rgba(0, 0, 0, 0.5);
*/

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },

  trekk: {
    marginTop: 50,
    fontSize: 80,
    color: 'white',
    textAlign: 'center'
  },

  trekkIn: {
    position: 'absolute',
    left: '50%',
    width: 160,
    marginStart: -80,
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: {width: -3, height: 3},
    textShadowRadius: 10,
    fontSize: 80,
    color: 'white',
    textAlign: 'center'
  },

  trekkOut: {
    position: 'absolute',
    left: '50%',
    width: 160,
    marginStart: -80,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 3, height: -3},
    textShadowRadius: 10,
    fontSize: 80,
    color: 'white',
    textAlign: 'center'
  },

  btnIniciarNeomorph: {
    shadowRadius: 10,
    borderRadius: 100,
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: 200,
    height: 200
  },

  btnPeqNeoMorph: {
    shadowRadius: 5,
    borderRadius: 25,
    backgroundColor: '#353a40',
    width: 50,
    height: 50,
  },

  opcao: {
    marginStart: 0,
  },

  opcoes: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    marginStart: 100,
    marginEnd: 100,
    marginBottom: 100
  },

  butao: {
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute'  
  },

  gradFora: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },

  gradDentro: {
    marginStart: 10,
    marginTop: 10,
    height: 180,
    width: 180,
    borderRadius: 90,
    transform: [{ rotate: '-45deg' }]
  },

  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10
  },

  iniciarTreino: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{rotate: '45deg'}]
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  headerMessage: {
    fontWeight: "bold",
    fontSize: 32
  },
  titleMessage: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 34
  },
  descriptionMessage: {
    fontWeight: "normal",
    fontSize: 16,
    marginTop: 12,
    textAlign: "center"
  },
  tagValue: {
    fontWeight: "normal",
    fontSize: 16,
    marginTop: 18,
    color: "#77D353"
  }
});