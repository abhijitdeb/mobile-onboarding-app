import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
//import Modal from "modal-react-native-web";
import { globalStyles } from '../styles/global';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import IntakeForm from '../screens/intakeForm';
import { getApplications, createApplication } from '../shared/gqclient';

export default function Home({ navigation }) {
	const [ apps, setApps ] = useState();
	const [ fetchApps, setFetchApps ] = useState(true);
	const [ openModal, setOpenModal ] = useState(false);

	const testAddApp = () => {
		var application = {
			appTeamContactInfo     : 'Test-2',
			appName                : 'Test-2',
			appSponsorName         : 'Test-2',
			appSponsorEmail        : 'test@test.com',
			appSponsorPhoneNumber  : '7034488832',
			appDescription         : 'Test-2',
			appType                : [
				{ title: 'Public Store App', checked: false },
				{ title: 'Internal / Custom App', checked: false },
				{ title: 'Web link', checked: false }
			],
			appSource              : [
				{ title: 'Google Play', checked: false },
				{ title: 'iTunes', checked: false },
				{ title: 'Internal Repository', checked: false }
			],
			appIdentifier          : '',
			networkPorts           : '',
			phoneManufacturer      : [
				{ title: 'Android', checked: false },
				{ title: 'iOS', checked: false },
				{ title: 'Sonim', checked: false }
			],
			targetDeviceModels     : 'Test 2',
			authMethod             : 'Test 2',
			vpnTunnelNeeded        : 'Test 2',
			networkAccessRequired  : 'Test 2',
			functionalTesting      : [
				{ title: 'Impact On Battery', checked: false },
				{ title: 'Impact On Memory', checked: false },
				{ title: 'Impact On Storage', checked: false },
				{
					title   : 'Impact On Device Performance',
					checked : false
				},
				{
					title   : 'Accessibility Testing (Section 508)',
					checked : false
				}
			],
			securityScansCompleted : 'Test 2',
			uatSucceeded           : [ { title: 'Yes', checked: false }, { title: 'No', checked: true } ],
			deploymentDate         : '05/11/2020',
			releaseCycle           : '',
			pilotDeployment        : [ { title: 'Yes', checked: false }, { title: 'No', checked: true } ],
			endUserGroups          : 'Test 2',
			numberOfEndUsers       : 100,
			mandatoryApplication   : 'Test 2',
			addedSecurityStandards : 'Test 2',
			additionalComments     : 'Test 2',
			rating                 : 5
		};

		createApplication(application)
			.then((apps) => {
				console.log(apps);
			})
			.catch((err) => console.error(err));
	};

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

	const addApp = (application) => {
		createApplication(application)
			.then((app) => {
				console.log(app);
				setOpenModal(false);
				setFetchApps(true);
			})
			.catch((err) => console.error(err));
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
