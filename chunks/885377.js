i.d(a, { A: () => o }), i(321073);
var n,
    t = i(627968),
    l = i(64700),
    s = i(189213),
    r = i(82002),
    c =
        (((n = c || {}).UPGRADE = "UPGRADE"),
        (n.CANCEL = "CANCEL"),
        (n.UNVERIFIED = "UNVERIFIED"),
        (n.UNCLAIMED = "UNCLAIMED"),
        (n.GRANDFATHERED = "GRANDFATHERED"),
        n);
let d = {
        UPGRADE: "imageUpgrade",
        CANCEL: "imageCancel",
        UNVERIFIED: "imageUnverified",
        UNCLAIMED: "imageUnclaimed",
        GRANDFATHERED: "imageCancel",
    },
    m = (e) => {
        let { children: a, premiumModalType: i, primary: n, secondary: c, ...m } = e,
            o = l.useMemo(() => {
                let e = [];
                return (
                    null != c && e.push({ variant: "secondary", text: c.label, onClick: c.onClick }),
                    null != n && e.push({ variant: "primary", text: n.label, onClick: n.onClick }),
                    e
                );
            }, [n, c]);
        return (0, t.jsxs)(s.Modal, {
            ...m,
            actions: o,
            children: [
                (0, t.jsx)("div", { className: r[d[i]] }),
                (0, t.jsx)("div", { className: r.message, children: a }),
            ],
        });
    };
m.Types = c;
let o = m;
