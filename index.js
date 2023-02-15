const articles = [
  {
    title: "Arrays",
    author: "Al Smith",
    date: "15/2/2023",
    content:
      "Arrays in Javascript can be used to store collections of data in a list-like format. They can hold various datatypes, including strings, numbers, objects, other arrays and booleans. Each item in an array can be accessed by its index; its position in the array with the first item being 0. <br>Arrays are iterable and mutable, meaning their contained items can be accessed one by one and that they can be changed after initialization. <br>Strings share a lot of similarities with arrays as they are essentially arrays of characters and as such a lot of array theory and array methods can be applied to strings.",
  },
  {
    title: "Array Methods",
    author: "Al Smith",
    date: "15/2/2023",
    content:
      "There are many different ways that we can manipulate arrays and use the data they hold. Some of these are destructive, meaning they change or 'mutate' the original array, while some are non-destructive, meaning they create a new array by performing some operation on the original data and outputting it to a new array. <br>Some common array methods include: push, pop, shift, unshift, splice, slice, concat, indexOf, foreach, map, filter and reduce. It is beyond the scope of this article to go into all the array methods that exist but references can be found online from the usual sources.",
  },
  {
    title: "Array Method Specifics",
    author: "Al Smith",
    date: "15/2/2023",
    content:
      "To expand on the array methods mentioned above:<br>1. push(): Adds one or more elements to the end of an array and returns the new length of the array.<br>2. pop(): Removes the last element from an array and returns that element.<br>3. shift(): Removes the first element from an array and returns that element.<br>4. unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.<br>5. splice(): Adds or removes elements from an array at a specific index.<br>6. slice(): Returns a new array containing a portion of the original array.<br>7. concat(): Joins two or more arrays and returns a new array.<br>8. indexOf(): Returns the first index at which a given element can be found in an array, or -1 if it is not present.<br>9. forEach(): Calls a function for each element in an array.<br>10. map(): Creates a new array with the results of calling a provided function on every element in the array.<br>11. filter(): Creates a new array with all elements that pass the test implemented by the provided function.<br>12. reduce(): Executes a provided function for each value of the array and returns a single value.<br>Source: chatGPT",
  },
]

const container = document.querySelector(".container")

articles.forEach((article) => {
  const articleWrapper = document.createElement("div")
  articleWrapper.classList.add("article-wrapper")
  const title = document.createElement("h2")
  title.classList.add("title")
  const author = document.createElement("h3")
  author.classList.add("author")
  const date = document.createElement("p")
  date.classList.add("date")
  const content = document.createElement("p")
  content.classList.add("content")

  title.innerHTML = article.title
  author.innerHTML = "By " + article.author
  date.innerHTML = article.date
  content.innerHTML = article.content

  articleWrapper.appendChild(title)
  articleWrapper.appendChild(author)
  articleWrapper.appendChild(date)
  articleWrapper.appendChild(content)

  container.appendChild(articleWrapper)
})
