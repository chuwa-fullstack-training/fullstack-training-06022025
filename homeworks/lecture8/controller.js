module.exports = {
  renderHomePage: (req, res) => {
    const { title, content } = req.query;
    const data = title ? { title, content } : null;
    res.render("home", {
      title: "Cool Home Page",
      data,
    });
  },

  submitContent: (req, res) => {
    const { title, content } = req.body;
    res.redirect(
      `/?title=${encodeURIComponent(title)}&content=${encodeURIComponent(
        content
      )}`
    );
  },
};
