// 필요한 프로그램 가져오기
const React = require('react');
const { Componet } = React;

class WordRelay extends Componet {
    state = {
        text: 'Hello, webpack',
    };

    render() {
        return <h1>{this.state.text}</h1>
    }
}
// 모듈 내보내기
module.exports = WordRelay;