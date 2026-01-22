n.d(t, {
    A: () => p,
});
var l = n(627968),
    r = n(64700),
    a = n(311907),
    i = n(49229),
    s = n(58149),
    o = n(632738),
    c = n(734057),
    d = n(994500),
    u = n(562153),
    m = n(652215),
    b = n(985018);
let p = (e) => {
    let { user: t, channelId: n, reportId: p } = e,
        { isIgnored: x, isBlocked: g } = (0, a.cf)(
            [d.A],
            () => ({
                isIgnored: d.A.isIgnored(t.id),
                isBlocked: d.A.isBlocked(t.id),
            }),
            [t],
        ),
        f = (0, a.bG)([c.A], () => c.A.getChannel(n), [n]),
        v = r.useMemo(() => u.Ay.getName(null == f ? void 0 : f.guild_id, null == f ? void 0 : f.id, t), [f, t]),
        h = r.useCallback(() => {
            s.Ay.trackWithMetadata(m.HAw.IAR_IGNORE_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: p,
            }),
                i.A.ignoreUser(t.id, "web_iar_ignore_user_element", n);
        }, [t, p, n]),
        j = r.useMemo(() => x || g, [x, g]);
    return (0, l.jsx)(o.PQ, {
        title: b.intl.formatToPlainString(b.t.U3yyFs, {
            username: v,
        }),
        description: b.intl.string(b.t.naWE6W),
        buttonText: j ? b.intl.string(b.t.nDdxOG) : b.intl.string(b.t.ICYEfY),
        buttonDisabled: j,
        onButtonPress: h,
    });
};
