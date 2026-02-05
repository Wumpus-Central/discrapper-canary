n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(397927),
    c = n(442433),
    d = n(793574),
    u = n(688810),
    h = n(713654),
    m = n(967144),
    A = n(342296),
    p = n(696451),
    g = n(287809),
    f = n(427262),
    _ = n(314307),
    E = n(652215),
    C = n(985018),
    x = n(790687);
function S(e) {
    let { userId: t, channel: a } = e,
        h = l.useRef(null),
        { analyticsLocations: _ } = (0, u.Ay)(d.A.USERNAME),
        E = (0, r.bG)([g.default], () => g.default.getUser(t)),
        C = (0, r.bG)([p.Ay], () => (null != t ? p.Ay.getMember(a.guild_id, t) : null)),
        S = (0, m.gn)(a.guild_id, t ?? void 0, C?.colorStrings ?? null);
    function T(e) {
        if (null == E) return null;
        (0, c.L3)(e, async () => {
            let { default: e } = await Promise.all([n.e("97262"), n.e("67447"), n.e("10905")]).then(n.bind(n, 708202));
            return (t) => (0, i.jsx)(e, { ...t, user: E, guildId: a.guild_id, channel: a });
        });
    }
    let I = C?.nick ?? f.Ay.getName(E) ?? "???",
        N = C?.colorString;
    return null == E
        ? (0, i.jsx)("span", { className: s()(x.eM, x.sL), children: I })
        : (0, i.jsx)(u.f5, {
              value: _,
              children: (0, i.jsx)(A.A, {
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
                          className: x.eM,
                          onContextMenu: T,
                          children: (0, i.jsx)(o.gyj, { name: I, colorString: N ?? null, colorStrings: S }),
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
                          className: x.VA,
                          children: C.intl.format(C.t.imPXd5, {
                              usernameHook: (e, n) => (0, i.jsx)(S, { userId: t.ownerId, channel: t }, n),
                          }),
                      }),
                  }),
                  t.type === E.rbe.PRIVATE_THREAD
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
        n = (0, h.gU)(t) ?? o.ysw;
    return (0, i.jsxs)(_.Ay, {
        channelId: t.id,
        children: [
            (0, i.jsx)("div", { className: x.P0, children: (0, i.jsx)(n, { className: x.Kk }) }),
            (0, i.jsx)(_.cr, { children: t.name }),
            (0, i.jsx)(T, { channel: t }),
        ],
    });
}
