r.d(t, { Z: () => b });
var n = r(200651),
    l = r(192379),
    i = r(481060),
    o = r(471445),
    a = r(592125),
    c = r(430824),
    s = r(970184),
    u = r(811654),
    p = r(344991),
    d = r(981631),
    f = r(922127);
function b(e) {
    var t;
    let { channelTypes: r } = e,
        b = (0, s.CJ)(),
        O = null == b || null == (t = b.message) ? void 0 : t.getChannelId(),
        y = a.Z.getChannel(O),
        m = c.Z.getGuild(null == y ? void 0 : y.getGuildId()),
        j = l.useMemo(() => (0, u.tx)(e.defaultValues, null == m ? void 0 : m.id, r), [e.defaultValues, m, r]);
    return (0, n.jsx)(p.ZP, {
        selectActionComponent: e,
        queryOptions: (e) => (0, u.af)(e, O, r),
        renderIcon: (e, t) => {
            let r = a.Z.getChannel(null == e ? void 0 : e.value);
            if (null == r) return null;
            let l = r.type === d.d4z.GUILD_CATEGORY ? i.ROc : (0, o.KS)(r);
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
