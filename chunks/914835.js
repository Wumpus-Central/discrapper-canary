n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
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
    f = n(287809),
    _ = n(427262),
    E = n(314307),
    x = n(652215),
    C = n(985018),
    S = n(812077);
function T(e) {
    let { userId: t, channel: s } = e,
        h = l.useRef(null),
        { analyticsLocations: m } = (0, u.Ay)(d.A.USERNAME),
        E = (0, r.bG)([f.default], () => f.default.getUser(t)),
        x = (0, r.bG)([p.Ay], () => (null != t ? p.Ay.getMember(s.guild_id, t) : null)),
        C = (0, A.gn)(s.guild_id, t ?? void 0, x?.colorStrings ?? null);
    function T(e) {
        if (null == E) return null;
        (0, c.L3)(e, async () => {
            let { default: e } = await Promise.all([n.e("97262"), n.e("67447"), n.e("81922")]).then(n.bind(n, 708202));
            return (t) => (0, i.jsx)(e, { ...t, user: E, guildId: s.guild_id, channel: s });
        });
    }
    let N = x?.nick ?? _.Ay.getName(E) ?? "???",
        I = x?.colorString;
    return null == E
        ? (0, i.jsx)("span", { className: a()(S.eM, S.sL), children: N })
        : (0, i.jsx)(u.f5, {
              value: m,
              children: (0, i.jsx)(g.A, {
                  targetElementRef: h,
                  user: E,
                  guildId: s.guild_id,
                  channelId: s.id,
                  roleId: x?.colorRoleId,
                  clickTrap: !0,
                  children: (e) =>
                      (0, i.jsx)(o.DUT, {
                          ...e,
                          innerRef: h,
                          tag: "span",
                          className: S.eM,
                          onContextMenu: T,
                          children: (0, i.jsx)(o.gyj, { name: N, colorString: I ?? null, colorStrings: C }),
                      }),
              }),
          });
}
function N(e) {
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
                          children: C.intl.format(C.t.imPXd5, {
                              usernameHook: (e, n) => (0, i.jsx)(T, { userId: t.ownerId, channel: t }, n),
                          }),
                      }),
                  }),
                  t.type === x.rbe.PRIVATE_THREAD
                      ? (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: C.intl.string(C.t["1awbZG"]),
                        })
                      : null,
              ],
          });
}
function I(e) {
    let { channel: t } = e,
        n = (0, m.gU)(t) ?? o.ysw,
        l = (0, h.Ay)(t);
    return (0, i.jsxs)(E.Ay, {
        channelId: t.id,
        children: [
            (0, i.jsx)("div", { className: S.P0, children: (0, i.jsx)(n, { className: S.Kk }) }),
            (0, i.jsx)(E.cr, { children: l }),
            (0, i.jsx)(N, { channel: t }),
        ],
    });
}
