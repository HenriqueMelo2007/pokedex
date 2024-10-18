/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3|wav|ogg)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'static/audio/', // Onde salvar os arquivos de áudio
          publicPath: '/_next/static/audio/', // Caminho para acessar os arquivos de áudio
        },
      },
    });
    return config;
  },
};

export default nextConfig;
