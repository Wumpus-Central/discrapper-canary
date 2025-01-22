var i = r(200651),
    a = r(192379),
    o = r(442837),
    s = r(481060),
    l = r(194359),
    u = r(367907),
    c = r(681678),
    d = r(138201),
    f = r(592125),
    p = r(699516),
    h = r(5192),
    _ = r(981631),
    m = r(388032);
let g = (e) => {
    let { user: n, channelId: r, reportId: g, reportType: E } = e,
        v = (0, o.e7)([p.Z], () => p.Z.isBlocked(n.id), [n.id]),
        y = (0, o.e7)([f.Z], () => f.Z.getChannel(r), [r]),
        b = a.useMemo(() => h.ZP.getName(null == y ? void 0 : y.guild_id, null == y ? void 0 : y.id, n), [y, n]),
        I = a.useCallback(() => {
            u.ZP.trackWithMetadata(_.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: n.id,
                report_id: g
            }),
                l.Z.addRelationship({
                    userId: n.id,
                    context: { location: 'ReportMenuBlockUser-iOS' },
                    type: _.OGo.BLOCKED
                }),
                c.Z.showBlockSuccessToast(n.id, r);
        }, [n, g, r]);
    return (0, i.jsx)(d.ZP, {
        title: m.intl.formatToPlainString(m.t['Q1o/f3'], { username: b }),
        description: m.intl.string(m.t.G08MKi),
        buttonText: v ? m.intl.string(m.t.ot2tSk) : m.intl.string(m.t['l+7PZW']),
        buttonDisabled: v,
        onButtonPress: I,
        buttonColor: 'application' === E.name && v ? s.Button.Colors.WHITE : s.Button.Colors.RED,
        buttonLook: 'application' === E.name && v ? s.Button.Looks.LINK : s.Button.Looks.FILLED
    });
};
n.Z = g;
