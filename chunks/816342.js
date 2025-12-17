n.d(t, { Z: () => g });
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(194359),
    s = n(367907),
    o = n(681678),
    c = n(138201),
    d = n(592125),
    u = n(699516),
    m = n(5192),
    b = n(981631),
    p = n(388032);
let g = (e) => {
    let { user: t, channelId: n, reportId: g, reportType: f } = e,
        x = (0, i.e7)([u.Z], () => u.Z.isBlocked(t.id), [t.id]),
        h = (0, i.e7)([d.Z], () => d.Z.getChannel(n), [n]),
        v = l.useMemo(() => m.ZP.getName(null == h ? void 0 : h.guild_id, null == h ? void 0 : h.id, t), [h, t]),
        j = l.useCallback(() => {
            s.ZP.trackWithMetadata(b.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: g,
            }),
                a.Z.blockUser(t.id, { location: "ReportMenuBlockUser-iOS" }).then(() => {
                    o.Z.showBlockSuccessToast(t.id, n);
                });
        }, [t, g, n]);
    return (0, r.jsx)(c.JZ, {
        title: p.intl.formatToPlainString(p.t["Q1o/f3"], { username: v }),
        description: p.intl.string(p.t.G08MKu),
        buttonText: x ? p.intl.string(p.t.ot2tSp) : p.intl.string(p.t["l+7PZY"]),
        buttonDisabled: x,
        onButtonPress: j,
        buttonVariant: "application" === f.name && x ? "secondary" : "critical-primary",
    });
};
