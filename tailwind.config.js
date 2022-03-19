module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        shadowCustom: '0 1px 4px 0 rgb(17, 17, 17, 0.1)',
      },
      height: {
        size26rem: '26rem',
        size28rem: '28rem',
        size32rem: '32rem',
        size36rem: '36rem',
        size40rem: '40rem',
      },
      width: {
        size26rem: '26rem',
        size28rem: '28rem',
        size32rem: '32rem',
        size36rem: '36rem',
        size40rem: '40rem',
        size44rem: '44rem',
      },
    },
  },
  plugins: [],
};
