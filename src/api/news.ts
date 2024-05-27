import news from '@/mocks/news.json';

export async function getNews() {
  return new Promise((resolve) => {
    resolve(news);
  });
}
