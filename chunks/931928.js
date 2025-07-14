n.d(t, {
    ED: () => E,
    MP: () => T,
    qp: () => S
});
var i = n(255367),
    r = n(73800),
    s = n(114858),
    a = n(442837),
    l = n(704215),
    o = n(266454),
    c = n(703656),
    d = n(664915),
    u = n(507808),
    m = n(543936),
    p = n(432792),
    g = n(981631),
    h = n(921944),
    f = n(46140),
    b = n(388032);
function x(e) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e, t) {
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
}
let E = (e) =>
        (0, i.jsx)(
            p.M4,
            x(
                {
                    titleText: b.intl.string(b.t.KnWRQU),
                    descriptionText: b.intl.format(b.t['xYx+WV'], { quantity: 200 }),
                    ctaText: b.intl.string(b.t.v4HbPz)
                },
                e
            )
        ),
    O = [g.Z5c.ME, g.Z5c.COLLECTIBLES_SHOP, g.Z5c.NITRO_HOME],
    C = {
        position: 'right',
        align: 'bottom'
    },
    v = (e) => {
        var { onClose: t, onCtaClick: n, targetElementRef: l, isGuildBarScrolling: o, children: u } = e,
            m = j(e, ['onClose', 'onCtaClick', 'targetElementRef', 'isGuildBarScrolling', 'children']);
        let h = r.useRef(null),
            f = r.useCallback((e) => {
                let t = window.innerHeight - ((0, p.t4)() + v.COACHMARK_VERTICAL_OFFSET);
                return e.top <= t;
            }, []),
            b = (0, a.e7)([d.Z], () => d.Z.getExpandedFolders().size);
        (r.useEffect(() => {
            null !== h.current && h.current.updateElementPositionWithPolling();
        }, [b]),
            r.useEffect(() => {
                null !== h.current && h.current.updateElementPosition();
            }, [o]));
        let S = (0, s.TH)().pathname,
            T = r.useCallback(() => {
                (O.includes(S) || (0, c.uL)(g.Z5c.ME), n());
            }, [S, n]);
        return (0, i.jsx)(
            p.WS,
            _(
                x(
                    {
                        positionControlRef: h,
                        targetElementRef: l,
                        calculateVisibility: f,
                        defaultCoachmarkAlign: C.align,
                        popoutElement: (0, i.jsx)(
                            E,
                            x(
                                {
                                    onClose: t,
                                    onCtaClick: T
                                },
                                m,
                                C
                            )
                        ),
                        spacing: 8
                    },
                    C
                ),
                { children: u }
            )
        );
    };
v.COACHMARK_VERTICAL_OFFSET = 10;
let S = (e) => {
        let { isVirtualCurrencyEnabled: t, discoveryButtonRef: n, scrollToBottom: i } = e,
            s = r.useCallback(() => {
                if (null !== n.current) {
                    let e = (0, p.t4)();
                    n.current.getBoundingClientRect().bottom > window.innerHeight - e && i();
                }
            }, [n, i]),
            { shouldShow: a, closeCoachmarkIfOpen: c } = (0, p.M)({
                onboardingCoachmarkType: 'discover',
                onShowCoachmarkHandler: s
            }),
            d = r.useCallback(
                function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'CLOSE';
                    ((0, o.Q3)(l.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, {
                        dismissAction: h.L.INDIRECT_ACTION,
                        groupName: h.R.VIRTUAL_CURRENCY_ONBOARDING
                    }),
                        c(e));
                },
                [c]
            ),
            m = r.useCallback(() => c('CTA_CLICK'), [c]),
            b = r.useCallback(() => {
                (d('CTA_CLICK'),
                    (0, u.Y)({
                        pageType: g.ZY5.GUILD_LIST,
                        sectionType: g.jXE.ORBS_DISCOVERY_ONBOARDING_COACHMARK,
                        ctaObject: g.qAy.DISCOVERY_BUTTON_TO_ORB_INTRO_QUEST
                    }));
            }, [d]);
        return t
            ? {
                  shouldShow: a,
                  questId: f.V6,
                  closeCoachmarkIfOpen: c,
                  onClose: d,
                  onCtaClick: m,
                  onDiscoveryButtonClick: b
              }
            : {
                  shouldShow: !1,
                  questId: void 0,
                  closeCoachmarkIfOpen: g.dG4,
                  onClose: g.dG4,
                  onCtaClick: g.dG4,
                  onDiscoveryButtonClick: g.dG4
              };
    },
    T = (e) => {
        var { children: t } = e,
            n = j(e, ['children']);
        return (0, i.jsx)(m.x, {
            errorSource: 'ORBS_DISCOVERY_ONBOARDING_COACHMARK',
            renderCustomErrorComponent: () => t,
            children: (0, i.jsx)(v, _(x({}, n), { children: t }))
        });
    };
