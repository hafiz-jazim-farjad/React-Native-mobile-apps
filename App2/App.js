import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function counter() {
  const [read, update] = useState(0);

  function add() {
    update(read + 1);
  }
  function subtract() {
    if (read > 0) {
      update(read - 1);
    }
    if (read == 0) {
      alert('The Counter is already at zero');
    }
  }
  function reset() {
    update(0);
    if (read == 0) {
      alert('The Counter is already at zero');
    }
    clearInterval(stopCount);

  }

  // sir ka copy kary hen yeh dono last waly 

  function start() {
    stopCount = setInterval(() => {
      update(prev => prev + 1);
    }, 1000);
  }

  function stop() {
    clearInterval(stopCount)
    if (read == 0) {
      alert('The Counter is already at zero');
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container1}>
        <Text style={styles.text}>This App is Created By Jazim</Text>
        <Text style={styles.text}>{read}</Text>
        <View style={styles.for_row}>
          <TouchableOpacity onPress={add}>
            <Text style={styles.button}> Add </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={subtract}>
            <Text style={styles.button}> Subtract </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={reset}>
            <Text style={styles.button}> Reset </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={start} >
            <Text style={styles.button}>Start Counter</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={stop} >
            <Text style={styles.button}>Stop Count</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default counter;




// one more practice 
// function test() {
//   const [read, update] = useState(0);

//   // for start 
//   function start() {
//     for_stop = setInterval(() => {
//       update(prev => prev + 1);
//     }, 100);
//   }
//   function stop() {
//     clearInterval(for_stop)
//   }
//   function reset() {
//     update(0);
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar style="auto" />
//       <View style={styles.container1}>
//         <Text>{read}</Text>
//         <TouchableOpacity>
//           <Text style={styles.button} onPress={start}>
//             Start Timer:
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.button} onPress={stop}>
//             Stop Timer:
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Text style={styles.button} onPress={reset}>
//             Reset
//           </Text>
//         </TouchableOpacity>

//         <View style={styles.for_row}>

//         </View>
//       </View>
//     </SafeAreaView>

//   );

// }
// export default test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },

  container1: {
    flex: 2,
    width: 100 + "%",
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    gap: 10,
  },

  button: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "black",
    paddingHorizontal: 30,
    paddingVertical: 5,
  },

  text: {
    fontSize: 20,
  },

  for_row: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 10,
  },

});