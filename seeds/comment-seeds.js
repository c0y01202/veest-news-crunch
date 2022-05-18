const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Pelotons earnings are even worse than expected",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text:
      "How Red Hat became the tip of the spear for IBMs rejuvenation strategy",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "DJIs entry-level Mini 3 Pro drone arrives priced at $669",
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
