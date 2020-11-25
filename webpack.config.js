const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s(a|c)ss$/,
                loader: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    watchOptions: {
        poll: 1000,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
    },
    externals: {
        react: 'commonjs react',
        mobx: 'mobx',
        redux: 'Redux',
        'react-redux': 'react-redux',
        'mobx-react': 'mobx-react',
        '@n5now/ui-tooltip': '@n5now/ui-tooltip',
        classnames: 'classnames',
        moment: 'moment',
        '@material-ui/core': '@material-ui/core',
        '@material-ui/icons': '@material-ui/icons',
        '@material-ui/lab': '@material-ui/lab',
    },
};
