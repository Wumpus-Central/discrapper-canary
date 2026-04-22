n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(939249),
    c = n(463930),
    d = n(834730),
    u = n(163328),
    h = n(442433),
    m = n(793574),
    A = n(688810),
    g = n(47167),
    p = n(713654),
    _ = n(967144),
    f = n(342296),
    E = n(696451),
    C = n(287809),
    x = n(427262),
    S = n(314307),
    I = n(652215),
    N = n(985018),
    v = n(415296);
function T(e) {
    let { userId: t, channel: a } = e,
        d = l.useRef(null),
        { analyticsLocations: u } = (0, A.Ay)(m.A.USERNAME),
        g = (0, r.bG)([C.default], () => C.default.getUser(t)),
        p = (0, r.bG)([E.Ay], () => (null != t ? E.Ay.getMember(a.guild_id, t) : null)),
        S = (0, _.gn)(a.guild_id, t ?? void 0, p?.colorStrings ?? null);
    function I(e) {
        if (null == g) return null;
        (0, h.L3)(e, async () => {
            let { default: e } = await Promise.all([n.e("97262"), n.e("53635"), n.e("67447"), n.e("80296")]).then(
                n.bind(n, 708202),
            );
            return (t) => (0, i.jsx)(e, { ...t, user: g, guildId: a.guild_id, channel: a });
        });
    }
    let N = p?.nick ?? x.Ay.getName(g) ?? "???",
        T = p?.colorString;
    return null == g
        ? (0, i.jsx)("span", { className: s()(v.eM, v.sL), children: N })
        : (0, i.jsx)(A.f5, {
              value: u,
              children: (0, i.jsx)(f.A, {
                  targetElementRef: d,
                  user: g,
                  guildId: a.guild_id,
                  channelId: a.id,
                  roleId: p?.colorRoleId,
                  clickTrap: !0,
                  children: (e) =>
                      (0, i.jsx)(o.D, {
                          ...e,
                          innerRef: d,
                          tag: "span",
                          className: v.eM,
                          onContextMenu: I,
                          children: (0, i.jsx)(c.g, { name: N, colorString: T ?? null, colorStrings: S }),
                      }),
              }),
          });
}
function y(e) {
    let { channel: t } = e,
        { threadMetadata: n } = t;
    return null == n
        ? (0, i.jsx)("div", { style: { marginTop: -8 } })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      children: (0, i.jsx)("div", {
                          className: v.VA,
                          children: N.intl.format(N.t.imPXd5, {
                              usernameHook: (e, n) => (0, i.jsx)(T, { userId: t.ownerId, channel: t }, n),
                          }),
                      }),
                  }),
                  t.type === I.rbe.PRIVATE_THREAD
                      ? (0, i.jsx)(d.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: N.intl.string(N.t["1awbZG"]),
                        })
                      : null,
              ],
          });
}
function b(e) {
    let { channel: t } = e,
        n = (0, p.gU)(t) ?? u.y,
        l = (0, g.Ay)(t);
    return (0, i.jsxs)(S.Ay, {
        channelId: t.id,
        children: [
            (0, i.jsx)("div", { className: v.P0, children: (0, i.jsx)(n, { className: v.Kk }) }),
            (0, i.jsx)(S.cr, { children: l }),
            (0, i.jsx)(y, { channel: t }),
        ],
    });
}
