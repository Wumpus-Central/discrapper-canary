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
        } = n,
        p = l(),
        _ = null == c ? void 0 : c(),
        m = o(),
        h = null != (t = null == u ? void 0 : u()) && t,
        g = null == d ? void 0 : d(),
        E = null == f ? void 0 : f();
    return (0, r.jsxs)(a.X, {
        children: [
            (0, r.jsx)(i.rsf, {
                label: p,
                description: _,
                badge: E,
                checked: m,
                onChange: (e) => s(e),
                disabled: h,
            }),
            h && null != g
                ? (0, r.jsx)(i.Wn, {
                      messageType: i.QYI.WARNING,
                      children: g,
                  })
                : null,
        ],
    });
}
