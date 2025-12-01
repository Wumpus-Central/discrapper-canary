n.d(t, { I: () => o });
var r = n(54381),
    l = n(481060),
    i = n(550964);
function o(e) {
    var t;
    let { node: n } = e,
        {
            useValue: o,
            setValue: a,
            useTitle: s,
            useSubtitle: c,
            useDisabled: u,
            useDisabledMessage: d,
            useBadge: f,
        } = n,
        p = s(),
        b = null == c ? void 0 : c(),
        y = o(),
        g = null != (t = null == u ? void 0 : u()) && t,
        v = null == d ? void 0 : d(),
        m = null == f ? void 0 : f();
    return (0, r.jsxs)(i.X, {
        children: [
            (0, r.jsx)(l.rsf, {
                label: p,
                description: b,
                badge: m,
                checked: y,
                onChange: (e) => a(e),
                disabled: g,
            }),
            g && null != v
                ? (0, r.jsx)(l.Wn, {
                      messageType: l.QYI.WARNING,
                      children: v,
                  })
                : null,
        ],
    });
}
