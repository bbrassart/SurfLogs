import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';

export default function Sessions() {
  const [ columns ] = useState([
    'Date',
    'Size',
    'Ground Swell',
    'Spot',
    'Rating'
  ]);

  const [ sessions ] = useState([
    {
      Date: "2020-08-02T14:48:00",
      WaveSize: 80,
      GroundSwellSize: 50,
      Spot: 'Forum',
      Rating: 42,
    },
    {
      Date: "2020-09-26T14:48:00",
      WaveSize: 120,
      GroundSwellSize: 75,
      Spot: 'Bogatell',
      Rating: 88,
    },
  ]);

  const tableHeader = () => (
    <View style={styles.tableHeader}>
      {
        columns.map((column, index) => {
          {
            return (
              <TouchableOpacity
                key={index}
                style={styles.columnHeader}>
                <Text style={styles.columnHeaderTxt}>{column}</Text>
              </TouchableOpacity>
            )
          }
        })
      }
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={sessions}
        style={{width:"90%"}}
        keyExtractor={(item, index) => index+""}
        ListHeaderComponent={tableHeader}
        stickyHeaderIndices={[0]}
        renderItem={({item, index})=> {
          return (
            <View style={{...styles.tableRow, backgroundColor: index % 2 == 1 ? "#F0FBFC" : "white"}}>
              <Text style={{...styles.columnRowTxt}}>{ format(new Date(item.Date), 'MM/dd/yyyy') }</Text>
              <Text style={styles.columnRowTxt}>{item.WaveSize}</Text>
              <Text style={styles.columnRowTxt}>{item.GroundSwellSize}</Text>
              <Text style={styles.columnRowTxt}>{item.Spot}</Text>
              <Text style={styles.columnRowTxt}>{item.Rating}</Text>
            </View>
          )
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:60
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#37C2D0",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    height: 50
  },
  tableRow: {
    flexDirection: "row",
    height: 40,
    alignItems:"center",
  },
  columnHeader: {
    width: "20%",
    justifyContent: "center",
    alignItems:"center",
  },
  columnHeaderTxt: {
    color: "white",
    fontWeight: "bold",
  },
  columnRowTxt: {
    width:"20%",
    textAlign:"center",
  }
});
