import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import Grow from "@material-ui/core/Grow";

const Mui = () => {
const [isChecked, setIsChecked] = React.useState(false);

return (
	<div style={{ display: "block", padding: 30 }}>
	<h4>How to use Grow Component in ReactJS?</h4>
	{/* <FormControlLabel
		control={
		<Switch
			checked={isChecked}
			onChange={() => {
			setIsChecked((prev) => !prev);
			}}
		/>
		}
		label="Toggle me to see Grow Effect"
	/> */}
	<div style={{ display: "flex" }}>
		<Grow in={true}>
			<p>height</p>
		</Grow>
	</div>
	</div>
);
}


export default Mui;