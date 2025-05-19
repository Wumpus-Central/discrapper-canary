n.d(t, {
    Z: () => eE,
    v: () => el
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
    E = n(906732),
    b = n(243778),
    y = n(339085),
    O = n(438332),
    v = n(664437),
    I = n(806966),
    S = n(28546),
    T = n(691251),
    A = n(98528),
    N = n(770812),
    C = n(434404),
    P = n(536442),
    R = n(609218),
    w = n(695346),
    D = n(984933),
    L = n(594174),
    x = n(626135),
    k = n(111361),
    M = n(624138),
    j = n(543241),
    U = n(253696),
    G = n(199257),
    B = n(636411),
    F = n(380331),
    V = n(170762),
    Z = n(22363),
    H = n(784222),
    Y = n(141507),
    W = n(669040),
    K = n(901963),
    z = n(212263),
    q = n(149203),
    Q = n(981631),
    X = n(921944),
    J = n(185923),
    $ = n(825372);
function ee(e, t, n) {
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
function et(e) {
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
                ee(e, t, n[t]);
            });
    }
    return e;
}
function en(e, t) {
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
function er(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : en(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ei = (0, M.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    ea = (0, M.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    eo = 8,
    es = (e) => e.stopPropagation();
var el = (function (e) {
    return (e[(e.NONE = 0)] = 'NONE'), (e[(e.TABS_EXPRESSION_PICKER = 1)] = 'TABS_EXPRESSION_PICKER'), (e[(e.NO_TABS_EXPRESSION_PICKER = 2)] = 'NO_TABS_EXPRESSION_PICKER'), e;
})({});
let ec = (e, t) => {
        I.kJ.setInspectedExpressionPosition(e, t, T.u.GRID_NAVIGATOR_EVENT);
    },
    eu = (e) => {
        let { analyticsLocation: t, pickerIntention: n, columnCounts: r, onSelectEmoji: a, emojiGrid: o, emojiList: s, channelGuildId: l, isBurstReaction: d } = e,
            f = (0, u.e7)([y.ZP], () => y.ZP.getDisambiguatedEmojiContext(l), [l]),
            _ = i.useCallback(
                (e, r) => {
                    switch (e.type) {
                        case H.ld.CREATE_EMOJI:
                            a(void 0, !0), C.Z.open(e.guildId, Q.pNK.EMOJI);
                            return;
                        case H.ld.EMOJI: {
                            if (null != e.emoji && r.altKey)
                                return void (f.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                    ? (0, p.Xe)(e.emoji)
                                    : ((0, j.J1)({
                                          emoji: e.emoji,
                                          location: er(et({}, t), { object: Q.qAy.EMOJI })
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
                                (0, j.fe)({
                                    emoji: e.emoji,
                                    location: i,
                                    pickerIntention: n,
                                    category: e.category,
                                    subCategory: e.subCategory,
                                    newlyAddedHighlight: e.subCategory === q.t0.NEWLY_ADDED_EMOJI && O.Z.isNewerThanLastSeen(l, e.emoji.id)
                                }),
                                a(e.emoji, !r.shiftKey, d);
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
                isUsingKeyboardNavigation: v
            } = (0, A.VO)({
                columnCounts: r,
                gridNavigatorId: q.Vr,
                itemGrid: o,
                itemList: s,
                onGridNavigatorItemSelect: _,
                onGridNavigatorPositionChange: ec
            });
        return (
            i.useEffect(
                () =>
                    I.kJ.subscribe(
                        (e) => e.inspectedExpressionPosition,
                        (e) => {
                            if (null == e) return;
                            let { columnIndex: t, rowIndex: n, source: r } = e;
                            r !== T.u.GRID_NAVIGATOR_EVENT &&
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
                isUsingKeyboardNavigation: v
            }
        );
    },
    ed = (e, t) => {
        let [n, r] = i.useState(null);
        i.useEffect(() => {
            if (null != n) {
                var e;
                null == (e = t.current) || e.scrollToSectionTop(n), r(null);
            }
        }, [t, n]),
            i.useEffect(() => {
                r(I.kJ.getState().activeCategoryIndex);
            }, [e]);
    },
    ef = (e, t, n, r) => {
        i.useLayoutEffect(() => {
            if (r) {
                var e;
                null == (e = n.current) || e.focus();
            }
        }, [e, t, n, r]);
    },
    e_ = 200,
    ep = l()(j.to, e_),
    eh = l()(j.jA, e_),
    em = {
        section: void 0,
        openPopoutType: void 0
    },
    eg = function (e, t) {
        var n, a;
        let s,
            { pickerIntention: l, channel: c, guildId: f, closePopout: p, emojiSize: T = q.Su.MEDIUM, hasTabWrapper: C = !1, containerContext: M = 0, includeCreateEmojiButton: ee, onSelectEmoji: en, onSelectSoundmoji: el, containerWidth: ec, onNavigateAway: e_, persistSearch: eg, className: eE, headerClassName: eb, analyticsOverride: ey = em, searchProps: eO = {}, wrapper: ev, shouldHidePickerActions: eI = !1, messageId: eS, renderHeader: eT, listHeaderClassName: eA, categoryListClassName: eN, shouldShowSoundmojiInEmojiPicker: eC = !1, showOnlyUnicode: eP = !1 } = e,
            { onFocus: eR, onKeyDown: ew, autoFocus: eD = !0, accessory: eL } = eO,
            ex = (0, u.e7)([D.ZP], () => (null != f ? D.ZP.getDefaultChannel(f) : null), [f]),
            [ek, eM] = i.useState(null),
            ej = i.useRef(''),
            eU = (0, S.Iu)((e) => e.searchQuery),
            eG = i.useRef(null),
            eB = i.useRef(null),
            eF = i.useRef(null);
        null == c && null != ex && (c = ex);
        let eV = null != (a = null != (n = null == c ? void 0 : c.getGuildId()) ? n : f) ? a : null,
            [eZ, eH] = i.useState(!1),
            eY = L.default.getCurrentUser(),
            eW = (0, k.I5)(eY);
        i.useImperativeHandle(t, () => ({ onPickerOpen: tn }));
        let { location: eK } = (0, m.O)(),
            { page: ez, section: eq, object: eQ, openPopoutType: eX } = ey,
            eJ = i.useMemo(() => er(et({}, eK), { section: null != eq ? eq : Q.jXE.EMOJI_PICKER_POPOUT }), [eK, eq]),
            { analyticsLocations: e$ } = (0, E.ZP)(g.Z.EMOJI_PICKER),
            { diversitySurrogate: e0 } = (0, u.cj)([y.ZP], () => ({ diversitySurrogate: y.ZP.diversitySurrogate })),
            e1 = (0, j.DV)(eU, c, l, eP),
            e3 = null == e1 ? 0 : e1.locked.length + e1.unlocked.length,
            e2 = w.d4.useSetting(),
            e4 = i.useMemo(() => new Set(e2), [e2]),
            e5 = i.useCallback((e) => {
                w.d4.updateSetting(Array.from(e));
            }, []),
            e6 = (0, A.ep)({
                gridWrapperRef: eG,
                containerWidth: ec,
                listPaddingLeft: ea,
                listScrollbarWidth: eo
            }),
            {
                rowCountBySection: e8,
                sectionDescriptors: e7,
                emojiGrid: e9,
                columnCounts: te
            } = (0, H.YH)({
                gridWidth: e6,
                channel: c,
                includeCreateEmojiButton: ee,
                pickerIntention: l,
                emojiSearchResults: e1,
                collapsedSections: e4,
                emojiPaddingHorizontal: ei,
                emojiSpriteSize: T,
                shouldShowSoundmojiInEmojiPicker: eC,
                showOnlyUnicode: eP
            }),
            { newlyAddedEmojis: tt } = (0, G.Z)(eV, l);
        (0, U.b)({
            intention: l,
            isBurstReaction: eZ,
            analyticsObject: eQ
        });
        let tn = i.useCallback(() => {
                let e = tt.length > 0 ? tt[0].id : null;
                (0, v.pr)(eV, e),
                    (0, U.Z)({
                        intention: l,
                        isBurstReaction: eZ,
                        analyticsObject: eQ
                    });
            }, [tt, eV, l, eZ, eQ]),
            tr = (0, H.rf)({
                pickerIntention: l,
                selectedChannel: c,
                closePopout: p,
                onSelectEmoji: en,
                setUpsellConfigs: eM,
                emojiSelectAnalytics: (e) => {
                    '' !== eU
                        ? (0, j.y$)({
                              emoji: e.emoji,
                              location: er(et({}, eJ), { object: Q.qAy.EMOJI }),
                              searchQuery: eU,
                              intention: l
                          })
                        : (0, j.fe)({
                              emoji: e.emoji,
                              location: et(er(et({}, eJ), { object: null != eQ ? eQ : Q.qAy.EMOJI }), null != ez && { page: ez }),
                              pickerIntention: l,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight: e.subCategory === q.t0.NEWLY_ADDED_EMOJI && O.Z.isNewerThanLastSeen(eV, e.emoji.id),
                              isBurstReaction: eZ
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, j.J1)({
                        emoji: e.emoji,
                        location: er(et({}, eJ), { object: Q.qAy.EMOJI })
                    });
                }
            }),
            ti = i.useCallback(() => {
                p(), null == e_ || e_();
            }, [p, e_]),
            {
                getItemProps: ta,
                getRowProps: to,
                gridContainerProps: ts,
                handleGridContainerKeyDown: tl,
                isUsingKeyboardNavigation: tc
            } = eu({
                pickerIntention: l,
                analyticsLocation: eJ,
                columnCounts: te,
                onSelectEmoji: en,
                emojiGrid: e9,
                emojiList: eB,
                channelGuildId: eV,
                isBurstReaction: eZ
            });
        ed(ec, eB),
            ef(ec, e0, eF, eD),
            i.useEffect(() => {
                eg || (0, S.ql)('');
            }, [eg]),
            i.useEffect(
                () => (
                    x.default.track(Q.rMx.OPEN_POPOUT, {
                        type: null != eX ? eX : 'Emoji Picker',
                        guild_id: eV
                    }),
                    I.kJ.resetStoreState
                ),
                [eX, eV]
            ),
            i.useEffect(() => () => (0, P.Kw)(P.v6.FAVORITE_EMOJI_TOOLTIP), []),
            i.useLayoutEffect(() => {
                var e;
                let { columnIndex: t, rowIndex: n } = I.kJ.getState().inspectedExpressionPosition;
                (null == (e = e9[n]) ? void 0 : e[t]) == null && 0 !== t && I.kJ.setInspectedExpressionPosition(0, 0);
            }, [e9]),
            i.useEffect(() => {
                if (('' === ej.current && '' !== eU && (0, j.PC)(eJ, l), 0 === e3 && '' !== eU)) ep(eJ, eU);
                else if ('' !== eU && ej.current !== eU) {
                    var e;
                    eh(e3, null != (e = null == e1 ? void 0 : e1.locked.length) ? e : 0, eJ, eU, l);
                }
                ej.current = eU;
            }, [eU, eJ, e3, e1, l]);
        let tu = null != ev ? ev : C ? 'div' : _.VqE,
            td = null != e6;
        if ((null == ek ? void 0 : ek.type) === H.Bg.PREMIUM) {
            let e = R.p.NONE;
            2 === M ? (e = R.p.PARENT_CONTAINER) : 1 === M && (e = R.p.TAB_PARENT_CONTAINER),
                (s = (0, r.jsx)(z.Z, {
                    onLearnMore: ti,
                    emojiDescriptor: ek.emojiDescriptor,
                    pickerIntention: l,
                    analyticsLocation: eJ,
                    onClose: () => eM(null),
                    channel: c,
                    containerContext: e
                }));
        } else
            (null == ek ? void 0 : ek.type) === H.Bg.ROLE_SUBSCRIPTION
                ? (s = (0, r.jsx)(N.Z, {
                      onClose: () => eM(null),
                      guildId: ek.guildId,
                      emojiId: ek.emojiId
                  }))
                : eZ && !eW && (s = (0, r.jsx)(B.Z, { onDismiss: () => eH(!1) }));
        let tf = (e, t) => {
                tr(e, er(et({}, t), { isBurst: eZ }));
            },
            t_ = () => {
                var e;
                eH(!eZ), null == (e = eF.current) || e.focus();
            },
            tp = (0, r.jsx)(Z.Z, {
                pickerIntention: l,
                emojiListRef: eB,
                onKeyDown: (e) => {
                    null == tl || tl(e), null == ew || ew(e);
                },
                searchBarRef: eF,
                onFocus: eR,
                autoFocus: eD,
                accessory: eL,
                headerClassName: eb,
                hasTabWrapper: C,
                diversitySurrogate: e0,
                isBurstReaction: eZ,
                onBurstReactionToggle: t_,
                renderHeader: eT
            }),
            th = [];
        l === J.Hz.REACTION && th.push(d.z.SUPER_REACTIONS_NITRO_MARKETING), y.ZP.hasFavoriteEmojis(eV) || th.push(d.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tm = (0, r.jsx)(
            h.Z,
            er(et({}, eJ), {
                children: (0, r.jsxs)(tu, {
                    id: q.cZ,
                    'aria-labelledby': C ? q.td : void 0,
                    role: C ? 'tabpanel' : void 0,
                    className: o()($.wrapper, {
                        [$.emojiPickerHasTabWrapper]: C,
                        [$.isBurstReactionPicker]: eZ && eW
                    }),
                    children: [
                        C ? null : tp,
                        (0, r.jsxs)('div', {
                            className: o()($.emojiPicker, eE),
                            onScroll: es,
                            children: [
                                C ? tp : null,
                                (0, r.jsxs)('div', {
                                    className: $.bodyWrapper,
                                    ref: eG,
                                    children: [
                                        (0, r.jsx)(K.Z, {
                                            channel: c,
                                            closePopout: p
                                        }),
                                        (0, r.jsx)(b.ZP, {
                                            contentTypes: th,
                                            children: (e) => {
                                                let { visibleContent: t, markAsDismissed: n } = e;
                                                if (t === d.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return (0, r.jsx)(V.Z, { markAsDismissed: () => n(X.L.UNKNOWN) });
                                            }
                                        }),
                                        eI
                                            ? null
                                            : (0, r.jsx)(
                                                  'div',
                                                  er(
                                                      et(
                                                          {
                                                              className: $.emojiPickerListWrapper,
                                                              id: q.Vr
                                                          },
                                                          ts
                                                      ),
                                                      {
                                                          children: td
                                                              ? (0, r.jsx)(W.Z, {
                                                                    collapsedSections: e4,
                                                                    diversitySurrogate: e0,
                                                                    emojiGrid: e9,
                                                                    emojiListRef: eB,
                                                                    emojiSize: T,
                                                                    getEmojiItemProps: ta,
                                                                    getEmojiRowProps: to,
                                                                    gridWidth: e6,
                                                                    isUsingKeyboardNavigation: tc,
                                                                    onEmojiSelect: tf,
                                                                    onSelectSoundmoji: el,
                                                                    setUpsellConfigs: eM,
                                                                    rowCount: e9.length,
                                                                    rowCountBySection: e8,
                                                                    sectionDescriptors: e7,
                                                                    setCollapsedSections: e5,
                                                                    channelGuildId: eV,
                                                                    channelId: null == c ? void 0 : c.id,
                                                                    messageId: eS,
                                                                    isBurstReaction: eZ,
                                                                    listHeaderClassName: eA
                                                                })
                                                              : null
                                                      }
                                                  )
                                              )
                                    ]
                                }),
                                (0, r.jsx)(Y.k, {
                                    emojiGrid: e9,
                                    className: $.inspector,
                                    guildId: eV,
                                    pickerIntention: l,
                                    channel: c
                                }),
                                s
                            ]
                        }),
                        eI
                            ? null
                            : (0, r.jsx)(F.Z, {
                                  className: o()($.categoryList, eN),
                                  emojiListRef: eB,
                                  sectionDescriptors: e7,
                                  intention: l,
                                  channel: c,
                                  shouldShowSoundmojiInEmojiPicker: eC,
                                  showOnlyUnicode: eP
                              })
                    ]
                })
            })
        );
        return (0, r.jsx)(E.Gt, {
            value: e$,
            children: tm
        });
    },
    eE = i.memo(i.forwardRef(eg));
