l.d(n, { Z: () => s });
var t = l(200651);
l(192379);
var i = l(739754),
    r = l(970184),
    a = l(244698);
function s(e) {
    let { components: n, renderComponents: l } = e,
        { message: s } = (0, r.CJ)();
    return null == n || 0 === n.length
        ? null
        : (0, t.jsxs)('div', {
              className: a.container,
              children: [
                  (0, t.jsx)('div', {
                      className: a.children,
                      children: l(n)
                  }),
                  null != s
                      ? (0, t.jsx)(i.ZP, {
                            className: a.error,
                            message: s,
                            component: e
                        })
                      : null
              ]
          });
}
