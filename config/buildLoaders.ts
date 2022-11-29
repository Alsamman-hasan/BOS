import webpack from "webpack";
import { buildBabelLoader } from './loaders/babelLoader';
import { buildCssLoader } from './loaders/cssLoader';
import { IBuildOptioins } from './types/config';

export function buildLoaders({ isDev }: IBuildOptioins): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };
  const jsonLoader = { test: /\.json$/, type: "json" };
  const babelLoader = buildBabelLoader(isDev);
  const typesctiptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  const cssLoader = buildCssLoader(isDev);
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff||ttf||otf)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  return [fileLoader, svgLoader, babelLoader, jsonLoader, typesctiptLoader, cssLoader];
}
