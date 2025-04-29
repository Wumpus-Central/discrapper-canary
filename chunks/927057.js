r.d(t, { Z: () => b });
var n = r(255367),
    l = r(73800),
    i = r(481060),
    o = r(471445),
    a = r(592125),
    c = r(430824),
    s = r(970184),
    u = r(811654),
    d = r(344991),
    p = r(981631),
    f = r(922127);
function b(e) {
    var t;
    let { channelTypes: r } = e,
        b = (0, s.CJ)(),
        O = null == b || null == (t = b.message) ? void 0 : t.getChannelId(),
        m = a.Z.getChannel(O),
        y = c.Z.getGuild(null == m ? void 0 : m.getGuildId()),
        j = l.useMemo(() => (0, u.tx)(e.defaultValues, null == y ? void 0 : y.id, r), [e.defaultValues, y, r]);
    return (0, n.jsx)(d.ZP, {
        selectActionComponent: e,
        queryOptions: (e) => (0, u.af)(e, O, r),
        renderIcon: (e, t) => {
            let r = a.Z.getChannel(null == e ? void 0 : e.value);
            if (null == r) return null;
            let l = r.type === p.d4z.GUILD_CATEGORY ? i.ROc : (0, o.KS)(r);
            return null != l
                ? (0, n.jsx)(l, {
                      size: 'custom',
                      color: 'currentColor',
                      width: t,
                      height: t
                  })
                : null;
        },
        renderOptionLabel: (e) =>
            (0, n.jsx)('span', {
                className: f.label,
                children: e.label
            }),
        defaultValues: j
    });
}
