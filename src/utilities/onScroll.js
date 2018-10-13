export default function onScroll(el) {
  const element = document.getElementById(el);
  const getElementOffSet = element => {
    let top = 0;
    let left = 0;

    do {
      top += element.offsetTop;
      left += element.offsetLeft;
      element = element.offsetParent;
    } while (element);

    return { top, left };
  };

  const elementOffsetTop = getElementOffSet(element).top;
  const elementHeight = element.getBoundingClientRect().height;
  const scrollIntoViewThreshold =
    elementOffsetTop - window.innerHeight + elementHeight * 0.2;
  let isReached = false;

  if (window.pageYOffset > scrollIntoViewThreshold) {
    isReached = true;
  }

  return isReached;
}
