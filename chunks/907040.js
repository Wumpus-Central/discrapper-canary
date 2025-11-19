n.d(t, {
    Z: () => eb,
    v: () => ec,
}),
    n(388685),
    n(539854);
var r = n(54381),
    i = n(473749),
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
    T = n(806966),
    S = n(28546),
    A = n(691251),
    C = n(98528),
    N = n(770812),
    R = n(434404),
    P = n(536442),
    D = n(609218),
    w = n(695346),
    L = n(984933),
    x = n(594174),
    M = n(626135),
    j = n(111361),
    k = n(624138),
    U = n(543241),
    G = n(253696),
    B = n(199257),
    Z = n(636411),
    F = n(380331),
    V = n(170762),
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
    ee = n(593391);
function et(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function en(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
let ea = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    eo = (0, k.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    es = 8,
    el = (e) => e.stopPropagation();
var ec = (function (e) {
    return (
        (e[(e.NONE = 0)] = "NONE"),
        (e[(e.TABS_EXPRESSION_PICKER = 1)] = "TABS_EXPRESSION_PICKER"),
        (e[(e.NO_TABS_EXPRESSION_PICKER = 2)] = "NO_TABS_EXPRESSION_PICKER"),
        e
    );
})({});
let eu = (e, t) => {
        T.kJ.setInspectedExpressionPosition(e, t, A.u.GRID_NAVIGATOR_EVENT);
    },
    ed = (e) => {
        let {
                analyticsLocation: t,
                pickerIntention: n,
                columnCounts: r,
                onSelectEmoji: a,
                emojiGrid: o,
                emojiList: s,
                channelGuildId: l,
                isBurstReaction: d,
            } = e,
            f = (0, u.e7)([O.ZP], () => O.ZP.getDisambiguatedEmojiContext(l), [l]),
            _ = i.useCallback(
                (e, r) => {
                    switch (e.type) {
                        case Y.ld.CREATE_EMOJI:
                            a({
                                emoji: void 0,
                                willClose: !0,
                            }),
                                R.Z.open(e.guildId, Q.pNK.EMOJI);
                            return;
                        case Y.ld.EMOJI: {
                            if (null != e.emoji && r.altKey)
                                return void (f.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                    ? (0, p.Xe)(e.emoji)
                                    : ((0, U.J1)({
                                          emoji: e.emoji,
                                          location: ei(en({}, t), { object: Q.qAy.EMOJI }),
                                      }),
                                      (0, p.$K)(e.emoji)));
                            let i = {
                                page: null != l ? Q.ZY5.GUILD_CHANNEL : Q.ZY5.DM_CHANNEL,
                                section: Q.jXE.EMOJI_PICKER_POPOUT,
                                object: Q.qAy.EMOJI,
                            };
                            d &&
                                (i = {
                                    page: null != l ? Q.ZY5.GUILD_CHANNEL : Q.ZY5.DM_CHANNEL,
                                    section: Q.jXE.EMOJI_PICKER_POPOUT,
                                    object: Q.qAy.EMOJI,
                                }),
                                (0, U.fe)({
                                    emoji: e.emoji,
                                    location: i,
                                    pickerIntention: n,
                                    category: e.category,
                                    subCategory: e.subCategory,
                                    newlyAddedHighlight:
                                        e.subCategory === X.t0.NEWLY_ADDED_EMOJI &&
                                        v.Z.isNewerThanLastSeen(l, e.emoji.id),
                                }),
                                a({
                                    emoji: e.emoji,
                                    willClose: !r.shiftKey,
                                    isBurst: d,
                                });
                        }
                    }
                },
                [a, l, n, f, t, d],
            ),
            {
                gridDispatch: h,
                getItemProps: m,
                getRowProps: g,
                gridContainerProps: E,
                handleGridContainerKeyDown: b,
                isUsingKeyboardNavigation: y,
            } = (0, C.VO)({
                columnCounts: r,
                gridNavigatorId: X.Vr,
                itemGrid: o,
                itemList: s,
                onGridNavigatorItemSelect: _,
                onGridNavigatorPositionChange: eu,
            });
        return (
            i.useEffect(
                () =>
                    T.kJ.subscribe(
                        (e) => e.inspectedExpressionPosition,
                        (e) => {
                            if (null == e) return;
                            let { columnIndex: t, rowIndex: n, source: r } = e;
                            r !== A.u.GRID_NAVIGATOR_EVENT &&
                                h({
                                    type: c.s.SET_FOCUSED_POSITION,
                                    x: t,
                                    y: n,
                                });
                        },
                    ),
                [h],
            ),
            {
                getItemProps: m,
                getRowProps: g,
                gridContainerProps: E,
                handleGridContainerKeyDown: b,
                isUsingKeyboardNavigation: y,
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
                r(T.kJ.getState().activeCategoryIndex);
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
        popoutLocation: void 0,
    },
    eE = function (e, t) {
        var n, a;
        let s,
            {
                pickerIntention: l,
                channel: c,
                guildId: f,
                closePopout: p,
                emojiSize: A = X.Su.MEDIUM,
                hasTabWrapper: R = !1,
                containerContext: k = 0,
                includeCreateEmojiButton: et,
                onSelectEmoji: er,
                onSelectSoundmoji: ec,
                containerWidth: eu,
                onNavigateAway: ep,
                persistSearch: eE,
                className: eb,
                headerClassName: ey,
                analyticsOverride: eO = eg,
                searchProps: ev = {},
                wrapper: eI,
                shouldHidePickerActions: eT = !1,
                messageId: eS,
                renderHeader: eA,
                listHeaderClassName: eC,
                categoryListClassName: eN,
                shouldShowSoundmojiInEmojiPicker: eR = !1,
                showOnlyUnicode: eP = !1,
                showAddEmojiButton: eD = !1,
            } = e,
            { onFocus: ew, onKeyDown: eL, autoFocus: ex = !0, accessory: eM } = ev,
            ej = (0, u.e7)([L.ZP], () => (null != f ? L.ZP.getDefaultChannel(f) : null), [f]),
            [ek, eU] = i.useState(null),
            eG = i.useRef(""),
            eB = (0, S.Iu)((e) => e.searchQuery),
            eZ = i.useRef(null),
            eF = i.useRef(null),
            eV = i.useRef(null);
        null == c && null != ej && (c = ej);
        let eH = null != (a = null != (n = null == c ? void 0 : c.getGuildId()) ? n : f) ? a : null,
            [eY, eW] = i.useState(!1),
            eK = x.default.getCurrentUser(),
            ez = (0, j.I5)(eK);
        i.useImperativeHandle(t, () => ({ onPickerOpen: ta }));
        let { location: eq } = (0, m.O)(),
            { page: eX, section: eQ, object: eJ, openPopoutType: e$, popoutLocation: e0 } = eO,
            e1 = i.useMemo(() => ei(en({}, eq), { section: null != eQ ? eQ : Q.jXE.EMOJI_PICKER_POPOUT }), [eq, eQ]),
            { analyticsLocations: e3 } = (0, b.ZP)(g.Z.EMOJI_PICKER),
            { diversitySurrogate: e2 } = (0, u.cj)([O.ZP], () => ({ diversitySurrogate: O.ZP.diversitySurrogate })),
            e4 = (0, U.DV)(eB, c, l, eP),
            e5 = null == e4 ? 0 : e4.locked.length + e4.unlocked.length,
            e8 = w.d4.useSetting(),
            e6 = i.useMemo(() => new Set(e8), [e8]),
            e7 = i.useCallback((e) => {
                w.d4.updateSetting(Array.from(e));
            }, []),
            e9 = (0, C.ep)({
                gridWrapperRef: eZ,
                containerWidth: eu,
                listPaddingLeft: eo,
                listScrollbarWidth: es,
            }),
            {
                rowCountBySection: te,
                sectionDescriptors: tt,
                emojiGrid: tn,
                columnCounts: tr,
            } = (0, Y.YH)({
                gridWidth: e9,
                channel: c,
                includeCreateEmojiButton: et,
                pickerIntention: l,
                emojiSearchResults: e4,
                collapsedSections: e6,
                emojiPaddingHorizontal: ea,
                emojiSpriteSize: A,
                shouldShowSoundmojiInEmojiPicker: eR,
                showOnlyUnicode: eP,
            }),
            { newlyAddedEmojis: ti } = (0, B.Z)(eH, l);
        (0, G.b)({
            intention: l,
            isBurstReaction: eY,
            analyticsObject: eJ,
        });
        let ta = i.useCallback(() => {
                let e = ti.length > 0 ? ti[0].id : null;
                (0, I.pr)(eH, e),
                    (0, G.Z)({
                        intention: l,
                        isBurstReaction: eY,
                        analyticsObject: eJ,
                    });
            }, [ti, eH, l, eY, eJ]),
            to = (0, Y.rf)({
                pickerIntention: l,
                selectedChannel: c,
                closePopout: p,
                onSelectEmoji: er,
                setUpsellConfigs: eU,
                emojiSelectAnalytics: (e) => {
                    "" !== eB
                        ? (0, U.y$)({
                              emoji: e.emoji,
                              location: ei(en({}, e1), { object: Q.qAy.EMOJI }),
                              searchQuery: eB,
                              intention: l,
                          })
                        : (0, U.fe)({
                              emoji: e.emoji,
                              location: en(
                                  ei(en({}, e1), { object: null != eJ ? eJ : Q.qAy.EMOJI }),
                                  null != eX && { page: eX },
                              ),
                              pickerIntention: l,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === X.t0.NEWLY_ADDED_EMOJI && v.Z.isNewerThanLastSeen(eH, e.emoji.id),
                              isBurstReaction: eY,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, U.J1)({
                        emoji: e.emoji,
                        location: ei(en({}, e1), { object: Q.qAy.EMOJI }),
                    });
                },
            }),
            ts = i.useCallback(() => {
                p(), null == ep || ep();
            }, [p, ep]),
            {
                getItemProps: tl,
                getRowProps: tc,
                gridContainerProps: tu,
                handleGridContainerKeyDown: td,
                isUsingKeyboardNavigation: tf,
            } = ed({
                pickerIntention: l,
                analyticsLocation: e1,
                columnCounts: tr,
                onSelectEmoji: er,
                emojiGrid: tn,
                emojiList: eF,
                channelGuildId: eH,
                isBurstReaction: eY,
            });
        ef(eu, eF),
            e_(eu, e2, eV, ex),
            i.useEffect(() => {
                eE || (0, S.ql)("");
            }, [eE]),
            i.useEffect(
                () => (
                    M.default.track(
                        Q.rMx.OPEN_POPOUT,
                        en(
                            {
                                type: null != e$ ? e$ : "Emoji Picker",
                                guild_id: eH,
                                location: e0,
                            },
                            (0, E.v_)(c),
                        ),
                    ),
                    T.kJ.resetStoreState
                ),
                [e$, eH, e0, c],
            ),
            i.useEffect(() => () => (0, P.Kw)(P.v6.FAVORITE_EMOJI_TOOLTIP), []),
            i.useLayoutEffect(() => {
                var e;
                let { columnIndex: t, rowIndex: n } = T.kJ.getState().inspectedExpressionPosition;
                (null == (e = tn[n]) ? void 0 : e[t]) == null && 0 !== t && T.kJ.setInspectedExpressionPosition(0, 0);
            }, [tn]),
            i.useEffect(() => {
                if (("" === eG.current && "" !== eB && (0, U.PC)(e1, l), 0 === e5 && "" !== eB)) eh(e1, eB);
                else if ("" !== eB && eG.current !== eB) {
                    var e;
                    em(e5, null != (e = null == e4 ? void 0 : e4.locked.length) ? e : 0, e1, eB, l);
                }
                eG.current = eB;
            }, [eB, e1, e5, e4, l]);
        let t_ = null != eI ? eI : R ? "div" : _.VqE,
            tp = null != e9;
        if ((null == ek ? void 0 : ek.type) === Y.Bg.PREMIUM) {
            let e = D.p.NONE;
            2 === k ? (e = D.p.PARENT_CONTAINER) : 1 === k && (e = D.p.TAB_PARENT_CONTAINER),
                (s = (0, r.jsx)(q.Z, {
                    onLearnMore: ts,
                    emojiDescriptor: ek.emojiDescriptor,
                    pickerIntention: l,
                    analyticsLocation: e1,
                    onClose: () => eU(null),
                    channel: c,
                    containerContext: e,
                }));
        } else
            (null == ek ? void 0 : ek.type) === Y.Bg.ROLE_SUBSCRIPTION
                ? (s = (0, r.jsx)(N.Z, {
                      onClose: () => eU(null),
                      guildId: ek.guildId,
                      emojiId: ek.emojiId,
                  }))
                : eY && !ez && (s = (0, r.jsx)(Z.Z, { onDismiss: () => eW(!1) }));
        let th = (e, t) => {
                to(e, ei(en({}, t), { isBurst: eY }));
            },
            tm = () => {
                var e;
                eW(!eY), null == (e = eV.current) || e.focus();
            },
            tg = (0, r.jsx)(H.Z, {
                channel: c,
                pickerIntention: l,
                emojiListRef: eF,
                onKeyDown: (e) => {
                    null == td || td(e), null == eL || eL(e);
                },
                searchBarRef: eV,
                onFocus: ew,
                autoFocus: ex,
                accessory: eM,
                headerClassName: ey,
                diversitySurrogate: e2,
                isBurstReaction: eY,
                onBurstReactionToggle: tm,
                renderHeader: eA,
                showAddEmojiButton: eD,
            }),
            tE = [];
        l === $.Hz.REACTION && tE.push(d.z.SUPER_REACTIONS_NITRO_MARKETING),
            O.ZP.hasFavoriteEmojis(eH) || tE.push(d.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tb = (0, r.jsx)(
            h.Z,
            ei(en({}, e1), {
                children: (0, r.jsxs)(t_, {
                    id: X.cZ,
                    "aria-labelledby": R ? X.td : void 0,
                    role: R ? "tabpanel" : void 0,
                    className: o()(ee.wrapper, {
                        [ee.emojiPickerHasTabWrapper]: R,
                        [ee.isBurstReactionPicker]: eY && ez,
                    }),
                    children: [
                        R ? null : tg,
                        (0, r.jsxs)("div", {
                            className: o()(ee.emojiPicker, eb),
                            onScroll: el,
                            children: [
                                R ? tg : null,
                                (0, r.jsxs)("div", {
                                    className: ee.bodyWrapper,
                                    ref: eZ,
                                    children: [
                                        (0, r.jsx)(z.Z, {
                                            channel: c,
                                            closePopout: p,
                                        }),
                                        (0, r.jsx)(y.ZP, {
                                            contentTypes: tE,
                                            children: (e) => {
                                                let { visibleContent: t, markAsDismissed: n } = e;
                                                if (t === d.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                    return (0, r.jsx)(V.Z, { markAsDismissed: () => n(J.L.UNKNOWN) });
                                            },
                                        }),
                                        eT
                                            ? null
                                            : (0, r.jsx)(
                                                  "div",
                                                  ei(
                                                      en(
                                                          {
                                                              className: ee.emojiPickerListWrapper,
                                                              id: X.Vr,
                                                          },
                                                          tu,
                                                      ),
                                                      {
                                                          children: tp
                                                              ? (0, r.jsx)(K.Z, {
                                                                    collapsedSections: e6,
                                                                    diversitySurrogate: e2,
                                                                    emojiGrid: tn,
                                                                    emojiListRef: eF,
                                                                    emojiSize: A,
                                                                    getEmojiItemProps: tl,
                                                                    getEmojiRowProps: tc,
                                                                    gridWidth: e9,
                                                                    isUsingKeyboardNavigation: tf,
                                                                    onEmojiSelect: th,
                                                                    onSelectSoundmoji: ec,
                                                                    setUpsellConfigs: eU,
                                                                    rowCount: tn.length,
                                                                    rowCountBySection: te,
                                                                    sectionDescriptors: tt,
                                                                    setCollapsedSections: e7,
                                                                    channelGuildId: eH,
                                                                    channelId: null == c ? void 0 : c.id,
                                                                    messageId: eS,
                                                                    isBurstReaction: eY,
                                                                    listHeaderClassName: eC,
                                                                })
                                                              : null,
                                                      },
                                                  ),
                                              ),
                                    ],
                                }),
                                (0, r.jsx)(W.k, {
                                    emojiGrid: tn,
                                    className: ee.inspector,
                                    guildId: eH,
                                    pickerIntention: l,
                                    channel: c,
                                }),
                                s,
                            ],
                        }),
                        eT
                            ? null
                            : (0, r.jsx)(F.Z, {
                                  className: o()(ee.categoryList, eN),
                                  emojiListRef: eF,
                                  sectionDescriptors: tt,
                                  intention: l,
                                  channel: c,
                                  shouldShowSoundmojiInEmojiPicker: eR,
                                  showOnlyUnicode: eP,
                              }),
                    ],
                }),
            }),
        );
        return (0, r.jsx)(b.Gt, {
            value: e3,
            children: tb,
        });
    },
    eb = i.memo(i.forwardRef(eE));
