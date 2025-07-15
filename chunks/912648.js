n.d(t, { Z: () => c });
var r = n(255367),
    i = n(232418),
    a = n(680018),
    o = n(256754),
    s = n(981631),
    l = n(388032);
function c(e) {
    let { channel: t } = e;
    return (0, r.jsx)(a.z, {
        variant: 'secondary',
        size: 'md',
        onClick: () =>
            (0, o.i)({
                analyticsLocation: {
                    section: s.jXE.EXPRESSION_PICKER,
                    page: (null == t ? void 0 : t.guild_id) != null ? s.ZY5.GUILD_CHANNEL : s.ZY5.DM_CHANNEL
                }
            }),
        icon: i.S,
        text: l.intl.string(l.t.iMJO39)
    });
}
