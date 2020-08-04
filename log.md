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

### Day 8: August 1, 2020

**Today's Progress**: Continued styling 'skills' page of portfolio site.

**Thoughts:** Added images to remaining cards. Changed card component to an eggshell white color with cg-blue text.

**Links(s) to work:**
- [skills.js](Code/Day_008/skills.js)
- [skill_card.js](Code/Day_008/skill_card.js)

### Day 9: August 2, 2020

**Today's Progress**: Built out homepage and leveraged more of Materialize CSS.

**Thoughts:** Love the weekends! Can really break away from work-mode and devote time to this project. Spent some time perusing portfolio sites on the web for inspiration. Used what I learned to build out my own home page. 

Also read through the Materialize CSS documentation in detail and applied more of its features to my site.

**Links(s) to work:**
- [skills.js](Code/Day_009/skills.js)
- [skill_card.js](Code/Day_009/skill_card.js)
- [getBlogPost.js](Code/Day_009/getBlogPost.js)
- [getBlogPosts.js](Code/Day_009/getBlogPosts.js)
- [home.css](Code/Day_009/home.css)
- [navbar.js](Code/Day_009/navbar.js)
- [project_card.js](Code/Day_009/project_card.js)
- [projectList.js](Code/Day_009/projectList.js)

### Day 10: August 3, 2020

**Today's Progress**: Learned about XSS and Firebase Security Rules

**Thoughts:** Not much coding today, but a lot of reading to prepare for the next push. Need to make sure that security is tight before deployment. Also learned a bit more about Flamelink schema to add relational categories to blog posts.

[Cross-Site Scripting (XSS) Explained by PwnFunction](https://www.youtube.com/watch?v=EoaDgUgS6QA)

[Security Rules! Get to Know Cloud Firestore #6 by Firebase](https://youtu.be/eW5MdE3ZcAw)

[How to Set up [Flamelink] Schemas?](https://intercom.help/flamelink/en/articles/2419375-how-to-set-up-schemas)