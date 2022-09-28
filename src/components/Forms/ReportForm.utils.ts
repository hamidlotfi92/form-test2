// export type ReportFormFeilds = {
// 	'Date of Writing the Report'?: Date | null;
// 	'Registration Number of Report'?: string;
// 	'Author of the Report'?: string;
// 	'Final Reviewer of the Report'?: string;
// 	'Report Approval State'?: string;
// 	'Incident Time (ISO 8601)'?: Date | null;
// 	'Impact Duration of the Incident'?: Date | null;
// 	'Incident Anomaly Score'?: string;
// 	'Impact Area of the Incident'?: string;
// 	'Side Effects of the Incident'?: string;
// 	'Incident Sensitivity'?: string;
// 	'Start Time of the Incident'?: Date | null;
// 	'End Time of the Incident'?: Date | null;
// 	'Incident Duration'?: Date | null;
// 	'DRP Standard'?: string;
// 	'Incident Type'?: string;
// 	'Incident Category According to Incident Type'?: string;
// 	'Attack Type'?: string;
// 	'The Significance of the Attack based on Type and Impact'?: string;
// 	'Type of Attack Destination IP Addresses'?: string;
// 	'Distinct Count of Destination IP Addresses Used as Attack Targets'?: string;
// 	'Type of Attack Source IP Addresses'?: string;
// 	'Distinct Count of Source IP Addresses Used in the Attack'?: string;
// 	'Type of Attack Destination Ports Number'?: string;
// 	'Distinct Count of Destination Ports Number Used as Attack Targets'?: string;
// 	'Type of Attack Source Ports Number'?: string;
// 	'Distinct Count of Source Ports Number Used in the Attack'?: number;
// 	'ISPs Name of the Attack Target'?: string;
// 	'ASNs of the Attack Target'?: string;
// 	'Is an Attack Launched as an Asymmetric'?: string;
// 	'Does the attack act as an Advanced Persistent DDoS Attack'?: string;
// 	'Have the Attack Reflected After It Occurs'?: string;
// 	'The Coefficient of Reflected Traffic Compared to the Initial Attack'?: string;
// 	'Attack Volume (Bit/ps)'?: number;
// 	'Attack Volume (PPS)'?: number;
// 	'The Cumulative Sum of Attack Traffic Based on Attack Duration (Byte)'?: number;
// 	'The Cumulative Sum of Attack Volume Based on Attack Duration (PPS)'?: number;
// };
export class ReportFormFeilds {
	'General Information of Report ID'?: string | null = '';
	'Date of Writing the Report'?: Date | string | null = new Date().toISOString().slice(0, 10);
	'Registration Number of Report'?: string | null = '';
	'Author of the Report'?: string | null = '';
	'Final Reviewer of the Report'?: string | null = '';
	'Report Approval State'?: string | null = '';
	'Incident Time (ISO 8601)'?: Date | string | null = new Date().toISOString().slice(0, 10);
	'Impact Duration of the Incident'?: Date | string | null = new Date().toISOString().slice(0, 10);
	'Incident Anomaly Score'?: string | null = '';
	'Impact Area of the Incident'?: string | null = '';
	'Side Effects of the Incident'?: string | null = '';
	'Incident Sensitivity'?: string | null = '';
	'Start Time of the Incident'?: Date | string | null = new Date().toISOString().slice(0, 10);
	'End Time of the Incident'?: Date | string | null = new Date().toISOString().slice(0, 10);
	'Incident Duration'?: Date | string | null = new Date().toISOString().slice(0, 10);
	'DRP Standard'?: string | null = '';
	'Incident Type'?: string | null = '';
	'Incident Category According to Incident Type'?: string | null = '';
	'Attack Type'?: string | null = '';
	'The Significance of the Attack based on Type and Impact'?: string | null = '';
	'Type of Attack Destination IP Addresses'?: string | null = '';
	'Distinct Count of Destination IP Addresses Used as Attack Targets'?: string | null = '';
	'Type of Attack Source IP Addresses'?: string | null = '';
	'Distinct Count of Source IP Addresses Used in the Attack'?: string | null = '';
	'Type of Attack Destination Ports Number'?: string | null = '';
	'Distinct Count of Destination Ports Number Used as Attack Targets'?: string | null = '';
	'Type of Attack Source Ports Number'?: string | null = '';
	'Distinct Count of Source Ports Number Used in the Attack'?: number | null = 0;
	'ISPs Name of the Attack Target'?: string | null = '';
	'ASNs of the Attack Target'?: string | null = '';
	'Is an Attack Launched as an Asymmetric'?: string | null = '';
	'Does the attack act as an Advanced Persistent DDoS Attack'?: string | null = '';
	'Have the Attack Reflected After It Occurs'?: string | null = '';
	'The Coefficient of Reflected Traffic Compared to the Initial Attack'?: string | null = '';
	'Attack Volume (Bit/ps)'?: number | null = 0;
	'Attack Volume (PPS)'?: number | null = 0;
	'The Cumulative Sum of Attack Traffic Based on Attack Duration (Byte)'?: number | null = 0;
	'The Cumulative Sum of Attack Volume Based on Attack Duration (PPS)'?: number | null = 0;
}

export type ReportFormType = {
	form: ReportFormFeilds;
	onChange: (form: ReportFormFeilds) => void;
	goNext: () => void;
	goPervious: () => void;
	activeWizard: number;
	errors: { errors: { [type: string]: string } };
};

export const report_form_feilds: { label: string; type: string; required: boolean }[] = [
	{ label: 'Date of Writing the Report ID', required: false, type: 'date' },
	{ label: 'Registration Number of Report', required: false, type: 'string' },
	{ label: 'Author of the Report', required: false, type: 'string' },
	{ label: 'Final Reviewer of the Report', required: false, type: 'string' },
	{ label: 'Report Approval State', required: false, type: 'string' },
	{ label: 'Incident Time (ISO 8601)', required: false, type: 'date' },
	{ label: 'Impact Duration of the Incident', required: false, type: 'date' },
	{ label: 'Incident Anomaly Score', required: false, type: 'string' },
	{ label: 'Impact Area of the Incident', required: false, type: 'string' },
	{ label: 'Side Effects of the Incident', required: false, type: 'string' },
	{ label: 'Incident Sensitivity', required: false, type: 'string' },
	{ label: 'Start Time of the Incident', required: false, type: 'date' },
	{ label: 'End Time of the Incident', required: false, type: 'date' },
	{ label: 'Incident Duration', required: false, type: 'date' },
	{ label: 'DRP Standard', required: false, type: 'string' },
	{ label: 'Incident Type', required: false, type: 'string' },
	{ label: 'Incident Category According to Incident Type', required: false, type: 'string' },
	{ label: 'Attack Type', required: false, type: 'string' },
	{ label: 'The Significance of the Attack based on Type and Impact', required: false, type: 'string' },
	{ label: 'Type of Attack Destination IP Addresses', required: false, type: 'string' },
	{ label: 'Distinct Count of Destination IP Addresses Used as Attack Targets', required: false, type: 'string' },
	{ label: 'Type of Attack Source IP Addresses', required: false, type: 'string' },
	{ label: 'Distinct Count of Source IP Addresses Used in the Attack', required: false, type: 'string' },
	{ label: 'Type of Attack Destination Ports Number', required: false, type: 'string' },
	{ label: 'Distinct Count of Destination Ports Number Used as Attack Targets', required: false, type: 'string' },
	{ label: 'Type of Attack Source Ports Number', required: false, type: 'string' },
	{ label: 'Distinct Count of Source Ports Number Used in the Attack', required: false, type: 'number' },
	{ label: 'ISPs Name of the Attack Target', required: false, type: 'string' },
	{ label: 'ASNs of the Attack Target', required: false, type: 'string' },
	{ label: 'Is an Attack Launched as an Asymmetric', required: false, type: 'string' },
	{ label: 'Does the attack act as an Advanced Persistent DDoS Attack', required: false, type: 'string' },
	{ label: 'Have the Attack Reflected After It Occurs', required: false, type: 'string' },
	{ label: 'The Coefficient of Reflected Traffic Compared to the Initial Attack', required: false, type: 'string' },
	{ label: 'Attack Volume (Bit/ps)', required: false, type: 'number' },
	{ label: 'Attack Volume (PPS)', required: false, type: 'number' },
	{ label: 'The Cumulative Sum of Attack Traffic Based on Attack Duration (Byte)', required: false, type: 'number' },
	{ label: 'The Cumulative Sum of Attack Volume Based on Attack Duration (PPS)', required: false, type: 'number' },
];

export const report_form_groups: {
	label: string;
	feilds: {
		label: string;
		type: string;
		component?: string;
		options?: { label: string; value: string }[];
	}[];
}[] = [
	{
		label: 'General Information of Report',
		feilds: [
			{ label: 'General Information of Report ID', type: 'string', component: 'input' },
			{ label: 'Date of Writing the Report', type: 'datetime-local', component: 'input' },
			{ label: 'Registration Number of Report', type: 'string', component: 'input' },
			{ label: 'Author of the Report', type: 'string', component: 'input' },
			{ label: 'Final Reviewer of the Report', type: 'string', component: 'input' },
			{
				label: 'Report Approval State',
				type: 'string',

				component: 'switch',
				options: [
					{ label: 'Denied', value: 'denied' },
					{ label: 'Approved', value: 'approved' },
				],
			},
		],
	},
	{
		label: 'Initial Incident Details',
		feilds: [
			{ label: 'Incident Time (ISO 8601)', type: 'datetime-local', component: 'input' },
			{ label: 'Impact Duration of the Incident', type: 'datetime-local', component: 'input' },
			{ label: 'Incident Anomaly Score', type: 'string', component: 'input' },
			{ label: 'Impact Area of the Incident', type: 'string', component: 'input' },
			{ label: 'Side Effects of the Incident', type: 'string', component: 'input' },
			{
				label: 'Incident Sensitivity',
				type: 'string',

				component: 'choose',
				options: [
					{ label: 'Low', value: 'low' },
					{ label: 'Medium', value: 'medium' },
					{ label: 'High', value: 'high' },
				],
			},
		],
	},
	{
		label: 'Detailed Incident Information',
		feilds: [
			{ label: 'Start Time of the Incident', type: 'datetime-local', component: 'input' },
			{ label: 'End Time of the Incident', type: 'datetime-local', component: 'input' },
			{ label: 'Incident Duration', type: 'datetime-local', component: 'input' },
			{ label: 'DRP Standard', type: 'string', component: 'input' },
			{ label: 'Incident Type', type: 'string', component: 'input' },
			{
				label: 'Incident Category According to Incident Type',
				type: 'string',

				component: 'input',
			},
			{ label: 'Attack Type', type: 'string', component: 'input' },
			{
				label: 'The Significance of the Attack based on Type and Impact',
				type: 'string',

				component: 'input',
			},
			{ label: 'Type of Attack Destination IP Addresses', type: 'string', component: 'input' },
			{
				label: 'Distinct Count of Destination IP Addresses Used as Attack Targets',
				type: 'string',

				component: 'input',
			},
			{ label: 'Type of Attack Source IP Addresses', type: 'string', component: 'input' },
			{
				label: 'Distinct Count of Source IP Addresses Used in the Attack',
				type: 'string',

				component: 'input',
			},
			{ label: 'Type of Attack Destination Ports Number', type: 'string', component: 'input' },
			{
				label: 'Distinct Count of Destination Ports Number Used as Attack Targets',
				type: 'string',

				component: 'input',
			},
			{ label: 'Type of Attack Source Ports Number', type: 'string', component: 'input' },
			{
				label: 'Distinct Count of Source Ports Number Used in the Attack',
				type: 'number',

				component: 'input',
			},
			{ label: 'ISPs Name of the Attack Target', type: 'string', component: 'input' },
			{ label: 'ASNs of the Attack Target', type: 'string', component: 'input' },
			{ label: 'Is an Attack Launched as an Asymmetric', type: 'string', component: 'input' },
			{
				label: 'Does the attack act as an Advanced Persistent DDoS Attack',
				type: 'string',

				component: 'input',
			},
			{ label: 'Have the Attack Reflected After It Occurs', type: 'string', component: 'input' },
			{
				label: 'The Coefficient of Reflected Traffic Compared to the Initial Attack',
				type: 'string',

				component: 'input',
			},
			{ label: 'Attack Volume (Bit/ps)', type: 'number', component: 'input' },
			{ label: 'Attack Volume (PPS)', type: 'number', component: 'input' },
			{
				label: 'The Cumulative Sum of Attack Traffic Based on Attack Duration (Byte)',
				type: 'number',

				component: 'input',
			},
			{
				label: 'The Cumulative Sum of Attack Volume Based on Attack Duration (PPS)',
				type: 'number',

				component: 'input',
			},
			{
				label: 'The Most Important Effects of the Attack on the Destination',
				type: 'string',

				component: 'input',
			},
		],
	},
];

export const steps = report_form_groups.map((group) => group.label);
