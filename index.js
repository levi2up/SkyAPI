fetch(‘https://sky.shiiyu.moe/api/v2/bazaar’)
   .then(response => response.json())
   .then(items => showItems(items.results));
