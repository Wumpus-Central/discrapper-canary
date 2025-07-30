(n.d(t, { Z: () => $ }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
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
    v = n(556019),
    I = n(455708),
    T = n(314910),
    S = n(125900),
    A = n(603074),
    N = n(453070),
    C = n(926491),
    R = n(457040),
    P = n(740492),
    w = n(574254),
    D = n(585483),
    L = n(5967),
    x = n(28546),
    M = n(957825),
    k = n(981631),
    j = n(921944),
    U = n(149203),
    G = n(185923),
    B = n(611480),
    V = n(388032),
    F = n(460594);
function Z(e, t, n) {
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
function H(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                Z(e, t, n[t]);
            }));
    }
    return e;
}
function Y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function K(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = z(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let q = M.Om + U.Su.MEDIUM,
    X = i.memo(function (e) {
        var { isActive: t, className: n, viewType: i, autoFocus: a = !1, 'aria-controls': s } = e,
            l = K(e, ['isActive', 'className', 'viewType', 'autoFocus', 'aria-controls']);
        return (0, r.jsx)(
            p.P3F,
            W(
                H(
                    {
                        role: 'tab',
                        autoFocus: a,
                        'aria-controls': t ? s : void 0
                    },
                    l
                ),
                {
                    onClick: () => {
                        (b.ZP.trackWithMetadata(k.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
                            tab: i,
                            badged: !1
                        }),
                            (0, x.hr)(i));
                    },
                    'aria-current': t ? 'page' : void 0,
                    className: o()(n, F.navButton, F.navItem, { [F.navButtonActive]: t })
                }
            )
        );
    }),
    Q = (e) => {
        let { positionContainerRef: t, drawerRef: n, orientation: r } = e,
            a = (0, d.e7)([P.ZP], () => P.ZP.expressionPickerWidth),
            [o, s] = i.useState(window.innerWidth),
            [c, u] = i.useState(null != a ? a : M._j.MIN),
            f = i.useMemo(() => {
                switch (c) {
                    case M._j.MIN:
                        return M.Om;
                    case M._j.MAX:
                        return null;
                    default:
                        return c;
                }
            }, [c]),
            _ = i.useCallback(
                (e) => {
                    let t = e >= o ? M._j.MAX : e <= M.Om ? M._j.MIN : e;
                    (null == t && null != n.current && (n.current.style.width = ''), h.ZP.updatedUnsyncedSettings({ expressionPickerWidth: t }), u(t));
                },
                [n, o]
            ),
            p = (0, g.Z)({
                initialElementDimension: f,
                maxDimension: o,
                minDimension: M.Om,
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
                        (e.stopPropagation(), null != t.current && s(t.current.offsetWidth), p(e));
                    },
                    [t, p]
                )
            }
        );
    };
function J(e) {
    var t, n, a, s;
    let { positionTargetRef: l, hideGifFavorites: h, includeCreateEmojiButton: P, onSelectGIF: Z, onSelectEmoji: H, onSelectSticker: Y, onSelectSound: W, channel: K, type: z, position: J, align: $, positionLayerClassName: ee, closeOnModalOuterClick: et = !1, parentModalKey: en } = e,
        er = i.useRef(null),
        ei = i.useRef(!1),
        ea = i.useRef(null),
        eo = i.useRef(null),
        { drawerWidth: es, handleDrawerResizeHandleMouseDown: el } = Q({
            positionContainerRef: er,
            drawerRef: eo,
            orientation: 'left' === $ ? g.y.HORIZONTAL_RIGHT : g.y.HORIZONTAL_LEFT
        }),
        ec = (0, x.Iu)((e) => e.activeView),
        eu = (0, N.fQ)(K),
        { renderWindow: ed, windowDispatch: ef } = i.useContext(E.ZP),
        e_ = (0, d.e7)([C.Z], () => !C.Z.hasLoadedStickerPacks),
        ep = (0, S.V2)({ location: 'expression_picker' }),
        eh = (0, d.e7)([w.Z], () => w.Z.isOpen()),
        em = null != en,
        eg = (0, _.Jw)(null != en ? en : ''),
        eE = (null == (t = z.gifs) ? void 0 : t.allowSending) && !c.tq && null != Z,
        eb = (null == (n = z.stickers) ? void 0 : n.allowSending) && null != Y,
        ey = !(null == (a = z.expressionPicker) ? void 0 : a.onlyEmojis) && (eE || eb),
        { showExpressionPickerButton: eO } = (0, v.qt)({
            location: 'expression_picker',
            autoTrackExposure: !0,
            disable: !ey || ec !== M.X1.EMOJI
        }),
        ev = i.useCallback(
            (e) => {
                var t;
                if ((!em && (0, _.$s)()) || (em && !(eg && et)) || eh || e.defaultPrevented) return;
                let { target: n } = e;
                if ((0, u.k)(n) && null != n.closest('.' + M.CT)) return;
                for (; (0, u.k)(n); ) {
                    if (n === eo.current || 'true' === n.getAttribute('data-menu-item') || 'true' === n.getAttribute('data-premium-tutorial-expression-picker-tooltip') || 'true' === n.getAttribute('data-premium-tutorial-persistent-coachmark-emoji-step')) return;
                    n = n.parentNode;
                }
                (0, x._Q)();
                let r = null == (t = (0, L.uB)(e)) ? void 0 : t.activeElement;
                (null == r || 'BODY' === r.tagName) && D.S.dispatchToLastSubscribed(k.CkL.TEXTAREA_FOCUS);
            },
            [et, eg, em, eh]
        ),
        eI = i.useCallback(() => {
            (0, x._Q)();
        }, []);
    (i.useLayoutEffect(() => {
        let e = () => {
            ec === M.X1.GIF && (0, x._Q)();
        };
        return (
            ed.addEventListener('mousedown', ev),
            ed.addEventListener('contextmenu', ev),
            ef.subscribe(k.CkL.POPOUT_CLOSE, eI),
            D.S.subscribe(k.CkL.CLOSE_GIF_PICKER, e),
            () => {
                (ed.removeEventListener('mousedown', ev), ed.removeEventListener('contextmenu', ev), ef.unsubscribe(k.CkL.POPOUT_CLOSE, eI), D.S.unsubscribe(k.CkL.CLOSE_GIF_PICKER, e));
            }
        );
    }, [ec, eI, ev, ed, ef]),
        (0, p.Tbt)(er));
    let [eT, eS] = (0, y.US)(ep ? [f.z.SOUNDMOJI_BADGE] : [], void 0, !1),
        [eA, eN] = i.useState(!1);
    (i.useEffect(() => {
        ec === M.X1.SOUNDBOARD && eN(!0);
    }, [ec]),
        i.useEffect(
            () => () => {
                eA && eS(j.L.TAKE_ACTION);
            },
            [eA, eS]
        ),
        i.useEffect(() => {
            (0, x.ql)('');
        }, []),
        i.useEffect(() => {
            ((!em && (0, _.$s)()) || (em && !eg)) && (0, x._Q)();
        }, [eg, em]),
        i.useEffect(() => {
            if (null != eo.current && !ei.current) {
                var e, t, n, r;
                ec === M.X1.EMOJI
                    ? (null == ea || null == (e = ea.current) ? void 0 : e.onPickerOpen) != null && (null == ea || null == (t = ea.current) || t.onPickerOpen(), (ei.current = !0))
                    : ec === M.X1.STICKER
                      ? (null == ea || null == (n = ea.current) ? void 0 : n.onPickerOpen) == null || e_ || (null == ea || null == (r = ea.current) || r.onPickerOpen(), (ei.current = !0))
                      : (b.ZP.trackWithMetadata(k.rMx.EXPRESSION_PICKER_OPENED, {
                            width: eo.current.offsetWidth,
                            tab: ec,
                            badged: !1
                        }),
                        (ei.current = !0));
            }
        }));
    let eC = i.useCallback((e, t) => (null == W ? void 0 : W(e, 'emoji_picker', t)), [W]),
        eR = i.useCallback((e, t) => (null == W ? void 0 : W(e, 'soundboard_picker', t)), [W]),
        eP = (null == (s = z.soundmoji) ? void 0 : s.allowSending) === !0 && null != W,
        ew = 'left' === $ ? 'right' : 'left',
        eD = null != ee ? ee : 'left' === $ ? F.positionLayerDefaultAlignLeft : F.positionLayerDefaultAlignRight;
    return (0, r.jsx)(m.Z, {
        section: k.jXE.EXPRESSION_PICKER,
        children: (0, r.jsx)(T.W5, {
            className: o()(F.positionLayer, eD),
            targetRef: l,
            position: J,
            align: $,
            spacing: 8,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                var t;
                let { isPositioned: n } = e;
                return (0, r.jsx)('section', {
                    className: o()(F.positionContainer, { [F.positionContainerOnlyEmoji]: !ey }),
                    ref: er,
                    role: 'dialog',
                    'aria-label': V.intl.string(V.t.Utlwvr),
                    children: n
                        ? (0, r.jsxs)('div', {
                              className: F.drawerSizingWrapper,
                              style: {
                                  width: null == es ? void 0 : es,
                                  [$]: 0
                              },
                              ref: eo,
                              children: [
                                  (0, r.jsx)('div', {
                                      className: F.resizeHandle,
                                      onMouseDown: el,
                                      style: { [ew]: -2 }
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: F.contentWrapper,
                                      children: [
                                          ey
                                              ? (0, r.jsx)('nav', {
                                                    className: F.nav,
                                                    children: (0, r.jsxs)('div', {
                                                        className: F.navList,
                                                        role: 'tablist',
                                                        'aria-label': V.intl.string(V.t['2j4VgY']),
                                                        children: [
                                                            eE
                                                                ? (0, r.jsx)(X, {
                                                                      id: U._3,
                                                                      'aria-controls': U.vO,
                                                                      'aria-selected': ec === M.X1.GIF,
                                                                      isActive: ec === M.X1.GIF,
                                                                      viewType: M.X1.GIF,
                                                                      children: V.intl.string(V.t['6gUTsb'])
                                                                  })
                                                                : null,
                                                            eb
                                                                ? (0, r.jsx)(X, {
                                                                      id: B.ED,
                                                                      'aria-controls': B.nZ,
                                                                      'aria-selected': ec === M.X1.STICKER,
                                                                      isActive: ec === M.X1.STICKER,
                                                                      autoFocus: !eu,
                                                                      viewType: M.X1.STICKER,
                                                                      children: (0, r.jsx)('div', {
                                                                          className: F.stickersNavItem,
                                                                          children: V.intl.string(V.t.nf1s3t)
                                                                      })
                                                                  })
                                                                : null,
                                                            (0, r.jsx)(X, {
                                                                id: U.td,
                                                                'aria-controls': U.cZ,
                                                                'aria-selected': ec === M.X1.EMOJI,
                                                                isActive: ec === M.X1.EMOJI,
                                                                viewType: M.X1.EMOJI,
                                                                children: V.intl.string(V.t.Xu3wEx)
                                                            }),
                                                            ep &&
                                                                eP &&
                                                                (0, r.jsx)(X, {
                                                                    id: U.Hr,
                                                                    'aria-controls': U.gV,
                                                                    'aria-selected': ec === M.X1.SOUNDBOARD,
                                                                    isActive: ec === M.X1.SOUNDBOARD,
                                                                    viewType: M.X1.SOUNDBOARD,
                                                                    children: (0, r.jsxs)('div', {
                                                                        className: F.soundmojiLabelContainer,
                                                                        children: [V.intl.string(V.t.EHlAMT), null != eT && (0, r.jsx)(p.IGR, { text: V.intl.string(V.t.y2b7CA) })]
                                                                    })
                                                                })
                                                        ]
                                                    })
                                                })
                                              : null,
                                          ec === M.X1.STICKER && eb
                                              ? (0, r.jsx)(R.Z, {
                                                    isLoading: e_,
                                                    channel: K,
                                                    containerWidth: es,
                                                    onSelectSticker: Y,
                                                    closePopout: eI,
                                                    ref: (e) => {
                                                        ea.current = e;
                                                    }
                                                })
                                              : null,
                                          ec === M.X1.GIF && eE
                                              ? (0, r.jsx)(I.Z, {
                                                    onSelectGIF: Z,
                                                    hideFavorites: h,
                                                    persistSearch: !0
                                                })
                                              : null,
                                          ec === M.X1.EMOJI
                                              ? (0, r.jsx)(O.Z, {
                                                    hasTabWrapper: !0,
                                                    containerContext: ey ? O.v.TABS_EXPRESSION_PICKER : O.v.NO_TABS_EXPRESSION_PICKER,
                                                    persistSearch: !0,
                                                    channel: K,
                                                    containerWidth: es,
                                                    includeCreateEmojiButton: P,
                                                    emojiSize: null != es && es < q ? U.Su.MEDIUM : U.Su.LARGE,
                                                    pickerIntention: G.Hz.CHAT,
                                                    closePopout: eI,
                                                    onSelectEmoji: H,
                                                    onSelectSoundmoji: eC,
                                                    ref: (e) => {
                                                        ea.current = e;
                                                    },
                                                    shouldShowSoundmojiInEmojiPicker: (null == (t = z.soundmoji) ? void 0 : t.allowSending) === !0,
                                                    showAddEmojiButton: eO
                                                })
                                              : null,
                                          ec === M.X1.SOUNDBOARD
                                              ? (0, r.jsx)('div', {
                                                    className: F.soundboardContainer,
                                                    children: (0, r.jsx)(A.Z, {
                                                        guildId: K.guild_id,
                                                        channel: K,
                                                        containerWidth: es,
                                                        onClose: eI,
                                                        onSelect: eR,
                                                        analyticsSource: 'expression-picker',
                                                        renderHeader: (e) =>
                                                            (0, r.jsx)('div', {
                                                                className: F.soundboardHeader,
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
let $ = i.memo(J);
