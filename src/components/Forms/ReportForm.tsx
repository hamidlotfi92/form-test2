import { Button, Input, Select, Switch } from 'raz-ui';
import React, { FunctionComponent, PropsWithChildren } from 'react';
import { ReportFormType, report_form_groups } from './ReportForm.utils';

export const ReportForm: FunctionComponent<PropsWithChildren<ReportFormType>> = ({
	form,
	activeWizard,
	onChange,
	goNext,
	goPervious,
	errors,
}) => (
	<>
		<form className="full-width">
			<h3 className="mx-4 px-3 mt-md-5">{report_form_groups[activeWizard].label}</h3>
			<div className="raz-row raz-row--flex raz-flex-wrap raz-gap-20 align-items-center raz-justify-center">
				{report_form_groups[activeWizard].feilds.map((f) => (
					<div
						className="raz-col-24 raz-col-sm-24 raz-col-md-11 raz-col-lg-7 raz-col-xl-7 raz-flex align-items-end"
						key={f.label}>
						{f.component === 'switch' && f.options && (
							<div className="full-width raz-flex raz-flex-col align-items-center raz-space-between pb-5">
								<span className="full-width fs-14">{f.label}</span>
								<div className="raz-flex mt-5">
									{f.options && <span className="">{f.options[0].label}</span>}

									<Switch
										value={(form as any)[f.label] === f.options[1].label}
										onChange={(e) => {
											f.options &&
												onChange({
													...form,
													[f.label]: e ? f.options[1].label : f.options[0].label,
												});
										}}
									/>
									{f.options && <span className="ml-2">{f.options[1].label}</span>}
								</div>
							</div>
						)}
						{f.component === 'choose' && f.options && (
							<div className="full-width  pb-4">
								<span>{f.label}</span>
								<div className="mt-4 raz-flex raz-justify-center raz-gap-20 pb-2">
									{f.options.map((option, index) => {
										return (
											<Button
												key={'btn' + index}
												className="fw-600 fs-14 fs-sm-16 py-2 px-2"
												height="3rem"
												color={(form as any)[f.label] === option.value ? 'primary' : 'dark'}
												onClick={(e) => {
													e.preventDefault();
													onChange({ ...form, [f.label]: option.value });
												}}>
												{option.label}
											</Button>
										);
									})}
								</div>
							</div>
						)}

						{f.component === 'select' && f.options && (
							<div className="full-width  pb-4">
								<span>{f.label}</span>
								<Select
									placeholder={'Can not be empty'}
									color="dark"
									width="100%"
									height="38px"
									onChange={(e: any) => {
										onChange({ ...form, [f.label]: e.target.value });
									}}
									options={f.options?.map((option) => option)}
								/>
							</div>
						)}
						{f.component === 'input' && (
							<Input
								clear
								type={f.type}
								label={f.label}
								error={errors.errors[f.label.replace(/\s/g, '')]}
								width="100%"
								height="20px"
								inputClass="py-3 my-4 outline-0 border-radius-5 datepicker-input"
								className="full-width"
								value={(form as any)[f.label]}
								min={0}
								onChange={(e) => {
									onChange({ ...form, [f.label]: e.target.value });
								}}
							/>
						)}
					</div>
				))}
			</div>
		</form>
		<div className="raz-flex raz-justify-center raz-gap-15 my-4 my-sm-4 my-md-4 my-lg-5">
			<Button className="px-3 py-2" width="100px" color="gray" onClick={goPervious} disabled={activeWizard === 0}>
				Pervious
			</Button>
			<Button className="px-3 py-2" width="100px" onClick={goNext} disabled={activeWizard === 2}>
				Next
			</Button>
		</div>

		{/* <form className="full-width">
			<h3 className="mx-4 px-3">Report Form</h3>
			<div className="raz-row raz-row--flex raz-flex-wrap raz-gap-20 align-items-center raz-justify-center">
				{report_form_feilds.map((f) => (
					<div className="raz-col-24 raz-col-sm-24 raz-col-md-11 raz-col-lg-11 raz-col-xl-11" key={f.label}>
						<Input
							type={f.type}
							label={f.label}
							width="100%"
							className="full-width"
							placeholder="Date of Writing the Report"
							value={(form as any)[f.label]}
							onChange={(e) => {
								onChange({ ...form, [f.label]: e.target.value });
							}}
						/>
					</div>
				))}
			</div>
		</form> */}
	</>
);
