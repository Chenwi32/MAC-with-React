/*//////// Banner Animated Images ///////*/

export const animateText = () => {
  const feel = document.getElementById("feel");
  const priority = document.getElementById("priority");
  const animatedTextCon = document.getElementById("animated__text");

  if (animatedTextCon) {
    animatedTextCon.innerHTML = feel.innerHTML;

    setInterval(() => {
      if (animatedTextCon.innerHTML === feel.innerHTML) {
        animatedTextCon.innerHTML = priority.innerHTML;
      } else {
        animatedTextCon.innerHTML = feel.innerHTML;
      }
    }, 6000);
  }
};

/*//////// End Banner Animated Images ///////*/
