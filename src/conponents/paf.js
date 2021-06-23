import React from 'react';

export default class paf extends React.Component {
  addHref = () => {
    let { index, name } = this.props;
    this.props.history.push({
      pathname: '/dialog/' + name,
      index: index,
    });
  };
  render() {
    return (
      <div className='item' onClick={this.addHref}>
        <img src={this.props.img} alt='' />
        <div className='dialog'>{this.props.name}</div>
      </div>
    );
  }
}
