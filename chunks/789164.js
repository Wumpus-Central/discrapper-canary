r.d(n, {
    h: function () {
        return c;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(481060),
    o = r(15127),
    l = r(512983),
    u = r(734141);
let c = a.forwardRef(function (e, n) {
    var r;
    let { children: c, className: d, titleClassName: f, title: _, icon: h, disabled: p, htmlFor: m, tag: g = 'h5', ...E } = e,
        v = a.useId(),
        I = null !== (r = E.titleId) && void 0 !== r ? r : v;
    return (0, i.jsx)('div', {
        ref: n,
        className: d,
        children:
            null != _
                ? (0, i.jsx)(s.HeadingLevel, {
                      component: (0, i.jsxs)('div', {
                          className: u.sectionTitle,
                          children: [
                              h,
                              null != _
                                  ? (0, i.jsx)(l.v, {
                                        tag: g,
                                        id: I,
                                        htmlFor: m,
                                        disabled: p,
                                        className: f,
                                        children: _
                                    })
                                  : null
                          ]
                      }),
                      children: (0, i.jsx)('div', {
                          className: u.children,
                          children: (0, i.jsx)(o.ol, {
                              titleId: I,
                              children: c
                          })
                      })
                  })
                : c
    });
});
