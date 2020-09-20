		(function () {

		    if (window.matchMedia("(max-width: 576px)").matches) {
		        //card position
		        document.querySelector('body').addEventListener('click', (e) => {
		            if (e.target.classList[0] == 'margin-muvie') {
		                document.querySelector('#imFirst').style.marginLeft = '-95px';
		                document.querySelector('#imSecond').style.marginLeft = '-95px';
		            } else {
		                document.querySelector('#imFirst').style.marginLeft = '0px';
		                document.querySelector('#imSecond').style.marginLeft = '0px';
		            }
		        });
		    }

		    const ARR = ['#100e17', '#FD7C6E', '#4169E1', '#900020'];
		    // dark theme #100e17
		    const DARK_KARD = '#17141d';
		    //coral theme #FD7C6E
		    const CORAL_CARD = '#fc8679';
		    //blue theme #4169E1
		    const BLUE_CARD = '#0e6bee';
		    //red theme #900020
		    const NAVY_CARD = '#002F55';

		    //yellow theme
		    //background-color:#FBEC5D;
		    //background-color:#00416A;card

		    //bordo theme
		    //background-color:#900020;
		    //background-color:#FFA000;card

		    let work = document.querySelector('#work');
		    let about = document.querySelector('#about');
		    let myWork = document.querySelector('#myWork');
		    let aboutMe = document.querySelector('#aboutMe');



		    function arrayRandElement(ARR) {
		        //random color
		        let rand = Math.floor(Math.random() * ARR.length);
		        return ARR[rand];
		    }

		    function getTheme() {
		        //theme random function
		        let mainColor = arrayRandElement(ARR).toString();

		        if (mainColor === '#FD7C6E') {
		            document.documentElement.style.setProperty('--bg-hue', mainColor);
		            document.documentElement.style.setProperty('--bgcard-hue', CORAL_CARD);
		        }
		        if (mainColor === '#100e17') {
		            document.documentElement.style.setProperty('--bg-hue', mainColor);
		            document.documentElement.style.setProperty('--bgcard-hue', DARK_KARD);
		        }
		        if (mainColor === '#4169E1') {
		            document.documentElement.style.setProperty('--bg-hue', mainColor);
		            document.documentElement.style.setProperty('--bgcard-hue', BLUE_CARD);
		        }
		        if (mainColor === '#900020') {
		            document.documentElement.style.setProperty('--bg-hue', mainColor);
		            document.documentElement.style.setProperty('--bgcard-hue', NAVY_CARD);
		        }

		    }

		    document.addEventListener('DOMContentLoaded', (e) => {
		        //target main content
		        if (location.hash === '#work') {
		            work.style.display = 'flex';
		            about.style.display = 'none';

		            myWork.classList.add('active');
		            aboutMe.classList.remove('active');
		        }

		        if (location.hash !== '#work') {
		            about.style.display = 'flex';
		            work.style.display = 'none';

		            myWork.classList.remove('active');
		            aboutMe.classList.add('active');
		        }
		        //random theme
		        getTheme();

		    });

		    document.querySelector('nav').addEventListener('click', (e) => {
		        //main content for target nav.
		        if (e.target.id === "myWork") {
		            work.style.display = 'flex';
		            about.style.display = 'none';

		            myWork.classList.add('active');
		            aboutMe.classList.remove('active');
		        }

		        if (e.target.id === "aboutMe") {
		            about.style.display = 'flex';
		            work.style.display = 'none';

		            myWork.classList.remove('active');
		            aboutMe.classList.add('active');
		        }
		    });

		    document.querySelector('body').addEventListener("click", function (e) {
		        //random theme target for clik element
		        if (e.target.classList[0] == "teme-target" || e.target.localName == "body") {
		            getTheme();
		        }
		    })

		})();