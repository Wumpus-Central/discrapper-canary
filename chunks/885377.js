i.d(a, { A: () => g }), i(321073);
var n,
    t = i(627968),
    l = i(64700),
    r = i(158954),
    s = i(672709),
    d =
        (((n = d || {}).UPGRADE = "UPGRADE"),
        (n.CANCEL = "CANCEL"),
        (n.UNVERIFIED = "UNVERIFIED"),
        (n.UNCLAIMED = "UNCLAIMED"),
        (n.GRANDFATHERED = "GRANDFATHERED"),
        n);
let m = {
        UPGRADE: "imageUpgrade",
        CANCEL: "imageCancel",
        UNVERIFIED: "imageUnverified",
        UNCLAIMED: "imageUnclaimed",
        GRANDFATHERED: "imageCancel",
    },
    c = (e) => {
        let { children: a, premiumModalType: i, primary: n, secondary: d, ...c } = e,
            g = l.useMemo(() => {
                let e = [];
                return (
                    null != d && e.push({ variant: "secondary", text: d.label, onClick: d.onClick }),
                    null != n && e.push({ variant: "primary", text: n.label, onClick: n.onClick }),
                    e
                );
            }, [n, d]);
        return (0, t.jsxs)(r.Modal, {
            ...c,
            actions: g,
            children: [
                (0, t.jsx)("div", { className: s[m[i]] }),
                (0, t.jsx)("div", { className: s.message, children: a }),
            ],
        });
    };
c.Types = d;
let g = c;
