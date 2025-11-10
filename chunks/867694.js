n.d(t, { I: () => i });
var r = n(951288),
    l = n(481060),
    o = n(550964);
function i(e) {
    var t;
    let { node: n } = e,
        {
            useValue: i,
            setValue: a,
            useTitle: c,
            useSubtitle: s,
            useDisabled: u,
            useDisabledMessage: d,
            useBadge: f,
        } = n,
        b = c(),
        p = null == s ? void 0 : s(),
        y = i(),
        j = null != (t = null == u ? void 0 : u()) && t,
        m = null == d ? void 0 : d(),
        v = null == f ? void 0 : f();
    return (0, r.jsxs)(o.X, {
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
