import path from 'path';

export default {
  base: "./",
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        offers: "offers.html",
        offer: "offer.html",
        offerReviews: "offer-reviews.html",
        blog: "blog.html",
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
};
