n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(397927),
    c = n(442433),
    d = n(793574),
    u = n(688810),
    h = n(47167),
    m = n(713654),
    A = n(967144),
    g = n(342296),
    p = n(696451),
    _ = n(287809),
    f = n(427262),
    E = n(314307),
    C = n(652215),
    x = n(985018),
    S = n(756304);
function I(e) {
    let { userId: t, channel: a } = e,
        h = l.useRef(null),
        { analyticsLocations: m } = (0, u.Ay)(d.A.USERNAME),
        E = (0, r.bG)([_.default], () => _.default.getUser(t)),
        C = (0, r.bG)([p.Ay], () => (null != t ? p.Ay.getMember(a.guild_id, t) : null)),
        x = (0, A.gn)(a.guild_id, t ?? void 0, C?.colorStrings ?? null);
    function I(e) {
        if (null == E) return null;
        (0, c.L3)(e, async () => {
            let { default: e } = await Promise.all([n.e("97262"), n.e("67447"), n.e("31964")]).then(n.bind(n, 708202));
            return (t) => (0, i.jsx)(e, { ...t, user: E, guildId: a.guild_id, channel: a });
        });
    }
    let T = C?.nick ?? f.Ay.getName(E) ?? "???",
        v = C?.colorString;
    return null == E
        ? (0, i.jsx)("span", { className: s()(S.eM, S.sL), children: T })
        : (0, i.jsx)(u.f5, {
              value: m,
              children: (0, i.jsx)(g.A, {
                  targetElementRef: h,
                  user: E,
                  guildId: a.guild_id,
                  channelId: a.id,
                  roleId: C?.colorRoleId,
                  clickTrap: !0,
                  children: (e) =>
                      (0, i.jsx)(o.DUT, {
                          ...e,
                          innerRef: h,
                          tag: "span",
                          className: S.eM,
                          onContextMenu: I,
                          children: (0, i.jsx)(o.gyj, { name: T, colorString: v ?? null, colorStrings: x }),
                      }),
              }),
          });
}
function T(e) {
    let { channel: t } = e,
        { threadMetadata: n } = t;
    return null == n
        ? (0, i.jsx)("div", { style: { marginTop: -8 } })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.Text, {
                      variant: "text-md/normal",
                      color: "text-default",
                      children: (0, i.jsx)("div", {
                          className: S.VA,
                          children: x.intl.format(x.t.imPXd5, {
                              usernameHook: (e, n) => (0, i.jsx)(I, { userId: t.ownerId, channel: t }, n),
                          }),
                      }),
                  }),
                  t.type === C.rbe.PRIVATE_THREAD
                      ? (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: x.intl.string(x.t["1awbZG"]),
                        })
                      : null,
              ],
          });
}
function v(e) {
    let { channel: t } = e,
        n = (0, m.gU)(t) ?? o.ysw,
        l = (0, h.Ay)(t);
    return (0, i.jsxs)(E.Ay, {
        channelId: t.id,
        children: [
            (0, i.jsx)("div", { className: S.P0, children: (0, i.jsx)(n, { className: S.Kk }) }),
            (0, i.jsx)(E.cr, { children: l }),
            (0, i.jsx)(T, { channel: t }),
        ],
    });
}
