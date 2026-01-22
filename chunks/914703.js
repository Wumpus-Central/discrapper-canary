n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(660273),
    a = n(57907),
    s = n(867455),
    o = n(607508),
    c = n(37411);
function u(e) {
    let { channel: t, closePopout: n, onSelect: u, navId: d, label: f } = e,
        p = (0, i.A)(t, "Notifications Bell"),
        h = (0, a.A)(t),
        b = (0, o.X)(t);
    return (0, r.jsxs)(l.W1t, {
        navId: d,
        onClose: n,
        "aria-label": f,
        onSelect: u,
        children: [
            (0, r.jsxs)(l.rXV, {
                children: [t.isForumPost() ? p : null, h],
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
                            action: () => s.A.setNotificationSettings(t, { flags: n }),
                            checked: n === b,
                        },
                        n,
                    );
                }),
            }),
        ],
    });
}
