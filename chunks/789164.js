n.d(t, { h: () => d });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(15127),
    s = n(512983),
    l = n(212176);
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = u(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
        { children: u, className: d, titleClassName: f, title: _, disabled: p, htmlFor: h, tag: m = "h5" } = e,
        g = c(e, ["children", "className", "titleClassName", "title", "disabled", "htmlFor", "tag"]);
    let E = i.useId(),
        b = null != (n = g.titleId) ? n : E;
    return (0, r.jsx)("div", {
        ref: t,
        className: d,
        children:
            null != _
                ? (0, r.jsx)(a.y5t, {
                      component: (0, r.jsx)("div", {
                          className: l.sectionTitle,
                          children:
                              null != _
                                  ? (0, r.jsx)(s.v, {
                                        tag: m,
                                        id: b,
                                        htmlFor: h,
                                        disabled: p,
                                        className: f,
                                        children: _,
                                    })
                                  : null,
                      }),
                      children: (0, r.jsx)("div", {
                          className: l.children,
                          children: (0, r.jsx)(o.ol, {
                              titleId: b,
                              children: u,
                          }),
                      }),
                  })
                : u,
    });
});
