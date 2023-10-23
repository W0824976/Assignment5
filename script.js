/*
    Assignment 05
*/

$(document).ready(function () {
    // your code here

});



class ContentItem {
  constructor(id, name, description, category) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
  }

  updateContentItem(id, name, description, category) {
    if (this.id === id) {
      this.name = name || this.name;
      this.description = description || this.description;
      this.category = category || this.category;
    }
  }

  toString() {
    return `<div class="content-item-wrapper" id="content-item-${this.id}">
              <h2>${this.name}</h2>
              <p>${this.description}</p>
              <div>${this.category}</div>
            </div>`;
  }
}

$(document).ready(function () {
  const items = [
    // id, name, description, Genre/category
    new ContentItem(0, 'Strangers Things','Its about humans with special powers with abilities humans are terrified of & try to indulge with mordern society of modern implimentations of humans laws ', 'Horror'),
    new ContentItem(1,  'Game of Thron', 'Its about kingsoms conflict between north & south basically fighting for throne till death','Thriller'),
    new ContentItem(2, 'Walking Dead','A zombies virus spreading all around the globe with increasing number of humans fighing till death to save their families' ,'Horror'),
    new ContentItem(3,  'Vampire Diaries', 'A vampire horror drama with love triangle between brothers','Romance'),
    new ContentItem(4,  'Modern Love', 'Its about articles from New York Times Magazine','Romance'),
  ];

  items.forEach(item => {
    $('#content-item-list').append(item.toString());
    $(`#content-item-${item.id}`).css({
      'border': '1px solid black',
      'width': '50%',
      'padding': '10px',
      'margin': '0 auto 10px auto'
    });
  });

  $('#successful-update').click(function() {
    // code to successfully update an item
    items[0].updateContentItem(0, 'Updated Name', null, null);
    $('#content-item-0').replaceWith(items[0].toString());
  });

  $('#unsuccessful-update').click(function() {
    // code to unsuccessfully update an item
    items[0].updateContentItem(9, 'Unsuccessful Update', null, null); // ID doesn't match
  });
});
