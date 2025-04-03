n.d(t, {
    EQ: () => b,
    ZP: () => _
});
var r = n(200651),
    i = n(192379),
    l = n(704215),
    a = n(540059),
    o = n(605236),
    s = n(930153),
    c = n(432792),
    u = n(981631),
    d = n(388032),
    p = n(326238);
function h(e) {
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
function f(e, t) {
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
let g = (e) => {
        var { tailLeftOffset: t = 22 } = e,
            n = f(e, ['tailLeftOffset']);
        return (0, r.jsx)(
            c.tE,
            h(
                {
                    titleText: d.NW.string(d.t['duN28/']),
                    descriptionText: d.NW.string(d.t['Veu++f']),
                    ctaText: d.NW.string(d.t.F4SoLC),
                    tailLeftOffset: t,
                    customIconSrcs: { static: p.Z }
                },
                n
            )
        );
    },
    m = () => {
        let e = (0, a.Q3)('VirtualCurrency: ShopOnboardingCoachmark');
        return {
            getRequiredSpacingFromTop: i.useCallback(() => {
                let t = (0, s.Lk)(document.body.style.getPropertyValue('--custom-channel-header-height'), 48),
                    n = (0, s.Lk)(document.body.style.getPropertyValue('--custom-app-top-bar-height'), 36);
                return e ? t + n : t;
            }, [e]),
            tailLeftOffset: e ? 15 : 22,
            isVisualRefreshEnabled: e
        };
    },
    b = (e) => {
        let { isVirtualCurrencyEnabled: t, listScrollerRef: n } = e,
            r = i.useRef(null),
            a = i.useCallback(() => {
                null !== r.current && r.current.updateElementOffsets();
            }, []),
            s = i.useCallback(() => {
                null !== n.current && n.current.scrollToTop({ animate: !0 });
            }, [n]),
            d = (0, o.wE)(l.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK),
            { shouldShow: p, closeCoachmarkIfOpen: h } = (0, c.M)({
                onboardingCoachmarkType: 'shop',
                prevCoachmarksDismissed: d,
                onShowCoachmarkHandler: s
            });
        return t
            ? {
                  shouldShow: p,
                  closeCoachmarkIfOpen: h,
                  onHandleScroll: a,
                  offsetControlRef: r,
                  onClose: h,
                  onCtaClick: h
              }
            : {
                  shouldShow: !1,
                  closeCoachmarkIfOpen: u.dG4,
                  onHandleScroll: u.dG4,
                  offsetControlRef: r,
                  onClose: u.dG4,
                  onCtaClick: u.dG4
              };
    },
    _ = (e) => {
        var t,
            n,
            { offsetControlRef: l, backgroundElementRef: o } = e,
            u = f(e, ['offsetControlRef', 'backgroundElementRef']);
        let { getRequiredSpacingFromTop: d, tailLeftOffset: p } = m(),
            b = i.useRef(null),
            _ = i.useCallback(
                (e) => {
                    let t = (e.bottom + e.top) / 2;
                    return !(t <= d() || t > window.innerHeight - (0, c.t4)());
                },
                [d]
            ),
            E = (0, a.Q3)('VirtualCurrency: ShopOnboardingCoachmark'),
            O = i.useCallback(
                (e, t) => {
                    if (E) {
                        let e = (0, s.Lk)(document.body.style.getPropertyValue('--custom-app-top-bar-height'), 36);
                        return {
                            left: -(0, s.Lk)(document.body.style.getPropertyValue('--custom-guild-list-width'), 72),
                            verticalOffset: t ? -e - 4 : e - 9
                        };
                    }
                    return {
                        left: 0,
                        verticalOffset: t ? -4 : -12
                    };
                },
                [E]
            );
        return (0, r.jsx)(c.U_, {
            offsetControlRef: l,
            coachmarkRef: b,
            backgroundElementRef: o,
            calculateVisibility: _,
            calculateBaseOffsets: O,
            children: (0, r.jsx)(
                g,
                ((t = h(
                    {
                        coachmarkRef: b,
                        tailLeftOffset: p
                    },
                    u
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
            )
        });
    };
