n.d(t, {
    E: () => k,
    Z: () => x,
}),
    n(388685);
var r = n(951288),
    a = n(647438),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    i = n(957537),
    c = n(839008),
    d = n(797967),
    u = n(353857),
    p = n(978088),
    m = n(9377),
    g = n(101017),
    b = n(606318),
    _ = n(141006),
    f = n(981631),
    C = n(131085),
    h = n(388032),
    j = n(947018),
    v = n(715882);
function x() {
    var e;
    let [t, n] = a.useState(() => {
            let e = Math.floor(Math.random() * _.tl.length);
            return {
                primary_color: _.tl[e].start,
                secondary_color: _.tl[e].end,
                tertiary_color: null,
            };
        }),
        { gradientStyle: o, gradientClassname: c } = (0, l.Icv)({
            colorStrings: (0, b.DX)(t),
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: !0,
        });
    return (0, r.jsxs)("div", {
        className: j.container,
        children: [
            (0, r.jsx)("div", {
                className: j.messageContainer,
                children: (0, r.jsx)(p.l, {
                    avatar: i.Z,
                    username: "Cherry",
                    usernameStyle: o,
                    usernameClassName: s()(c, v.animateGradient),
                    message: h.intl.string(h.t["6OSasb"]),
                }),
            }),
            (0, r.jsx)(d.default, {
                defaultColor: f.p6O,
                colors: _.tl,
                value: t.primary_color,
                secondaryValue: null != (e = t.secondary_color) ? e : void 0,
                onChange: (e) => {
                    var r, a;
                    return n(
                        ((r = (function (e) {
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
                        })({}, t)),
                        (a = a = { primary_color: e }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        r),
                    );
                },
                onChangeGradientColors: (e) =>
                    n({
                        primary_color: e[0],
                        secondary_color: e[1],
                        tertiary_color: null,
                    }),
                isGradient: !0,
            }),
        ],
    });
}
function k(e) {
    let { guildId: t } = e,
        [n, o] = a.useState(C.x_.HEART),
        s = (0, g.Z)(),
        l = a.useMemo(
            () => ({
                unlockedBadges: s.unlockedBadges.slice(0, 10),
                lockedBadges: [],
            }),
            [s],
        );
    return (0, r.jsxs)("div", {
        className: j.container,
        children: [
            (0, r.jsx)("div", {
                className: j.messageContainer,
                children: (0, r.jsx)(p.l, {
                    avatar: c.Z,
                    username: "Roka",
                    usernameStyle: { color: "var(--brand-400)" },
                    message: h.intl.string(h.t["6OSasb"]),
                    decorations: (0, r.jsx)(m.S, {
                        guildId: t,
                        tag: "GGEZ",
                        badge: n,
                    }),
                }),
            }),
            (0, r.jsx)(u.g, {
                selectedBadge: n,
                onBadgeClicked: o,
                badgeCollection: l,
            }),
        ],
    });
}
