n.d(t, { Z: () => T });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(239091),
    u = n(810568),
    d = n(774073),
    f = n(916317),
    _ = n(592125),
    p = n(77498),
    h = n(768581),
    m = n(124072),
    g = n(457926),
    E = n(388032),
    b = n(695719);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = function (e) {
    let { gameId: t, channelId: a } = e,
        y = i.useRef(null),
        v = (0, s.e7)([p.Z], () => p.Z.getDetectableGame(t)),
        T = (0, s.e7)([_.Z], () => _.Z.getChannel(a)),
        S = null != T ? T.getGuildId() : null,
        A =
            null != v
                ? (e) => {
                      (0, c.jW)(e, async () => {
                          let { default: e } = await n.e("51064").then(n.bind(n, 631861));
                          return (t) =>
                              (0, r.jsx)(
                                  e,
                                  I(O({}, t), {
                                      game: v,
                                      guildId: S,
                                  }),
                              );
                      });
                  }
                : void 0,
        C =
            null != v
                ? (0, r.jsx)("img", {
                      alt: "",
                      className: o()(b.icon, b.imageIcon),
                      src: h.ZP.getApplicationIconURL({
                          id: v.id,
                          icon: v.icon,
                          size: 32,
                      }),
                  })
                : null,
        N = (0, d.ZP)({
            applicationId: t,
            location: "GameMention",
            source: u.m1.GameMention,
            trackEntryPointImpression: !1,
            autoTrackExposure: !1,
        }),
        R = i.useCallback(() => {
            (0, l.ZDy)(async () => {
                let { default: e } = await n.e("36427").then(n.bind(n, 196738));
                return (t) => (0, r.jsx)(e, O({}, t));
            });
        }, []),
        P = null != v ? "@game ".concat(v.name) : void 0;
    return (0, r.jsx)(f.Z, {
        applicationId: t,
        targetElementRef: y,
        children: (e) => {
            var n;
            return (0, r.jsx)(l.DY3, {
                element: "span",
                text: P,
                "aria-label": P,
                delay: 750,
                children: (0, r.jsxs)(
                    m.Z,
                    I(
                        O(
                            {
                                onContextMenu: A,
                                ref: y,
                            },
                            e,
                        ),
                        {
                            onClick: (n) => {
                                if (N.shouldOpenGameProfile && null != t) {
                                    var r;
                                    null == (r = e.onClick) || r.call(e, n);
                                } else R();
                            },
                            children: [
                                (0, r.jsx)(g.Z, { children: C }),
                                (0, r.jsx)("span", {
                                    className: b.name,
                                    children:
                                        null != (n = null == v ? void 0 : v.name) ? n : E.intl.string(E.t["11pdXV"]),
                                }),
                            ],
                        },
                    ),
                ),
            });
        },
    });
};
