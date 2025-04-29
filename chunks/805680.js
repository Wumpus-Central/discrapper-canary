n.d(t, { Z: () => J }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(873546),
    u = n(374470),
    d = n(442837),
    f = n(704215),
    _ = n(952265),
    p = n(481060),
    h = n(153867),
    m = n(410575),
    g = n(347469),
    E = n(40851),
    b = n(367907),
    y = n(243778),
    O = n(907040),
    v = n(455708),
    I = n(314910),
    S = n(125900),
    T = n(603074),
    A = n(453070),
    N = n(926491),
    C = n(457040),
    R = n(740492),
    P = n(574254),
    w = n(585483),
    D = n(5967),
    L = n(28546),
    x = n(957825),
    M = n(981631),
    k = n(921944),
    j = n(149203),
    U = n(185923),
    G = n(611480),
    B = n(388032),
    V = n(460594);
function F(e, t, n) {
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
function Z(e) {
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
                F(e, t, n[t]);
            });
    }
    return e;
}
function H(e, t) {
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
function Y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : H(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function W(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = K(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function K(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let z = x.Om + j.Su.MEDIUM,
    q = i.memo(function (e) {
        var { isActive: t, className: n, viewType: i, autoFocus: o = !1, 'aria-controls': s } = e,
            l = W(e, ['isActive', 'className', 'viewType', 'autoFocus', 'aria-controls']);
        return (0, r.jsx)(
            p.zxk,
            Y(
                Z(
                    {
                        role: 'tab',
                        autoFocus: o,
                        'aria-controls': t ? s : void 0
                    },
                    l
                ),
                {
                    onClick: () => {
                        b.ZP.trackWithMetadata(M.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
                            tab: i,
                            badged: !1
                        }),
                            (0, L.hr)(i);
                    },
                    'aria-current': t ? 'page' : void 0,
                    className: a()(n, V.navButton, V.navItem, { [V.navButtonActive]: t }),
                    look: p.zxk.Looks.BLANK,
                    size: p.zxk.Sizes.NONE
                }
            )
        );
    }),
    Q = (e) => {
        let { positionContainerRef: t, drawerRef: n, orientation: r } = e,
            o = (0, d.e7)([R.ZP], () => R.ZP.expressionPickerWidth),
            [a, s] = i.useState(window.innerWidth),
            [c, u] = i.useState(null != o ? o : x._j.MIN),
            f = i.useMemo(() => {
                switch (c) {
                    case x._j.MIN:
                        return x.Om;
                    case x._j.MAX:
                        return null;
                    default:
                        return c;
                }
            }, [c]),
            _ = i.useCallback(
                (e) => {
                    let t = e >= a ? x._j.MAX : e <= x.Om ? x._j.MIN : e;
                    null == t && null != n.current && (n.current.style.width = ''), h.ZP.updatedUnsyncedSettings({ expressionPickerWidth: t }), u(t);
                },
                [n, a]
            ),
            p = (0, g.Z)({
                initialElementDimension: f,
                maxDimension: a,
                minDimension: x.Om,
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
                drawerWidth: f,
                handleDrawerResizeHandleMouseDown: i.useCallback(
                    (e) => {
                        e.stopPropagation(), null != t.current && s(t.current.offsetWidth), p(e);
                    },
                    [t, p]
                )
            }
        );
    };
function X(e) {
    var t, n, o, s;
    let { positionTargetRef: l, hideGifFavorites: h, includeCreateEmojiButton: R, onSelectGIF: F, onSelectEmoji: Z, onSelectSticker: H, onSelectSound: Y, channel: W, type: K, position: X, align: J, positionLayerClassName: $, closeOnModalOuterClick: ee = !1, parentModalKey: et } = e,
        en = i.useRef(null),
        er = i.useRef(!1),
        ei = i.useRef(null),
        eo = i.useRef(null),
        { drawerWidth: ea, handleDrawerResizeHandleMouseDown: es } = Q({
            positionContainerRef: en,
            drawerRef: eo,
            orientation: 'left' === J ? g.y.HORIZONTAL_RIGHT : g.y.HORIZONTAL_LEFT
        }),
        el = (0, L.Iu)((e) => e.activeView),
        ec = (0, A.fQ)(W),
        { renderWindow: eu, windowDispatch: ed } = i.useContext(E.ZP),
        ef = (0, d.e7)([N.Z], () => !N.Z.hasLoadedStickerPacks),
        e_ = (0, S.V2)({ location: 'expression_picker' }),
        ep = (0, d.e7)([P.Z], () => P.Z.isOpen()),
        eh = null != et,
        em = (0, _.Jw)(null != et ? et : ''),
        eg = i.useCallback(
            (e) => {
                var t;
                if ((!eh && (0, _.$s)()) || (eh && !(em && ee)) || ep) return;
                let { target: n } = e;
                if ((0, u.k)(n) && null != n.closest('.' + x.CT)) return;
                for (; (0, u.k)(n); ) {
                    if (n === eo.current || 'true' === n.getAttribute('data-menu-item') || 'true' === n.getAttribute('data-premium-tutorial-expression-picker-tooltip') || 'true' === n.getAttribute('data-premium-tutorial-persistent-coachmark-emoji-step')) return;
                    n = n.parentNode;
                }
                (0, L._Q)();
                let r = null == (t = (0, D.uB)(e)) ? void 0 : t.activeElement;
                (null == r || 'BODY' === r.tagName) && w.S.dispatchToLastSubscribed(M.CkL.TEXTAREA_FOCUS);
            },
            [ee, em, eh, ep]
        ),
        eE = i.useCallback(() => {
            (0, L._Q)();
        }, []);
    i.useLayoutEffect(() => {
        let e = () => {
            el === x.X1.GIF && (0, L._Q)();
        };
        return (
            eu.addEventListener('mousedown', eg),
            eu.addEventListener('contextmenu', eg),
            ed.subscribe(M.CkL.POPOUT_CLOSE, eE),
            w.S.subscribe(M.CkL.CLOSE_GIF_PICKER, e),
            () => {
                eu.removeEventListener('mousedown', eg), eu.removeEventListener('contextmenu', eg), ed.unsubscribe(M.CkL.POPOUT_CLOSE, eE), w.S.unsubscribe(M.CkL.CLOSE_GIF_PICKER, e);
            }
        );
    }, [el, eE, eg, eu, ed]),
        (0, p.Tbt)(en);
    let [eb, ey] = (0, y.US)(e_ ? [f.z.SOUNDMOJI_BADGE] : [], void 0, !1),
        [eO, ev] = i.useState(!1);
    i.useEffect(() => {
        el === x.X1.SOUNDBOARD && ev(!0);
    }, [el]),
        i.useEffect(
            () => () => {
                eO && ey(k.L.TAKE_ACTION);
            },
            [eO, ey]
        ),
        i.useEffect(() => {
            (0, L.ql)('');
        }, []),
        i.useEffect(() => {
            ((!eh && (0, _.$s)()) || (eh && !em)) && (0, L._Q)();
        }, [em, eh]),
        i.useEffect(() => {
            if (null != eo.current && !er.current) {
                var e, t, n, r;
                el === x.X1.EMOJI
                    ? (null == ei || null == (e = ei.current) ? void 0 : e.onPickerOpen) != null && (null == ei || null == (t = ei.current) || t.onPickerOpen(), (er.current = !0))
                    : el === x.X1.STICKER
                      ? (null == ei || null == (n = ei.current) ? void 0 : n.onPickerOpen) == null || ef || (null == ei || null == (r = ei.current) || r.onPickerOpen(), (er.current = !0))
                      : (b.ZP.trackWithMetadata(M.rMx.EXPRESSION_PICKER_OPENED, {
                            width: eo.current.offsetWidth,
                            tab: el,
                            badged: !1
                        }),
                        (er.current = !0));
            }
        });
    let eI = (null == (t = K.gifs) ? void 0 : t.allowSending) && !c.tq && null != F,
        eS = (null == (n = K.stickers) ? void 0 : n.allowSending) && null != H,
        eT = i.useCallback((e, t) => (null == Y ? void 0 : Y(e, 'emoji_picker', t)), [Y]),
        eA = i.useCallback((e, t) => (null == Y ? void 0 : Y(e, 'soundboard_picker', t)), [Y]),
        eN = (null == (o = K.soundmoji) ? void 0 : o.allowSending) === !0 && null != Y,
        eC = !(null == (s = K.expressionPicker) ? void 0 : s.onlyEmojis) && (eI || eS),
        eR = 'left' === J ? 'right' : 'left',
        eP = null != $ ? $ : 'left' === J ? V.positionLayerDefaultAlignLeft : V.positionLayerDefaultAlignRight;
    return (0, r.jsx)(m.Z, {
        section: M.jXE.EXPRESSION_PICKER,
        children: (0, r.jsx)(I.W5, {
            className: a()(V.positionLayer, eP),
            targetRef: l,
            position: X,
            align: J,
            spacing: 8,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                var t;
                let { isPositioned: n } = e;
                return (0, r.jsx)('section', {
                    className: a()(V.positionContainer, { [V.positionContainerOnlyEmoji]: !eC }),
                    ref: en,
                    role: 'dialog',
                    'aria-label': B.intl.string(B.t.Utlwvr),
                    children: n
                        ? (0, r.jsxs)('div', {
                              className: V.drawerSizingWrapper,
                              style: {
                                  width: null == ea ? void 0 : ea,
                                  [J]: 0
                              },
                              ref: eo,
                              children: [
                                  (0, r.jsx)('div', {
                                      className: V.resizeHandle,
                                      onMouseDown: es,
                                      style: { [eR]: -2 }
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: V.contentWrapper,
                                      children: [
                                          eC
                                              ? (0, r.jsx)('nav', {
                                                    className: V.nav,
                                                    children: (0, r.jsxs)('div', {
                                                        className: V.navList,
                                                        role: 'tablist',
                                                        'aria-label': B.intl.string(B.t['2j4VgY']),
                                                        children: [
                                                            eI
                                                                ? (0, r.jsx)(q, {
                                                                      id: j._3,
                                                                      'aria-controls': j.vO,
                                                                      'aria-selected': el === x.X1.GIF,
                                                                      isActive: el === x.X1.GIF,
                                                                      viewType: x.X1.GIF,
                                                                      children: B.intl.string(B.t['6gUTsb'])
                                                                  })
                                                                : null,
                                                            eS
                                                                ? (0, r.jsx)(q, {
                                                                      id: G.ED,
                                                                      'aria-controls': G.nZ,
                                                                      'aria-selected': el === x.X1.STICKER,
                                                                      isActive: el === x.X1.STICKER,
                                                                      autoFocus: !ec,
                                                                      viewType: x.X1.STICKER,
                                                                      children: (0, r.jsx)('div', {
                                                                          className: V.stickersNavItem,
                                                                          children: B.intl.string(B.t.nf1s3t)
                                                                      })
                                                                  })
                                                                : null,
                                                            (0, r.jsx)(q, {
                                                                id: j.td,
                                                                'aria-controls': j.cZ,
                                                                'aria-selected': el === x.X1.EMOJI,
                                                                isActive: el === x.X1.EMOJI,
                                                                viewType: x.X1.EMOJI,
                                                                children: B.intl.string(B.t.Xu3wEx)
                                                            }),
                                                            e_ &&
                                                                eN &&
                                                                (0, r.jsx)(q, {
                                                                    id: j.Hr,
                                                                    'aria-controls': j.gV,
                                                                    'aria-selected': el === x.X1.SOUNDBOARD,
                                                                    isActive: el === x.X1.SOUNDBOARD,
                                                                    viewType: x.X1.SOUNDBOARD,
                                                                    children: (0, r.jsxs)('div', {
                                                                        className: V.soundmojiLabelContainer,
                                                                        children: [B.intl.string(B.t.EHlAMT), null != eb && (0, r.jsx)(p.IGR, { text: B.intl.string(B.t.y2b7CA) })]
                                                                    })
                                                                })
                                                        ]
                                                    })
                                                })
                                              : null,
                                          el === x.X1.STICKER && eS
                                              ? (0, r.jsx)(C.Z, {
                                                    isLoading: ef,
                                                    channel: W,
                                                    containerWidth: ea,
                                                    onSelectSticker: H,
                                                    closePopout: eE,
                                                    ref: (e) => {
                                                        ei.current = e;
                                                    }
                                                })
                                              : null,
                                          el === x.X1.GIF && eI
                                              ? (0, r.jsx)(v.Z, {
                                                    onSelectGIF: F,
                                                    hideFavorites: h,
                                                    persistSearch: !0
                                                })
                                              : null,
                                          el === x.X1.EMOJI
                                              ? (0, r.jsx)(O.Z, {
                                                    hasTabWrapper: !0,
                                                    containerContext: eC ? O.v.TABS_EXPRESSION_PICKER : O.v.NO_TABS_EXPRESSION_PICKER,
                                                    persistSearch: !0,
                                                    channel: W,
                                                    containerWidth: ea,
                                                    includeCreateEmojiButton: R,
                                                    emojiSize: null != ea && ea < z ? j.Su.MEDIUM : j.Su.LARGE,
                                                    pickerIntention: U.Hz.CHAT,
                                                    closePopout: eE,
                                                    onSelectEmoji: Z,
                                                    onSelectSoundmoji: eT,
                                                    ref: (e) => {
                                                        ei.current = e;
                                                    },
                                                    shouldShowSoundmojiInEmojiPicker: (null == (t = K.soundmoji) ? void 0 : t.allowSending) === !0
                                                })
                                              : null,
                                          el === x.X1.SOUNDBOARD
                                              ? (0, r.jsx)('div', {
                                                    className: V.soundboardContainer,
                                                    children: (0, r.jsx)(T.Z, {
                                                        guildId: W.guild_id,
                                                        channel: W,
                                                        containerWidth: ea,
                                                        onClose: eE,
                                                        onSelect: eA,
                                                        analyticsSource: 'expression-picker',
                                                        renderHeader: (e) =>
                                                            (0, r.jsx)('div', {
                                                                className: V.soundboardHeader,
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
let J = i.memo(X);
