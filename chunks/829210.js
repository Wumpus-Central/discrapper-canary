n.d(t, { Z: () => f }), n(361932), n(187205), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    s = n(261616),
    a = n(481060),
    u = n(59662),
    c = n(854014),
    d = n(388032),
    g = n(643153);
function f(e) {
    var t, n, l, o, s;
    let { node: g, visibleContent: f } = e,
        { currentPanel: v, navigateTo: O, setShowNavigationMobile: E } = (0, u.t)(),
        { useTitle: b, trailing: N, stronglyDiscouragedCustomTab: p } = g,
        T = b(),
        _ = null != (o = null == N || null == (t = N.useDecoration) ? void 0 : t.call(N)) ? o : null,
        m = null != (s = null == N || null == (n = N.useBadgeCount) ? void 0 : n.call(N)) ? s : null,
        x = i.useMemo(() => g.layout.flatMap((e) => e.layout), [g]),
        j = null != f && (null == N || null == (l = N.newIndicatorDismissibleContentTypes) ? void 0 : l.includes(f)),
        I = (null == v ? void 0 : v.key) === g.key,
        C = () => {
            O(g), E(!1);
        };
    return null != p
        ? (0, r.jsx)(p, {
              active: I,
              onClick: C,
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.Z, {
                      icon: g.icon,
                      title: T,
                      active: I,
                      trailing: (0, r.jsx)(() => {
                          if (j) {
                              var e;
                              return null != (e = null == N ? void 0 : N.newIndicatorBadgeOverride)
                                  ? e
                                  : (0, r.jsx)(a.IGR, { text: d.intl.string(d.t.y2b7CA) });
                          }
                          return null != m && m > 0 ? (0, r.jsx)(a.mAB, { count: m }) : null != _ ? _ : null;
                      }, {}),
                      onClick: C,
                  }),
                  I && x.length > 1 && (0, r.jsx)(y, { categories: x }),
              ],
          });
}
function y(e) {
    let { categories: t } = e,
        [n, l] = i.useState(0),
        { setShowNavigationMobile: c, navigateTo: d } = (0, u.t)(),
        [f, y] = (0, a.q_F)(() => ({
            y: 0,
            config: {
                mass: 0.1,
                friction: 20,
                tension: 300,
            },
        })),
        v = i.useMemo(
            () =>
                t
                    .map((e) => {
                        var t;
                        return {
                            title: null == (t = e.useTitle) ? void 0 : t.call(e),
                            key: e.key,
                            type: e.type,
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
                children: (0, r.jsx)(s.animated.div, {
                    className: g.thumb,
                    style: f,
                }),
            }),
            (0, r.jsx)("ul", {
                children: v.map((e, t) => {
                    let { title: i, key: s, type: u } = e;
                    return (0, r.jsx)(
                        a.P3F,
                        {
                            onClick: () => {
                                var e;
                                return (
                                    (e = {
                                        key: s,
                                        type: u,
                                    }),
                                    void (l(t), y({ y: 36 * t }), c(!1), d(e))
                                );
                            },
                            tag: "li",
                            className: o()({ [g.active]: t === n }),
                            children: i,
                        },
                        s,
                    );
                }),
            }),
        ],
    });
}
