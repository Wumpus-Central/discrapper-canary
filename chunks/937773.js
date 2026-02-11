"use strict";
n.d(t, { A: () => ep, f: () => ea }), n(321073);
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
    h = n(554375),
    p = n(820284),
    g = n(212245),
    E = n(793574),
    A = n(58149),
    I = n(688810),
    T = n(379848),
    y = n(508675),
    S = n(598770),
    v = n(451731),
    C = n(850992),
    b = n(151271),
    N = n(60587),
    R = n(887695),
    O = n(564068),
    D = n(450510),
    L = n(421162),
    w = n(253932),
    x = n(808728),
    P = n(287809),
    M = n(954571),
    k = n(474090),
    U = n(240248),
    G = n(822123),
    F = n(141862),
    V = n(316884),
    B = n(370968),
    j = n(653145),
    H = n(624751),
    Y = n(867738),
    W = n(484333),
    K = n(815082),
    $ = n(775505),
    z = n(178898),
    q = n(148361),
    X = n(732139),
    Z = n(652215),
    Q = n(49999),
    J = n(307731),
    ee = n(836553);
let et = (0, U.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    en = (0, U.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    er = 8,
    ei = (e) => e.stopPropagation();
var ea = (function (e) {
    return (
        (e[(e.NONE = 0)] = "NONE"),
        (e[(e.TABS_EXPRESSION_PICKER = 1)] = "TABS_EXPRESSION_PICKER"),
        (e[(e.NO_TABS_EXPRESSION_PICKER = 2)] = "NO_TABS_EXPRESSION_PICKER"),
        e
    );
})({});
let es = (e, t) => {
        C.Om.setInspectedExpressionPosition(e, t, N.t.GRID_NAVIGATOR_EVENT);
    },
    eo = (e) => {
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
            _ = (0, c.bG)([y.Ay], () => y.Ay.getDisambiguatedEmojiContext(l), [l]),
            f = i.useCallback(
                (e, r) => {
                    if (e.type === W.bm.EMOJI) {
                        if (null != e.emoji && r.altKey)
                            return void (_.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                ? (0, h.Sw)(e.emoji)
                                : ((0, G.C5)({ emoji: e.emoji, location: { ...t, object: Z.ZSU.EMOJI } }),
                                  (0, h.V4)(e.emoji)));
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
                            (0, G._7)({
                                emoji: e.emoji,
                                location: i,
                                pickerIntention: n,
                                category: e.category,
                                subCategory: e.subCategory,
                                newlyAddedHighlight:
                                    e.subCategory === X.tm.NEWLY_ADDED_EMOJI && S.A.isNewerThanLastSeen(l, e.emoji.id),
                            }),
                            a({ emoji: e.emoji, willClose: !r.shiftKey, isBurst: d });
                    }
                },
                [a, l, n, _, t, d],
            ),
            {
                gridDispatch: p,
                getItemProps: g,
                getRowProps: E,
                gridContainerProps: A,
                handleGridContainerKeyDown: I,
                isUsingKeyboardNavigation: T,
            } = (0, R.Ff)({
                columnCounts: r,
                gridNavigatorId: X.lq,
                itemGrid: s,
                itemList: o,
                onGridNavigatorItemSelect: f,
                onGridNavigatorPositionChange: es,
            });
        return (
            i.useEffect(
                () =>
                    C.Om.subscribe(
                        (e) => e.inspectedExpressionPosition,
                        (e) => {
                            if (null == e) return;
                            let { columnIndex: t, rowIndex: n, source: r } = e;
                            r !== N.t.GRID_NAVIGATOR_EVENT && p({ type: u.n.SET_FOCUSED_POSITION, x: t, y: n });
                        },
                    ),
                [p],
            ),
            {
                getItemProps: g,
                getRowProps: E,
                gridContainerProps: A,
                handleGridContainerKeyDown: I,
                isUsingKeyboardNavigation: T,
            }
        );
    },
    el = (e, t) => {
        let [n, r] = i.useState(null);
        i.useEffect(() => {
            null != n && (t.current?.scrollToSectionTop(n), r(null));
        }, [t, n]),
            i.useEffect(() => {
                r(C.Om.getState().activeCategoryIndex);
            }, [e]);
    },
    eu = (e, t, n, r) => {
        i.useLayoutEffect(() => {
            r && n.current?.focus();
        }, [e, t, n, r]);
    },
    ec = 200,
    ed = l()(G.bo, ec),
    e_ = l()(G.Wi, ec),
    ef = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    eh = function (e, t) {
        let n,
            {
                pickerIntention: a,
                channel: o,
                guildId: l,
                closePopout: u,
                emojiSize: _ = X.as.MEDIUM,
                hasTabWrapper: h = !1,
                containerContext: N = 0,
                onSelectEmoji: U,
                onSelectSoundmoji: ea,
                containerWidth: es,
                onNavigateAway: ec,
                persistSearch: eh,
                className: ep,
                headerClassName: em,
                analyticsOverride: eg = ef,
                searchProps: eE = {},
                wrapper: eA,
                shouldHidePickerActions: eI = !1,
                messageId: eT,
                renderHeader: ey,
                listHeaderClassName: eS,
                categoryListClassName: ev,
                shouldShowSoundmojiInEmojiPicker: eC = !1,
                showOnlyUnicode: eb = !1,
            } = e,
            { onFocus: eN, onKeyDown: eR, autoFocus: eO = !0, accessory: eD } = eE,
            eL = (0, c.bG)([x.Ay], () => (null != l ? x.Ay.getDefaultChannel(l) : null), [l]),
            [ew, ex] = i.useState(null),
            eP = i.useRef(""),
            eM = (0, b.RQ)((e) => e.searchQuery),
            ek = i.useRef(null),
            eU = i.useRef(null),
            eG = i.useRef(null);
        null == o && null != eL && (o = eL);
        let eF = o?.getGuildId() ?? l ?? null,
            [eV, eB] = i.useState(!1),
            ej = P.default.getCurrentUser(),
            eH = (0, k.ki)(ej);
        i.useImperativeHandle(t, () => ({ onPickerOpen: te }));
        let { location: eY } = (0, g.p)(),
            { page: eW, section: eK, object: e$, openPopoutType: ez, popoutLocation: eq } = eg,
            eX = i.useMemo(() => ({ ...eY, section: eK ?? Z.JJy.EMOJI_PICKER_POPOUT }), [eY, eK]),
            { analyticsLocations: eZ } = (0, I.Ay)(E.A.EMOJI_PICKER),
            { diversitySurrogate: eQ } = (0, c.cf)([y.Ay], () => ({ diversitySurrogate: y.Ay.diversitySurrogate })),
            eJ = (0, G.sL)(eM, o, a, eb),
            e0 = null == eJ ? 0 : eJ.locked.length + eJ.unlocked.length,
            e1 = w.iM.useSetting(),
            e2 = i.useMemo(() => new Set(e1), [e1]),
            e3 = i.useCallback((e) => {
                w.iM.updateSetting(Array.from(e));
            }, []),
            e6 = (0, R.oV)({ gridWrapperRef: ek, containerWidth: es, listPaddingLeft: en, listScrollbarWidth: er }),
            {
                rowCountBySection: e4,
                sectionDescriptors: e5,
                emojiGrid: e7,
                columnCounts: e8,
            } = (0, W.wu)({
                gridWidth: e6,
                fallbackGuildId: eF,
                channel: o,
                pickerIntention: a,
                emojiSearchResults: eJ,
                collapsedSections: e2,
                emojiPaddingHorizontal: et,
                emojiSpriteSize: _,
                shouldShowSoundmojiInEmojiPicker: eC,
                showOnlyUnicode: eb,
            }),
            { newlyAddedEmojis: e9 } = (0, V.A)(eF, a);
        (0, F.y)({ intention: a, isBurstReaction: eV, analyticsObject: e$ });
        let te = i.useCallback(() => {
                let e = e9.length > 0 ? e9[0].id : null;
                (0, v.uV)(eF, e), (0, F.A)({ intention: a, isBurstReaction: eV, analyticsObject: e$ });
            }, [e9, eF, a, eV, e$]),
            tt = (0, W.Mq)({
                pickerIntention: a,
                selectedChannel: o,
                fallbackGuildId: eF,
                closePopout: u,
                onSelectEmoji: U,
                setUpsellConfigs: ex,
                emojiSelectAnalytics: (e) => {
                    "" !== eM
                        ? (0, G.Wf)({
                              emoji: e.emoji,
                              location: { ...eX, object: Z.ZSU.EMOJI },
                              searchQuery: eM,
                              intention: a,
                              messageId: eT,
                          })
                        : (0, G._7)({
                              emoji: e.emoji,
                              location: { ...eX, object: e$ ?? Z.ZSU.EMOJI, ...(null != eW && { page: eW }) },
                              pickerIntention: a,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === X.tm.NEWLY_ADDED_EMOJI && S.A.isNewerThanLastSeen(eF, e.emoji.id),
                              isBurstReaction: eV,
                              messageId: eT,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, G.C5)({ emoji: e.emoji, location: { ...eX, object: Z.ZSU.EMOJI } });
                },
            }),
            tn = i.useCallback(() => {
                u(), ec?.();
            }, [u, ec]),
            {
                getItemProps: tr,
                getRowProps: ti,
                gridContainerProps: ta,
                handleGridContainerKeyDown: ts,
                isUsingKeyboardNavigation: to,
            } = eo({
                pickerIntention: a,
                analyticsLocation: eX,
                columnCounts: e8,
                onSelectEmoji: U,
                emojiGrid: e7,
                emojiList: eU,
                channelGuildId: eF,
                isBurstReaction: eV,
            });
        el(es, eU),
            eu(es, eQ, eG, eO),
            i.useEffect(() => {
                eh || (0, b.Ri)("");
            }, [eh]),
            i.useEffect(
                () => (
                    M.default.track(Z.HAw.OPEN_POPOUT, {
                        type: ez ?? "Emoji Picker",
                        guild_id: eF,
                        location: eq,
                        ...(0, A.dI)(o),
                    }),
                    C.Om.resetStoreState
                ),
                [ez, eF, eq, o],
            ),
            i.useEffect(() => () => (0, D.sF)(D._2.FAVORITE_EMOJI_TOOLTIP), []),
            i.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = C.Om.getState().inspectedExpressionPosition;
                e7[t]?.[e] == null && 0 !== e && C.Om.setInspectedExpressionPosition(0, 0);
            }, [e7]),
            i.useEffect(() => {
                "" === eP.current && "" !== eM && (0, G.EG)(eX, a),
                    0 === e0 && "" !== eM
                        ? ed(eX, eM)
                        : "" !== eM && eP.current !== eM && e_(e0, eJ?.locked.length ?? 0, eX, eM, a),
                    (eP.current = eM);
            }, [eM, eX, e0, eJ, a]);
        let tl = eA ?? (h ? "div" : f.lGe),
            tu = null != e6;
        if (ew?.type === W.a2.PREMIUM) {
            let e = L.N.NONE;
            2 === N ? (e = L.N.PARENT_CONTAINER) : 1 === N && (e = L.N.TAB_PARENT_CONTAINER),
                (n = (0, r.jsx)(q.A, {
                    onLearnMore: tn,
                    emojiDescriptor: ew.emojiDescriptor,
                    pickerIntention: a,
                    analyticsLocation: eX,
                    onClose: () => ex(null),
                    channel: o,
                    containerContext: e,
                }));
        } else
            ew?.type === W.a2.ROLE_SUBSCRIPTION
                ? (n = (0, r.jsx)(O.A, { onClose: () => ex(null), guildId: ew.guildId, emojiId: ew.emojiId }))
                : eV && !eH && (n = (0, r.jsx)(B.A, { onDismiss: () => eB(!1) }));
        let tc = (e, t) => {
                tt(e, { ...t, isBurst: eV });
            },
            td = () => {
                eB(!eV), eG.current?.focus();
            },
            t_ = (0, r.jsx)(Y.A, {
                channel: o,
                pickerIntention: a,
                emojiListRef: eU,
                onKeyDown: (e) => {
                    ts?.(e), eR?.(e);
                },
                searchBarRef: eG,
                onFocus: eN,
                autoFocus: eO,
                accessory: eD,
                headerClassName: em,
                diversitySurrogate: eQ,
                isBurstReaction: eV,
                onBurstReactionToggle: td,
                renderHeader: ey,
            }),
            tf = [];
        a === J.b_.REACTION && tf.push(d.M.SUPER_REACTIONS_NITRO_MARKETING),
            y.Ay.hasFavoriteEmojis(eF) || tf.push(d.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let th = (0, r.jsx)(p.A, {
            ...eX,
            children: (0, r.jsxs)(tl, {
                id: X.Do,
                "aria-labelledby": h ? X.k1 : void 0,
                role: h ? "tabpanel" : void 0,
                className: s()(ee.iE, { [ee.r6]: h, [ee.cB]: eV && eH }),
                children: [
                    h ? null : t_,
                    (0, r.jsxs)("div", {
                        className: s()(ee.Fb, ep),
                        onScroll: ei,
                        children: [
                            h ? t_ : null,
                            (0, r.jsxs)("div", {
                                className: ee.uK,
                                ref: ek,
                                children: [
                                    (0, r.jsx)(z.A, { channel: o, closePopout: u }),
                                    (0, r.jsx)(T.Ay, {
                                        contentTypes: tf,
                                        children: (e) => {
                                            let { visibleContent: t, markAsDismissed: n } = e;
                                            if (t === d.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                return (0, r.jsx)(H.A, { markAsDismissed: () => n(Q.i.UNKNOWN) });
                                        },
                                    }),
                                    eI
                                        ? null
                                        : (0, r.jsx)("div", {
                                              className: ee.Iy,
                                              id: X.lq,
                                              ...ta,
                                              children: tu
                                                  ? (0, r.jsx)($.A, {
                                                        collapsedSections: e2,
                                                        diversitySurrogate: eQ,
                                                        emojiGrid: e7,
                                                        emojiListRef: eU,
                                                        emojiSize: _,
                                                        getEmojiItemProps: tr,
                                                        getEmojiRowProps: ti,
                                                        gridWidth: e6,
                                                        isUsingKeyboardNavigation: to,
                                                        onEmojiSelect: tc,
                                                        onSelectSoundmoji: ea,
                                                        setUpsellConfigs: ex,
                                                        rowCount: e7.length,
                                                        rowCountBySection: e4,
                                                        sectionDescriptors: e5,
                                                        setCollapsedSections: e3,
                                                        channelGuildId: eF,
                                                        channelId: o?.id,
                                                        messageId: eT,
                                                        isBurstReaction: eV,
                                                        listHeaderClassName: eS,
                                                    })
                                                  : null,
                                          }),
                                ],
                            }),
                            (0, r.jsx)(K.Y, {
                                emojiGrid: e7,
                                className: ee.qV,
                                guildId: eF,
                                pickerIntention: a,
                                channel: o,
                            }),
                            n,
                        ],
                    }),
                    eI
                        ? null
                        : (0, r.jsx)(j.A, {
                              className: s()(ee.jv, ev),
                              emojiListRef: eU,
                              sectionDescriptors: e5,
                              intention: a,
                              channel: o,
                              fallbackGuildId: eF,
                              shouldShowSoundmojiInEmojiPicker: eC,
                              showOnlyUnicode: eb,
                          }),
                ],
            }),
        });
        return (0, r.jsx)(I.f5, { value: eZ, children: th });
    },
    ep = i.memo(i.forwardRef(eh));
