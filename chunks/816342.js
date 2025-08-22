n.d(t, { Z: () => x });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(194359),
    s = n(367907),
    o = n(681678),
    c = n(138201),
    d = n(592125),
    u = n(699516),
    m = n(5192),
    p = n(981631),
    g = n(388032);
let x = (e) => {
    let { user: t, channelId: n, reportId: x, reportType: h } = e,
        b = (0, l.e7)([u.Z], () => u.Z.isBlocked(t.id), [t.id]),
        _ = (0, l.e7)([d.Z], () => d.Z.getChannel(n), [n]),
        f = i.useMemo(() => m.ZP.getName(null == _ ? void 0 : _.guild_id, null == _ ? void 0 : _.id, t), [_, t]),
        v = i.useCallback(() => {
            s.ZP.trackWithMetadata(p.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: x,
            }),
                a.Z.blockUser(t.id, { location: "ReportMenuBlockUser-iOS" }).then(() => {
                    o.Z.showBlockSuccessToast(t.id, n);
                });
        }, [t, x, n]);
    return (0, r.jsx)(c.JZ, {
        title: g.intl.formatToPlainString(g.t["Q1o/f3"], { username: f }),
        description: g.intl.string(g.t.G08MKi),
        buttonText: b ? g.intl.string(g.t.ot2tSk) : g.intl.string(g.t["l+7PZW"]),
        buttonDisabled: b,
        onButtonPress: v,
        buttonVariant: "application" === h.name && b ? "secondary" : "critical-primary",
    });
};
