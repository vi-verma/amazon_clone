import React, { useState } from "react";
import { Drawer, Button, Space } from "antd";
import { UserOutlined, RightOutlined, DownOutlined, LeftOutlined } from "@ant-design/icons";
// import classes from "./Menu.module.css";
import classes from "./SubMenu.module.css";


const SubMenu = (props) => {
  // const [visible, setVisible] = useState(false);
  // const[childrenDrawer, setChildrenDrawer] = useState(false);

  // const showDrawer = () => {
  //   props.setVisiblesub(true)
  // };

  const onClose = () => {
    props.setVisiblesub(false);
  };

  // const showChildrenDrawer = () => {
  //   setChildrenDrawer(true)
  // };

  // const onChildrenDrawerClose = () => {
  //   setChildrenDrawer(false)
  // };

  return (
    <>
      {/* <Button type="primary" onClick={showDrawer}>
          Open drawer
        </Button> */}
      <Drawer
        title={
          <div  className={`${classes.subMenu_title} ${classes.flex_sub__menu}`}>
            <button type="primary" onClick={onClose}>
              <LeftOutlined style={{ marginTop: '12px' }} />
            </button>
            Shop By Department
          </div>
        }
        width={480}
        closable={false}
        onClose={onClose}
        visible={props.visiblesub}
        placement="left"
      >

        {/* <div className={`${classes.sub_title} ${classes.flex_sub__menu}`}>   <LeftOutlined style={{ marginTop: '12px' }} />  'Shop By Department' </div> */}
        <div className={classes.flex_sub__menu}>Mobiles, Computers <RightOutlined style={{ marginTop: '12px' }} /></div>
        <div className={classes.flex_sub__menu}>TV, Appliances, Electronics <RightOutlined style={{ marginTop: '12px' }} /></div>
        <div className={classes.flex_sub__menu}>Men's Fashions <RightOutlined style={{ marginTop: '12px' }} /></div>
        <div className={classes.flex_sub__menu}>Women's Fashion <RightOutlined style={{ marginTop: '12px' }} /></div>
        <div className={classes.flex_sub__menu}>See All  <DownOutlined style={{ marginTop: '12px' }} /></div>





        {/* <Drawer
            title="Two-level Drawer"
            width={320}
            closable={true}
            onClose={onChildrenDrawerClose}
            visible={childrenDrawer}
            push={{distance: '0'}}
          > */}
        {/* This is two-level drawer
          </Drawer> */}
      </Drawer>
    </>
  );
}

export default SubMenu;