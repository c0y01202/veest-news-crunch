const { Post } = require("../models");

const postData = [
  {
    title: "Pelotons earnings are even worse than expected",
    content:
      "Market watchers were anticipating a rough quarter for Peloton, but not quite this bad.",
    user_id: 1,
  },
  {
    title:
      "How Red Hat became the tip of the spear for IBMs rejuvenation strategy",
    content:
      "When IBM paid $34 billion to acquire Red Hat in 2018, it was a big bet on a hybrid cloud future, one that appears to be paying off four years after the deal was announced.",
    user_id: 2,
  },
  {
    title: "Meta sued in Kenya over claims of exploitation and union busting",
    content:
      "A suit was earlier today filed against American social-media giant Meta and Sama, its main subcontractor for content moderation in Africa, over claims of exploitation and union busting.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
