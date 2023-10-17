import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function App() {
  const [img, setImg] = useState(require('./src/assets/biscoito.png'));
  const [phrasetext, setPhraseText] = useState('');

  let phrases = [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite  em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.',
  ];

  function breakBiscuit() {
    let randomNumber = Math.floor(Math.random() * phrases.length);
    setPhraseText(' " ' + phrases[randomNumber] + ' " ');
    setImg(require('./src/assets/biscoitoAberto.png'));
  }

  function reloadCoockie() {
    setPhraseText('');
    setImg(require('./src/assets/biscoito.png'));
  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />

      <Text style={styles.phrase}>{phrasetext}</Text>

      <TouchableOpacity style={styles.button} onPress={breakBiscuit}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar o Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.reloadButton} onPress={reloadCoockie}>
        <View style={styles.btnArea}>
          <Text style={styles.reloadbtnText}>Reniciar o Biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fffb',
  },
  img: {
    width: 230,
    height: 230,
  },
  phrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button: {
    height: 50,
    width: 230,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22',
  },

  reloadButton: {
    height: 50,
    width: 230,
    borderWidth: 2,
    borderRadius: 25,
    marginTop: 15,
    borderColor: '#121212',
  },
  reloadbtnText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#121212',
  },
});
