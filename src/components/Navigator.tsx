import { Button, Card } from 'raz-ui';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export const Navigator: FunctionComponent<{ steps: string[]; active: number; setActive: (active: number) => void }> = ({
	steps,
	active,
	setActive,
}) => (
	<>
		<Card className=" mt-4 full-width navigation-display">
			{steps.map((step, index) => (
				<>
					<Button
						onClick={() => setActive(index)}
						layout="clear"
						color={active === index ? 'primary' : 'text'}
						className="fs-16 fw-600 "
						key={step}>
						{step}
					</Button>
					{index + 1 < steps.length && (
						<>
							<div className="grow raz-border-bottom navigation-line" mt-3 />
							<span className="navigation-arrow-display  navigation-line">{'>'}</span>
						</>
					)}
				</>
			))}
		</Card>
	</>
);
