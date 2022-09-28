import { Button } from 'raz-ui';
import React, { useState } from 'react';
import { ReportForm } from '../components/Forms/ReportForm';
import { ReportFormFeilds, steps, report_form_feilds } from '../components/Forms/ReportForm.utils';
import { Wrapper } from '../components/Wrapper';
import papa from 'papaparse';
import axios from 'axios';
import { Navigator } from '../components/Navigator';

function sendToElastic(content: any) {
	axios.post('https://172.26.138.89:9200/test1/_doc', content, {
		auth: {
			username: 'elastic',
			password: 'azZ7j+aFPfDuD99yFHCX',
		},
		headers: {
			'Content-Type': 'application/json',
		},
	});
}

function downloadCsv(content: any) {
	const csv = papa.unparse([content], {});
	console.log(csv);
	const a = document.createElement('a');
	const file = new Blob([csv], { type: 'text/csv' });
	a.href = URL.createObjectURL(file);
	a.download = 'report.csv';
	a.click();
}

function downloadJson(content: string) {
	const a = document.createElement('a');
	const file = new Blob([content], { type: 'application/json' });
	a.href = URL.createObjectURL(file);
	a.download = 'report.json';
	a.click();
}

export const Report = () => {
	const [state, setState] = useState<ReportFormFeilds>(new ReportFormFeilds());
	const [errorSate, setErrorState] = useState<{ errors: { [type: string]: string } }>({ errors: {} });
	const [active, setActive] = useState(0);

	// function checkReuired(form: ReportFormFeilds) {
	// 	Object.entries(form).map((item) => {
	// 		//@ts-ignore
	// 		if (report_form_feilds[form[item[0]]].required) {
	// 			//@ts-ignore
	// 			if (!form[item[0]]) {
	// 				//@ts-ignore
	// 				setErrorState({
	// 					errors: { ...errorSate.errors, [item[0].replace(/\s/g, '')]: 'this field is required' },
	// 				});
	// 			}
	// 		}
	// 	});
	// }
	// console.log(errorSate);
	// checkReuired(state);
	return (
		<>
			<Wrapper title="Report Wizard">
				<Navigator steps={steps} active={active} setActive={setActive} />
				<ReportForm
					form={state}
					errors={errorSate}
					onChange={(form) => setState(form)}
					activeWizard={active}
					goNext={() => {
						if (active == 2) return;
						setActive(active + 1);
						setTimeout(() => {
							window.scrollTo({ behavior: 'smooth', left: 0, top: 0 });
						}, 200);
					}}
					goPervious={() => {
						if (active === 0) return;
						setActive(active - 1);
						setTimeout(() => {
							window.scrollTo({ behavior: 'smooth', left: 0, top: 0 });
						}, 200);
					}}
				/>
				{}
				<div className="full-width text-center text-center my-3">
					<Button
						color="light"
						className="py-2 px-3 mx-2 fw-600 mt-2"
						onClick={() => {
							downloadCsv(state);
						}}>
						Download CSV
					</Button>
					<Button
						color="light"
						className="py-2 px-3 mx-2 fw-600  mt-2"
						onClick={() => {
							downloadJson(JSON.stringify(state));
						}}>
						Download Json
					</Button>
					<Button
						color="success"
						className="py-2 px-3 mr-4 ml-2 fw-600  mt-2"
						onClick={() => {
							sendToElastic(state);
						}}>
						Send To Elastic
					</Button>
				</div>
			</Wrapper>
		</>
	);
};
