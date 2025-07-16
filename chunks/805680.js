(n.d(t, { Z: () => ee }), n(388685));
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
    p = n(755721),
    h = n(481060),
    m = n(153867),
    g = n(410575),
    E = n(347469),
    b = n(40851),
    y = n(367907),
    O = n(243778),
    v = n(907040),
    I = n(556019),
    T = n(455708),
    S = n(314910),
    A = n(125900),
    N = n(603074),
    C = n(453070),
    R = n(926491),
    P = n(457040),
    w = n(740492),
    D = n(574254),
    L = n(585483),
    x = n(5967),
    k = n(28546),
    M = n(957825),
    j = n(981631),
    U = n(921944),
    G = n(149203),
    B = n(185923),
    V = n(611480),
    F = n(388032),
    Z = n(460594);
function H(e, t, n) {
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
function Y(e) {
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
                H(e, t, n[t]);
            }));
    }
    return e;
}
function W(e, t) {
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
function K(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : W(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = q(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function q(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let X = M.Om + G.Su.MEDIUM,
    Q = i.memo(function (e) {
        var { isActive: t, className: n, viewType: i, autoFocus: a = !1, 'aria-controls': s } = e,
            l = z(e, ['isActive', 'className', 'viewType', 'autoFocus', 'aria-controls']);
        return (0, r.jsx)(
            p.zx,
            K(
                Y(
                    {
                        role: 'tab',
                        autoFocus: a,
                        'aria-controls': t ? s : void 0
                    },
                    l
                ),
                {
                    onClick: () => {
                        (y.ZP.trackWithMetadata(j.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
                            tab: i,
                            badged: !1
                        }),
                            (0, k.hr)(i));
                    },
                    'aria-current': t ? 'page' : void 0,
                    className: o()(n, Z.navButton, Z.navItem, { [Z.navButtonActive]: t }),
                    look: p.zx.Looks.BLANK,
                    size: p.zx.Sizes.NONE
                }
            )
        );
    }),
    J = (e) => {
        let { positionContainerRef: t, drawerRef: n, orientation: r } = e,
            a = (0, d.e7)([w.ZP], () => w.ZP.expressionPickerWidth),
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
                    (null == t && null != n.current && (n.current.style.width = ''), m.ZP.updatedUnsyncedSettings({ expressionPickerWidth: t }), u(t));
                },
                [n, o]
            ),
            p = (0, E.Z)({
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
function $(e) {
    var t, n, a, s;
    let { positionTargetRef: l, hideGifFavorites: p, includeCreateEmojiButton: m, onSelectGIF: w, onSelectEmoji: H, onSelectSticker: Y, onSelectSound: W, channel: K, type: z, position: q, align: $, positionLayerClassName: ee, closeOnModalOuterClick: et = !1, parentModalKey: en } = e,
        er = i.useRef(null),
        ei = i.useRef(!1),
        ea = i.useRef(null),
        eo = i.useRef(null),
        { drawerWidth: es, handleDrawerResizeHandleMouseDown: el } = J({
            positionContainerRef: er,
            drawerRef: eo,
            orientation: 'left' === $ ? E.y.HORIZONTAL_RIGHT : E.y.HORIZONTAL_LEFT
        }),
        ec = (0, k.Iu)((e) => e.activeView),
        eu = (0, C.fQ)(K),
        { renderWindow: ed, windowDispatch: ef } = i.useContext(b.ZP),
        e_ = (0, d.e7)([R.Z], () => !R.Z.hasLoadedStickerPacks),
        ep = (0, A.V2)({ location: 'expression_picker' }),
        eh = (0, d.e7)([D.Z], () => D.Z.isOpen()),
        em = null != en,
        eg = (0, _.Jw)(null != en ? en : ''),
        eE = (null == (t = z.gifs) ? void 0 : t.allowSending) && !c.tq && null != w,
        eb = (null == (n = z.stickers) ? void 0 : n.allowSending) && null != Y,
        ey = !(null == (a = z.expressionPicker) ? void 0 : a.onlyEmojis) && (eE || eb),
        { showExpressionPickerButton: eO } = (0, I.q)({
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
                (0, k._Q)();
                let r = null == (t = (0, x.uB)(e)) ? void 0 : t.activeElement;
                (null == r || 'BODY' === r.tagName) && L.S.dispatchToLastSubscribed(j.CkL.TEXTAREA_FOCUS);
            },
            [et, eg, em, eh]
        ),
        eI = i.useCallback(() => {
            (0, k._Q)();
        }, []);
    (i.useLayoutEffect(() => {
        let e = () => {
            ec === M.X1.GIF && (0, k._Q)();
        };
        return (
            ed.addEventListener('mousedown', ev),
            ed.addEventListener('contextmenu', ev),
            ef.subscribe(j.CkL.POPOUT_CLOSE, eI),
            L.S.subscribe(j.CkL.CLOSE_GIF_PICKER, e),
            () => {
                (ed.removeEventListener('mousedown', ev), ed.removeEventListener('contextmenu', ev), ef.unsubscribe(j.CkL.POPOUT_CLOSE, eI), L.S.unsubscribe(j.CkL.CLOSE_GIF_PICKER, e));
            }
        );
    }, [ec, eI, ev, ed, ef]),
        (0, h.Tbt)(er));
    let [eT, eS] = (0, O.US)(ep ? [f.z.SOUNDMOJI_BADGE] : [], void 0, !1),
        [eA, eN] = i.useState(!1);
    (i.useEffect(() => {
        ec === M.X1.SOUNDBOARD && eN(!0);
    }, [ec]),
        i.useEffect(
            () => () => {
                eA && eS(U.L.TAKE_ACTION);
            },
            [eA, eS]
        ),
        i.useEffect(() => {
            (0, k.ql)('');
        }, []),
        i.useEffect(() => {
            ((!em && (0, _.$s)()) || (em && !eg)) && (0, k._Q)();
        }, [eg, em]),
        i.useEffect(() => {
            if (null != eo.current && !ei.current) {
                var e, t, n, r;
                ec === M.X1.EMOJI
                    ? (null == ea || null == (e = ea.current) ? void 0 : e.onPickerOpen) != null && (null == ea || null == (t = ea.current) || t.onPickerOpen(), (ei.current = !0))
                    : ec === M.X1.STICKER
                      ? (null == ea || null == (n = ea.current) ? void 0 : n.onPickerOpen) == null || e_ || (null == ea || null == (r = ea.current) || r.onPickerOpen(), (ei.current = !0))
                      : (y.ZP.trackWithMetadata(j.rMx.EXPRESSION_PICKER_OPENED, {
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
        eD = null != ee ? ee : 'left' === $ ? Z.positionLayerDefaultAlignLeft : Z.positionLayerDefaultAlignRight;
    return (0, r.jsx)(g.Z, {
        section: j.jXE.EXPRESSION_PICKER,
        children: (0, r.jsx)(S.W5, {
            className: o()(Z.positionLayer, eD),
            targetRef: l,
            position: q,
            align: $,
            spacing: 8,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                var t;
                let { isPositioned: n } = e;
                return (0, r.jsx)('section', {
                    className: o()(Z.positionContainer, { [Z.positionContainerOnlyEmoji]: !ey }),
                    ref: er,
                    role: 'dialog',
                    'aria-label': F.intl.string(F.t.Utlwvr),
                    children: n
                        ? (0, r.jsxs)('div', {
                              className: Z.drawerSizingWrapper,
                              style: {
                                  width: null == es ? void 0 : es,
                                  [$]: 0
                              },
                              ref: eo,
                              children: [
                                  (0, r.jsx)('div', {
                                      className: Z.resizeHandle,
                                      onMouseDown: el,
                                      style: { [ew]: -2 }
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: Z.contentWrapper,
                                      children: [
                                          ey
                                              ? (0, r.jsx)('nav', {
                                                    className: Z.nav,
                                                    children: (0, r.jsxs)('div', {
                                                        className: Z.navList,
                                                        role: 'tablist',
                                                        'aria-label': F.intl.string(F.t['2j4VgY']),
                                                        children: [
                                                            eE
                                                                ? (0, r.jsx)(Q, {
                                                                      id: G._3,
                                                                      'aria-controls': G.vO,
                                                                      'aria-selected': ec === M.X1.GIF,
                                                                      isActive: ec === M.X1.GIF,
                                                                      viewType: M.X1.GIF,
                                                                      children: F.intl.string(F.t['6gUTsb'])
                                                                  })
                                                                : null,
                                                            eb
                                                                ? (0, r.jsx)(Q, {
                                                                      id: V.ED,
                                                                      'aria-controls': V.nZ,
                                                                      'aria-selected': ec === M.X1.STICKER,
                                                                      isActive: ec === M.X1.STICKER,
                                                                      autoFocus: !eu,
                                                                      viewType: M.X1.STICKER,
                                                                      children: (0, r.jsx)('div', {
                                                                          className: Z.stickersNavItem,
                                                                          children: F.intl.string(F.t.nf1s3t)
                                                                      })
                                                                  })
                                                                : null,
                                                            (0, r.jsx)(Q, {
                                                                id: G.td,
                                                                'aria-controls': G.cZ,
                                                                'aria-selected': ec === M.X1.EMOJI,
                                                                isActive: ec === M.X1.EMOJI,
                                                                viewType: M.X1.EMOJI,
                                                                children: F.intl.string(F.t.Xu3wEx)
                                                            }),
                                                            ep &&
                                                                eP &&
                                                                (0, r.jsx)(Q, {
                                                                    id: G.Hr,
                                                                    'aria-controls': G.gV,
                                                                    'aria-selected': ec === M.X1.SOUNDBOARD,
                                                                    isActive: ec === M.X1.SOUNDBOARD,
                                                                    viewType: M.X1.SOUNDBOARD,
                                                                    children: (0, r.jsxs)('div', {
                                                                        className: Z.soundmojiLabelContainer,
                                                                        children: [F.intl.string(F.t.EHlAMT), null != eT && (0, r.jsx)(h.IGR, { text: F.intl.string(F.t.y2b7CA) })]
                                                                    })
                                                                })
                                                        ]
                                                    })
                                                })
                                              : null,
                                          ec === M.X1.STICKER && eb
                                              ? (0, r.jsx)(P.Z, {
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
                                              ? (0, r.jsx)(T.Z, {
                                                    onSelectGIF: w,
                                                    hideFavorites: p,
                                                    persistSearch: !0
                                                })
                                              : null,
                                          ec === M.X1.EMOJI
                                              ? (0, r.jsx)(v.Z, {
                                                    hasTabWrapper: !0,
                                                    containerContext: ey ? v.v.TABS_EXPRESSION_PICKER : v.v.NO_TABS_EXPRESSION_PICKER,
                                                    persistSearch: !0,
                                                    channel: K,
                                                    containerWidth: es,
                                                    includeCreateEmojiButton: m,
                                                    emojiSize: null != es && es < X ? G.Su.MEDIUM : G.Su.LARGE,
                                                    pickerIntention: B.Hz.CHAT,
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
                                                    className: Z.soundboardContainer,
                                                    children: (0, r.jsx)(N.Z, {
                                                        guildId: K.guild_id,
                                                        channel: K,
                                                        containerWidth: es,
                                                        onClose: eI,
                                                        onSelect: eR,
                                                        analyticsSource: 'expression-picker',
                                                        renderHeader: (e) =>
                                                            (0, r.jsx)('div', {
                                                                className: Z.soundboardHeader,
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
let ee = i.memo($);
