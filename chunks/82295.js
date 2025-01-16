var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(540059),
    u = r(65040);
let c = (e) => {
    let { className: n, children: r, 'aria-label': a, id: c } = e;
    return (0, l.Q3)('ListSectionItem')
        ? (0, i.jsx)(o.Text, {
              variant: 'text-sm/medium',
              className: s()(n, u.container),
              'aria-label': a,
              id: c,
              children: r
          })
        : (0, i.jsx)(o.H, {
              className: s()(n, u.container, u.text),
              'aria-label': a,
              id: c,
              children: r
          });
};
n.Z = c;
