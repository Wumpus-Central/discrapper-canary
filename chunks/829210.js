n.d(t, { Z: () => f }), n(361932), n(187205), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(261616),
    s = n(481060),
    u = n(59662),
    c = n(854014),
    d = n(388032),
    g = n(643153);
function f(e) {
    var t, n, l, o, a;
    let { node: g, visibleContent: f } = e,
        { currentPanel: O, navigateTo: E, setShowNavigationMobile: v } = (0, u.t)(),
        { useTitle: b, trailing: T, stronglyDiscouragedCustomTab: N } = g,
        p = b(),
        I = null != (o = null == T || null == (t = T.useDecoration) ? void 0 : t.call(T)) ? o : null,
        C = null != (a = null == T || null == (n = T.useBadgeCount) ? void 0 : n.call(T)) ? a : null,
        j = i.useMemo(() => g.layout.flatMap((e) => e.layout), [g]),
        m = null != f && (null == T || null == (l = T.newIndicatorDismissibleContentTypes) ? void 0 : l.includes(f)),
        _ = (null == O ? void 0 : O.key) === g.key,
        S = () => {
            E(g.key), v(!1);
        };
    return null != N
        ? (0, r.jsx)(N, {
              active: _,
              onClick: S,
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.Z, {
                      icon: g.icon,
                      title: p,
                      active: _,
                      trailing: (0, r.jsx)(() => {
                          if (m) {
                              var e;
                              return null != (e = null == T ? void 0 : T.newIndicatorBadgeOverride)
                                  ? e
                                  : (0, r.jsx)(s.IGR, { text: d.intl.string(d.t.y2b7CA) });
                          }
                          return null != C && C > 0 ? (0, r.jsx)(s.mAB, { count: C }) : null != I ? I : null;
                      }, {}),
                      onClick: S,
                  }),
                  _ && j.length > 1 && (0, r.jsx)(y, { categories: j }),
              ],
          });
}
function y(e) {
    let { categories: t } = e,
        [n, l] = i.useState(0),
        { setShowNavigationMobile: c, navigateTo: d } = (0, u.t)(),
        [f, y] = (0, s.q_F)(() => ({
            y: 0,
            config: {
                mass: 0.1,
                friction: 20,
                tension: 300,
            },
        })),
        O = i.useMemo(
            () =>
                t
                    .map((e) => {
                        var t;
                        return {
                            title: null == (t = e.useTitle) ? void 0 : t.call(e),
                            key: e.key,
                        };
                    })
                    .filter((e) => {
                        let { title: t } = e;
                        return null != t;
                    }),
            [t],
        );
    return (0, r.jsxs)("div", {
        className: g.subnav,
        children: [
            (0, r.jsx)("div", {
                className: g.track,
                children: (0, r.jsx)(a.animated.div, {
                    className: g.thumb,
                    style: f,
                }),
            }),
            (0, r.jsx)("ul", {
                children: O.map((e, t) => {
                    let { title: i, key: a } = e;
                    return (0, r.jsx)(
                        s.P3F,
                        {
                            onClick: () => {
                                l(t), y({ y: 36 * t }), c(!1), d(a);
                            },
                            tag: "li",
                            className: o()({ [g.active]: t === n }),
                            children: i,
                        },
                        a,
                    );
                }),
            }),
        ],
    });
}
