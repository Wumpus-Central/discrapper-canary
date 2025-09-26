n.d(t, { Z: () => T }), n(361932), n(187205), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    s = n(786920),
    a = n(481060),
    u = n(59662),
    c = n(28682),
    d = n(854014),
    g = n(388032),
    f = n(643153);
function y(e) {
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
function O(e, t) {
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
function E(e) {
    let { useCount: t } = e,
        n = t();
    return 0 === n ? null : (0, r.jsx)(a.mAB, { count: n });
}
function b(e) {
    let { dismissibleContentTypes: t, badgeComponent: n, visibleContent: i } = e,
        l = null != i && t.includes(i),
        o = null != n ? (0, r.jsx)(n, {}) : (0, r.jsx)(a.IGR, { text: g.intl.string(g.t.y2b7CA) });
    return l ? o : null;
}
function p(e) {
    let { useDecoration: t, visibleContent: n } = e;
    return t(n);
}
function v(e) {
    let { trailing: t, visibleContent: n } = e;
    if (null == t) return null;
    switch (t.type) {
        case c.PU.BADGE_COUNT:
            return (0, r.jsx)(E, y({}, t));
        case c.PU.BADGE_NEW:
            return (0, r.jsx)(b, O(y({}, t), { visibleContent: n }));
        case c.PU.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(p, O(y({}, t), { visibleContent: n }));
    }
}
function T(e) {
    let { node: t, visibleContent: n } = e,
        { currentPanel: l, navigateTo: o, setShowNavigationMobile: s } = (0, u.t)(),
        { useTitle: a, trailing: c, stronglyDiscouragedCustomTab: g } = t,
        f = a(),
        y = i.useMemo(() => t.layout.flatMap((e) => e.layout), [t]),
        O = (null == l ? void 0 : l.key) === t.key,
        E = () => {
            o(t.key), s(!1);
        };
    return null != g
        ? (0, r.jsx)(g, {
              active: O,
              onClick: E,
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(d.Z, {
                      icon: t.icon,
                      title: f,
                      active: O,
                      trailing: (0, r.jsx)(v, {
                          trailing: c,
                          visibleContent: n,
                      }),
                      onClick: E,
                  }),
                  O && y.length > 1 && (0, r.jsx)(S, { categories: y }),
              ],
          });
}
function S(e) {
    let { categories: t } = e,
        [n, l] = i.useState(0),
        { setShowNavigationMobile: c, navigateTo: d } = (0, u.t)(),
        [g, y] = (0, a.q_F)(() => ({
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
        className: f.subnav,
        children: [
            (0, r.jsx)("div", {
                className: f.track,
                children: (0, r.jsx)(s.animated.div, {
                    className: f.thumb,
                    style: g,
                }),
            }),
            (0, r.jsx)("ul", {
                children: O.map((e, t) => {
                    let { title: i, key: s } = e;
                    return (0, r.jsx)(
                        a.P3F,
                        {
                            onClick: () => {
                                l(t), y({ y: 36 * t }), c(!1), d(s);
                            },
                            tag: "li",
                            className: o()({ [f.active]: t === n }),
                            children: i,
                        },
                        s,
                    );
                }),
            }),
        ],
    });
}
