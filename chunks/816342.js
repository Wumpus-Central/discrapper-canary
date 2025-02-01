n.d(t, { Z: () => m });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(194359),
    l = n(367907),
    u = n(681678),
    c = n(138201),
    d = n(592125),
    f = n(699516),
    _ = n(5192),
    p = n(981631),
    h = n(388032);
let m = (e) => {
    let { user: t, channelId: n, reportId: m, reportType: g } = e,
        E = (0, a.e7)([f.Z], () => f.Z.isBlocked(t.id), [t.id]),
        v = (0, a.e7)([d.Z], () => d.Z.getChannel(n), [n]),
        y = r.useMemo(() => _.ZP.getName(null == v ? void 0 : v.guild_id, null == v ? void 0 : v.id, t), [v, t]),
        I = r.useCallback(() => {
            l.ZP.trackWithMetadata(p.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: m
            }),
                o.Z.addRelationship({
                    userId: t.id,
                    context: { location: 'ReportMenuBlockUser-iOS' },
                    type: p.OGo.BLOCKED
                }),
                u.Z.showBlockSuccessToast(t.id, n);
        }, [t, m, n]);
    return (0, i.jsx)(c.ZP, {
        title: h.intl.formatToPlainString(h.t['Q1o/f3'], { username: y }),
        description: h.intl.string(h.t.G08MKi),
        buttonText: E ? h.intl.string(h.t.ot2tSk) : h.intl.string(h.t['l+7PZW']),
        buttonDisabled: E,
        onButtonPress: I,
        buttonColor: 'application' === g.name && E ? s.zxk.Colors.WHITE : s.zxk.Colors.RED,
        buttonLook: 'application' === g.name && E ? s.zxk.Looks.LINK : s.zxk.Looks.FILLED
    });
};
