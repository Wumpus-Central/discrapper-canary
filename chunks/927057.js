n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(471445),
    s = n(592125),
    l = n(430824),
    c = n(970184),
    u = n(811654),
    d = n(344991),
    f = n(981631),
    p = n(792386);
function _(e) {
    let { channelTypes: t } = e,
        n = (0, c.CJ)(),
        _ = null == n ? void 0 : n.channelId,
        m = s.Z.getChannel(_),
        h = l.Z.getGuild(null == m ? void 0 : m.getGuildId()),
        g = (e) => (0, u.af)(e, _, t),
        E = (e, t) => {
            let n = s.Z.getChannel(null == e ? void 0 : e.value);
            if (null == n) return null;
            let i = n.type === f.d4z.GUILD_CATEGORY ? a.ROc : (0, o.KS)(n);
            return null != i
                ? (0, r.jsx)(i, {
                      size: "custom",
                      color: "currentColor",
                      width: t,
                      height: t,
                  })
                : null;
        },
        b = (e) =>
            (0, r.jsx)("span", {
                className: p.label,
                children: e.label,
            }),
        y = i.useMemo(() => (0, u.tx)(e.defaultValues, null == h ? void 0 : h.id, t), [e.defaultValues, h, t]);
    return (0, r.jsx)(d.ZP, {
        selectActionComponent: e,
        queryOptions: g,
        renderIcon: E,
        renderOptionLabel: b,
        defaultValues: y,
    });
}
