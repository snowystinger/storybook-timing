import React, {useEffect, useLayoutEffect, useRef} from 'react';

function Example(props) {
  let ref = useRef();
  useLayoutEffect(() => {
    console.log(
        'layout effect',
        JSON.stringify(ref.current.getBoundingClientRect()),
        window.getComputedStyle(document.body).margin
    );
  }, []);
  useEffect(() => {
    console.log(
        'effect',
        JSON.stringify(ref.current.getBoundingClientRect()),
        window.getComputedStyle(document.body).margin
    );
  }, []);
  return <div ref={ref}>Hello rendering</div>
}

export default {
  title: 'Example',
  component: Example
};

export const Demo = {
  args: {}
};

