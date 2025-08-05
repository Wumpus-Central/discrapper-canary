n.d(t, { Z: () => _ });
var r = n(255367),
    l = n(73800),
    i = n(442837),
    a = n(755721),
    s = n(194359),
    o = n(367907),
    c = n(681678),
    d = n(138201),
    u = n(592125),
    m = n(699516),
    p = n(5192),
    g = n(981631),
    x = n(388032);
let _ = (e) => {
    let { user: t, channelId: n, reportId: _, reportType: b } = e,
        h = (0, i.e7)([m.Z], () => m.Z.isBlocked(t.id), [t.id]),
        f = (0, i.e7)([u.Z], () => u.Z.getChannel(n), [n]),
        v = l.useMemo(() => p.ZP.getName(null == f ? void 0 : f.guild_id, null == f ? void 0 : f.id, t), [f, t]),
        j = l.useCallback(() => {
            (o.ZP.trackWithMetadata(g.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: _
            }),
                s.Z.blockUser(t.id, { location: 'ReportMenuBlockUser-iOS' }).then(() => {
                    c.Z.showBlockSuccessToast(t.id, n);
                }));
        }, [t, _, n]);
    return (0, r.jsx)(d.ZP, {
        title: x.intl.formatToPlainString(x.t['Q1o/f3'], { username: v }),
        description: x.intl.string(x.t.G08MKi),
        buttonText: h ? x.intl.string(x.t.ot2tSk) : x.intl.string(x.t['l+7PZW']),
        buttonDisabled: h,
        onButtonPress: j,
        buttonColor: 'application' === b.name && h ? a.zx.Colors.WHITE : a.zx.Colors.RED,
        buttonLook: 'application' === b.name && h ? a.zx.Looks.LINK : a.zx.Looks.FILLED
    });
};
