var i = r(200651);
r(192379);
var a = r(908486);
let s = (e) => {
    let { children: n, shouldAnimate: r } = e;
    return r
        ? (0, i.jsx)('div', {
              className: a.outerContainer,
              children: (0, i.jsx)('div', {
                  className: a.innerContainer,
                  children: n
              })
          })
        : n;
};
n.Z = s;
