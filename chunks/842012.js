"use strict";
n.d(t, { A: () => g });
var a = n(627968),
    i = n(64700),
    r = n(311907),
    l = n(832712),
    s = n(58149),
    d = n(662502),
    o = n(632738),
    c = n(734057),
    u = n(543465),
    _ = n(562153),
    m = n(477427),
    p = n(652215),
    h = n(985018);
let g = (e) => {
    let { user: t, channelId: n, reportId: g } = e,
        f = c.A.getDMFromUserId(t.id),
        b = (0, r.bG)([c.A], () => c.A.getChannel(n), [n]),
        A = i.useMemo(() => _.Ay.getName(b?.guild_id, b?.id, t), [b, t]),
        x = (0, r.bG)([u.Ay], () => (null == f ? null : u.Ay.isChannelMuted(null, f))),
        [v, E] = i.useState(x ?? !1),
        I = i.useCallback(() => {
            null != f &&
                (E(!0),
                s.Ay.trackWithMetadata(p.HAw.IAR_MUTE_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: g }),
                l.A.updateChannelOverrideSettings(null, f, { muted: !0 }, m.fd.Muted),
                d.A.showMuteSuccessToast(t.id, n));
        }, [f, n, t, g]);
    return (0, a.jsx)(o.PQ, {
        title: h.intl.formatToPlainString(h.t.TRp5wR, { username: A }),
        description: h.intl.string(h.t["yM/+AJ"]),
        buttonText: v ? h.intl.string(h.t.E8x4Nj) : h.intl.string(h.t.HITUcR),
        buttonDisabled: v,
        onButtonPress: I,
    });
};
