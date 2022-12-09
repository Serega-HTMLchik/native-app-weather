import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TouchableOpacity } from 'react-native';
import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getDataMoscow, getDataVoronezh, getDataRostov } from '../Redux/features/screen/screenSlice';
import { DataTable } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';

function CityScreen(props) {
    const dispatch = useDispatch()
    const City = useSelector((state) => state.screen.City)
    const nowDate = useSelector((state) => state.screen.nowDate)
    const dayData = useSelector((state) => state.screen.day)
    const eveningData = useSelector((state) => state.screen.evening)
    const nightData = useSelector((state) => state.screen.night)
    const morningData = useSelector((state) => state.screen.morning)
    const time = useSelector((state) => state.screen.time)
    function btnPres() {
        if (props.cityProps == 'msc') {
            dispatch(getDataMoscow())
        }
        else if (props.cityProps == 'vrn') {
            dispatch(getDataVoronezh())
        }
        else if (props.cityProps == 'rnd') {
            dispatch(getDataRostov())
        }

    }
    let styleBg
    if (time >= 17 || time <= 7) {
        styleBg = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#000',
                alignItems: 'center',
                opacity: 0.9,
                justifyContent: 'center',
                accessibilityElementsHidden: true,
                color: '#fff',
            },
        })
    } else {
        styleBg = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#000',
                alignItems: 'center',
                opacity: 0.2,
                justifyContent: 'center',
                accessibilityElementsHidden: true,
                color: '#fff',
            },
        })
    }
    useFocusEffect(useCallback(() => {
        btnPres()
    }, []));
    useEffect(() => {
        btnPres()

    }, [])
    return (
        <>
            <View style={styleBg.container}>
                <Text style={styles.title}>{City}</Text>
                <Text style={styles.subtitle}>{nowDate}</Text>
                {/* <TouchableOpacity style={styles.btn}>
                    <Text style={{ color: '#fff', textAlign: 'center' }} onPress={btnPres}>Обновить</Text>
                </TouchableOpacity> */}

                <StatusBar
                    animated={true}
                    backgroundColor="#fff"
                    barStyle="#ffffff" />
            </View>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title style={styles.title}>Время</DataTable.Title>
                    <DataTable.Title style={styles.title}>Ощущается как</DataTable.Title>
                    <DataTable.Title style={styles.title} numeric>Средняя температура</DataTable.Title>
                    <DataTable.Title style={styles.title} numeric>Скорость ветра</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>День</DataTable.Cell>
                    <DataTable.Cell style={styles.columnCell}>{dayData.feels_like}</DataTable.Cell>
                    <DataTable.Cell style={styles.columnCell}>{dayData.temp_avg}</DataTable.Cell>
                    <DataTable.Cell style={styles.columnCell}>{dayData.wind_speed}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Вечер</DataTable.Cell>
                    <DataTable.Cell style={styles.columnCell}>{eveningData.feels_like}</DataTable.Cell>
                    <DataTable.Cell style={styles.columnCell}>{eveningData.temp_avg}</DataTable.Cell>
                    <DataTable.Cell style={styles.columnCell}>{eveningData.wind_speed}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Ночь</DataTable.Cell>
                    <DataTable.Cell style={styles.columnCell}>{nightData.feels_like}</DataTable.Cell>
                    <DataTable.Cell style={styles.columnCell}>{nightData.temp_avg}</DataTable.Cell>
                    <DataTable.Cell style={styles.columnCell}>{nightData.wind_speed}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>Утро</DataTable.Cell>
                    <DataTable.Cell style={styles.columnCell}>{morningData.feels_like}</DataTable.Cell>
                    <DataTable.Cell style={styles.columnCell}>{morningData.temp_avg}</DataTable.Cell>
                    <DataTable.Cell style={styles.columnCell}>{morningData.wind_speed}</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        opacity: 0.3,
        justifyContent: 'center',
        accessibilityElementsHidden: true,
        color: '#fff',
    },
    columnCell: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
    },
    scrol: {
        backgroundColor: '#000',
        height: '20%'
    },
    title: {
        color: '#fff',
        fontSize: '40px',
    },
    subtitle: {
        color: '#fff',
        fontSize: '18px',
    },
    button: {
        borderColor: '#ff0000',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#1E6738',
    },
    loginText: {
        backgroundColor: '#000',
    }

});

export default CityScreen;