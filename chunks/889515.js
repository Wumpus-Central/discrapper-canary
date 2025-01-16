t.d(n, {
    Z: function () {
        return o;
    }
});
var l = t(200651);
t(192379);
var i = t(739754),
    r = t(970184),
    a = t(792436);
function o(e) {
    let { components: n, renderComponents: t } = e,
        { message: o } = (0, r.CJ)();
    return null == n || 0 === n.length
        ? null
        : (0, l.jsxs)('div', {
              className: a.container,
              children: [
                  (0, l.jsx)('div', {
                      className: a.children,
                      children: t(n)
                  }),
                  null != o
                      ? (0, l.jsx)(i.ZP, {
                            className: a.error,
                            message: o,
                            component: e
                        })
                      : null
              ]
          });
}
