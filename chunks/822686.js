var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(481060),
    l = r(904245),
    u = r(367907),
    c = r(138201),
    d = r(592125),
    f = r(496675),
    _ = r(981631),
    h = r(388032);
let p = (e) => {
    let { message: n, reportId: r } = e,
        [i, p] = s.useState(!1),
        m = s.useCallback(() => {
            p(!0), u.ZP.trackWithMetadata(_.rMx.IAR_DELETE_MESSAGE_BUTTON_CLICKED, { report_id: r }), l.Z.deleteMessage(n.getChannelId(), n.id);
        }, [n, r]),
        g = s.useMemo(() => {
            let e = d.Z.getChannel(n.getChannelId());
            return null != e && e.type !== _.d4z.DM && e.type !== _.d4z.GROUP_DM && f.Z.canWithPartialContext(_.Plq.MANAGE_MESSAGES, { channelId: e.id });
        }, [n]);
    return null != n && g
        ? (0, a.jsx)(c.ZP, {
              title: h.intl.string(h.t.c9BHLy),
              description: h.intl.string(h.t.dK8S09),
              buttonText: i ? h.intl.string(h.t.f3pnLC) : h.intl.string(h.t.ch2xbm),
              buttonDisabled: i,
              buttonColor: o.Button.Colors.RED,
              onButtonPress: m
          })
        : null;
};
n.Z = p;
