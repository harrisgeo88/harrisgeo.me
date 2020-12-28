const fs = require("fs")

/**
 * Get all the existing blogs
 * @returns {Promise[string]} blog names
 */
const getBlogs = () => {
  const path = "src/pages/blog"

  return new Promise(function (resolve, reject) {
    fs.readdir(path, function (err, filenames) {
      if (err) reject(err)
      else {
        resolve(filenames)
      }
    })
  })
}

/**
 * Get the latest blog id
 * @returns {number} latest id
 */
const getLatestId = async () => {
  const latestId = await getBlogs().then((blogs) => {
    return blogs.length
  })
  return Number(latestId)
}

/**
 * Get the new blog id
 * @returns {number} id
 */
const getNewId = async () => {
  const latestId = await getLatestId()

  return Number(latestId) + 1
}

/**
 * Get the date today
 * @returns {string} format "DD-MM-YYYY"
 */
const dateToday = () => {
  let today = new Date()
  let dd = today.getDate()
  let mm = today.getMonth() + 1 //January is 0!

  let yyyy = today.getFullYear()
  if (dd < 10) {
    dd = `0${dd}`
  }
  if (mm < 10) {
    mm = `0${mm}`
  }
  const date = `${yyyy}-${mm}-${dd}`

  return date
}

let id = "replace-me"
const plopStuff = async (plop) => {
  plop.setGenerator("controller", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "title",
        message: "Blog article title?",
      },
      {
        type: "input",
        name: "description",
        message: "Blog description?",
      },
    ],
    actions: function () {
      var actions = [
        {
          type: "add",
          path: `src/pages/blog/${dateToday()}.md`,
          templateFile: "generate/blog.hbs",
          data: { date: dateToday(), id: id },
        },
      ]
      getNewId().then((r) => {
        actions.push({
          type: "modify",
          path: `src/pages/blog/${dateToday()}.md`,
          pattern: /\"replace-me\"/gi,
          template: `"${r}"`,
        })
      })

      return actions
    },
  })
}

module.exports = plopStuff
