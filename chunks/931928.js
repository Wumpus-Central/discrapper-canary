n.d(t, {
    ED: () => g,
    fO: () => S,
    qp: () => T
}),
    n(388685);
var l = n(200651),
    r = n(192379),
    i = n(512969),
    o = n(442837),
    a = n(704215),
    s = n(540059),
    u = n(605236),
    c = n(703656),
    d = n(664915),
    E = n(432792),
    f = n(981631),
    C = n(921944),
    p = n(46140),
    _ = n(388032);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let g = (e) =>
        (0, l.jsx)(
            E.tE,
            h(
                {
                    titleText: _.NW.string(_.t.KnWRQU),
                    descriptionText: _.NW.format(_.t['xYx+WV'], { quantity: 200 }),
                    ctaText: _.NW.string(_.t.v4HbPz),
                    renderTail: !0
                },
                e
            )
        ),
    O = [f.Z5c.ME, f.Z5c.COLLECTIBLES_SHOP, f.Z5c.NITRO_HOME],
    S = (e) => {
        var { onClose: t, onCtaClick: n, targetElementRef: a, isGuildBarScrolling: u, children: C } = e,
            p = (function (e, t) {
                if (null == e) return {};
                var n,
                    l,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            l,
                            r = {},
                            i = Object.keys(e);
                        for (l = 0; l < i.length; l++) (n = i[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < i.length; l++) (n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(e, ['onClose', 'onCtaClick', 'targetElementRef', 'isGuildBarScrolling', 'children']);
        let _ = r.useRef(null),
            [T, I] = r.useState(22),
            N = r.useRef(null),
            m = (0, s.Q3)('VirtualCurrency: DiscoveryOnboardingCoachmark'),
            A = r.useCallback(
                (e) => {
                    if (m) {
                        let t = window.innerHeight - ((0, E.t4)() + S.COACHMARK_VERTICAL_OFFSET);
                        return e.top <= t;
                    }
                    return !0;
                },
                [m]
            ),
            b = (0, o.e7)([d.Z], () => d.Z.getExpandedFolders().size);
        r.useEffect(() => {
            null !== _.current && _.current.updateElementPositionWithPolling();
        }, [b]),
            r.useEffect(() => {
                null !== _.current && _.current.updateElementPosition();
            }, [u]);
        let P = (0, i.TH)().pathname,
            v = r.useCallback(() => {
                O.includes(P) || (0, c.uL)(f.Z5c.ME), n();
            }, [P, n]),
            y = r.useCallback(
                (e) => {
                    let t = Math.floor(e.width / 2) - 2;
                    T !== t && I(t);
                },
                [T]
            );
        return (0, l.jsx)(E.WS, {
            positionControlRef: _,
            targetElementRef: a,
            coachmarkRef: N,
            calculateVisibility: A,
            onGetTargetElementDimensions: y,
            defaultCoachmarkPosition: 'bottom',
            popoutElement: (0, l.jsx)(
                g,
                h(
                    {
                        onClose: t,
                        onCtaClick: v,
                        tailLeftOffset: T,
                        coachmarkRef: N
                    },
                    p
                )
            ),
            spacing: 8,
            children: C
        });
    };
S.COACHMARK_VERTICAL_OFFSET = 10;
let T = (e) => {
    let { isVirtualCurrencyEnabled: t, discoveryButtonRef: n, scrollToBottom: l } = e,
        i = (0, s.Q3)('VirtualCurrency: DiscoveryOnboardingCoachmark'),
        o = r.useCallback(() => {
            if (i && null !== n.current) {
                let e = (0, E.t4)();
                n.current.getBoundingClientRect().bottom > window.innerHeight - e && l();
            }
        }, [i, n, l]),
        { shouldShow: c, closeCoachmarkIfOpen: d } = (0, E.M)({
            onboardingCoachmarkType: 'discover',
            onShowCoachmarkHandler: o
        }),
        _ = r.useCallback(() => {
            (0, u.EW)(a.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, {
                forceTrack: !0,
                dismissAction: C.L.USER_DISMISS
            }),
                d();
        }, [d]),
        h = r.useCallback(() => d('CTA_CLICK'), [d]);
    return t
        ? {
              shouldShow: c,
              questId: p.V6,
              closeCoachmarkIfOpen: d,
              onClose: _,
              onCtaClick: h
          }
        : {
              shouldShow: !1,
              questId: void 0,
              closeCoachmarkIfOpen: f.dG4,
              onClose: f.dG4,
              onCtaClick: f.dG4
          };
};
