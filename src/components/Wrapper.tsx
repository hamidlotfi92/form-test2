import { Button, Card } from 'raz-ui';
import React, { FunctionComponent, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

export const Wrapper: FunctionComponent<PropsWithChildren<{ title: string }>> = ({ children, title }) => (
	<>
		<div className="container raz-bg-gray min-full-height raz-flex raz-flex-col">
			<div className="raz-bg-card py-2">
				<div className="content mx-auto raz-flex align-items-center raz-gap-10 px-2">
					<Link to="/">
						<div>
							<img src="/assets/images/logo.png" width={80} className="mt-2" />
						</div>
					</Link>
					<Link to="/report">
						<Button layout="clear" color="light" className="py-2 px-3">
							Report Form
						</Button>
					</Link>
					<Link to="/setting">
						<Button layout="clear" color="light" className="py-2 px-3">
							Setting
						</Button>
					</Link>
				</div>
			</div>
			<div className="content mx-auto mt-3 grow">
				<h2 className="fs-14 fs-sm-16 px-2">{title}</h2>
				<Card color="card" className="px-4 py-1">
					{children}
				</Card>
			</div>
			<div className="raz-bg-card py-2 mt-3 mt-sm-4 mt-md-5">
				<div className="content mx-auto raz-flex align-items-center raz-gap-10">
					<div>
						<img src="/assets/images/logo.png" width={80} className="mt-2" />
					</div>
					<p>All Rights Reserved</p>
					<p>2022</p>
				</div>
			</div>
		</div>
	</>
);
