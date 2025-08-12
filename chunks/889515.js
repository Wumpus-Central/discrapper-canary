n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(739754),
    o = n(970184),
    a = n(933033);
function s(e) {
    let { components: t, renderComponents: n } = e,
        { message: s } = (0, o.CJ)();
    return null == t || 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: a.container,
              children: [
                  (0, r.jsx)("div", {
                      className: a.children,
                      children: n(t),
                  }),
                  null != s
                      ? (0, r.jsx)(i.ZP, {
                            className: a.error,
                            message: s,
                            component: e,
                        })
                      : null,
              ],
          });
}
