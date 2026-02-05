i.d(t, { A: () => o });
var n = i(627968),
    s = i(158954),
    l = i(311907),
    a = i(610136),
    r = i(594061),
    d = i(985018);
function o(e) {
    let { guildId: t } = e,
        i = (0, l.bG)([a.A], () => a.A.getGuildAlertSettings()[t]);
    return (0, n.jsxs)(s.BJc, {
        gap: 24,
        children: [
            (0, n.jsx)(s.dOG, {
                checked: !i?.disableRaidAlertNag,
                label: d.intl.string(d.t.u6dc5B),
                description: d.intl.string(d.t.z8Td48),
                onChange: (e) =>
                    (0, r.TG)(
                        t,
                        (t) => {
                            t.disableRaidAlertNag = !e;
                        },
                        r.Sb.INFREQUENT_USER_ACTION,
                    ),
            }),
            (0, n.jsx)(s.dOG, {
                checked: !i?.disableRaidAlertPush,
                label: d.intl.string(d.t.P8MG6q),
                description: d.intl.string(d.t.PyxXs8),
                onChange: (e) =>
                    (0, r.TG)(
                        t,
                        (t) => {
                            t.disableRaidAlertPush = !e;
                        },
                        r.Sb.INFREQUENT_USER_ACTION,
                    ),
            }),
        ],
    });
}
