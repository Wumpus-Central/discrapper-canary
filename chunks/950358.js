n.d(t, {
    A: () => _,
}),
    n(321073);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(3026),
    c = n(990078),
    o = n(397927),
    d = n(442433),
    u = n(112389),
    f = n(166444),
    g = n(637248),
    b = n(418448),
    m = n(561321),
    p = n(82566),
    x = n(652215),
    h = n(985018),
    j = n(959132);

function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function v(e) {
    let { guild: t, channel: i } = e,
        l = (0, m.Rg)(i.id);
    return "null" === i.id
        ? (0, r.jsx)("div", {
              className: s()(j.Fv, j.d0),
              children: (0, r.jsx)(o.Text, {
                  className: j.O1,
                  color: "text-muted",
                  variant: "text-xs/semibold",
                  lineClamp: 1,
                  children: i.name,
              }),
          })
        : (0, r.jsxs)(o.DUT, {
              className: s()(j.Fv, {
                  [j.d0]: "null" === i.id,
              }),
              onContextMenu: (e) => {
                  (0, d.L3)(e, async () => {
                      let { default: e } = await Promise.all([
                          n.e("99011"),
                          n.e("49107"),
                          n.e("75149"),
                          n.e("17500"),
                      ]).then(n.bind(n, 725756));
                      return (n) =>
                          (0, r.jsx)(
                              e,
                              y(O({}, n), {
                                  channel: i,
                                  guild: t,
                              }),
                          );
                  });
              },
              onClick: (e) => (
                  e.stopPropagation(),
                  (0, u.S)(t.id, i.id)
                      ? (0, b.bN)(i.id)
                      : (0, o.mMO)(async () => {
                            let { default: e } = await n.e("54857").then(n.bind(n, 147696));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    y(O({}, n), {
                                        guildId: t.id,
                                        startingChannelId: i.id,
                                    }),
                                );
                        }),
                  !0
              ),
              children: [
                  (0, r.jsx)(o.Text, {
                      className: j.O1,
                      color: "text-muted",
                      variant: "text-xs/semibold",
                      lineClamp: 1,
                      children: i.name,
                  }),
                  (0, r.jsx)(o.P7L, {
                      checked: l,
                  }),
              ],
          });
}
let A = i.memo(function () {
        return (0, r.jsx)("div", {
            className: j.me,
        });
    }),
    E = i.memo(function (e) {
        let { index: t } = e;
        return (0, r.jsx)(
            o.Text,
            {
                variant: "text-xs/normal",
                className: j.Ks,
                children: "\xb7",
            },
            "separator-".concat(t),
        );
    }),
    N = i.memo(function (e) {
        let {
                channel: t,
                category: i,
                guild: l,
                isFirstChannel: g,
                isLastChannel: v,
                tooltipDirection: N = "right",
            } = e,
            _ = (0, m.Rg)(t.id, i.id),
            S = (0, m.eK)(t.id, i.id),
            T = (0, m.v)(t.id, i.id),
            I = (0, m.fS)(l.id, i.id),
            C = null != (0, p.A)(l).find((e) => e.id === t.id);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.m, {
                    asContainer: !0,
                    __unsupportedReactNodeAsText: null != T ? T : I,
                    delay: 500,
                    position: N,
                    children: (0, r.jsxs)(o.DUT, {
                        className: s()(j.WG, {
                            [j.Qn]: g,
                            [j.wp]: v,
                            [j.r9]: S,
                        }),
                        onClick: (e) => {
                            if (!S)
                                return (
                                    e.stopPropagation(),
                                    (0, u.S)(l.id, t.id)
                                        ? (0, b.bN)(t.id)
                                        : (0, o.mMO)(async () => {
                                              let { default: e } = await n.e("54857").then(n.bind(n, 147696));
                                              return (n) =>
                                                  (0, r.jsx)(
                                                      e,
                                                      y(O({}, n), {
                                                          guildId: l.id,
                                                          startingChannelId: t.id,
                                                      }),
                                                  );
                                          }),
                                    !0
                                );
                        },
                        onContextMenu: (e) => {
                            t.isGuildVocal()
                                ? (0, d.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("97262"),
                                          n.e("99011"),
                                          n.e("49107"),
                                          n.e("57287"),
                                          n.e("40394"),
                                          n.e("89209"),
                                      ]).then(n.bind(n, 698193));
                                      return (n) =>
                                          (0, r.jsx)(
                                              e,
                                              y(O({}, n), {
                                                  channel: t,
                                                  guild: l,
                                              }),
                                          );
                                  })
                                : (0, d.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("97262"),
                                          n.e("99011"),
                                          n.e("49107"),
                                          n.e("57287"),
                                          n.e("53699"),
                                      ]).then(n.bind(n, 370372));
                                      return (n) =>
                                          (0, r.jsx)(
                                              e,
                                              y(O({}, n), {
                                                  channel: t,
                                                  guild: l,
                                              }),
                                          );
                                  });
                        },
                        children: [
                            (0, r.jsx)("div", {
                                className: j.yW,
                                children: (0, r.jsxs)("div", {
                                    className: j.HA,
                                    children: [
                                        (0, r.jsx)(f.gm, {
                                            channel: t,
                                            guild: l,
                                        }),
                                        (0, r.jsx)(a.A, {
                                            className: j.__invalid_name,
                                            children: (0, r.jsx)(o.Text, {
                                                className: j.be,
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                color: S ? "text-muted" : "text-default",
                                                children: t.name,
                                            }),
                                        }),
                                        C
                                            ? (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      (0, r.jsx)(E, {
                                                          index: 0,
                                                      }),
                                                      (0, r.jsx)(o.Text, {
                                                          variant: "text-xs/medium",
                                                          className: j.qy,
                                                          color: "text-brand",
                                                          children: h.intl.string(h.t.mPxmeE),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: j.tN,
                                children: (0, u.S)(t.guild_id, t.id)
                                    ? (0, r.jsx)(o.P7L, {
                                          checked: _,
                                          disabled: S,
                                      })
                                    : (0, r.jsx)(o.Button, {
                                          size: "sm",
                                          variant: "secondary",
                                          text: h.intl.string(h.t.zA9d1J),
                                          icon: o.XAi,
                                          onClick: x.tEg,
                                      }),
                            }),
                        ],
                    }),
                }),
                !v && (0, r.jsx)(A, {}),
            ],
        });
    });

function _(e) {
    let { categories: t, guild: n, className: l, hasSidebar: s } = e,
        a = i.useCallback(
            (e) => {
                let i = t._categories[e];
                return (0, r.jsx)(
                    v,
                    {
                        channel: i.channel,
                        guild: n,
                    },
                    i.channel.id,
                );
            },
            [t, n],
        ),
        c = i.useCallback(
            (e, i) => {
                let l = t._categories[e],
                    a = t[l.channel.id][i];
                return null == a
                    ? null
                    : (0, r.jsx)(
                          N,
                          {
                              category: l.channel,
                              channel: a.channel,
                              guild: n,
                              isFirstChannel: 0 === i,
                              isLastChannel: t[l.channel.id].length - 1 === i,
                              tooltipDirection: s ? "right" : "top",
                          },
                          a.channel.id,
                      );
            },
            [t, n, s],
        ),
        o = (0, g.zH)(n.id, t, 64);
    return (0, r.jsx)("div", {
        className: l,
        children: o.map((e, t) => {
            let n = a(t),
                i = [],
                l = e.rowCount;
            if (0 === l) return null;
            for (let e = 0; e < l; e++) i.push(c(t, e));
            return (0, r.jsxs)(r.Fragment, {
                children: [n, i],
            });
        }),
    });
}
