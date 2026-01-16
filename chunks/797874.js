n.d(t, { Z: () => T });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(28664),
    c = n(481060),
    u = n(239091),
    d = n(810568),
    f = n(774073),
    p = n(916317),
    _ = n(592125),
    h = n(404577),
    m = n(768581),
    g = n(124072),
    E = n(457926),
    b = n(388032),
    y = n(902682);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = function (e) {
    let { gameId: t, channelId: a } = e,
        O = i.useRef(null),
        S = (0, s.e7)([h.Z], () => h.Z.getDetectableGame(t)),
        T = (0, s.e7)([_.Z], () => _.Z.getChannel(a)),
        C = null != T ? T.getGuildId() : null,
        A =
            null != S
                ? (e) => {
                      (0, u.jW)(e, async () => {
                          let { default: e } = await n.e("51064").then(n.bind(n, 631861));
                          return (t) =>
                              (0, r.jsx)(
                                  e,
                                  I(v({}, t), {
                                      game: S,
                                      guildId: C,
                                  }),
                              );
                      });
                  }
                : void 0,
        N =
            null != S
                ? (0, r.jsx)("img", {
                      alt: "",
                      className: o()(y.icon, y.imageIcon),
                      src: m.ZP.getApplicationIconURL({
                          id: S.id,
                          icon: S.icon,
                          size: 32,
                      }),
                  })
                : null,
        P = (0, f.ZP)({
            applicationId: t,
            location: "GameMention",
            source: d.m1.GameMention,
            trackEntryPointImpression: !1,
            autoTrackExposure: !1,
        }),
        w = i.useCallback(() => {
            (0, c.ZDy)(async () => {
                let { default: e } = await n.e("36427").then(n.bind(n, 196738));
                return (t) => (0, r.jsx)(e, v({}, t));
            });
        }, []),
        R = null != S ? "@game ".concat(S.name) : void 0;
    return (0, r.jsx)(p.Z, {
        applicationId: t,
        targetElementRef: O,
        source: d.m1.GameMention,
        children: (e) => {
            var n;
            return (0, r.jsx)(l.u, {
                asContainer: !0,
                tag: "span",
                text: R,
                "aria-label": R,
                delay: 750,
                children: (0, r.jsxs)(
                    g.Z,
                    I(
                        v(
                            {
                                onContextMenu: A,
                                ref: O,
                            },
                            e,
                        ),
                        {
                            onClick: (n) => {
                                if (P.shouldOpenGameProfile && null != t) {
                                    var r;
                                    null == (r = e.onClick) || r.call(e, n);
                                } else w();
                            },
                            children: [
                                (0, r.jsx)(E.Z, { children: N }),
                                (0, r.jsx)("span", {
                                    className: y.name,
                                    children:
                                        null != (n = null == S ? void 0 : S.name) ? n : b.intl.string(b.t["11pdXZ"]),
                                }),
                            ],
                        },
                    ),
                ),
            });
        },
    });
};
