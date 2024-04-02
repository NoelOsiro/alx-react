import { resolve } from "path";

export const mode = 'production';
export const entry = {
    main: resolve(__dirname, './js/dashboard_main.js'),
};
export const output = {
    path: resolve(__dirname, 'public'),
    filename: 'bundle.js',
};
export const performance = {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
};
export const module = {
    rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true,
                        disable: true,
                    },
                },
            ],
        },
    ]
};
