"use strict";
n.d(t, { A: () => T }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(3026),
    o = n(990078),
    d = n(397927),
    c = n(442433),
    u = n(112389),
    m = n(166444),
    g = n(637248),
    x = n(418448),
    h = n(561321),
    _ = n(82566),
    p = n(652215),
    A = n(985018),
    f = n(959132);
function j(e) {
    let { guild: t, channel: s } = e,
        l = (0, h.Rg)(s.id);
    return "null" === s.id
        ? (0, i.jsx)("div", {
              className: r()(f.Fv, f.d0),
              children: (0, i.jsx)(d.Text, {
                  className: f.O1,
                  color: "text-muted",
                  variant: "text-xs/semibold",
                  lineClamp: 1,
                  children: s.name,
              }),
          })
        : (0, i.jsxs)(d.DUT, {
              className: r()(f.Fv, { [f.d0]: "null" === s.id }),
              onContextMenu: (e) => {
                  (0, c.L3)(e, async () => {
                      let { default: e } = await Promise.all([n.e("21420"), n.e("75149"), n.e("86135")]).then(
                          n.bind(n, 725756),
                      );
                      return (n) => (0, i.jsx)(e, { ...n, channel: s, guild: t });
                  });
              },
              onClick: (e) => (
                  e.stopPropagation(),
                  (0, u.S)(t.id, s.id)
                      ? (0, x.bN)(s.id)
                      : (0, d.mMO)(async () => {
                            let { default: e } = await n.e("54857").then(n.bind(n, 147696));
                            return (n) => (0, i.jsx)(e, { ...n, guildId: t.id, startingChannelId: s.id });
                        }),
                  !0
              ),
              children: [
                  (0, i.jsx)(d.Text, {
                      className: f.O1,
                      color: "text-muted",
                      variant: "text-xs/semibold",
                      lineClamp: 1,
                      children: s.name,
                  }),
                  (0, i.jsx)(d.P7L, { checked: l }),
              ],
          });
}
let N = s.memo(function () {
        return (0, i.jsx)("div", { className: f.me });
    }),
    E = s.memo(function (e) {
        let { index: t } = e;
        return (0, i.jsx)(d.Text, { variant: "text-xs/normal", className: f.Ks, children: "\xb7" }, `separator-${t}`);
    }),
    b = s.memo(function (e) {
        let {
                channel: t,
                category: s,
                guild: l,
                isFirstChannel: g,
                isLastChannel: j,
                tooltipDirection: b = "right",
            } = e,
            T = (0, h.Rg)(t.id, s.id),
            C = (0, h.eK)(t.id, s.id),
            I = (0, h.v)(t.id, s.id),
            v = (0, h.fS)(l.id, s.id),
            S = null != (0, _.A)(l).find((e) => e.id === t.id);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.m, {
                    asContainer: !0,
                    __unsupportedReactNodeAsText: I ?? v,
                    delay: 500,
                    position: b,
                    children: (0, i.jsxs)(d.DUT, {
                        className: r()(f.WG, { [f.Qn]: g, [f.wp]: j, [f.r9]: C }),
                        onClick: (e) => {
                            if (!C)
                                return (
                                    e.stopPropagation(),
                                    (0, u.S)(l.id, t.id)
                                        ? (0, x.bN)(t.id)
                                        : (0, d.mMO)(async () => {
                                              let { default: e } = await n.e("54857").then(n.bind(n, 147696));
                                              return (n) =>
                                                  (0, i.jsx)(e, { ...n, guildId: l.id, startingChannelId: t.id });
                                          }),
                                    !0
                                );
                        },
                        onContextMenu: (e) => {
                            t.isGuildVocal()
                                ? (0, c.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("97262"),
                                          n.e("21420"),
                                          n.e("57287"),
                                          n.e("40394"),
                                          n.e("69701"),
                                      ]).then(n.bind(n, 698193));
                                      return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
                                  })
                                : (0, c.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("97262"),
                                          n.e("21420"),
                                          n.e("57287"),
                                          n.e("34180"),
                                      ]).then(n.bind(n, 370372));
                                      return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
                                  });
                        },
                        children: [
                            (0, i.jsx)("div", {
                                className: f.yW,
                                children: (0, i.jsxs)("div", {
                                    className: f.HA,
                                    children: [
                                        (0, i.jsx)(m.gm, { channel: t, guild: l }),
                                        (0, i.jsx)(a.A, {
                                            className: f.__invalid_name,
                                            children: (0, i.jsx)(d.Text, {
                                                className: f.be,
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                color: C ? "text-muted" : "text-default",
                                                children: t.name,
                                            }),
                                        }),
                                        S
                                            ? (0, i.jsxs)(i.Fragment, {
                                                  children: [
                                                      (0, i.jsx)(E, { index: 0 }),
                                                      (0, i.jsx)(d.Text, {
                                                          variant: "text-xs/medium",
                                                          className: f.qy,
                                                          color: "text-brand",
                                                          children: A.intl.string(A.t.mPxmeE),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            (0, i.jsx)("div", {
                                className: f.tN,
                                children: (0, u.S)(t.guild_id, t.id)
                                    ? (0, i.jsx)(d.P7L, { checked: T, disabled: C })
                                    : (0, i.jsx)(d.Button, {
                                          size: "sm",
                                          variant: "secondary",
                                          text: A.intl.string(A.t.zA9d1J),
                                          icon: d.XAi,
                                          onClick: p.tEg,
                                      }),
                            }),
                        ],
                    }),
                }),
                !j && (0, i.jsx)(N, {}),
            ],
        });
    });
function T(e) {
    let { categories: t, guild: n, className: l, hasSidebar: r } = e,
        a = s.useCallback(
            (e) => {
                let s = t._categories[e];
                return (0, i.jsx)(j, { channel: s.channel, guild: n }, s.channel.id);
            },
            [t, n],
        ),
        o = s.useCallback(
            (e, s) => {
                let l = t._categories[e],
                    a = t[l.channel.id][s];
                return null == a
                    ? null
                    : (0, i.jsx)(
                          b,
                          {
                              category: l.channel,
                              channel: a.channel,
                              guild: n,
                              isFirstChannel: 0 === s,
                              isLastChannel: t[l.channel.id].length - 1 === s,
                              tooltipDirection: r ? "right" : "top",
                          },
                          a.channel.id,
                      );
            },
            [t, n, r],
        ),
        d = (0, g.zH)(n.id, t, 64);
    return (0, i.jsx)("div", {
        className: l,
        children: d.map((e, t) => {
            let n = a(t),
                s = [],
                l = e.rowCount;
            if (0 === l) return null;
            for (let e = 0; e < l; e++) s.push(o(t, e));
            return (0, i.jsxs)(i.Fragment, { children: [n, s] });
        }),
    });
}
