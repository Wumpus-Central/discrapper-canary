n.d(t, {
    ED: () => N,
    fO: () => E,
    qp: () => j
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    s = n(512969),
    a = n(442837),
    l = n(704215),
    o = n(540059),
    c = n(605236),
    d = n(703656),
    u = n(664915),
    m = n(507808),
    g = n(432792),
    p = n(981631),
    h = n(921944),
    f = n(46140),
    _ = n(388032);
function b(e) {
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
let N = (e) =>
        (0, r.jsx)(
            g.tE,
            b(
                {
                    titleText: _.NW.string(_.t.KnWRQU),
                    descriptionText: _.NW.format(_.t['xYx+WV'], { quantity: 200 }),
                    ctaText: _.NW.string(_.t.v4HbPz),
                    renderTail: !0
                },
                e
            )
        ),
    x = [p.Z5c.ME, p.Z5c.COLLECTIBLES_SHOP, p.Z5c.NITRO_HOME],
    E = (e) => {
        var { onClose: t, onCtaClick: n, targetElementRef: l, isGuildBarScrolling: c, children: m } = e,
            h = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            s = Object.keys(e);
                        for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ['onClose', 'onCtaClick', 'targetElementRef', 'isGuildBarScrolling', 'children']);
        let f = i.useRef(null),
            [_, j] = i.useState(22),
            C = i.useRef(null),
            O = (0, o.Q3)('VirtualCurrency: DiscoveryOnboardingCoachmark'),
            S = i.useCallback(
                (e) => {
                    if (O) {
                        let t = window.innerHeight - ((0, g.t4)() + E.COACHMARK_VERTICAL_OFFSET);
                        return e.top <= t;
                    }
                    return !0;
                },
                [O]
            ),
            v = (0, a.e7)([u.Z], () => u.Z.getExpandedFolders().size);
        i.useEffect(() => {
            null !== f.current && f.current.updateElementPositionWithPolling();
        }, [v]),
            i.useEffect(() => {
                null !== f.current && f.current.updateElementPosition();
            }, [c]);
        let T = (0, s.TH)().pathname,
            I = i.useCallback(() => {
                x.includes(T) || (0, d.uL)(p.Z5c.ME), n();
            }, [T, n]),
            y = i.useCallback(
                (e) => {
                    let t = Math.floor(e.width / 2) - 2;
                    _ !== t && j(t);
                },
                [_]
            );
        return (0, r.jsx)(g.WS, {
            positionControlRef: f,
            targetElementRef: l,
            coachmarkRef: C,
            calculateVisibility: S,
            onGetTargetElementDimensions: y,
            defaultCoachmarkPosition: 'bottom',
            popoutElement: (0, r.jsx)(
                N,
                b(
                    {
                        onClose: t,
                        onCtaClick: I,
                        tailLeftOffset: _,
                        coachmarkRef: C
                    },
                    h
                )
            ),
            spacing: 8,
            children: m
        });
    };
E.COACHMARK_VERTICAL_OFFSET = 10;
let j = (e) => {
    let { isVirtualCurrencyEnabled: t, discoveryButtonRef: n, scrollToBottom: r } = e,
        s = (0, o.Q3)('VirtualCurrency: DiscoveryOnboardingCoachmark'),
        a = i.useCallback(() => {
            if (s && null !== n.current) {
                let e = (0, g.t4)();
                n.current.getBoundingClientRect().bottom > window.innerHeight - e && r();
            }
        }, [s, n, r]),
        { shouldShow: d, closeCoachmarkIfOpen: u } = (0, g.M)({
            onboardingCoachmarkType: 'discover',
            onShowCoachmarkHandler: a
        }),
        _ = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'CLOSE';
                (0, c.EW)(l.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, {
                    dismissAction: h.L.INDIRECT_ACTION,
                    groupName: h.R.VIRTUAL_CURRENCY_ONBOARDING
                }),
                    u(e);
            },
            [u]
        ),
        b = i.useCallback(() => u('CTA_CLICK'), [u]),
        N = i.useCallback(() => {
            _('CTA_CLICK'),
                (0, m.Y)({
                    pageType: p.ZY5.GUILD_LIST,
                    sectionType: p.jXE.ORBS_DISCOVERY_ONBOARDING_COACHMARK,
                    ctaObject: p.qAy.DISCOVERY_BUTTON_TO_ORB_INTRO_QUEST
                });
        }, [_]);
    return t
        ? {
              shouldShow: d,
              questId: f.V6,
              closeCoachmarkIfOpen: u,
              onClose: _,
              onCtaClick: b,
              onDiscoveryButtonClick: N
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
