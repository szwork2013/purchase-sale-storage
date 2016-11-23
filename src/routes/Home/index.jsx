import React, {Component} from 'react'
import {connect} from 'dva';
import {ListView} from 'antd-mobile';

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '相约酒店',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '麦当劳邀您过周末',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '食惠周',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];
let index = data.length - 1;

const NUM_ROWS = 20;
let pageIndex = 0;

class Home extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })
    const genData = (pIndex = 0) => {
      const dataBlob = {};
      for (let i = 0; i < NUM_ROWS; i++) {
        const ii = (pIndex * NUM_ROWS) + i;
        dataBlob[`${ii}`] = `row - ${ii}`;
      }
      return dataBlob;
    }
    this.rData = genData();
    this.state = {
      dataSource: dataSource.cloneWithRows(this.rData),
      isLoading: false
    }
  }


  onEndReached(event) {
    console.log('reach end', event);
    this.setState({
      isLoading: true
    })
    setTimeout(() => {
      this.rData = {...this.rData, ...this.genData(++pageIndex)};
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      })
    }, 1000)
  }

  render() {
    const separator = (sectionID, rowID) => (
      <div key={`${sectionID}-${rowID}`} style={{
        backgroundColor: '#F5F5F9',
        height: 8,
        borderTop: '1px solid #ECECED',
        borderBottom: '1px solid #ECECED',
      }}
      />
    );
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div key={rowID}
             style={{
               padding: '8px 16px',
               backgroundColor: 'white',
             }}
        >
          <h3 style={{padding: 2, marginBottom: 8, borderBottom: '1px solid #F6F6F6'}}>
            {obj.title}
          </h3>
          <div style={{display: '-webkit-box', display: 'flex'}}>
            <img style={{height: '2rem' , marginRight: 8}} src={obj.img}/>
            <div style={{display: 'inline-block'}}>
              <p>{obj.des}</p>
              <p><span style={{fontSize: '1.6em', color: '#FF6E27'}}>{rowID}</span>元/任务</p>
            </div>
          </div>
        </div>
      );
    };
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderHeader={() => <span>header</span>}
        renderFooter={() => <div style={{padding: 30, textAlign: 'center'}}>
          {this.state.isLoading ? '加载中...' : '加载完毕'}
        </div>}
        renderRow={row}
        renderSeparator={separator}
        className="am-list"
        pageSize={4}
        scrollRenderAheadDistance={500}
        scrollEventThrottle={20}
        onScroll={() => {
          console.log('scroll');
        } }
        useBodyScroll
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    )
  }
}

export default connect()(Home);
