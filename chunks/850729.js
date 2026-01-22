n.d(t, { C: () => L }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(837381),
    a = n(311907),
    s = n(506774),
    o = n(397927),
    c = n(509963),
    u = n(704761),
    d = n(531260),
    f = n(793943),
    p = n(411976),
    h = n(912309),
    b = n(400492),
    g = n(728321),
    m = n(309010),
    A = n(287809),
    y = n(816733),
    O = n(619921),
    j = n(194871),
    v = n(966846),
    x = n(674378),
    E = n(87941),
    _ = n(941971),
    C = n(900848),
    S = n(550591),
    I = n(65611),
    N = n(652215),
    T = n(788868),
    P = n(235079),
    w = n(985018),
    R = n(623773);
let D = {
    origin: {
        x: -16,
        y: 0,
    },
    targetWidth: 48,
    targetHeight: 48,
    offset: {
        x: 0,
        y: 0,
    },
};
function M(e) {
    var t, n;
    let { selected: a, user: d, badge: p, link: h, showProgressBadge: m } = e,
        [A, y] = l.useState(!1),
        [O, j] = l.useState(!1),
        [v, x] = l.useState(null),
        [E, T] = l.useState(0),
        M = (0, i.Vd)("home"),
        L = (0, f.fy)().activePanel === f.HP.APP_ICON,
        G = () => {
            x(null), T(0), clearTimeout(v);
        };
    if (null == d) return null;
    let k = w.intl.string(w.t.YUU0RF);
    O && (k = s.w.get(N.wqg) ? w.intl.string(w.t["nkq1l+"]) : w.intl.string(w.t.Be8Q5E));
    let U = null;
    !a &&
        m &&
        (U = (0, r.jsx)(c.A, {
            className: R.Cp,
            determineOwnVisibility: !1,
        }));
    let V = a || A || L,
        F = (0, r.jsx)(o.Qk9, {
            selected: !0,
            lowerBadge: p > 0 ? (0, I.wN)(p) : null,
            upperBadge: U,
            lowerBadgeSize: { width: (0, o.o6S)(p) },
            children: (0, r.jsx)(
                o.jlP,
                ((t = (function (e) {
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
                })(
                    {
                        onMouseEnter: () => y(!0),
                        onMouseLeave: () => y(!1),
                        onClick: () => {
                            if (
                                !__OVERLAY__ &&
                                (null != v && clearTimeout(v), x(setTimeout(G, 500)), T(E + 1), 15 === E)
                            ) {
                                G();
                                let e = !s.w.get(N.wqg);
                                s.w.set(N.wqg, e),
                                    e && s.w.set(P.L, !0),
                                    e ? (0, b.Ak)("discodo") : (0, b.Ak)("user_leave"),
                                    j(!0),
                                    setTimeout(() => {
                                        j(!1);
                                    }, 1000);
                            }
                        },
                        selected: V,
                        ariaLabel: w.intl.string(w.t.YUU0RF),
                        "aria-owns": "guild-list-unread-dms",
                        "aria-selected": a,
                    },
                    M,
                )),
                (n = n =
                    {
                        to: {
                            pathname: h,
                            state: {
                                analyticsSource: {
                                    page: N.liQ.GUILD_CHANNEL,
                                    section: N.JJy.NAVIGATION,
                                    object: N.ZSU.BUTTON_HOME,
                                },
                            },
                        },
                        children: (0, r.jsx)(u.A, {}),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            ),
        });
    return (0, r.jsx)("div", {
        className: R.Uq,
        children: (0, r.jsx)(g.A, {
            inlineSpecs: D,
            tutorialId: "friends-list",
            position: "right",
            children: (0, r.jsxs)(C.c, {
                children: [
                    (0, r.jsx)(_.A, {
                        selected: a,
                        hovered: A,
                        className: R.Io,
                    }),
                    (0, r.jsx)(S.A, {
                        hideOnClick: !0,
                        text: k,
                        selected: a,
                        children: F,
                    }),
                ],
            }),
        }),
    });
}
function L() {
    let e = (0, E.q)(),
        t = (0, a.bG)([v.A, j.A], () => {
            let e = (0, c.v)(v.A.activeItems, j.A),
                { total: t, progress: n } = x.zY(e),
                r = x.uA(n, t);
            return r > 0 && r < 100;
        }),
        n = (0, h.kX)(),
        l = Object.keys(T.TP),
        i = (0, d.A)(),
        { unviewedTrialCount: s, unviewedDiscountCount: o } = (0, a.cf)([y.A], () => ({
            unviewedTrialCount: y.A.getUnacknowledgedOffers(l).length,
            unviewedDiscountCount: y.A.getUnacknowledgedDiscountOffers().length,
        })),
        u = i.fractionalState === T.xc.NONE ? s + o : 0,
        f = (0, a.bG)([A.default], () => A.default.getCurrentUser()),
        b = (0, p.W)(),
        g = n + u + b,
        _ = g === u && u > 0 && n + b === 0,
        C = O.A.getHomeLink();
    return (
        _ && (C = N.BVt.APPLICATION_STORE),
        (0, r.jsx)(M, {
            selected: e,
            user: f,
            selectedChannelId: m.A.getChannelId(N.ME),
            badge: g,
            link: C,
            showProgressBadge: t,
        })
    );
}
