import { Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';
import axios from 'axios';
@Injectable()
export class AppService {
  async getHello() {
    return 'Hello';
  }
  async news() {
    const articles = [];
    const newspapers = [
      {
        name: 'arisetv',
        address: 'https://www.arise.tv/category/politics/',
        base: '',
      },
      {
        name: 'businessday',
        address: 'https://businessday.ng/category/politics/',
        base: '',
      },
      {
        name: 'punchng',
        address: 'https://punchng.com/topics/politics/',
        base: '',
      },
      {
        name: 'guardian-ng',
        address: 'https://guardian.ng/category/politics/',
        base: '',
      },
      {
        name: 'thenationonlineng',
        address: 'https://thenationonlineng.net/politics/',
        base: '',
      },
      {
        name: 'saharareporters',
        address: 'https://saharareporters.com/politics',
        base: 'https://saharareporters.com',
      },
      {
        name: 'thisdaylive',
        address: 'https://www.thisdaylive.com/index.php/politics/',
        base: '',
      },
      {
        name: 'channelstv',
        address: 'https://www.channelstv.com/category/politics',
        base: '',
      },
    ];

    const iterate = (html, newspaper) => {
      const $ = cheerio.load(html);
      $('a:contains("Obi")', html).each(function () {
        let title = $(this).text();
        const link = $(this).attr('href');
        if (title.includes('<img')) {
          title = title.split('/>')[1];
        }
        articles.push({
          title,
          link: newspaper.base + link,
          source: newspaper.name,
        });
      });

      $('a:contains("Labour")', html).each(function () {
        let title = $(this).text();
        const link = $(this).attr('href');
        if (title.includes('<img')) {
          title = title.split('/>')[1];
        }
        articles.push({
          title,
          link: newspaper.base + link,
          source: newspaper.name,
        });
      });

      $('a:contains("Datti")', html).each(function () {
        let title = $(this).text();
        const link = $(this).attr('href');
        if (title.includes('<img')) {
          title = title.split('/>')[1];
        }
        articles.push({
          title,
          link: newspaper.base + link,
          source: newspaper.name,
        });
      });

      // $('a:contains("2023")', html).each(function () {
      //   let title = $(this).text();
      //   const link = $(this).attr('href');
      //   if (title.includes('<img')) {
      //     title = title.split('/>')[1];
      //   }
      //   articles.push({
      //     title,
      //     link: newspaper.base + link,
      //     source: newspaper.name,
      //   });
      // });

      $('a:contains("INEC")', html).each(function () {
        let title = $(this).text();
        const link = $(this).attr('href');
        if (title.includes('<img')) {
          title = title.split('/>')[1];
        }
        articles.push({
          title,
          link: newspaper.base + link,
          source: newspaper.name,
        });
      });

      // $('a:contains("election")', html).each(function () {
      //   let title = $(this).text();
      //   const link = $(this).attr('href');
      //   if (title.includes('<img')) {
      //     title = title.split('/>')[1];
      //   }
      //   articles.push({
      //     title,
      //     link: newspaper.base + link,
      //     source: newspaper.name,
      //   });
      // });

      $('a:contains("tinubu")', html).each(function () {
        let title = $(this).text();
        const link = $(this).attr('href');
        if (title.includes('<img')) {
          title = title.split('/>')[1];
        }
        articles.push({
          title,
          link: newspaper.base + link,
          source: newspaper.name,
        });
      });

      $('a:contains("atiku")', html).each(function () {
        let title = $(this).text();
        const link = $(this).attr('href');
        if (title.includes('<img')) {
          title = title.split('/>')[1];
        }
        articles.push({
          title,
          link: newspaper.base + link,
          source: newspaper.name,
        });
      });

      $('a:contains("kwankwanso")', html).each(function () {
        let title = $(this).text();
        const link = $(this).attr('href');
        if (title.includes('<img')) {
          title = title.split('/>')[1];
        }
        articles.push({
          title,
          link: newspaper.base + link,
          source: newspaper.name,
        });
      });

      $('a:contains("politics")', html).each(function () {
        let title = $(this).text();
        const link = $(this).attr('href');
        if (title.includes('<img')) {
          title = title.split('/>')[1];
        }
        articles.push({
          title,
          link: newspaper.base + link,
          source: newspaper.name,
        });
      });
      $('a:contains("PDP")', html).each(function () {
        let title = $(this).text();
        const link = $(this).attr('href');
        if (title.includes('<img')) {
          title = title.split('/>')[1];
        }
        articles.push({
          title,
          link: newspaper.base + link,
          source: newspaper.name,
        });
      });
      $('a:contains("APC")', html).each(function () {
        let title = $(this).text();
        const link = $(this).attr('href');
        if (title.includes('<img')) {
          title = title.split('/>')[1];
        }
        articles.push({
          title,
          link: newspaper.base + link,
          source: newspaper.name,
        });
      });
      $('a:contains("government")', html).each(function () {
        let title = $(this).text();
        const link = $(this).attr('href');
        if (title.includes('<img')) {
          title = title.split('/>')[1];
        }
        articles.push({
          title,
          link: newspaper.base + link,
          source: newspaper.name,
        });
      });
      $('a:contains("budget")', html).each(function () {
        let title = $(this).text();
        const link = $(this).attr('href');
        if (title.includes('<img')) {
          title = title.split('/>')[1];
        }
        articles.push({
          title,
          link: newspaper.base + link,
          source: newspaper.name,
        });
      });
      $('a:contains("governor")', html).each(function () {
        let title = $(this).text();
        const link = $(this).attr('href');
        if (title.includes('<img')) {
          title = title.split('/>')[1];
        }
        articles.push({
          title,
          link: newspaper.base + link,
          source: newspaper.name,
        });
      });
      $('a:contains("president")', html).each(function () {
        let title = $(this).text();
        const link = $(this).attr('href');
        if (title.includes('<img')) {
          title = title.split('/>')[1];
        }
        articles.push({
          title,
          link: newspaper.base + link,
          source: newspaper.name,
        });
      });
    };

    const result = await axios.all(
      newspapers.map((news) =>
        axios.get(news.address).catch(() => {
          console.log('');
        }),
      ),
    );
    result.forEach((res: any, index) => {
      if (res) {
        iterate(res.data, newspapers[index]);
      }
    });

    // await axios
    //   .all(newspapers.map((news) => axios.get(news.address)))
    //   .then((res) => {
    //     console.log('heeere');
    //     res.forEach((result, index) => {
    //       console.log('======================>>>', result.data);
    //       iterate(result.data, newspapers[index]);
    //     });
    //   })
    //   .catch((err) => {
    //     // console.log(err);
    //   });

    return {
      status: 200,
      message: 'success',
      data: articles,
    };
  }
}
