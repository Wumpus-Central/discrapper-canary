n.d(t, {
    Z: () => eb,
    v: () => ec
}),
    n(388685),
    n(539854);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(954955),
    l = n.n(s),
    c = n(611144),
    u = n(442837),
    d = n(704215),
    f = n(477690),
    _ = n(481060),
    p = n(80932),
    h = n(410575),
    m = n(2052),
    g = n(100527),
    E = n(367907),
    b = n(906732),
    y = n(243778),
    O = n(339085),
    v = n(438332),
    I = n(664437),
    S = n(806966),
    T = n(28546),
    A = n(691251),
    N = n(98528),
    C = n(770812),
    R = n(434404),
    P = n(536442),
    w = n(609218),
    D = n(695346),
    L = n(984933),
    x = n(594174),
    k = n(626135),
    M = n(111361),
    j = n(624138),
    U = n(543241),
    G = n(253696),
    B = n(199257),
    F = n(636411),
    V = n(380331),
    Z = n(170762),
    H = n(22363),
    Y = n(784222),
    W = n(141507),
    K = n(669040),
    z = n(901963),
    q = n(212263),
    X = n(149203),
    Q = n(981631),
    J = n(921944),
    $ = n(185923),
    ee = n(539490);
function et(e, t, n) {
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
function en(e) {
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
                et(e, t, n[t]);
            });
    }
    return e;
}
function er(e, t) {
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
function ei(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : er(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ea = (0, j.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    eo = (0, j.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    es = 8,
    el = (e) => e.stopPropagation();
var ec = (function (e) {
    return (e[(e.NONE = 0)] = 'NONE'), (e[(e.TABS_EXPRESSION_PICKER = 1)] = 'TABS_EXPRESSION_PICKER'), (e[(e.NO_TABS_EXPRESSION_PICKER = 2)] = 'NO_TABS_EXPRESSION_PICKER'), e;
})({});
let eu = (e, t) => {
        S.kJ.setInspectedExpressionPosition(e, t, A.u.GRID_NAVIGATOR_EVENT);
    },
    ed = (e) => {
        let { analyticsLocation: t, pickerIntention: n, columnCounts: r, onSelectEmoji: a, emojiGrid: o, emojiList: s, channelGuildId: l, isBurstReaction: d } = e,
            f = (0, u.e7)([O.ZP], () => O.ZP.getDisambiguatedEmojiContext(l), [l]),
            _ = i.useCallback(
                (e, r) => {
                    switch (e.type) {
                        case Y.ld.CREATE_EMOJI:
                            a({
                                emoji: void 0,
                                willClose: !0
                            }),
                                R.Z.open(e.guildId, Q.pNK.EMOJI);
                            return;
                        case Y.ld.EMOJI: {
                            if (null != e.emoji && r.altKey)
                                return void (f.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                    ? (0, p.Xe)(e.emoji)
                                    : ((0, U.J1)({
                                          emoji: e.emoji,
                                          location: ei(en({}, t), { object: Q.qAy.EMOJI })
                                      }),
                                      (0, p.$K)(e.emoji)));
                            let i = {
                                page: null != l ? Q.ZY5.GUILD_CHANNEL : Q.ZY5.DM_CHANNEL,
                                section: Q.jXE.EMOJI_PICKER_POPOUT,
                                object: Q.qAy.EMOJI
                            };
                            d &&
                                (i = {
                                    page: null != l ? Q.ZY5.GUILD_CHANNEL : Q.ZY5.DM_CHANNEL,
                                    section: Q.jXE.EMOJI_PICKER_POPOUT,
                                    object: Q.qAy.EMOJI
                                }),
                                (0, U.fe)({
                                    emoji: e.emoji,
                                    location: i,
                                    pickerIntention: n,
                                    category: e.category,
                                    subCategory: e.subCategory,
                                    newlyAddedHighlight: e.subCategory === X.t0.NEWLY_ADDED_EMOJI && v.Z.isNewerThanLastSeen(l, e.emoji.id)
                                }),
                                a({
                                    emoji: e.emoji,
                                    willClose: !r.shiftKey,
                                    isBurst: d
                                });
                        }
                    }
                },
                [a, l, n, f, t, d]
            ),
            {
                gridDispatch: h,
                getItemProps: m,
                getRowProps: g,
                gridContainerProps: E,
                handleGridContainerKeyDown: b,
                isUsingKeyboardNavigation: y
            } = (0, N.VO)({
                columnCounts: r,
                gridNavigatorId: X.Vr,
                itemGrid: o,
                itemList: s,
                onGridNavigatorItemSelect: _,
                onGridNavigatorPositionChange: eu
            });
        return (
            i.useEffect(
                () =>
                    S.kJ.subscribe(
                        (e) => e.inspectedExpressionPosition,
                        (e) => {
                            if (null == e) return;
                            let { columnIndex: t, rowIndex: n, source: r } = e;
                            r !== A.u.GRID_NAVIGATOR_EVENT &&
                                h({
                                    type: c.s.SET_FOCUSED_POSITION,
                                    x: t,
                                    y: n
                                });
                        }
                    ),
                [h]
            ),
            {
                getItemProps: m,
                getRowProps: g,
                gridContainerProps: E,
                handleGridContainerKeyDown: b,
                isUsingKeyboardNavigation: y
            }
        );
    },
    ef = (e, t) => {
        let [n, r] = i.useState(null);
        i.useEffect(() => {
            if (null != n) {
                var e;
                null == (e = t.current) || e.scrollToSectionTop(n), r(null);
            }
        }, [t, n]),
            i.useEffect(() => {
                r(S.kJ.getState().activeCategoryIndex);
            }, [e]);
    },
    e_ = (e, t, n, r) => {
        i.useLayoutEffect(() => {
            if (r) {
                var e;
                null == (e = n.current) || e.focus();
            }
        }, [e, t, n, r]);
    },
    ep = 200,
    eh = l()(U.to, ep),
    em = l()(U.jA, ep),
    eg = {
        section: void 0,
        openPopoutType: void 0,
        popoutLocation: void 0
    },
    eE = function (e, t) {
        var n, a;
        let s,
            { pickerIntention: l, channel: c, guildId: f, closePopout: p, emojiSize: A = X.Su.MEDIUM, hasTabWrapper: R = !1, containerContext: j = 0, includeCreateEmojiButton: et, onSelectEmoji: er, onSelectSoundmoji: ec, containerWidth: eu, onNavigateAway: ep, persistSearch: eE, className: eb, headerClassName: ey, analyticsOverride: eO = eg, searchProps: ev = {}, wrapper: eI, shouldHidePickerActions: eS = !1, messageId: eT, renderHeader: eA, listHeaderClassName: eN, categoryListClassName: eC, shouldShowSoundmojiInEmojiPicker: eR = !1, showOnlyUnicode: eP = !1 } = e,
            { onFocus: ew, onKeyDown: eD, autoFocus: eL = !0, accessory: ex } = ev,
            ek = (0, u.e7)([L.ZP], () => (null != f ? L.ZP.getDefaultChannel(f) : null), [f]),
            [eM, ej] = i.useState(null),
            eU = i.useRef(''),
            eG = (0, T.Iu)((e) => e.searchQuery),
            eB = i.useRef(null),
            eF = i.useRef(null),
            eV = i.useRef(null);
        null == c && null != ek && (c = ek);
        let eZ = null != (a = null != (n = null == c ? void 0 : c.getGuildId()) ? n : f) ? a : null,
            [eH, eY] = i.useState(!1),
            eW = x.default.getCurrentUser(),
            eK = (0, M.I5)(eW);
        i.useImperativeHandle(t, () => ({ onPickerOpen: ti }));
        let { location: ez } = (0, m.O)(),
            { page: eq, section: eX, object: eQ, openPopoutType: eJ, popoutLocation: e$ } = eO,
            e0 = i.useMemo(() => ei(en({}, ez), { section: null != eX ? eX : Q.jXE.EMOJI_PICKER_POPOUT }), [ez, eX]),
            { analyticsLocations: e1 } = (0, b.ZP)(g.Z.EMOJI_PICKER),
            { diversitySurrogate: e2 } = (0, u.cj)([O.ZP], () => ({ diversitySurrogate: O.ZP.diversitySurrogate })),
            e3 = (0, U.DV)(eG, c, l, eP),
            e4 = null == e3 ? 0 : e3.locked.length + e3.unlocked.length,
            e5 = D.d4.useSetting(),
            e6 = i.useMemo(() => new Set(e5), [e5]),
            e8 = i.useCallback((e) => {
                D.d4.updateSetting(Array.from(e));
            }, []),
            e7 = (0, N.ep)({
                gridWrapperRef: eB,
                containerWidth: eu,
                listPaddingLeft: eo,
                listScrollbarWidth: es
            }),
            {
                rowCountBySection: e9,
                sectionDescriptors: te,
                emojiGrid: tt,
                columnCounts: tn
            } = (0, Y.YH)({
                gridWidth: e7,
                channel: c,
                includeCreateEmojiButton: et,
                pickerIntention: l,
                emojiSearchResults: e3,
                collapsedSections: e6,
                emojiPaddingHorizontal: ea,
                emojiSpriteSize: A,
                shouldShowSoundmojiInEmojiPicker: eR,
                showOnlyUnicode: eP
            }),
            { newlyAddedEmojis: tr } = (0, B.Z)(eZ, l);
        (0, G.b)({
            intention: l,
            isBurstReaction: eH,
            analyticsObject: eQ
        });
        let ti = i.useCallback(() => {
                let e = tr.length > 0 ? tr[0].id : null;
                (0, I.pr)(eZ, e),
                    (0, G.Z)({
                        intention: l,
                        isBurstReaction: eH,
                        analyticsObject: eQ
                    });
            }, [tr, eZ, l, eH, eQ]),
            ta = (0, Y.rf)({
                pickerIntention: l,
                selectedChannel: c,
                closePopout: p,
                onSelectEmoji: er,
                setUpsellConfigs: ej,
                emojiSelectAnalytics: (e) => {
                    '' !== eG
                        ? (0, U.y$)({
                              emoji: e.emoji,
                              location: ei(en({}, e0), { object: Q.qAy.EMOJI }),
                              searchQuery: eG,
                              intention: l
                          })
                        : (0, U.fe)({
                              emoji: e.emoji,
                              location: en(ei(en({}, e0), { object: null != eQ ? eQ : Q.qAy.EMOJI }), null != eq && { page: eq }),
                              pickerIntention: l,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight: e.subCategory === X.t0.NEWLY_ADDED_EMOJI && v.Z.isNewerThanLastSeen(eZ, e.emoji.id),
                              isBurstReaction: eH
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, U.J1)({
                        emoji: e.emoji,
                        location: ei(en({}, e0), { object: Q.qAy.EMOJI })
                    });
                }
            }),
            to = i.useCallback(() => {
                p(), null == ep || ep();
            }, [p, ep]),
            {
                getItemProps: ts,
                getRowProps: tl,
                gridContainerProps: tc,
                handleGridContainerKeyDown: tu,
                isUsingKeyboardNavigation: td
            } = ed({
                pickerIntention: l,
                analyticsLocation: e0,
                columnCounts: tn,
                onSelectEmoji: er,
                emojiGrid: tt,
                emojiList: eF,
                channelGuildId: eZ,
                isBurstReaction: eH
            });
        ef(eu, eF),
            e_(eu, e2, eV, eL),
            i.useEffect(() => {
                eE || (0, T.ql)('');
            }, [eE]),
            i.useEffect(
                () => (
                    k.default.track(
                        Q.rMx.OPEN_POPOUT,
                        en(
                            {
                                type: null != eJ ? eJ : 'Emoji Picker',
                                guild_id: eZ,
                                location: e$
                            },
                            (0, E.v_)(c)
                        )
                    ),
                    S.kJ.resetStoreState
                ),
                [eJ, eZ, e$, c]
            ),
            i.useEffect(() => () => (0, P.Kw)(P.v6.FAVORITE_EMOJI_TOOLTIP), []),
            i.useLayoutEffect(() => {
                var e;
                let { columnIndex: t, rowIndex: n } = S.kJ.getState().inspectedExpressionPosition;
                (null == (e = tt[n]) ? void 0 : e[t]) == null && 0 !== t && S.kJ.setInspectedExpressionPosition(0, 0);
            }, [tt]),
            i.useEffect(() => {
                if (('' === eU.current && '' !== eG && (0, U.PC)(e0, l), 0 === e4 && '' !== eG)) eh(e0, eG);
                else if ('' !== eG && eU.current !== eG) {
                    var e;
                    em(e4, null != (e = null == e3 ? void 0 : e3.locked.length) ? e : 0, e0, eG, l);
                }
                eU.current = eG;
            }, [eG, e0, e4, e3, l]);
        let tf = null != eI ? eI : R ? 'div' : _.VqE,
            t_ = null != e7;
        if ((null == eM ? void 0 : eM.type) === Y.Bg.PREMIUM) {
            let e = w.p.NONE;
            2 === j ? (e = w.p.PARENT_CONTAINER) : 1 === j && (e = w.p.TAB_PARENT_CONTAINER),
                (s = (0, r.jsx)(q.Z, {
                    onLearnMore: to,
                    emojiDescriptor: eM.emojiDescriptor,
                    pickerIntention: l,
                    analyticsLocation: e0,
                    onClose: () => ej(null),
                    channel: c,
                    containerContext: e
                }));
        } else
            (null == eM ? void 0 : eM.type) === Y.Bg.ROLE_SUBSCRIPTION
                ? (s = (0, r.jsx)(C.Z, {
                      onClose: () => ej(null),
                      guildId: eM.guildId,
                      emojiId: eM.emojiId
                  }))
                : eH && !eK && (s = (0, r.jsx)(F.Z, { onDismiss: () => eY(!1) }));
        let tp = (e, t) => {
                ta(e, ei(en({}, t), { isBurst: eH }));
            },
            th = () => {
                var e;
                eY(!eH), null == (e = eV.current) || e.focus();
            },
            tm = (0, r.jsx)(H.Z, {
                pickerIntention: l,
                emojiListRef: eF,
                onKeyDown: (e) => {
                    null == tu || tu(e), null == eD || eD(e);
                },
                searchBarRef: eV,
                onFocus: ew,
                autoFocus: eL,
                accessory: ex,
                headerClassName: ey,
                hasTabWrapper: R,
                diversitySurrogate: e2,
                isBurstReaction: eH,
                onBurstReactionToggle: th,
                renderHeader: eA
            }),
            tg = [];
        l === $.Hz.REACTION && tg.push(d.z.SUPER_REACTIONS_NITRO_MARKETING), O.ZP.hasFavoriteEmojis(eZ) || tg.push(d.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tE = (0, r.jsx)(
            h.Z,
            ei(en({}, e0), {
                children: (0, r.jsxs)(tf, {
                    id: X.cZ,
                    'aria-labelledby': R ? X.td : void 0,
                    role: R ? 'tabpanel' : void 0,
                    className: o()(ee.wrapper, {
                        [ee.emojiPickerHasTabWrapper]: R,
                        [ee.isBurstReactionPicker]: eH && eK
                    }),
                    children: [
                        R ? null : tm,
                        (0, r.jsxs)('div', {
                            className: o()(ee.emojiPicker, eb),
                            onScroll: el,
                            children: [
                                R ? tm : null,
                                (0, r.jsxs)('div', {
                                    className: ee.bodyWrapper,
                                    ref: eB,
                                    children: [
                                        (0, r.jsx)(z.Z, {
                                            channel: c,
                                            closePopout: p
                                        }),
                                        (0, r.jsx)(y.ZP, {
                                            contentTypes: tg,
                                            children: (e) => {
                                                let { visibleContent: t, markAsDismissed: n } = e;
                                                if (t === d.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return (0, r.jsx)(Z.Z, { markAsDismissed: () => n(J.L.UNKNOWN) });
                                            }
                                        }),
                                        eS
                                            ? null
                                            : (0, r.jsx)(
                                                  'div',
                                                  ei(
                                                      en(
                                                          {
                                                              className: ee.emojiPickerListWrapper,
                                                              id: X.Vr
                                                          },
                                                          tc
                                                      ),
                                                      {
                                                          children: t_
                                                              ? (0, r.jsx)(K.Z, {
                                                                    collapsedSections: e6,
                                                                    diversitySurrogate: e2,
                                                                    emojiGrid: tt,
                                                                    emojiListRef: eF,
                                                                    emojiSize: A,
                                                                    getEmojiItemProps: ts,
                                                                    getEmojiRowProps: tl,
                                                                    gridWidth: e7,
                                                                    isUsingKeyboardNavigation: td,
                                                                    onEmojiSelect: tp,
                                                                    onSelectSoundmoji: ec,
                                                                    setUpsellConfigs: ej,
                                                                    rowCount: tt.length,
                                                                    rowCountBySection: e9,
                                                                    sectionDescriptors: te,
                                                                    setCollapsedSections: e8,
                                                                    channelGuildId: eZ,
                                                                    channelId: null == c ? void 0 : c.id,
                                                                    messageId: eT,
                                                                    isBurstReaction: eH,
                                                                    listHeaderClassName: eN
                                                                })
                                                              : null
                                                      }
                                                  )
                                              )
                                    ]
                                }),
                                (0, r.jsx)(W.k, {
                                    emojiGrid: tt,
                                    className: ee.inspector,
                                    guildId: eZ,
                                    pickerIntention: l,
                                    channel: c
                                }),
                                s
                            ]
                        }),
                        eS
                            ? null
                            : (0, r.jsx)(V.Z, {
                                  className: o()(ee.categoryList, eC),
                                  emojiListRef: eF,
                                  sectionDescriptors: te,
                                  intention: l,
                                  channel: c,
                                  shouldShowSoundmojiInEmojiPicker: eR,
                                  showOnlyUnicode: eP
                              })
                    ]
                })
            })
        );
        return (0, r.jsx)(b.Gt, {
            value: e1,
            children: tE
        });
    },
    eb = i.memo(i.forwardRef(eE));
