fetch(‘https://sky.shiiyu.moe/api/v2/bazaar’)
   .then(response => response.json())
   .then(items => showItems(items.results));

showItems = items => {
  const itemsDiv = document.querySelector(‘#Bazaar’);
  characters.forEach(items => {
    const itemElement = document.createElement(‘p’);
    itemElement.innerText = `Item Name: ${item.Name}`
    itemsDiv.append(itemElement);
  });
}
