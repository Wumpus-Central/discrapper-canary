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
    o = n(266454),
    c = n(703656),
    d = n(664915),
    u = n(507808),
    m = n(432792),
    p = n(981631),
    g = n(921944),
    h = n(46140),
    f = n(388032);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
let x = (e) =>
        (0, i.jsx)(
            m.M4,
            b(
                {
                    titleText: f.intl.string(f.t.KnWRQU),
                    descriptionText: f.intl.format(f.t['xYx+WV'], { quantity: 200 }),
                    ctaText: f.intl.string(f.t.v4HbPz)
                },
                e
            )
        ),
    _ = [p.Z5c.ME, p.Z5c.COLLECTIBLES_SHOP, p.Z5c.NITRO_HOME],
    E = {
        position: 'right',
        align: 'bottom'
    },
    j = (e) => {
        var t,
            n,
            { onClose: a, onCtaClick: o, targetElementRef: u, isGuildBarScrolling: g, children: h } = e,
            f = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            s = Object.keys(e);
                        for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
                }
                return r;
            })(e, ['onClose', 'onCtaClick', 'targetElementRef', 'isGuildBarScrolling', 'children']);
        let O = r.useRef(null),
            C = r.useCallback((e) => {
                let t = window.innerHeight - ((0, m.t4)() + j.COACHMARK_VERTICAL_OFFSET);
                return e.top <= t;
            }, []),
            S = (0, l.e7)([d.Z], () => d.Z.getExpandedFolders().size);
        (r.useEffect(() => {
            null !== O.current && O.current.updateElementPositionWithPolling();
        }, [S]),
            r.useEffect(() => {
                null !== O.current && O.current.updateElementPosition();
            }, [g]));
        let v = (0, s.TH)().pathname,
            T = r.useCallback(() => {
                (_.includes(v) || (0, c.uL)(p.Z5c.ME), o());
            }, [v, o]);
        return (0, i.jsx)(
            m.WS,
            ((t = b(
                {
                    positionControlRef: O,
                    targetElementRef: u,
                    calculateVisibility: C,
                    defaultCoachmarkAlign: E.align,
                    popoutElement: (0, i.jsx)(
                        x,
                        b(
                            {
                                onClose: a,
                                onCtaClick: T
                            },
                            f,
                            E
                        )
                    ),
                    spacing: 8
                },
                E
            )),
            (n = n = { children: h }),
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
        s = r.useCallback(() => {
            if (null !== n.current) {
                let e = (0, m.t4)();
                n.current.getBoundingClientRect().bottom > window.innerHeight - e && i();
            }
        }, [n, i]),
        { shouldShow: l, closeCoachmarkIfOpen: c } = (0, m.M)({
            onboardingCoachmarkType: 'discover',
            onShowCoachmarkHandler: s
        }),
        d = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'CLOSE';
                ((0, o.Q3)(a.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, {
                    dismissAction: g.L.INDIRECT_ACTION,
                    groupName: g.R.VIRTUAL_CURRENCY_ONBOARDING
                }),
                    c(e));
            },
            [c]
        ),
        f = r.useCallback(() => c('CTA_CLICK'), [c]),
        b = r.useCallback(() => {
            (d('CTA_CLICK'),
                (0, u.Y)({
                    pageType: p.ZY5.GUILD_LIST,
                    sectionType: p.jXE.ORBS_DISCOVERY_ONBOARDING_COACHMARK,
                    ctaObject: p.qAy.DISCOVERY_BUTTON_TO_ORB_INTRO_QUEST
                }));
        }, [d]);
    return t
        ? {
              shouldShow: l,
              questId: h.V6,
              closeCoachmarkIfOpen: c,
              onClose: d,
              onCtaClick: f,
              onDiscoveryButtonClick: b
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
