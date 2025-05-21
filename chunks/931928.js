n.d(t, {
    ED: () => x,
    fO: () => j,
    qp: () => O
});
var i = n(255367),
    r = n(73800),
    s = n(114858),
    l = n(442837),
    a = n(704215),
    o = n(540059),
    c = n(605236),
    d = n(703656),
    u = n(664915),
    g = n(507808),
    m = n(432792),
    p = n(981631),
    h = n(921944),
    f = n(46140),
    b = n(388032);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
let x = (e) =>
        (0, i.jsx)(
            m.M4,
            _(
                {
                    titleText: b.intl.string(b.t.KnWRQU),
                    descriptionText: b.intl.format(b.t['xYx+WV'], { quantity: 200 }),
                    ctaText: b.intl.string(b.t.v4HbPz)
                },
                e
            )
        ),
    E = [p.Z5c.ME, p.Z5c.COLLECTIBLES_SHOP, p.Z5c.NITRO_HOME],
    C = {
        position: 'right',
        align: 'bottom'
    },
    j = (e) => {
        var t,
            n,
            { onClose: a, onCtaClick: c, targetElementRef: g, isGuildBarScrolling: h, children: f } = e,
            b = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            s = Object.keys(e);
                        for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(e, ['onClose', 'onCtaClick', 'targetElementRef', 'isGuildBarScrolling', 'children']);
        let O = r.useRef(null),
            S = (0, o.Q3)('VirtualCurrency: DiscoveryOnboardingCoachmark'),
            v = r.useCallback(
                (e) => {
                    if (S) {
                        let t = window.innerHeight - ((0, m.t4)() + j.COACHMARK_VERTICAL_OFFSET);
                        return e.top <= t;
                    }
                    return !0;
                },
                [S]
            ),
            T = (0, l.e7)([u.Z], () => u.Z.getExpandedFolders().size);
        r.useEffect(() => {
            null !== O.current && O.current.updateElementPositionWithPolling();
        }, [T]),
            r.useEffect(() => {
                null !== O.current && O.current.updateElementPosition();
            }, [h]);
        let N = (0, s.TH)().pathname,
            I = r.useCallback(() => {
                E.includes(N) || (0, d.uL)(p.Z5c.ME), c();
            }, [N, c]);
        return (0, i.jsx)(
            m.WS,
            ((t = _(
                {
                    positionControlRef: O,
                    targetElementRef: g,
                    calculateVisibility: v,
                    defaultCoachmarkAlign: C.align,
                    popoutElement: (0, i.jsx)(
                        x,
                        _(
                            {
                                onClose: a,
                                onCtaClick: I
                            },
                            b,
                            C
                        )
                    ),
                    spacing: 8
                },
                C
            )),
            (n = n = { children: f }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        );
    };
j.COACHMARK_VERTICAL_OFFSET = 10;
let O = (e) => {
    let { isVirtualCurrencyEnabled: t, discoveryButtonRef: n, scrollToBottom: i } = e,
        s = (0, o.Q3)('VirtualCurrency: DiscoveryOnboardingCoachmark'),
        l = r.useCallback(() => {
            if (s && null !== n.current) {
                let e = (0, m.t4)();
                n.current.getBoundingClientRect().bottom > window.innerHeight - e && i();
            }
        }, [s, n, i]),
        { shouldShow: d, closeCoachmarkIfOpen: u } = (0, m.M)({
            onboardingCoachmarkType: 'discover',
            onShowCoachmarkHandler: l
        }),
        b = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'CLOSE';
                (0, c.EW)(a.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, {
                    dismissAction: h.L.INDIRECT_ACTION,
                    groupName: h.R.VIRTUAL_CURRENCY_ONBOARDING
                }),
                    u(e);
            },
            [u]
        ),
        _ = r.useCallback(() => u('CTA_CLICK'), [u]),
        x = r.useCallback(() => {
            b('CTA_CLICK'),
                (0, g.Y)({
                    pageType: p.ZY5.GUILD_LIST,
                    sectionType: p.jXE.ORBS_DISCOVERY_ONBOARDING_COACHMARK,
                    ctaObject: p.qAy.DISCOVERY_BUTTON_TO_ORB_INTRO_QUEST
                });
        }, [b]);
    return t
        ? {
              shouldShow: d,
              questId: f.V6,
              closeCoachmarkIfOpen: u,
              onClose: b,
              onCtaClick: _,
              onDiscoveryButtonClick: x
          }
        : {
              shouldShow: !1,
              questId: void 0,
              closeCoachmarkIfOpen: p.dG4,
              onClose: p.dG4,
              onCtaClick: p.dG4,
              onDiscoveryButtonClick: p.dG4
          };
};
