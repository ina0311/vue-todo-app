export const fetchItems = async (url) => {
  try {
    // API通信でデータを取得する
    const response = await fetch(url);
    // 取得したデータをjson形式で返す
    return await response.json();
  } catch (error) {
    // API通信でデータを習得できなかった場合にコンソールにエラー表示
    console.error("データを習得できませんでした");
    console.error(error);
  }
};

export const insertItems = async (url, data) => {
  const respose = await fetch(url, {
    // json形式でPOSTでデータを送る
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  }).catch(() => {
    // うまく行かなかった場合、コンソールにエラーを表示
    console.error(response.json())
    return;
  })
};