"use strict";
n.d(t, { A: () => ep, f: () => ei }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(111956),
    l = n.n(o),
    u = n(788413),
    c = n(311907),
    d = n(554146),
    _ = n(319060),
    f = n(397927),
    p = n(554375),
    h = n(820284),
    m = n(212245),
    E = n(793574),
    g = n(58149),
    A = n(688810),
    I = n(379848),
    T = n(508675),
    S = n(598770),
    y = n(451731),
    v = n(850992),
    N = n(151271),
    C = n(60587),
    b = n(887695),
    R = n(564068),
    O = n(450510),
    D = n(421162),
    L = n(253932),
    w = n(808728),
    x = n(287809),
    M = n(954571),
    P = n(474090),
    k = n(240248),
    U = n(822123),
    G = n(141862),
    F = n(316884),
    V = n(370968),
    B = n(653145),
    H = n(624751),
    j = n(867738),
    Y = n(484333),
    W = n(815082),
    K = n(775505),
    z = n(178898),
    $ = n(148361),
    q = n(732139),
    Z = n(652215),
    X = n(49999),
    Q = n(307731),
    J = n(836553);
let ee = (0, k.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    et = (0, k.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    en = 8,
    er = (e) => e.stopPropagation();
var ei = (function (e) {
    return (
        (e[(e.NONE = 0)] = "NONE"),
        (e[(e.TABS_EXPRESSION_PICKER = 1)] = "TABS_EXPRESSION_PICKER"),
        (e[(e.NO_TABS_EXPRESSION_PICKER = 2)] = "NO_TABS_EXPRESSION_PICKER"),
        e
    );
})({});
let es = (e, t) => {
        v.Om.setInspectedExpressionPosition(e, t, C.t.GRID_NAVIGATOR_EVENT);
    },
    ea = (e) => {
        let {
                analyticsLocation: t,
                pickerIntention: n,
                columnCounts: r,
                onSelectEmoji: s,
                emojiGrid: a,
                emojiList: o,
                channelGuildId: l,
                isBurstReaction: d,
            } = e,
            _ = (0, c.bG)([T.Ay], () => T.Ay.getDisambiguatedEmojiContext(l), [l]),
            f = i.useCallback(
                (e, r) => {
                    if (e.type === Y.bm.EMOJI) {
                        if (null != e.emoji && r.altKey)
                            return void (_.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                ? (0, p.Sw)(e.emoji)
                                : ((0, U.C5)({ emoji: e.emoji, location: { ...t, object: Z.ZSU.EMOJI } }),
                                  (0, p.V4)(e.emoji)));
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
                            (0, U._7)({
                                emoji: e.emoji,
                                location: i,
                                pickerIntention: n,
                                category: e.category,
                                subCategory: e.subCategory,
                                newlyAddedHighlight:
                                    e.subCategory === q.tm.NEWLY_ADDED_EMOJI && S.A.isNewerThanLastSeen(l, e.emoji.id),
                            }),
                            s({ emoji: e.emoji, willClose: !r.shiftKey, isBurst: d });
                    }
                },
                [s, l, n, _, t, d],
            ),
            {
                gridDispatch: h,
                getItemProps: m,
                getRowProps: E,
                gridContainerProps: g,
                handleGridContainerKeyDown: A,
                isUsingKeyboardNavigation: I,
            } = (0, b.Ff)({
                columnCounts: r,
                gridNavigatorId: q.lq,
                itemGrid: a,
                itemList: o,
                onGridNavigatorItemSelect: f,
                onGridNavigatorPositionChange: es,
            });
        return (
            i.useEffect(
                () =>
                    v.Om.subscribe(
                        (e) => e.inspectedExpressionPosition,
                        (e) => {
                            if (null == e) return;
                            let { columnIndex: t, rowIndex: n, source: r } = e;
                            r !== C.t.GRID_NAVIGATOR_EVENT && h({ type: u.n.SET_FOCUSED_POSITION, x: t, y: n });
                        },
                    ),
                [h],
            ),
            {
                getItemProps: m,
                getRowProps: E,
                gridContainerProps: g,
                handleGridContainerKeyDown: A,
                isUsingKeyboardNavigation: I,
            }
        );
    },
    eo = (e, t) => {
        let [n, r] = i.useState(null);
        i.useEffect(() => {
            null != n && (t.current?.scrollToSectionTop(n), r(null));
        }, [t, n]),
            i.useEffect(() => {
                r(v.Om.getState().activeCategoryIndex);
            }, [e]);
    },
    el = (e, t, n, r) => {
        i.useLayoutEffect(() => {
            r && n.current?.focus();
        }, [e, t, n, r]);
    },
    eu = 200,
    ec = l()(U.bo, eu),
    ed = l()(U.Wi, eu),
    e_ = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    ef = function (e, t) {
        let n,
            {
                pickerIntention: s,
                channel: o,
                guildId: l,
                closePopout: u,
                emojiSize: _ = q.as.MEDIUM,
                hasTabWrapper: p = !1,
                containerContext: C = 0,
                onSelectEmoji: k,
                onSelectSoundmoji: ei,
                containerWidth: es,
                onNavigateAway: eu,
                persistSearch: ef,
                className: ep,
                headerClassName: eh,
                analyticsOverride: em = e_,
                searchProps: eE = {},
                wrapper: eg,
                shouldHidePickerActions: eA = !1,
                messageId: eI,
                renderHeader: eT,
                listHeaderClassName: eS,
                categoryListClassName: ey,
                shouldShowSoundmojiInEmojiPicker: ev = !1,
                showOnlyUnicode: eN = !1,
            } = e,
            { onFocus: eC, onKeyDown: eb, autoFocus: eR = !0, accessory: eO } = eE,
            eD = (0, c.bG)([w.Ay], () => (null != l ? w.Ay.getDefaultChannel(l) : null), [l]),
            [eL, ew] = i.useState(null),
            ex = i.useRef(""),
            eM = (0, N.RQ)((e) => e.searchQuery),
            eP = i.useRef(null),
            ek = i.useRef(null),
            eU = i.useRef(null);
        null == o && null != eD && (o = eD);
        let eG = o?.getGuildId() ?? l ?? null,
            [eF, eV] = i.useState(!1),
            eB = x.default.getCurrentUser(),
            eH = (0, P.ki)(eB);
        i.useImperativeHandle(t, () => ({ onPickerOpen: e9 }));
        let { location: ej } = (0, m.p)(),
            { page: eY, section: eW, object: eK, openPopoutType: ez, popoutLocation: e$ } = em,
            eq = i.useMemo(() => ({ ...ej, section: eW ?? Z.JJy.EMOJI_PICKER_POPOUT }), [ej, eW]),
            { analyticsLocations: eZ } = (0, A.Ay)(E.A.EMOJI_PICKER),
            { diversitySurrogate: eX } = (0, c.cf)([T.Ay], () => ({ diversitySurrogate: T.Ay.diversitySurrogate })),
            eQ = (0, U.sL)(eM, o, s, eN),
            eJ = null == eQ ? 0 : eQ.locked.length + eQ.unlocked.length,
            e0 = L.iM.useSetting(),
            e1 = i.useMemo(() => new Set(e0), [e0]),
            e2 = i.useCallback((e) => {
                L.iM.updateSetting(Array.from(e));
            }, []),
            e3 = (0, b.oV)({ gridWrapperRef: eP, containerWidth: es, listPaddingLeft: et, listScrollbarWidth: en }),
            {
                rowCountBySection: e6,
                sectionDescriptors: e4,
                emojiGrid: e5,
                columnCounts: e7,
            } = (0, Y.wu)({
                gridWidth: e3,
                fallbackGuildId: eG,
                channel: o,
                pickerIntention: s,
                emojiSearchResults: eQ,
                collapsedSections: e1,
                emojiPaddingHorizontal: ee,
                emojiSpriteSize: _,
                shouldShowSoundmojiInEmojiPicker: ev,
                showOnlyUnicode: eN,
            }),
            { newlyAddedEmojis: e8 } = (0, F.A)(eG, s);
        (0, G.y)({ intention: s, isBurstReaction: eF, analyticsObject: eK });
        let e9 = i.useCallback(() => {
                let e = e8.length > 0 ? e8[0].id : null;
                (0, y.uV)(eG, e), (0, G.A)({ intention: s, isBurstReaction: eF, analyticsObject: eK });
            }, [e8, eG, s, eF, eK]),
            te = (0, Y.Mq)({
                pickerIntention: s,
                selectedChannel: o,
                fallbackGuildId: eG,
                closePopout: u,
                onSelectEmoji: k,
                setUpsellConfigs: ew,
                emojiSelectAnalytics: (e) => {
                    "" !== eM
                        ? (0, U.Wf)({
                              emoji: e.emoji,
                              location: { ...eq, object: Z.ZSU.EMOJI },
                              searchQuery: eM,
                              intention: s,
                              messageId: eI,
                          })
                        : (0, U._7)({
                              emoji: e.emoji,
                              location: { ...eq, object: eK ?? Z.ZSU.EMOJI, ...(null != eY && { page: eY }) },
                              pickerIntention: s,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === q.tm.NEWLY_ADDED_EMOJI && S.A.isNewerThanLastSeen(eG, e.emoji.id),
                              isBurstReaction: eF,
                              messageId: eI,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, U.C5)({ emoji: e.emoji, location: { ...eq, object: Z.ZSU.EMOJI } });
                },
            }),
            tt = i.useCallback(() => {
                u(), eu?.();
            }, [u, eu]),
            {
                getItemProps: tn,
                getRowProps: tr,
                gridContainerProps: ti,
                handleGridContainerKeyDown: ts,
                isUsingKeyboardNavigation: ta,
            } = ea({
                pickerIntention: s,
                analyticsLocation: eq,
                columnCounts: e7,
                onSelectEmoji: k,
                emojiGrid: e5,
                emojiList: ek,
                channelGuildId: eG,
                isBurstReaction: eF,
            });
        eo(es, ek),
            el(es, eX, eU, eR),
            i.useEffect(() => {
                ef || (0, N.Ri)("");
            }, [ef]),
            i.useEffect(
                () => (
                    M.default.track(Z.HAw.OPEN_POPOUT, {
                        type: ez ?? "Emoji Picker",
                        guild_id: eG,
                        location: e$,
                        ...(0, g.dI)(o),
                    }),
                    v.Om.resetStoreState
                ),
                [ez, eG, e$, o],
            ),
            i.useEffect(() => () => (0, O.sF)(O._2.FAVORITE_EMOJI_TOOLTIP), []),
            i.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = v.Om.getState().inspectedExpressionPosition;
                e5[t]?.[e] == null && 0 !== e && v.Om.setInspectedExpressionPosition(0, 0);
            }, [e5]),
            i.useEffect(() => {
                "" === ex.current && "" !== eM && (0, U.EG)(eq, s),
                    0 === eJ && "" !== eM
                        ? ec(eq, eM)
                        : "" !== eM && ex.current !== eM && ed(eJ, eQ?.locked.length ?? 0, eq, eM, s),
                    (ex.current = eM);
            }, [eM, eq, eJ, eQ, s]);
        let to = eg ?? (p ? "div" : f.lGe),
            tl = null != e3;
        if (eL?.type === Y.a2.PREMIUM) {
            let e = D.N.NONE;
            2 === C ? (e = D.N.PARENT_CONTAINER) : 1 === C && (e = D.N.TAB_PARENT_CONTAINER),
                (n = (0, r.jsx)($.A, {
                    onLearnMore: tt,
                    emojiDescriptor: eL.emojiDescriptor,
                    pickerIntention: s,
                    analyticsLocation: eq,
                    onClose: () => ew(null),
                    channel: o,
                    containerContext: e,
                }));
        } else
            eL?.type === Y.a2.ROLE_SUBSCRIPTION
                ? (n = (0, r.jsx)(R.A, { onClose: () => ew(null), guildId: eL.guildId, emojiId: eL.emojiId }))
                : eF && !eH && (n = (0, r.jsx)(V.A, { onDismiss: () => eV(!1) }));
        let tu = (e, t) => {
                te(e, { ...t, isBurst: eF });
            },
            tc = () => {
                eV(!eF), eU.current?.focus();
            },
            td = (0, r.jsx)(j.A, {
                channel: o,
                pickerIntention: s,
                emojiListRef: ek,
                onKeyDown: (e) => {
                    ts?.(e), eb?.(e);
                },
                searchBarRef: eU,
                onFocus: eC,
                autoFocus: eR,
                accessory: eO,
                headerClassName: eh,
                diversitySurrogate: eX,
                isBurstReaction: eF,
                onBurstReactionToggle: tc,
                renderHeader: eT,
            }),
            t_ = [];
        s === Q.b_.REACTION && t_.push(d.M.SUPER_REACTIONS_NITRO_MARKETING),
            T.Ay.hasFavoriteEmojis(eG) || t_.push(d.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tf = (0, r.jsx)(h.A, {
            ...eq,
            children: (0, r.jsxs)(to, {
                id: q.Do,
                "aria-labelledby": p ? q.k1 : void 0,
                role: p ? "tabpanel" : void 0,
                className: a()(J.iE, { [J.r6]: p, [J.cB]: eF && eH }),
                children: [
                    p ? null : td,
                    (0, r.jsxs)("div", {
                        className: a()(J.Fb, ep),
                        onScroll: er,
                        children: [
                            p ? td : null,
                            (0, r.jsxs)("div", {
                                className: J.uK,
                                ref: eP,
                                children: [
                                    (0, r.jsx)(z.A, { channel: o, closePopout: u }),
                                    (0, r.jsx)(I.Ay, {
                                        contentTypes: t_,
                                        children: (e) => {
                                            let { visibleContent: t, markAsDismissed: n } = e;
                                            if (t === d.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                return (0, r.jsx)(H.A, { markAsDismissed: () => n(X.i.UNKNOWN) });
                                        },
                                    }),
                                    eA
                                        ? null
                                        : (0, r.jsx)("div", {
                                              className: J.Iy,
                                              id: q.lq,
                                              ...ti,
                                              children: tl
                                                  ? (0, r.jsx)(K.A, {
                                                        collapsedSections: e1,
                                                        diversitySurrogate: eX,
                                                        emojiGrid: e5,
                                                        emojiListRef: ek,
                                                        emojiSize: _,
                                                        getEmojiItemProps: tn,
                                                        getEmojiRowProps: tr,
                                                        gridWidth: e3,
                                                        isUsingKeyboardNavigation: ta,
                                                        onEmojiSelect: tu,
                                                        onSelectSoundmoji: ei,
                                                        setUpsellConfigs: ew,
                                                        rowCount: e5.length,
                                                        rowCountBySection: e6,
                                                        sectionDescriptors: e4,
                                                        setCollapsedSections: e2,
                                                        channelGuildId: eG,
                                                        channelId: o?.id,
                                                        messageId: eI,
                                                        isBurstReaction: eF,
                                                        listHeaderClassName: eS,
                                                    })
                                                  : null,
                                          }),
                                ],
                            }),
                            (0, r.jsx)(W.Y, {
                                emojiGrid: e5,
                                className: J.qV,
                                guildId: eG,
                                pickerIntention: s,
                                channel: o,
                            }),
                            n,
                        ],
                    }),
                    eA
                        ? null
                        : (0, r.jsx)(B.A, {
                              className: a()(J.jv, ey),
                              emojiListRef: ek,
                              sectionDescriptors: e4,
                              intention: s,
                              channel: o,
                              fallbackGuildId: eG,
                              shouldShowSoundmojiInEmojiPicker: ev,
                              showOnlyUnicode: eN,
                          }),
                ],
            }),
        });
        return (0, r.jsx)(A.f5, { value: eZ, children: tf });
    },
    ep = i.memo(i.forwardRef(ef));
