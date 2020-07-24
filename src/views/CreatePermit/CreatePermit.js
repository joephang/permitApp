import * as React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {TextInput} from 'react-native-gesture-handler';
import {Content, DatePicker} from 'native-base';

const propTypes = {
  FetchToken: PropTypes.func.isRequired,
  auth: PropTypes.any.isRequired,
};

const defaultProps = {
  auth: null,
};

const CreatePermit = () => {
  const [areaKerja, setAreaKerja] = React.useState('');
  const [lokasi, setLokasi] = React.useState('');
  const [uraian, setUraian] = React.useState('');
  const [durasiAwal, setDurasiAwal] = React.useState(new Date());
  const [durasiAkhir, setDurasiAkhir] = React.useState(new Date());

  return (
    <Content>
      <View>
        <View style={style.flexCenter}>
          <Text>Area Kerja</Text>
          <TextInput
            value={areaKerja}
            onChangeText={(text) => setAreaKerja(text)}
            style={style.textInput}
          />
        </View>
        <View style={style.flexCenter}>
          <Text>Lokasi/JN</Text>
          <TextInput
            value={lokasi}
            onChangeText={(text) => setLokasi(text)}
            style={style.textInput}
          />
        </View>
        <View style={style.flexCenter}>
          <Text>Uraian</Text>
          <TextInput
            value={uraian}
            onChangeText={(text) => setUraian(text)}
            multiline={true}
            style={style.areaInput}
          />
        </View>
        <View style={style.flexCenter}>
          <Text>Durasi</Text>
          <DatePicker
            defaultDate={durasiAwal}
            minimumDate={new Date()}
            maximumDate={new Date(2040, 12, 31)}
            locale={'en'}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={'fade'}
            androidMode={'default'}
            placeHolderText="Awal"
            textStyle={{color: 'green'}}
            placeHolderTextStyle={{color: '#d3d3d3'}}
            onDateChange={(date) => setDurasiAwal(date)}
            disabled={false}
          />
          <DatePicker
            defaultDate={durasiAkhir}
            minimumDate={new Date()}
            maximumDate={new Date(2040, 12, 31)}
            locale={'en'}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={'fade'}
            androidMode={'default'}
            placeHolderText="Akhir"
            textStyle={{color: 'green'}}
            placeHolderTextStyle={{color: '#d3d3d3'}}
            onDateChange={(date) => setDurasiAkhir(date)}
            disabled={false}
          />
        </View>
      </View>
    </Content>
  );
};

const style = StyleSheet.create({
  textInput: {
    borderWidth: 3,
    borderColor: 'black',
    width: Dimensions.get('window').width * 0.4,
    marginLeft: Dimensions.get('window').width * 0.03,
    marginTop: Dimensions.get('window').width * 0.04,
  },
  areaInput: {
    borderWidth: 3,
    borderColor: 'black',
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').height * 0.2,
    marginLeft: Dimensions.get('window').width * 0.03,
    marginTop: Dimensions.get('window').width * 0.04,
  },
  flexCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

CreatePermit.propTypes = propTypes;
CreatePermit.defaultProps = defaultProps;

export default CreatePermit;
