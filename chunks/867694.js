n.d(t, { I: () => o });
var r = n(54381),
    i = n(481060),
    a = n(550964);
function o(e) {
    var t;
    let { node: n } = e,
        {
            useValue: o,
            setValue: s,
            useTitle: l,
            useSubtitle: c,
            useDisabled: u,
            useDisabledMessage: d,
            useBadge: f,
            hasIcon: p,
        } = n,
        _ = l(),
        m = null == c ? void 0 : c(),
        h = o(),
        g = null != (t = null == u ? void 0 : u()) && t,
        E = null == d ? void 0 : d(),
        b = null == f ? void 0 : f();
    return (0, r.jsxs)(a.X, {
        children: [
            (0, r.jsx)(i.rsf, {
                label: _,
                description: m,
                badge: b,
                checked: h,
                hasIcon: p,
                onChange: (e) => s(e),
                disabled: g,
            }),
            g && null != E
                ? (0, r.jsx)(i.Wn, {
                      messageType: i.QYI.WARNING,
                      children: E,
                  })
                : null,
        ],
    });
}
