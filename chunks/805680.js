var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(392711),
    c = r.n(u),
    d = r(873546),
    f = r(513431),
    p = r(442837),
    h = r(704215),
    _ = r(952265),
    m = r(481060),
    g = r(153867),
    E = r(410575),
    v = r(347469),
    y = r(40851),
    b = r(367907),
    I = r(243778),
    T = r(907040),
    S = r(455708),
    A = r(314910),
    C = r(125900),
    N = r(603074),
    R = r(453070),
    O = r(926491),
    D = r(457040),
    x = r(740492),
    L = r(585483),
    w = r(5967),
    P = r(28546),
    M = r(957825),
    k = r(981631),
    U = r(921944),
    B = r(149203),
    G = r(185923),
    Z = r(611480),
    F = r(388032),
    V = r(662689);
let j = M.Om + B.Su.MEDIUM,
    H = o.memo(function (e) {
        let { isActive: n, className: r, viewType: i, autoFocus: o = !1, 'aria-controls': s, ...u } = e;
        return (0, a.jsx)(m.Button, {
            role: 'tab',
            autoFocus: o,
            'aria-controls': n ? s : void 0,
            ...u,
            onClick: () => {
                b.ZP.trackWithMetadata(k.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
                    tab: i,
                    badged: !1
                }),
                    (0, P.hr)(i);
            },
            'aria-current': n ? 'page' : void 0,
            className: l()(r, V.navButton, V.navItem, { [V.navButtonActive]: n }),
            look: m.Button.Looks.BLANK,
            size: m.Button.Sizes.NONE
        });
    }),
    Y = (e) => {
        let { positionContainerRef: n, drawerRef: r, orientation: i } = e,
            a = (0, p.e7)([x.ZP], () => x.ZP.expressionPickerWidth),
            [s, l] = o.useState(window.innerWidth),
            [u, d] = o.useState(null != a ? a : M._j.MIN),
            f = o.useMemo(() => {
                switch (u) {
                    case M._j.MIN:
                        return M.Om;
                    case M._j.MAX:
                        return null;
                    default:
                        return u;
                }
            }, [u]),
            h = o.useCallback(
                (e) => {
                    let n = e >= s ? M._j.MAX : e <= M.Om ? M._j.MIN : e;
                    null == n && null != r.current && (r.current.style.width = ''), g.ZP.updatedUnsyncedSettings({ expressionPickerWidth: n }), d(n);
                },
                [r, s]
            ),
            _ = (0, v.Z)({
                initialElementDimension: f,
                maxDimension: s,
                minDimension: M.Om,
                resizableDomNodeRef: r,
                onElementResize: h,
                orientation: i
            });
        return (
            o.useEffect(() => {
                let e = c().debounce(() => {
                    null != n.current && l(n.current.offsetWidth);
                }, 500);
                return (
                    window.addEventListener('resize', e),
                    () => {
                        window.removeEventListener('resize', e);
                    }
                );
            }, [n]),
            o.useLayoutEffect(() => {
                null != n.current && l(n.current.offsetWidth);
            }, [n]),
            {
                drawerWidth: f,
                handleDrawerResizeHandleMouseDown: o.useCallback(
                    (e) => {
                        e.stopPropagation(), null != n.current && l(n.current.offsetWidth), _(e);
                    },
                    [n, _]
                )
            }
        );
    };
function W(e) {
    var n, r, i, s;
    let { positionTargetRef: u, hideGifFavorites: c, includeCreateEmojiButton: g, onSelectGIF: x, onSelectEmoji: W, onSelectSticker: K, onSelectSound: z, channel: q, type: Q, position: X, align: J, positionLayerClassName: $, closeOnModalOuterClick: ee = !1, parentModalKey: et } = e,
        en = o.useRef(null),
        er = o.useRef(!1),
        ei = o.useRef(),
        ea = o.useRef(null),
        { drawerWidth: eo, handleDrawerResizeHandleMouseDown: es } = Y({
            positionContainerRef: en,
            drawerRef: ea,
            orientation: 'left' === J ? v.y.HORIZONTAL_RIGHT : v.y.HORIZONTAL_LEFT
        }),
        el = (0, P.Iu)((e) => e.activeView),
        eu = (0, R.fQ)(q),
        { renderWindow: ec, windowDispatch: ed } = o.useContext(y.ZP),
        ef = (0, p.e7)([O.Z], () => !O.Z.hasLoadedStickerPacks),
        ep = (0, C.V2)({ location: 'expression_picker' }),
        eh = null != et,
        e_ = (0, _.Jw)(null != et ? et : ''),
        em = o.useCallback(
            (e) => {
                var n;
                if ((!eh && (0, _.$s)()) || (eh && !(e_ && ee))) return;
                let { target: r } = e;
                if ((0, f.k)(r) && null != r.closest('.' + M.CT)) return;
                for (; (0, f.k)(r); ) {
                    if (r === ea.current || 'true' === r.getAttribute('data-menu-item') || 'true' === r.getAttribute('data-premium-tutorial-expression-picker-tooltip') || 'true' === r.getAttribute('data-premium-tutorial-persistent-coachmark-emoji-step')) return;
                    r = r.parentNode;
                }
                (0, P._Q)();
                let i = null === (n = (0, w.uB)(e)) || void 0 === n ? void 0 : n.activeElement;
                (null == i || 'BODY' === i.tagName) && L.S.dispatchToLastSubscribed(k.CkL.TEXTAREA_FOCUS);
            },
            [ee, e_, eh]
        ),
        eg = o.useCallback(() => {
            (0, P._Q)();
        }, []);
    o.useLayoutEffect(() => {
        let e = () => {
            el === M.X1.GIF && (0, P._Q)();
        };
        return (
            ec.addEventListener('mousedown', em),
            ec.addEventListener('contextmenu', em),
            ed.subscribe(k.CkL.POPOUT_CLOSE, eg),
            L.S.subscribe(k.CkL.CLOSE_GIF_PICKER, e),
            () => {
                ec.removeEventListener('mousedown', em), ec.removeEventListener('contextmenu', em), ed.unsubscribe(k.CkL.POPOUT_CLOSE, eg), L.S.unsubscribe(k.CkL.CLOSE_GIF_PICKER, e);
            }
        );
    }, [el, eg, em, ec, ed]),
        (0, m.useFocusLock)(en);
    let [eE, ev] = (0, I.US)(ep ? [h.z.SOUNDMOJI_BADGE] : [], void 0, !1),
        [ey, eb] = o.useState(!1);
    o.useEffect(() => {
        el === M.X1.SOUNDBOARD && eb(!0);
    }, [el]),
        o.useEffect(
            () => () => {
                ey && ev(U.L.TAKE_ACTION);
            },
            [ey, ev]
        ),
        o.useEffect(() => {
            (0, P.ql)('');
        }, []),
        o.useEffect(() => {
            ((!eh && (0, _.$s)()) || (eh && !e_)) && (0, P._Q)();
        }, [e_, eh]),
        o.useEffect(() => {
            if (null != ea.current && !er.current) {
                var e, n, r, i;
                el === M.X1.EMOJI
                    ? (null == ei ? void 0 : null === (e = ei.current) || void 0 === e ? void 0 : e.onPickerOpen) != null && (null == ei || null === (n = ei.current) || void 0 === n || n.onPickerOpen(), (er.current = !0))
                    : el === M.X1.STICKER
                      ? (null == ei ? void 0 : null === (r = ei.current) || void 0 === r ? void 0 : r.onPickerOpen) != null && !ef && (null == ei || null === (i = ei.current) || void 0 === i || i.onPickerOpen(), (er.current = !0))
                      : (b.ZP.trackWithMetadata(k.rMx.EXPRESSION_PICKER_OPENED, {
                            width: ea.current.offsetWidth,
                            tab: el,
                            badged: !1
                        }),
                        (er.current = !0));
            }
        });
    let eI = (null === (n = Q.gifs) || void 0 === n ? void 0 : n.allowSending) && !d.tq && null != x,
        eT = (null === (r = Q.stickers) || void 0 === r ? void 0 : r.allowSending) && null != K,
        eS = o.useCallback((e) => (null == z ? void 0 : z(e, 'emoji_picker')), [z]),
        eA = o.useCallback((e) => (null == z ? void 0 : z(e, 'soundboard_picker')), [z]),
        eC = (null === (i = Q.soundmoji) || void 0 === i ? void 0 : i.allowSending) === !0 && null != z,
        eN = !(null === (s = Q.expressionPicker) || void 0 === s ? void 0 : s.onlyEmojis) && (eI || eT),
        eR = 'left' === J ? 'right' : 'left',
        eO = null != $ ? $ : 'left' === J ? V.positionLayerDefaultAlignLeft : V.positionLayerDefaultAlignRight;
    return (0, a.jsx)(E.Z, {
        section: k.jXE.EXPRESSION_PICKER,
        children: (0, a.jsx)(A.W5, {
            className: l()(V.positionLayer, eO),
            targetRef: u,
            position: X,
            align: J,
            spacing: 8,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                var n;
                let { isPositioned: r } = e;
                return (0, a.jsx)('section', {
                    className: l()(V.positionContainer, { [V.positionContainerOnlyEmoji]: !eN }),
                    ref: en,
                    role: 'dialog',
                    'aria-label': F.intl.string(F.t.Utlwvr),
                    children: r
                        ? (0, a.jsxs)('div', {
                              className: V.drawerSizingWrapper,
                              style: {
                                  width: null == eo ? void 0 : eo,
                                  [J]: 0
                              },
                              ref: ea,
                              children: [
                                  (0, a.jsx)('div', {
                                      className: V.resizeHandle,
                                      onMouseDown: es,
                                      style: { [eR]: -2 }
                                  }),
                                  (0, a.jsxs)('div', {
                                      className: V.contentWrapper,
                                      children: [
                                          eN
                                              ? (0, a.jsx)('nav', {
                                                    className: V.nav,
                                                    children: (0, a.jsxs)('div', {
                                                        className: V.navList,
                                                        role: 'tablist',
                                                        'aria-label': F.intl.string(F.t['2j4VgY']),
                                                        children: [
                                                            eI
                                                                ? (0, a.jsx)(H, {
                                                                      id: B._3,
                                                                      'aria-controls': B.vO,
                                                                      'aria-selected': el === M.X1.GIF,
                                                                      isActive: el === M.X1.GIF,
                                                                      viewType: M.X1.GIF,
                                                                      children: F.intl.string(F.t['6gUTsb'])
                                                                  })
                                                                : null,
                                                            eT
                                                                ? (0, a.jsx)(H, {
                                                                      id: Z.ED,
                                                                      'aria-controls': Z.nZ,
                                                                      'aria-selected': el === M.X1.STICKER,
                                                                      isActive: el === M.X1.STICKER,
                                                                      autoFocus: !eu,
                                                                      viewType: M.X1.STICKER,
                                                                      children: (0, a.jsx)('div', {
                                                                          className: V.stickersNavItem,
                                                                          children: F.intl.string(F.t.nf1s3t)
                                                                      })
                                                                  })
                                                                : null,
                                                            (0, a.jsx)(H, {
                                                                id: B.td,
                                                                'aria-controls': B.cZ,
                                                                'aria-selected': el === M.X1.EMOJI,
                                                                isActive: el === M.X1.EMOJI,
                                                                viewType: M.X1.EMOJI,
                                                                children: F.intl.string(F.t.Xu3wEx)
                                                            }),
                                                            ep &&
                                                                eC &&
                                                                (0, a.jsx)(H, {
                                                                    id: B.Hr,
                                                                    'aria-controls': B.gV,
                                                                    'aria-selected': el === M.X1.SOUNDBOARD,
                                                                    isActive: el === M.X1.SOUNDBOARD,
                                                                    viewType: M.X1.SOUNDBOARD,
                                                                    children: (0, a.jsxs)('div', {
                                                                        className: V.soundmojiLabelContainer,
                                                                        children: [F.intl.string(F.t.EHlAMT), null != eE && (0, a.jsx)(m.TextBadge, { text: F.intl.string(F.t.y2b7CA) })]
                                                                    })
                                                                })
                                                        ]
                                                    })
                                                })
                                              : null,
                                          el === M.X1.STICKER && eT
                                              ? (0, a.jsx)(D.Z, {
                                                    isLoading: ef,
                                                    channel: q,
                                                    containerWidth: eo,
                                                    onSelectSticker: K,
                                                    closePopout: eg,
                                                    ref: (e) => {
                                                        ei.current = e;
                                                    }
                                                })
                                              : null,
                                          el === M.X1.GIF && eI
                                              ? (0, a.jsx)(S.Z, {
                                                    onSelectGIF: x,
                                                    hideFavorites: c,
                                                    persistSearch: !0
                                                })
                                              : null,
                                          el === M.X1.EMOJI
                                              ? (0, a.jsx)(T.Z, {
                                                    hasTabWrapper: !0,
                                                    containerContext: eN ? T.v.TABS_EXPRESSION_PICKER : T.v.NO_TABS_EXPRESSION_PICKER,
                                                    persistSearch: !0,
                                                    channel: q,
                                                    containerWidth: eo,
                                                    includeCreateEmojiButton: g,
                                                    emojiSize: null != eo && eo < j ? B.Su.MEDIUM : B.Su.LARGE,
                                                    pickerIntention: G.Hz.CHAT,
                                                    closePopout: eg,
                                                    onSelectEmoji: W,
                                                    onSelectSoundmoji: eS,
                                                    ref: (e) => {
                                                        ei.current = e;
                                                    },
                                                    shouldShowSoundmojiInEmojiPicker: (null === (n = Q.soundmoji) || void 0 === n ? void 0 : n.allowSending) === !0
                                                })
                                              : null,
                                          el === M.X1.SOUNDBOARD
                                              ? (0, a.jsx)('div', {
                                                    className: V.soundboardContainer,
                                                    children: (0, a.jsx)(N.Z, {
                                                        guildId: q.guild_id,
                                                        channel: q,
                                                        containerWidth: eo,
                                                        onClose: eg,
                                                        onSelect: eA,
                                                        analyticsSource: 'expression-picker',
                                                        renderHeader: (e) =>
                                                            (0, a.jsx)('div', {
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
n.Z = o.memo(W);
