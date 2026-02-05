"use strict";
n.d(t, { A: () => ep, f: () => ei }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(793574),
    E = n(58149),
    A = n(688810),
    I = n(379848),
    T = n(508675),
    y = n(598770),
    S = n(451731),
    v = n(850992),
    C = n(151271),
    b = n(60587),
    N = n(887695),
    R = n(564068),
    O = n(450510),
    D = n(421162),
    L = n(253932),
    w = n(808728),
    x = n(287809),
    P = n(954571),
    M = n(474090),
    k = n(240248),
    U = n(822123),
    G = n(141862),
    V = n(316884),
    F = n(370968),
    B = n(653145),
    j = n(624751),
    H = n(867738),
    Y = n(484333),
    W = n(815082),
    K = n(775505),
    z = n(178898),
    $ = n(148361),
    q = n(732139),
    Z = n(652215),
    Q = n(49999),
    X = n(307731),
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
let ea = (e, t) => {
        v.Om.setInspectedExpressionPosition(e, t, b.t.GRID_NAVIGATOR_EVENT);
    },
    es = (e) => {
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
                                    e.subCategory === q.tm.NEWLY_ADDED_EMOJI && y.A.isNewerThanLastSeen(l, e.emoji.id),
                            }),
                            a({ emoji: e.emoji, willClose: !r.shiftKey, isBurst: d });
                    }
                },
                [a, l, n, _, t, d],
            ),
            {
                gridDispatch: h,
                getItemProps: m,
                getRowProps: g,
                gridContainerProps: E,
                handleGridContainerKeyDown: A,
                isUsingKeyboardNavigation: I,
            } = (0, N.Ff)({
                columnCounts: r,
                gridNavigatorId: q.lq,
                itemGrid: s,
                itemList: o,
                onGridNavigatorItemSelect: f,
                onGridNavigatorPositionChange: ea,
            });
        return (
            i.useEffect(
                () =>
                    v.Om.subscribe(
                        (e) => e.inspectedExpressionPosition,
                        (e) => {
                            if (null == e) return;
                            let { columnIndex: t, rowIndex: n, source: r } = e;
                            r !== b.t.GRID_NAVIGATOR_EVENT && h({ type: u.n.SET_FOCUSED_POSITION, x: t, y: n });
                        },
                    ),
                [h],
            ),
            {
                getItemProps: m,
                getRowProps: g,
                gridContainerProps: E,
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
                pickerIntention: a,
                channel: o,
                guildId: l,
                closePopout: u,
                emojiSize: _ = q.as.MEDIUM,
                hasTabWrapper: p = !1,
                containerContext: b = 0,
                onSelectEmoji: k,
                onSelectSoundmoji: ei,
                containerWidth: ea,
                onNavigateAway: eu,
                persistSearch: ef,
                className: ep,
                headerClassName: eh,
                analyticsOverride: em = e_,
                searchProps: eg = {},
                wrapper: eE,
                shouldHidePickerActions: eA = !1,
                messageId: eI,
                renderHeader: eT,
                listHeaderClassName: ey,
                categoryListClassName: eS,
                shouldShowSoundmojiInEmojiPicker: ev = !1,
                showOnlyUnicode: eC = !1,
            } = e,
            { onFocus: eb, onKeyDown: eN, autoFocus: eR = !0, accessory: eO } = eg,
            eD = (0, c.bG)([w.Ay], () => (null != l ? w.Ay.getDefaultChannel(l) : null), [l]),
            [eL, ew] = i.useState(null),
            ex = i.useRef(""),
            eP = (0, C.RQ)((e) => e.searchQuery),
            eM = i.useRef(null),
            ek = i.useRef(null),
            eU = i.useRef(null);
        null == o && null != eD && (o = eD);
        let eG = o?.getGuildId() ?? l ?? null,
            [eV, eF] = i.useState(!1),
            eB = x.default.getCurrentUser(),
            ej = (0, M.ki)(eB);
        i.useImperativeHandle(t, () => ({ onPickerOpen: e9 }));
        let { location: eH } = (0, m.p)(),
            { page: eY, section: eW, object: eK, openPopoutType: ez, popoutLocation: e$ } = em,
            eq = i.useMemo(() => ({ ...eH, section: eW ?? Z.JJy.EMOJI_PICKER_POPOUT }), [eH, eW]),
            { analyticsLocations: eZ } = (0, A.Ay)(g.A.EMOJI_PICKER),
            { diversitySurrogate: eQ } = (0, c.cf)([T.Ay], () => ({ diversitySurrogate: T.Ay.diversitySurrogate })),
            eX = (0, U.sL)(eP, o, a, eC),
            eJ = null == eX ? 0 : eX.locked.length + eX.unlocked.length,
            e0 = L.iM.useSetting(),
            e1 = i.useMemo(() => new Set(e0), [e0]),
            e2 = i.useCallback((e) => {
                L.iM.updateSetting(Array.from(e));
            }, []),
            e3 = (0, N.oV)({ gridWrapperRef: eM, containerWidth: ea, listPaddingLeft: et, listScrollbarWidth: en }),
            {
                rowCountBySection: e6,
                sectionDescriptors: e4,
                emojiGrid: e5,
                columnCounts: e7,
            } = (0, Y.wu)({
                gridWidth: e3,
                fallbackGuildId: eG,
                channel: o,
                pickerIntention: a,
                emojiSearchResults: eX,
                collapsedSections: e1,
                emojiPaddingHorizontal: ee,
                emojiSpriteSize: _,
                shouldShowSoundmojiInEmojiPicker: ev,
                showOnlyUnicode: eC,
            }),
            { newlyAddedEmojis: e8 } = (0, V.A)(eG, a);
        (0, G.y)({ intention: a, isBurstReaction: eV, analyticsObject: eK });
        let e9 = i.useCallback(() => {
                let e = e8.length > 0 ? e8[0].id : null;
                (0, S.uV)(eG, e), (0, G.A)({ intention: a, isBurstReaction: eV, analyticsObject: eK });
            }, [e8, eG, a, eV, eK]),
            te = (0, Y.Mq)({
                pickerIntention: a,
                selectedChannel: o,
                fallbackGuildId: eG,
                closePopout: u,
                onSelectEmoji: k,
                setUpsellConfigs: ew,
                emojiSelectAnalytics: (e) => {
                    "" !== eP
                        ? (0, U.Wf)({
                              emoji: e.emoji,
                              location: { ...eq, object: Z.ZSU.EMOJI },
                              searchQuery: eP,
                              intention: a,
                              messageId: eI,
                          })
                        : (0, U._7)({
                              emoji: e.emoji,
                              location: { ...eq, object: eK ?? Z.ZSU.EMOJI, ...(null != eY && { page: eY }) },
                              pickerIntention: a,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === q.tm.NEWLY_ADDED_EMOJI && y.A.isNewerThanLastSeen(eG, e.emoji.id),
                              isBurstReaction: eV,
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
                handleGridContainerKeyDown: ta,
                isUsingKeyboardNavigation: ts,
            } = es({
                pickerIntention: a,
                analyticsLocation: eq,
                columnCounts: e7,
                onSelectEmoji: k,
                emojiGrid: e5,
                emojiList: ek,
                channelGuildId: eG,
                isBurstReaction: eV,
            });
        eo(ea, ek),
            el(ea, eQ, eU, eR),
            i.useEffect(() => {
                ef || (0, C.Ri)("");
            }, [ef]),
            i.useEffect(
                () => (
                    P.default.track(Z.HAw.OPEN_POPOUT, {
                        type: ez ?? "Emoji Picker",
                        guild_id: eG,
                        location: e$,
                        ...(0, E.dI)(o),
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
                "" === ex.current && "" !== eP && (0, U.EG)(eq, a),
                    0 === eJ && "" !== eP
                        ? ec(eq, eP)
                        : "" !== eP && ex.current !== eP && ed(eJ, eX?.locked.length ?? 0, eq, eP, a),
                    (ex.current = eP);
            }, [eP, eq, eJ, eX, a]);
        let to = eE ?? (p ? "div" : f.lGe),
            tl = null != e3;
        if (eL?.type === Y.a2.PREMIUM) {
            let e = D.N.NONE;
            2 === b ? (e = D.N.PARENT_CONTAINER) : 1 === b && (e = D.N.TAB_PARENT_CONTAINER),
                (n = (0, r.jsx)($.A, {
                    onLearnMore: tt,
                    emojiDescriptor: eL.emojiDescriptor,
                    pickerIntention: a,
                    analyticsLocation: eq,
                    onClose: () => ew(null),
                    channel: o,
                    containerContext: e,
                }));
        } else
            eL?.type === Y.a2.ROLE_SUBSCRIPTION
                ? (n = (0, r.jsx)(R.A, { onClose: () => ew(null), guildId: eL.guildId, emojiId: eL.emojiId }))
                : eV && !ej && (n = (0, r.jsx)(F.A, { onDismiss: () => eF(!1) }));
        let tu = (e, t) => {
                te(e, { ...t, isBurst: eV });
            },
            tc = () => {
                eF(!eV), eU.current?.focus();
            },
            td = (0, r.jsx)(H.A, {
                channel: o,
                pickerIntention: a,
                emojiListRef: ek,
                onKeyDown: (e) => {
                    ta?.(e), eN?.(e);
                },
                searchBarRef: eU,
                onFocus: eb,
                autoFocus: eR,
                accessory: eO,
                headerClassName: eh,
                diversitySurrogate: eQ,
                isBurstReaction: eV,
                onBurstReactionToggle: tc,
                renderHeader: eT,
            }),
            t_ = [];
        a === X.b_.REACTION && t_.push(d.M.SUPER_REACTIONS_NITRO_MARKETING),
            T.Ay.hasFavoriteEmojis(eG) || t_.push(d.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let tf = (0, r.jsx)(h.A, {
            ...eq,
            children: (0, r.jsxs)(to, {
                id: q.Do,
                "aria-labelledby": p ? q.k1 : void 0,
                role: p ? "tabpanel" : void 0,
                className: s()(J.iE, { [J.r6]: p, [J.cB]: eV && ej }),
                children: [
                    p ? null : td,
                    (0, r.jsxs)("div", {
                        className: s()(J.Fb, ep),
                        onScroll: er,
                        children: [
                            p ? td : null,
                            (0, r.jsxs)("div", {
                                className: J.uK,
                                ref: eM,
                                children: [
                                    (0, r.jsx)(z.A, { channel: o, closePopout: u }),
                                    (0, r.jsx)(I.Ay, {
                                        contentTypes: t_,
                                        children: (e) => {
                                            let { visibleContent: t, markAsDismissed: n } = e;
                                            if (t === d.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                return (0, r.jsx)(j.A, { markAsDismissed: () => n(Q.i.UNKNOWN) });
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
                                                        diversitySurrogate: eQ,
                                                        emojiGrid: e5,
                                                        emojiListRef: ek,
                                                        emojiSize: _,
                                                        getEmojiItemProps: tn,
                                                        getEmojiRowProps: tr,
                                                        gridWidth: e3,
                                                        isUsingKeyboardNavigation: ts,
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
                                                        isBurstReaction: eV,
                                                        listHeaderClassName: ey,
                                                    })
                                                  : null,
                                          }),
                                ],
                            }),
                            (0, r.jsx)(W.Y, {
                                emojiGrid: e5,
                                className: J.qV,
                                guildId: eG,
                                pickerIntention: a,
                                channel: o,
                            }),
                            n,
                        ],
                    }),
                    eA
                        ? null
                        : (0, r.jsx)(B.A, {
                              className: s()(J.jv, eS),
                              emojiListRef: ek,
                              sectionDescriptors: e4,
                              intention: a,
                              channel: o,
                              fallbackGuildId: eG,
                              shouldShowSoundmojiInEmojiPicker: ev,
                              showOnlyUnicode: eC,
                          }),
                ],
            }),
        });
        return (0, r.jsx)(A.f5, { value: eZ, children: tf });
    },
    ep = i.memo(i.forwardRef(ef));
