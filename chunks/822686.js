n.d(t, { Z: () => x }), n(388685);
var r = n(200651),
    l = n(192379),
    i = n(481060),
    a = n(904245),
    o = n(367907),
    s = n(138201),
    c = n(592125),
    d = n(496675),
    u = n(981631),
    m = n(388032);
let x = (e) => {
    let { message: t, reportId: n } = e,
        [x, p] = l.useState(!1),
        b = l.useCallback(() => {
            p(!0), o.ZP.trackWithMetadata(u.rMx.IAR_DELETE_MESSAGE_BUTTON_CLICKED, { report_id: n }), a.Z.deleteMessage(t.getChannelId(), t.id);
        }, [t, n]),
        _ = l.useMemo(() => {
            let e = c.Z.getChannel(t.getChannelId());
            return null != e && e.type !== u.d4z.DM && e.type !== u.d4z.GROUP_DM && d.Z.canWithPartialContext(u.Plq.MANAGE_MESSAGES, { channelId: e.id });
        }, [t]);
    return null != t && _
        ? (0, r.jsx)(s.ZP, {
              title: m.intl.string(m.t.c9BHLy),
              description: m.intl.string(m.t.dK8S09),
              buttonText: x ? m.intl.string(m.t.f3pnLC) : m.intl.string(m.t.ch2xbm),
              buttonDisabled: x,
              buttonColor: i.zxk.Colors.RED,
              onButtonPress: b
          })
        : null;
};
