var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(392711),
    c = r.n(u),
    d = r(873546),
    f = r(513431),
    _ = r(442837),
    h = r(704215),
    p = r(952265),
    m = r(481060),
    g = r(153867),
    E = r(410575),
    v = r(347469),
    I = r(40851),
    T = r(367907),
    b = r(243778),
    y = r(907040),
    S = r(455708),
    A = r(314910),
    N = r(125900),
    C = r(603074),
    R = r(453070),
    O = r(926491),
    D = r(457040),
    L = r(740492),
    x = r(585483),
    w = r(5967),
    P = r(28546),
    M = r(957825),
    k = r(981631),
    U = r(921944),
    B = r(149203),
    G = r(185923),
    F = r(611480),
    Z = r(388032),
    V = r(113157);
let j = M.Om + B.Su.MEDIUM,
    H = s.memo(function (e) {
        let { isActive: n, className: r, viewType: i, autoFocus: s = !1, 'aria-controls': o, ...u } = e;
        return (0, a.jsx)(m.Button, {
            role: 'tab',
            autoFocus: s,
            'aria-controls': n ? o : void 0,
            ...u,
            onClick: () => {
                T.ZP.trackWithMetadata(k.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
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
            a = (0, _.e7)([L.ZP], () => L.ZP.expressionPickerWidth),
            [o, l] = s.useState(window.innerWidth),
            [u, d] = s.useState(null != a ? a : M._j.MIN),
            f = s.useMemo(() => {
                switch (u) {
                    case M._j.MIN:
                        return M.Om;
                    case M._j.MAX:
                        return null;
                    default:
                        return u;
                }
            }, [u]),
            h = s.useCallback(
                (e) => {
                    let n = e >= o ? M._j.MAX : e <= M.Om ? M._j.MIN : e;
                    null == n && null != r.current && (r.current.style.width = ''), g.ZP.updatedUnsyncedSettings({ expressionPickerWidth: n }), d(n);
                },
                [r, o]
            ),
            p = (0, v.Z)({
                initialElementDimension: f,
                maxDimension: o,
                minDimension: M.Om,
                resizableDomNodeRef: r,
                onElementResize: h,
                orientation: i
            });
        return (
            s.useEffect(() => {
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
            s.useLayoutEffect(() => {
                null != n.current && l(n.current.offsetWidth);
            }, [n]),
            {
                drawerWidth: f,
                handleDrawerResizeHandleMouseDown: s.useCallback(
                    (e) => {
                        e.stopPropagation(), null != n.current && l(n.current.offsetWidth), p(e);
                    },
                    [n, p]
                )
            }
        );
    };
function W(e) {
    var n, r, i, o;
    let { positionTargetRef: u, hideGifFavorites: c, includeCreateEmojiButton: g, onSelectGIF: L, onSelectEmoji: W, onSelectSticker: K, onSelectSound: z, channel: q, type: Q, position: X, align: J, positionLayerClassName: $, closeOnModalOuterClick: ee = !1, parentModalKey: et } = e,
        en = s.useRef(null),
        er = s.useRef(!1),
        ei = s.useRef(),
        ea = s.useRef(null),
        { drawerWidth: es, handleDrawerResizeHandleMouseDown: eo } = Y({
            positionContainerRef: en,
            drawerRef: ea,
            orientation: 'left' === J ? v.y.HORIZONTAL_RIGHT : v.y.HORIZONTAL_LEFT
        }),
        el = (0, P.Iu)((e) => e.activeView),
        eu = (0, R.fQ)(q),
        { renderWindow: ec, windowDispatch: ed } = s.useContext(I.ZP),
        ef = (0, _.e7)([O.Z], () => !O.Z.hasLoadedStickerPacks),
        e_ = (0, N.V2)({ location: 'expression_picker' }),
        eh = null != et,
        ep = (0, p.Jw)(null != et ? et : ''),
        em = s.useCallback(
            (e) => {
                var n;
                if ((!eh && (0, p.$s)()) || (eh && !(ep && ee))) return;
                let { target: r } = e;
                if ((0, f.k)(r) && null != r.closest('.' + M.CT)) return;
                for (; (0, f.k)(r); ) {
                    if (r === ea.current || 'true' === r.getAttribute('data-menu-item') || 'true' === r.getAttribute('data-premium-tutorial-expression-picker-tooltip') || 'true' === r.getAttribute('data-premium-tutorial-persistent-coachmark-emoji-step')) return;
                    r = r.parentNode;
                }
                (0, P._Q)();
                let i = null === (n = (0, w.uB)(e)) || void 0 === n ? void 0 : n.activeElement;
                (null == i || 'BODY' === i.tagName) && x.S.dispatchToLastSubscribed(k.CkL.TEXTAREA_FOCUS);
            },
            [ee, ep, eh]
        ),
        eg = s.useCallback(() => {
            (0, P._Q)();
        }, []);
    s.useLayoutEffect(() => {
        let e = () => {
            el === M.X1.GIF && (0, P._Q)();
        };
        return (
            ec.addEventListener('mousedown', em),
            ec.addEventListener('contextmenu', em),
            ed.subscribe(k.CkL.POPOUT_CLOSE, eg),
            x.S.subscribe(k.CkL.CLOSE_GIF_PICKER, e),
            () => {
                ec.removeEventListener('mousedown', em), ec.removeEventListener('contextmenu', em), ed.unsubscribe(k.CkL.POPOUT_CLOSE, eg), x.S.unsubscribe(k.CkL.CLOSE_GIF_PICKER, e);
            }
        );
    }, [el, eg, em, ec, ed]),
        (0, m.useFocusLock)(en);
    let [eE, ev] = (0, b.US)(e_ ? [h.z.SOUNDMOJI_BADGE] : [], void 0, !1),
        [eI, eT] = s.useState(!1);
    s.useEffect(() => {
        el === M.X1.SOUNDBOARD && eT(!0);
    }, [el]),
        s.useEffect(
            () => () => {
                eI && ev(U.L.TAKE_ACTION);
            },
            [eI, ev]
        ),
        s.useEffect(() => {
            (0, P.ql)('');
        }, []),
        s.useEffect(() => {
            ((!eh && (0, p.$s)()) || (eh && !ep)) && (0, P._Q)();
        }, [ep, eh]),
        s.useEffect(() => {
            if (null != ea.current && !er.current) {
                var e, n, r, i;
                el === M.X1.EMOJI
                    ? (null == ei ? void 0 : null === (e = ei.current) || void 0 === e ? void 0 : e.onPickerOpen) != null && (null == ei || null === (n = ei.current) || void 0 === n || n.onPickerOpen(), (er.current = !0))
                    : el === M.X1.STICKER
                      ? (null == ei ? void 0 : null === (r = ei.current) || void 0 === r ? void 0 : r.onPickerOpen) != null && !ef && (null == ei || null === (i = ei.current) || void 0 === i || i.onPickerOpen(), (er.current = !0))
                      : (T.ZP.trackWithMetadata(k.rMx.EXPRESSION_PICKER_OPENED, {
                            width: ea.current.offsetWidth,
                            tab: el,
                            badged: !1
                        }),
                        (er.current = !0));
            }
        });
    let eb = (null === (n = Q.gifs) || void 0 === n ? void 0 : n.allowSending) && !d.tq && null != L,
        ey = (null === (r = Q.stickers) || void 0 === r ? void 0 : r.allowSending) && null != K,
        eS = s.useCallback((e) => (null == z ? void 0 : z(e, 'emoji_picker')), [z]),
        eA = s.useCallback((e) => (null == z ? void 0 : z(e, 'soundboard_picker')), [z]),
        eN = (null === (i = Q.soundmoji) || void 0 === i ? void 0 : i.allowSending) === !0 && null != z,
        eC = !(null === (o = Q.expressionPicker) || void 0 === o ? void 0 : o.onlyEmojis) && (eb || ey),
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
                    className: l()(V.positionContainer, { [V.positionContainerOnlyEmoji]: !eC }),
                    ref: en,
                    role: 'dialog',
                    'aria-label': Z.intl.string(Z.t.Utlwvr),
                    children: r
                        ? (0, a.jsxs)('div', {
                              className: V.drawerSizingWrapper,
                              style: {
                                  width: null == es ? void 0 : es,
                                  [J]: 0
                              },
                              ref: ea,
                              children: [
                                  (0, a.jsx)('div', {
                                      className: V.resizeHandle,
                                      onMouseDown: eo,
                                      style: { [eR]: -2 }
                                  }),
                                  (0, a.jsxs)('div', {
                                      className: V.contentWrapper,
                                      children: [
                                          eC
                                              ? (0, a.jsx)('nav', {
                                                    className: V.nav,
                                                    children: (0, a.jsxs)('div', {
                                                        className: V.navList,
                                                        role: 'tablist',
                                                        'aria-label': Z.intl.string(Z.t['2j4VgY']),
                                                        children: [
                                                            eb
                                                                ? (0, a.jsx)(H, {
                                                                      id: B._3,
                                                                      'aria-controls': B.vO,
                                                                      'aria-selected': el === M.X1.GIF,
                                                                      isActive: el === M.X1.GIF,
                                                                      viewType: M.X1.GIF,
                                                                      children: Z.intl.string(Z.t['6gUTsb'])
                                                                  })
                                                                : null,
                                                            ey
                                                                ? (0, a.jsx)(H, {
                                                                      id: F.ED,
                                                                      'aria-controls': F.nZ,
                                                                      'aria-selected': el === M.X1.STICKER,
                                                                      isActive: el === M.X1.STICKER,
                                                                      autoFocus: !eu,
                                                                      viewType: M.X1.STICKER,
                                                                      children: (0, a.jsx)('div', {
                                                                          className: V.stickersNavItem,
                                                                          children: Z.intl.string(Z.t.nf1s3t)
                                                                      })
                                                                  })
                                                                : null,
                                                            (0, a.jsx)(H, {
                                                                id: B.td,
                                                                'aria-controls': B.cZ,
                                                                'aria-selected': el === M.X1.EMOJI,
                                                                isActive: el === M.X1.EMOJI,
                                                                viewType: M.X1.EMOJI,
                                                                children: Z.intl.string(Z.t.Xu3wEx)
                                                            }),
                                                            e_ &&
                                                                eN &&
                                                                (0, a.jsx)(H, {
                                                                    id: B.Hr,
                                                                    'aria-controls': B.gV,
                                                                    'aria-selected': el === M.X1.SOUNDBOARD,
                                                                    isActive: el === M.X1.SOUNDBOARD,
                                                                    viewType: M.X1.SOUNDBOARD,
                                                                    children: (0, a.jsxs)('div', {
                                                                        className: V.soundmojiLabelContainer,
                                                                        children: [Z.intl.string(Z.t.EHlAMT), null != eE && (0, a.jsx)(m.TextBadge, { text: Z.intl.string(Z.t.y2b7CA) })]
                                                                    })
                                                                })
                                                        ]
                                                    })
                                                })
                                              : null,
                                          el === M.X1.STICKER && ey
                                              ? (0, a.jsx)(D.Z, {
                                                    isLoading: ef,
                                                    channel: q,
                                                    containerWidth: es,
                                                    onSelectSticker: K,
                                                    closePopout: eg,
                                                    ref: (e) => {
                                                        ei.current = e;
                                                    }
                                                })
                                              : null,
                                          el === M.X1.GIF && eb
                                              ? (0, a.jsx)(S.Z, {
                                                    onSelectGIF: L,
                                                    hideFavorites: c,
                                                    persistSearch: !0
                                                })
                                              : null,
                                          el === M.X1.EMOJI
                                              ? (0, a.jsx)(y.Z, {
                                                    hasTabWrapper: !0,
                                                    containerContext: eC ? y.v.TABS_EXPRESSION_PICKER : y.v.NO_TABS_EXPRESSION_PICKER,
                                                    persistSearch: !0,
                                                    channel: q,
                                                    containerWidth: es,
                                                    includeCreateEmojiButton: g,
                                                    emojiSize: null != es && es < j ? B.Su.MEDIUM : B.Su.LARGE,
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
                                                    children: (0, a.jsx)(C.Z, {
                                                        guildId: q.guild_id,
                                                        channel: q,
                                                        containerWidth: es,
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
n.Z = s.memo(W);
