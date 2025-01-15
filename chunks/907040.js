r.d(n, {
    v: function () {
        return i;
    }
});
var i,
    a = r(47120);
var s = r(653041);
var o = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(954955),
    f = r.n(d),
    _ = r(611144),
    h = r(442837),
    p = r(704215),
    m = r(477690),
    g = r(481060),
    E = r(80932),
    v = r(410575),
    I = r(2052),
    T = r(100527),
    b = r(906732),
    y = r(243778),
    S = r(339085),
    A = r(438332),
    N = r(664437),
    C = r(806966),
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
    F = r(624138),
    Z = r(543241),
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
    er = r(180105);
let ei = (0, F.Mg)(m.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    ea = (0, F.Mg)(m.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    es = 8,
    eo = (e) => e.stopPropagation();
!(function (e) {
    (e[(e.NONE = 0)] = 'NONE'), (e[(e.TABS_EXPRESSION_PICKER = 1)] = 'TABS_EXPRESSION_PICKER'), (e[(e.NO_TABS_EXPRESSION_PICKER = 2)] = 'NO_TABS_EXPRESSION_PICKER');
})(i || (i = {}));
let el = (e, n) => {
        C.kJ.setInspectedExpressionPosition(e, n, O.u.GRID_NAVIGATOR_EVENT);
    },
    eu = (e) => {
        let { analyticsLocation: n, pickerIntention: r, columnCounts: i, onSelectEmoji: a, emojiGrid: s, emojiList: o, channelGuildId: u, isBurstReaction: c } = e,
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
                                    : ((0, Z.J1)({
                                          emoji: e.emoji,
                                          location: {
                                              ...n,
                                              object: ee.qAy.EMOJI
                                          }
                                      }),
                                      (0, E.$K)(e.emoji));
                                return;
                            }
                            let s = {
                                page: null != u ? ee.ZY5.GUILD_CHANNEL : ee.ZY5.DM_CHANNEL,
                                section: ee.jXE.EMOJI_PICKER_POPOUT,
                                object: ee.qAy.EMOJI
                            };
                            c &&
                                (s = {
                                    page: null != u ? ee.ZY5.GUILD_CHANNEL : ee.ZY5.DM_CHANNEL,
                                    section: ee.jXE.EMOJI_PICKER_POPOUT,
                                    object: ee.qAy.EMOJI
                                }),
                                (0, Z.fe)({
                                    emoji: e.emoji,
                                    location: s,
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
                gridDispatch: p,
                getItemProps: m,
                getRowProps: g,
                gridContainerProps: v,
                handleGridContainerKeyDown: I,
                isUsingKeyboardNavigation: T
            } = (0, D.VO)({
                columnCounts: i,
                gridNavigatorId: $.Vr,
                itemGrid: s,
                itemList: o,
                onGridNavigatorItemSelect: f,
                onGridNavigatorPositionChange: el
            });
        return (
            l.useEffect(
                () =>
                    C.kJ.subscribe(
                        (e) => e.inspectedExpressionPosition,
                        (e) => {
                            if (null == e) return;
                            let { columnIndex: n, rowIndex: r, source: i } = e;
                            i !== O.u.GRID_NAVIGATOR_EVENT &&
                                p({
                                    type: _.s.SET_FOCUSED_POSITION,
                                    x: n,
                                    y: r
                                });
                        }
                    ),
                [p]
            ),
            {
                getItemProps: m,
                getRowProps: g,
                gridContainerProps: v,
                handleGridContainerKeyDown: I,
                isUsingKeyboardNavigation: T
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
                i(C.kJ.getState().activeCategoryIndex);
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
    e_ = f()(Z.to, ef),
    eh = f()(Z.jA, ef),
    ep = {
        section: void 0,
        openPopoutType: void 0
    },
    em = function (e, n) {
        var r, i;
        let a,
            { pickerIntention: s, channel: u, guildId: d, closePopout: f, emojiSize: _ = $.Su.MEDIUM, hasTabWrapper: m = !1, containerContext: E = 0, includeCreateEmojiButton: O, onSelectEmoji: x, onSelectSoundmoji: F, containerWidth: el, onNavigateAway: ef, persistSearch: em, className: eg, headerClassName: eE, analyticsOverride: ev = ep, searchProps: eI = {}, wrapper: eT, shouldHidePickerActions: eb = !1, messageId: ey, renderHeader: eS, listHeaderClassName: eA, categoryListClassName: eN, shouldShowSoundmojiInEmojiPicker: eC = !1 } = e,
            { onFocus: eR, onKeyDown: eO, autoFocus: eD = !0, accessory: eL } = eI,
            ex = (0, h.e7)([k.ZP], () => (null != d ? k.ZP.getDefaultChannel(d) : null), [d]),
            [ew, eP] = l.useState(null),
            eM = l.useRef(''),
            ek = (0, R.Iu)((e) => e.searchQuery),
            eU = l.useRef(null),
            eB = l.useRef(null),
            eG = l.useRef(null);
        null == u && null != ex && (u = ex);
        let eF = null !== (i = null !== (r = null == u ? void 0 : u.getGuildId()) && void 0 !== r ? r : d) && void 0 !== i ? i : null,
            [eZ, eV] = l.useState(!1),
            ej = U.default.getCurrentUser(),
            eH = (0, G.I5)(ej);
        l.useImperativeHandle(n, () => ({ onPickerOpen: te }));
        let { location: eY } = (0, I.O)(),
            { page: eW, section: eK, object: ez, openPopoutType: eq } = ev,
            eQ = l.useMemo(
                () => ({
                    ...eY,
                    section: null != eK ? eK : ee.jXE.EMOJI_PICKER_POPOUT
                }),
                [eY, eK]
            ),
            { analyticsLocations: eX } = (0, b.ZP)(T.Z.EMOJI_PICKER),
            { diversitySurrogate: eJ } = (0, h.cj)([S.ZP], () => ({ diversitySurrogate: S.ZP.diversitySurrogate })),
            e$ = (0, Z.DV)(ek, u, s),
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
                listScrollbarWidth: es
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
                pickerIntention: s,
                emojiSearchResults: e$,
                collapsedSections: e2,
                emojiPaddingHorizontal: ei,
                emojiSpriteSize: _,
                shouldShowSoundmojiInEmojiPicker: eC
            }),
            { newlyAddedEmojis: e9 } = (0, j.Z)(eF, s);
        (0, V.b)({
            intention: s,
            isBurstReaction: eZ,
            analyticsObject: ez
        });
        let te = l.useCallback(() => {
                let e = e9.length > 0 ? e9[0].id : null;
                (0, N.pr)(eF, e),
                    (0, V.Z)({
                        intention: s,
                        isBurstReaction: eZ,
                        analyticsObject: ez
                    });
            }, [e9, eF, s, eZ, ez]),
            tt = (0, z.rf)({
                pickerIntention: s,
                selectedChannel: u,
                closePopout: f,
                onSelectEmoji: x,
                setUpsellConfigs: eP,
                emojiSelectAnalytics: (e) => {
                    '' !== ek
                        ? (0, Z.y$)({
                              emoji: e.emoji,
                              location: {
                                  ...eQ,
                                  object: ee.qAy.EMOJI
                              },
                              searchQuery: ek,
                              intention: s
                          })
                        : (0, Z.fe)({
                              emoji: e.emoji,
                              location: {
                                  ...eQ,
                                  object: null != ez ? ez : ee.qAy.EMOJI,
                                  ...(null != eW && { page: eW })
                              },
                              pickerIntention: s,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight: e.subCategory === $.t0.NEWLY_ADDED_EMOJI && A.Z.isNewerThanLastSeen(eF, e.emoji.id),
                              isBurstReaction: eZ
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, Z.J1)({
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
                handleGridContainerKeyDown: ts,
                isUsingKeyboardNavigation: to
            } = eu({
                pickerIntention: s,
                analyticsLocation: eQ,
                columnCounts: e8,
                onSelectEmoji: x,
                emojiGrid: e7,
                emojiList: eB,
                channelGuildId: eF,
                isBurstReaction: eZ
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
                        guild_id: eF
                    }),
                    C.kJ.resetStoreState
                ),
                [eq, eF]
            ),
            l.useEffect(() => () => (0, w.Kw)(w.v6.FAVORITE_EMOJI_TOOLTIP), []),
            l.useLayoutEffect(() => {
                var e;
                let { columnIndex: n, rowIndex: r } = C.kJ.getState().inspectedExpressionPosition;
                (null === (e = e7[r]) || void 0 === e ? void 0 : e[n]) == null && 0 !== n && C.kJ.setInspectedExpressionPosition(0, 0);
            }, [e7]),
            l.useEffect(() => {
                if (('' === eM.current && '' !== ek && (0, Z.PC)(eQ, s), 0 === e0 && '' !== ek)) e_(eQ, ek);
                else if ('' !== ek && eM.current !== ek) {
                    var e;
                    eh(e0, null !== (e = null == e$ ? void 0 : e$.locked.length) && void 0 !== e ? e : 0, eQ, ek, s);
                }
                eM.current = ek;
            }, [ek, eQ, e0, e$, s]);
        let tl = null != eT ? eT : m ? 'div' : g.Dialog,
            tu = null != e4;
        if ((null == ew ? void 0 : ew.type) === z.Bg.PREMIUM) {
            let e = P.p.NONE;
            2 === E ? (e = P.p.PARENT_CONTAINER) : 1 === E && (e = P.p.TAB_PARENT_CONTAINER),
                (a = (0, o.jsx)(J.Z, {
                    onLearnMore: tn,
                    emojiDescriptor: ew.emojiDescriptor,
                    pickerIntention: s,
                    analyticsLocation: eQ,
                    onClose: () => eP(null),
                    channel: u,
                    containerContext: e
                }));
        } else
            (null == ew ? void 0 : ew.type) === z.Bg.ROLE_SUBSCRIPTION
                ? (a = (0, o.jsx)(L.Z, {
                      onClose: () => eP(null),
                      guildId: ew.guildId,
                      emojiId: ew.emojiId
                  }))
                : eZ && !eH && (a = (0, o.jsx)(H.Z, { onDismiss: () => eV(!1) }));
        let tc = (e, n) => {
                tt(e, {
                    ...n,
                    isBurst: eZ
                });
            },
            td = () => {
                var e;
                eV(!eZ), null === (e = eG.current) || void 0 === e || e.focus();
            },
            tf = (0, o.jsx)(K.Z, {
                pickerIntention: s,
                emojiListRef: eB,
                onKeyDown: (e) => {
                    null == ts || ts(e), null == eO || eO(e);
                },
                searchBarRef: eG,
                onFocus: eR,
                autoFocus: eD,
                accessory: eL,
                headerClassName: eE,
                hasTabWrapper: m,
                diversitySurrogate: eJ,
                isBurstReaction: eZ,
                onBurstReactionToggle: td,
                renderHeader: eS
            }),
            t_ = [];
        s === en.Hz.REACTION && t_.push(p.z.SUPER_REACTIONS_NITRO_MARKETING), !S.ZP.hasFavoriteEmojis(eF) && t_.push(p.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let th = (0, o.jsx)(v.Z, {
            ...eQ,
            children: (0, o.jsxs)(tl, {
                id: $.cZ,
                'aria-labelledby': m ? $.td : void 0,
                role: m ? 'tabpanel' : void 0,
                className: c()(er.wrapper, {
                    [er.emojiPickerHasTabWrapper]: m,
                    [er.isBurstReactionPicker]: eZ && eH
                }),
                children: [
                    m ? null : tf,
                    (0, o.jsxs)('div', {
                        className: c()(er.emojiPicker, eg),
                        onScroll: eo,
                        children: [
                            m ? tf : null,
                            (0, o.jsxs)('div', {
                                className: er.bodyWrapper,
                                ref: eU,
                                children: [
                                    (0, o.jsx)(X.Z, {
                                        channel: u,
                                        closePopout: f
                                    }),
                                    (0, o.jsx)(y.ZP, {
                                        contentTypes: t_,
                                        children: (e) => {
                                            let { visibleContent: n, markAsDismissed: r } = e;
                                            if (n === p.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return (0, o.jsx)(W.Z, { markAsDismissed: () => r(et.L.UNKNOWN) });
                                        }
                                    }),
                                    eb
                                        ? null
                                        : (0, o.jsx)('div', {
                                              className: er.emojiPickerListWrapper,
                                              id: $.Vr,
                                              ...ta,
                                              children: tu
                                                  ? (0, o.jsx)(Q.Z, {
                                                        collapsedSections: e2,
                                                        diversitySurrogate: eJ,
                                                        emojiGrid: e7,
                                                        emojiListRef: eB,
                                                        emojiSize: _,
                                                        getEmojiItemProps: tr,
                                                        getEmojiRowProps: ti,
                                                        gridWidth: e4,
                                                        isUsingKeyboardNavigation: to,
                                                        onEmojiSelect: tc,
                                                        onSelectSoundmoji: F,
                                                        setUpsellConfigs: eP,
                                                        rowCount: e7.length,
                                                        rowCountBySection: e6,
                                                        sectionDescriptors: e5,
                                                        setCollapsedSections: e3,
                                                        channelGuildId: eF,
                                                        channelId: null == u ? void 0 : u.id,
                                                        messageId: ey,
                                                        isBurstReaction: eZ,
                                                        listHeaderClassName: eA
                                                    })
                                                  : null
                                          })
                                ]
                            }),
                            (0, o.jsx)(q.k, {
                                emojiGrid: e7,
                                className: er.inspector,
                                guildId: eF,
                                pickerIntention: s,
                                channel: u
                            }),
                            a
                        ]
                    }),
                    eb
                        ? null
                        : (0, o.jsx)(Y.Z, {
                              className: c()(er.categoryList, eN),
                              emojiListRef: eB,
                              sectionDescriptors: e5,
                              intention: s,
                              channel: u,
                              shouldShowSoundmojiInEmojiPicker: eC
                          })
                ]
            })
        });
        return (0, o.jsx)(b.Gt, {
            value: eX,
            children: th
        });
    };
n.Z = l.memo(l.forwardRef(em));
