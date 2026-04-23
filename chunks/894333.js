n.d(t, { A: () => c });
var i = n(627968),
    s = n(331322),
    l = n(243721),
    a = n(311907),
    r = n(610136),
    d = n(594061),
    o = n(985018);
function c(e) {
    let { guildId: t } = e,
        n = (0, a.bG)([r.A], () => r.A.getGuildAlertSettings()[t]);
    return (0, i.jsxs)(s.B, {
        gap: 24,
        children: [
            (0, i.jsx)(l.d, {
                checked: !n?.disableRaidAlertNag,
                label: o.intl.string(o.t.u6dc5B),
                description: o.intl.string(o.t.z8Td48),
                onChange: (e) =>
                    (0, d.TG)(
                        t,
                        (t) => {
                            t.disableRaidAlertNag = !e;
                        },
                        d.Sb.INFREQUENT_USER_ACTION,
                    ),
            }),
            (0, i.jsx)(l.d, {
                checked: !n?.disableRaidAlertPush,
                label: o.intl.string(o.t.P8MG6q),
                description: o.intl.string(o.t.PyxXs8),
                onChange: (e) =>
                    (0, d.TG)(
                        t,
                        (t) => {
                            t.disableRaidAlertPush = !e;
                        },
                        d.Sb.INFREQUENT_USER_ACTION,
                    ),
            }),
        ],
    });
}
