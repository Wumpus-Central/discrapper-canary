n.d(t, { Z: () => h });
var r = n(200651),
    l = n(192379),
    i = n(442837),
    a = n(481060),
    o = n(194359),
    s = n(367907),
    c = n(681678),
    d = n(138201),
    u = n(592125),
    m = n(699516),
    x = n(5192),
    p = n(981631),
    b = n(388032);
let h = (e) => {
    let { user: t, channelId: n, reportId: h, reportType: _ } = e,
        f = (0, i.e7)([m.Z], () => m.Z.isBlocked(t.id), [t.id]),
        g = (0, i.e7)([u.Z], () => u.Z.getChannel(n), [n]),
        v = l.useMemo(() => x.ZP.getName(null == g ? void 0 : g.guild_id, null == g ? void 0 : g.id, t), [g, t]),
        j = l.useCallback(() => {
            s.ZP.trackWithMetadata(p.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: h
            }),
                o.Z.blockUser(t.id, { location: 'ReportMenuBlockUser-iOS' }).then(() => {
                    c.Z.showBlockSuccessToast(t.id, n);
                });
        }, [t, h, n]);
    return (0, r.jsx)(d.ZP, {
        title: b.intl.formatToPlainString(b.t['Q1o/f3'], { username: v }),
        description: b.intl.string(b.t.G08MKi),
        buttonText: f ? b.intl.string(b.t.ot2tSk) : b.intl.string(b.t['l+7PZW']),
        buttonDisabled: f,
        onButtonPress: j,
        buttonColor: 'application' === _.name && f ? a.zxk.Colors.WHITE : a.zxk.Colors.RED,
        buttonLook: 'application' === _.name && f ? a.zxk.Looks.LINK : a.zxk.Looks.FILLED
    });
};
