n.d(t, {
    Z: () => eE,
    v: () => el,
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
    C = n(691251),
    A = n(98528),
    N = n(770812),
    P = n(536442),
    R = n(609218),
    w = n(695346),
    D = n(984933),
    x = n(594174),
    L = n(626135),
    j = n(111361),
    M = n(624138),
    k = n(543241),
    U = n(253696),
    G = n(199257),
    Z = n(636411),
    F = n(380331),
    B = n(170762),
    V = n(22363),
    H = n(784222),
    Y = n(141507),
    W = n(669040),
    K = n(901963),
    z = n(212263),
    q = n(149203),
    Q = n(981631),
    X = n(921944),
    J = n(185923),
    $ = n(101972);
function ee(e, t, n) {
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
function et(e) {
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
    return (
        (e[(e.NONE = 0)] = "NONE"),
        (e[(e.TABS_EXPRESSION_PICKER = 1)] = "TABS_EXPRESSION_PICKER"),
        (e[(e.NO_TABS_EXPRESSION_PICKER = 2)] = "NO_TABS_EXPRESSION_PICKER"),
        e
    );
})({});
let ec = (e, t) => {
        I.kJ.setInspectedExpressionPosition(e, t, C.u.GRID_NAVIGATOR_EVENT);
    },
    eu = (e) => {
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
                    if (e.type === H.ld.EMOJI) {
                        if (null != e.emoji && r.altKey)
                            return void (f.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                ? (0, _.Xe)(e.emoji)
                                : ((0, k.J1)({
                                      emoji: e.emoji,
                                      location: er(et({}, t), { object: Q.qAy.EMOJI }),
                                  }),
                                  (0, _.$K)(e.emoji)));
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
                            (0, k.fe)({
                                emoji: e.emoji,
                                location: i,
                                pickerIntention: n,
                                category: e.category,
                                subCategory: e.subCategory,
                                newlyAddedHighlight:
                                    e.subCategory === q.t0.NEWLY_ADDED_EMOJI && v.Z.isNewerThanLastSeen(l, e.emoji.id),
                            }),
                            a({
                                emoji: e.emoji,
                                willClose: !r.shiftKey,
                                isBurst: d,
                            });
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
            } = (0, A.VO)({
                columnCounts: r,
                gridNavigatorId: q.Vr,
                itemGrid: o,
                itemList: s,
                onGridNavigatorItemSelect: p,
                onGridNavigatorPositionChange: ec,
            });
        return (
            i.useEffect(
                () =>
                    I.kJ.subscribe(
                        (e) => e.inspectedExpressionPosition,
                        (e) => {
                            if (null == e) return;
                            let { columnIndex: t, rowIndex: n, source: r } = e;
                            r !== C.u.GRID_NAVIGATOR_EVENT &&
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
    ep = 200,
    e_ = l()(k.to, ep),
    em = l()(k.jA, ep),
    eh = {
        section: void 0,
        openPopoutType: void 0,
        popoutLocation: void 0,
    },
    eg = function (e, t) {
        var n, a;
        let s,
            {
                pickerIntention: l,
                channel: c,
                guildId: f,
                closePopout: _,
                emojiSize: C = q.Su.MEDIUM,
                hasTabWrapper: M = !1,
                containerContext: ee = 0,
                onSelectEmoji: en,
                onSelectSoundmoji: el,
                containerWidth: ec,
                onNavigateAway: ep,
                persistSearch: eg,
                className: eE,
                headerClassName: eb,
                analyticsOverride: ey = eh,
                searchProps: eO = {},
                wrapper: ev,
                shouldHidePickerActions: eS = !1,
                messageId: eI,
                renderHeader: eT,
                listHeaderClassName: eC,
                categoryListClassName: eA,
                shouldShowSoundmojiInEmojiPicker: eN = !1,
                showOnlyUnicode: eP = !1,
            } = e,
            { onFocus: eR, onKeyDown: ew, autoFocus: eD = !0, accessory: ex } = eO,
            eL = (0, u.e7)([D.ZP], () => (null != f ? D.ZP.getDefaultChannel(f) : null), [f]),
            [ej, eM] = i.useState(null),
            ek = i.useRef(""),
            eU = (0, T.Iu)((e) => e.searchQuery),
            eG = i.useRef(null),
            eZ = i.useRef(null),
            eF = i.useRef(null);
        null == c && null != eL && (c = eL);
        let eB = null != (a = null != (n = null == c ? void 0 : c.getGuildId()) ? n : f) ? a : null,
            [eV, eH] = i.useState(!1),
            eY = x.default.getCurrentUser(),
            eW = (0, j.I5)(eY);
        i.useImperativeHandle(t, () => ({ onPickerOpen: tr }));
        let { location: eK } = (0, h.O)(),
            { page: ez, section: eq, object: eQ, openPopoutType: eX, popoutLocation: eJ } = ey,
            e$ = i.useMemo(() => er(et({}, eK), { section: null != eq ? eq : Q.jXE.EMOJI_PICKER_POPOUT }), [eK, eq]),
            { analyticsLocations: e0 } = (0, b.ZP)(g.Z.EMOJI_PICKER),
            { diversitySurrogate: e1 } = (0, u.cj)([O.ZP], () => ({ diversitySurrogate: O.ZP.diversitySurrogate })),
            e3 = (0, k.DV)(eU, c, l, eP),
            e2 = null == e3 ? 0 : e3.locked.length + e3.unlocked.length,
            e4 = w.d4.useSetting(),
            e5 = i.useMemo(() => new Set(e4), [e4]),
            e8 = i.useCallback((e) => {
                w.d4.updateSetting(Array.from(e));
            }, []),
            e6 = (0, A.ep)({
                gridWrapperRef: eG,
                containerWidth: ec,
                listPaddingLeft: ea,
                listScrollbarWidth: eo,
            }),
            {
                rowCountBySection: e7,
                sectionDescriptors: e9,
                emojiGrid: te,
                columnCounts: tt,
            } = (0, H.YH)({
                gridWidth: e6,
                fallbackGuildId: eB,
                channel: c,
                pickerIntention: l,
                emojiSearchResults: e3,
                collapsedSections: e5,
                emojiPaddingHorizontal: ei,
                emojiSpriteSize: C,
                shouldShowSoundmojiInEmojiPicker: eN,
                showOnlyUnicode: eP,
            }),
            { newlyAddedEmojis: tn } = (0, G.Z)(eB, l);
        (0, U.b)({
            intention: l,
            isBurstReaction: eV,
            analyticsObject: eQ,
        });
        let tr = i.useCallback(() => {
                let e = tn.length > 0 ? tn[0].id : null;
                (0, S.pr)(eB, e),
                    (0, U.Z)({
                        intention: l,
                        isBurstReaction: eV,
                        analyticsObject: eQ,
                    });
            }, [tn, eB, l, eV, eQ]),
            ti = (0, H.rf)({
                pickerIntention: l,
                selectedChannel: c,
                fallbackGuildId: eB,
                closePopout: _,
                onSelectEmoji: en,
                setUpsellConfigs: eM,
                emojiSelectAnalytics: (e) => {
                    "" !== eU
                        ? (0, k.y$)({
                              emoji: e.emoji,
                              location: er(et({}, e$), { object: Q.qAy.EMOJI }),
                              searchQuery: eU,
                              intention: l,
                          })
                        : (0, k.fe)({
                              emoji: e.emoji,
                              location: et(
                                  er(et({}, e$), { object: null != eQ ? eQ : Q.qAy.EMOJI }),
                                  null != ez && { page: ez },
                              ),
                              pickerIntention: l,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === q.t0.NEWLY_ADDED_EMOJI && v.Z.isNewerThanLastSeen(eB, e.emoji.id),
                              isBurstReaction: eV,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, k.J1)({
                        emoji: e.emoji,
                        location: er(et({}, e$), { object: Q.qAy.EMOJI }),
                    });
                },
            }),
            ta = i.useCallback(() => {
                _(), null == ep || ep();
            }, [_, ep]),
            {
                getItemProps: to,
                getRowProps: ts,
                gridContainerProps: tl,
                handleGridContainerKeyDown: tc,
                isUsingKeyboardNavigation: tu,
            } = eu({
                pickerIntention: l,
                analyticsLocation: e$,
                columnCounts: tt,
                onSelectEmoji: en,
                emojiGrid: te,
                emojiList: eZ,
                channelGuildId: eB,
                isBurstReaction: eV,
            });
        ed(ec, eZ),
            ef(ec, e1, eF, eD),
            i.useEffect(() => {
                eg || (0, T.ql)("");
            }, [eg]),
            i.useEffect(
                () => (
                    L.default.track(
                        Q.rMx.OPEN_POPOUT,
                        et(
                            {
                                type: null != eX ? eX : "Emoji Picker",
                                guild_id: eB,
                                location: eJ,
                            },
                            (0, E.v_)(c),
                        ),
                    ),
                    I.kJ.resetStoreState
                ),
                [eX, eB, eJ, c],
            ),
            i.useEffect(() => () => (0, P.Kw)(P.v6.FAVORITE_EMOJI_TOOLTIP), []),
            i.useLayoutEffect(() => {
                var e;
                let { columnIndex: t, rowIndex: n } = I.kJ.getState().inspectedExpressionPosition;
                (null == (e = te[n]) ? void 0 : e[t]) == null && 0 !== t && I.kJ.setInspectedExpressionPosition(0, 0);
            }, [te]),
            i.useEffect(() => {
                if (("" === ek.current && "" !== eU && (0, k.PC)(e$, l), 0 === e2 && "" !== eU)) e_(e$, eU);
                else if ("" !== eU && ek.current !== eU) {
                    var e;
                    em(e2, null != (e = null == e3 ? void 0 : e3.locked.length) ? e : 0, e$, eU, l);
                }
                ek.current = eU;
            }, [eU, e$, e2, e3, l]);
        let td = null != ev ? ev : M ? "div" : p.VqE,
            tf = null != e6;
        if ((null == ej ? void 0 : ej.type) === H.Bg.PREMIUM) {
            let e = R.p.NONE;
            2 === ee ? (e = R.p.PARENT_CONTAINER) : 1 === ee && (e = R.p.TAB_PARENT_CONTAINER),
                (s = (0, r.jsx)(z.Z, {
                    onLearnMore: ta,
                    emojiDescriptor: ej.emojiDescriptor,
                    pickerIntention: l,
                    analyticsLocation: e$,
                    onClose: () => eM(null),
                    channel: c,
                    containerContext: e,
                }));
        } else
            (null == ej ? void 0 : ej.type) === H.Bg.ROLE_SUBSCRIPTION
                ? (s = (0, r.jsx)(N.Z, {
                      onClose: () => eM(null),
                      guildId: ej.guildId,
                      emojiId: ej.emojiId,
                  }))
                : eV && !eW && (s = (0, r.jsx)(Z.Z, { onDismiss: () => eH(!1) }));
        let tp = (e, t) => {
                ti(e, er(et({}, t), { isBurst: eV }));
            },
            t_ = () => {
                var e;
                eH(!eV), null == (e = eF.current) || e.focus();
            },
            tm = (0, r.jsx)(V.Z, {
                channel: c,
                pickerIntention: l,
                emojiListRef: eZ,
                onKeyDown: (e) => {
                    null == tc || tc(e), null == ew || ew(e);
                },
                searchBarRef: eF,
                onFocus: eR,
                autoFocus: eD,
                accessory: ex,
                headerClassName: eb,
                diversitySurrogate: e1,
                isBurstReaction: eV,
                onBurstReactionToggle: t_,
                renderHeader: eT,
            }),
            th = [];
        l === J.Hz.REACTION && th.push(d.z.SUPER_REACTIONS_NITRO_MARKETING),
            O.ZP.hasFavoriteEmojis(eB) || th.push(d.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tg = (0, r.jsx)(
            m.Z,
            er(et({}, e$), {
                children: (0, r.jsxs)(td, {
                    id: q.cZ,
                    "aria-labelledby": M ? q.td : void 0,
                    role: M ? "tabpanel" : void 0,
                    className: o()($.wrapper, {
                        [$.emojiPickerHasTabWrapper]: M,
                        [$.isBurstReactionPicker]: eV && eW,
                    }),
                    children: [
                        M ? null : tm,
                        (0, r.jsxs)("div", {
                            className: o()($.emojiPicker, eE),
                            onScroll: es,
                            children: [
                                M ? tm : null,
                                (0, r.jsxs)("div", {
                                    className: $.bodyWrapper,
                                    ref: eG,
                                    children: [
                                        (0, r.jsx)(K.Z, {
                                            channel: c,
                                            closePopout: _,
                                        }),
                                        (0, r.jsx)(y.ZP, {
                                            contentTypes: th,
                                            children: (e) => {
                                                let { visibleContent: t, markAsDismissed: n } = e;
                                                if (t === d.z.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                    return (0, r.jsx)(B.Z, { markAsDismissed: () => n(X.L.UNKNOWN) });
                                            },
                                        }),
                                        eS
                                            ? null
                                            : (0, r.jsx)(
                                                  "div",
                                                  er(
                                                      et(
                                                          {
                                                              className: $.emojiPickerListWrapper,
                                                              id: q.Vr,
                                                          },
                                                          tl,
                                                      ),
                                                      {
                                                          children: tf
                                                              ? (0, r.jsx)(W.Z, {
                                                                    collapsedSections: e5,
                                                                    diversitySurrogate: e1,
                                                                    emojiGrid: te,
                                                                    emojiListRef: eZ,
                                                                    emojiSize: C,
                                                                    getEmojiItemProps: to,
                                                                    getEmojiRowProps: ts,
                                                                    gridWidth: e6,
                                                                    isUsingKeyboardNavigation: tu,
                                                                    onEmojiSelect: tp,
                                                                    onSelectSoundmoji: el,
                                                                    setUpsellConfigs: eM,
                                                                    rowCount: te.length,
                                                                    rowCountBySection: e7,
                                                                    sectionDescriptors: e9,
                                                                    setCollapsedSections: e8,
                                                                    channelGuildId: eB,
                                                                    channelId: null == c ? void 0 : c.id,
                                                                    messageId: eI,
                                                                    isBurstReaction: eV,
                                                                    listHeaderClassName: eC,
                                                                })
                                                              : null,
                                                      },
                                                  ),
                                              ),
                                    ],
                                }),
                                (0, r.jsx)(Y.k, {
                                    emojiGrid: te,
                                    className: $.inspector,
                                    guildId: eB,
                                    pickerIntention: l,
                                    channel: c,
                                }),
                                s,
                            ],
                        }),
                        eS
                            ? null
                            : (0, r.jsx)(F.Z, {
                                  className: o()($.categoryList, eA),
                                  emojiListRef: eZ,
                                  sectionDescriptors: e9,
                                  intention: l,
                                  channel: c,
                                  fallbackGuildId: eB,
                                  shouldShowSoundmojiInEmojiPicker: eN,
                                  showOnlyUnicode: eP,
                              }),
                    ],
                }),
            }),
        );
        return (0, r.jsx)(b.Gt, {
            value: e0,
            children: tg,
        });
    },
    eE = i.memo(i.forwardRef(eg));
