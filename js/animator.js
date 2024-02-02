export function highlight(e) {
  let ele = e.currentTarget; // get element reference from event.
  TweenMax.to(ele, {
    duration: 0.2,
    scale: 1.2,
    ease: "power4.out",
  }); // highlight animation.
}

export function unhighlight(e) {
  let ele = e.currentTarget;
  TweenMax.to(ele, {
    duration: 0.25,
    scale: 1,
    ease: "elastic.out(1, 0.5)",
  }); // unhighlight animation.
}
