n.d(t, { I: () => o });
var r = n(951288),
    l = n(481060);
function o(e) {
    var t;
    let { node: n } = e,
        { useValue: o, setValue: i, useTitle: a, useSubtitle: s, useDisabled: c, useDisabledMessage: u } = n,
        d = a(),
        f = null == s ? void 0 : s(),
        b = o(),
        m = null != (t = null == c ? void 0 : c()) && t,
        p = null == u ? void 0 : u();
    return (0, r.jsxs)(l.Kqy, {
        children: [
            (0, r.jsx)(l.rsf, {
                label: d,
                description: f,
                checked: b,
                onChange: (e) => i(e),
                disabled: m,
            }),
            m && null != p
                ? (0, r.jsx)(l.Wn, {
                      messageType: l.QYI.WARNING,
                      children: p,
                  })
                : null,
        ],
    });
}
