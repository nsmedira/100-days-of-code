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

[Cross-Site Scripting (XSS) Explained by PwnFunction](https://youtu.be/EoaDgUgS6QA)

[Security Rules! Get to Know Cloud Firestore #6 by Firebase](https://youtu.be/eW5MdE3ZcAw)

[How to Set up [Flamelink] Schemas?](https://intercom.help/flamelink/en/articles/2419375-how-to-set-up-schemas)

### Day 11: August 4, 2020

**Today's Progress**: Added categories to Flamelink schema, added those categories to blog posts page, added 'home' to nav bar

**Thoughts:** Struggled a bit to figure out how to show docs from multiple Flamelink schema on the same page. Ended up adding a new object to the blog posts component's state that gets filled with all categories upon load. Then added a new `map` function to build Materialize `chip` elements for each category related to a given post, using the category ID(s) stored in the post object to pull from the object of categories in component state.

Added 'Home' as a new segment in the nav bar.

**Links(s) to work:**
- [nav_list.js](Code/Day_011/nav_list.js)
- [getBlogPosts.css](Code/Day_011/getBlogPosts.css)
- [getBlogPosts.js](Code/Day_011/getBlogPosts.js)

### Day 12: August 5, 2020

**Today's Progress**: Struggled to add an 'active' class to the navbar segment when that page is active

**Thoughts:** Took all night but finally figured out how to store `activeTab` in state in the navbar.js component and pass down to nav_list.js and then nav_segment.js. also passing down function from navbar.js `handler` that will update state in that component when a nav link is clicked.

**Links(s) to work:**
- [nav_list.js](Code/Day_012/nav_list.js)
- [nav_segment.js](Code/Day_012/nav_segment.js)
- [navbar.js](Code/Day_012/navbar.js)

### Day 13: August 6, 2020

**Today's Progress**: Spun wheels trying to share state between unrelated components.

**Thoughts:** Wasn't a total waste as I conceptualized what will hopefully be a workable solution. Planning to put in place tomorrow.

### Day 14: August 7, 2020

**Today's Progress**: Stored active tab in app.js so available from all child components.

**Thoughts:** Refactored all functional components that play into the active tab into class components so they can execute function passed as prop in componentDidMount function. Stored 'activeTab' in state in app.js (highest component in hierarchy). Learned about difference between 'component' and 'render' methods of Route component.

**Links(s) to work:**
- [about.js](Code/Day_014/about.js)
- [App.js](Code/Day_014/App.js)
- [blog.js](Code/Day_014/blog.js)
- [home.js](Code/Day_014/home.js)
- [navbar.js](Code/Day_014/navbar.js)
- [portfolio.js](Code/Day_014/portfolio.js)
- [skills.js](Code/Day_014/skills.js)

### Day 15: August 8, 2020

**Today's Progress**: Tried (unsuccessfully) to embed HTML from amcharts

**Thoughts:** Learned that I would need to configure webpack loader for HTML but that isn't possible in create-react-app without ejecting. Decided to install am4charts node packages to build chart from scratch within React project. Got started on that. Code tomorrow.

### Day 16: August 9, 2020

**Today's Progress**: Built out first map using am4charts

**Thoughts:** Built a map of countries I've visited using am4charts node packages. Played with some configuration classes/properties so that map uses same styles as website. Need to add another data series to map to describe USA states visited and improve hover styling.

**Links(s) to work:**
- [about.js](Code/Day_016/about.js)

### Day 17: August 10, 2020

**Today's Progress**: Read an hour of Vumbula React

**Thoughts:** Finished Chapter 2 and began Chapter 3. Learned about State and React Developer Tools Chrome Extension

**Links(s) to work:**
- [greeting.html](Code/Day_017/greeting.html)
- [index.html](Code/Day_017/starter-code/index.html)
- [index.js](Code/Day_017/starter-code/src/index.js)

### Day 18: August 11, 2020

**Today's Progress**: Another hour of Vumbula React

**Thoughts:** Finished Chapter 3 and worked through first part of Chapter 4 project. Learned about destructuring, the spread operator (and the correct way to update state), and the prop-types package.

**Links(s) to work:**
- [AddItem.js](Code/Day_018/src/components/AddItem.js)
- [App.js](Code/Day_018/src/components/App.js)
- [index.js](Code/Day_018/chapter-3/index.js)

### Day 19: August 12, 2020

**Today's Progress**: Continued chapter 4 project of Vumbula React and prepared for JS and Friends Conference

**Thoughts:** JS and Friends Conference tomorrow. Prepared for React Workshop a bit and then continued with Chapter 4 project in Vumbula React. Learned how to show input fields conditionally.

**Links(s) to work:**
- [App.js](Code/Day_019/src/components/App.js)
- [ItemCard.js](Code/Day_019/src/components/ItemCard.js)