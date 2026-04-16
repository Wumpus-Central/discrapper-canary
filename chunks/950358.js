"use strict";
n.d(t, { A: () => I }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(3026),
    o = n(990078),
    d = n(397927),
    c = n(442433),
    u = n(47167),
    m = n(112389),
    g = n(166444),
    x = n(637248),
    h = n(418448),
    _ = n(561321),
    A = n(82566),
    p = n(652215),
    f = n(985018),
    j = n(650005);
function N(e) {
    let { guild: t, channel: s } = e,
        l = (0, u.Ay)(s),
        a = (0, _.Rg)(s.id);
    return "null" === s.id
        ? (0, i.jsx)("div", {
              className: r()(j.Fv, j.d0),
              children: (0, i.jsx)(d.Text, {
                  className: j.O1,
                  color: "text-muted",
                  variant: "text-xs/semibold",
                  lineClamp: 1,
                  children: l,
              }),
          })
        : (0, i.jsxs)(d.DUT, {
              className: r()(j.Fv, { [j.d0]: "null" === s.id }),
              onContextMenu: (e) => {
                  (0, c.L3)(e, async () => {
                      let { default: e } = await Promise.all([n.e("21420"), n.e("75149"), n.e("17478")]).then(
                          n.bind(n, 725756),
                      );
                      return (n) => (0, i.jsx)(e, { ...n, channel: s, guild: t });
                  });
              },
              onClick: (e) => (
                  e.stopPropagation(),
                  (0, m.S)(t.id, s.id)
                      ? (0, h.bN)(s.id)
                      : (0, d.mMO)(async () => {
                            let { default: e } = await n.e("54857").then(n.bind(n, 147696));
                            return (n) => (0, i.jsx)(e, { ...n, guildId: t.id, startingChannelId: s.id });
                        }),
                  !0
              ),
              children: [
                  (0, i.jsx)(d.Text, {
                      className: j.O1,
                      color: "text-muted",
                      variant: "text-xs/semibold",
                      lineClamp: 1,
                      children: l,
                  }),
                  (0, i.jsx)(d.P7L, { checked: a }),
              ],
          });
}
let E = s.memo(function () {
        return (0, i.jsx)("div", { className: j.me });
    }),
    C = s.memo(function (e) {
        let { index: t } = e;
        return (0, i.jsx)(d.Text, { variant: "text-xs/normal", className: j.Ks, children: "\xb7" }, `separator-${t}`);
    }),
    T = s.memo(function (e) {
        let {
                channel: t,
                category: s,
                guild: l,
                isFirstChannel: x,
                isLastChannel: N,
                tooltipDirection: T = "right",
            } = e,
            I = (0, u.Ay)(t),
            b = (0, _.Rg)(t.id, s.id),
            v = (0, _.eK)(t.id, s.id),
            S = (0, _.v)(t.id, s.id),
            y = (0, _.fS)(l.id, s.id),
            R = null != (0, A.A)(l).find((e) => e.id === t.id);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.m, {
                    asContainer: !0,
                    __unsupportedReactNodeAsText: S ?? y,
                    delay: 500,
                    position: T,
                    children: (0, i.jsxs)(d.DUT, {
                        className: r()(j.WG, { [j.Qn]: x, [j.wp]: N, [j.r9]: v }),
                        onClick: (e) => {
                            if (!v)
                                return (
                                    e.stopPropagation(),
                                    (0, m.S)(l.id, t.id)
                                        ? (0, h.bN)(t.id)
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
                                          n.e("2381"),
                                          n.e("40394"),
                                          n.e("57055"),
                                      ]).then(n.bind(n, 698193));
                                      return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
                                  })
                                : (0, c.L3)(e, async () => {
                                      let { default: e } = await Promise.all([
                                          n.e("97262"),
                                          n.e("21420"),
                                          n.e("2381"),
                                          n.e("7974"),
                                      ]).then(n.bind(n, 370372));
                                      return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
                                  });
                        },
                        children: [
                            (0, i.jsx)("div", {
                                className: j.yW,
                                children: (0, i.jsxs)("div", {
                                    className: j.HA,
                                    children: [
                                        (0, i.jsx)(g.gm, { channel: t, guild: l }),
                                        (0, i.jsx)(a.A, {
                                            className: j.__invalid_name,
                                            children: (0, i.jsx)(d.Text, {
                                                className: j.be,
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                color: v ? "text-muted" : "text-default",
                                                children: I,
                                            }),
                                        }),
                                        R
                                            ? (0, i.jsxs)(i.Fragment, {
                                                  children: [
                                                      (0, i.jsx)(C, { index: 0 }),
                                                      (0, i.jsx)(d.Text, {
                                                          variant: "text-xs/medium",
                                                          className: j.qy,
                                                          color: "text-brand",
                                                          children: f.intl.string(f.t.mPxmeE),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            (0, i.jsx)("div", {
                                className: j.tN,
                                children: (0, m.S)(t.guild_id, t.id)
                                    ? (0, i.jsx)(d.P7L, { checked: b, disabled: v })
                                    : (0, i.jsx)(d.Button, {
                                          size: "sm",
                                          variant: "secondary",
                                          text: f.intl.string(f.t.zA9d1J),
                                          icon: d.XAi,
                                          onClick: p.tEg,
                                      }),
                            }),
                        ],
                    }),
                }),
                !N && (0, i.jsx)(E, {}),
            ],
        });
    });
function I(e) {
    let { categories: t, guild: n, className: l, hasSidebar: r } = e,
        a = s.useCallback(
            (e) => {
                let s = t._categories[e];
                return (0, i.jsx)(N, { channel: s.channel, guild: n }, s.channel.id);
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
                          T,
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
        d = (0, x.zH)(n.id, t, 64);
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
