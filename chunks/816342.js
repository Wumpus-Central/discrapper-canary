n.d(t, { Z: () => v });
var l = n(200651),
    i = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(194359),
    o = n(367907),
    d = n(681678),
    c = n(138201),
    u = n(592125),
    m = n(699516),
    x = n(5192),
    _ = n(981631),
    h = n(388032);
let v = (e) => {
    let { user: t, channelId: n, reportId: v, reportType: g } = e,
        p = (0, r.e7)([m.Z], () => m.Z.isBlocked(t.id), [t.id]),
        f = (0, r.e7)([u.Z], () => u.Z.getChannel(n), [n]),
        b = i.useMemo(() => x.ZP.getName(null == f ? void 0 : f.guild_id, null == f ? void 0 : f.id, t), [f, t]),
        Z = i.useCallback(() => {
            o.ZP.trackWithMetadata(_.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: v
            }),
                s.Z.addRelationship({
                    userId: t.id,
                    context: { location: 'ReportMenuBlockUser-iOS' },
                    type: _.OGo.BLOCKED
                }),
                d.Z.showBlockSuccessToast(t.id, n);
        }, [t, v, n]);
    return (0, l.jsx)(c.ZP, {
        title: h.intl.formatToPlainString(h.t['Q1o/f3'], { username: b }),
        description: h.intl.string(h.t.G08MKi),
        buttonText: p ? h.intl.string(h.t.ot2tSk) : h.intl.string(h.t['l+7PZW']),
        buttonDisabled: p,
        onButtonPress: Z,
        buttonColor: 'application' === g.name && p ? a.zxk.Colors.WHITE : a.zxk.Colors.RED,
        buttonLook: 'application' === g.name && p ? a.zxk.Looks.LINK : a.zxk.Looks.FILLED
    });
};
