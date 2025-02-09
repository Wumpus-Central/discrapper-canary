n.d(t, { Z: () => x }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(481060),
    a = n(904245),
    s = n(367907),
    o = n(138201),
    d = n(592125),
    c = n(496675),
    u = n(981631),
    m = n(388032);
let x = (e) => {
    let { message: t, reportId: n } = e,
        [x, _] = i.useState(!1),
        h = i.useCallback(() => {
            _(!0), s.ZP.trackWithMetadata(u.rMx.IAR_DELETE_MESSAGE_BUTTON_CLICKED, { report_id: n }), a.Z.deleteMessage(t.getChannelId(), t.id);
        }, [t, n]),
        v = i.useMemo(() => {
            let e = d.Z.getChannel(t.getChannelId());
            return null != e && e.type !== u.d4z.DM && e.type !== u.d4z.GROUP_DM && c.Z.canWithPartialContext(u.Plq.MANAGE_MESSAGES, { channelId: e.id });
        }, [t]);
    return null != t && v
        ? (0, l.jsx)(o.ZP, {
              title: m.intl.string(m.t.c9BHLy),
              description: m.intl.string(m.t.dK8S09),
              buttonText: x ? m.intl.string(m.t.f3pnLC) : m.intl.string(m.t.ch2xbm),
              buttonDisabled: x,
              buttonColor: r.zxk.Colors.RED,
              onButtonPress: h
          })
        : null;
};
