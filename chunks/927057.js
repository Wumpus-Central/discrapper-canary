n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(471445),
    s = n(592125),
    l = n(430824),
    c = n(970184),
    u = n(811654),
    d = n(344991),
    f = n(981631),
    _ = n(111566);
function p(e) {
    var t;
    let { channelTypes: n } = e,
        p = (0, c.CJ)(),
        h = null == p || null == (t = p.message) ? void 0 : t.getChannelId(),
        m = s.Z.getChannel(h),
        g = l.Z.getGuild(null == m ? void 0 : m.getGuildId()),
        E = (e) => (0, u.af)(e, h, n),
        b = (e, t) => {
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
        y = (e) =>
            (0, r.jsx)("span", {
                className: _.label,
                children: e.label,
            }),
        O = i.useMemo(() => (0, u.tx)(e.defaultValues, null == g ? void 0 : g.id, n), [e.defaultValues, g, n]);
    return (0, r.jsx)(d.ZP, {
        selectActionComponent: e,
        queryOptions: E,
        renderIcon: b,
        renderOptionLabel: y,
        defaultValues: O,
    });
}
