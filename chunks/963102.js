(r.d(t, { I: () => A }), r(388685), r(539854));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    o = r.n(i),
    a = r(636977),
    s = r(442837),
    c = r(481060),
    u = r(37234),
    d = r(425493),
    p = r(410030),
    f = r(857595),
    g = r(607070),
    h = r(984370),
    b = r(110560),
    m = r(507808),
    _ = r(822857),
    C = r(775451),
    O = r(594174),
    v = r(471731),
    E = r(335131),
    S = r(870289),
    y = r(534517),
    x = r(304742),
    j = r(554067),
    T = r(215023),
    P = r(981631),
    L = r(388032),
    k = r(774457);
function I(e) {
    let { tab: t, displayText: r, selected: l, handleTransition: i } = e;
    return (0, n.jsx)(h.Z.Title, {
        onClick: () => i(t),
        wrapperClassName: k.tabWrapper,
        className: o()(k.tab, { [k.selected]: l }),
        children: r
    });
}
function N(e) {
    let { tab: t, selected: r, displayText: i, handleTransition: a } = e,
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
        C = (e) => {
            ('Enter' === e.key || ' ' === e.key) && (e.preventDefault(), _(!0));
        };
    return (0, n.jsx)('div', {
        className: k.tabWithMenuContainer,
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
                            onKeyDown: C,
                            wrapperClassName: k.tabWrapper,
                            className: o()(k.tab, { [k.selected]: r }),
                            children: (0, n.jsxs)('span', {
                                className: k.tabWithChevron,
                                children: [
                                    i,
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
function A(e) {
    let { isFullScreen: t, isLayer: r, onClose: i, selectedTab: f, handleTransition: g } = e,
        x = (0, p.ZP)(),
        A = (0, s.e7)([O.default], () => O.default.getCurrentUser()),
        w = (null == A ? void 0 : A.isStaff()) || (null == A ? void 0 : A.isStaffPersonal()) || !1,
        { enabled: B } = (0, _.WX)({ location: 'collectibles_shop_header_bar' }),
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
    B &&
        Z.push({
            tab: T.AW.ORBS,
            displayText: L.intl.string(L.t.EBYkzs)
        });
    let D = r ? E.DR : i,
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
        H = (0, S.eN)('collectibles_shop_header_bar');
    return (0, n.jsx)(c.f6W, {
        theme: x,
        children: (e) =>
            (0, n.jsxs)(h.Z, {
                disableDoubleClick: !0,
                className: o()(e, k.headerBar, { [k.fullscreenHeaderBar]: t }),
                innerClassname: B ? k.headerBarInner : void 0,
                toolbar: t || !w ? null : (0, n.jsx)(l.Fragment, {}),
                children: [
                    (0, n.jsxs)(c.P3F, {
                        className: k.shopHomeLink,
                        onClick: () => g(T.AW.HOME),
                        'aria-label': L.intl.string(L.t.pWG4zc) + ' home',
                        children: [(0, n.jsx)(v.Z, { className: k.discordLogo }), (0, n.jsx)(h.Z.Title, { children: L.intl.string(L.t.pWG4zc) })]
                    }),
                    (0, n.jsx)('div', {
                        className: k.tabs,
                        children: Z.map((e) => {
                            let { tab: t, displayText: r } = e;
                            return t === T.AW.CATALOG && R
                                ? (0, n.jsx)(
                                      N,
                                      {
                                          tab: t,
                                          selected: (0, T.RE)(f) || f === t,
                                          displayText: r,
                                          handleTransition: g
                                      },
                                      t
                                  )
                                : (0, n.jsx)(
                                      I,
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
                    (B || t || H) &&
                        (0, n.jsxs)('div', {
                            className: k.alignedRightContent,
                            children: [
                                H &&
                                    (0, n.jsx)(j.Z, {
                                        handleTransition: g,
                                        selectedTab: f
                                    }),
                                B &&
                                    (0, n.jsx)(C.V9, {
                                        anchorPillType: t ? 'SHOP_FULLSCREEN' : 'SHOP',
                                        analyticsPage: F,
                                        cardAlignment: C.V9.CardAlignment.END,
                                        ctaText: L.intl.string(L.t.VC4Mq6),
                                        ctaOnClick: M,
                                        className: k.balanceWidgetMenu
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
