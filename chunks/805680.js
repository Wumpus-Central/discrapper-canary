(n.d(t, { Z: () => er }), n(388685));
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
    m = n(755721),
    g = n(481060),
    E = n(153867),
    b = n(410575),
    y = n(347469),
    O = n(40851),
    v = n(367907),
    I = n(243778),
    T = n(907040),
    S = n(556019),
    A = n(748523),
    N = n(455708),
    C = n(314910),
    R = n(125900),
    P = n(603074),
    w = n(453070),
    D = n(926491),
    L = n(457040),
    x = n(740492),
    M = n(574254),
    k = n(585483),
    j = n(5967),
    U = n(28546),
    G = n(957825),
    B = n(981631),
    V = n(921944),
    F = n(149203),
    Z = n(185923),
    H = n(611480),
    Y = n(388032),
    W = n(460594);
function K(e, t, n) {
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
function z(e) {
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
                K(e, t, n[t]);
            }));
    }
    return e;
}
function q(e, t) {
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
function X(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Q(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = J(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function J(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let $ = G.Om + F.Su.MEDIUM,
    ee = i.memo(function (e) {
        var { isActive: t, className: n, viewType: i, autoFocus: a = !1, 'aria-controls': s } = e,
            l = Q(e, ['isActive', 'className', 'viewType', 'autoFocus', 'aria-controls']);
        return (0, r.jsx)(
            m.zx,
            X(
                z(
                    {
                        role: 'tab',
                        autoFocus: a,
                        'aria-controls': t ? s : void 0
                    },
                    l
                ),
                {
                    onClick: () => {
                        (v.ZP.trackWithMetadata(B.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
                            tab: i,
                            badged: !1
                        }),
                            (0, U.hr)(i));
                    },
                    'aria-current': t ? 'page' : void 0,
                    className: o()(n, W.navButton, W.navItem, { [W.navButtonActive]: t }),
                    look: m.zx.Looks.BLANK,
                    size: m.zx.Sizes.NONE
                }
            )
        );
    }),
    et = (e) => {
        let { positionContainerRef: t, drawerRef: n, orientation: r } = e,
            a = (0, f.e7)([x.ZP], () => x.ZP.expressionPickerWidth),
            [o, s] = i.useState(window.innerWidth),
            [c, u] = i.useState(null != a ? a : G._j.MIN),
            d = i.useMemo(() => {
                switch (c) {
                    case G._j.MIN:
                        return G.Om;
                    case G._j.MAX:
                        return null;
                    default:
                        return c;
                }
            }, [c]),
            _ = i.useCallback(
                (e) => {
                    let t = e >= o ? G._j.MAX : e <= G.Om ? G._j.MIN : e;
                    (null == t && null != n.current && (n.current.style.width = ''), E.ZP.updatedUnsyncedSettings({ expressionPickerWidth: t }), u(t));
                },
                [n, o]
            ),
            p = (0, y.Z)({
                initialElementDimension: d,
                maxDimension: o,
                minDimension: G.Om,
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
                        (e.stopPropagation(), null != t.current && s(t.current.offsetWidth), p(e));
                    },
                    [t, p]
                )
            }
        );
    };
function en(e) {
    var t, n, a, s;
    let { positionTargetRef: l, hideGifFavorites: m, includeCreateEmojiButton: E, onSelectGIF: x, onSelectEmoji: K, onSelectSticker: z, onSelectSound: q, channel: X, type: Q, position: J, align: en, positionLayerClassName: er, closeOnModalOuterClick: ei = !1, parentModalKey: ea } = e,
        eo = i.useRef(null),
        es = i.useRef(!1),
        el = i.useRef(null),
        ec = i.useRef(null),
        { drawerWidth: eu, handleDrawerResizeHandleMouseDown: ed } = et({
            positionContainerRef: eo,
            drawerRef: ec,
            orientation: 'left' === en ? y.y.HORIZONTAL_RIGHT : y.y.HORIZONTAL_LEFT
        }),
        ef = (0, U.Iu)((e) => e.activeView),
        e_ = (0, w.fQ)(X),
        { renderWindow: ep, windowDispatch: eh } = i.useContext(O.ZP),
        em = (0, f.e7)([D.Z], () => !D.Z.hasLoadedStickerPacks),
        eg = (0, R.V2)({ location: 'expression_picker' }),
        eE = (0, f.e7)([M.Z], () => M.Z.isOpen()),
        eb = null != ea,
        ey = (0, p.Jw)(null != ea ? ea : ''),
        eO = (0, S.h)({
            location: 'expression_picker',
            autoTrackExposure: !1
        }),
        ev = i.useCallback(
            (e) => {
                var t;
                if ((!eb && (0, p.$s)()) || (eb && !(ey && ei)) || eE || e.defaultPrevented) return;
                let { target: n } = e;
                if ((0, u.k)(n) && null != n.closest('.' + G.CT)) return;
                for (; (0, u.k)(n); ) {
                    if (n === ec.current || 'true' === n.getAttribute('data-menu-item') || 'true' === n.getAttribute('data-premium-tutorial-expression-picker-tooltip') || 'true' === n.getAttribute('data-premium-tutorial-persistent-coachmark-emoji-step')) return;
                    n = n.parentNode;
                }
                (0, U._Q)();
                let r = null == (t = (0, j.uB)(e)) ? void 0 : t.activeElement;
                (null == r || 'BODY' === r.tagName) && k.S.dispatchToLastSubscribed(B.CkL.TEXTAREA_FOCUS);
            },
            [ei, ey, eb, eE]
        ),
        eI = i.useCallback(() => {
            (0, U._Q)();
        }, []);
    (i.useLayoutEffect(() => {
        let e = () => {
            ef === G.X1.GIF && (0, U._Q)();
        };
        return (
            ep.addEventListener('mousedown', ev),
            ep.addEventListener('contextmenu', ev),
            eh.subscribe(B.CkL.POPOUT_CLOSE, eI),
            k.S.subscribe(B.CkL.CLOSE_GIF_PICKER, e),
            () => {
                (ep.removeEventListener('mousedown', ev), ep.removeEventListener('contextmenu', ev), eh.unsubscribe(B.CkL.POPOUT_CLOSE, eI), k.S.unsubscribe(B.CkL.CLOSE_GIF_PICKER, e));
            }
        );
    }, [ef, eI, ev, ep, eh]),
        (0, g.Tbt)(eo));
    let [eT, eS] = (0, I.US)(eg ? [_.z.SOUNDMOJI_BADGE] : [], void 0, !1),
        [eA, eN] = i.useState(!1);
    (i.useEffect(() => {
        ef === G.X1.SOUNDBOARD && eN(!0);
    }, [ef]),
        i.useEffect(
            () => () => {
                eA && eS(V.L.TAKE_ACTION);
            },
            [eA, eS]
        ),
        i.useEffect(() => {
            (0, U.ql)('');
        }, []),
        i.useEffect(() => {
            ((!eb && (0, p.$s)()) || (eb && !ey)) && (0, U._Q)();
        }, [ey, eb]),
        i.useEffect(() => {
            if (null != ec.current && !es.current) {
                var e, t, n, r;
                ef === G.X1.EMOJI
                    ? (null == el || null == (e = el.current) ? void 0 : e.onPickerOpen) != null && (null == el || null == (t = el.current) || t.onPickerOpen(), (es.current = !0))
                    : ef === G.X1.STICKER
                      ? (null == el || null == (n = el.current) ? void 0 : n.onPickerOpen) == null || em || (null == el || null == (r = el.current) || r.onPickerOpen(), (es.current = !0))
                      : (v.ZP.trackWithMetadata(B.rMx.EXPRESSION_PICKER_OPENED, {
                            width: ec.current.offsetWidth,
                            tab: ef,
                            badged: !1
                        }),
                        (es.current = !0));
            }
        }));
    let eC = (null == (t = Q.gifs) ? void 0 : t.allowSending) && !c.tq && null != x,
        eR = (null == (n = Q.stickers) ? void 0 : n.allowSending) && null != z,
        eP = i.useCallback((e, t) => (null == q ? void 0 : q(e, 'emoji_picker', t)), [q]),
        ew = i.useCallback((e, t) => (null == q ? void 0 : q(e, 'soundboard_picker', t)), [q]),
        eD = (null == (a = Q.soundmoji) ? void 0 : a.allowSending) === !0 && null != q,
        eL = !(null == (s = Q.expressionPicker) ? void 0 : s.onlyEmojis) && (eC || eR),
        ex = 'left' === en ? 'right' : 'left',
        eM = null != er ? er : 'left' === en ? W.positionLayerDefaultAlignLeft : W.positionLayerDefaultAlignRight;
    return (0, r.jsx)(b.Z, {
        section: B.jXE.EXPRESSION_PICKER,
        children: (0, r.jsx)(C.W5, {
            className: o()(W.positionLayer, eM),
            targetRef: l,
            position: J,
            align: en,
            spacing: 8,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                var t;
                let { isPositioned: n } = e;
                return (0, r.jsx)('section', {
                    className: o()(W.positionContainer, { [W.positionContainerOnlyEmoji]: !eL }),
                    ref: eo,
                    role: 'dialog',
                    'aria-label': Y.intl.string(Y.t.Utlwvr),
                    children: n
                        ? (0, r.jsxs)('div', {
                              className: W.drawerSizingWrapper,
                              style: {
                                  width: null == eu ? void 0 : eu,
                                  [en]: 0
                              },
                              ref: ec,
                              children: [
                                  (0, r.jsx)('div', {
                                      className: W.resizeHandle,
                                      onMouseDown: ed,
                                      style: { [ex]: -2 }
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: o()(W.contentWrapper, { [W.emojiStudioActive]: eO }),
                                      children: [
                                          eL
                                              ? (0, r.jsx)('nav', {
                                                    className: W.nav,
                                                    children: (0, r.jsxs)('div', {
                                                        className: W.navList,
                                                        role: 'tablist',
                                                        'aria-label': Y.intl.string(Y.t['2j4VgY']),
                                                        children: [
                                                            eC
                                                                ? (0, r.jsx)(ee, {
                                                                      id: F._3,
                                                                      'aria-controls': F.vO,
                                                                      'aria-selected': ef === G.X1.GIF,
                                                                      isActive: ef === G.X1.GIF,
                                                                      viewType: G.X1.GIF,
                                                                      children: Y.intl.string(Y.t['6gUTsb'])
                                                                  })
                                                                : null,
                                                            eR
                                                                ? (0, r.jsx)(ee, {
                                                                      id: H.ED,
                                                                      'aria-controls': H.nZ,
                                                                      'aria-selected': ef === G.X1.STICKER,
                                                                      isActive: ef === G.X1.STICKER,
                                                                      autoFocus: !e_,
                                                                      viewType: G.X1.STICKER,
                                                                      children: (0, r.jsx)('div', {
                                                                          className: W.stickersNavItem,
                                                                          children: Y.intl.string(Y.t.nf1s3t)
                                                                      })
                                                                  })
                                                                : null,
                                                            (0, r.jsx)(ee, {
                                                                id: F.td,
                                                                'aria-controls': F.cZ,
                                                                'aria-selected': ef === G.X1.EMOJI,
                                                                isActive: ef === G.X1.EMOJI,
                                                                viewType: G.X1.EMOJI,
                                                                children: Y.intl.string(Y.t.Xu3wEx)
                                                            }),
                                                            eg &&
                                                                eD &&
                                                                (0, r.jsx)(ee, {
                                                                    id: F.Hr,
                                                                    'aria-controls': F.gV,
                                                                    'aria-selected': ef === G.X1.SOUNDBOARD,
                                                                    isActive: ef === G.X1.SOUNDBOARD,
                                                                    viewType: G.X1.SOUNDBOARD,
                                                                    children: (0, r.jsxs)('div', {
                                                                        className: W.soundmojiLabelContainer,
                                                                        children: [Y.intl.string(Y.t.EHlAMT), null != eT && (0, r.jsx)(g.IGR, { text: Y.intl.string(Y.t.y2b7CA) })]
                                                                    })
                                                                }),
                                                            eO &&
                                                                ef === G.X1.EMOJI &&
                                                                (0, r.jsx)('div', {
                                                                    className: W.addEmojiButton,
                                                                    children: (0, r.jsx)(h.z, {
                                                                        variant: 'secondary',
                                                                        size: 'sm',
                                                                        onClick: () =>
                                                                            (0, A.i)({
                                                                                analyticsLocation: {
                                                                                    section: B.jXE.EXPRESSION_PICKER,
                                                                                    page: (null == X ? void 0 : X.guild_id) != null ? B.ZY5.GUILD_CHANNEL : B.ZY5.DM_CHANNEL
                                                                                }
                                                                            }),
                                                                        icon: d.S,
                                                                        text: Y.intl.string(Y.t.iMJO39)
                                                                    })
                                                                })
                                                        ]
                                                    })
                                                })
                                              : null,
                                          ef === G.X1.STICKER && eR
                                              ? (0, r.jsx)(L.Z, {
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
                                          ef === G.X1.GIF && eC
                                              ? (0, r.jsx)(N.Z, {
                                                    onSelectGIF: x,
                                                    hideFavorites: m,
                                                    persistSearch: !0
                                                })
                                              : null,
                                          ef === G.X1.EMOJI
                                              ? (0, r.jsx)(T.Z, {
                                                    hasTabWrapper: !0,
                                                    containerContext: eL ? T.v.TABS_EXPRESSION_PICKER : T.v.NO_TABS_EXPRESSION_PICKER,
                                                    persistSearch: !0,
                                                    channel: X,
                                                    containerWidth: eu,
                                                    includeCreateEmojiButton: E,
                                                    emojiSize: null != eu && eu < $ ? F.Su.MEDIUM : F.Su.LARGE,
                                                    pickerIntention: Z.Hz.CHAT,
                                                    closePopout: eI,
                                                    onSelectEmoji: K,
                                                    onSelectSoundmoji: eP,
                                                    ref: (e) => {
                                                        el.current = e;
                                                    },
                                                    shouldShowSoundmojiInEmojiPicker: (null == (t = Q.soundmoji) ? void 0 : t.allowSending) === !0
                                                })
                                              : null,
                                          ef === G.X1.SOUNDBOARD
                                              ? (0, r.jsx)('div', {
                                                    className: W.soundboardContainer,
                                                    children: (0, r.jsx)(P.Z, {
                                                        guildId: X.guild_id,
                                                        channel: X,
                                                        containerWidth: eu,
                                                        onClose: eI,
                                                        onSelect: ew,
                                                        analyticsSource: 'expression-picker',
                                                        renderHeader: (e) =>
                                                            (0, r.jsx)('div', {
                                                                className: W.soundboardHeader,
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
let er = i.memo(en);
