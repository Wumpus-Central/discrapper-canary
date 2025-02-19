n.d(t, { h: () => d });
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(15127),
    s = n(512983),
    l = n(84705);
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = u(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let d = i.forwardRef(function (e, t) {
    var n,
        { children: u, className: d, titleClassName: f, title: p, icon: _, disabled: h, htmlFor: m, tag: g = 'h5' } = e,
        E = c(e, ['children', 'className', 'titleClassName', 'title', 'icon', 'disabled', 'htmlFor', 'tag']);
    let v = i.useId(),
        b = null !== (n = E.titleId) && void 0 !== n ? n : v;
    return (0, r.jsx)('div', {
        ref: t,
        className: d,
        children:
            null != p
                ? (0, r.jsx)(o.y5t, {
                      component: (0, r.jsxs)('div', {
                          className: l.sectionTitle,
                          children: [
                              _,
                              null != p
                                  ? (0, r.jsx)(s.v, {
                                        tag: g,
                                        id: b,
                                        htmlFor: m,
                                        disabled: h,
                                        className: f,
                                        children: p
                                    })
                                  : null
                          ]
                      }),
                      children: (0, r.jsx)('div', {
                          className: l.children,
                          children: (0, r.jsx)(a.ol, {
                              titleId: b,
                              children: u
                          })
                      })
                  })
                : u
    });
});
