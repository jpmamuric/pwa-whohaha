Headless WordPress with React

Why Headless WordPress?
Okay, so WordPress is great. React is great. So why should we combine the two?

JavaScript is the future of WordPress. In late 2015, Automattic, the company behind WordPress, re-wrote their entire admin application (codenamed “Calypso”) in JavaScript. And a few weeks later, Matt Mullenweg, CEO of Automattic, gave a massive homework assignment to all WordPress developers: “learn JavaScript, deeply.”

Because a frontend/backend split is good for the world — both users and developers. Better user experiences are possible. Maintaining large codebases is more efficient. Better performance.

Your company can hire more specialized talent. Frontend engineers don’t have to know WordPress and vice-versa. Instead of hiring a generalist WordPress theme/plugin developer, you can hire separate roles who each have a deep knowledge of frontend engineering and Wordpress, respectively.

Why?
Why WordPress?
Your first question may be “why should I care that WordPress has an API?” I’ve already written about this a bit in another post, but if you aren’t up for opening another tab, here are a few highlights:

As of November, WordPress now powers over 27% of the web. And as of version 4.7, released just a couple of months ago, all the content endpoints for the WP-API are now included in WordPress core, so millions of new APIs just went online.

WordPress is super user-friendly. This may be the single biggest reason why WordPress has seen such widespread adoption. It allows anyone, even non-technical people, to create and edit a website. There is no other tool with the same amount of features and support in existence that’s as empowering as WordPress.

WordPress is a powerful content management platform. It’s a common misconception among some developers who have never used WordPress (or who haven’t used it in a long time) that WordPress is merely for blogging. While it’s great for blogging, it’s actually great for effectively managing custom content via Custom Post Types.

Why Create React App?
Unless you’ve been living under a rock in the web development world, you’ve undoubtedly heard of React by now. Going into the background of React is beyond the scope of this article, but I do want to introduce you to Create React App, the easiest way to get started with React.

Getting started with React itself is pretty easy. You can drop React and ReactDOM into your application today.

But if you’re looking at using React on more than one small part of your application, the depth of the rabbit hole can quickly become overwhelming. Wanting to deeply learn React usually leads to a plethora of over things to learn: ES6, JSX, Babel, Webpack, and much more — each of these requiring a significant time investment to really understand.

Then, even after acquiring a deep knowledge of these subjects, you’ll still spend a significant amount of time in configuration on most non-trivial projects.
But what if you just want to try React itself? Or what if you want to start with a set of configuration defaults and then modify those defaults as you go along?

Well, there’s hope: Create React App.

Last summer, Facebook released Create React App, a boilerplate tool with a sensible set of configuration standards so you can quickly get started with React itself and then go down the rabbit hole at your own pace.

Create React App comes bundled with Webpack, ESLint, Babel, Autoprefixer, Jest, and other great tools from the community.
