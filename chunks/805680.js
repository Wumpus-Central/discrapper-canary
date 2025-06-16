n.d(t, { Z: () => en }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(873546),
    u = n(374470),
    d = n(232418),
    f = n(442837),
    _ = n(704215),
    p = n(952265),
    h = n(680018),
    m = n(481060),
    g = n(153867),
    E = n(410575),
    b = n(347469),
    y = n(40851),
    O = n(367907),
    v = n(243778),
    I = n(907040),
    T = n(556019),
    S = n(748523),
    A = n(455708),
    N = n(314910),
    C = n(125900),
    R = n(603074),
    P = n(453070),
    w = n(926491),
    D = n(457040),
    L = n(740492),
    x = n(574254),
    k = n(585483),
    M = n(5967),
    j = n(28546),
    U = n(957825),
    G = n(981631),
    B = n(921944),
    V = n(149203),
    F = n(185923),
    Z = n(611480),
    H = n(388032),
    Y = n(460594);
function W(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function K(e) {
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
                W(e, t, n[t]);
            });
    }
    return e;
}
function z(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function X(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = Q(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function Q(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let J = U.Om + V.Su.MEDIUM,
    $ = i.memo(function (e) {
        var { isActive: t, className: n, viewType: i, autoFocus: a = !1, 'aria-controls': s } = e,
            l = X(e, ['isActive', 'className', 'viewType', 'autoFocus', 'aria-controls']);
        return (0, r.jsx)(
            m.zxk,
            q(
                K(
                    {
                        role: 'tab',
                        autoFocus: a,
                        'aria-controls': t ? s : void 0
                    },
                    l
                ),
                {
                    onClick: () => {
                        O.ZP.trackWithMetadata(G.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
                            tab: i,
                            badged: !1
                        }),
                            (0, j.hr)(i);
                    },
                    'aria-current': t ? 'page' : void 0,
                    className: o()(n, Y.navButton, Y.navItem, { [Y.navButtonActive]: t }),
                    look: m.zxk.Looks.BLANK,
                    size: m.zxk.Sizes.NONE
                }
            )
        );
    }),
    ee = (e) => {
        let { positionContainerRef: t, drawerRef: n, orientation: r } = e,
            a = (0, f.e7)([L.ZP], () => L.ZP.expressionPickerWidth),
            [o, s] = i.useState(window.innerWidth),
            [c, u] = i.useState(null != a ? a : U._j.MIN),
            d = i.useMemo(() => {
                switch (c) {
                    case U._j.MIN:
                        return U.Om;
                    case U._j.MAX:
                        return null;
                    default:
                        return c;
                }
            }, [c]),
            _ = i.useCallback(
                (e) => {
                    let t = e >= o ? U._j.MAX : e <= U.Om ? U._j.MIN : e;
                    null == t && null != n.current && (n.current.style.width = ''), g.ZP.updatedUnsyncedSettings({ expressionPickerWidth: t }), u(t);
                },
                [n, o]
            ),
            p = (0, b.Z)({
                initialElementDimension: d,
                maxDimension: o,
                minDimension: U.Om,
                resizableDomNodeRef: n,
                onElementResize: _,
                orientation: r
            });
        return (
            i.useEffect(() => {
                let e = l().debounce(() => {
                    null != t.current && s(t.current.offsetWidth);
                }, 500);
                return (
                    window.addEventListener('resize', e),
                    () => {
                        window.removeEventListener('resize', e);
                    }
                );
            }, [t]),
            i.useLayoutEffect(() => {
                null != t.current && s(t.current.offsetWidth);
            }, [t]),
            {
                drawerWidth: d,
                handleDrawerResizeHandleMouseDown: i.useCallback(
                    (e) => {
                        e.stopPropagation(), null != t.current && s(t.current.offsetWidth), p(e);
                    },
                    [t, p]
                )
            }
        );
    };
function et(e) {
    var t, n, a, s;
    let { positionTargetRef: l, hideGifFavorites: g, includeCreateEmojiButton: L, onSelectGIF: W, onSelectEmoji: K, onSelectSticker: z, onSelectSound: q, channel: X, type: Q, position: et, align: en, positionLayerClassName: er, closeOnModalOuterClick: ei = !1, parentModalKey: ea } = e,
        eo = i.useRef(null),
        es = i.useRef(!1),
        el = i.useRef(null),
        ec = i.useRef(null),
        { drawerWidth: eu, handleDrawerResizeHandleMouseDown: ed } = ee({
            positionContainerRef: eo,
            drawerRef: ec,
            orientation: 'left' === en ? b.y.HORIZONTAL_RIGHT : b.y.HORIZONTAL_LEFT
        }),
        ef = (0, j.Iu)((e) => e.activeView),
        e_ = (0, P.fQ)(X),
        { renderWindow: ep, windowDispatch: eh } = i.useContext(y.ZP),
        em = (0, f.e7)([w.Z], () => !w.Z.hasLoadedStickerPacks),
        eg = (0, C.V2)({ location: 'expression_picker' }),
        eE = (0, f.e7)([x.Z], () => x.Z.isOpen()),
        eb = null != ea,
        ey = (0, p.Jw)(null != ea ? ea : ''),
        eO = (0, T.h)({
            location: 'expression_picker',
            autoTrackExposure: !1
        }),
        ev = i.useCallback(
            (e) => {
                var t;
                if ((!eb && (0, p.$s)()) || (eb && !(ey && ei)) || eE || e.defaultPrevented) return;
                let { target: n } = e;
                if ((0, u.k)(n) && null != n.closest('.' + U.CT)) return;
                for (; (0, u.k)(n); ) {
                    if (n === ec.current || 'true' === n.getAttribute('data-menu-item') || 'true' === n.getAttribute('data-premium-tutorial-expression-picker-tooltip') || 'true' === n.getAttribute('data-premium-tutorial-persistent-coachmark-emoji-step')) return;
                    n = n.parentNode;
                }
                (0, j._Q)();
                let r = null == (t = (0, M.uB)(e)) ? void 0 : t.activeElement;
                (null == r || 'BODY' === r.tagName) && k.S.dispatchToLastSubscribed(G.CkL.TEXTAREA_FOCUS);
            },
            [ei, ey, eb, eE]
        ),
        eI = i.useCallback(() => {
            (0, j._Q)();
        }, []);
    i.useLayoutEffect(() => {
        let e = () => {
            ef === U.X1.GIF && (0, j._Q)();
        };
        return (
            ep.addEventListener('mousedown', ev),
            ep.addEventListener('contextmenu', ev),
            eh.subscribe(G.CkL.POPOUT_CLOSE, eI),
            k.S.subscribe(G.CkL.CLOSE_GIF_PICKER, e),
            () => {
                ep.removeEventListener('mousedown', ev), ep.removeEventListener('contextmenu', ev), eh.unsubscribe(G.CkL.POPOUT_CLOSE, eI), k.S.unsubscribe(G.CkL.CLOSE_GIF_PICKER, e);
            }
        );
    }, [ef, eI, ev, ep, eh]),
        (0, m.Tbt)(eo);
    let [eT, eS] = (0, v.US)(eg ? [_.z.SOUNDMOJI_BADGE] : [], void 0, !1),
        [eA, eN] = i.useState(!1);
    i.useEffect(() => {
        ef === U.X1.SOUNDBOARD && eN(!0);
    }, [ef]),
        i.useEffect(
            () => () => {
                eA && eS(B.L.TAKE_ACTION);
            },
            [eA, eS]
        ),
        i.useEffect(() => {
            (0, j.ql)('');
        }, []),
        i.useEffect(() => {
            ((!eb && (0, p.$s)()) || (eb && !ey)) && (0, j._Q)();
        }, [ey, eb]),
        i.useEffect(() => {
            if (null != ec.current && !es.current) {
                var e, t, n, r;
                ef === U.X1.EMOJI
                    ? (null == el || null == (e = el.current) ? void 0 : e.onPickerOpen) != null && (null == el || null == (t = el.current) || t.onPickerOpen(), (es.current = !0))
                    : ef === U.X1.STICKER
                      ? (null == el || null == (n = el.current) ? void 0 : n.onPickerOpen) == null || em || (null == el || null == (r = el.current) || r.onPickerOpen(), (es.current = !0))
                      : (O.ZP.trackWithMetadata(G.rMx.EXPRESSION_PICKER_OPENED, {
                            width: ec.current.offsetWidth,
                            tab: ef,
                            badged: !1
                        }),
                        (es.current = !0));
            }
        });
    let eC = (null == (t = Q.gifs) ? void 0 : t.allowSending) && !c.tq && null != W,
        eR = (null == (n = Q.stickers) ? void 0 : n.allowSending) && null != z,
        eP = i.useCallback((e, t) => (null == q ? void 0 : q(e, 'emoji_picker', t)), [q]),
        ew = i.useCallback((e, t) => (null == q ? void 0 : q(e, 'soundboard_picker', t)), [q]),
        eD = (null == (a = Q.soundmoji) ? void 0 : a.allowSending) === !0 && null != q,
        eL = !(null == (s = Q.expressionPicker) ? void 0 : s.onlyEmojis) && (eC || eR),
        ex = 'left' === en ? 'right' : 'left',
        ek = null != er ? er : 'left' === en ? Y.positionLayerDefaultAlignLeft : Y.positionLayerDefaultAlignRight;
    return (0, r.jsx)(E.Z, {
        section: G.jXE.EXPRESSION_PICKER,
        children: (0, r.jsx)(N.W5, {
            className: o()(Y.positionLayer, ek),
            targetRef: l,
            position: et,
            align: en,
            spacing: 8,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                var t;
                let { isPositioned: n } = e;
                return (0, r.jsx)('section', {
                    className: o()(Y.positionContainer, { [Y.positionContainerOnlyEmoji]: !eL }),
                    ref: eo,
                    role: 'dialog',
                    'aria-label': H.intl.string(H.t.Utlwvr),
                    children: n
                        ? (0, r.jsxs)('div', {
                              className: Y.drawerSizingWrapper,
                              style: {
                                  width: null == eu ? void 0 : eu,
                                  [en]: 0
                              },
                              ref: ec,
                              children: [
                                  (0, r.jsx)('div', {
                                      className: Y.resizeHandle,
                                      onMouseDown: ed,
                                      style: { [ex]: -2 }
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: o()(Y.contentWrapper, { [Y.emojiStudioActive]: eO }),
                                      children: [
                                          eL
                                              ? (0, r.jsx)('nav', {
                                                    className: Y.nav,
                                                    children: (0, r.jsxs)('div', {
                                                        className: Y.navList,
                                                        role: 'tablist',
                                                        'aria-label': H.intl.string(H.t['2j4VgY']),
                                                        children: [
                                                            eC
                                                                ? (0, r.jsx)($, {
                                                                      id: V._3,
                                                                      'aria-controls': V.vO,
                                                                      'aria-selected': ef === U.X1.GIF,
                                                                      isActive: ef === U.X1.GIF,
                                                                      viewType: U.X1.GIF,
                                                                      children: H.intl.string(H.t['6gUTsb'])
                                                                  })
                                                                : null,
                                                            eR
                                                                ? (0, r.jsx)($, {
                                                                      id: Z.ED,
                                                                      'aria-controls': Z.nZ,
                                                                      'aria-selected': ef === U.X1.STICKER,
                                                                      isActive: ef === U.X1.STICKER,
                                                                      autoFocus: !e_,
                                                                      viewType: U.X1.STICKER,
                                                                      children: (0, r.jsx)('div', {
                                                                          className: Y.stickersNavItem,
                                                                          children: H.intl.string(H.t.nf1s3t)
                                                                      })
                                                                  })
                                                                : null,
                                                            (0, r.jsx)($, {
                                                                id: V.td,
                                                                'aria-controls': V.cZ,
                                                                'aria-selected': ef === U.X1.EMOJI,
                                                                isActive: ef === U.X1.EMOJI,
                                                                viewType: U.X1.EMOJI,
                                                                children: H.intl.string(H.t.Xu3wEx)
                                                            }),
                                                            eg &&
                                                                eD &&
                                                                (0, r.jsx)($, {
                                                                    id: V.Hr,
                                                                    'aria-controls': V.gV,
                                                                    'aria-selected': ef === U.X1.SOUNDBOARD,
                                                                    isActive: ef === U.X1.SOUNDBOARD,
                                                                    viewType: U.X1.SOUNDBOARD,
                                                                    children: (0, r.jsxs)('div', {
                                                                        className: Y.soundmojiLabelContainer,
                                                                        children: [H.intl.string(H.t.EHlAMT), null != eT && (0, r.jsx)(m.IGR, { text: H.intl.string(H.t.y2b7CA) })]
                                                                    })
                                                                }),
                                                            eO &&
                                                                ef === U.X1.EMOJI &&
                                                                (0, r.jsx)('div', {
                                                                    className: Y.addEmojiButton,
                                                                    children: (0, r.jsx)(h.z, {
                                                                        variant: 'secondary',
                                                                        size: 'sm',
                                                                        onClick: () => (0, S.i)(),
                                                                        icon: d.S,
                                                                        text: H.intl.string(H.t.iMJO39)
                                                                    })
                                                                })
                                                        ]
                                                    })
                                                })
                                              : null,
                                          ef === U.X1.STICKER && eR
                                              ? (0, r.jsx)(D.Z, {
                                                    isLoading: em,
                                                    channel: X,
                                                    containerWidth: eu,
                                                    onSelectSticker: z,
                                                    closePopout: eI,
                                                    ref: (e) => {
                                                        el.current = e;
                                                    }
                                                })
                                              : null,
                                          ef === U.X1.GIF && eC
                                              ? (0, r.jsx)(A.Z, {
                                                    onSelectGIF: W,
                                                    hideFavorites: g,
                                                    persistSearch: !0
                                                })
                                              : null,
                                          ef === U.X1.EMOJI
                                              ? (0, r.jsx)(I.Z, {
                                                    hasTabWrapper: !0,
                                                    containerContext: eL ? I.v.TABS_EXPRESSION_PICKER : I.v.NO_TABS_EXPRESSION_PICKER,
                                                    persistSearch: !0,
                                                    channel: X,
                                                    containerWidth: eu,
                                                    includeCreateEmojiButton: L,
                                                    emojiSize: null != eu && eu < J ? V.Su.MEDIUM : V.Su.LARGE,
                                                    pickerIntention: F.Hz.CHAT,
                                                    closePopout: eI,
                                                    onSelectEmoji: K,
                                                    onSelectSoundmoji: eP,
                                                    ref: (e) => {
                                                        el.current = e;
                                                    },
                                                    shouldShowSoundmojiInEmojiPicker: (null == (t = Q.soundmoji) ? void 0 : t.allowSending) === !0
                                                })
                                              : null,
                                          ef === U.X1.SOUNDBOARD
                                              ? (0, r.jsx)('div', {
                                                    className: Y.soundboardContainer,
                                                    children: (0, r.jsx)(R.Z, {
                                                        guildId: X.guild_id,
                                                        channel: X,
                                                        containerWidth: eu,
                                                        onClose: eI,
                                                        onSelect: ew,
                                                        analyticsSource: 'expression-picker',
                                                        renderHeader: (e) =>
                                                            (0, r.jsx)('div', {
                                                                className: Y.soundboardHeader,
                                                                children: e
                                                            }),
                                                        inExpressionPicker: !0,
                                                        shouldValidateSelectedSound: !0
                                                    })
                                                })
                                              : null
                                      ]
                                  })
                              ]
                          })
                        : null
                });
            }
        })
    });
}
let en = i.memo(et);
