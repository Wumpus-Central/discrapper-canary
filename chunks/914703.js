n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(861672),
    s = n(477782),
    a = n(660273),
    r = n(57907),
    o = n(867455),
    d = n(607508),
    c = n(37411);
function u(e) {
    let { channel: t, closePopout: n, onSelect: u, navId: h, label: A } = e,
        _ = (0, a.A)(t, "Notifications Bell"),
        m = (0, r.A)(t),
        g = (0, d.X)(t);
    return (0, i.jsxs)(l.W, {
        "data-menu-migrated-auto": !0,
        navId: h,
        onClose: n,
        "aria-label": A,
        onSelect: u,
        children: [
            (0, i.jsxs)(s.rX, { children: [t.isForumPost() ? _ : null, m] }),
            (0, i.jsx)(s.rX, {
                children: (0, c.EU)().map((e) => {
                    let { setting: n, label: l } = e;
                    return (0, i.jsx)(
                        s.iD,
                        {
                            group: "thread-notifications",
                            id: `${n}`,
                            label: l,
                            action: () => o.A.setNotificationSettings(t, { flags: n }),
                            checked: n === g,
                        },
                        n,
                    );
                }),
            }),
        ],
    });
}
