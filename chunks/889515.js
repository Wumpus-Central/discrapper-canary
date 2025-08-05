n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(739754),
    a = n(970184),
    o = n(118925);
function s(e) {
    let { components: t, renderComponents: n } = e,
        { message: s } = (0, a.CJ)();
    return null == t || 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              className: o.container,
              children: [
                  (0, r.jsx)('div', {
                      className: o.children,
                      children: n(t)
                  }),
                  null != s
                      ? (0, r.jsx)(i.ZP, {
                            className: o.error,
                            message: s,
                            component: e
                        })
                      : null
              ]
          });
}
