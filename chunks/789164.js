r.d(n, {
    h: function () {
        return c;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(481060),
    s = r(15127),
    l = r(512983),
    u = r(734141);
let c = a.forwardRef(function (e, n) {
    var r;
    let { children: c, className: d, titleClassName: f, title: p, icon: h, disabled: _, htmlFor: m, tag: g = 'h5', ...E } = e,
        v = a.useId(),
        y = null !== (r = E.titleId) && void 0 !== r ? r : v;
    return (0, i.jsx)('div', {
        ref: n,
        className: d,
        children:
            null != p
                ? (0, i.jsx)(o.HeadingLevel, {
                      component: (0, i.jsxs)('div', {
                          className: u.sectionTitle,
                          children: [
                              h,
                              null != p
                                  ? (0, i.jsx)(l.v, {
                                        tag: g,
                                        id: y,
                                        htmlFor: m,
                                        disabled: _,
                                        className: f,
                                        children: p
                                    })
                                  : null
                          ]
                      }),
                      children: (0, i.jsx)('div', {
                          className: u.children,
                          children: (0, i.jsx)(s.ol, {
                              titleId: y,
                              children: c
                          })
                      })
                  })
                : c
    });
});
