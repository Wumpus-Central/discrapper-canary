n.d(t, { Z: () => l });
var r = n(255367),
    i = n(680018),
    a = n(256754),
    o = n(981631),
    s = n(388032);
function l(e) {
    let { channel: t } = e;
    return (0, r.jsx)(i.z, {
        variant: 'secondary',
        size: 'md',
        onClick: () =>
            (0, a.i)({
                analyticsLocation: {
                    section: o.jXE.EXPRESSION_PICKER,
                    page: (null == t ? void 0 : t.guild_id) != null ? o.ZY5.GUILD_CHANNEL : o.ZY5.DM_CHANNEL
                }
            }),
        text: s.intl.string(s.t.iMJO39)
    });
}
