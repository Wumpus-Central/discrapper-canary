n.d(t, { Z: () => b });
var r = n(255367),
    a = n(73800),
    i = n(442837),
    l = n(481060),
    o = n(194359),
    s = n(367907),
    c = n(681678),
    d = n(138201),
    u = n(592125),
    m = n(699516),
    p = n(5192),
    _ = n(981631),
    g = n(388032);
let b = (e) => {
    let { user: t, channelId: n, reportId: b, reportType: x } = e,
        h = (0, i.e7)([m.Z], () => m.Z.isBlocked(t.id), [t.id]),
        f = (0, i.e7)([u.Z], () => u.Z.getChannel(n), [n]),
        v = a.useMemo(() => p.ZP.getName(null == f ? void 0 : f.guild_id, null == f ? void 0 : f.id, t), [f, t]),
        j = a.useCallback(() => {
            (s.ZP.trackWithMetadata(_.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: b
            }),
                o.Z.blockUser(t.id, { location: 'ReportMenuBlockUser-iOS' }).then(() => {
                    c.Z.showBlockSuccessToast(t.id, n);
                }));
        }, [t, b, n]);
    return (0, r.jsx)(d.ZP, {
        title: g.intl.formatToPlainString(g.t['Q1o/f3'], { username: v }),
        description: g.intl.string(g.t.G08MKi),
        buttonText: h ? g.intl.string(g.t.ot2tSk) : g.intl.string(g.t['l+7PZW']),
        buttonDisabled: h,
        onButtonPress: j,
        buttonColor: 'application' === x.name && h ? l.zxk.Colors.WHITE : l.zxk.Colors.RED,
        buttonLook: 'application' === x.name && h ? l.zxk.Looks.LINK : l.zxk.Looks.FILLED
    });
};
