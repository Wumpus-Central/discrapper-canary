t.d(n, {
    Z: () => m,
    p: () => h
});
var r = t(442837),
    l = t(933557),
    a = t(592125),
    i = t(430824),
    o = t(699516),
    s = t(594174),
    c = t(823379),
    d = t(388032);
function u(e, n, t) {
    return 0 === e.length
        ? ''
        : d.NW.format(t ? d.t.cJZxWV : d.t.Kj5GIS, {
              count: e.length,
              extraCount: Math.max(e.length - 2, 0),
              role1: e[0],
              role2: e[1],
              itemHook: n
          });
}
function m(e) {
    let { guild: n, prompt: t, selectedRoleIds: m, selectedChannelIds: h, itemHook: p } = e,
        f = (0, r.e7)([i.Z], () => (null != n ? i.Z.getRoles(n.id) : void 0)),
        g = (0, r.Wu)([a.Z, s.default, o.Z], () =>
            Array.from(h)
                .map((e) => a.Z.getChannel(e))
                .filter(c.lm)
                .map((e) => (0, l.F6)(e, s.default, o.Z, !0))
        ),
        x = Array.from(m)
            .map((e) => {
                var n;
                return null == (n = (null != f ? f : {})[e]) ? void 0 : n.name;
            })
            .filter(c.lm)
            .map((e) => '@'.concat(e)),
        _ = (null == t ? void 0 : t.singleSelect) ? '' : d.NW.string(d.t.JshhEh),
        C = '';
    if (0 === g.length && x.length > 0) _ = u(x, p);
    else
        g.length > 0 &&
            ((_ =
                0 === g.length
                    ? ''
                    : d.NW.format(d.t.Rj841d, {
                          count: g.length,
                          extraCount: Math.max(g.length - 2, 0),
                          channel1: g[0],
                          channel2: g[1],
                          itemHook: p
                      })),
            x.length > 0 && (C = u(x, p, !0)));
    return {
        helpText: _,
        helpTextAdditional: C
    };
}
function h(e) {
    let { guild: n, prompt: t, selectedRoleIds: u, selectedChannelIds: m, itemHook: h } = e,
        p = (0, r.e7)([i.Z], () => (null != n ? i.Z.getRoles(n.id) : void 0)),
        f = (0, r.Wu)([a.Z, s.default, o.Z], () =>
            Array.from(m)
                .map((e) => a.Z.getChannel(e))
                .filter(c.lm)
                .map((e) => (0, l.F6)(e, s.default, o.Z, !0))
        ),
        g = Array.from(u)
            .map((e) => {
                var n;
                return null == (n = (null != p ? p : {})[e]) ? void 0 : n.name;
            })
            .filter(c.lm)
            .map((e) => '@'.concat(e)),
        x = (null == t ? void 0 : t.singleSelect) ? '' : d.NW.string(d.t.JshhEh);
    return (
        0 === f.length && g.length > 0
            ? (x = d.NW.format(d.t.vdtNYW, {
                  count: g.length,
                  extraCount: Math.max(g.length - 2, 0),
                  role1: g[0],
                  role2: g[1],
                  itemHook: h
              }))
            : f.length > 0 && 0 === g.length
              ? (x = d.NW.format(d.t.ZKywGR, {
                    count: f.length,
                    extraCount: Math.max(f.length - 2, 0),
                    channel1: f[0],
                    channel2: f[1],
                    itemHook: h
                }))
              : f.length > 0 &&
                g.length > 0 &&
                (x = d.NW.format(d.t.WewRHB, {
                    channelCount: f.length,
                    extraChannelCount: Math.max(f.length - 2, 0),
                    channel1: f[0],
                    channel2: f[1],
                    itemHook: h,
                    roleCount: g.length,
                    extraRoleCount: Math.max(g.length - 2, 0),
                    role1: g[0],
                    role2: g[1]
                })),
        {
            helpText: x,
            helpTextAdditional: ''
        }
    );
}
