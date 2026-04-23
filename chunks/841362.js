n.d(t, { A: () => m });
var i = n(627968),
    l = n(311907),
    a = n(192308),
    s = n(905499),
    r = n(351001),
    o = n(696451),
    c = n(576705),
    d = n(102817),
    u = n(221314),
    h = n(985018);
function m(e) {
    let { channel: t, user: m, guild: A } = e,
        g = (0, l.bG)([c.A], () => null != m && null != A && (0, r.KX)(m, A, [c.A])),
        _ = (0, l.bG)([o.Ay], () => null == m || null == o.Ay.getMember(t.guild_id, m.id));
    if (!g) return null;
    let p = _ ? h.intl.string(u.default.Ux67nW) : h.intl.string(u.default["snp/lJ"]),
        f = `kick-user-${m?.id}`;
    return (0, i.jsx)(
        d.A,
        {
            text: p,
            icon: s.N,
            onClick: () => {
                null != m &&
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await n.e("95481").then(n.bind(n, 324785));
                        return (n) => (0, i.jsx)(e, { ...n, guildId: t.guild_id, user: m, modReportId: t.id });
                    });
            },
            disabled: _,
        },
        f,
    );
}
