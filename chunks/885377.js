i(321073);
var s,
    l = i(477900),
    n = i(582128),
    E = i(189213),
    c = i(456987),
    r =
        (((s = r || {}).UPGRADE = "UPGRADE"),
        (s.CANCEL = "CANCEL"),
        (s.UNVERIFIED = "UNVERIFIED"),
        (s.UNCLAIMED = "UNCLAIMED"),
        (s.GRANDFATHERED = "GRANDFATHERED"),
        s);
let t = {
    UPGRADE: "imageUpgrade",
    CANCEL: "imageCancel",
    UNVERIFIED: "imageUnverified",
    UNCLAIMED: "imageUnclaimed",
    GRANDFATHERED: "imageCancel",
};
function C(e) {
    let { children: a, premiumModalType: i, primary: s, secondary: r, ...C } = e,
        A = n.useMemo(() => {
            let e = [];
            return (
                null != r && e.push({ variant: "secondary", text: r.label, onClick: r.onClick }),
                null != s && e.push({ variant: "primary", text: s.label, onClick: s.onClick }),
                e
            );
        }, [s, r]);
    return (0, l.jsxs)(E.a, {
        ...C,
        actions: A,
        children: [(0, l.jsx)("div", { className: c[t[i]] }), (0, l.jsx)("div", { className: c.message, children: a })],
    });
}
((C.Types = r), i.d(a, {}, { A: C }));
