import React, {useState} from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {makeStyles} from "@material-ui/core";
import {Redirect, withRouter} from 'react-router-dom';
import locations from "../locations";
import Link from "@material-ui/core/Link";

function tabProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  }
}

function TabBar(props) {
  const [value, setValue] = useState(0);
  const { match, location, history } = props;
  const classes = styles();
  const [redirect, setRedirect] = useState(false);

  const handleChange = (event, value) => {
    setValue(value);
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect push to={"/budget"} />
  }

  return (
    <div className={classes.tabbarContainer} >
      <Tabs
        orientation={"vertical"}
        variant={"scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabbarContainer}
        indicatorColor={"primary"}
        textColor={"primary"}
      >
        <Tab label={"Home"} {...tabProps(0)} >
        </Tab>
        <Tab label={"Budget"} {...tabProps(1)} >
        </Tab>
      </Tabs>
    </div>
  )
}

const styles = makeStyles({
  tabbarContainer: {
    height: '100%',
    backgroundColor: "#121212"
  }
});

export default withRouter(TabBar);