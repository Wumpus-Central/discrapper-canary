(r.d(t, { I: () => N }), r(388685), r(539854));
var n = r(255367),
    l = r(73800),
    o = r(120356),
    i = r.n(o),
    a = r(636977),
    s = r(442837),
    c = r(481060),
    u = r(37234),
    d = r(425493),
    p = r(410030),
    f = r(857595),
    g = r(607070),
    h = r(984370),
    b = r(341907),
    m = r(507808),
    _ = r(822857),
    O = r(775451),
    C = r(594174),
    v = r(471731),
    E = r(335131),
    S = r(870289),
    y = r(534517),
    x = r(304742),
    j = r(554067),
    T = r(215023),
    P = r(981631),
    L = r(388032),
    I = r(774457);
function k(e) {
    let { tab: t, displayText: r, selected: l, handleTransition: o } = e;
    return (0, n.jsx)(h.Z.Title, {
        onClick: () => o(t),
        wrapperClassName: I.tabWrapper,
        className: i()(I.tab, { [I.selected]: l }),
        children: r
    });
}
function B(e) {
    let { tab: t, selected: r, displayText: o, handleTransition: a } = e,
        [s, u] = l.useState(!1),
        d = l.useRef(null),
        [p, b] = l.useState(0),
        m = l.useRef(!1),
        _ = (e) => {
            (clearTimeout(p),
                b(
                    setTimeout(() => {
                        u(e);
                    }, 100)
                ),
                e && (m.current = g.Z.keyboardModeEnabled));
        },
        O = (e) => {
            ('Enter' === e.key || ' ' === e.key) && (e.preventDefault(), _(!0));
        };
    return (0, n.jsx)('div', {
        className: I.tabWithMenuContainer,
        onMouseEnter: () => _(!0),
        onMouseLeave: () => _(!1),
        children: (0, n.jsx)(c.yRy, {
            targetElementRef: d,
            shouldShow: s,
            position: 'bottom',
            align: 'left',
            onRequestOpen: () => _(!0),
            onRequestClose: () => {
                var e;
                (m.current && !g.Z.keyboardModeEnabled && (0, f.Qj)(), _(!1), null == (e = d.current) || e.focus());
            },
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, n.jsx)(x.Z, {
                    handleTransition: a,
                    onClose: t
                });
            },
            children: (e, l) => {
                var s, u;
                let { isShown: p } = l;
                return (0, n.jsx)(
                    h.Z.Title,
                    ((s = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    })
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    ((n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = n));
                                }));
                        }
                        return e;
                    })({}, e)),
                    (u = u =
                        {
                            ref: d,
                            onClick: () => a(t),
                            onKeyDown: O,
                            wrapperClassName: I.tabWrapper,
                            className: i()(I.tab, { [I.selected]: r }),
                            children: (0, n.jsxs)('span', {
                                className: I.tabWithChevron,
                                children: [
                                    o,
                                    p
                                        ? (0, n.jsx)(c.u04, {
                                              size: 'sm',
                                              color: 'currentColor'
                                          })
                                        : (0, n.jsx)(c.CJ0, {
                                              size: 'sm',
                                              color: 'currentColor'
                                          })
                                ]
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(u))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(u)).forEach(function (e) {
                              Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(u, e));
                          }),
                    s)
                );
            }
        })
    });
}
function N(e) {
    let { isFullScreen: t, isLayer: r, onClose: o, selectedTab: f, handleTransition: g } = e,
        x = (0, p.ZP)(),
        N = (0, s.e7)([C.default], () => C.default.getCurrentUser()),
        A = (null == N ? void 0 : N.isStaff()) || (null == N ? void 0 : N.isStaffPersonal()) || !1,
        { enabled: w } = (0, _.WX)({ location: 'collectibles_shop_header_bar' }),
        R = (0, y.S)('collectibles_shop_header_bar'),
        Z = [
            {
                tab: T.AW.HOME,
                displayText: L.intl.string(L.t.ijDDw8)
            },
            {
                tab: T.AW.CATALOG,
                displayText: R ? L.intl.string(L.t.Ah5sJi) : L.intl.string(L.t.xFcotb)
            }
        ];
    w &&
        Z.push({
            tab: T.AW.ORBS,
            displayText: L.intl.string(L.t.EBYkzs)
        });
    let D = r ? E.DR : o,
        F = f === T.AW.ORBS ? P.ZY5.SHOP_ORBS_TAB : P.ZY5.COLLECTIBLES_SHOP,
        M = l.useCallback(() => {
            (t && (D(), (0, u.Ou)()),
                (0, m.Y)({
                    pageType: F,
                    sectionType: P.jXE.ORBS_BALANCE_MENU,
                    ctaObject: P.qAy.CTA_TO_QUEST_HOME
                }),
                (0, b.navigateToQuestHome)({ fromContent: a.j.ORBS_BALANCE_MENU }));
        }, [D, t, F]),
        H = (0, S.F)('collectibles_shop_header_bar');
    return (0, n.jsx)(c.f6W, {
        theme: x,
        children: (e) =>
            (0, n.jsxs)(h.Z, {
                disableDoubleClick: !0,
                className: i()(e, I.headerBar, { [I.fullscreenHeaderBar]: t }),
                innerClassname: w ? I.headerBarInner : void 0,
                toolbar: t || !A ? null : (0, n.jsx)(l.Fragment, {}),
                children: [
                    (0, n.jsxs)(c.P3F, {
                        className: I.shopHomeLink,
                        onClick: () => g(T.AW.HOME),
                        'aria-label': L.intl.string(L.t.pWG4zc) + ' home',
                        children: [(0, n.jsx)(v.Z, { className: I.discordLogo }), (0, n.jsx)(h.Z.Title, { children: L.intl.string(L.t.pWG4zc) })]
                    }),
                    (0, n.jsx)('div', {
                        className: I.tabs,
                        children: Z.map((e) => {
                            let { tab: t, displayText: r } = e;
                            return t === T.AW.CATALOG && R
                                ? (0, n.jsx)(
                                      B,
                                      {
                                          tab: t,
                                          selected: (0, T.RE)(f) || f === t,
                                          displayText: r,
                                          handleTransition: g
                                      },
                                      t
                                  )
                                : (0, n.jsx)(
                                      k,
                                      {
                                          tab: t,
                                          displayText: r,
                                          selected: f === t,
                                          handleTransition: g
                                      },
                                      t
                                  );
                        })
                    }),
                    (w || t || H) &&
                        (0, n.jsxs)('div', {
                            className: I.alignedRightContent,
                            children: [
                                H &&
                                    (0, n.jsx)(j.Z, {
                                        handleTransition: g,
                                        selectedTab: f
                                    }),
                                w &&
                                    (0, n.jsx)(O.V9, {
                                        anchorPillType: t ? 'SHOP_FULLSCREEN' : 'SHOP',
                                        analyticsPage: F,
                                        cardAlignment: O.V9.CardAlignment.END,
                                        ctaText: L.intl.string(L.t.VC4Mq6),
                                        ctaOnClick: M,
                                        className: I.balanceWidgetMenu
                                    }),
                                t &&
                                    (0, n.jsx)(d.Z, {
                                        closeAction: D,
                                        keybind: 'ESC'
                                    })
                            ]
                        })
                ]
            })
    });
}
