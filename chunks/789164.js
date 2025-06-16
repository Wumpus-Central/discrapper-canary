n.d(t, { h: () => d });
var r = n(255367),
    i = n(73800),
    a = n(481060),
    o = n(15127),
    s = n(512983),
    l = n(377747);
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = u(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let d = i.forwardRef(function (e, t) {
    var n,
        { children: u, className: d, titleClassName: f, title: _, icon: p, disabled: h, htmlFor: m, tag: g = 'h5' } = e,
        E = c(e, ['children', 'className', 'titleClassName', 'title', 'icon', 'disabled', 'htmlFor', 'tag']);
    let b = i.useId(),
        y = null != (n = E.titleId) ? n : b;
    return (0, r.jsx)('div', {
        ref: t,
        className: d,
        children:
            null != _
                ? (0, r.jsx)(a.y5t, {
                      component: (0, r.jsxs)('div', {
                          className: l.sectionTitle,
                          children: [
                              p,
                              null != _
                                  ? (0, r.jsx)(s.v, {
                                        tag: g,
                                        id: y,
                                        htmlFor: m,
                                        disabled: h,
                                        className: f,
                                        children: _
                                    })
                                  : null
                          ]
                      }),
                      children: (0, r.jsx)('div', {
                          className: l.children,
                          children: (0, r.jsx)(o.ol, {
                              titleId: y,
                              children: u
                          })
                      })
                  })
                : u
    });
});
