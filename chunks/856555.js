n.d(t, {
    EQ: () => O,
    Rg: () => E
});
var r = n(200651),
    i = n(192379),
    l = n(704215),
    a = n(540059),
    o = n(605236),
    s = n(930153),
    c = n(507808),
    u = n(822857),
    d = n(432792),
    p = n(981631),
    h = n(388032),
    f = n(326238);
function g(e) {
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
function m(e, t) {
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
let b = (e) => {
        var { tailLeftOffset: t = 22 } = e,
            n = m(e, ['tailLeftOffset']);
        return (0, r.jsx)(
            d.tE,
            g(
                {
                    titleText: h.NW.string(h.t['duN28/']),
                    descriptionText: h.NW.string(h.t['Veu++f']),
                    ctaText: h.NW.string(h.t.F4SoLC),
                    tailLeftOffset: t,
                    customIconSrcs: { static: f.Z }
                },
                n
            )
        );
    },
    _ = () => {
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
    E = (e) => {
        var t,
            n,
            { positionControlRef: l, targetElementRef: a, children: o } = e,
            s = m(e, ['positionControlRef', 'targetElementRef', 'children']);
        let { requiredSpacingFromTop: c, tailLeftOffset: u } = _(),
            p = i.useRef(null),
            h = i.useCallback(
                (e) => {
                    if ((e.bottom + e.top) / 2 <= c) return !1;
                    let t = window.innerHeight - (0, d.t4)();
                    return !(e.bottom > t);
                },
                [c]
            );
        return (0, r.jsx)(d.WS, {
            defaultCoachmarkPosition: 'bottom',
            disableAutoInvert: !0,
            targetElementRef: a,
            positionControlRef: l,
            popoutElement: (0, r.jsx)(
                b,
                ((t = g(
                    {
                        coachmarkRef: p,
                        tailLeftOffset: u
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
    O = (e) => {
        let { listScrollerRef: t } = e,
            { enabled: n } = (0, u.W)({ location: 'useShopOnboardingCoachmark' }),
            r = i.useRef(null),
            a = i.useCallback(() => {
                null !== r.current && r.current.updateElementPosition();
            }, []),
            s = i.useCallback(() => {
                null != t && null != t.current && t.current.scrollToTop({ animate: !0 });
            }, [t]),
            h = (0, o.wE)(l.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK),
            { shouldShow: f, closeCoachmarkIfOpen: g } = (0, d.M)({
                onboardingCoachmarkType: 'shop',
                prevCoachmarksDismissed: h,
                onShowCoachmarkHandler: s
            }),
            m = i.useCallback(() => g('CTA_CLICK'), [g]),
            b = i.useCallback(() => {
                (0, c.Y)({
                    pageType: p.ZY5.PRIVATE_CHANNEL_LIST,
                    sectionType: p.jXE.ORBS_SHOP_ONBOARDING_COACHMARK,
                    ctaObject: p.qAy.SHOP_BUTTON_TO_SHOP_ORBS_TAB
                }),
                    g();
            }, [g]);
        return n
            ? {
                  shouldShow: f,
                  closeCoachmarkIfOpen: g,
                  onHandleScroll: a,
                  positionControlRef: r,
                  onClose: g,
                  onCtaClick: m,
                  onShopButtonClick: b
              }
            : {
                  shouldShow: !1,
                  closeCoachmarkIfOpen: p.dG4,
                  onHandleScroll: p.dG4,
                  positionControlRef: r,
                  onClose: p.dG4,
                  onCtaClick: p.dG4,
                  onShopButtonClick: p.dG4
              };
    };
