(n.d(t, { Z: () => p }), n(388685));
var r = n(255367),
    a = n(73800),
    i = n(481060),
    l = n(904245),
    o = n(367907),
    s = n(138201),
    c = n(592125),
    d = n(496675),
    u = n(981631),
    m = n(388032);
let p = (e) => {
    let { message: t, reportId: n } = e,
        [p, _] = a.useState(!1),
        g = a.useCallback(() => {
            (_(!0), o.ZP.trackWithMetadata(u.rMx.IAR_DELETE_MESSAGE_BUTTON_CLICKED, { report_id: n }), l.Z.deleteMessage(t.getChannelId(), t.id));
        }, [t, n]),
        b = a.useMemo(() => {
            let e = c.Z.getChannel(t.getChannelId());
            return null != e && e.type !== u.d4z.DM && e.type !== u.d4z.GROUP_DM && d.Z.canWithPartialContext(u.Plq.MANAGE_MESSAGES, { channelId: e.id });
        }, [t]);
    return null != t && b
        ? (0, r.jsx)(s.ZP, {
              title: m.intl.string(m.t.c9BHLy),
              description: m.intl.string(m.t.dK8S09),
              buttonText: p ? m.intl.string(m.t.f3pnLC) : m.intl.string(m.t.ch2xbm),
              buttonDisabled: p,
              buttonColor: i.zxk.Colors.RED,
              onButtonPress: g
          })
        : null;
};
