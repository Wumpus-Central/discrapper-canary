n.d(t, { A: () => p });
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(832712),
    s = n(58149),
    d = n(662502),
    o = n(632738),
    c = n(734057),
    u = n(543465),
    _ = n(562153),
    m = n(477427),
    h = n(652215),
    g = n(985018);
let p = (e) => {
    let { user: t, channelId: n, reportId: p } = e,
        x = c.A.getDMFromUserId(t.id),
        A = (0, i.bG)([c.A], () => c.A.getChannel(n), [n]),
        f = a.useMemo(() => _.Ay.getName(A?.guild_id, A?.id, t), [A, t]),
        v = (0, i.bG)([u.Ay], () => (null == x ? null : u.Ay.isChannelMuted(null, x))),
        [b, N] = a.useState(v ?? !1),
        E = a.useCallback(() => {
            null != x &&
                (N(!0),
                s.Ay.trackWithMetadata(h.HAw.IAR_MUTE_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: p }),
                r.A.updateChannelOverrideSettings(null, x, { muted: !0 }, m.fd.Muted),
                d.A.showMuteSuccessToast(t.id, n));
        }, [x, n, t, p]);
    return (0, l.jsx)(o.PQ, {
        title: g.intl.formatToPlainString(g.t.TRp5wR, { username: f }),
        description: g.intl.string(g.t["yM/+AJ"]),
        buttonText: b ? g.intl.string(g.t.E8x4Nj) : g.intl.string(g.t.HITUcR),
        buttonDisabled: b,
        onButtonPress: E,
    });
};
