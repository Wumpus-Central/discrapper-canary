n.d(t, { I: () => i });
var r = n(951288),
    o = n(481060),
    l = n(550964);
function i(e) {
    var t;
    let { node: n } = e,
        { useValue: i, setValue: a, useTitle: c, useSubtitle: s, useDisabled: u, useDisabledMessage: d } = n,
        f = c(),
        b = null == s ? void 0 : s(),
        p = i(),
        y = null != (t = null == u ? void 0 : u()) && t,
        j = null == d ? void 0 : d();
    return (0, r.jsxs)(l.X, {
        children: [
            (0, r.jsx)(o.rsf, {
                label: f,
                description: b,
                checked: p,
                onChange: (e) => a(e),
                disabled: y,
            }),
            y && null != j
                ? (0, r.jsx)(o.Wn, {
                      messageType: o.QYI.WARNING,
                      children: j,
                  })
                : null,
        ],
    });
}
