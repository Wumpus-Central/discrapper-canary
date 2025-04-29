n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(869153);
let o = (e) => {
    let { children: t, shouldAnimate: n } = e;
    return n
        ? (0, r.jsx)('div', {
              className: i.outerContainer,
              children: (0, r.jsx)('div', {
                  className: i.innerContainer,
                  children: t
              })
          })
        : t;
};
