n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(793574),
    r = n(73028),
    s = n(763754),
    o = n(888675),
    d = n(985018);
function c(e) {
    let { message: t, usernameHook: n, compact: c } = e,
        u = (0, s.Ay)(t),
        m = n(u);
    return (0, i.jsx)(o.A, {
        iconNode: (0, i.jsx)(l.R2l, { size: "xs", color: "currentColor" }),
        timestamp: t.timestamp,
        compact: c,
        children: d.intl.format(d.t["4wLp25"], {
            username: u.nick,
            usernameHook: m,
            editGroupButton: (0, i.jsx)(
                l.Text,
                { tag: "span", variant: "text-md/medium", color: "text-link", children: d.intl.string(d.t["5Q9+/L"]) },
                `edit-group-button-${t.id}`,
            ),
            onEditGroup: () => (0, r.U)(t.channel_id, a.A.GROUP_DM_SYSTEM_MESSAGE_ICON),
        }),
    });
}
