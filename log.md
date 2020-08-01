# 100 Days Of Code - Log

### Day 1: July 25, 2020

**Today's Progress:** Worked on blog portion of portfolio website.

**Thoughts:** Was able to get blog list view working (reading data from Firebase Firestore). Began coding blog post detail view but hit a wall. More to come tomorrow.

**Link(s) to work:**
- [blog.js](Code/Day_001/blog.js)
- [blogPost.js](Code/Day_001/blogPost.js)
- [blogPosts.js](Code/Day_001/blogPosts.js)
- [getBlogPost.js](Code/Day_001/getBlogPost.js)
- [getBlogPosts.js](Code/Day_001/getBlogPosts.js)
- [nav_list.js](Code/Day_001/nav_list.js)

### Day 2: July 26, 2020

**Today's Progress**: Worked on blog post detail page of portfolio website.

**Thoughts:** User can now click on a blog post on the list view and will be brough to the detail view. Going to detail view performs a new query to select specific blog post via ID.

**Links(s) to work:**
- [getBlogPost.js](Code/Day_002/getBlogPost.js)

### Day 3: July 27, 2020

**Today's Progress**: Styled blog post page

**Thoughts:** Was tough to find motivation to get in an hour of coding after work, but I got it in. Now blog post is a bit more aesthetically pleasing. Also separated the Firestore query from the rendering of the data that is returned (i.e. data rendering now takes place in its own component).

**Links(s) to work:**
- [blogPost.css](Code/Day_003/blogPost.css)
- [blogPost_firebase.js](Code/Day_003/blogPost_firebase.js)
- [getBlogPost.js](Code/Day_003/getBlogPost.js)
- [navbar.js](Code/Day_003/navbar.js)

### Day 4: July 28, 2020

**Today's Progress**: Learned some new HTML tags and CSS properties

**Thoughts:** Didn't have much energy today, so focused on making the blog post page look better. Added `<header>`, `<main>`, and `<article>` tags to the blog post component. Also updated blogPost.css to add some margins to the paragraph elements and to allow any words within the body to wrap lines with the `word-wrap: break-word` property. 

**Links(s) to work:**
- [blogPost.css](Code/Day_004/blogPost.css)
- [blogPost_firebase.js](Code/Day_004/blogPost_firebase.js)

### Day 5: July 29, 2020

**Today's Progress**: Updated Firestore queries

**Thoughts:** Tough day on a personal level. Didn't feel any motivation to code. Waited until the 11th hour (literally) to get started. 

Updated Firestore queries for blog posts list and post detail view. For list view, now only showing those posts that have a status == 'publish'. On post detail view, now passing slug instead of id in URL and querying db for matching slug.

**Links(s) to work:**
- [getBlogPost.js](Code/Day_005/getBlogPost.js)
- [getBlogPosts.js](Code/Day_005/getBlogPosts.js)

### Day 6: July 30, 2020

**Today's Progress**: Beat head against wall!

**Thoughts:** Started to make what I thought would be an optimization to the blog components but after implementing I realized that I was operating on faulty presuppositions. Reverted work. 

Tried to make all components in a row the same height unsuccessfully. Tried css props `display: flex` and `flex-wrap: wrap` to make all rows equal height, but the components in the `col` divs didn't stretch to the height of the row.

### Day 7: July 31, 2020

**Today's Progress**: Styling 'skills' page of portfolio site.

**Thoughts:** Struggled to figure out how to make Materialize CSS Cards all the same height in a row. Tried several approaches to override Material CSS with custom CSS. Eventually scrapped the effort and decided to use the tools included in Materialize to set the card size to a fixed height using the 'small' class.

Also added images to each of the cards e.g. JS icon for JavaScript card or FileMaker icon for FileMaker card.

**Links(s) to work:**
- [skills.js](Code/Day_007/skills.js)
- [skill_card.js](Code/Day_007/skill_card.js)