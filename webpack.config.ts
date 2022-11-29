import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from './config/buildWebpack.config';
import { BuildEnv, BuildPaths } from './config/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    // robots: path.resolve(__dirname, "public", "robots.txt"),
    icon: path.resolve(__dirname, "public", "logo_bos.svg"),
    // redirect: path.resolve(__dirname, "public", "_redirects"),
    src: path.resolve(__dirname, "src"),
    // locales: path.resolve(__dirname, "public", "locales"),
    manifest: path.resolve(__dirname, "public", "manifest.json"),
    public: path.resolve(__dirname, "public"),
  };

  const mode = env.mode || "development";
  const isDev = mode === "development";
  // const apiUrl = env.apiUrl || "https://bos-front-dev.herokuapp.com";
  const apiUrl = env.apiUrl || "http://localhost:5000/";
  const PORT = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
  });

  return config;
};
