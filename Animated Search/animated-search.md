## Animated Search bar as in Stack overflow

when mouse is focussed on search bar, then search bar width will be increase.
So lets make it:

make a HTML file name it as **search-bar.html**.
```HTML

<!DOCTYPE html>
<html>
<head>
   <title>Animated Search Bar</title>
   <!-- add the CSS -->
     <link rel="stylesheet" href="style.css">
</head>
<body>
<p>Animated search form:</p>
<form>
  <input type="text" name="search" placeholder="Search..">
</form>
</body>
</html>

```
Now it it time to write CSS for it. name this file as **style.css**

```CSS

input[type=text] {
    width: 130px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    background-image: url('searchicon.png');
    background-position: 10px 10px; 
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
}

input[type=text]:focus {
    width: 50%;
}

```
