import Dropdown from 'rc-dropdown'
import Menu, { Item as MenuItem, Divider } from 'rc-menu'
import 'rc-dropdown/assets/index.less';
import React from 'react';

export default class Select extends React.Component{
  onVisibleChange(visible){
    this.setState({
      visible,
    })
  }

  saveSelected({ selectedKeys }) {
    this.selected = selectedKeys;
  }

  confirm() {
    console.log(this.selected);
    this.setState({
      visible:false,
    })
  }

  render() {
    const menu = (
      <Menu
        style={{ width: 140 }}
        multiple
        onSelect={this.savedSelected.bind(this)}
        onDeselect={this.saveSelected.bind(this)}
        >
        <MenuItem key="1">one</MenuItem>
        <MenuItem key="2">two</MenuItem>
        <Divider />
        <MenuItem disabled>
          <button
            style={{
              cursor: "pointer",
              color: '#000',
              pointerEvents: 'visible'
            }}
            onClick={this.confirm.bind(this)}
            >Yay
            </button>
          </MenuItem>
        </Menu>
        );

    return (
      <Dropdown
        trigger={['click']}
        onVisibleChange={this.onVisibleChange.bind(this)}
        visible={this.props.visible}
        closeOnSelect={false}
        overlay={menu}
        animation='slide-up'
      >
        <button>open</button>
      </Dropdown>
    )
  }
}
