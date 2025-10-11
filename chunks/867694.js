n.d(t, { I: () => i });
var r = n(951288),
    l = n(481060),
    o = n(550964);
function i(e) {
    var t;
    let { node: n } = e,
        { useValue: i, setValue: a, useTitle: s, useSubtitle: c, useDisabled: u, useDisabledMessage: d } = n,
        f = s(),
        m = null == c ? void 0 : c(),
        b = i(),
        p = null != (t = null == u ? void 0 : u()) && t,
        j = null == d ? void 0 : d();
    return (0, r.jsxs)(o.X, {
        children: [
            (0, r.jsx)(l.rsf, {
                label: f,
                description: m,
                checked: b,
                onChange: (e) => a(e),
                disabled: p,
            }),
            p && null != j
                ? (0, r.jsx)(l.Wn, {
                      messageType: l.QYI.WARNING,
                      children: j,
                  })
                : null,
        ],
    });
}
