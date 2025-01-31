l.d(n, { Z: () => p });
var t = l(200651),
    i = l(192379),
    r = l(481060),
    a = l(471445),
    s = l(592125),
    o = l(430824),
    u = l(970184),
    c = l(811654),
    d = l(344991),
    m = l(981631),
    h = l(826987);
function p(e) {
    var n;
    let { channelTypes: l } = e,
        p = (0, u.CJ)(),
        x = null == p ? void 0 : null === (n = p.message) || void 0 === n ? void 0 : n.getChannelId(),
        v = s.Z.getChannel(x),
        f = o.Z.getGuild(null == v ? void 0 : v.getGuildId()),
        C = i.useMemo(() => (0, c.tx)(e.defaultValues, null == f ? void 0 : f.id, l), [e.defaultValues, f, l]);
    return (0, t.jsx)(d.ZP, {
        selectActionComponent: e,
        queryOptions: (e) => (0, c.af)(e, x, l),
        renderIcon: (e, n) => {
            let l = s.Z.getChannel(null == e ? void 0 : e.value);
            if (null == l) return null;
            let i = l.type === m.d4z.GUILD_CATEGORY ? r.ROc : (0, a.KS)(l);
            return null != i
                ? (0, t.jsx)(i, {
                      size: 'custom',
                      color: 'currentColor',
                      width: n,
                      height: n
                  })
                : null;
        },
        renderOptionLabel: (e) =>
            (0, t.jsx)('span', {
                className: h.label,
                children: e.label
            }),
        defaultValues: C
    });
}
