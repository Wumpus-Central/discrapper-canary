n.d(t, { A: () => h });
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(832712),
    s = n(58149),
    d = n(662502),
    o = n(632738),
    u = n(734057),
    c = n(543465),
    m = n(562153),
    _ = n(477427),
    x = n(652215),
    g = n(985018);
let h = (e) => {
    let { user: t, channelId: n, reportId: h } = e,
        p = u.A.getDMFromUserId(t.id),
        A = (0, i.bG)([u.A], () => u.A.getChannel(n), [n]),
        b = a.useMemo(() => m.Ay.getName(A?.guild_id, A?.id, t), [A, t]),
        v = (0, i.bG)([c.Ay], () => (null == p ? null : c.Ay.isChannelMuted(null, p))),
        [f, j] = a.useState(v ?? !1),
        T = a.useCallback(() => {
            null != p &&
                (j(!0),
                s.Ay.trackWithMetadata(x.HAw.IAR_MUTE_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: h }),
                r.A.updateChannelOverrideSettings(null, p, { muted: !0 }, _.fd.Muted),
                d.A.showMuteSuccessToast(t.id, n));
        }, [p, n, t, h]);
    return (0, l.jsx)(o.PQ, {
        title: g.intl.formatToPlainString(g.t.TRp5wR, { username: b }),
        description: g.intl.string(g.t["yM/+AJ"]),
        buttonText: f ? g.intl.string(g.t.E8x4Nj) : g.intl.string(g.t.HITUcR),
        buttonDisabled: f,
        onButtonPress: T,
    });
};
