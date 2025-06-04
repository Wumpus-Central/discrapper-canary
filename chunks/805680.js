n.d(t, { Z: () => et }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(873546),
    u = n(374470),
    d = n(232418),
    f = n(442837),
    _ = n(704215),
    p = n(952265),
    h = n(481060),
    m = n(153867),
    g = n(410575),
    E = n(347469),
    b = n(40851),
    y = n(367907),
    O = n(243778),
    v = n(907040),
    I = n(556019),
    S = n(748523),
    T = n(455708),
    A = n(314910),
    N = n(125900),
    C = n(603074),
    P = n(453070),
    R = n(926491),
    w = n(457040),
    D = n(740492),
    L = n(574254),
    x = n(585483),
    k = n(5967),
    M = n(28546),
    j = n(957825),
    U = n(981631),
    G = n(921944),
    B = n(149203),
    F = n(185923),
    V = n(611480),
    Z = n(388032),
    H = n(460594);
function Y(e, t, n) {
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
function W(e) {
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
                Y(e, t, n[t]);
            });
    }
    return e;
}
function K(e, t) {
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
function z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : K(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function q(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = Q(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function Q(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let X = j.Om + B.Su.MEDIUM,
    J = i.memo(function (e) {
        var { isActive: t, className: n, viewType: i, autoFocus: o = !1, 'aria-controls': s } = e,
            l = q(e, ['isActive', 'className', 'viewType', 'autoFocus', 'aria-controls']);
        return (0, r.jsx)(
            h.zxk,
            z(
                W(
                    {
                        role: 'tab',
                        autoFocus: o,
                        'aria-controls': t ? s : void 0
                    },
                    l
                ),
                {
                    onClick: () => {
                        y.ZP.trackWithMetadata(U.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
                            tab: i,
                            badged: !1
                        }),
                            (0, M.hr)(i);
                    },
                    'aria-current': t ? 'page' : void 0,
                    className: a()(n, H.navButton, H.navItem, { [H.navButtonActive]: t }),
                    look: h.zxk.Looks.BLANK,
                    size: h.zxk.Sizes.NONE
                }
            )
        );
    }),
    $ = (e) => {
        let { positionContainerRef: t, drawerRef: n, orientation: r } = e,
            o = (0, f.e7)([D.ZP], () => D.ZP.expressionPickerWidth),
            [a, s] = i.useState(window.innerWidth),
            [c, u] = i.useState(null != o ? o : j._j.MIN),
            d = i.useMemo(() => {
                switch (c) {
                    case j._j.MIN:
                        return j.Om;
                    case j._j.MAX:
                        return null;
                    default:
                        return c;
                }
            }, [c]),
            _ = i.useCallback(
                (e) => {
                    let t = e >= a ? j._j.MAX : e <= j.Om ? j._j.MIN : e;
                    null == t && null != n.current && (n.current.style.width = ''), m.ZP.updatedUnsyncedSettings({ expressionPickerWidth: t }), u(t);
                },
                [n, a]
            ),
            p = (0, E.Z)({
                initialElementDimension: d,
                maxDimension: a,
                minDimension: j.Om,
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
function ee(e) {
    var t, n, o, s;
    let { positionTargetRef: l, hideGifFavorites: m, includeCreateEmojiButton: D, onSelectGIF: Y, onSelectEmoji: W, onSelectSticker: K, onSelectSound: z, channel: q, type: Q, position: ee, align: et, positionLayerClassName: en, closeOnModalOuterClick: er = !1, parentModalKey: ei } = e,
        eo = i.useRef(null),
        ea = i.useRef(!1),
        es = i.useRef(null),
        el = i.useRef(null),
        { drawerWidth: ec, handleDrawerResizeHandleMouseDown: eu } = $({
            positionContainerRef: eo,
            drawerRef: el,
            orientation: 'left' === et ? E.y.HORIZONTAL_RIGHT : E.y.HORIZONTAL_LEFT
        }),
        ed = (0, M.Iu)((e) => e.activeView),
        ef = (0, P.fQ)(q),
        { renderWindow: e_, windowDispatch: ep } = i.useContext(b.ZP),
        eh = (0, f.e7)([R.Z], () => !R.Z.hasLoadedStickerPacks),
        em = (0, N.V2)({ location: 'expression_picker' }),
        eg = (0, f.e7)([L.Z], () => L.Z.isOpen()),
        eE = null != ei,
        eb = (0, p.Jw)(null != ei ? ei : ''),
        ey = (0, I.h)({
            location: 'expression_picker',
            autoTrackExposure: !1
        }),
        eO = i.useCallback(
            (e) => {
                var t;
                if ((!eE && (0, p.$s)()) || (eE && !(eb && er)) || eg) return;
                let { target: n } = e;
                if ((0, u.k)(n) && null != n.closest('.' + j.CT)) return;
                for (; (0, u.k)(n); ) {
                    if (n === el.current || 'true' === n.getAttribute('data-menu-item') || 'true' === n.getAttribute('data-premium-tutorial-expression-picker-tooltip') || 'true' === n.getAttribute('data-premium-tutorial-persistent-coachmark-emoji-step')) return;
                    n = n.parentNode;
                }
                (0, M._Q)();
                let r = null == (t = (0, k.uB)(e)) ? void 0 : t.activeElement;
                (null == r || 'BODY' === r.tagName) && x.S.dispatchToLastSubscribed(U.CkL.TEXTAREA_FOCUS);
            },
            [er, eb, eE, eg]
        ),
        ev = i.useCallback(() => {
            (0, M._Q)();
        }, []);
    i.useLayoutEffect(() => {
        let e = () => {
            ed === j.X1.GIF && (0, M._Q)();
        };
        return (
            e_.addEventListener('mousedown', eO),
            e_.addEventListener('contextmenu', eO),
            ep.subscribe(U.CkL.POPOUT_CLOSE, ev),
            x.S.subscribe(U.CkL.CLOSE_GIF_PICKER, e),
            () => {
                e_.removeEventListener('mousedown', eO), e_.removeEventListener('contextmenu', eO), ep.unsubscribe(U.CkL.POPOUT_CLOSE, ev), x.S.unsubscribe(U.CkL.CLOSE_GIF_PICKER, e);
            }
        );
    }, [ed, ev, eO, e_, ep]),
        (0, h.Tbt)(eo);
    let [eI, eS] = (0, O.US)(em ? [_.z.SOUNDMOJI_BADGE] : [], void 0, !1),
        [eT, eA] = i.useState(!1);
    i.useEffect(() => {
        ed === j.X1.SOUNDBOARD && eA(!0);
    }, [ed]),
        i.useEffect(
            () => () => {
                eT && eS(G.L.TAKE_ACTION);
            },
            [eT, eS]
        ),
        i.useEffect(() => {
            (0, M.ql)('');
        }, []),
        i.useEffect(() => {
            ((!eE && (0, p.$s)()) || (eE && !eb)) && (0, M._Q)();
        }, [eb, eE]),
        i.useEffect(() => {
            if (null != el.current && !ea.current) {
                var e, t, n, r;
                ed === j.X1.EMOJI
                    ? (null == es || null == (e = es.current) ? void 0 : e.onPickerOpen) != null && (null == es || null == (t = es.current) || t.onPickerOpen(), (ea.current = !0))
                    : ed === j.X1.STICKER
                      ? (null == es || null == (n = es.current) ? void 0 : n.onPickerOpen) == null || eh || (null == es || null == (r = es.current) || r.onPickerOpen(), (ea.current = !0))
                      : (y.ZP.trackWithMetadata(U.rMx.EXPRESSION_PICKER_OPENED, {
                            width: el.current.offsetWidth,
                            tab: ed,
                            badged: !1
                        }),
                        (ea.current = !0));
            }
        });
    let eN = (null == (t = Q.gifs) ? void 0 : t.allowSending) && !c.tq && null != Y,
        eC = (null == (n = Q.stickers) ? void 0 : n.allowSending) && null != K,
        eP = i.useCallback((e, t) => (null == z ? void 0 : z(e, 'emoji_picker', t)), [z]),
        eR = i.useCallback((e, t) => (null == z ? void 0 : z(e, 'soundboard_picker', t)), [z]),
        ew = (null == (o = Q.soundmoji) ? void 0 : o.allowSending) === !0 && null != z,
        eD = !(null == (s = Q.expressionPicker) ? void 0 : s.onlyEmojis) && (eN || eC),
        eL = 'left' === et ? 'right' : 'left',
        ex = null != en ? en : 'left' === et ? H.positionLayerDefaultAlignLeft : H.positionLayerDefaultAlignRight;
    return (0, r.jsx)(g.Z, {
        section: U.jXE.EXPRESSION_PICKER,
        children: (0, r.jsx)(A.W5, {
            className: a()(H.positionLayer, ex),
            targetRef: l,
            position: ee,
            align: et,
            spacing: 8,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                var t;
                let { isPositioned: n } = e;
                return (0, r.jsx)('section', {
                    className: a()(H.positionContainer, { [H.positionContainerOnlyEmoji]: !eD }),
                    ref: eo,
                    role: 'dialog',
                    'aria-label': Z.intl.string(Z.t.Utlwvr),
                    children: n
                        ? (0, r.jsxs)('div', {
                              className: H.drawerSizingWrapper,
                              style: {
                                  width: null == ec ? void 0 : ec,
                                  [et]: 0
                              },
                              ref: el,
                              children: [
                                  (0, r.jsx)('div', {
                                      className: H.resizeHandle,
                                      onMouseDown: eu,
                                      style: { [eL]: -2 }
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: H.contentWrapper,
                                      children: [
                                          eD
                                              ? (0, r.jsx)('nav', {
                                                    className: H.nav,
                                                    children: (0, r.jsxs)('div', {
                                                        className: H.navList,
                                                        role: 'tablist',
                                                        'aria-label': Z.intl.string(Z.t['2j4VgY']),
                                                        children: [
                                                            eN
                                                                ? (0, r.jsx)(J, {
                                                                      id: B._3,
                                                                      'aria-controls': B.vO,
                                                                      'aria-selected': ed === j.X1.GIF,
                                                                      isActive: ed === j.X1.GIF,
                                                                      viewType: j.X1.GIF,
                                                                      children: Z.intl.string(Z.t['6gUTsb'])
                                                                  })
                                                                : null,
                                                            eC
                                                                ? (0, r.jsx)(J, {
                                                                      id: V.ED,
                                                                      'aria-controls': V.nZ,
                                                                      'aria-selected': ed === j.X1.STICKER,
                                                                      isActive: ed === j.X1.STICKER,
                                                                      autoFocus: !ef,
                                                                      viewType: j.X1.STICKER,
                                                                      children: (0, r.jsx)('div', {
                                                                          className: H.stickersNavItem,
                                                                          children: Z.intl.string(Z.t.nf1s3t)
                                                                      })
                                                                  })
                                                                : null,
                                                            (0, r.jsx)(J, {
                                                                id: B.td,
                                                                'aria-controls': B.cZ,
                                                                'aria-selected': ed === j.X1.EMOJI,
                                                                isActive: ed === j.X1.EMOJI,
                                                                viewType: j.X1.EMOJI,
                                                                children: Z.intl.string(Z.t.Xu3wEx)
                                                            }),
                                                            em &&
                                                                ew &&
                                                                (0, r.jsx)(J, {
                                                                    id: B.Hr,
                                                                    'aria-controls': B.gV,
                                                                    'aria-selected': ed === j.X1.SOUNDBOARD,
                                                                    isActive: ed === j.X1.SOUNDBOARD,
                                                                    viewType: j.X1.SOUNDBOARD,
                                                                    children: (0, r.jsxs)('div', {
                                                                        className: H.soundmojiLabelContainer,
                                                                        children: [Z.intl.string(Z.t.EHlAMT), null != eI && (0, r.jsx)(h.IGR, { text: Z.intl.string(Z.t.y2b7CA) })]
                                                                    })
                                                                }),
                                                            ey &&
                                                                ed === j.X1.EMOJI &&
                                                                (0, r.jsxs)(h.zxk, {
                                                                    className: H.addEmojiButton,
                                                                    size: h.PhG.SMALL,
                                                                    onClick: () => (0, S.i)(),
                                                                    children: [
                                                                        (0, r.jsx)(d.S, {
                                                                            size: 'xs',
                                                                            color: 'currentColor'
                                                                        }),
                                                                        Z.intl.string(Z.t.iMJO39)
                                                                    ]
                                                                })
                                                        ]
                                                    })
                                                })
                                              : null,
                                          ed === j.X1.STICKER && eC
                                              ? (0, r.jsx)(w.Z, {
                                                    isLoading: eh,
                                                    channel: q,
                                                    containerWidth: ec,
                                                    onSelectSticker: K,
                                                    closePopout: ev,
                                                    ref: (e) => {
                                                        es.current = e;
                                                    }
                                                })
                                              : null,
                                          ed === j.X1.GIF && eN
                                              ? (0, r.jsx)(T.Z, {
                                                    onSelectGIF: Y,
                                                    hideFavorites: m,
                                                    persistSearch: !0
                                                })
                                              : null,
                                          ed === j.X1.EMOJI
                                              ? (0, r.jsx)(v.Z, {
                                                    hasTabWrapper: !0,
                                                    containerContext: eD ? v.v.TABS_EXPRESSION_PICKER : v.v.NO_TABS_EXPRESSION_PICKER,
                                                    persistSearch: !0,
                                                    channel: q,
                                                    containerWidth: ec,
                                                    includeCreateEmojiButton: D,
                                                    emojiSize: null != ec && ec < X ? B.Su.MEDIUM : B.Su.LARGE,
                                                    pickerIntention: F.Hz.CHAT,
                                                    closePopout: ev,
                                                    onSelectEmoji: W,
                                                    onSelectSoundmoji: eP,
                                                    ref: (e) => {
                                                        es.current = e;
                                                    },
                                                    shouldShowSoundmojiInEmojiPicker: (null == (t = Q.soundmoji) ? void 0 : t.allowSending) === !0
                                                })
                                              : null,
                                          ed === j.X1.SOUNDBOARD
                                              ? (0, r.jsx)('div', {
                                                    className: H.soundboardContainer,
                                                    children: (0, r.jsx)(C.Z, {
                                                        guildId: q.guild_id,
                                                        channel: q,
                                                        containerWidth: ec,
                                                        onClose: ev,
                                                        onSelect: eR,
                                                        analyticsSource: 'expression-picker',
                                                        renderHeader: (e) =>
                                                            (0, r.jsx)('div', {
                                                                className: H.soundboardHeader,
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
let et = i.memo(ee);
