n.d(t, {
    A: () => g,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    a = n(311907),
    i = n(832712),
    s = n(58149),
    o = n(662502),
    c = n(632738),
    d = n(734057),
    u = n(543465),
    m = n(562153),
    b = n(477427),
    p = n(652215),
    x = n(985018);
let g = (e) => {
    let { user: t, channelId: n, reportId: g } = e,
        f = d.A.getDMFromUserId(t.id),
        v = (0, a.bG)([d.A], () => d.A.getChannel(n), [n]),
        h = r.useMemo(() => m.Ay.getName(null == v ? void 0 : v.guild_id, null == v ? void 0 : v.id, t), [v, t]),
        j = (0, a.bG)([u.Ay], () => (null == f ? null : u.Ay.isChannelMuted(null, f))),
        [_, A] = r.useState(null != j && j),
        y = r.useCallback(() => {
            null != f &&
                (A(!0),
                s.Ay.trackWithMetadata(p.HAw.IAR_MUTE_USER_BUTTON_CLICKED, {
                    other_user_id: t.id,
                    report_id: g,
                }),
                i.A.updateChannelOverrideSettings(
                    null,
                    f,
                    {
                        muted: !0,
                    },
                    b.fd.Muted,
                ),
                o.A.showMuteSuccessToast(t.id, n));
        }, [f, n, t, g]);
    return (0, l.jsx)(c.PQ, {
        title: x.intl.formatToPlainString(x.t.TRp5wR, {
            username: h,
        }),
        description: x.intl.string(x.t["yM/+AJ"]),
        buttonText: _ ? x.intl.string(x.t.E8x4Nj) : x.intl.string(x.t.HITUcR),
        buttonDisabled: _,
        onButtonPress: y,
    });
};
