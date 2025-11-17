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
            useTitle: c,
            useSubtitle: s,
            useDisabled: u,
            useDisabledMessage: d,
            useBadge: f,
        } = n,
        b = c(),
        p = null == s ? void 0 : s(),
        y = o(),
        j = null != (t = null == u ? void 0 : u()) && t,
        m = null == d ? void 0 : d(),
        v = null == f ? void 0 : f();
    return (0, r.jsxs)(i.X, {
        children: [
            (0, r.jsx)(l.rsf, {
                label: b,
                description: p,
                badge: v,
                checked: y,
                onChange: (e) => a(e),
                disabled: j,
            }),
            j && null != m
                ? (0, r.jsx)(l.Wn, {
                      messageType: l.QYI.WARNING,
                      children: m,
                  })
                : null,
        ],
    });
}
