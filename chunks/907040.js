n.d(t, {
    Z: () => ep,
    v: () => er
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(954955),
    l = n.n(o),
    u = n(611144),
    c = n(442837),
    d = n(704215),
    f = n(477690),
    _ = n(481060),
    p = n(80932),
    h = n(410575),
    m = n(2052),
    g = n(100527),
    E = n(906732),
    v = n(243778),
    y = n(339085),
    I = n(438332),
    T = n(664437),
    b = n(806966),
    S = n(28546),
    A = n(691251),
    N = n(98528),
    C = n(770812),
    R = n(434404),
    O = n(536442),
    D = n(609218),
    L = n(695346),
    x = n(984933),
    P = n(594174),
    w = n(626135),
    M = n(111361),
    k = n(624138),
    U = n(543241),
    G = n(253696),
    B = n(199257),
    Z = n(636411),
    F = n(380331),
    V = n(170762),
    j = n(22363),
    H = n(784222),
    Y = n(141507),
    W = n(669040),
    K = n(901963),
    z = n(212263),
    q = n(149203),
    Q = n(981631),
    X = n(921944),
    J = n(185923),
    $ = n(754595);
let ee = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    et = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    en = 8,
    ei = (e) => e.stopPropagation();
var er = (function (e) {
    return (e[(e.NONE = 0)] = 'NONE'), (e[(e.TABS_EXPRESSION_PICKER = 1)] = 'TABS_EXPRESSION_PICKER'), (e[(e.NO_TABS_EXPRESSION_PICKER = 2)] = 'NO_TABS_EXPRESSION_PICKER'), e;
})({});
let ea = (e, t) => {
        b.kJ.setInspectedExpressionPosition(e, t, A.u.GRID_NAVIGATOR_EVENT);
    },
    es = (e) => {
        let { analyticsLocation: t, pickerIntention: n, columnCounts: i, onSelectEmoji: a, emojiGrid: s, emojiList: o, channelGuildId: l, isBurstReaction: d } = e,
            f = (0, c.e7)([y.ZP], () => y.ZP.getDisambiguatedEmojiContext(l), [l]),
            _ = r.useCallback(
                (e, i) => {
                    switch (e.type) {
                        case H.ld.CREATE_EMOJI:
                            a(void 0, !0), R.Z.open(e.guildId, Q.pNK.EMOJI);
                            return;
                        case H.ld.EMOJI: {
                            if (null != e.emoji && i.altKey) {
                                f.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                    ? (0, p.Xe)(e.emoji)
                                    : ((0, U.J1)({
                                          emoji: e.emoji,
                                          location: {
                                              ...t,
                                              object: Q.qAy.EMOJI
                                          }
                                      }),
                                      (0, p.$K)(e.emoji));
                                return;
                            }
                            let r = {
                                page: null != l ? Q.ZY5.GUILD_CHANNEL : Q.ZY5.DM_CHANNEL,
                                section: Q.jXE.EMOJI_PICKER_POPOUT,
                                object: Q.qAy.EMOJI
                            };
                            d &&
                                (r = {
                                    page: null != l ? Q.ZY5.GUILD_CHANNEL : Q.ZY5.DM_CHANNEL,
                                    section: Q.jXE.EMOJI_PICKER_POPOUT,
                                    object: Q.qAy.EMOJI
                                }),
                                (0, U.fe)({
                                    emoji: e.emoji,
                                    location: r,
                                    pickerIntention: n,
                                    category: e.category,
                                    subCategory: e.subCategory,
                                    newlyAddedHighlight: e.subCategory === q.t0.NEWLY_ADDED_EMOJI && I.Z.isNewerThanLastSeen(l, e.emoji.id)
                                }),
                                a(e.emoji, !i.shiftKey, d);
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
                handleGridContainerKeyDown: v,
                isUsingKeyboardNavigation: T
            } = (0, N.VO)({
                columnCounts: i,
                gridNavigatorId: q.Vr,
                itemGrid: s,
                itemList: o,
                onGridNavigatorItemSelect: _,
                onGridNavigatorPositionChange: ea
            });
        return (
            r.useEffect(
                () =>
                    b.kJ.subscribe(
                        (e) => e.inspectedExpressionPosition,
                        (e) => {
                            if (null == e) return;
                            let { columnIndex: t, rowIndex: n, source: i } = e;
                            i !== A.u.GRID_NAVIGATOR_EVENT &&
                                h({
                                    type: u.s.SET_FOCUSED_POSITION,
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
                handleGridContainerKeyDown: v,
                isUsingKeyboardNavigation: T
            }
        );
    },
    eo = (e, t) => {
        let [n, i] = r.useState(null);
        r.useEffect(() => {
            if (null != n) {
                var e;
                null === (e = t.current) || void 0 === e || e.scrollToSectionTop(n), i(null);
            }
        }, [t, n]),
            r.useEffect(() => {
                i(b.kJ.getState().activeCategoryIndex);
            }, [e]);
    },
    el = (e, t, n, i) => {
        r.useLayoutEffect(() => {
            if (i) {
                var e;
                null === (e = n.current) || void 0 === e || e.focus();
            }
        }, [e, t, n, i]);
    },
    eu = 200,
    ec = l()(U.to, eu),
    ed = l()(U.jA, eu),
    ef = {
        section: void 0,
        openPopoutType: void 0
    },
    e_ = function (e, t) {
        var n, a;
        let o,
            { pickerIntention: l, channel: u, guildId: f, closePopout: p, emojiSize: A = q.Su.MEDIUM, hasTabWrapper: R = !1, containerContext: k = 0, includeCreateEmojiButton: er, onSelectEmoji: ea, onSelectSoundmoji: eu, containerWidth: e_, onNavigateAway: ep, persistSearch: eh, className: em, headerClassName: eg, analyticsOverride: eE = ef, searchProps: ev = {}, wrapper: ey, shouldHidePickerActions: eI = !1, messageId: eT, renderHeader: eb, listHeaderClassName: eS, categoryListClassName: eA, shouldShowSoundmojiInEmojiPicker: eN = !1 } = e,
            { onFocus: eC, onKeyDown: eR, autoFocus: eO = !0, accessory: eD } = ev,
            eL = (0, c.e7)([x.ZP], () => (null != f ? x.ZP.getDefaultChannel(f) : null), [f]),
            [ex, eP] = r.useState(null),
            ew = r.useRef(''),
            eM = (0, S.Iu)((e) => e.searchQuery),
            ek = r.useRef(null),
            eU = r.useRef(null),
            eG = r.useRef(null);
        null == u && null != eL && (u = eL);
        let eB = null !== (a = null !== (n = null == u ? void 0 : u.getGuildId()) && void 0 !== n ? n : f) && void 0 !== a ? a : null,
            [eZ, eF] = r.useState(!1),
            eV = P.default.getCurrentUser(),
            ej = (0, M.I5)(eV);
        r.useImperativeHandle(t, () => ({ onPickerOpen: e9 }));
        let { location: eH } = (0, m.O)(),
            { page: eY, section: eW, object: eK, openPopoutType: ez } = eE,
            eq = r.useMemo(
                () => ({
                    ...eH,
                    section: null != eW ? eW : Q.jXE.EMOJI_PICKER_POPOUT
                }),
                [eH, eW]
            ),
            { analyticsLocations: eQ } = (0, E.ZP)(g.Z.EMOJI_PICKER),
            { diversitySurrogate: eX } = (0, c.cj)([y.ZP], () => ({ diversitySurrogate: y.ZP.diversitySurrogate })),
            eJ = (0, U.DV)(eM, u, l),
            e$ = null == eJ ? 0 : eJ.locked.length + eJ.unlocked.length,
            e0 = L.d4.useSetting(),
            e1 = r.useMemo(() => new Set(e0), [e0]),
            e2 = r.useCallback((e) => {
                L.d4.updateSetting(Array.from(e));
            }, []),
            e3 = (0, N.ep)({
                gridWrapperRef: ek,
                containerWidth: e_,
                listPaddingLeft: et,
                listScrollbarWidth: en
            }),
            {
                rowCountBySection: e4,
                sectionDescriptors: e6,
                emojiGrid: e5,
                columnCounts: e7
            } = (0, H.YH)({
                gridWidth: e3,
                channel: u,
                includeCreateEmojiButton: er,
                pickerIntention: l,
                emojiSearchResults: eJ,
                collapsedSections: e1,
                emojiPaddingHorizontal: ee,
                emojiSpriteSize: A,
                shouldShowSoundmojiInEmojiPicker: eN
            }),
            { newlyAddedEmojis: e8 } = (0, B.Z)(eB, l);
        (0, G.b)({
            intention: l,
            isBurstReaction: eZ,
            analyticsObject: eK
        });
        let e9 = r.useCallback(() => {
                let e = e8.length > 0 ? e8[0].id : null;
                (0, T.pr)(eB, e),
                    (0, G.Z)({
                        intention: l,
                        isBurstReaction: eZ,
                        analyticsObject: eK
                    });
            }, [e8, eB, l, eZ, eK]),
            te = (0, H.rf)({
                pickerIntention: l,
                selectedChannel: u,
                closePopout: p,
                onSelectEmoji: ea,
                setUpsellConfigs: eP,
                emojiSelectAnalytics: (e) => {
                    '' !== eM
                        ? (0, U.y$)({
                              emoji: e.emoji,
                              location: {
                                  ...eq,
                                  object: Q.qAy.EMOJI
                              },
                              searchQuery: eM,
                              intention: l
                          })
                        : (0, U.fe)({
                              emoji: e.emoji,
                              location: {
                                  ...eq,
                                  object: null != eK ? eK : Q.qAy.EMOJI,
                                  ...(null != eY && { page: eY })
                              },
                              pickerIntention: l,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight: e.subCategory === q.t0.NEWLY_ADDED_EMOJI && I.Z.isNewerThanLastSeen(eB, e.emoji.id),
                              isBurstReaction: eZ
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, U.J1)({
                        emoji: e.emoji,
                        location: {
                            ...eq,
                            object: Q.qAy.EMOJI
                        }
                    });
                }
            }),
            tt = r.useCallback(() => {
                p(), null == ep || ep();
            }, [p, ep]),
            {
                getItemProps: tn,
                getRowProps: ti,
                gridContainerProps: tr,
                handleGridContainerKeyDown: ta,
                isUsingKeyboardNavigation: ts
            } = es({
                pickerIntention: l,
                analyticsLocation: eq,
                columnCounts: e7,
                onSelectEmoji: ea,
                emojiGrid: e5,
                emojiList: eU,
                channelGuildId: eB,
                isBurstReaction: eZ
            });
        eo(e_, eU),
            el(e_, eX, eG, eO),
            r.useEffect(() => {
                eh || (0, S.ql)('');
            }, [eh]),
            r.useEffect(
                () => (
                    w.default.track(Q.rMx.OPEN_POPOUT, {
                        type: null != ez ? ez : 'Emoji Picker',
                        guild_id: eB
                    }),
                    b.kJ.resetStoreState
                ),
                [ez, eB]
            ),
            r.useEffect(() => () => (0, O.Kw)(O.v6.FAVORITE_EMOJI_TOOLTIP), []),
            r.useLayoutEffect(() => {
                var e;
                let { columnIndex: t, rowIndex: n } = b.kJ.getState().inspectedExpressionPosition;
                (null === (e = e5[n]) || void 0 === e ? void 0 : e[t]) == null && 0 !== t && b.kJ.setInspectedExpressionPosition(0, 0);
            }, [e5]),
            r.useEffect(() => {
                if (('' === ew.current && '' !== eM && (0, U.PC)(eq, l), 0 === e$ && '' !== eM)) ec(eq, eM);
                else if ('' !== eM && ew.current !== eM) {
                    var e;
                    ed(e$, null !== (e = null == eJ ? void 0 : eJ.locked.length) && void 0 !== e ? e : 0, eq, eM, l);
                }
                ew.current = eM;
            }, [eM, eq, e$, eJ, l]);
        let to = null != ey ? ey : R ? 'div' : _.VqE,
            tl = null != e3;
        if ((null == ex ? void 0 : ex.type) === H.Bg.PREMIUM) {
            let e = D.p.NONE;
            2 === k ? (e = D.p.PARENT_CONTAINER) : 1 === k && (e = D.p.TAB_PARENT_CONTAINER),
                (o = (0, i.jsx)(z.Z, {
                    onLearnMore: tt,
                    emojiDescriptor: ex.emojiDescriptor,
                    pickerIntention: l,
                    analyticsLocation: eq,
                    onClose: () => eP(null),
                    channel: u,
                    containerContext: e
                }));
        } else
            (null == ex ? void 0 : ex.type) === H.Bg.ROLE_SUBSCRIPTION
                ? (o = (0, i.jsx)(C.Z, {
                      onClose: () => eP(null),
                      guildId: ex.guildId,
                      emojiId: ex.emojiId
                  }))
                : eZ && !ej && (o = (0, i.jsx)(Z.Z, { onDismiss: () => eF(!1) }));
        let tu = (e, t) => {
                te(e, {
                    ...t,
                    isBurst: eZ
                });
            },
            tc = () => {
                var e;
                eF(!eZ), null === (e = eG.current) || void 0 === e || e.focus();
            },
            td = (0, i.jsx)(j.Z, {
                pickerIntention: l,
                emojiListRef: eU,
                onKeyDown: (e) => {
                    null == ta || ta(e), null == eR || eR(e);
                },
                searchBarRef: eG,
                onFocus: eC,
                autoFocus: eO,
                accessory: eD,
                headerClassName: eg,
                hasTabWrapper: R,
                diversitySurrogate: eX,
                isBurstReaction: eZ,
                onBurstReactionToggle: tc,
                renderHeader: eb
            }),
            tf = [];
        l === J.Hz.REACTION && tf.push(d.z.SUPER_REACTIONS_NITRO_MARKETING), y.ZP.hasFavoriteEmojis(eB) || tf.push(d.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let t_ = (0, i.jsx)(h.Z, {
            ...eq,
            children: (0, i.jsxs)(to, {
                id: q.cZ,
                'aria-labelledby': R ? q.td : void 0,
                role: R ? 'tabpanel' : void 0,
                className: s()($.wrapper, {
                    [$.emojiPickerHasTabWrapper]: R,
                    [$.isBurstReactionPicker]: eZ && ej
                }),
                children: [
                    R ? null : td,
                    (0, i.jsxs)('div', {
                        className: s()($.emojiPicker, em),
                        onScroll: ei,
                        children: [
                            R ? td : null,
                            (0, i.jsxs)('div', {
                                className: $.bodyWrapper,
                                ref: ek,
                                children: [
                                    (0, i.jsx)(K.Z, {
                                        channel: u,
                                        closePopout: p
                                    }),
                                    (0, i.jsx)(v.ZP, {
                                        contentTypes: tf,
                                        children: (e) => {
                                            let { visibleContent: t, markAsDismissed: n } = e;
                                            if (t === d.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return (0, i.jsx)(V.Z, { markAsDismissed: () => n(X.L.UNKNOWN) });
                                        }
                                    }),
                                    eI
                                        ? null
                                        : (0, i.jsx)('div', {
                                              className: $.emojiPickerListWrapper,
                                              id: q.Vr,
                                              ...tr,
                                              children: tl
                                                  ? (0, i.jsx)(W.Z, {
                                                        collapsedSections: e1,
                                                        diversitySurrogate: eX,
                                                        emojiGrid: e5,
                                                        emojiListRef: eU,
                                                        emojiSize: A,
                                                        getEmojiItemProps: tn,
                                                        getEmojiRowProps: ti,
                                                        gridWidth: e3,
                                                        isUsingKeyboardNavigation: ts,
                                                        onEmojiSelect: tu,
                                                        onSelectSoundmoji: eu,
                                                        setUpsellConfigs: eP,
                                                        rowCount: e5.length,
                                                        rowCountBySection: e4,
                                                        sectionDescriptors: e6,
                                                        setCollapsedSections: e2,
                                                        channelGuildId: eB,
                                                        channelId: null == u ? void 0 : u.id,
                                                        messageId: eT,
                                                        isBurstReaction: eZ,
                                                        listHeaderClassName: eS
                                                    })
                                                  : null
                                          })
                                ]
                            }),
                            (0, i.jsx)(Y.k, {
                                emojiGrid: e5,
                                className: $.inspector,
                                guildId: eB,
                                pickerIntention: l,
                                channel: u
                            }),
                            o
                        ]
                    }),
                    eI
                        ? null
                        : (0, i.jsx)(F.Z, {
                              className: s()($.categoryList, eA),
                              emojiListRef: eU,
                              sectionDescriptors: e6,
                              intention: l,
                              channel: u,
                              shouldShowSoundmojiInEmojiPicker: eN
                          })
                ]
            })
        });
        return (0, i.jsx)(E.Gt, {
            value: eQ,
            children: t_
        });
    },
    ep = r.memo(r.forwardRef(e_));
