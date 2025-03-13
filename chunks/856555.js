n.d(t, {
    EQ: () => b,
    ZP: () => _
});
var r = n(200651),
    i = n(192379),
    l = n(704215),
    o = n(540059),
    a = n(605236),
    s = n(930153),
    c = n(432792),
    u = n(981631),
    d = n(388032);
function p(e) {
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
function h(e, t) {
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
let f = (e) => {
        var { tailLeftOffset: t = 41 } = e,
            n = h(e, ['tailLeftOffset']);
        return (0, r.jsx)(
            c.tE,
            p(
                {
                    titleText: d.NW.string(d.t['duN28/']),
                    descriptionText: d.NW.string(d.t['Veu++f']),
                    ctaText: d.NW.string(d.t.F4SoLC),
                    tailLeftOffset: t
                },
                n
            )
        );
    },
    g = () => {
        let e = (0, o.Q3)('VirtualCurrency: ShopOnboardingCoachmark');
        return {
            getRequiredSpacingFromTop: i.useCallback(() => {
                let t = (0, s.Lk)(document.body.style.getPropertyValue('--custom-channel-header-height'), 48),
                    n = (0, s.Lk)(document.body.style.getPropertyValue('--custom-app-top-bar-height'), 36);
                return e ? t + n : t;
            }, [e]),
            tailLeftOffset: e ? 32 : 41,
            isVisualRefreshEnabled: e
        };
    },
    m = (e) => {
        var t,
            n,
            { offsetControlRef: l, backgroundElementRef: o } = e,
            a = h(e, ['offsetControlRef', 'backgroundElementRef']);
        let { getRequiredSpacingFromTop: s, tailLeftOffset: u } = g(),
            d = i.useRef(null),
            b = i.useCallback(
                (e) => {
                    let t = (e.bottom + e.top) / 2;
                    return !(t <= s() + m.COACHMARK_VERTICAL_OFFSET || t > window.innerHeight - ((0, c.t4)() + m.COACHMARK_VERTICAL_OFFSET));
                },
                [s]
            );
        return (0, r.jsx)(c.U_, {
            offsetControlRef: l,
            coachmarkRef: d,
            backgroundElementRef: o,
            calculateVisibility: b,
            calculateBaseOffsets: () => ({
                left: 0,
                verticalOffset: m.COACHMARK_VERTICAL_OFFSET
            }),
            children: (0, r.jsx)(
                f,
                ((t = p(
                    {
                        coachmarkRef: d,
                        tailLeftOffset: u
                    },
                    a
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
m.COACHMARK_VERTICAL_OFFSET = 4;
let b = (e) => {
        let { isVirtualCurrencyEnabled: t, listScrollerRef: n } = e,
            r = i.useRef(null),
            o = i.useCallback(() => {
                null !== r.current && r.current.updateElementOffsets();
            }, []),
            s = i.useCallback(() => {
                null !== n.current && n.current.scrollToTop({ animate: !0 });
            }, [n]),
            d = (0, a.wE)(l.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK),
            { shouldShow: p, closeCoachmarkIfOpen: h } = (0, c.M)({
                onboardingCoachmarkType: 'shop',
                prevCoachmarksDismissed: d,
                onShowCoachmarkHandler: s
            });
        return t
            ? {
                  shouldShow: p,
                  closeCoachmarkIfOpen: h,
                  onHandleScroll: o,
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
    _ = m;
