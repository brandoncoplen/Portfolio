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

        // import countapi from 'countapi-js';

        // document.getElementById("magic-button").addEventListener("click", () => {
        //     countapi.event('magic-button').then((result) => {
        //       alert(`The magic button has been pressed ${result.value} times.`);
        //     });
        //   })

          

          function websiteVisits(response) {
            document.querySelector("#visits").textContent = response.value;
        }