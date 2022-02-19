// npm에 설치한 프로그램 불러오기
const React = require('react');
const ReactDom = require('react-dom');

// WordRelay 모듈 불러오기
const WordRelay = require('./WordRelay');

ReactDom.render(<WordRelay />, document.querySelector('#root'));