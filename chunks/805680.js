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
    Z = r(611480),
    F = r(388032),
    V = r(662689);
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
    var n, r, i;
    let { positionTargetRef: o, hideGifFavorites: u, includeCreateEmojiButton: c, onSelectGIF: g, onSelectEmoji: L, onSelectSticker: W, onSelectSound: K, channel: z, type: q, position: Q, align: X, positionLayerClassName: J, closeOnModalOuterClick: $ = !1, parentModalKey: ee } = e,
        et = s.useRef(null),
        en = s.useRef(!1),
        er = s.useRef(),
        ei = s.useRef(null),
        { drawerWidth: ea, handleDrawerResizeHandleMouseDown: es } = Y({
            positionContainerRef: et,
            drawerRef: ei,
            orientation: 'left' === X ? v.y.HORIZONTAL_RIGHT : v.y.HORIZONTAL_LEFT
        }),
        eo = (0, P.Iu)((e) => e.activeView),
        el = (0, R.fQ)(z),
        { renderWindow: eu, windowDispatch: ec } = s.useContext(I.ZP),
        ed = (0, _.e7)([O.Z], () => !O.Z.hasLoadedStickerPacks),
        ef = (0, N.V2)({ location: 'expression_picker' }),
        e_ = null != ee,
        eh = (0, p.Jw)(null != ee ? ee : ''),
        ep = s.useCallback(
            (e) => {
                var n;
                if ((!e_ && (0, p.$s)()) || (e_ && !(eh && $))) return;
                let { target: r } = e;
                if ((0, f.k)(r) && null != r.closest('.' + M.CT)) return;
                for (; (0, f.k)(r); ) {
                    if (r === ei.current || 'true' === r.getAttribute('data-menu-item') || 'true' === r.getAttribute('data-premium-tutorial-expression-picker-tooltip') || 'true' === r.getAttribute('data-premium-tutorial-persistent-coachmark-emoji-step')) return;
                    r = r.parentNode;
                }
                (0, P._Q)();
                let i = null === (n = (0, w.uB)(e)) || void 0 === n ? void 0 : n.activeElement;
                (null == i || 'BODY' === i.tagName) && x.S.dispatchToLastSubscribed(k.CkL.TEXTAREA_FOCUS);
            },
            [$, eh, e_]
        ),
        em = s.useCallback(() => {
            (0, P._Q)();
        }, []);
    s.useLayoutEffect(() => {
        let e = () => {
            eo === M.X1.GIF && (0, P._Q)();
        };
        return (
            eu.addEventListener('mousedown', ep),
            eu.addEventListener('contextmenu', ep),
            ec.subscribe(k.CkL.POPOUT_CLOSE, em),
            x.S.subscribe(k.CkL.CLOSE_GIF_PICKER, e),
            () => {
                eu.removeEventListener('mousedown', ep), eu.removeEventListener('contextmenu', ep), ec.unsubscribe(k.CkL.POPOUT_CLOSE, em), x.S.unsubscribe(k.CkL.CLOSE_GIF_PICKER, e);
            }
        );
    }, [eo, em, ep, eu, ec]),
        (0, m.useFocusLock)(et);
    let [eg, eE] = (0, b.US)(ef ? [h.z.SOUNDMOJI_BADGE] : [], void 0, !1),
        [ev, eI] = s.useState(!1);
    s.useEffect(() => {
        eo === M.X1.SOUNDBOARD && eI(!0);
    }, [eo]),
        s.useEffect(
            () => () => {
                ev && eE(U.L.TAKE_ACTION);
            },
            [ev, eE]
        ),
        s.useEffect(() => {
            (0, P.ql)('');
        }, []),
        s.useEffect(() => {
            ((!e_ && (0, p.$s)()) || (e_ && !eh)) && (0, P._Q)();
        }, [eh, e_]),
        s.useEffect(() => {
            if (null != ei.current && !en.current) {
                var e, n, r, i;
                eo === M.X1.EMOJI
                    ? (null == er ? void 0 : null === (e = er.current) || void 0 === e ? void 0 : e.onPickerOpen) != null && (null == er || null === (n = er.current) || void 0 === n || n.onPickerOpen(), (en.current = !0))
                    : eo === M.X1.STICKER
                      ? (null == er ? void 0 : null === (r = er.current) || void 0 === r ? void 0 : r.onPickerOpen) != null && !ed && (null == er || null === (i = er.current) || void 0 === i || i.onPickerOpen(), (en.current = !0))
                      : (T.ZP.trackWithMetadata(k.rMx.EXPRESSION_PICKER_OPENED, {
                            width: ei.current.offsetWidth,
                            tab: eo,
                            badged: !1
                        }),
                        (en.current = !0));
            }
        });
    let eT = (null === (n = q.gifs) || void 0 === n ? void 0 : n.allowSending) && !d.tq && null != g,
        eb = (null === (r = q.stickers) || void 0 === r ? void 0 : r.allowSending) && null != W,
        ey = !(null === (i = q.expressionPicker) || void 0 === i ? void 0 : i.onlyEmojis) && (eT || eb),
        eS = 'left' === X ? 'right' : 'left',
        eA = null != J ? J : 'left' === X ? V.positionLayerDefaultAlignLeft : V.positionLayerDefaultAlignRight;
    return (0, a.jsx)(E.Z, {
        section: k.jXE.EXPRESSION_PICKER,
        children: (0, a.jsx)(A.W5, {
            className: l()(V.positionLayer, eA),
            targetRef: o,
            position: Q,
            align: X,
            spacing: 8,
            autoInvert: !0,
            children: (e) => {
                let { isPositioned: n } = e;
                return (0, a.jsx)('section', {
                    className: l()(V.positionContainer, { [V.positionContainerOnlyEmoji]: !ey }),
                    ref: et,
                    role: 'dialog',
                    'aria-label': F.intl.string(F.t.Utlwvr),
                    children: n
                        ? (0, a.jsxs)('div', {
                              className: V.drawerSizingWrapper,
                              style: {
                                  width: null == ea ? void 0 : ea,
                                  [X]: 0
                              },
                              ref: ei,
                              children: [
                                  (0, a.jsx)('div', {
                                      className: V.resizeHandle,
                                      onMouseDown: es,
                                      style: { [eS]: -2 }
                                  }),
                                  (0, a.jsxs)('div', {
                                      className: V.contentWrapper,
                                      children: [
                                          ey
                                              ? (0, a.jsx)('nav', {
                                                    className: V.nav,
                                                    children: (0, a.jsxs)('div', {
                                                        className: V.navList,
                                                        role: 'tablist',
                                                        'aria-label': F.intl.string(F.t['2j4VgY']),
                                                        children: [
                                                            eT
                                                                ? (0, a.jsx)(H, {
                                                                      id: B._3,
                                                                      'aria-controls': B.vO,
                                                                      'aria-selected': eo === M.X1.GIF,
                                                                      isActive: eo === M.X1.GIF,
                                                                      viewType: M.X1.GIF,
                                                                      children: F.intl.string(F.t['6gUTsb'])
                                                                  })
                                                                : null,
                                                            eb
                                                                ? (0, a.jsx)(H, {
                                                                      id: Z.ED,
                                                                      'aria-controls': Z.nZ,
                                                                      'aria-selected': eo === M.X1.STICKER,
                                                                      isActive: eo === M.X1.STICKER,
                                                                      autoFocus: !el,
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
                                                                'aria-selected': eo === M.X1.EMOJI,
                                                                isActive: eo === M.X1.EMOJI,
                                                                viewType: M.X1.EMOJI,
                                                                children: F.intl.string(F.t.Xu3wEx)
                                                            }),
                                                            ef &&
                                                                null != K &&
                                                                (0, a.jsx)(H, {
                                                                    id: B.Hr,
                                                                    'aria-controls': B.gV,
                                                                    'aria-selected': eo === M.X1.SOUNDBOARD,
                                                                    isActive: eo === M.X1.SOUNDBOARD,
                                                                    viewType: M.X1.SOUNDBOARD,
                                                                    children: (0, a.jsxs)('div', {
                                                                        className: V.soundmojiLabelContainer,
                                                                        children: [F.intl.string(F.t.EHlAMT), null != eg && (0, a.jsx)(m.TextBadge, { text: F.intl.string(F.t.y2b7CA) })]
                                                                    })
                                                                })
                                                        ]
                                                    })
                                                })
                                              : null,
                                          eo === M.X1.STICKER && eb
                                              ? (0, a.jsx)(D.Z, {
                                                    isLoading: ed,
                                                    channel: z,
                                                    containerWidth: ea,
                                                    onSelectSticker: W,
                                                    closePopout: em,
                                                    ref: (e) => {
                                                        er.current = e;
                                                    }
                                                })
                                              : null,
                                          eo === M.X1.GIF && eT
                                              ? (0, a.jsx)(S.Z, {
                                                    onSelectGIF: g,
                                                    hideFavorites: u,
                                                    persistSearch: !0
                                                })
                                              : null,
                                          eo === M.X1.EMOJI
                                              ? (0, a.jsx)(y.Z, {
                                                    hasTabWrapper: !0,
                                                    containerContext: ey ? y.v.TABS_EXPRESSION_PICKER : y.v.NO_TABS_EXPRESSION_PICKER,
                                                    persistSearch: !0,
                                                    channel: z,
                                                    containerWidth: ea,
                                                    includeCreateEmojiButton: c,
                                                    emojiSize: null != ea && ea < j ? B.Su.MEDIUM : B.Su.LARGE,
                                                    pickerIntention: G.Hz.CHAT,
                                                    closePopout: em,
                                                    onSelectEmoji: L,
                                                    ref: (e) => {
                                                        er.current = e;
                                                    }
                                                })
                                              : null,
                                          eo === M.X1.SOUNDBOARD
                                              ? (0, a.jsx)('div', {
                                                    className: V.soundboardContainer,
                                                    children: (0, a.jsx)(C.Z, {
                                                        guildId: z.guild_id,
                                                        channel: z,
                                                        containerWidth: ea,
                                                        onClose: em,
                                                        onSelect: K,
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
