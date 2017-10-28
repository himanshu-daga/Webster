## How to crate Pagination for next Button
Pagination used to move to next page or blog or post as you must have seen in many websited or blogs.
Lets create it...

Make a HTML file you can name it as **pagination.html** 
```HTML

<!DOCTYPE html>
<html>
<head>
  <title>Pagination example</title>
  <link rel = "stylesheet" type="text/css" href = "style.css" />
</head>
<body>

<h2>Pagination</h2>
<p>Responsive pagination with hover effects:</p>

<div class="pagination">
  <a href="#">&laquo;</a>
  <a href="#">1</a>
  <a class="active" href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">&raquo;</a>
</div>

</body>
</html>


```

Now its time to add **CSS** for it, name this file as **style.css**
``` CSS
.pagination a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
}

.pagination a.active {
    background-color:orange;
    color: white;
}

.pagination a:hover:not(.active) {background-color: #ddd;}


```
