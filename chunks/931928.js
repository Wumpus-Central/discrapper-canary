n.d(t, {
    ED: () => x,
    fO: () => C,
    qp: () => j
}),
    n(388685);
var i = n(200651),
    r = n(192379),
    s = n(512969),
    l = n(442837),
    a = n(704215),
    o = n(540059),
    c = n(605236),
    d = n(703656),
    u = n(664915),
    m = n(507808),
    p = n(432792),
    g = n(981631),
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
            p.tE,
            _(
                {
                    titleText: b.intl.string(b.t.KnWRQU),
                    descriptionText: b.intl.format(b.t['xYx+WV'], { quantity: 200 }),
                    ctaText: b.intl.string(b.t.v4HbPz),
                    renderTail: !0
                },
                e
            )
        ),
    E = [g.Z5c.ME, g.Z5c.COLLECTIBLES_SHOP, g.Z5c.NITRO_HOME],
    C = (e) => {
        var { onClose: t, onCtaClick: n, targetElementRef: a, isGuildBarScrolling: c, children: m } = e,
            h = (function (e, t) {
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
        let f = r.useRef(null),
            [b, j] = r.useState(22),
            O = r.useRef(null),
            S = (0, o.Q3)('VirtualCurrency: DiscoveryOnboardingCoachmark'),
            v = r.useCallback(
                (e) => {
                    if (S) {
                        let t = window.innerHeight - ((0, p.t4)() + C.COACHMARK_VERTICAL_OFFSET);
                        return e.top <= t;
                    }
                    return !0;
                },
                [S]
            ),
            T = (0, l.e7)([u.Z], () => u.Z.getExpandedFolders().size);
        r.useEffect(() => {
            null !== f.current && f.current.updateElementPositionWithPolling();
        }, [T]),
            r.useEffect(() => {
                null !== f.current && f.current.updateElementPosition();
            }, [c]);
        let I = (0, s.TH)().pathname,
            N = r.useCallback(() => {
                E.includes(I) || (0, d.uL)(g.Z5c.ME), n();
            }, [I, n]),
            y = r.useCallback(
                (e) => {
                    let t = Math.floor(e.width / 2) - 2;
                    b !== t && j(t);
                },
                [b]
            );
        return (0, i.jsx)(p.WS, {
            positionControlRef: f,
            targetElementRef: a,
            coachmarkRef: O,
            calculateVisibility: v,
            onGetTargetElementDimensions: y,
            defaultCoachmarkPosition: 'bottom',
            popoutElement: (0, i.jsx)(
                x,
                _(
                    {
                        onClose: t,
                        onCtaClick: N,
                        tailLeftOffset: b,
                        coachmarkRef: O
                    },
                    h
                )
            ),
            spacing: 8,
            children: m
        });
    };
C.COACHMARK_VERTICAL_OFFSET = 10;
let j = (e) => {
    let { isVirtualCurrencyEnabled: t, discoveryButtonRef: n, scrollToBottom: i } = e,
        s = (0, o.Q3)('VirtualCurrency: DiscoveryOnboardingCoachmark'),
        l = r.useCallback(() => {
            if (s && null !== n.current) {
                let e = (0, p.t4)();
                n.current.getBoundingClientRect().bottom > window.innerHeight - e && i();
            }
        }, [s, n, i]),
        { shouldShow: d, closeCoachmarkIfOpen: u } = (0, p.M)({
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
                (0, m.Y)({
                    pageType: g.ZY5.GUILD_LIST,
                    sectionType: g.jXE.ORBS_DISCOVERY_ONBOARDING_COACHMARK,
                    ctaObject: g.qAy.DISCOVERY_BUTTON_TO_ORB_INTRO_QUEST
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
              closeCoachmarkIfOpen: g.dG4,
              onClose: g.dG4,
              onCtaClick: g.dG4,
              onDiscoveryButtonClick: g.dG4
          };
};
