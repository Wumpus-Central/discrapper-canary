(r.d(t, { I: () => N }), r(388685), r(539854));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    a = r.n(i),
    o = r(636977),
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
    O = r(775451),
    C = r(594174),
    v = r(471731),
    E = r(335131),
    S = r(870289),
    y = r(304742),
    x = r(554067),
    j = r(215023),
    T = r(981631),
    P = r(388032),
    L = r(774457);
function k(e) {
    let { tab: t, displayText: r, selected: l, handleTransition: i } = e;
    return (0, n.jsx)(h.Z.Title, {
        onClick: () => i(t),
        wrapperClassName: L.tabWrapper,
        className: a()(L.tab, { [L.selected]: l }),
        children: r
    });
}
function I(e) {
    let { tab: t, selected: r, displayText: i, handleTransition: o } = e,
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
        className: L.tabWithMenuContainer,
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
                return (0, n.jsx)(y.Z, {
                    handleTransition: o,
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
                            onClick: () => o(t),
                            onKeyDown: O,
                            wrapperClassName: L.tabWrapper,
                            className: a()(L.tab, { [L.selected]: r }),
                            children: (0, n.jsxs)('span', {
                                className: L.tabWithChevron,
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
function N(e) {
    let { isFullScreen: t, isLayer: r, onClose: i, selectedTab: f, handleTransition: g } = e,
        y = (0, p.ZP)(),
        N = (0, s.e7)([C.default], () => C.default.getCurrentUser()),
        A = (null == N ? void 0 : N.isStaff()) || (null == N ? void 0 : N.isStaffPersonal()) || !1,
        { enabled: B } = (0, _.WX)({ location: 'collectibles_shop_header_bar' }),
        w = [
            {
                tab: j.AW.HOME,
                displayText: P.intl.string(P.t.ijDDw8)
            },
            {
                tab: j.AW.CATALOG,
                displayText: P.intl.string(P.t.Ah5sJi)
            }
        ];
    B &&
        w.push({
            tab: j.AW.ORBS,
            displayText: P.intl.string(P.t.EBYkzs)
        });
    let R = r ? E.DR : i,
        Z = f === j.AW.ORBS ? T.ZY5.SHOP_ORBS_TAB : T.ZY5.COLLECTIBLES_SHOP,
        D = l.useCallback(() => {
            (t && (R(), (0, u.Ou)()),
                (0, m.Y)({
                    pageType: Z,
                    sectionType: T.jXE.ORBS_BALANCE_MENU,
                    ctaObject: T.qAy.CTA_TO_QUEST_HOME
                }),
                (0, b.navigateToQuestHome)({ fromContent: o.j.ORBS_BALANCE_MENU }));
        }, [R, t, Z]),
        F = (0, S.eN)('collectibles_shop_header_bar');
    return (0, n.jsx)(c.f6W, {
        theme: y,
        children: (e) =>
            (0, n.jsxs)(h.Z, {
                disableDoubleClick: !0,
                className: a()(e, L.headerBar, { [L.fullscreenHeaderBar]: t }),
                innerClassname: B ? L.headerBarInner : void 0,
                toolbar: t || !A ? null : (0, n.jsx)(l.Fragment, {}),
                children: [
                    (0, n.jsxs)(c.P3F, {
                        className: L.shopHomeLink,
                        onClick: () => g(j.AW.HOME),
                        'aria-label': P.intl.string(P.t.pWG4zc) + ' home',
                        children: [(0, n.jsx)(v.Z, { className: L.discordLogo }), (0, n.jsx)(h.Z.Title, { children: P.intl.string(P.t.pWG4zc) })]
                    }),
                    (0, n.jsx)('div', {
                        className: L.tabs,
                        children: w.map((e) => {
                            let { tab: t, displayText: r } = e;
                            return t === j.AW.CATALOG
                                ? (0, n.jsx)(
                                      I,
                                      {
                                          tab: t,
                                          selected: (0, j.RE)(f) || f === t,
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
                    (B || t || F) &&
                        (0, n.jsxs)('div', {
                            className: L.alignedRightContent,
                            children: [
                                F &&
                                    (0, n.jsx)(x.Z, {
                                        handleTransition: g,
                                        selectedTab: f
                                    }),
                                B &&
                                    (0, n.jsx)(O.V9, {
                                        anchorPillType: t ? 'SHOP_FULLSCREEN' : 'SHOP',
                                        analyticsPage: Z,
                                        cardAlignment: O.V9.CardAlignment.END,
                                        ctaText: P.intl.string(P.t.VC4Mq6),
                                        ctaOnClick: D,
                                        className: L.balanceWidgetMenu
                                    }),
                                t &&
                                    (0, n.jsx)(d.Z, {
                                        closeAction: R,
                                        keybind: 'ESC'
                                    })
                            ]
                        })
                ]
            })
    });
}
