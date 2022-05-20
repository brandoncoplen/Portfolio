var i = 0;
        var txt = 'Welcome';
        var speed = 120;

        typeMyText();

        function typeMyText() {
            if (i < txt.length) {
                document.getElementById("welcome").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeMyText, speed);
            }
        }

