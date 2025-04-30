r.d(t, { Z: () => a });
var n = r(200651);
r(192379);
var l = r(739754),
    i = r(970184),
    o = r(118925);
function a(e) {
    let { components: t, renderComponents: r } = e,
        { message: a } = (0, i.CJ)();
    return null == t || 0 === t.length
        ? null
        : (0, n.jsxs)('div', {
              className: o.container,
              children: [
                  (0, n.jsx)('div', {
                      className: o.children,
                      children: r(t)
                  }),
                  null != a
                      ? (0, n.jsx)(l.ZP, {
                            className: o.error,
                            message: a,
                            component: e
                        })
                      : null
              ]
          });
}
