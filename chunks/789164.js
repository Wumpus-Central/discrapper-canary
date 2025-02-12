n.d(t, { h: () => u });
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(15127),
    o = n(512983),
    l = n(17411);
let u = r.forwardRef(function (e, t) {
    var n;
    let { children: u, className: c, titleClassName: d, title: f, icon: _, disabled: p, htmlFor: h, tag: m = 'h5', ...g } = e,
        E = r.useId(),
        v = null !== (n = g.titleId) && void 0 !== n ? n : E;
    return (0, i.jsx)('div', {
        ref: t,
        className: c,
        children:
            null != f
                ? (0, i.jsx)(a.y5t, {
                      component: (0, i.jsxs)('div', {
                          className: l.sectionTitle,
                          children: [
                              _,
                              null != f
                                  ? (0, i.jsx)(o.v, {
                                        tag: m,
                                        id: v,
                                        htmlFor: h,
                                        disabled: p,
                                        className: d,
                                        children: f
                                    })
                                  : null
                          ]
                      }),
                      children: (0, i.jsx)('div', {
                          className: l.children,
                          children: (0, i.jsx)(s.ol, {
                              titleId: v,
                              children: u
                          })
                      })
                  })
                : u
    });
});
