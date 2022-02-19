const path = require('path');

module.exports = {
    name: 'wordplay-setting',
    mode: 'development',    // 실서비스: production
    devtool: 'eval',    // 빠르게
    resolve: {
        extensions: ['.js', '.jsx'], // 확장자 자동으로 설정
    },
    
    // 입력
    entry: {
        app: ['./client'],
    }, 
    module: {
        rules: [{
            test: /\.jsx?/, // jsx 파일에 babel적용
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },
    // 출력
    output: {
        path: path.join(__dirname, 'dist'), // 현재 폴더에 dist 폴더 생성
        filename: 'app.js'
    },  
};