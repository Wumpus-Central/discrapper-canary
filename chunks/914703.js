e.d(t, { A: () => h });
var a = e(477900);
e(582128);
var n = e(980707),
    s = e(477782),
    r = e(660273),
    c = e(57907),
    o = e(867455),
    d = e(607508),
    l = e(37411);
function h(i) {
    let { channel: t, closePopout: e, onSelect: h, navId: u, label: p } = i,
        f = (0, r.A)(t, "Notifications Bell"),
        k = (0, c.A)(t),
        b = (0, d.X)(t);
    return (0, a.jsxs)(n.W, {
        "data-menu-migrated-auto": !0,
        navId: u,
        onClose: e,
        "aria-label": p,
        onSelect: h,
        children: [
            (0, a.jsxs)(s.rX, { children: [f, k] }),
            (0, a.jsx)(s.rX, {
                children: (0, l.EU)().map((i) => {
                    let { setting: e, label: n } = i;
                    return (0, a.jsx)(
                        s.iD,
                        {
                            group: "thread-notifications",
                            id: `${e}`,
                            label: n,
                            action: () => o.A.setNotificationSettings(t, { flags: e }),
                            checked: e === b,
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
