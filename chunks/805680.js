n.d(t, { Z: () => X }), n(47120);
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
    v = n(907040),
    O = n(455708),
    I = n(314910),
    S = n(125900),
    T = n(603074),
    N = n(453070),
    A = n(926491),
    C = n(457040),
    R = n(740492),
    P = n(585483),
    w = n(5967),
    D = n(28546),
    L = n(957825),
    x = n(981631),
    M = n(921944),
    k = n(149203),
    j = n(185923),
    U = n(611480),
    G = n(388032),
    B = n(460594);
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
function V(e) {
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
function Z(e, t) {
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
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function W(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = Y(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function Y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let K = L.Om + k.Su.MEDIUM,
    z = i.memo(function (e) {
        var { isActive: t, className: n, viewType: i, autoFocus: o = !1, 'aria-controls': s } = e,
            l = W(e, ['isActive', 'className', 'viewType', 'autoFocus', 'aria-controls']);
        return (0, r.jsx)(
            p.zxk,
            H(
                V(
                    {
                        role: 'tab',
                        autoFocus: o,
                        'aria-controls': t ? s : void 0
                    },
                    l
                ),
                {
                    onClick: () => {
                        b.ZP.trackWithMetadata(x.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
                            tab: i,
                            badged: !1
                        }),
                            (0, D.hr)(i);
                    },
                    'aria-current': t ? 'page' : void 0,
                    className: a()(n, B.navButton, B.navItem, { [B.navButtonActive]: t }),
                    look: p.zxk.Looks.BLANK,
                    size: p.zxk.Sizes.NONE
                }
            )
        );
    }),
    q = (e) => {
        let { positionContainerRef: t, drawerRef: n, orientation: r } = e,
            o = (0, d.e7)([R.ZP], () => R.ZP.expressionPickerWidth),
            [a, s] = i.useState(window.innerWidth),
            [c, u] = i.useState(null != o ? o : L._j.MIN),
            f = i.useMemo(() => {
                switch (c) {
                    case L._j.MIN:
                        return L.Om;
                    case L._j.MAX:
                        return null;
                    default:
                        return c;
                }
            }, [c]),
            _ = i.useCallback(
                (e) => {
                    let t = e >= a ? L._j.MAX : e <= L.Om ? L._j.MIN : e;
                    null == t && null != n.current && (n.current.style.width = ''), h.ZP.updatedUnsyncedSettings({ expressionPickerWidth: t }), u(t);
                },
                [n, a]
            ),
            p = (0, g.Z)({
                initialElementDimension: f,
                maxDimension: a,
                minDimension: L.Om,
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
function Q(e) {
    var t, n, o, s;
    let { positionTargetRef: l, hideGifFavorites: h, includeCreateEmojiButton: R, onSelectGIF: F, onSelectEmoji: V, onSelectSticker: Z, onSelectSound: H, channel: W, type: Y, position: Q, align: X, positionLayerClassName: J, closeOnModalOuterClick: $ = !1, parentModalKey: ee } = e,
        et = i.useRef(null),
        en = i.useRef(!1),
        er = i.useRef(),
        ei = i.useRef(null),
        { drawerWidth: eo, handleDrawerResizeHandleMouseDown: ea } = q({
            positionContainerRef: et,
            drawerRef: ei,
            orientation: 'left' === X ? g.y.HORIZONTAL_RIGHT : g.y.HORIZONTAL_LEFT
        }),
        es = (0, D.Iu)((e) => e.activeView),
        el = (0, N.fQ)(W),
        { renderWindow: ec, windowDispatch: eu } = i.useContext(E.ZP),
        ed = (0, d.e7)([A.Z], () => !A.Z.hasLoadedStickerPacks),
        ef = (0, S.V2)({ location: 'expression_picker' }),
        e_ = null != ee,
        ep = (0, _.Jw)(null != ee ? ee : ''),
        eh = i.useCallback(
            (e) => {
                var t;
                if ((!e_ && (0, _.$s)()) || (e_ && !(ep && $))) return;
                let { target: n } = e;
                if ((0, u.k)(n) && null != n.closest('.' + L.CT)) return;
                for (; (0, u.k)(n); ) {
                    if (n === ei.current || 'true' === n.getAttribute('data-menu-item') || 'true' === n.getAttribute('data-premium-tutorial-expression-picker-tooltip') || 'true' === n.getAttribute('data-premium-tutorial-persistent-coachmark-emoji-step')) return;
                    n = n.parentNode;
                }
                (0, D._Q)();
                let r = null == (t = (0, w.uB)(e)) ? void 0 : t.activeElement;
                (null == r || 'BODY' === r.tagName) && P.S.dispatchToLastSubscribed(x.CkL.TEXTAREA_FOCUS);
            },
            [$, ep, e_]
        ),
        em = i.useCallback(() => {
            (0, D._Q)();
        }, []);
    i.useLayoutEffect(() => {
        let e = () => {
            es === L.X1.GIF && (0, D._Q)();
        };
        return (
            ec.addEventListener('mousedown', eh),
            ec.addEventListener('contextmenu', eh),
            eu.subscribe(x.CkL.POPOUT_CLOSE, em),
            P.S.subscribe(x.CkL.CLOSE_GIF_PICKER, e),
            () => {
                ec.removeEventListener('mousedown', eh), ec.removeEventListener('contextmenu', eh), eu.unsubscribe(x.CkL.POPOUT_CLOSE, em), P.S.unsubscribe(x.CkL.CLOSE_GIF_PICKER, e);
            }
        );
    }, [es, em, eh, ec, eu]),
        (0, p.Tbt)(et);
    let [eg, eE] = (0, y.US)(ef ? [f.z.SOUNDMOJI_BADGE] : [], void 0, !1),
        [eb, ey] = i.useState(!1);
    i.useEffect(() => {
        es === L.X1.SOUNDBOARD && ey(!0);
    }, [es]),
        i.useEffect(
            () => () => {
                eb && eE(M.L.TAKE_ACTION);
            },
            [eb, eE]
        ),
        i.useEffect(() => {
            (0, D.ql)('');
        }, []),
        i.useEffect(() => {
            ((!e_ && (0, _.$s)()) || (e_ && !ep)) && (0, D._Q)();
        }, [ep, e_]),
        i.useEffect(() => {
            if (null != ei.current && !en.current) {
                var e, t, n, r;
                es === L.X1.EMOJI
                    ? (null == er || null == (e = er.current) ? void 0 : e.onPickerOpen) != null && (null == er || null == (t = er.current) || t.onPickerOpen(), (en.current = !0))
                    : es === L.X1.STICKER
                      ? (null == er || null == (n = er.current) ? void 0 : n.onPickerOpen) == null || ed || (null == er || null == (r = er.current) || r.onPickerOpen(), (en.current = !0))
                      : (b.ZP.trackWithMetadata(x.rMx.EXPRESSION_PICKER_OPENED, {
                            width: ei.current.offsetWidth,
                            tab: es,
                            badged: !1
                        }),
                        (en.current = !0));
            }
        });
    let ev = (null == (t = Y.gifs) ? void 0 : t.allowSending) && !c.tq && null != F,
        eO = (null == (n = Y.stickers) ? void 0 : n.allowSending) && null != Z,
        eI = i.useCallback((e, t) => (null == H ? void 0 : H(e, 'emoji_picker', t)), [H]),
        eS = i.useCallback((e, t) => (null == H ? void 0 : H(e, 'soundboard_picker', t)), [H]),
        eT = (null == (o = Y.soundmoji) ? void 0 : o.allowSending) === !0 && null != H,
        eN = !(null == (s = Y.expressionPicker) ? void 0 : s.onlyEmojis) && (ev || eO),
        eA = 'left' === X ? 'right' : 'left',
        eC = null != J ? J : 'left' === X ? B.positionLayerDefaultAlignLeft : B.positionLayerDefaultAlignRight;
    return (0, r.jsx)(m.Z, {
        section: x.jXE.EXPRESSION_PICKER,
        children: (0, r.jsx)(I.W5, {
            className: a()(B.positionLayer, eC),
            targetRef: l,
            position: Q,
            align: X,
            spacing: 8,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                var t;
                let { isPositioned: n } = e;
                return (0, r.jsx)('section', {
                    className: a()(B.positionContainer, { [B.positionContainerOnlyEmoji]: !eN }),
                    ref: et,
                    role: 'dialog',
                    'aria-label': G.NW.string(G.t.Utlwvr),
                    children: n
                        ? (0, r.jsxs)('div', {
                              className: B.drawerSizingWrapper,
                              style: {
                                  width: null == eo ? void 0 : eo,
                                  [X]: 0
                              },
                              ref: ei,
                              children: [
                                  (0, r.jsx)('div', {
                                      className: B.resizeHandle,
                                      onMouseDown: ea,
                                      style: { [eA]: -2 }
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: B.contentWrapper,
                                      children: [
                                          eN
                                              ? (0, r.jsx)('nav', {
                                                    className: B.nav,
                                                    children: (0, r.jsxs)('div', {
                                                        className: B.navList,
                                                        role: 'tablist',
                                                        'aria-label': G.NW.string(G.t['2j4VgY']),
                                                        children: [
                                                            ev
                                                                ? (0, r.jsx)(z, {
                                                                      id: k._3,
                                                                      'aria-controls': k.vO,
                                                                      'aria-selected': es === L.X1.GIF,
                                                                      isActive: es === L.X1.GIF,
                                                                      viewType: L.X1.GIF,
                                                                      children: G.NW.string(G.t['6gUTsb'])
                                                                  })
                                                                : null,
                                                            eO
                                                                ? (0, r.jsx)(z, {
                                                                      id: U.ED,
                                                                      'aria-controls': U.nZ,
                                                                      'aria-selected': es === L.X1.STICKER,
                                                                      isActive: es === L.X1.STICKER,
                                                                      autoFocus: !el,
                                                                      viewType: L.X1.STICKER,
                                                                      children: (0, r.jsx)('div', {
                                                                          className: B.stickersNavItem,
                                                                          children: G.NW.string(G.t.nf1s3t)
                                                                      })
                                                                  })
                                                                : null,
                                                            (0, r.jsx)(z, {
                                                                id: k.td,
                                                                'aria-controls': k.cZ,
                                                                'aria-selected': es === L.X1.EMOJI,
                                                                isActive: es === L.X1.EMOJI,
                                                                viewType: L.X1.EMOJI,
                                                                children: G.NW.string(G.t.Xu3wEx)
                                                            }),
                                                            ef &&
                                                                eT &&
                                                                (0, r.jsx)(z, {
                                                                    id: k.Hr,
                                                                    'aria-controls': k.gV,
                                                                    'aria-selected': es === L.X1.SOUNDBOARD,
                                                                    isActive: es === L.X1.SOUNDBOARD,
                                                                    viewType: L.X1.SOUNDBOARD,
                                                                    children: (0, r.jsxs)('div', {
                                                                        className: B.soundmojiLabelContainer,
                                                                        children: [G.NW.string(G.t.EHlAMT), null != eg && (0, r.jsx)(p.IGR, { text: G.NW.string(G.t.y2b7CA) })]
                                                                    })
                                                                })
                                                        ]
                                                    })
                                                })
                                              : null,
                                          es === L.X1.STICKER && eO
                                              ? (0, r.jsx)(C.Z, {
                                                    isLoading: ed,
                                                    channel: W,
                                                    containerWidth: eo,
                                                    onSelectSticker: Z,
                                                    closePopout: em,
                                                    ref: (e) => {
                                                        er.current = e;
                                                    }
                                                })
                                              : null,
                                          es === L.X1.GIF && ev
                                              ? (0, r.jsx)(O.Z, {
                                                    onSelectGIF: F,
                                                    hideFavorites: h,
                                                    persistSearch: !0
                                                })
                                              : null,
                                          es === L.X1.EMOJI
                                              ? (0, r.jsx)(v.Z, {
                                                    hasTabWrapper: !0,
                                                    containerContext: eN ? v.v.TABS_EXPRESSION_PICKER : v.v.NO_TABS_EXPRESSION_PICKER,
                                                    persistSearch: !0,
                                                    channel: W,
                                                    containerWidth: eo,
                                                    includeCreateEmojiButton: R,
                                                    emojiSize: null != eo && eo < K ? k.Su.MEDIUM : k.Su.LARGE,
                                                    pickerIntention: j.Hz.CHAT,
                                                    closePopout: em,
                                                    onSelectEmoji: V,
                                                    onSelectSoundmoji: eI,
                                                    ref: (e) => {
                                                        er.current = e;
                                                    },
                                                    shouldShowSoundmojiInEmojiPicker: (null == (t = Y.soundmoji) ? void 0 : t.allowSending) === !0
                                                })
                                              : null,
                                          es === L.X1.SOUNDBOARD
                                              ? (0, r.jsx)('div', {
                                                    className: B.soundboardContainer,
                                                    children: (0, r.jsx)(T.Z, {
                                                        guildId: W.guild_id,
                                                        channel: W,
                                                        containerWidth: eo,
                                                        onClose: em,
                                                        onSelect: eS,
                                                        analyticsSource: 'expression-picker',
                                                        renderHeader: (e) =>
                                                            (0, r.jsx)('div', {
                                                                className: B.soundboardHeader,
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
let X = i.memo(Q);
