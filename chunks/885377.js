i.d(a, { A: () => o }), i(321073);
var t,
    n = i(627968),
    l = i(64700),
    s = i(158954),
    r = i(82002),
    c =
        (((t = c || {}).UPGRADE = "UPGRADE"),
        (t.CANCEL = "CANCEL"),
        (t.UNVERIFIED = "UNVERIFIED"),
        (t.UNCLAIMED = "UNCLAIMED"),
        (t.GRANDFATHERED = "GRANDFATHERED"),
        t);
let d = {
        UPGRADE: "imageUpgrade",
        CANCEL: "imageCancel",
        UNVERIFIED: "imageUnverified",
        UNCLAIMED: "imageUnclaimed",
        GRANDFATHERED: "imageCancel",
    },
    m = (e) => {
        let { children: a, premiumModalType: i, primary: t, secondary: c, ...m } = e,
            o = l.useMemo(() => {
                let e = [];
                return (
                    null != c && e.push({ variant: "secondary", text: c.label, onClick: c.onClick }),
                    null != t && e.push({ variant: "primary", text: t.label, onClick: t.onClick }),
                    e
                );
            }, [t, c]);
        return (0, n.jsxs)(s.Modal, {
            ...m,
            actions: o,
            children: [
                (0, n.jsx)("div", { className: r[d[i]] }),
                (0, n.jsx)("div", { className: r.message, children: a }),
            ],
        });
    };
m.Types = c;
let o = m;
