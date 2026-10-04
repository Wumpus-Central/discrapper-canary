n.d(t, { F: () => d });
var l = n(477900),
    a = n(582128),
    i = n(732159),
    r = n(192308),
    s = n(248675),
    o = n(375708);
function u(e) {
    let { matchingBackup: t, onConfirm: n, transitionState: r, onClose: u } = e,
        [d, c] = a.useState(!1);
    return (0, l.jsx)(i.u, {
        transitionState: r,
        onClose: u,
        title: o.intl.string(s.default.jgRu87),
        subtitle: o.intl.string(s.default["3UbctB"]),
        confirmText: o.intl.string(s.default.HRwmHd),
        variant: "primary",
        checkboxProps:
            null != t
                ? {
                      label: o.intl.string(s.default["o0p/nQ"]),
                      description: o.intl.string(s.default.bfKm6w),
                      checked: d,
                      onChange: (e) => c(e),
                  }
                : void 0,
        onConfirm: () => n(d && null != t ? t : null),
    });
}
function d(e) {
    (0, r.openModalLazy)(() => Promise.resolve((t) => (0, l.jsx)(u, { ...t, ...e })));
}
