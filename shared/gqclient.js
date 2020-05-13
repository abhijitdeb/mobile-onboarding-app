import React from 'react';

export async function getApplications() {
	const response = await fetch('http://192.168.83.1:3000/graphql', {
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
