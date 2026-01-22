n.d(t, {
    A: () => eE,
    f: () => el,
}),
    n(896048),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(111956),
    l = n.n(o),
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
    b = n(688810),
    y = n(379848),
    O = n(508675),
    A = n(598770),
    v = n(451731),
    S = n(850992),
    I = n(151271),
    T = n(60587),
    C = n(887695),
    N = n(564068),
    R = n(450510),
    w = n(421162),
    P = n(253932),
    D = n(808728),
    x = n(287809),
    L = n(954571),
    j = n(474090),
    M = n(240248),
    k = n(822123),
    U = n(141862),
    G = n(316884),
    V = n(370968),
    F = n(653145),
    B = n(624751),
    H = n(867738),
    Y = n(484333),
    W = n(815082),
    K = n(775505),
    z = n(178898),
    q = n(148361),
    X = n(732139),
    Z = n(652215),
    Q = n(49999),
    $ = n(307731),
    J = n(836553);

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
let ei = (0, M.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    ea = (0, M.xI)(f.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    es = 8,
    eo = (e) => e.stopPropagation();
var el = (function (e) {
    return (
        (e[(e.NONE = 0)] = "NONE"),
        (e[(e.TABS_EXPRESSION_PICKER = 1)] = "TABS_EXPRESSION_PICKER"),
        (e[(e.NO_TABS_EXPRESSION_PICKER = 2)] = "NO_TABS_EXPRESSION_PICKER"),
        e
    );
})({});
let ec = (e, t) => {
        S.Om.setInspectedExpressionPosition(e, t, T.t.GRID_NAVIGATOR_EVENT);
    },
    eu = (e) => {
        let {
                analyticsLocation: t,
                pickerIntention: n,
                columnCounts: r,
                onSelectEmoji: a,
                emojiGrid: s,
                emojiList: o,
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
                                          object: Z.ZSU.EMOJI,
                                      }),
                                  }),
                                  (0, _.V4)(e.emoji)));
                        let i = {
                            page: null != l ? Z.liQ.GUILD_CHANNEL : Z.liQ.DM_CHANNEL,
                            section: Z.JJy.EMOJI_PICKER_POPOUT,
                            object: Z.ZSU.EMOJI,
                        };
                        d &&
                            (i = {
                                page: null != l ? Z.liQ.GUILD_CHANNEL : Z.liQ.DM_CHANNEL,
                                section: Z.JJy.EMOJI_PICKER_POPOUT,
                                object: Z.ZSU.EMOJI,
                            }),
                            (0, k._7)({
                                emoji: e.emoji,
                                location: i,
                                pickerIntention: n,
                                category: e.category,
                                subCategory: e.subCategory,
                                newlyAddedHighlight:
                                    e.subCategory === X.tm.NEWLY_ADDED_EMOJI && A.A.isNewerThanLastSeen(l, e.emoji.id),
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
                handleGridContainerKeyDown: b,
                isUsingKeyboardNavigation: y,
            } = (0, C.Ff)({
                columnCounts: r,
                gridNavigatorId: X.lq,
                itemGrid: s,
                itemList: o,
                onGridNavigatorItemSelect: p,
                onGridNavigatorPositionChange: ec,
            });
        return (
            i.useEffect(
                () =>
                    S.Om.subscribe(
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
                r(S.Om.getState().activeCategoryIndex);
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
        let o,
            {
                pickerIntention: l,
                channel: c,
                guildId: f,
                closePopout: _,
                emojiSize: T = X.as.MEDIUM,
                hasTabWrapper: M = !1,
                containerContext: ee = 0,
                onSelectEmoji: en,
                onSelectSoundmoji: el,
                containerWidth: ec,
                onNavigateAway: ep,
                persistSearch: eg,
                className: eE,
                headerClassName: eb,
                analyticsOverride: ey = em,
                searchProps: eO = {},
                wrapper: eA,
                shouldHidePickerActions: ev = !1,
                messageId: eS,
                renderHeader: eI,
                listHeaderClassName: eT,
                categoryListClassName: eC,
                shouldShowSoundmojiInEmojiPicker: eN = !1,
                showOnlyUnicode: eR = !1,
            } = e,
            { onFocus: ew, onKeyDown: eP, autoFocus: eD = !0, accessory: ex } = eO,
            eL = (0, u.bG)([D.Ay], () => (null != f ? D.Ay.getDefaultChannel(f) : null), [f]),
            [ej, eM] = i.useState(null),
            ek = i.useRef(""),
            eU = (0, I.RQ)((e) => e.searchQuery),
            eG = i.useRef(null),
            eV = i.useRef(null),
            eF = i.useRef(null);
        null == c && null != eL && (c = eL);
        let eB = null != (n = null != (a = null == c ? void 0 : c.getGuildId()) ? a : f) ? n : null,
            [eH, eY] = i.useState(!1),
            eW = x.default.getCurrentUser(),
            eK = (0, j.ki)(eW);
        i.useImperativeHandle(t, () => ({
            onPickerOpen: tr,
        }));
        let { location: ez } = (0, m.p)(),
            { page: eq, section: eX, object: eZ, openPopoutType: eQ, popoutLocation: e$ } = ey,
            eJ = i.useMemo(
                () =>
                    er(et({}, ez), {
                        section: null != eX ? eX : Z.JJy.EMOJI_PICKER_POPOUT,
                    }),
                [ez, eX],
            ),
            { analyticsLocations: e0 } = (0, b.Ay)(g.A.EMOJI_PICKER),
            { diversitySurrogate: e1 } = (0, u.cf)([O.Ay], () => ({
                diversitySurrogate: O.Ay.diversitySurrogate,
            })),
            e2 = (0, k.sL)(eU, c, l, eR),
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
                listScrollbarWidth: es,
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
                showOnlyUnicode: eR,
            }),
            { newlyAddedEmojis: tn } = (0, G.A)(eB, l);
        (0, U.y)({
            intention: l,
            isBurstReaction: eH,
            analyticsObject: eZ,
        });
        let tr = i.useCallback(() => {
                let e = tn.length > 0 ? tn[0].id : null;
                (0, v.uV)(eB, e),
                    (0, U.A)({
                        intention: l,
                        isBurstReaction: eH,
                        analyticsObject: eZ,
                    });
            }, [tn, eB, l, eH, eZ]),
            ti = (0, Y.Mq)({
                pickerIntention: l,
                selectedChannel: c,
                fallbackGuildId: eB,
                closePopout: _,
                onSelectEmoji: en,
                setUpsellConfigs: eM,
                emojiSelectAnalytics: (e) => {
                    "" !== eU
                        ? (0, k.Wf)({
                              emoji: e.emoji,
                              location: er(et({}, eJ), {
                                  object: Z.ZSU.EMOJI,
                              }),
                              searchQuery: eU,
                              intention: l,
                          })
                        : (0, k._7)({
                              emoji: e.emoji,
                              location: et(
                                  er(et({}, eJ), {
                                      object: null != eZ ? eZ : Z.ZSU.EMOJI,
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
                                  e.subCategory === X.tm.NEWLY_ADDED_EMOJI && A.A.isNewerThanLastSeen(eB, e.emoji.id),
                              isBurstReaction: eH,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, k.C5)({
                        emoji: e.emoji,
                        location: er(et({}, eJ), {
                            object: Z.ZSU.EMOJI,
                        }),
                    });
                },
            }),
            ta = i.useCallback(() => {
                _(), null == ep || ep();
            }, [_, ep]),
            {
                getItemProps: ts,
                getRowProps: to,
                gridContainerProps: tl,
                handleGridContainerKeyDown: tc,
                isUsingKeyboardNavigation: tu,
            } = eu({
                pickerIntention: l,
                analyticsLocation: eJ,
                columnCounts: tt,
                onSelectEmoji: en,
                emojiGrid: te,
                emojiList: eV,
                channelGuildId: eB,
                isBurstReaction: eH,
            });
        ed(ec, eV),
            ef(ec, e1, eF, eD),
            i.useEffect(() => {
                eg || (0, I.Ri)("");
            }, [eg]),
            i.useEffect(
                () => (
                    L.default.track(
                        Z.HAw.OPEN_POPOUT,
                        et(
                            {
                                type: null != eQ ? eQ : "Emoji Picker",
                                guild_id: eB,
                                location: e$,
                            },
                            (0, E.dI)(c),
                        ),
                    ),
                    S.Om.resetStoreState
                ),
                [eQ, eB, e$, c],
            ),
            i.useEffect(() => () => (0, R.sF)(R._2.FAVORITE_EMOJI_TOOLTIP), []),
            i.useLayoutEffect(() => {
                var e;
                let { columnIndex: t, rowIndex: n } = S.Om.getState().inspectedExpressionPosition;
                (null == (e = te[n]) ? void 0 : e[t]) == null && 0 !== t && S.Om.setInspectedExpressionPosition(0, 0);
            }, [te]),
            i.useEffect(() => {
                if (("" === ek.current && "" !== eU && (0, k.EG)(eJ, l), 0 === e3 && "" !== eU)) e_(eJ, eU);
                else if ("" !== eU && ek.current !== eU) {
                    var e;
                    eh(e3, null != (e = null == e2 ? void 0 : e2.locked.length) ? e : 0, eJ, eU, l);
                }
                ek.current = eU;
            }, [eU, eJ, e3, e2, l]);
        let td = null != eA ? eA : M ? "div" : p.lGe,
            tf = null != e7;
        if ((null == ej ? void 0 : ej.type) === Y.a2.PREMIUM) {
            let e = w.N.NONE;
            2 === ee ? (e = w.N.PARENT_CONTAINER) : 1 === ee && (e = w.N.TAB_PARENT_CONTAINER),
                (o = (0, r.jsx)(q.A, {
                    onLearnMore: ta,
                    emojiDescriptor: ej.emojiDescriptor,
                    pickerIntention: l,
                    analyticsLocation: eJ,
                    onClose: () => eM(null),
                    channel: c,
                    containerContext: e,
                }));
        } else
            (null == ej ? void 0 : ej.type) === Y.a2.ROLE_SUBSCRIPTION
                ? (o = (0, r.jsx)(N.A, {
                      onClose: () => eM(null),
                      guildId: ej.guildId,
                      emojiId: ej.emojiId,
                  }))
                : eH &&
                  !eK &&
                  (o = (0, r.jsx)(V.A, {
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
                eY(!eH), null == (e = eF.current) || e.focus();
            },
            th = (0, r.jsx)(H.A, {
                channel: c,
                pickerIntention: l,
                emojiListRef: eV,
                onKeyDown: (e) => {
                    null == tc || tc(e), null == eP || eP(e);
                },
                searchBarRef: eF,
                onFocus: ew,
                autoFocus: eD,
                accessory: ex,
                headerClassName: eb,
                diversitySurrogate: e1,
                isBurstReaction: eH,
                onBurstReactionToggle: t_,
                renderHeader: eI,
            }),
            tm = [];
        l === $.b_.REACTION && tm.push(d.M.SUPER_REACTIONS_NITRO_MARKETING),
            O.Ay.hasFavoriteEmojis(eB) || tm.push(d.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tg = (0, r.jsx)(
            h.A,
            er(et({}, eJ), {
                children: (0, r.jsxs)(td, {
                    id: X.Do,
                    "aria-labelledby": M ? X.k1 : void 0,
                    role: M ? "tabpanel" : void 0,
                    className: s()(J.iE, {
                        [J.r6]: M,
                        [J.cB]: eH && eK,
                    }),
                    children: [
                        M ? null : th,
                        (0, r.jsxs)("div", {
                            className: s()(J.Fb, eE),
                            onScroll: eo,
                            children: [
                                M ? th : null,
                                (0, r.jsxs)("div", {
                                    className: J.uK,
                                    ref: eG,
                                    children: [
                                        (0, r.jsx)(z.A, {
                                            channel: c,
                                            closePopout: _,
                                        }),
                                        (0, r.jsx)(y.Ay, {
                                            contentTypes: tm,
                                            children: (e) => {
                                                let { visibleContent: t, markAsDismissed: n } = e;
                                                if (t === d.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                    return (0, r.jsx)(B.A, {
                                                        markAsDismissed: () => n(Q.i.UNKNOWN),
                                                    });
                                            },
                                        }),
                                        ev
                                            ? null
                                            : (0, r.jsx)(
                                                  "div",
                                                  er(
                                                      et(
                                                          {
                                                              className: J.Iy,
                                                              id: X.lq,
                                                          },
                                                          tl,
                                                      ),
                                                      {
                                                          children: tf
                                                              ? (0, r.jsx)(K.A, {
                                                                    collapsedSections: e4,
                                                                    diversitySurrogate: e1,
                                                                    emojiGrid: te,
                                                                    emojiListRef: eV,
                                                                    emojiSize: T,
                                                                    getEmojiItemProps: ts,
                                                                    getEmojiRowProps: to,
                                                                    gridWidth: e7,
                                                                    isUsingKeyboardNavigation: tu,
                                                                    onEmojiSelect: tp,
                                                                    onSelectSoundmoji: el,
                                                                    setUpsellConfigs: eM,
                                                                    rowCount: te.length,
                                                                    rowCountBySection: e8,
                                                                    sectionDescriptors: e9,
                                                                    setCollapsedSections: e5,
                                                                    channelGuildId: eB,
                                                                    channelId: null == c ? void 0 : c.id,
                                                                    messageId: eS,
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
                                    className: J.qV,
                                    guildId: eB,
                                    pickerIntention: l,
                                    channel: c,
                                }),
                                o,
                            ],
                        }),
                        ev
                            ? null
                            : (0, r.jsx)(F.A, {
                                  className: s()(J.jv, eC),
                                  emojiListRef: eV,
                                  sectionDescriptors: e9,
                                  intention: l,
                                  channel: c,
                                  fallbackGuildId: eB,
                                  shouldShowSoundmojiInEmojiPicker: eN,
                                  showOnlyUnicode: eR,
                              }),
                    ],
                }),
            }),
        );
        return (0, r.jsx)(b.f5, {
            value: e0,
            children: tg,
        });
    },
    eE = i.memo(i.forwardRef(eg));
