i.d(a, { A: () => A }), i(321073);
var l,
    s = i(627968),
    n = i(64700),
    E = i(189213),
    c = i(82002),
    t =
        (((l = t || {}).UPGRADE = "UPGRADE"),
        (l.CANCEL = "CANCEL"),
        (l.UNVERIFIED = "UNVERIFIED"),
        (l.UNCLAIMED = "UNCLAIMED"),
        (l.GRANDFATHERED = "GRANDFATHERED"),
        l);
let r = {
    UPGRADE: "imageUpgrade",
    CANCEL: "imageCancel",
    UNVERIFIED: "imageUnverified",
    UNCLAIMED: "imageUnclaimed",
    GRANDFATHERED: "imageCancel",
};
function C(e) {
    let { children: a, premiumModalType: i, primary: l, secondary: t, ...C } = e,
        A = n.useMemo(() => {
            let e = [];
            return (
                null != t && e.push({ variant: "secondary", text: t.label, onClick: t.onClick }),
                null != l && e.push({ variant: "primary", text: l.label, onClick: l.onClick }),
                e
            );
        }, [l, t]);
    return (0, s.jsxs)(E.Modal, {
        ...C,
        actions: A,
        children: [(0, s.jsx)("div", { className: c[r[i]] }), (0, s.jsx)("div", { className: c.message, children: a })],
    });
}
C.Types = t;
let A = C;
