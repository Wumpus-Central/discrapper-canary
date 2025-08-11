n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
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
let _ = (e) => {
    let { user: t, channelId: n, reportId: _, reportType: b } = e,
        h = (0, l.e7)([u.Z], () => u.Z.isBlocked(t.id), [t.id]),
        x = (0, l.e7)([d.Z], () => d.Z.getChannel(n), [n]),
        f = i.useMemo(() => m.ZP.getName(null == x ? void 0 : x.guild_id, null == x ? void 0 : x.id, t), [x, t]),
        v = i.useCallback(() => {
            s.ZP.trackWithMetadata(p.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: _,
            }),
                a.Z.blockUser(t.id, { location: "ReportMenuBlockUser-iOS" }).then(() => {
                    o.Z.showBlockSuccessToast(t.id, n);
                });
        }, [t, _, n]);
    return (0, r.jsx)(c.JZ, {
        title: g.intl.formatToPlainString(g.t["Q1o/f3"], { username: f }),
        description: g.intl.string(g.t.G08MKi),
        buttonText: h ? g.intl.string(g.t.ot2tSk) : g.intl.string(g.t["l+7PZW"]),
        buttonDisabled: h,
        onButtonPress: v,
        buttonVariant: "application" === b.name && h ? "secondary" : "critical-primary",
    });
};
