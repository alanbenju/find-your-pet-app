import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { FAB, Text } from 'react-native-paper'
// add the following statement
import Header from '../components/Header'
import MapView, { Circle, PROVIDER_GOOGLE, Polygon } from 'react-native-maps';
import { connect } from 'react-redux';
import { onChangeRegion, addCircle, setCircle } from '../redux/actions/test'

function Map(props) {
    const {
        navigation, circle, region, changeRegion, addNewCircle, removePolygon
    } = props;

    const finish = () => {
        navigation.navigate("Pets")
    }

    console.log(circle)

    return (
        <>
            <View style={styles.container}>
                <Header titleText={"Donde lo encontraste?"} style={styles.header}></Header>
                <MapView
                    region={region}
                    style={styles.map}
                    onRegionChangeComplete={changeRegion}
                    provider={PROVIDER_GOOGLE}>
                    {circle &&
                        <View>
                            <Circle
                                center={region}
                                fillColor='rgba(147,193,240,0.3)'
                                strokeColor='black'
                                radius={500}>
                            </Circle>
                        </View>
                    }
                </MapView>
                <View style={styles.btns}>
                    <FAB
                        style={circle ? styles.fabGreen : styles.fab}
                        small
                        icon={circle ? 'check' : 'plus'}
                        label={circle ? 'Finalizar' : 'Marcar zona'}
                        onPress={() => circle ? finish() : addNewCircle(region)}
                    />
                </View>
            
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    map: {
        flex: 1,
    },
    header: {
        justifyContent: "center",
        alignContent: "center"
    },
    btns: {
    },
    fab: {
        position: "absolute",
        margin: 20,
        right: 0,
        bottom: 10,
        width: 200,
        backgroundColor: "#1a66ff"
    },
    fabGreen: {
        position: "absolute",
        margin: 20,
        right: 0,
        bottom: 10,
        width: 160,
        backgroundColor: "green"
    },
})

const mapStateToProps = ({
    testReducer,
}) => ({
    circle: testReducer['circle'],
    region: testReducer['region'],
});

const mapDispatchToProps = dispatch => ({
    changeRegion: (region) => {
        dispatch(onChangeRegion(region));
    },
    addNewCircle: (region) => {
        dispatch(addCircle(region))
    },
    finish: () => {
        dispatch(setCircle())
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Map);


