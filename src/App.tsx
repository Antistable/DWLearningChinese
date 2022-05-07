import React from 'react';
import './App.css';
const opencc = require('opencc-js');

enum ConvertOption {
  ToSimp,
  ToTrad
}

class App extends React.Component {

  state = {
    simp: '良辰美景奈何天\n为谁辛苦为谁甜\n这年华青涩逝去\n明白了时间',
    trad: '良辰美景奈何天\n為誰辛苦為誰甜\n這年華青澀逝去\n明白了時間',
  }

  render() {
    return (
      <div className="app">

        <textarea
          className='input'
          value={this.state.trad}
          onChange={event => this.setState({ trad: event.target.value })}
        ></textarea>

        <br></br><br></br>

        <button className='convert' onClick={() => this.convert(ConvertOption.ToTrad)}>
          ⇱简转正并复制
        </button>

        <button className='convert' onClick={() => this.convert(ConvertOption.ToSimp)}>
          正轉簡並復製⇲
        </button>

        <br></br><br></br>

        <textarea
          className='input'
          value={this.state.simp}
          onChange={(event) => { this.setState({ simp: event.target.value }); }}
        ></textarea>

      </div >
    );
  }

  convert(option: ConvertOption) {
    const converterConfig =
      option === ConvertOption.ToSimp ?
        { from: 'tw', to: 'cn' }
        :
        { from: 'cn', to: 'tw' };
    const textToConvert =
      option === ConvertOption.ToSimp ?
        this.state.trad
        :
        this.state.simp;
    const converter = opencc.Converter(converterConfig);
    const convertedText = converter(textToConvert);
    this.copy(convertedText);
    const outputState =
      option === ConvertOption.ToSimp ?
        { simp: convertedText }
        :
        { trad: convertedText };
    this.setState(outputState);
  }

  copy(string: string) {
    const element = document.createElement('textarea');
    element.value = string;
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);
  };

}

export default App;
