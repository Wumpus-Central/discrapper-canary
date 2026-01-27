n.d(t, {
    A: () => eE,
    f: () => el,
}),
    n(896048),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(111956),
    l = n.n(s),
    c = n(788413),
    u = n(311907),
    d = n(554146),
    f = n(319060),
    p = n(397927),
    _ = n(554375),
    h = n(820284),
    m = n(212245),
    g = n(793574),
    E = n(58149),
    y = n(688810),
    b = n(379848),
    O = n(508675),
    v = n(598770),
    A = n(451731),
    I = n(850992),
    S = n(151271),
    T = n(60587),
    C = n(887695),
    N = n(564068),
    w = n(450510),
    R = n(421162),
    P = n(253932),
    D = n(808728),
    L = n(287809),
    x = n(954571),
    M = n(474090),
    j = n(240248),
    k = n(822123),
    U = n(141862),
    G = n(316884),
    F = n(370968),
    V = n(653145),
    B = n(624751),
    H = n(867738),
    Y = n(484333),
    W = n(815082),
    K = n(775505),
    z = n(178898),
    q = n(148361),
    Z = n(732139),
    Q = n(652215),
    X = n(49999),
    J = n(307731),
    $ = n(836553);

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
let ei = (0, j.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    ea = (0, j.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
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
        I.Om.setInspectedExpressionPosition(e, t, T.t.GRID_NAVIGATOR_EVENT);
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
            f = (0, u.bG)([O.Ay], () => O.Ay.getDisambiguatedEmojiContext(l), [l]),
            p = i.useCallback(
                (e, r) => {
                    if (e.type === Y.bm.EMOJI) {
                        if (null != e.emoji && r.altKey)
                            return void (f.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                ? (0, _.Sw)(e.emoji)
                                : ((0, k.C5)({
                                      emoji: e.emoji,
                                      location: er(et({}, t), {
                                          object: Q.ZSU.EMOJI,
                                      }),
                                  }),
                                  (0, _.V4)(e.emoji)));
                        let i = {
                            page: null != l ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                            section: Q.JJy.EMOJI_PICKER_POPOUT,
                            object: Q.ZSU.EMOJI,
                        };
                        d &&
                            (i = {
                                page: null != l ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                                section: Q.JJy.EMOJI_PICKER_POPOUT,
                                object: Q.ZSU.EMOJI,
                            }),
                            (0, k._7)({
                                emoji: e.emoji,
                                location: i,
                                pickerIntention: n,
                                category: e.category,
                                subCategory: e.subCategory,
                                newlyAddedHighlight:
                                    e.subCategory === Z.tm.NEWLY_ADDED_EMOJI && v.A.isNewerThanLastSeen(l, e.emoji.id),
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
                gridDispatch: h,
                getItemProps: m,
                getRowProps: g,
                gridContainerProps: E,
                handleGridContainerKeyDown: y,
                isUsingKeyboardNavigation: b,
            } = (0, C.Ff)({
                columnCounts: r,
                gridNavigatorId: Z.lq,
                itemGrid: o,
                itemList: s,
                onGridNavigatorItemSelect: p,
                onGridNavigatorPositionChange: ec,
            });
        return (
            i.useEffect(
                () =>
                    I.Om.subscribe(
                        (e) => e.inspectedExpressionPosition,
                        (e) => {
                            if (null == e) return;
                            let { columnIndex: t, rowIndex: n, source: r } = e;
                            r !== T.t.GRID_NAVIGATOR_EVENT &&
                                h({
                                    type: c.n.SET_FOCUSED_POSITION,
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
                handleGridContainerKeyDown: y,
                isUsingKeyboardNavigation: b,
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
                r(I.Om.getState().activeCategoryIndex);
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
    e_ = l()(k.bo, ep),
    eh = l()(k.Wi, ep),
    em = {
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
                emojiSize: T = Z.as.MEDIUM,
                hasTabWrapper: j = !1,
                containerContext: ee = 0,
                onSelectEmoji: en,
                onSelectSoundmoji: el,
                containerWidth: ec,
                onNavigateAway: ep,
                persistSearch: eg,
                className: eE,
                headerClassName: ey,
                analyticsOverride: eb = em,
                searchProps: eO = {},
                wrapper: ev,
                shouldHidePickerActions: eA = !1,
                messageId: eI,
                renderHeader: eS,
                listHeaderClassName: eT,
                categoryListClassName: eC,
                shouldShowSoundmojiInEmojiPicker: eN = !1,
                showOnlyUnicode: ew = !1,
            } = e,
            { onFocus: eR, onKeyDown: eP, autoFocus: eD = !0, accessory: eL } = eO,
            ex = (0, u.bG)([D.Ay], () => (null != f ? D.Ay.getDefaultChannel(f) : null), [f]),
            [eM, ej] = i.useState(null),
            ek = i.useRef(""),
            eU = (0, S.RQ)((e) => e.searchQuery),
            eG = i.useRef(null),
            eF = i.useRef(null),
            eV = i.useRef(null);
        null == c && null != ex && (c = ex);
        let eB = null != (n = null != (a = null == c ? void 0 : c.getGuildId()) ? a : f) ? n : null,
            [eH, eY] = i.useState(!1),
            eW = L.default.getCurrentUser(),
            eK = (0, M.ki)(eW);
        i.useImperativeHandle(t, () => ({
            onPickerOpen: tr,
        }));
        let { location: ez } = (0, m.p)(),
            { page: eq, section: eZ, object: eQ, openPopoutType: eX, popoutLocation: eJ } = eb,
            e$ = i.useMemo(
                () =>
                    er(et({}, ez), {
                        section: null != eZ ? eZ : Q.JJy.EMOJI_PICKER_POPOUT,
                    }),
                [ez, eZ],
            ),
            { analyticsLocations: e0 } = (0, y.Ay)(g.A.EMOJI_PICKER),
            { diversitySurrogate: e1 } = (0, u.cf)([O.Ay], () => ({
                diversitySurrogate: O.Ay.diversitySurrogate,
            })),
            e2 = (0, k.sL)(eU, c, l, ew),
            e3 = null == e2 ? 0 : e2.locked.length + e2.unlocked.length,
            e6 = P.iM.useSetting(),
            e4 = i.useMemo(() => new Set(e6), [e6]),
            e5 = i.useCallback((e) => {
                P.iM.updateSetting(Array.from(e));
            }, []),
            e7 = (0, C.oV)({
                gridWrapperRef: eG,
                containerWidth: ec,
                listPaddingLeft: ea,
                listScrollbarWidth: eo,
            }),
            {
                rowCountBySection: e8,
                sectionDescriptors: e9,
                emojiGrid: te,
                columnCounts: tt,
            } = (0, Y.wu)({
                gridWidth: e7,
                fallbackGuildId: eB,
                channel: c,
                pickerIntention: l,
                emojiSearchResults: e2,
                collapsedSections: e4,
                emojiPaddingHorizontal: ei,
                emojiSpriteSize: T,
                shouldShowSoundmojiInEmojiPicker: eN,
                showOnlyUnicode: ew,
            }),
            { newlyAddedEmojis: tn } = (0, G.A)(eB, l);
        (0, U.y)({
            intention: l,
            isBurstReaction: eH,
            analyticsObject: eQ,
        });
        let tr = i.useCallback(() => {
                let e = tn.length > 0 ? tn[0].id : null;
                (0, A.uV)(eB, e),
                    (0, U.A)({
                        intention: l,
                        isBurstReaction: eH,
                        analyticsObject: eQ,
                    });
            }, [tn, eB, l, eH, eQ]),
            ti = (0, Y.Mq)({
                pickerIntention: l,
                selectedChannel: c,
                fallbackGuildId: eB,
                closePopout: _,
                onSelectEmoji: en,
                setUpsellConfigs: ej,
                emojiSelectAnalytics: (e) => {
                    "" !== eU
                        ? (0, k.Wf)({
                              emoji: e.emoji,
                              location: er(et({}, e$), {
                                  object: Q.ZSU.EMOJI,
                              }),
                              searchQuery: eU,
                              intention: l,
                              messageId: eI,
                          })
                        : (0, k._7)({
                              emoji: e.emoji,
                              location: et(
                                  er(et({}, e$), {
                                      object: null != eQ ? eQ : Q.ZSU.EMOJI,
                                  }),
                                  null != eq && {
                                      page: eq,
                                  },
                              ),
                              pickerIntention: l,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === Z.tm.NEWLY_ADDED_EMOJI && v.A.isNewerThanLastSeen(eB, e.emoji.id),
                              isBurstReaction: eH,
                              messageId: eI,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, k.C5)({
                        emoji: e.emoji,
                        location: er(et({}, e$), {
                            object: Q.ZSU.EMOJI,
                        }),
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
                emojiList: eF,
                channelGuildId: eB,
                isBurstReaction: eH,
            });
        ed(ec, eF),
            ef(ec, e1, eV, eD),
            i.useEffect(() => {
                eg || (0, S.Ri)("");
            }, [eg]),
            i.useEffect(
                () => (
                    x.default.track(
                        Q.HAw.OPEN_POPOUT,
                        et(
                            {
                                type: null != eX ? eX : "Emoji Picker",
                                guild_id: eB,
                                location: eJ,
                            },
                            (0, E.dI)(c),
                        ),
                    ),
                    I.Om.resetStoreState
                ),
                [eX, eB, eJ, c],
            ),
            i.useEffect(() => () => (0, w.sF)(w._2.FAVORITE_EMOJI_TOOLTIP), []),
            i.useLayoutEffect(() => {
                var e;
                let { columnIndex: t, rowIndex: n } = I.Om.getState().inspectedExpressionPosition;
                (null == (e = te[n]) ? void 0 : e[t]) == null && 0 !== t && I.Om.setInspectedExpressionPosition(0, 0);
            }, [te]),
            i.useEffect(() => {
                if (("" === ek.current && "" !== eU && (0, k.EG)(e$, l), 0 === e3 && "" !== eU)) e_(e$, eU);
                else if ("" !== eU && ek.current !== eU) {
                    var e;
                    eh(e3, null != (e = null == e2 ? void 0 : e2.locked.length) ? e : 0, e$, eU, l);
                }
                ek.current = eU;
            }, [eU, e$, e3, e2, l]);
        let td = null != ev ? ev : j ? "div" : p.lGe,
            tf = null != e7;
        if ((null == eM ? void 0 : eM.type) === Y.a2.PREMIUM) {
            let e = R.N.NONE;
            2 === ee ? (e = R.N.PARENT_CONTAINER) : 1 === ee && (e = R.N.TAB_PARENT_CONTAINER),
                (s = (0, r.jsx)(q.A, {
                    onLearnMore: ta,
                    emojiDescriptor: eM.emojiDescriptor,
                    pickerIntention: l,
                    analyticsLocation: e$,
                    onClose: () => ej(null),
                    channel: c,
                    containerContext: e,
                }));
        } else
            (null == eM ? void 0 : eM.type) === Y.a2.ROLE_SUBSCRIPTION
                ? (s = (0, r.jsx)(N.A, {
                      onClose: () => ej(null),
                      guildId: eM.guildId,
                      emojiId: eM.emojiId,
                  }))
                : eH &&
                  !eK &&
                  (s = (0, r.jsx)(F.A, {
                      onDismiss: () => eY(!1),
                  }));
        let tp = (e, t) => {
                ti(
                    e,
                    er(et({}, t), {
                        isBurst: eH,
                    }),
                );
            },
            t_ = () => {
                var e;
                eY(!eH), null == (e = eV.current) || e.focus();
            },
            th = (0, r.jsx)(H.A, {
                channel: c,
                pickerIntention: l,
                emojiListRef: eF,
                onKeyDown: (e) => {
                    null == tc || tc(e), null == eP || eP(e);
                },
                searchBarRef: eV,
                onFocus: eR,
                autoFocus: eD,
                accessory: eL,
                headerClassName: ey,
                diversitySurrogate: e1,
                isBurstReaction: eH,
                onBurstReactionToggle: t_,
                renderHeader: eS,
            }),
            tm = [];
        l === J.b_.REACTION && tm.push(d.M.SUPER_REACTIONS_NITRO_MARKETING),
            O.Ay.hasFavoriteEmojis(eB) || tm.push(d.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tg = (0, r.jsx)(
            h.A,
            er(et({}, e$), {
                children: (0, r.jsxs)(td, {
                    id: Z.Do,
                    "aria-labelledby": j ? Z.k1 : void 0,
                    role: j ? "tabpanel" : void 0,
                    className: o()($.iE, {
                        [$.r6]: j,
                        [$.cB]: eH && eK,
                    }),
                    children: [
                        j ? null : th,
                        (0, r.jsxs)("div", {
                            className: o()($.Fb, eE),
                            onScroll: es,
                            children: [
                                j ? th : null,
                                (0, r.jsxs)("div", {
                                    className: $.uK,
                                    ref: eG,
                                    children: [
                                        (0, r.jsx)(z.A, {
                                            channel: c,
                                            closePopout: _,
                                        }),
                                        (0, r.jsx)(b.Ay, {
                                            contentTypes: tm,
                                            children: (e) => {
                                                let { visibleContent: t, markAsDismissed: n } = e;
                                                if (t === d.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                    return (0, r.jsx)(B.A, {
                                                        markAsDismissed: () => n(X.i.UNKNOWN),
                                                    });
                                            },
                                        }),
                                        eA
                                            ? null
                                            : (0, r.jsx)(
                                                  "div",
                                                  er(
                                                      et(
                                                          {
                                                              className: $.Iy,
                                                              id: Z.lq,
                                                          },
                                                          tl,
                                                      ),
                                                      {
                                                          children: tf
                                                              ? (0, r.jsx)(K.A, {
                                                                    collapsedSections: e4,
                                                                    diversitySurrogate: e1,
                                                                    emojiGrid: te,
                                                                    emojiListRef: eF,
                                                                    emojiSize: T,
                                                                    getEmojiItemProps: to,
                                                                    getEmojiRowProps: ts,
                                                                    gridWidth: e7,
                                                                    isUsingKeyboardNavigation: tu,
                                                                    onEmojiSelect: tp,
                                                                    onSelectSoundmoji: el,
                                                                    setUpsellConfigs: ej,
                                                                    rowCount: te.length,
                                                                    rowCountBySection: e8,
                                                                    sectionDescriptors: e9,
                                                                    setCollapsedSections: e5,
                                                                    channelGuildId: eB,
                                                                    channelId: null == c ? void 0 : c.id,
                                                                    messageId: eI,
                                                                    isBurstReaction: eH,
                                                                    listHeaderClassName: eT,
                                                                })
                                                              : null,
                                                      },
                                                  ),
                                              ),
                                    ],
                                }),
                                (0, r.jsx)(W.Y, {
                                    emojiGrid: te,
                                    className: $.qV,
                                    guildId: eB,
                                    pickerIntention: l,
                                    channel: c,
                                }),
                                s,
                            ],
                        }),
                        eA
                            ? null
                            : (0, r.jsx)(V.A, {
                                  className: o()($.jv, eC),
                                  emojiListRef: eF,
                                  sectionDescriptors: e9,
                                  intention: l,
                                  channel: c,
                                  fallbackGuildId: eB,
                                  shouldShowSoundmojiInEmojiPicker: eN,
                                  showOnlyUnicode: ew,
                              }),
                    ],
                }),
            }),
        );
        return (0, r.jsx)(y.f5, {
            value: e0,
            children: tg,
        });
    },
    eE = i.memo(i.forwardRef(eg));
