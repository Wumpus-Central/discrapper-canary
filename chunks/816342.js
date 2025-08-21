n.d(t, { Z: () => x });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(194359),
    o = n(367907),
    s = n(681678),
    c = n(138201),
    d = n(592125),
    u = n(699516),
    m = n(5192),
    _ = n(981631),
    p = n(388032);
let x = (e) => {
    let { user: t, channelId: n, reportId: x, reportType: g } = e,
        f = (0, l.e7)([u.Z], () => u.Z.isBlocked(t.id), [t.id]),
        b = (0, l.e7)([d.Z], () => d.Z.getChannel(n), [n]),
        h = i.useMemo(() => m.ZP.getName(null == b ? void 0 : b.guild_id, null == b ? void 0 : b.id, t), [b, t]),
        v = i.useCallback(() => {
            o.ZP.trackWithMetadata(_.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: x,
            }),
                a.Z.blockUser(t.id, { location: "ReportMenuBlockUser-iOS" }).then(() => {
                    s.Z.showBlockSuccessToast(t.id, n);
                });
        }, [t, x, n]);
    return (0, r.jsx)(c.JZ, {
        title: p.intl.formatToPlainString(p.t["Q1o/f3"], { username: h }),
        description: p.intl.string(p.t.G08MKi),
        buttonText: f ? p.intl.string(p.t.ot2tSk) : p.intl.string(p.t["l+7PZW"]),
        buttonDisabled: f,
        onButtonPress: v,
        buttonVariant: "application" === g.name && f ? "secondary" : "critical-primary",
    });
};
