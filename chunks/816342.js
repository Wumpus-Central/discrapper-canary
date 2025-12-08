n.d(t, { Z: () => _ });
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(194359),
    s = n(367907),
    o = n(681678),
    d = n(138201),
    c = n(592125),
    u = n(699516),
    m = n(5192),
    p = n(981631),
    g = n(388032);
let _ = (e) => {
    let { user: t, channelId: n, reportId: _, reportType: x } = e,
        h = (0, i.e7)([u.Z], () => u.Z.isBlocked(t.id), [t.id]),
        b = (0, i.e7)([c.Z], () => c.Z.getChannel(n), [n]),
        f = l.useMemo(() => m.ZP.getName(null == b ? void 0 : b.guild_id, null == b ? void 0 : b.id, t), [b, t]),
        v = l.useCallback(() => {
            s.ZP.trackWithMetadata(p.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: _,
            }),
                a.Z.blockUser(t.id, { location: "ReportMenuBlockUser-iOS" }).then(() => {
                    o.Z.showBlockSuccessToast(t.id, n);
                });
        }, [t, _, n]);
    return (0, r.jsx)(d.JZ, {
        title: g.intl.formatToPlainString(g.t["Q1o/f3"], { username: f }),
        description: g.intl.string(g.t.G08MKu),
        buttonText: h ? g.intl.string(g.t.ot2tSp) : g.intl.string(g.t["l+7PZY"]),
        buttonDisabled: h,
        onButtonPress: v,
        buttonVariant: "application" === x.name && h ? "secondary" : "critical-primary",
    });
};
