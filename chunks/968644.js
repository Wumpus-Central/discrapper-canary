n.d(t, {
    Z: () => m,
    p: () => h
});
var l = n(442837),
    r = n(933557),
    i = n(592125),
    a = n(485386),
    o = n(699516),
    s = n(594174),
    c = n(823379),
    d = n(388032);
function u(e, t, n) {
    return 0 === e.length
        ? ''
        : d.intl.format(n ? d.t.cJZxWV : d.t.Kj5GIS, {
              count: e.length,
              extraCount: Math.max(e.length - 2, 0),
              role1: e[0],
              role2: e[1],
              itemHook: t
          });
}
function m(e) {
    let { guild: t, prompt: n, selectedRoleIds: m, selectedChannelIds: h, itemHook: p } = e,
        f = null == t ? void 0 : t.id,
        g = (0, l.Wu)([a.Z], () => (null != f ? a.Z.getManyRoles(f, m) : []), [f, m]),
        x = (0, l.Wu)([i.Z, s.default, o.Z], () =>
            Array.from(h)
                .map((e) => i.Z.getChannel(e))
                .filter(c.lm)
                .map((e) => (0, r.F6)(e, s.default, o.Z, !0))
        ),
        _ = g.map((e) => '@'.concat(e.name)),
        C = (null == n ? void 0 : n.singleSelect) ? '' : d.intl.string(d.t.JshhEh),
        b = '';
    if (0 === x.length && _.length > 0) C = u(_, p);
    else
        x.length > 0 &&
            ((C =
                0 === x.length
                    ? ''
                    : d.intl.format(d.t.Rj841d, {
                          count: x.length,
                          extraCount: Math.max(x.length - 2, 0),
                          channel1: x[0],
                          channel2: x[1],
                          itemHook: p
                      })),
            _.length > 0 && (b = u(_, p, !0)));
    return {
        helpText: C,
        helpTextAdditional: b
    };
}
function h(e) {
    let { guild: t, prompt: n, selectedRoleIds: u, selectedChannelIds: m, itemHook: h } = e,
        p = null == t ? void 0 : t.id,
        f = (0, l.Wu)([a.Z], () => (null != p ? a.Z.getManyRoles(p, u) : []), [p, u]),
        g = (0, l.Wu)([i.Z, s.default, o.Z], () =>
            Array.from(m)
                .map((e) => i.Z.getChannel(e))
                .filter(c.lm)
                .map((e) => (0, r.F6)(e, s.default, o.Z, !0))
        ),
        x = f.map((e) => '@'.concat(e.name)),
        _ = (null == n ? void 0 : n.singleSelect) ? '' : d.intl.string(d.t.JshhEh);
    return (
        0 === g.length && x.length > 0
            ? (_ = d.intl.format(d.t.vdtNYW, {
                  count: x.length,
                  extraCount: Math.max(x.length - 2, 0),
                  role1: x[0],
                  role2: x[1],
                  itemHook: h
              }))
            : g.length > 0 && 0 === x.length
              ? (_ = d.intl.format(d.t.ZKywGR, {
                    count: g.length,
                    extraCount: Math.max(g.length - 2, 0),
                    channel1: g[0],
                    channel2: g[1],
                    itemHook: h
                }))
              : g.length > 0 &&
                x.length > 0 &&
                (_ = d.intl.format(d.t.WewRHB, {
                    channelCount: g.length,
                    extraChannelCount: Math.max(g.length - 2, 0),
                    channel1: g[0],
                    channel2: g[1],
                    itemHook: h,
                    roleCount: x.length,
                    extraRoleCount: Math.max(x.length - 2, 0),
                    role1: x[0],
                    role2: x[1]
                })),
        {
            helpText: _,
            helpTextAdditional: ''
        }
    );
}
