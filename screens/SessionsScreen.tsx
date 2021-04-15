import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';

export default function Sessions() {
  const [ columns ] = useState([
    'Date',
    'Time',
    'Size',
    'Ground Swell',
    'Spot',
    'Duration',
    'Rating',
    'Comments',
  ]);

  const [ sessions ] = useState([
    {
      Date: "2020-08-02",
      Morning: true,
      Afternoon: false,
      WaveSize: 80,
      GroundSwellSize: 50,
      Spot: 'Forum',
      Duration: 30,
      Rating: 42,
      Comments: 'small but fun',
    },
    {
      Date: "2020-09-26",
      Morning: false,
      Afternoon: true,
      WaveSize: 120,
      GroundSwellSize: 75,
      Spot: 'Bogatell',
      Duration: 130,
      Rating: 88,
      Comments: 'decent size, some nice hollow sections',

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
              <Text style={styles.columnRowTxt}>{ format(new Date(item.Date), 'MM/dd/yyyy') }</Text>
              <Text style={styles.columnRowTxt}>
                { item.Morning ? 'Morning' : 'Afternoon' }
              </Text>
              <Text style={styles.columnRowTxt}>{item.WaveSize}</Text>
              <Text style={styles.columnRowTxt}>{item.GroundSwellSize}</Text>
              <Text style={styles.columnRowTxt}>{item.Spot}</Text>
              <Text style={styles.columnRowTxt}>{item.Duration}</Text>
              <Text style={styles.columnRowTxt}>{item.Rating}</Text>
              <Text style={styles.columnRowTxt}>{item.Comments}</Text>
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
    borderTopEndRadius: 2,
    borderTopStartRadius: 2,
    height: 80
  },
  tableRow: {
    flexDirection: "row",
    height: 80,
    alignItems:"center",
  },
  columnHeader: {
    width: "12.5%",
    justifyContent: "center",
    alignItems:"center",
  },
  columnHeaderTxt: {
    color: "white",
  },
  columnRowTxt: {
    width:"12.5%",
    textAlign:"center",
  }
});
