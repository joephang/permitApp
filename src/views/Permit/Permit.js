import * as React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Button, StyleSheet, Image, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Spinner, Fab, Icon} from 'native-base';
import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';

const propTypes = {
  FetchToken: PropTypes.func.isRequired,
  auth: PropTypes.any.isRequired,
};

const defaultProps = {
  auth: null,
};

const Permit = (props) => {
  const {navigation} = props;
  const [search, setSearch] = React.useState('');
  //   const actions = [];
  const headTable = ['No Permit', 'Area Kerja', 'Status', 'Action'];
  const dataTable = [
    ['1', 'Area A', 'Checking', null],
    ['2', 'Area B', 'Checking', null],
    ['3', 'Area C', 'Checking', null],
    ['4', 'Area D', 'Checking', null],
    ['5', 'Area E', 'Checking', null],
  ];
  const element = (data, index) => (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => console.log('Edit')}>
        <Icon type="FontAwesome5" name="edit" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('Trash')}
        style={{marginLeft: '20%'}}>
        <Icon type="FontAwesome5" name="trash" />
      </TouchableOpacity>
    </View>
  );

  const findContent = (text) => {
    setSearch(text);
  };

  return (
    <View style={{flex: 1}}>
      <TextInput
        onChangeText={(text) => findContent(text)}
        value={search}
        style={styles.search}
      />
      <Table borderStyle={{borderColor: 'transparent'}}>
        <Row data={headTable} style={styles.head} textStyle={styles.text} />
        {dataTable.map((rowData, index) => (
          <TableWrapper key={index} style={styles.row}>
            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex}
                data={cellIndex === 3 ? element(cellData, index) : cellData}
                textStyle={styles.text}
              />
            ))}
          </TableWrapper>
        ))}
      </Table>
      <Fab
        position="bottomRight"
        onPress={() => navigation.navigate('CreatePermit')}>
        <Icon name="plus" type="FontAwesome5" />
      </Fab>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  search: {
    borderWidth: 5,
    borderColor: 'black',
    width: Dimensions.get('window').width * 0.4,
    borderRadius: 20,
  },
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#808B97'},
  text: {margin: 6},
  row: {flexDirection: 'row', backgroundColor: '#FFF1C1'},
  btn: {width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2},
  btnText: {textAlign: 'center', color: '#fff'},
});

Permit.propTypes = propTypes;
Permit.defaultProps = defaultProps;

export default Permit;
