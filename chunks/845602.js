n.d(t, {
    E: () => O,
    Z: () => y,
}),
    n(388685);
var r = n(255367),
    o = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    i = n(957537),
    c = n(839008),
    u = n(797967),
    d = n(755641),
    p = n(742409),
    f = n(369509),
    m = n(101017),
    b = n(606318),
    g = n(141006),
    h = n(981631),
    _ = n(131085),
    j = n(388032),
    x = n(968946),
    v = n(482985);
function y() {
    var e;
    let [t, n] = o.useState(() => {
            let e = Math.floor(Math.random() * g.tl.length);
            return {
                primary_color: g.tl[e].start,
                secondary_color: g.tl[e].end,
                tertiary_color: null,
            };
        }),
        { gradientStyle: l, gradientClassname: c } = (0, s.Icv)({
            colorStrings: (0, b.DX)(t),
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: !0,
        });
    return (0, r.jsxs)("div", {
        className: x.container,
        children: [
            (0, r.jsx)("div", {
                className: x.messageContainer,
                children: (0, r.jsx)(p.l, {
                    avatar: i.Z,
                    username: "Cherry",
                    usernameStyle: l,
                    usernameClassName: a()(c, v.animateGradient),
                    message: j.intl.string(j.t["6OSasb"]),
                }),
            }),
            (0, r.jsx)(u.default, {
                defaultColor: h.p6O,
                colors: g.tl,
                value: t.primary_color,
                secondaryValue: null != (e = t.secondary_color) ? e : void 0,
                onChange: (e) => {
                    var r, o;
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
                        (o = o = { primary_color: e }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(o)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
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
function O(e) {
    let { guildId: t } = e,
        [n, l] = o.useState(_.x_.HEART),
        a = (0, m.Z)(),
        s = o.useMemo(
            () => ({
                unlockedBadges: a.unlockedBadges.slice(0, 10),
                lockedBadges: [],
            }),
            [a],
        );
    return (0, r.jsxs)("div", {
        className: x.container,
        children: [
            (0, r.jsx)("div", {
                className: x.messageContainer,
                children: (0, r.jsx)(p.l, {
                    avatar: c.Z,
                    username: "Roka",
                    usernameStyle: { color: "var(--brand-400)" },
                    message: j.intl.string(j.t["6OSasb"]),
                    decorations: (0, r.jsx)(f.S, {
                        guildId: t,
                        tag: "GGEZ",
                        badge: n,
                    }),
                }),
            }),
            (0, r.jsx)(d.g, {
                selectedBadge: n,
                onBadgeClicked: l,
                badgeCollection: s,
            }),
        ],
    });
}
