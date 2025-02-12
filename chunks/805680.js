n.d(t, { Z: () => Y }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(873546),
    c = n(374470),
    d = n(442837),
    f = n(704215),
    _ = n(952265),
    p = n(481060),
    h = n(153867),
    m = n(410575),
    g = n(347469),
    E = n(40851),
    v = n(367907),
    y = n(243778),
    I = n(907040),
    T = n(455708),
    b = n(314910),
    S = n(125900),
    A = n(603074),
    N = n(453070),
    C = n(926491),
    R = n(457040),
    O = n(740492),
    D = n(585483),
    L = n(5967),
    x = n(28546),
    P = n(957825),
    w = n(981631),
    M = n(921944),
    k = n(149203),
    U = n(185923),
    G = n(611480),
    B = n(388032),
    Z = n(346739);
let F = P.Om + k.Su.MEDIUM,
    V = r.memo(function (e) {
        let { isActive: t, className: n, viewType: r, autoFocus: a = !1, 'aria-controls': o, ...l } = e;
        return (0, i.jsx)(p.zxk, {
            role: 'tab',
            autoFocus: a,
            'aria-controls': t ? o : void 0,
            ...l,
            onClick: () => {
                v.ZP.trackWithMetadata(w.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
                    tab: r,
                    badged: !1
                }),
                    (0, x.hr)(r);
            },
            'aria-current': t ? 'page' : void 0,
            className: s()(n, Z.navButton, Z.navItem, { [Z.navButtonActive]: t }),
            look: p.zxk.Looks.BLANK,
            size: p.zxk.Sizes.NONE
        });
    }),
    j = (e) => {
        let { positionContainerRef: t, drawerRef: n, orientation: i } = e,
            a = (0, d.e7)([O.ZP], () => O.ZP.expressionPickerWidth),
            [s, o] = r.useState(window.innerWidth),
            [u, c] = r.useState(null != a ? a : P._j.MIN),
            f = r.useMemo(() => {
                switch (u) {
                    case P._j.MIN:
                        return P.Om;
                    case P._j.MAX:
                        return null;
                    default:
                        return u;
                }
            }, [u]),
            _ = r.useCallback(
                (e) => {
                    let t = e >= s ? P._j.MAX : e <= P.Om ? P._j.MIN : e;
                    null == t && null != n.current && (n.current.style.width = ''), h.ZP.updatedUnsyncedSettings({ expressionPickerWidth: t }), c(t);
                },
                [n, s]
            ),
            p = (0, g.Z)({
                initialElementDimension: f,
                maxDimension: s,
                minDimension: P.Om,
                resizableDomNodeRef: n,
                onElementResize: _,
                orientation: i
            });
        return (
            r.useEffect(() => {
                let e = l().debounce(() => {
                    null != t.current && o(t.current.offsetWidth);
                }, 500);
                return (
                    window.addEventListener('resize', e),
                    () => {
                        window.removeEventListener('resize', e);
                    }
                );
            }, [t]),
            r.useLayoutEffect(() => {
                null != t.current && o(t.current.offsetWidth);
            }, [t]),
            {
                drawerWidth: f,
                handleDrawerResizeHandleMouseDown: r.useCallback(
                    (e) => {
                        e.stopPropagation(), null != t.current && o(t.current.offsetWidth), p(e);
                    },
                    [t, p]
                )
            }
        );
    };
function H(e) {
    var t, n, a, o;
    let { positionTargetRef: l, hideGifFavorites: h, includeCreateEmojiButton: O, onSelectGIF: H, onSelectEmoji: Y, onSelectSticker: W, onSelectSound: K, channel: z, type: q, position: Q, align: X, positionLayerClassName: J, closeOnModalOuterClick: $ = !1, parentModalKey: ee } = e,
        et = r.useRef(null),
        en = r.useRef(!1),
        ei = r.useRef(),
        er = r.useRef(null),
        { drawerWidth: ea, handleDrawerResizeHandleMouseDown: es } = j({
            positionContainerRef: et,
            drawerRef: er,
            orientation: 'left' === X ? g.y.HORIZONTAL_RIGHT : g.y.HORIZONTAL_LEFT
        }),
        eo = (0, x.Iu)((e) => e.activeView),
        el = (0, N.fQ)(z),
        { renderWindow: eu, windowDispatch: ec } = r.useContext(E.ZP),
        ed = (0, d.e7)([C.Z], () => !C.Z.hasLoadedStickerPacks),
        ef = (0, S.V2)({ location: 'expression_picker' }),
        e_ = null != ee,
        ep = (0, _.Jw)(null != ee ? ee : ''),
        eh = r.useCallback(
            (e) => {
                var t;
                if ((!e_ && (0, _.$s)()) || (e_ && !(ep && $))) return;
                let { target: n } = e;
                if ((0, c.k)(n) && null != n.closest('.' + P.CT)) return;
                for (; (0, c.k)(n); ) {
                    if (n === er.current || 'true' === n.getAttribute('data-menu-item') || 'true' === n.getAttribute('data-premium-tutorial-expression-picker-tooltip') || 'true' === n.getAttribute('data-premium-tutorial-persistent-coachmark-emoji-step')) return;
                    n = n.parentNode;
                }
                (0, x._Q)();
                let i = null === (t = (0, L.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
                (null == i || 'BODY' === i.tagName) && D.S.dispatchToLastSubscribed(w.CkL.TEXTAREA_FOCUS);
            },
            [$, ep, e_]
        ),
        em = r.useCallback(() => {
            (0, x._Q)();
        }, []);
    r.useLayoutEffect(() => {
        let e = () => {
            eo === P.X1.GIF && (0, x._Q)();
        };
        return (
            eu.addEventListener('mousedown', eh),
            eu.addEventListener('contextmenu', eh),
            ec.subscribe(w.CkL.POPOUT_CLOSE, em),
            D.S.subscribe(w.CkL.CLOSE_GIF_PICKER, e),
            () => {
                eu.removeEventListener('mousedown', eh), eu.removeEventListener('contextmenu', eh), ec.unsubscribe(w.CkL.POPOUT_CLOSE, em), D.S.unsubscribe(w.CkL.CLOSE_GIF_PICKER, e);
            }
        );
    }, [eo, em, eh, eu, ec]),
        (0, p.Tbt)(et);
    let [eg, eE] = (0, y.US)(ef ? [f.z.SOUNDMOJI_BADGE] : [], void 0, !1),
        [ev, ey] = r.useState(!1);
    r.useEffect(() => {
        eo === P.X1.SOUNDBOARD && ey(!0);
    }, [eo]),
        r.useEffect(
            () => () => {
                ev && eE(M.L.TAKE_ACTION);
            },
            [ev, eE]
        ),
        r.useEffect(() => {
            (0, x.ql)('');
        }, []),
        r.useEffect(() => {
            ((!e_ && (0, _.$s)()) || (e_ && !ep)) && (0, x._Q)();
        }, [ep, e_]),
        r.useEffect(() => {
            if (null != er.current && !en.current) {
                var e, t, n, i;
                eo === P.X1.EMOJI
                    ? (null == ei ? void 0 : null === (e = ei.current) || void 0 === e ? void 0 : e.onPickerOpen) != null && (null == ei || null === (t = ei.current) || void 0 === t || t.onPickerOpen(), (en.current = !0))
                    : eo === P.X1.STICKER
                      ? (null == ei ? void 0 : null === (n = ei.current) || void 0 === n ? void 0 : n.onPickerOpen) == null || ed || (null == ei || null === (i = ei.current) || void 0 === i || i.onPickerOpen(), (en.current = !0))
                      : (v.ZP.trackWithMetadata(w.rMx.EXPRESSION_PICKER_OPENED, {
                            width: er.current.offsetWidth,
                            tab: eo,
                            badged: !1
                        }),
                        (en.current = !0));
            }
        });
    let eI = (null === (t = q.gifs) || void 0 === t ? void 0 : t.allowSending) && !u.tq && null != H,
        eT = (null === (n = q.stickers) || void 0 === n ? void 0 : n.allowSending) && null != W,
        eb = r.useCallback((e, t) => (null == K ? void 0 : K(e, 'emoji_picker', t)), [K]),
        eS = r.useCallback((e, t) => (null == K ? void 0 : K(e, 'soundboard_picker', t)), [K]),
        eA = (null === (a = q.soundmoji) || void 0 === a ? void 0 : a.allowSending) === !0 && null != K,
        eN = !(null === (o = q.expressionPicker) || void 0 === o ? void 0 : o.onlyEmojis) && (eI || eT),
        eC = 'left' === X ? 'right' : 'left',
        eR = null != J ? J : 'left' === X ? Z.positionLayerDefaultAlignLeft : Z.positionLayerDefaultAlignRight;
    return (0, i.jsx)(m.Z, {
        section: w.jXE.EXPRESSION_PICKER,
        children: (0, i.jsx)(b.W5, {
            className: s()(Z.positionLayer, eR),
            targetRef: l,
            position: Q,
            align: X,
            spacing: 8,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                var t;
                let { isPositioned: n } = e;
                return (0, i.jsx)('section', {
                    className: s()(Z.positionContainer, { [Z.positionContainerOnlyEmoji]: !eN }),
                    ref: et,
                    role: 'dialog',
                    'aria-label': B.intl.string(B.t.Utlwvr),
                    children: n
                        ? (0, i.jsxs)('div', {
                              className: Z.drawerSizingWrapper,
                              style: {
                                  width: null == ea ? void 0 : ea,
                                  [X]: 0
                              },
                              ref: er,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: Z.resizeHandle,
                                      onMouseDown: es,
                                      style: { [eC]: -2 }
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: Z.contentWrapper,
                                      children: [
                                          eN
                                              ? (0, i.jsx)('nav', {
                                                    className: Z.nav,
                                                    children: (0, i.jsxs)('div', {
                                                        className: Z.navList,
                                                        role: 'tablist',
                                                        'aria-label': B.intl.string(B.t['2j4VgY']),
                                                        children: [
                                                            eI
                                                                ? (0, i.jsx)(V, {
                                                                      id: k._3,
                                                                      'aria-controls': k.vO,
                                                                      'aria-selected': eo === P.X1.GIF,
                                                                      isActive: eo === P.X1.GIF,
                                                                      viewType: P.X1.GIF,
                                                                      children: B.intl.string(B.t['6gUTsb'])
                                                                  })
                                                                : null,
                                                            eT
                                                                ? (0, i.jsx)(V, {
                                                                      id: G.ED,
                                                                      'aria-controls': G.nZ,
                                                                      'aria-selected': eo === P.X1.STICKER,
                                                                      isActive: eo === P.X1.STICKER,
                                                                      autoFocus: !el,
                                                                      viewType: P.X1.STICKER,
                                                                      children: (0, i.jsx)('div', {
                                                                          className: Z.stickersNavItem,
                                                                          children: B.intl.string(B.t.nf1s3t)
                                                                      })
                                                                  })
                                                                : null,
                                                            (0, i.jsx)(V, {
                                                                id: k.td,
                                                                'aria-controls': k.cZ,
                                                                'aria-selected': eo === P.X1.EMOJI,
                                                                isActive: eo === P.X1.EMOJI,
                                                                viewType: P.X1.EMOJI,
                                                                children: B.intl.string(B.t.Xu3wEx)
                                                            }),
                                                            ef &&
                                                                eA &&
                                                                (0, i.jsx)(V, {
                                                                    id: k.Hr,
                                                                    'aria-controls': k.gV,
                                                                    'aria-selected': eo === P.X1.SOUNDBOARD,
                                                                    isActive: eo === P.X1.SOUNDBOARD,
                                                                    viewType: P.X1.SOUNDBOARD,
                                                                    children: (0, i.jsxs)('div', {
                                                                        className: Z.soundmojiLabelContainer,
                                                                        children: [B.intl.string(B.t.EHlAMT), null != eg && (0, i.jsx)(p.IGR, { text: B.intl.string(B.t.y2b7CA) })]
                                                                    })
                                                                })
                                                        ]
                                                    })
                                                })
                                              : null,
                                          eo === P.X1.STICKER && eT
                                              ? (0, i.jsx)(R.Z, {
                                                    isLoading: ed,
                                                    channel: z,
                                                    containerWidth: ea,
                                                    onSelectSticker: W,
                                                    closePopout: em,
                                                    ref: (e) => {
                                                        ei.current = e;
                                                    }
                                                })
                                              : null,
                                          eo === P.X1.GIF && eI
                                              ? (0, i.jsx)(T.Z, {
                                                    onSelectGIF: H,
                                                    hideFavorites: h,
                                                    persistSearch: !0
                                                })
                                              : null,
                                          eo === P.X1.EMOJI
                                              ? (0, i.jsx)(I.Z, {
                                                    hasTabWrapper: !0,
                                                    containerContext: eN ? I.v.TABS_EXPRESSION_PICKER : I.v.NO_TABS_EXPRESSION_PICKER,
                                                    persistSearch: !0,
                                                    channel: z,
                                                    containerWidth: ea,
                                                    includeCreateEmojiButton: O,
                                                    emojiSize: null != ea && ea < F ? k.Su.MEDIUM : k.Su.LARGE,
                                                    pickerIntention: U.Hz.CHAT,
                                                    closePopout: em,
                                                    onSelectEmoji: Y,
                                                    onSelectSoundmoji: eb,
                                                    ref: (e) => {
                                                        ei.current = e;
                                                    },
                                                    shouldShowSoundmojiInEmojiPicker: (null === (t = q.soundmoji) || void 0 === t ? void 0 : t.allowSending) === !0
                                                })
                                              : null,
                                          eo === P.X1.SOUNDBOARD
                                              ? (0, i.jsx)('div', {
                                                    className: Z.soundboardContainer,
                                                    children: (0, i.jsx)(A.Z, {
                                                        guildId: z.guild_id,
                                                        channel: z,
                                                        containerWidth: ea,
                                                        onClose: em,
                                                        onSelect: eS,
                                                        analyticsSource: 'expression-picker',
                                                        renderHeader: (e) =>
                                                            (0, i.jsx)('div', {
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
let Y = r.memo(H);
