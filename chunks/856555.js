n.d(t, {
    EQ: () => _,
    Rg: () => b
});
var r = n(255367),
    i = n(73800),
    l = n(704215),
    a = n(605236),
    o = n(930153),
    s = n(507808),
    c = n(822857),
    u = n(432792),
    d = n(981631),
    p = n(388032),
    h = n(326238);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let g = (e) =>
        (0, r.jsx)(
            u.M4,
            f(
                {
                    titleText: p.intl.string(p.t['duN28/']),
                    descriptionText: p.intl.string(p.t['Veu++f']),
                    ctaText: p.intl.string(p.t.F4SoLC),
                    customIconSrcs: { static: h.Z }
                },
                e
            )
        ),
    m = () => {
        let e = i.useCallback(() => (0, o.Lk)(document.body.style.getPropertyValue('--custom-channel-header-height'), 48) + (0, o.Lk)(document.body.style.getPropertyValue('--custom-app-top-bar-height'), 36), []);
        return { requiredSpacingFromTop: i.useMemo(() => e(), [e]) };
    },
    b = (e) => {
        var { positionControlRef: t, targetElementRef: n, children: l } = e,
            a = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            })(e, ['positionControlRef', 'targetElementRef', 'children']);
        let { requiredSpacingFromTop: o } = m(),
            s = i.useCallback(
                (e) => {
                    if ((e.bottom + e.top) / 2 <= o) return !1;
                    let t = window.innerHeight - (0, u.t4)();
                    return !(e.bottom > t);
                },
                [o]
            );
        return (0, r.jsx)(u.WS, {
            defaultCoachmarkAlign: 'bottom',
            targetElementRef: n,
            positionControlRef: t,
            popoutElement: (0, r.jsx)(g, f({}, a)),
            calculateVisibility: s,
            spacing: 12,
            children: l
        });
    },
    _ = (e) => {
        let { listScrollerRef: t } = e,
            { enabled: n } = (0, c.WX)({ location: 'useShopOnboardingCoachmark' }),
            r = i.useRef(null),
            o = i.useCallback(() => {
                null !== r.current && r.current.updateElementPosition();
            }, []),
            p = i.useCallback(() => {
                null != t && null != t.current && t.current.scrollToTop({ animate: !0 });
            }, [t]),
            h = (0, a.wE)(l.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK),
            { shouldShow: f, closeCoachmarkIfOpen: g } = (0, u.M)({
                onboardingCoachmarkType: 'shop',
                prevCoachmarksDismissed: h,
                onShowCoachmarkHandler: p
            }),
            m = i.useCallback(() => g('CTA_CLICK'), [g]),
            b = i.useCallback(() => {
                ((0, s.Y)({
                    pageType: d.ZY5.PRIVATE_CHANNEL_LIST,
                    sectionType: d.jXE.ORBS_SHOP_ONBOARDING_COACHMARK,
                    ctaObject: d.qAy.SHOP_BUTTON_TO_SHOP_ORBS_TAB
                }),
                    g());
            }, [g]);
        return n
            ? {
                  shouldShow: f,
                  closeCoachmarkIfOpen: g,
                  onHandleScroll: o,
                  positionControlRef: r,
                  onClose: g,
                  onCtaClick: m,
                  onShopButtonClick: b
              }
            : {
                  shouldShow: !1,
                  closeCoachmarkIfOpen: d.dG4,
                  onHandleScroll: d.dG4,
                  positionControlRef: r,
                  onClose: d.dG4,
                  onCtaClick: d.dG4,
                  onShopButtonClick: d.dG4
              };
    };
