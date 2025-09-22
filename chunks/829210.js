n.d(t, { Z: () => v }), n(361932), n(187205), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    s = n(938288),
    a = n(481060),
    u = n(59662),
    c = n(28682),
    d = n(854014),
    f = n(388032),
    g = n(643153);
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
function E(e) {
    let { useCount: t } = e,
        n = t();
    return 0 === n ? null : (0, r.jsx)(a.mAB, { count: n });
}
function b(e) {
    let { dismissibleContentTypes: t, badgeComponent: n, visibleContent: i } = e,
        l = null != i && t.includes(i),
        o = null != n ? (0, r.jsx)(n, {}) : (0, r.jsx)(a.IGR, { text: f.intl.string(f.t.y2b7CA) });
    return l ? o : null;
}
function p(e) {
    let { useDecoration: t, visibleContent: n } = e;
    return t(n);
}
function T(e) {
    let { trailing: t, visibleContent: n } = e;
    if (null == t) return null;
    switch (t.type) {
        case c.PU.BADGE_COUNT:
            return (0, r.jsx)(E, O({}, t));
        case c.PU.BADGE_NEW:
            return (0, r.jsx)(b, y(O({}, t), { visibleContent: n }));
        case c.PU.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(p, y(O({}, t), { visibleContent: n }));
    }
}
function v(e) {
    let { node: t, visibleContent: n } = e,
        { currentPanel: l, navigateTo: o, setShowNavigationMobile: s } = (0, u.t)(),
        { useTitle: a, trailing: c, stronglyDiscouragedCustomTab: f } = t,
        g = a(),
        O = i.useMemo(() => t.layout.flatMap((e) => e.layout), [t]),
        y = (null == l ? void 0 : l.key) === t.key,
        E = () => {
            o(t.key), s(!1);
        };
    return null != f
        ? (0, r.jsx)(f, {
              active: y,
              onClick: E,
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(d.Z, {
                      icon: t.icon,
                      title: g,
                      active: y,
                      trailing: (0, r.jsx)(T, {
                          trailing: c,
                          visibleContent: n,
                      }),
                      onClick: E,
                  }),
                  y && O.length > 1 && (0, r.jsx)(N, { categories: O }),
              ],
          });
}
function N(e) {
    let { categories: t } = e,
        [n, l] = i.useState(0),
        { setShowNavigationMobile: c, navigateTo: d } = (0, u.t)(),
        [f, O] = (0, a.q_F)(() => ({
            y: 0,
            config: {
                mass: 0.1,
                friction: 20,
                tension: 300,
            },
        })),
        y = i.useMemo(
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
                children: (0, r.jsx)(s.animated.div, {
                    className: g.thumb,
                    style: f,
                }),
            }),
            (0, r.jsx)("ul", {
                children: y.map((e, t) => {
                    let { title: i, key: s } = e;
                    return (0, r.jsx)(
                        a.P3F,
                        {
                            onClick: () => {
                                l(t), O({ y: 36 * t }), c(!1), d(s);
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
