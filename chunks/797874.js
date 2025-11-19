n.d(t, { Z: () => S });
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
    _ = n(916317),
    p = n(592125),
    h = n(77498),
    m = n(768581),
    g = n(124072),
    E = n(457926),
    b = n(388032),
    y = n(695719);
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
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = function (e) {
    let { gameId: t, channelId: a } = e,
        O = i.useRef(null),
        I = (0, s.e7)([h.Z], () => h.Z.getDetectableGame(t)),
        S = (0, s.e7)([p.Z], () => p.Z.getChannel(a)),
        A = null != S ? S.getGuildId() : null,
        C =
            null != I
                ? (e) => {
                      (0, u.jW)(e, async () => {
                          let { default: e } = await n.e("51064").then(n.bind(n, 631861));
                          return (t) =>
                              (0, r.jsx)(
                                  e,
                                  T(v({}, t), {
                                      game: I,
                                      guildId: A,
                                  }),
                              );
                      });
                  }
                : void 0,
        N =
            null != I
                ? (0, r.jsx)("img", {
                      alt: "",
                      className: o()(y.icon, y.imageIcon),
                      src: m.ZP.getApplicationIconURL({
                          id: I.id,
                          icon: I.icon,
                          size: 32,
                      }),
                  })
                : null,
        R = (0, f.ZP)({
            applicationId: t,
            location: "GameMention",
            source: d.m1.GameMention,
            trackEntryPointImpression: !1,
            autoTrackExposure: !1,
        }),
        P = i.useCallback(() => {
            (0, c.ZDy)(async () => {
                let { default: e } = await n.e("36427").then(n.bind(n, 196738));
                return (t) => (0, r.jsx)(e, v({}, t));
            });
        }, []),
        D = null != I ? "@game ".concat(I.name) : void 0;
    return (0, r.jsx)(_.Z, {
        applicationId: t,
        targetElementRef: O,
        source: d.m1.GameMention,
        children: (e) => {
            var n;
            return (0, r.jsx)(l.u, {
                asContainer: !0,
                tag: "span",
                text: D,
                "aria-label": D,
                delay: 750,
                children: (0, r.jsxs)(
                    g.Z,
                    T(
                        v(
                            {
                                onContextMenu: C,
                                ref: O,
                            },
                            e,
                        ),
                        {
                            onClick: (n) => {
                                if (R.shouldOpenGameProfile && null != t) {
                                    var r;
                                    null == (r = e.onClick) || r.call(e, n);
                                } else P();
                            },
                            children: [
                                (0, r.jsx)(E.Z, { children: N }),
                                (0, r.jsx)("span", {
                                    className: y.name,
                                    children:
                                        null != (n = null == I ? void 0 : I.name) ? n : b.intl.string(b.t["11pdXZ"]),
                                }),
                            ],
                        },
                    ),
                ),
            });
        },
    });
};
