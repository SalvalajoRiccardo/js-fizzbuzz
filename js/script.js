for (var i = 1; i < 101; i++) {
    if (i % 5 == 0 && i % 3 == 0 && i % 6 == 0) {
        document.getElementById("lista").innerHTML += i + "fizzbuzzboolean" + "<br>";
    } else if (i % 3 == 0 && i % 5 == 0)  {
        document.getElementById("lista").innerHTML += i + "fizzbuzz" + "<br>";
    } else if (i % 3 == 0 && i % 6 == 0) {
        document.getElementById("lista").innerHTML += i + "fizzboolean" + "<br>";
    }  else if (i % 5 == 0 && i % 6 == 0) {
        document.getElementById("lista").innerHTML += i + "buzzboolean" + "<br>";
    }  else if (i % 3 == 0) {
        document.getElementById("lista").innerHTML += i + "fizz" + "<br>";
    }  else if (i % 5 == 0) {
        document.getElementById("lista").innerHTML += i + "buzz" + "<br>";
    }  else {
        document.getElementById("lista").innerHTML += i + "<br>";
    }
}