n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(660273),
    s = n(57907),
    a = n(867455),
    o = n(607508),
    c = n(37411);

function u(e) {
    let { channel: t, closePopout: n, onSelect: u, navId: d, label: p } = e,
        h = (0, i.A)(t, "Notifications Bell"),
        f = (0, s.A)(t),
        g = (0, o.X)(t);
    return (0, r.jsxs)(l.W1t, {
        "data-menu-migration-ready": !0,
        navId: d,
        onClose: n,
        "aria-label": p,
        onSelect: u,
        children: [
            (0, r.jsxs)(l.rXV, {
                children: [t.isForumPost() ? h : null, f],
            }),
            (0, r.jsx)(l.rXV, {
                children: (0, c.EU)().map((e) => {
                    let { setting: n, label: i } = e;
                    return (0, r.jsx)(
                        l.iDA,
                        {
                            group: "thread-notifications",
                            id: "".concat(n),
                            label: i,
                            action: () =>
                                a.A.setNotificationSettings(t, {
                                    flags: n,
                                }),
                            checked: n === g,
                        },
                        n,
                    );
                }),
            }),
        ],
    });
}
