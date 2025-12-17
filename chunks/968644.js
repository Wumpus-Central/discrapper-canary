n.d(t, {
    Z: () => m,
    p: () => p,
});
var l = n(442837),
    i = n(933557),
    r = n(592125),
    o = n(485386),
    a = n(699516),
    c = n(594174),
    s = n(823379),
    u = n(388032);
function d(e, t, n) {
    return 0 === e.length
        ? ""
        : u.intl.format(n ? u.t.cJZxWf : u.t.Kj5GIT, {
              count: e.length,
              extraCount: Math.max(e.length - 2, 0),
              role1: e[0],
              role2: e[1],
              itemHook: t,
          });
}
function m(e) {
    let { guild: t, prompt: n, selectedRoleIds: m, selectedChannelIds: p, itemHook: h } = e,
        f = null == t ? void 0 : t.id,
        g = (0, l.Wu)([o.Z], () => (null != f ? o.Z.getManyRoles(f, m) : []), [f, m]),
        j = (0, l.Wu)([r.Z, c.default, a.Z], () =>
            Array.from(p)
                .map((e) => r.Z.getChannel(e))
                .filter(s.lm)
                .map((e) => (0, i.F6)(e, c.default, a.Z, !0)),
        ),
        x = g.map((e) => "@".concat(e.name)),
        v = (null == n ? void 0 : n.singleSelect) ? "" : u.intl.string(u.t.JshhEl),
        y = "";
    if (0 === j.length && x.length > 0) v = d(x, h);
    else
        j.length > 0 &&
            ((v =
                0 === j.length
                    ? ""
                    : u.intl.format(u.t.Rj841R, {
                          count: j.length,
                          extraCount: Math.max(j.length - 2, 0),
                          channel1: j[0],
                          channel2: j[1],
                          itemHook: h,
                      })),
            x.length > 0 && (y = d(x, h, !0)));
    return {
        helpText: v,
        helpTextAdditional: y,
    };
}
function p(e) {
    let { guild: t, prompt: n, selectedRoleIds: d, selectedChannelIds: m, itemHook: p } = e,
        h = null == t ? void 0 : t.id,
        f = (0, l.Wu)([o.Z], () => (null != h ? o.Z.getManyRoles(h, d) : []), [h, d]),
        g = (0, l.Wu)([r.Z, c.default, a.Z], () =>
            Array.from(m)
                .map((e) => r.Z.getChannel(e))
                .filter(s.lm)
                .map((e) => (0, i.F6)(e, c.default, a.Z, !0)),
        ),
        j = f.map((e) => "@".concat(e.name)),
        x = (null == n ? void 0 : n.singleSelect) ? "" : u.intl.string(u.t.JshhEl);
    return (
        0 === g.length && j.length > 0
            ? (x = u.intl.format(u.t.vdtNYa, {
                  count: j.length,
                  extraCount: Math.max(j.length - 2, 0),
                  role1: j[0],
                  role2: j[1],
                  itemHook: p,
              }))
            : g.length > 0 && 0 === j.length
              ? (x = u.intl.format(u.t.ZKywGU, {
                    count: g.length,
                    extraCount: Math.max(g.length - 2, 0),
                    channel1: g[0],
                    channel2: g[1],
                    itemHook: p,
                }))
              : g.length > 0 &&
                j.length > 0 &&
                (x = u.intl.format(u.t.WewRHM, {
                    channelCount: g.length,
                    extraChannelCount: Math.max(g.length - 2, 0),
                    channel1: g[0],
                    channel2: g[1],
                    itemHook: p,
                    roleCount: j.length,
                    extraRoleCount: Math.max(j.length - 2, 0),
                    role1: j[0],
                    role2: j[1],
                })),
        {
            helpText: x,
            helpTextAdditional: "",
        }
    );
}
