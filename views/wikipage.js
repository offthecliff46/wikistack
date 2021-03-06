const html = require("html-template-tag");
const layout = require("./layout");



module.exports = (page, author) => layout(html`
<hr><hr><h3>${page.title}
      <small> (<a href="/wiki/${page.slug}/similar">Similar</a>)</small>
  </h3>
  <h4>by <a href="/users/${author.id}">${author.name}</a></h4>
  <ul>
  ${page.tags.map(tag => `<a><li>${tag}</li></a>`)}
  </ul>
  <hr/>
  <div class="page-body">${page.content}</div>
  <hr/>
  <a href="/wiki/${page.slug}/edit" class="btn btn-primary">edit this page</a>
  <a href="/wiki/${page.slug}/delete" class="btn btn-danger">delete this page</a>
`);