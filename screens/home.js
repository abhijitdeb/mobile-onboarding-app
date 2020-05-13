import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
//import Modal from "modal-react-native-web";
import { globalStyles } from '../styles/global';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import IntakeForm from '../screens/intakeForm';
import { getApplications } from '../shared/gqclient';

export default function Home({ navigation }) {
	const [ apps, setApps ] = useState();
	const [ fetchApps, setFetchApps ] = useState(true);
	const [ openModal, setOpenModal ] = useState(false);

	if (fetchApps) {
		getApplications()
			.then((apps) => {
				setFetchApps(false);
				setApps(apps);
			})
			.catch((err) => console.error(err));
	}

	const pressHandler = () => {
		navigation.push('IntakeForm');
	};

	const addApp = (app) => {
		app.id = Math.random().toString();
		setApps((currentApps) => {
			return [ app, ...currentApps ];
		});
		setOpenModal(false);
	};

	return (
		<View style={globalStyles.container}>
			<Modal visible={openModal} animationType="slide">
				<TouchableWithoutFeedback onPress={Platform.OS != 'web' ? Keyboard.dismiss : {}}>
					<View style={homeStyles.modalContent}>
						<MaterialIcons
							name="close"
							size={24}
							style={{
								...homeStyles.modalToggle,
								...homeStyles.modalClose
							}}
							onPress={() => setOpenModal(false)}
						/>
						<IntakeForm addApp={addApp} />
					</View>
				</TouchableWithoutFeedback>
			</Modal>
			<MaterialIcons name="add" size={24} style={homeStyles.modalToggle} onPress={() => setOpenModal(true)} />
			<FlatList
				keyExtractor={(item) => item.id.toString()}
				data={apps}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => navigation.navigate('IntakeDetails', item)}>
						<Card>
							<Text style={globalStyles.titleText}>{item.appName}</Text>
						</Card>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}

const homeStyles = StyleSheet.create({
	modalToggle  : {
		marginBottom   : 10,
		borderWidth    : 1,
		borderColor    : '#f2f2f2',
		padding        : 10,
		borderRadius   : 10,
		alignSelf      : 'center',
		justifyContent : 'center',
		alignItems     : 'center'
	},
	modalClose   : {
		marginTop      : 20,
		marginBottom   : 0,
		alignSelf      : 'center',
		justifyContent : 'center',
		alignItems     : 'center'
	},
	modalContent : {
		flex : 1
	}
});
