import React, {Component} from 'react';

class ResponseCheck extends Component {
    state = {
        state: 'waiting',
        message: '클릭해서 시작하세요.',
        result: [],
    };

    timeout;
    startTime;
    endTime;

    onClickScreen = () => {
        const { state } = this.state;
        if(state === 'waiting') {
            this.setState( {
                state: 'ready',
                message: '초록색이 되면 클릭하세요.',
            });
            this.timeout = setTimeout(() => {
                this.setState( {
                    state: 'now',
                    message: '지금 클릭',
                });
                startTime: new Date();
            }, Math.floor( Math.random() * 1000) + 2000); // 2초~3초 랜덤
        } else if(state === 'ready') { // 성급하게 클릭
            clearTimeout(this.timeout); // timeout 삭제 (now 상태로 변하지 않도록)
            this.setState( {
                state: 'waiting',
                message: '너무 성급하시군요~~ 초록색이 된 후에 클릭하세요!',
            })
        } else if(state === 'now') { // 반응속도 체크
            this.endTime = new Date();
            this.setState((preState) =>  {
                return {
                state: 'waiting',
                message: '클릭해서 시작하세요.',
                result: [...preState.result, this.endTime - this.startTime],
                }
            });
        }
    }
    onReset = () => {
        this.setState({
            result: [],
        });
    };
    
    renderAverage = () => {
        const { result } = this.state;
        return result.length === 0
        ? null
        : <>
            <div>평균 시간: { result.reduce((a, c) => a + c) / result.length}ms</div>
            <button onClick={this.onReset}>리셋</button>
        </>
    }

    render() {
        const {state, message} = this.state;
        return ( 
            <>
                <div
                    id="screen"
                    className={state}
                    onClick={this.onClickScreen}
                >
                    {message}
                </div>
                {/* sol1> 삼항 연산자 
                {this.state.result.length !== 0
                ? null : <div>평균 시간: {this.state.result.reduce((a,c) => a+c)/ this.state.result.length} ms</div>
                }
                */}
                {/* sol2> 보호연산자 
                {this.state.result.length !== 0
                && <div>평균 시간: {this.state.result.reduce((a,c) => a+c)/ this.state.result.length} ms</div>
                }
                */}
                {/* sol3> 함수로 빼주기 */}
                {this.renderAverage()}
                
            </>
        );
    }
}

export default ResponseCheck;