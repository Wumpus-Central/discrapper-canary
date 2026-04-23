n.d(t, { A: () => h });
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(49229),
    s = n(58149),
    d = n(632738),
    o = n(734057),
    c = n(994500),
    u = n(562153),
    _ = n(652215),
    m = n(985018);
let h = (e) => {
    let { user: t, channelId: n, reportId: h } = e,
        { isIgnored: g, isBlocked: p } = (0, i.cf)(
            [c.A],
            () => ({ isIgnored: c.A.isIgnored(t.id), isBlocked: c.A.isBlocked(t.id) }),
            [t],
        ),
        x = (0, i.bG)([o.A], () => o.A.getChannel(n), [n]),
        A = a.useMemo(() => u.Ay.getName(x?.guild_id, x?.id, t), [x, t]),
        f = a.useCallback(() => {
            s.Ay.trackWithMetadata(_.HAw.IAR_IGNORE_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: h }),
                r.A.ignoreUser(t.id, "web_iar_ignore_user_element", n);
        }, [t, h, n]),
        v = a.useMemo(() => g || p, [g, p]);
    return (0, l.jsx)(d.PQ, {
        title: m.intl.formatToPlainString(m.t.U3yyFs, { username: A }),
        description: m.intl.string(m.t.naWE6W),
        buttonText: v ? m.intl.string(m.t.nDdxOG) : m.intl.string(m.t.ICYEfY),
        buttonDisabled: v,
        onButtonPress: f,
    });
};
