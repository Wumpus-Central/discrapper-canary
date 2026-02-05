n.d(t, { A: () => x });
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(49229),
    s = n(58149),
    d = n(632738),
    o = n(734057),
    u = n(994500),
    c = n(562153),
    m = n(652215),
    _ = n(985018);
let x = (e) => {
    let { user: t, channelId: n, reportId: x } = e,
        { isIgnored: g, isBlocked: h } = (0, i.cf)(
            [u.A],
            () => ({ isIgnored: u.A.isIgnored(t.id), isBlocked: u.A.isBlocked(t.id) }),
            [t],
        ),
        p = (0, i.bG)([o.A], () => o.A.getChannel(n), [n]),
        A = a.useMemo(() => c.Ay.getName(p?.guild_id, p?.id, t), [p, t]),
        b = a.useCallback(() => {
            s.Ay.trackWithMetadata(m.HAw.IAR_IGNORE_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: x }),
                r.A.ignoreUser(t.id, "web_iar_ignore_user_element", n);
        }, [t, x, n]),
        v = a.useMemo(() => g || h, [g, h]);
    return (0, l.jsx)(d.PQ, {
        title: _.intl.formatToPlainString(_.t.U3yyFs, { username: A }),
        description: _.intl.string(_.t.naWE6W),
        buttonText: v ? _.intl.string(_.t.nDdxOG) : _.intl.string(_.t.ICYEfY),
        buttonDisabled: v,
        onButtonPress: b,
    });
};
