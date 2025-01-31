n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(904245),
    o = n(367907),
    l = n(138201),
    u = n(592125),
    c = n(496675),
    d = n(981631),
    f = n(388032);
let _ = (e) => {
    let { message: t, reportId: n } = e,
        [_, p] = r.useState(!1),
        h = r.useCallback(() => {
            p(!0), o.ZP.trackWithMetadata(d.rMx.IAR_DELETE_MESSAGE_BUTTON_CLICKED, { report_id: n }), s.Z.deleteMessage(t.getChannelId(), t.id);
        }, [t, n]),
        m = r.useMemo(() => {
            let e = u.Z.getChannel(t.getChannelId());
            return null != e && e.type !== d.d4z.DM && e.type !== d.d4z.GROUP_DM && c.Z.canWithPartialContext(d.Plq.MANAGE_MESSAGES, { channelId: e.id });
        }, [t]);
    return null != t && m
        ? (0, i.jsx)(l.ZP, {
              title: f.intl.string(f.t.c9BHLy),
              description: f.intl.string(f.t.dK8S09),
              buttonText: _ ? f.intl.string(f.t.f3pnLC) : f.intl.string(f.t.ch2xbm),
              buttonDisabled: _,
              buttonColor: a.zxk.Colors.RED,
              onButtonPress: h
          })
        : null;
};
