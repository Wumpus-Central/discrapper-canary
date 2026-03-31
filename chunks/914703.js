n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(660273),
    a = n(57907),
    r = n(867455),
    o = n(607508),
    c = n(37411);
function d(e) {
    let { channel: t, closePopout: n, onSelect: d, navId: u, label: h } = e,
        A = (0, s.A)(t, "Notifications Bell"),
        _ = (0, a.A)(t),
        m = (0, o.X)(t);
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: u,
        onClose: n,
        "aria-label": h,
        onSelect: d,
        children: [
            (0, i.jsxs)(l.rXV, { children: [t.isForumPost() ? A : null, _] }),
            (0, i.jsx)(l.rXV, {
                children: (0, c.EU)().map((e) => {
                    let { setting: n, label: s } = e;
                    return (0, i.jsx)(
                        l.iDA,
                        {
                            group: "thread-notifications",
                            id: `${n}`,
                            label: s,
                            action: () => r.A.setNotificationSettings(t, { flags: n }),
                            checked: n === m,
                        },
                        n,
                    );
                }),
            }),
        ],
    });
}
