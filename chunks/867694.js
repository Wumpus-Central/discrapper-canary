n.d(t, { I: () => o });
var r = n(951288),
    l = n(481060);
function o(e) {
    var t;
    let { node: n } = e,
        { useValue: o, setValue: i, useTitle: a, useSubtitle: s, useDisabled: c, useDisabledMessage: u } = n,
        d = a(),
        f = null == s ? void 0 : s(),
        m = o(),
        b = null != (t = null == c ? void 0 : c()) && t,
        j = null == u ? void 0 : u();
    return (0, r.jsxs)(l.Kqy, {
        children: [
            (0, r.jsx)(l.rsf, {
                label: d,
                description: f,
                checked: m,
                onChange: (e) => i(e),
                disabled: b,
            }),
            b && null != j
                ? (0, r.jsx)(l.Wn, {
                      messageType: l.QYI.WARNING,
                      children: j,
                  })
                : null,
        ],
    });
}
