console.log("\n  ( * q * )");

 function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }

            return color;
        }
        let intervalId;
        document.querySelector('#start').addEventListener('click', () => {
          if(!intervalId){
            intervalId =  setInterval(() => {
             
                document.body.style.backgroundColor = getRandomColor();
            }, 1000);
          }
        });
        document.querySelector('#stop').addEventListener('click', () => {
            clearInterval(intervalId);
            intervalId = null;
        });