n.d(t, { A: () => R }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(3026),
    o = n(990078),
    d = n(192308),
    c = n(834730),
    u = n(939249),
    m = n(658675),
    g = n(821609),
    h = n(194261),
    x = n(442433),
    _ = n(47167),
    p = n(112389),
    A = n(166444),
    E = n(637248),
    f = n(418448),
    j = n(561321),
    N = n(82566),
    I = n(652215),
    C = n(985018),
    b = n(431509);
function v(e) {
    let { guild: t, channel: l } = e,
        s = (0, _.Ay)(l),
        a = (0, j.Rg)(l.id);
    return "null" === l.id
        ? (0, i.jsx)("div", {
              className: r()(b.Fv, b.d0),
              children: (0, i.jsx)(c.E, {
                  className: b.O1,
                  color: "text-muted",
                  variant: "text-xs/semibold",
                  lineClamp: 1,
                  children: s,
              }),
          })
        : (0, i.jsxs)(u.D, {
              className: r()(b.Fv, { [b.d0]: "null" === l.id }),
              onContextMenu: (e) => {
                  (0, x.L3)(e, async () => {
                      let { default: e } = await Promise.all([
                          n.e("2271"),
                          n.e("99011"),
                          n.e("21420"),
                          n.e("75149"),
                          n.e("15920"),
                      ]).then(n.bind(n, 725756));
                      return (n) => (0, i.jsx)(e, { ...n, channel: l, guild: t });
                  });
              },
              onClick: (e) => (
                  e.stopPropagation(),
                  (0, p.S)(t.id, l.id)
                      ? (0, f.bN)(l.id)
                      : (0, d.openModalLazy)(async () => {
                            let { default: e } = await n.e("54857").then(n.bind(n, 147696));
                            return (n) => (0, i.jsx)(e, { ...n, guildId: t.id, startingChannelId: l.id });
                        }),
                  !0
              ),
              children: [
                  (0, i.jsx)(c.E, {
                      className: b.O1,
                      color: "text-muted",
                      variant: "text-xs/semibold",
                      lineClamp: 1,
                      children: s,
                  }),
                  (0, i.jsx)(m.P, { checked: a }),
              ],
          });
}
let S = l.memo(function () {
        return (0, i.jsx)("div", { className: b.me });
    }),
    T = l.memo(function (e) {
        let { index: t } = e;
        return (0, i.jsx)(c.E, { variant: "text-xs/normal", className: b.Ks, children: "\xb7" }, `separator-${t}`);
    }),
    y = l.memo(function (e) {
        let {
                channel: t,
                category: l,
                guild: s,
                isFirstChannel: E,
                isLastChannel: v,
                tooltipDirection: y = "right",
            } = e,
            R = (0, _.Ay)(t),
            L = (0, j.Rg)(t.id, l.id),
            D = (0, j.eK)(t.id, l.id),
            O = (0, j.v)(t.id, l.id),
            G = (0, j.fS)(s.id, l.id),
            M = null != (0, N.A)(s).find((e) => e.id === t.id);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.m, {
                    asContainer: !0,
                    __unsupportedReactNodeAsText: O ?? G,
                    delay: 500,
                    position: y,
                    children: (0, i.jsxs)(u.D, {
                        className: r()(b.WG, { [b.Qn]: E, [b.wp]: v, [b.r9]: D }),
                        onClick: (e) => {
                            if (!D)
                                return (
                                    e.stopPropagation(),
                                    (0, p.S)(s.id, t.id)
                                        ? (0, f.bN)(t.id)
                                        : (0, d.openModalLazy)(async () => {
                                              let { default: e } = await n.e("54857").then(n.bind(n, 147696));
                                              return (n) =>
                                                  (0, i.jsx)(e, { ...n, guildId: s.id, startingChannelId: t.id });
                                          }),
                                    !0
                                );
                        },
                        onContextMenu: (e) => {
                            t.isGuildVocal()
                                ? (0, x.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("97262"),
                                          n.e("93103"),
                                          n.e("2271"),
                                          n.e("99011"),
                                          n.e("21420"),
                                          n.e("2381"),
                                          n.e("40394"),
                                          n.e("10046"),
                                      ]).then(n.bind(n, 698193));
                                      return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: s });
                                  })
                                : (0, x.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("97262"),
                                          n.e("2271"),
                                          n.e("99011"),
                                          n.e("21420"),
                                          n.e("2381"),
                                          n.e("84317"),
                                      ]).then(n.bind(n, 370372));
                                      return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: s });
                                  });
                        },
                        children: [
                            (0, i.jsx)("div", {
                                className: b.yW,
                                children: (0, i.jsxs)("div", {
                                    className: b.HA,
                                    children: [
                                        (0, i.jsx)(A.gm, { channel: t, guild: s }),
                                        (0, i.jsx)(a.A, {
                                            className: b.__invalid_name,
                                            children: (0, i.jsx)(c.E, {
                                                className: b.be,
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                color: D ? "text-muted" : "text-default",
                                                children: R,
                                            }),
                                        }),
                                        M
                                            ? (0, i.jsxs)(i.Fragment, {
                                                  children: [
                                                      (0, i.jsx)(T, { index: 0 }),
                                                      (0, i.jsx)(c.E, {
                                                          variant: "text-xs/medium",
                                                          className: b.qy,
                                                          color: "text-brand",
                                                          children: C.intl.string(C.t.mPxmeE),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            (0, i.jsx)("div", {
                                className: b.tN,
                                children: (0, p.S)(t.guild_id, t.id)
                                    ? (0, i.jsx)(m.P, { checked: L, disabled: D })
                                    : (0, i.jsx)(g.$, {
                                          size: "sm",
                                          variant: "secondary",
                                          text: C.intl.string(C.t.zA9d1J),
                                          icon: h.X,
                                          onClick: I.tEg,
                                      }),
                            }),
                        ],
                    }),
                }),
                !v && (0, i.jsx)(S, {}),
            ],
        });
    });
function R(e) {
    let { categories: t, guild: n, className: s, hasSidebar: r } = e,
        a = l.useCallback(
            (e) => {
                let l = t._categories[e];
                return (0, i.jsx)(v, { channel: l.channel, guild: n }, l.channel.id);
            },
            [t, n],
        ),
        o = l.useCallback(
            (e, l) => {
                let s = t._categories[e],
                    a = t[s.channel.id][l];
                return null == a
                    ? null
                    : (0, i.jsx)(
                          y,
                          {
                              category: s.channel,
                              channel: a.channel,
                              guild: n,
                              isFirstChannel: 0 === l,
                              isLastChannel: t[s.channel.id].length - 1 === l,
                              tooltipDirection: r ? "right" : "top",
                          },
                          a.channel.id,
                      );
            },
            [t, n, r],
        ),
        d = (0, E.zH)(n.id, t, 64);
    return (0, i.jsx)("div", {
        className: s,
        children: d.map((e, t) => {
            let n = a(t),
                l = [],
                s = e.rowCount;
            if (0 === s) return null;
            for (let e = 0; e < s; e++) l.push(o(t, e));
            return (0, i.jsxs)(i.Fragment, { children: [n, l] });
        }),
    });
}
