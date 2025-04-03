n.d(t, {
    ED: () => O,
    fO: () => S,
    qp: () => I
}),
    n(47120);
var r = n(200651),
    l = n(192379),
    i = n(512969),
    o = n(442837),
    a = n(704215),
    s = n(540059),
    c = n(605236),
    u = n(703656),
    d = n(664915),
    E = n(432792),
    f = n(981631),
    p = n(921944),
    h = n(46140),
    C = n(388032);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let O = (e) =>
        (0, r.jsx)(
            E.tE,
            _(
                {
                    titleText: C.NW.string(C.t.KnWRQU),
                    descriptionText: C.NW.format(C.t['xYx+WV'], { quantity: 200 }),
                    ctaText: C.NW.string(C.t.v4HbPz)
                },
                e
            )
        ),
    g = [f.Z5c.ME, f.Z5c.COLLECTIBLES_SHOP, f.Z5c.NITRO_HOME],
    S = (e) => {
        var { onClose: t, backgroundElementRef: n } = e,
            a = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                }
                return l;
            })(e, ['onClose', 'backgroundElementRef']);
        let c = l.useRef(null),
            [p, h] = l.useState(22),
            C = l.useRef(null),
            I = (0, s.Q3)('VirtualCurrency: DiscoveryOnboardingCoachmark'),
            T = l.useCallback(
                (e) => {
                    if (I) {
                        let t = window.innerHeight - ((0, E.t4)() + S.COACHMARK_VERTICAL_OFFSET);
                        return e.top <= t;
                    }
                    return !0;
                },
                [I]
            ),
            b = (0, o.e7)([d.Z], () => d.Z.getExpandedFolders().size);
        l.useEffect(() => {
            null !== c.current && c.current.updateElementOffsetsWithPolling();
        }, [b]);
        let N = (0, i.TH)(),
            m = l.useCallback(
                () => ({
                    left: 0,
                    verticalOffset: S.COACHMARK_VERTICAL_OFFSET
                }),
                []
            ),
            A = l.useCallback(
                (e) => {
                    p !== e.width / 2 && h(Math.floor(e.width / 2) - 1);
                },
                [p]
            );
        return (0, r.jsx)(E.U_, {
            offsetControlRef: c,
            backgroundElementRef: n,
            coachmarkRef: C,
            calculateVisibility: T,
            calculateBaseOffsets: m,
            onGetBackgroundElementDimensions: A,
            children: (0, r.jsx)(
                O,
                _(
                    {
                        onClose: () => {
                            g.includes(N.pathname) || (0, u.uL)(f.Z5c.ME), t();
                        },
                        tailLeftOffset: p,
                        coachmarkRef: C
                    },
                    a
                )
            )
        });
    };
S.COACHMARK_VERTICAL_OFFSET = 10;
let I = (e) => {
    let { isVirtualCurrencyEnabled: t, discoveryButtonRef: n, scrollToBottom: r } = e,
        i = (0, s.Q3)('VirtualCurrency: DiscoveryOnboardingCoachmark'),
        o = l.useCallback(() => {
            if (i && null !== n.current) {
                let e = (0, E.t4)();
                n.current.getBoundingClientRect().bottom > window.innerHeight - e && r();
            }
        }, [i, n, r]),
        { shouldShow: u, closeCoachmarkIfOpen: d } = (0, E.M)({
            onboardingCoachmarkType: 'discover',
            onShowCoachmarkHandler: o
        });
    return t
        ? {
              shouldShow: u,
              questId: h.V6,
              closeCoachmarkIfOpen: d,
              onClose: () => {
                  (0, c.EW)(a.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, {
                      forceTrack: !0,
                      dismissAction: p.L.USER_DISMISS
                  }),
                      d();
              },
              onCtaClick: d
          }
        : {
              shouldShow: !1,
              questId: void 0,
              closeCoachmarkIfOpen: f.dG4,
              onClose: f.dG4,
              onCtaClick: f.dG4
          };
};
