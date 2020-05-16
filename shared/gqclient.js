import React from 'react';

export async function getApplications() {
	const response = await fetch('http://192.168.93.225:3000/graphql', {
		method  : 'POST',
		headers : { 'Content-Type': 'application/json' },
		body    : JSON.stringify({
			query : `
            query {
                applications(appSponsorName:"abhideb") {
                    id,
                    userId,
                    appName,
                    appSponsorName,
                    appTeamContactInfo,
                    appDescription
                  }
            }
        `
		})
	});
	const data = await response.json();
	return data.data.applications;
}

export async function createApplication(application) {
	const response = await fetch('http://192.168.93.225:3000/graphql', {
		method  : 'POST',
		headers : { 'Content-Type': 'application/json' },
		body    : JSON.stringify({
			query : `
            mutation {
				createApplication(input:{
				  userId: 1,
				  appTeamContactInfo: "${application.appTeamContactInfo}",
                  appName: "${application.appName}",
                  appSponsorName: "${application.appSponsorName}",
                  appSponsorEmail: "${application.appSponsorEmail}",
                  appSponsorPhoneNumber: "${application.appSponsorPhoneNumber}",
                  appDescription: "${application.appDescription}",
                  targetDeviceModels: "${application.targetDeviceModels}",
                  authMethod: "${application.authMethod}",
                  vpnTunnelNeeded: "${application.vpnTunnelNeeded}",
                  networkAccessRequired: "${application.networkAccessRequired}",
                  securityScansCompleted: "${application.securityScansCompleted}",
                  deploymentDate:  "${application.deploymentDate}",
                  releaseCycle: "${application.releaseCycle}",
                  endUserGroups: "${application.endUserGroups}",
                  numberOfEndUsers: ${application.numberOfEndUsers},
                  mandatoryApplication: "${application.mandatoryApplication}",
                  addedSecurityStandards:  "${application.addedSecurityStandards}",
                  additionalComments: "${application.additionalComments}",
                  rating: 5,
				}){
					id,
                    userId,
                    appName,
                    appSponsorName,
                    appTeamContactInfo,
                    appDescription
				}
			  }
        `
		})
	});
	const data = await response.json();
	return data.data.applications;
}
