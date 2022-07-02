import React from "react";
import styled from "styled-components";
import { Tab } from "./Tabs";
import { TabPanel } from "./Tabs";
import { Tabs } from "./Tabs";
import { useState } from "react";
import styles from "./TabsPRD3.module.css";

function TabsPRD3(props) {
  return (
    <div className={styles.TabsContainer}>
      <Tabs selectedTab={props.activeTab} onChange={props.handleChange}>
        <Tab label="GATE" value={0}></Tab>
        <Tab label="CFTRI" value={1}></Tab>
        <Tab label="CFS/SO" value={2}></Tab>
        <Tab label="ICAR" value={3}></Tab>
      </Tabs>
    </div>
  );
}

export default TabsPRD3;
