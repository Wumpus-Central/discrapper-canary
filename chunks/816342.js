var i = r(200651),
    a = r(192379),
    s = r(442837),
    o = r(481060),
    l = r(194359),
    u = r(367907),
    c = r(681678),
    d = r(138201),
    f = r(592125),
    _ = r(699516),
    h = r(5192),
    p = r(981631),
    m = r(388032);
let g = (e) => {
    let { user: n, channelId: r, reportId: g, reportType: E } = e,
        v = (0, s.e7)([_.Z], () => _.Z.isBlocked(n.id), [n.id]),
        I = (0, s.e7)([f.Z], () => f.Z.getChannel(r), [r]),
        T = a.useMemo(() => h.ZP.getName(null == I ? void 0 : I.guild_id, null == I ? void 0 : I.id, n), [I, n]),
        b = a.useCallback(() => {
            u.ZP.trackWithMetadata(p.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: n.id,
                report_id: g
            }),
                l.Z.addRelationship({
                    userId: n.id,
                    context: { location: 'ReportMenuBlockUser-iOS' },
                    type: p.OGo.BLOCKED
                }),
                c.Z.showBlockSuccessToast(n.id, r);
        }, [n, g, r]);
    return (0, i.jsx)(d.ZP, {
        title: m.intl.formatToPlainString(m.t['Q1o/f3'], { username: T }),
        description: m.intl.string(m.t.G08MKi),
        buttonText: v ? m.intl.string(m.t.ot2tSk) : m.intl.string(m.t['l+7PZW']),
        buttonDisabled: v,
        onButtonPress: b,
        buttonColor: 'application' === E.name && v ? o.Button.Colors.WHITE : o.Button.Colors.RED,
        buttonLook: 'application' === E.name && v ? o.Button.Looks.LINK : o.Button.Looks.FILLED
    });
};
n.Z = g;
