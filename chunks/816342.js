n.d(t, { Z: () => g });
var r = n(951288),
    a = n(647438),
    i = n(442837),
    o = n(194359),
    l = n(367907),
    s = n(681678),
    c = n(138201),
    d = n(592125),
    u = n(699516),
    _ = n(5192),
    m = n(981631),
    p = n(388032);
let g = (e) => {
    let { user: t, channelId: n, reportId: g, reportType: f } = e,
        b = (0, i.e7)([u.Z], () => u.Z.isBlocked(t.id), [t.id]),
        h = (0, i.e7)([d.Z], () => d.Z.getChannel(n), [n]),
        x = a.useMemo(() => _.ZP.getName(null == h ? void 0 : h.guild_id, null == h ? void 0 : h.id, t), [h, t]),
        v = a.useCallback(() => {
            l.ZP.trackWithMetadata(m.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: g,
            }),
                o.Z.blockUser(t.id, { location: "ReportMenuBlockUser-iOS" }).then(() => {
                    s.Z.showBlockSuccessToast(t.id, n);
                });
        }, [t, g, n]);
    return (0, r.jsx)(c.JZ, {
        title: p.intl.formatToPlainString(p.t["Q1o/f3"], { username: x }),
        description: p.intl.string(p.t.G08MKi),
        buttonText: b ? p.intl.string(p.t.ot2tSk) : p.intl.string(p.t["l+7PZW"]),
        buttonDisabled: b,
        onButtonPress: v,
        buttonVariant: "application" === f.name && b ? "secondary" : "critical-primary",
    });
};
