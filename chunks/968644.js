n.d(t, {
    Z: () => m,
    p: () => f,
});
var r = n(442837),
    l = n(933557),
    i = n(592125),
    o = n(485386),
    a = n(699516),
    s = n(594174),
    c = n(823379),
    u = n(388032);
function d(e, t, n) {
    return 0 === e.length
        ? ""
        : u.intl.format(n ? u.t.cJZxWV : u.t.Kj5GIS, {
              count: e.length,
              extraCount: Math.max(e.length - 2, 0),
              role1: e[0],
              role2: e[1],
              itemHook: t,
          });
}
function m(e) {
    let { guild: t, prompt: n, selectedRoleIds: m, selectedChannelIds: f, itemHook: p } = e,
        h = null == t ? void 0 : t.id,
        x = (0, r.Wu)([o.Z], () => (null != h ? o.Z.getManyRoles(h, m) : []), [h, m]),
        g = (0, r.Wu)([i.Z, s.default, a.Z], () =>
            Array.from(f)
                .map((e) => i.Z.getChannel(e))
                .filter(c.lm)
                .map((e) => (0, l.F6)(e, s.default, a.Z, !0)),
        ),
        v = x.map((e) => "@".concat(e.name)),
        j = (null == n ? void 0 : n.singleSelect) ? "" : u.intl.string(u.t.JshhEh),
        _ = "";
    if (0 === g.length && v.length > 0) j = d(v, p);
    else
        g.length > 0 &&
            ((j =
                0 === g.length
                    ? ""
                    : u.intl.format(u.t.Rj841d, {
                          count: g.length,
                          extraCount: Math.max(g.length - 2, 0),
                          channel1: g[0],
                          channel2: g[1],
                          itemHook: p,
                      })),
            v.length > 0 && (_ = d(v, p, !0)));
    return {
        helpText: j,
        helpTextAdditional: _,
    };
}
function f(e) {
    let { guild: t, prompt: n, selectedRoleIds: d, selectedChannelIds: m, itemHook: f } = e,
        p = null == t ? void 0 : t.id,
        h = (0, r.Wu)([o.Z], () => (null != p ? o.Z.getManyRoles(p, d) : []), [p, d]),
        x = (0, r.Wu)([i.Z, s.default, a.Z], () =>
            Array.from(m)
                .map((e) => i.Z.getChannel(e))
                .filter(c.lm)
                .map((e) => (0, l.F6)(e, s.default, a.Z, !0)),
        ),
        g = h.map((e) => "@".concat(e.name)),
        v = (null == n ? void 0 : n.singleSelect) ? "" : u.intl.string(u.t.JshhEh);
    return (
        0 === x.length && g.length > 0
            ? (v = u.intl.format(u.t.vdtNYW, {
                  count: g.length,
                  extraCount: Math.max(g.length - 2, 0),
                  role1: g[0],
                  role2: g[1],
                  itemHook: f,
              }))
            : x.length > 0 && 0 === g.length
              ? (v = u.intl.format(u.t.ZKywGR, {
                    count: x.length,
                    extraCount: Math.max(x.length - 2, 0),
                    channel1: x[0],
                    channel2: x[1],
                    itemHook: f,
                }))
              : x.length > 0 &&
                g.length > 0 &&
                (v = u.intl.format(u.t.WewRHB, {
                    channelCount: x.length,
                    extraChannelCount: Math.max(x.length - 2, 0),
                    channel1: x[0],
                    channel2: x[1],
                    itemHook: f,
                    roleCount: g.length,
                    extraRoleCount: Math.max(g.length - 2, 0),
                    role1: g[0],
                    role2: g[1],
                })),
        {
            helpText: v,
            helpTextAdditional: "",
        }
    );
}
