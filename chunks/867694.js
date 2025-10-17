n.d(t, { I: () => i });
var r = n(951288),
    l = n(481060),
    o = n(550964);
function i(e) {
    var t;
    let { node: n } = e,
        { useValue: i, setValue: a, useTitle: c, useSubtitle: s, useDisabled: u, useDisabledMessage: d } = n,
        f = c(),
        b = null == s ? void 0 : s(),
        p = i(),
        y = null != (t = null == u ? void 0 : u()) && t,
        j = null == d ? void 0 : d();
    return (0, r.jsxs)(o.X, {
        children: [
            (0, r.jsx)(l.rsf, {
                label: f,
                description: b,
                checked: p,
                onChange: (e) => a(e),
                disabled: y,
            }),
            y && null != j
                ? (0, r.jsx)(l.Wn, {
                      messageType: l.QYI.WARNING,
                      children: j,
                  })
                : null,
        ],
    });
}
