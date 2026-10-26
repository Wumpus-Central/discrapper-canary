e.d(t, { A: () => u });
var a = e(477900);
e(582128);
var n = e(980707),
    s = e(477782),
    r = e(660273),
    c = e(804006),
    l = e(57907),
    o = e(472456),
    d = e(607508),
    h = e(37411);
function u(i) {
    let { channel: t, closePopout: e, onSelect: u, navId: p, label: f } = i,
        j = (0, r.A)(t, "Notifications Bell"),
        k = (0, c.A)(t, "Notifications Bell"),
        x = (0, l.A)(t),
        A = (0, d.X)(t);
    return (0, a.jsxs)(n.W, {
        "data-menu-migrated-auto": !0,
        navId: p,
        onClose: e,
        "aria-label": f,
        onSelect: u,
        children: [
            (0, a.jsxs)(s.rX, { children: [j, x] }),
            (0, a.jsx)(s.rX, {
                children: (0, h.EU)().map((i) => {
                    let { setting: e, label: n } = i;
                    return (0, a.jsx)(
                        s.iD,
                        {
                            group: "thread-notifications",
                            id: `${e}`,
                            label: n,
                            action: () => o.A.setNotificationSettings(t, { flags: e }),
                            checked: e === A,
                        },
                        e,
                    );
                }),
            }),
            (0, a.jsx)(s.rX, { children: k }),
        ],
    });
}
