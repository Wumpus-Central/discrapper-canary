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
    p = n(481060),
    _ = n(80932),
    m = n(410575),
    h = n(2052),
    g = n(100527),
    E = n(367907),
    b = n(906732),
    y = n(243778),
    O = n(339085),
    v = n(438332),
    S = n(664437),
    I = n(806966),
    T = n(28546),
    A = n(691251),
    C = n(98528),
    N = n(770812),
    P = n(434404),
    R = n(536442),
    D = n(609218),
    w = n(695346),
    x = n(984933),
    L = n(594174),
    j = n(626135),
    M = n(111361),
    k = n(624138),
    U = n(543241),
    G = n(253696),
    Z = n(199257),
    B = n(636411),
    F = n(380331),
    V = n(170762),
    H = n(22363),
    Y = n(784222),
    W = n(141507),
    K = n(669040),
    z = n(901963),
    q = n(212263),
    Q = n(149203),
    X = n(981631),
    J = n(921944),
    $ = n(185923),
    ee = n(359175);
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
        I.kJ.setInspectedExpressionPosition(e, t, A.u.GRID_NAVIGATOR_EVENT);
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
            p = i.useCallback(
                (e, r) => {
                    switch (e.type) {
                        case Y.ld.CREATE_EMOJI:
                            a({
                                emoji: void 0,
                                willClose: !0,
                            }),
                                P.Z.open(e.guildId, X.pNK.EMOJI);
                            return;
                        case Y.ld.EMOJI: {
                            if (null != e.emoji && r.altKey)
                                return void (f.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                    ? (0, _.Xe)(e.emoji)
                                    : ((0, U.J1)({
                                          emoji: e.emoji,
                                          location: ei(en({}, t), { object: X.qAy.EMOJI }),
                                      }),
                                      (0, _.$K)(e.emoji)));
                            let i = {
                                page: null != l ? X.ZY5.GUILD_CHANNEL : X.ZY5.DM_CHANNEL,
                                section: X.jXE.EMOJI_PICKER_POPOUT,
                                object: X.qAy.EMOJI,
                            };
                            d &&
                                (i = {
                                    page: null != l ? X.ZY5.GUILD_CHANNEL : X.ZY5.DM_CHANNEL,
                                    section: X.jXE.EMOJI_PICKER_POPOUT,
                                    object: X.qAy.EMOJI,
                                }),
                                (0, U.fe)({
                                    emoji: e.emoji,
                                    location: i,
                                    pickerIntention: n,
                                    category: e.category,
                                    subCategory: e.subCategory,
                                    newlyAddedHighlight:
                                        e.subCategory === Q.t0.NEWLY_ADDED_EMOJI &&
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
                gridDispatch: m,
                getItemProps: h,
                getRowProps: g,
                gridContainerProps: E,
                handleGridContainerKeyDown: b,
                isUsingKeyboardNavigation: y,
            } = (0, C.VO)({
                columnCounts: r,
                gridNavigatorId: Q.Vr,
                itemGrid: o,
                itemList: s,
                onGridNavigatorItemSelect: p,
                onGridNavigatorPositionChange: eu,
            });
        return (
            i.useEffect(
                () =>
                    I.kJ.subscribe(
                        (e) => e.inspectedExpressionPosition,
                        (e) => {
                            if (null == e) return;
                            let { columnIndex: t, rowIndex: n, source: r } = e;
                            r !== A.u.GRID_NAVIGATOR_EVENT &&
                                m({
                                    type: c.s.SET_FOCUSED_POSITION,
                                    x: t,
                                    y: n,
                                });
                        },
                    ),
                [m],
            ),
            {
                getItemProps: h,
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
                r(I.kJ.getState().activeCategoryIndex);
            }, [e]);
    },
    ep = (e, t, n, r) => {
        i.useLayoutEffect(() => {
            if (r) {
                var e;
                null == (e = n.current) || e.focus();
            }
        }, [e, t, n, r]);
    },
    e_ = 200,
    em = l()(U.to, e_),
    eh = l()(U.jA, e_),
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
                closePopout: _,
                emojiSize: A = Q.Su.MEDIUM,
                hasTabWrapper: P = !1,
                containerContext: k = 0,
                includeCreateEmojiButton: et,
                onSelectEmoji: er,
                onSelectSoundmoji: ec,
                containerWidth: eu,
                onNavigateAway: e_,
                persistSearch: eE,
                className: eb,
                headerClassName: ey,
                analyticsOverride: eO = eg,
                searchProps: ev = {},
                wrapper: eS,
                shouldHidePickerActions: eI = !1,
                messageId: eT,
                renderHeader: eA,
                listHeaderClassName: eC,
                categoryListClassName: eN,
                shouldShowSoundmojiInEmojiPicker: eP = !1,
                showOnlyUnicode: eR = !1,
                showAddEmojiButton: eD = !1,
            } = e,
            { onFocus: ew, onKeyDown: ex, autoFocus: eL = !0, accessory: ej } = ev,
            eM = (0, u.e7)([x.ZP], () => (null != f ? x.ZP.getDefaultChannel(f) : null), [f]),
            [ek, eU] = i.useState(null),
            eG = i.useRef(""),
            eZ = (0, T.Iu)((e) => e.searchQuery),
            eB = i.useRef(null),
            eF = i.useRef(null),
            eV = i.useRef(null);
        null == c && null != eM && (c = eM);
        let eH = null != (a = null != (n = null == c ? void 0 : c.getGuildId()) ? n : f) ? a : null,
            [eY, eW] = i.useState(!1),
            eK = L.default.getCurrentUser(),
            ez = (0, M.I5)(eK);
        i.useImperativeHandle(t, () => ({ onPickerOpen: ta }));
        let { location: eq } = (0, h.O)(),
            { page: eQ, section: eX, object: eJ, openPopoutType: e$, popoutLocation: e0 } = eO,
            e1 = i.useMemo(() => ei(en({}, eq), { section: null != eX ? eX : X.jXE.EMOJI_PICKER_POPOUT }), [eq, eX]),
            { analyticsLocations: e3 } = (0, b.ZP)(g.Z.EMOJI_PICKER),
            { diversitySurrogate: e2 } = (0, u.cj)([O.ZP], () => ({ diversitySurrogate: O.ZP.diversitySurrogate })),
            e4 = (0, U.DV)(eZ, c, l, eR),
            e5 = null == e4 ? 0 : e4.locked.length + e4.unlocked.length,
            e8 = w.d4.useSetting(),
            e6 = i.useMemo(() => new Set(e8), [e8]),
            e7 = i.useCallback((e) => {
                w.d4.updateSetting(Array.from(e));
            }, []),
            e9 = (0, C.ep)({
                gridWrapperRef: eB,
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
                shouldShowSoundmojiInEmojiPicker: eP,
                showOnlyUnicode: eR,
            }),
            { newlyAddedEmojis: ti } = (0, Z.Z)(eH, l);
        (0, G.b)({
            intention: l,
            isBurstReaction: eY,
            analyticsObject: eJ,
        });
        let ta = i.useCallback(() => {
                let e = ti.length > 0 ? ti[0].id : null;
                (0, S.pr)(eH, e),
                    (0, G.Z)({
                        intention: l,
                        isBurstReaction: eY,
                        analyticsObject: eJ,
                    });
            }, [ti, eH, l, eY, eJ]),
            to = (0, Y.rf)({
                pickerIntention: l,
                selectedChannel: c,
                closePopout: _,
                onSelectEmoji: er,
                setUpsellConfigs: eU,
                emojiSelectAnalytics: (e) => {
                    "" !== eZ
                        ? (0, U.y$)({
                              emoji: e.emoji,
                              location: ei(en({}, e1), { object: X.qAy.EMOJI }),
                              searchQuery: eZ,
                              intention: l,
                          })
                        : (0, U.fe)({
                              emoji: e.emoji,
                              location: en(
                                  ei(en({}, e1), { object: null != eJ ? eJ : X.qAy.EMOJI }),
                                  null != eQ && { page: eQ },
                              ),
                              pickerIntention: l,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === Q.t0.NEWLY_ADDED_EMOJI && v.Z.isNewerThanLastSeen(eH, e.emoji.id),
                              isBurstReaction: eY,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, U.J1)({
                        emoji: e.emoji,
                        location: ei(en({}, e1), { object: X.qAy.EMOJI }),
                    });
                },
            }),
            ts = i.useCallback(() => {
                _(), null == e_ || e_();
            }, [_, e_]),
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
            ep(eu, e2, eV, eL),
            i.useEffect(() => {
                eE || (0, T.ql)("");
            }, [eE]),
            i.useEffect(
                () => (
                    j.default.track(
                        X.rMx.OPEN_POPOUT,
                        en(
                            {
                                type: null != e$ ? e$ : "Emoji Picker",
                                guild_id: eH,
                                location: e0,
                            },
                            (0, E.v_)(c),
                        ),
                    ),
                    I.kJ.resetStoreState
                ),
                [e$, eH, e0, c],
            ),
            i.useEffect(() => () => (0, R.Kw)(R.v6.FAVORITE_EMOJI_TOOLTIP), []),
            i.useLayoutEffect(() => {
                var e;
                let { columnIndex: t, rowIndex: n } = I.kJ.getState().inspectedExpressionPosition;
                (null == (e = tn[n]) ? void 0 : e[t]) == null && 0 !== t && I.kJ.setInspectedExpressionPosition(0, 0);
            }, [tn]),
            i.useEffect(() => {
                if (("" === eG.current && "" !== eZ && (0, U.PC)(e1, l), 0 === e5 && "" !== eZ)) em(e1, eZ);
                else if ("" !== eZ && eG.current !== eZ) {
                    var e;
                    eh(e5, null != (e = null == e4 ? void 0 : e4.locked.length) ? e : 0, e1, eZ, l);
                }
                eG.current = eZ;
            }, [eZ, e1, e5, e4, l]);
        let tp = null != eS ? eS : P ? "div" : p.VqE,
            t_ = null != e9;
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
                : eY && !ez && (s = (0, r.jsx)(B.Z, { onDismiss: () => eW(!1) }));
        let tm = (e, t) => {
                to(e, ei(en({}, t), { isBurst: eY }));
            },
            th = () => {
                var e;
                eW(!eY), null == (e = eV.current) || e.focus();
            },
            tg = (0, r.jsx)(H.Z, {
                channel: c,
                pickerIntention: l,
                emojiListRef: eF,
                onKeyDown: (e) => {
                    null == td || td(e), null == ex || ex(e);
                },
                searchBarRef: eV,
                onFocus: ew,
                autoFocus: eL,
                accessory: ej,
                headerClassName: ey,
                diversitySurrogate: e2,
                isBurstReaction: eY,
                onBurstReactionToggle: th,
                renderHeader: eA,
                showAddEmojiButton: eD,
            }),
            tE = [];
        l === $.Hz.REACTION && tE.push(d.z.SUPER_REACTIONS_NITRO_MARKETING),
            O.ZP.hasFavoriteEmojis(eH) || tE.push(d.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tb = (0, r.jsx)(
            m.Z,
            ei(en({}, e1), {
                children: (0, r.jsxs)(tp, {
                    id: Q.cZ,
                    "aria-labelledby": P ? Q.td : void 0,
                    role: P ? "tabpanel" : void 0,
                    className: o()(ee.wrapper, {
                        [ee.emojiPickerHasTabWrapper]: P,
                        [ee.isBurstReactionPicker]: eY && ez,
                    }),
                    children: [
                        P ? null : tg,
                        (0, r.jsxs)("div", {
                            className: o()(ee.emojiPicker, eb),
                            onScroll: el,
                            children: [
                                P ? tg : null,
                                (0, r.jsxs)("div", {
                                    className: ee.bodyWrapper,
                                    ref: eB,
                                    children: [
                                        (0, r.jsx)(z.Z, {
                                            channel: c,
                                            closePopout: _,
                                        }),
                                        (0, r.jsx)(y.ZP, {
                                            contentTypes: tE,
                                            children: (e) => {
                                                let { visibleContent: t, markAsDismissed: n } = e;
                                                if (t === d.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                    return (0, r.jsx)(V.Z, { markAsDismissed: () => n(J.L.UNKNOWN) });
                                            },
                                        }),
                                        eI
                                            ? null
                                            : (0, r.jsx)(
                                                  "div",
                                                  ei(
                                                      en(
                                                          {
                                                              className: ee.emojiPickerListWrapper,
                                                              id: Q.Vr,
                                                          },
                                                          tu,
                                                      ),
                                                      {
                                                          children: t_
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
                                                                    onEmojiSelect: tm,
                                                                    onSelectSoundmoji: ec,
                                                                    setUpsellConfigs: eU,
                                                                    rowCount: tn.length,
                                                                    rowCountBySection: te,
                                                                    sectionDescriptors: tt,
                                                                    setCollapsedSections: e7,
                                                                    channelGuildId: eH,
                                                                    channelId: null == c ? void 0 : c.id,
                                                                    messageId: eT,
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
                        eI
                            ? null
                            : (0, r.jsx)(F.Z, {
                                  className: o()(ee.categoryList, eN),
                                  emojiListRef: eF,
                                  sectionDescriptors: tt,
                                  intention: l,
                                  channel: c,
                                  shouldShowSoundmojiInEmojiPicker: eP,
                                  showOnlyUnicode: eR,
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
