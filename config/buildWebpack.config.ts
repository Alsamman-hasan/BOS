import { Configuration } from "webpack";
import TerserPlugin from "terser-webpack-plugin";
import { buildLoaders } from "./buildLoaders";
import { buildResolves } from "./buildResolve";
import { buildDevServer } from './buildDevServer';
import { buildPlugins } from './buildPlugin';
import { IBuildOptioins } from './types/config';

export function buildWebpackConfig(options: IBuildOptioins): Configuration {
  const { mode, paths, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
      publicPath: "/",
    },
    module: {
      rules: buildLoaders(options),
    },
    devtool: isDev ? "inline-source-map" : "source-map",
    devServer: isDev ? buildDevServer(options) : undefined,
    resolve: buildResolves(options),
    plugins: buildPlugins(options),
    optimization: {
      minimize: !isDev,
      minimizer: [new TerserPlugin()],
    },
  };
}
