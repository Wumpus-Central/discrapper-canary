n.d(t, { Z: () => g });
var r = n(255367),
    a = n(73800),
    i = n(442837),
    l = n(194359),
    o = n(367907),
    s = n(681678),
    c = n(138201),
    d = n(592125),
    u = n(699516),
    m = n(5192),
    p = n(981631),
    _ = n(388032);
let g = (e) => {
    let { user: t, channelId: n, reportId: g, reportType: b } = e,
        h = (0, i.e7)([u.Z], () => u.Z.isBlocked(t.id), [t.id]),
        x = (0, i.e7)([d.Z], () => d.Z.getChannel(n), [n]),
        f = a.useMemo(() => m.ZP.getName(null == x ? void 0 : x.guild_id, null == x ? void 0 : x.id, t), [x, t]),
        v = a.useCallback(() => {
            o.ZP.trackWithMetadata(p.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: g,
            }),
                l.Z.blockUser(t.id, { location: "ReportMenuBlockUser-iOS" }).then(() => {
                    s.Z.showBlockSuccessToast(t.id, n);
                });
        }, [t, g, n]);
    return (0, r.jsx)(c.JZ, {
        title: _.intl.formatToPlainString(_.t["Q1o/f3"], { username: f }),
        description: _.intl.string(_.t.G08MKi),
        buttonText: h ? _.intl.string(_.t.ot2tSk) : _.intl.string(_.t["l+7PZW"]),
        buttonDisabled: h,
        onButtonPress: v,
        buttonVariant: "application" === b.name && h ? "secondary" : "critical-primary",
    });
};
