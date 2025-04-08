n.d(t, {
    EQ: () => E,
    Rg: () => _
});
var r = n(200651),
    i = n(192379),
    l = n(704215),
    a = n(540059),
    o = n(605236),
    s = n(930153),
    c = n(822857),
    u = n(432792),
    d = n(981631),
    p = n(388032),
    h = n(326238);
function f(e) {
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
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let m = (e) => {
        var { tailLeftOffset: t = 22 } = e,
            n = g(e, ['tailLeftOffset']);
        return (0, r.jsx)(
            u.tE,
            f(
                {
                    titleText: p.NW.string(p.t['duN28/']),
                    descriptionText: p.NW.string(p.t['Veu++f']),
                    ctaText: p.NW.string(p.t.F4SoLC),
                    tailLeftOffset: t,
                    customIconSrcs: { static: h.Z }
                },
                n
            )
        );
    },
    b = () => {
        let e = (0, a.Q3)('VirtualCurrency: ShopOnboardingCoachmark'),
            t = i.useCallback(() => {
                let t = (0, s.Lk)(document.body.style.getPropertyValue('--custom-channel-header-height'), 48),
                    n = (0, s.Lk)(document.body.style.getPropertyValue('--custom-app-top-bar-height'), 36);
                return e ? t + n : t;
            }, [e]);
        return {
            requiredSpacingFromTop: i.useMemo(() => t(), [t]),
            tailLeftOffset: e ? 16 : 22,
            isVisualRefreshEnabled: e
        };
    },
    _ = (e) => {
        var t,
            n,
            { positionControlRef: l, targetElementRef: a, children: o } = e,
            s = g(e, ['positionControlRef', 'targetElementRef', 'children']);
        let { requiredSpacingFromTop: c, tailLeftOffset: d } = b(),
            p = i.useRef(null),
            h = i.useCallback(
                (e) => {
                    if ((e.bottom + e.top) / 2 <= c) return !1;
                    let t = window.innerHeight - (0, u.t4)();
                    return !(e.bottom > t);
                },
                [c]
            );
        return (0, r.jsx)(u.WS, {
            defaultCoachmarkPosition: 'bottom',
            disableAutoInvert: !0,
            targetElementRef: a,
            positionControlRef: l,
            popoutElement: (0, r.jsx)(
                m,
                ((t = f(
                    {
                        coachmarkRef: p,
                        tailLeftOffset: d
                    },
                    s
                )),
                (n = n = { renderTail: !0 }),
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
                t)
            ),
            calculateVisibility: h,
            spacing: 0,
            children: o
        });
    },
    E = (e) => {
        let { listScrollerRef: t } = e,
            { enabled: n } = (0, c.W)({ location: 'useShopOnboardingCoachmark' }),
            r = i.useRef(null),
            a = i.useCallback(() => {
                null !== r.current && r.current.updateElementPosition();
            }, []),
            s = i.useCallback(() => {
                null != t && null != t.current && t.current.scrollToTop({ animate: !0 });
            }, [t]),
            p = (0, o.wE)(l.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK),
            { shouldShow: h, closeCoachmarkIfOpen: f } = (0, u.M)({
                onboardingCoachmarkType: 'shop',
                prevCoachmarksDismissed: p,
                onShowCoachmarkHandler: s
            }),
            g = i.useCallback(() => f('CTA_CLICK'), [f]);
        return n
            ? {
                  shouldShow: h,
                  closeCoachmarkIfOpen: f,
                  onHandleScroll: a,
                  positionControlRef: r,
                  onClose: f,
                  onCtaClick: g
              }
            : {
                  shouldShow: !1,
                  closeCoachmarkIfOpen: d.dG4,
                  onHandleScroll: d.dG4,
                  positionControlRef: r,
                  onClose: d.dG4,
                  onCtaClick: d.dG4
              };
    };
