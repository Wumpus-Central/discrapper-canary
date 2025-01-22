r.d(n, {
    v: function () {
        return i;
    }
});
var i,
    a = r(47120);
var o = r(653041);
var s = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(954955),
    f = r.n(d),
    p = r(611144),
    h = r(442837),
    _ = r(704215),
    m = r(477690),
    g = r(481060),
    E = r(80932),
    v = r(410575),
    y = r(2052),
    b = r(100527),
    I = r(906732),
    T = r(243778),
    S = r(339085),
    A = r(438332),
    C = r(664437),
    N = r(806966),
    R = r(28546),
    O = r(691251),
    D = r(98528),
    L = r(770812),
    x = r(434404),
    w = r(536442),
    P = r(609218),
    M = r(695346),
    k = r(984933),
    U = r(594174),
    B = r(626135),
    G = r(111361),
    Z = r(624138),
    F = r(543241),
    V = r(253696),
    j = r(199257),
    H = r(636411),
    Y = r(380331),
    W = r(170762),
    K = r(22363),
    z = r(784222),
    q = r(141507),
    Q = r(669040),
    X = r(901963),
    J = r(212263),
    $ = r(149203),
    ee = r(981631),
    et = r(921944),
    en = r(185923),
    er = r(405156);
let ei = (0, Z.Mg)(m.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    ea = (0, Z.Mg)(m.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    eo = 8,
    es = (e) => e.stopPropagation();
!(function (e) {
    (e[(e.NONE = 0)] = 'NONE'), (e[(e.TABS_EXPRESSION_PICKER = 1)] = 'TABS_EXPRESSION_PICKER'), (e[(e.NO_TABS_EXPRESSION_PICKER = 2)] = 'NO_TABS_EXPRESSION_PICKER');
})(i || (i = {}));
let el = (e, n) => {
        N.kJ.setInspectedExpressionPosition(e, n, O.u.GRID_NAVIGATOR_EVENT);
    },
    eu = (e) => {
        let { analyticsLocation: n, pickerIntention: r, columnCounts: i, onSelectEmoji: a, emojiGrid: o, emojiList: s, channelGuildId: u, isBurstReaction: c } = e,
            d = (0, h.e7)([S.ZP], () => S.ZP.getDisambiguatedEmojiContext(u), [u]),
            f = l.useCallback(
                (e, i) => {
                    switch (e.type) {
                        case z.ld.CREATE_EMOJI:
                            a(void 0, !0), x.Z.open(e.guildId, ee.pNK.EMOJI);
                            return;
                        case z.ld.EMOJI: {
                            if (null != e.emoji && i.altKey) {
                                d.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                    ? (0, E.Xe)(e.emoji)
                                    : ((0, F.J1)({
                                          emoji: e.emoji,
                                          location: {
                                              ...n,
                                              object: ee.qAy.EMOJI
                                          }
                                      }),
                                      (0, E.$K)(e.emoji));
                                return;
                            }
                            let o = {
                                page: null != u ? ee.ZY5.GUILD_CHANNEL : ee.ZY5.DM_CHANNEL,
                                section: ee.jXE.EMOJI_PICKER_POPOUT,
                                object: ee.qAy.EMOJI
                            };
                            c &&
                                (o = {
                                    page: null != u ? ee.ZY5.GUILD_CHANNEL : ee.ZY5.DM_CHANNEL,
                                    section: ee.jXE.EMOJI_PICKER_POPOUT,
                                    object: ee.qAy.EMOJI
                                }),
                                (0, F.fe)({
                                    emoji: e.emoji,
                                    location: o,
                                    pickerIntention: r,
                                    category: e.category,
                                    subCategory: e.subCategory,
                                    newlyAddedHighlight: e.subCategory === $.t0.NEWLY_ADDED_EMOJI && A.Z.isNewerThanLastSeen(u, e.emoji.id)
                                }),
                                a(e.emoji, !i.shiftKey, c);
                        }
                    }
                },
                [a, u, r, d, n, c]
            ),
            {
                gridDispatch: _,
                getItemProps: m,
                getRowProps: g,
                gridContainerProps: v,
                handleGridContainerKeyDown: y,
                isUsingKeyboardNavigation: b
            } = (0, D.VO)({
                columnCounts: i,
                gridNavigatorId: $.Vr,
                itemGrid: o,
                itemList: s,
                onGridNavigatorItemSelect: f,
                onGridNavigatorPositionChange: el
            });
        return (
            l.useEffect(
                () =>
                    N.kJ.subscribe(
                        (e) => e.inspectedExpressionPosition,
                        (e) => {
                            if (null == e) return;
                            let { columnIndex: n, rowIndex: r, source: i } = e;
                            i !== O.u.GRID_NAVIGATOR_EVENT &&
                                _({
                                    type: p.s.SET_FOCUSED_POSITION,
                                    x: n,
                                    y: r
                                });
                        }
                    ),
                [_]
            ),
            {
                getItemProps: m,
                getRowProps: g,
                gridContainerProps: v,
                handleGridContainerKeyDown: y,
                isUsingKeyboardNavigation: b
            }
        );
    },
    ec = (e, n) => {
        let [r, i] = l.useState(null);
        l.useEffect(() => {
            if (null != r) {
                var e;
                null === (e = n.current) || void 0 === e || e.scrollToSectionTop(r), i(null);
            }
        }, [n, r]),
            l.useEffect(() => {
                i(N.kJ.getState().activeCategoryIndex);
            }, [e]);
    },
    ed = (e, n, r, i) => {
        l.useLayoutEffect(() => {
            if (i) {
                var e;
                null === (e = r.current) || void 0 === e || e.focus();
            }
        }, [e, n, r, i]);
    },
    ef = 200,
    ep = f()(F.to, ef),
    eh = f()(F.jA, ef),
    e_ = {
        section: void 0,
        openPopoutType: void 0
    },
    em = function (e, n) {
        var r, i;
        let a,
            { pickerIntention: o, channel: u, guildId: d, closePopout: f, emojiSize: p = $.Su.MEDIUM, hasTabWrapper: m = !1, containerContext: E = 0, includeCreateEmojiButton: O, onSelectEmoji: x, onSelectSoundmoji: Z, containerWidth: el, onNavigateAway: ef, persistSearch: em, className: eg, headerClassName: eE, analyticsOverride: ev = e_, searchProps: ey = {}, wrapper: eb, shouldHidePickerActions: eI = !1, messageId: eT, renderHeader: eS, listHeaderClassName: eA, categoryListClassName: eC, shouldShowSoundmojiInEmojiPicker: eN = !1 } = e,
            { onFocus: eR, onKeyDown: eO, autoFocus: eD = !0, accessory: eL } = ey,
            ex = (0, h.e7)([k.ZP], () => (null != d ? k.ZP.getDefaultChannel(d) : null), [d]),
            [ew, eP] = l.useState(null),
            eM = l.useRef(''),
            ek = (0, R.Iu)((e) => e.searchQuery),
            eU = l.useRef(null),
            eB = l.useRef(null),
            eG = l.useRef(null);
        null == u && null != ex && (u = ex);
        let eZ = null !== (i = null !== (r = null == u ? void 0 : u.getGuildId()) && void 0 !== r ? r : d) && void 0 !== i ? i : null,
            [eF, eV] = l.useState(!1),
            ej = U.default.getCurrentUser(),
            eH = (0, G.I5)(ej);
        l.useImperativeHandle(n, () => ({ onPickerOpen: te }));
        let { location: eY } = (0, y.O)(),
            { page: eW, section: eK, object: ez, openPopoutType: eq } = ev,
            eQ = l.useMemo(
                () => ({
                    ...eY,
                    section: null != eK ? eK : ee.jXE.EMOJI_PICKER_POPOUT
                }),
                [eY, eK]
            ),
            { analyticsLocations: eX } = (0, I.ZP)(b.Z.EMOJI_PICKER),
            { diversitySurrogate: eJ } = (0, h.cj)([S.ZP], () => ({ diversitySurrogate: S.ZP.diversitySurrogate })),
            e$ = (0, F.DV)(ek, u, o),
            e0 = null == e$ ? 0 : e$.locked.length + e$.unlocked.length,
            e1 = M.d4.useSetting(),
            e2 = l.useMemo(() => new Set(e1), [e1]),
            e3 = l.useCallback((e) => {
                M.d4.updateSetting(Array.from(e));
            }, []),
            e4 = (0, D.ep)({
                gridWrapperRef: eU,
                containerWidth: el,
                listPaddingLeft: ea,
                listScrollbarWidth: eo
            }),
            {
                rowCountBySection: e6,
                sectionDescriptors: e5,
                emojiGrid: e7,
                columnCounts: e8
            } = (0, z.YH)({
                gridWidth: e4,
                channel: u,
                includeCreateEmojiButton: O,
                pickerIntention: o,
                emojiSearchResults: e$,
                collapsedSections: e2,
                emojiPaddingHorizontal: ei,
                emojiSpriteSize: p,
                shouldShowSoundmojiInEmojiPicker: eN
            }),
            { newlyAddedEmojis: e9 } = (0, j.Z)(eZ, o);
        (0, V.b)({
            intention: o,
            isBurstReaction: eF,
            analyticsObject: ez
        });
        let te = l.useCallback(() => {
                let e = e9.length > 0 ? e9[0].id : null;
                (0, C.pr)(eZ, e),
                    (0, V.Z)({
                        intention: o,
                        isBurstReaction: eF,
                        analyticsObject: ez
                    });
            }, [e9, eZ, o, eF, ez]),
            tt = (0, z.rf)({
                pickerIntention: o,
                selectedChannel: u,
                closePopout: f,
                onSelectEmoji: x,
                setUpsellConfigs: eP,
                emojiSelectAnalytics: (e) => {
                    '' !== ek
                        ? (0, F.y$)({
                              emoji: e.emoji,
                              location: {
                                  ...eQ,
                                  object: ee.qAy.EMOJI
                              },
                              searchQuery: ek,
                              intention: o
                          })
                        : (0, F.fe)({
                              emoji: e.emoji,
                              location: {
                                  ...eQ,
                                  object: null != ez ? ez : ee.qAy.EMOJI,
                                  ...(null != eW && { page: eW })
                              },
                              pickerIntention: o,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight: e.subCategory === $.t0.NEWLY_ADDED_EMOJI && A.Z.isNewerThanLastSeen(eZ, e.emoji.id),
                              isBurstReaction: eF
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, F.J1)({
                        emoji: e.emoji,
                        location: {
                            ...eQ,
                            object: ee.qAy.EMOJI
                        }
                    });
                }
            }),
            tn = l.useCallback(() => {
                f(), null == ef || ef();
            }, [f, ef]),
            {
                getItemProps: tr,
                getRowProps: ti,
                gridContainerProps: ta,
                handleGridContainerKeyDown: to,
                isUsingKeyboardNavigation: ts
            } = eu({
                pickerIntention: o,
                analyticsLocation: eQ,
                columnCounts: e8,
                onSelectEmoji: x,
                emojiGrid: e7,
                emojiList: eB,
                channelGuildId: eZ,
                isBurstReaction: eF
            });
        ec(el, eB),
            ed(el, eJ, eG, eD),
            l.useEffect(() => {
                !em && (0, R.ql)('');
            }, [em]),
            l.useEffect(
                () => (
                    B.default.track(ee.rMx.OPEN_POPOUT, {
                        type: null != eq ? eq : 'Emoji Picker',
                        guild_id: eZ
                    }),
                    N.kJ.resetStoreState
                ),
                [eq, eZ]
            ),
            l.useEffect(() => () => (0, w.Kw)(w.v6.FAVORITE_EMOJI_TOOLTIP), []),
            l.useLayoutEffect(() => {
                var e;
                let { columnIndex: n, rowIndex: r } = N.kJ.getState().inspectedExpressionPosition;
                (null === (e = e7[r]) || void 0 === e ? void 0 : e[n]) == null && 0 !== n && N.kJ.setInspectedExpressionPosition(0, 0);
            }, [e7]),
            l.useEffect(() => {
                if (('' === eM.current && '' !== ek && (0, F.PC)(eQ, o), 0 === e0 && '' !== ek)) ep(eQ, ek);
                else if ('' !== ek && eM.current !== ek) {
                    var e;
                    eh(e0, null !== (e = null == e$ ? void 0 : e$.locked.length) && void 0 !== e ? e : 0, eQ, ek, o);
                }
                eM.current = ek;
            }, [ek, eQ, e0, e$, o]);
        let tl = null != eb ? eb : m ? 'div' : g.Dialog,
            tu = null != e4;
        if ((null == ew ? void 0 : ew.type) === z.Bg.PREMIUM) {
            let e = P.p.NONE;
            2 === E ? (e = P.p.PARENT_CONTAINER) : 1 === E && (e = P.p.TAB_PARENT_CONTAINER),
                (a = (0, s.jsx)(J.Z, {
                    onLearnMore: tn,
                    emojiDescriptor: ew.emojiDescriptor,
                    pickerIntention: o,
                    analyticsLocation: eQ,
                    onClose: () => eP(null),
                    channel: u,
                    containerContext: e
                }));
        } else
            (null == ew ? void 0 : ew.type) === z.Bg.ROLE_SUBSCRIPTION
                ? (a = (0, s.jsx)(L.Z, {
                      onClose: () => eP(null),
                      guildId: ew.guildId,
                      emojiId: ew.emojiId
                  }))
                : eF && !eH && (a = (0, s.jsx)(H.Z, { onDismiss: () => eV(!1) }));
        let tc = (e, n) => {
                tt(e, {
                    ...n,
                    isBurst: eF
                });
            },
            td = () => {
                var e;
                eV(!eF), null === (e = eG.current) || void 0 === e || e.focus();
            },
            tf = (0, s.jsx)(K.Z, {
                pickerIntention: o,
                emojiListRef: eB,
                onKeyDown: (e) => {
                    null == to || to(e), null == eO || eO(e);
                },
                searchBarRef: eG,
                onFocus: eR,
                autoFocus: eD,
                accessory: eL,
                headerClassName: eE,
                hasTabWrapper: m,
                diversitySurrogate: eJ,
                isBurstReaction: eF,
                onBurstReactionToggle: td,
                renderHeader: eS
            }),
            tp = [];
        o === en.Hz.REACTION && tp.push(_.z.SUPER_REACTIONS_NITRO_MARKETING), !S.ZP.hasFavoriteEmojis(eZ) && tp.push(_.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let th = (0, s.jsx)(v.Z, {
            ...eQ,
            children: (0, s.jsxs)(tl, {
                id: $.cZ,
                'aria-labelledby': m ? $.td : void 0,
                role: m ? 'tabpanel' : void 0,
                className: c()(er.wrapper, {
                    [er.emojiPickerHasTabWrapper]: m,
                    [er.isBurstReactionPicker]: eF && eH
                }),
                children: [
                    m ? null : tf,
                    (0, s.jsxs)('div', {
                        className: c()(er.emojiPicker, eg),
                        onScroll: es,
                        children: [
                            m ? tf : null,
                            (0, s.jsxs)('div', {
                                className: er.bodyWrapper,
                                ref: eU,
                                children: [
                                    (0, s.jsx)(X.Z, {
                                        channel: u,
                                        closePopout: f
                                    }),
                                    (0, s.jsx)(T.ZP, {
                                        contentTypes: tp,
                                        children: (e) => {
                                            let { visibleContent: n, markAsDismissed: r } = e;
                                            if (n === _.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return (0, s.jsx)(W.Z, { markAsDismissed: () => r(et.L.UNKNOWN) });
                                        }
                                    }),
                                    eI
                                        ? null
                                        : (0, s.jsx)('div', {
                                              className: er.emojiPickerListWrapper,
                                              id: $.Vr,
                                              ...ta,
                                              children: tu
                                                  ? (0, s.jsx)(Q.Z, {
                                                        collapsedSections: e2,
                                                        diversitySurrogate: eJ,
                                                        emojiGrid: e7,
                                                        emojiListRef: eB,
                                                        emojiSize: p,
                                                        getEmojiItemProps: tr,
                                                        getEmojiRowProps: ti,
                                                        gridWidth: e4,
                                                        isUsingKeyboardNavigation: ts,
                                                        onEmojiSelect: tc,
                                                        onSelectSoundmoji: Z,
                                                        setUpsellConfigs: eP,
                                                        rowCount: e7.length,
                                                        rowCountBySection: e6,
                                                        sectionDescriptors: e5,
                                                        setCollapsedSections: e3,
                                                        channelGuildId: eZ,
                                                        channelId: null == u ? void 0 : u.id,
                                                        messageId: eT,
                                                        isBurstReaction: eF,
                                                        listHeaderClassName: eA
                                                    })
                                                  : null
                                          })
                                ]
                            }),
                            (0, s.jsx)(q.k, {
                                emojiGrid: e7,
                                className: er.inspector,
                                guildId: eZ,
                                pickerIntention: o,
                                channel: u
                            }),
                            a
                        ]
                    }),
                    eI
                        ? null
                        : (0, s.jsx)(Y.Z, {
                              className: c()(er.categoryList, eC),
                              emojiListRef: eB,
                              sectionDescriptors: e5,
                              intention: o,
                              channel: u,
                              shouldShowSoundmojiInEmojiPicker: eN
                          })
                ]
            })
        });
        return (0, s.jsx)(I.Gt, {
            value: eX,
            children: th
        });
    };
n.Z = l.memo(l.forwardRef(em));
