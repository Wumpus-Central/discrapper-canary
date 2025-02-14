t.d(n, {
    Z: () => h,
    p: () => m
});
var l = t(442837),
    i = t(933557),
    a = t(592125),
    r = t(430824),
    o = t(699516),
    s = t(594174),
    d = t(823379),
    c = t(388032);
function u(e, n, t) {
    return 0 === e.length
        ? ''
        : c.intl.format(t ? c.t.cJZxWV : c.t.Kj5GIS, {
              count: e.length,
              extraCount: Math.max(e.length - 2, 0),
              role1: e[0],
              role2: e[1],
              itemHook: n
          });
}
function h(e) {
    let { guild: n, prompt: t, selectedRoleIds: h, selectedChannelIds: m, itemHook: x } = e,
        _ = (0, l.e7)([r.Z], () => (null != n ? r.Z.getRoles(n.id) : void 0)),
        p = (0, l.Wu)([a.Z, s.default, o.Z], () =>
            Array.from(m)
                .map((e) => a.Z.getChannel(e))
                .filter(d.lm)
                .map((e) => (0, i.F6)(e, s.default, o.Z, !0))
        ),
        f = Array.from(h)
            .map((e) => {
                var n;
                return null === (n = (null != _ ? _ : {})[e]) || void 0 === n ? void 0 : n.name;
            })
            .filter(d.lm)
            .map((e) => '@'.concat(e)),
        g = (null == t ? void 0 : t.singleSelect) ? '' : c.intl.string(c.t.JshhEh),
        C = '';
    if (0 === p.length && f.length > 0) g = u(f, x);
    else if (p.length > 0)
        (g =
            0 === p.length
                ? ''
                : c.intl.format(c.t.Rj841d, {
                      count: p.length,
                      extraCount: Math.max(p.length - 2, 0),
                      channel1: p[0],
                      channel2: p[1],
                      itemHook: x
                  })),
            f.length > 0 && (C = u(f, x, !0));
    return {
        helpText: g,
        helpTextAdditional: C
    };
}
function m(e) {
    let { guild: n, prompt: t, selectedRoleIds: u, selectedChannelIds: h, itemHook: m } = e,
        x = (0, l.e7)([r.Z], () => (null != n ? r.Z.getRoles(n.id) : void 0)),
        _ = (0, l.Wu)([a.Z, s.default, o.Z], () =>
            Array.from(h)
                .map((e) => a.Z.getChannel(e))
                .filter(d.lm)
                .map((e) => (0, i.F6)(e, s.default, o.Z, !0))
        ),
        p = Array.from(u)
            .map((e) => {
                var n;
                return null === (n = (null != x ? x : {})[e]) || void 0 === n ? void 0 : n.name;
            })
            .filter(d.lm)
            .map((e) => '@'.concat(e)),
        f = (null == t ? void 0 : t.singleSelect) ? '' : c.intl.string(c.t.JshhEh);
    return (
        0 === _.length && p.length > 0
            ? (f = c.intl.format(c.t.vdtNYW, {
                  count: p.length,
                  extraCount: Math.max(p.length - 2, 0),
                  role1: p[0],
                  role2: p[1],
                  itemHook: m
              }))
            : _.length > 0 && 0 === p.length
              ? (f = c.intl.format(c.t.ZKywGR, {
                    count: _.length,
                    extraCount: Math.max(_.length - 2, 0),
                    channel1: _[0],
                    channel2: _[1],
                    itemHook: m
                }))
              : _.length > 0 &&
                p.length > 0 &&
                (f = c.intl.format(c.t.WewRHB, {
                    channelCount: _.length,
                    extraChannelCount: Math.max(_.length - 2, 0),
                    channel1: _[0],
                    channel2: _[1],
                    itemHook: m,
                    roleCount: p.length,
                    extraRoleCount: Math.max(p.length - 2, 0),
                    role1: p[0],
                    role2: p[1]
                })),
        {
            helpText: f,
            helpTextAdditional: ''
        }
    );
}
