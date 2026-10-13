/* 毎月末の更新作業はこのファイルの latest を書き換えるだけ。
   旧 latest は archive の先頭に移す。他のファイルは一切触らない。

   例(2026年11月号を出すとき):
     latest:  { file: "monthly_news_2026_11.html", label: "2026年11月号" },
     archive: [ { file: "monthly_news_2026_10.html", label: "2026年10月号" } ]

   このファイルを読んでいるのは tokuten_ichiran.html と monthly_news_latest.html の2枚。 */
window.NEWS_INDEX = {
  latest: { file: "monthly_news_2026_10.html", label: "2026年10月号" },
  archive: []
};
