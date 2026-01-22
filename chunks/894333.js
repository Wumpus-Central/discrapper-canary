n.d(t, { A: () => o });
var i = n(627968),
    l = n(158954),
    s = n(311907),
    r = n(610136),
    a = n(594061),
    d = n(985018);
function o(e) {
    let { guildId: t } = e,
        n = (0, s.bG)([r.A], () => r.A.getGuildAlertSettings()[t]);
    return (0, i.jsxs)(l.BJc, {
        gap: 24,
        children: [
            (0, i.jsx)(l.dOG, {
                checked: !(null == n ? void 0 : n.disableRaidAlertNag),
                label: d.intl.string(d.t.u6dc5B),
                description: d.intl.string(d.t.z8Td48),
                onChange: (e) =>
                    (0, a.TG)(
                        t,
                        (t) => {
                            t.disableRaidAlertNag = !e;
                        },
                        a.Sb.INFREQUENT_USER_ACTION,
                    ),
            }),
            (0, i.jsx)(l.dOG, {
                checked: !(null == n ? void 0 : n.disableRaidAlertPush),
                label: d.intl.string(d.t.P8MG6q),
                description: d.intl.string(d.t.PyxXs8),
                onChange: (e) =>
                    (0, a.TG)(
                        t,
                        (t) => {
                            t.disableRaidAlertPush = !e;
                        },
                        a.Sb.INFREQUENT_USER_ACTION,
                    ),
            }),
        ],
    });
}
