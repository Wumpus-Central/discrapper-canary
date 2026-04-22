"use strict";
n.d(t, { A: () => er }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(111956),
    o = n.n(a),
    c = n(788413),
    u = n(311907),
    d = n(554146),
    h = n(319060),
    m = n(305866),
    p = n(554375),
    f = n(820284),
    g = n(212245),
    _ = n(793574),
    x = n(58149),
    A = n(688810),
    C = n(379848),
    E = n(508675),
    I = n(598770),
    v = n(451731),
    y = n(850992),
    S = n(151271),
    b = n(60587),
    N = n(887695),
    T = n(564068),
    j = n(450510),
    R = n(253932),
    w = n(808728),
    L = n(287809),
    M = n(954571),
    k = n(474090),
    O = n(240248),
    P = n(822123),
    D = n(141862),
    U = n(316884),
    V = n(370968),
    G = n(653145),
    F = n(624751),
    B = n(867738),
    H = n(484333),
    W = n(815082),
    K = n(775505),
    z = n(178898),
    Z = n(148361),
    q = n(732139),
    Y = n(652215),
    J = n(49999),
    $ = n(307731),
    X = n(873426);
let Q = (0, O.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    ee = (0, O.xI)(h.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    et = (e) => e.stopPropagation(),
    en = (e, t) => {
        y.Om.setInspectedExpressionPosition(e, t, b.t.GRID_NAVIGATOR_EVENT);
    },
    ei = o()(P.bo, 200),
    el = o()(P.Wi, 200),
    es = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    er = l.memo(
        l.forwardRef(function (e, t) {
            let n,
                {
                    pickerIntention: s,
                    channel: a,
                    guildId: o,
                    closePopout: h,
                    emojiSize: O = q.as.MEDIUM,
                    hasTabWrapper: er = !1,
                    onSelectEmoji: ea,
                    onSelectSoundmoji: eo,
                    containerWidth: ec,
                    onNavigateAway: eu,
                    persistSearch: ed,
                    className: eh,
                    headerClassName: em,
                    analyticsOverride: ep = es,
                    searchProps: ef = {},
                    wrapper: eg,
                    shouldHidePickerActions: e_ = !1,
                    messageId: ex,
                    renderHeader: eA,
                    listHeaderClassName: eC,
                    categoryListClassName: eE,
                    shouldShowSoundmojiInEmojiPicker: eI = !1,
                    showOnlyUnicode: ev = !1,
                    showAddEmojiButton: ey,
                } = e,
                { onFocus: eS, onKeyDown: eb, autoFocus: eN = !0, accessory: eT } = ef,
                ej = (0, u.bG)([w.Ay], () => (null != o ? w.Ay.getDefaultChannel(o) : null), [o]),
                [eR, ew] = l.useState(null),
                eL = l.useRef(""),
                eM = (0, S.RQ)((e) => e.searchQuery),
                ek = l.useRef(null),
                eO = l.useRef(null),
                eP = l.useRef(null);
            null == a && null != ej && (a = ej);
            let eD = a?.getGuildId() ?? o ?? null,
                [eU, eV] = l.useState(!1),
                eG = L.default.getCurrentUser(),
                eF = (0, k.ki)(eG);
            l.useImperativeHandle(t, () => ({ onPickerOpen: e5 }));
            let { location: eB } = (0, g.p)(),
                { page: eH, section: eW, object: eK, openPopoutType: ez, popoutLocation: eZ } = ep,
                eq = l.useMemo(() => ({ ...eB, section: eW ?? Y.JJy.EMOJI_PICKER_POPOUT }), [eB, eW]),
                { analyticsLocations: eY } = (0, A.Ay)(_.A.EMOJI_PICKER),
                { diversitySurrogate: eJ } = (0, u.cf)([E.Ay], () => ({ diversitySurrogate: E.Ay.diversitySurrogate })),
                e$ = (0, P.sL)(eM, a, s, ev),
                eX = null == e$ ? 0 : e$.locked.length + e$.unlocked.length,
                eQ = R.iM.useSetting(),
                e0 = l.useMemo(() => new Set(eQ), [eQ]),
                e1 = l.useCallback((e) => {
                    R.iM.updateSetting(Array.from(e));
                }, []),
                e2 = (0, N.oV)({ gridWrapperRef: ek, containerWidth: ec, listPaddingLeft: ee, listScrollbarWidth: 8 }),
                {
                    rowCountBySection: e3,
                    sectionDescriptors: e6,
                    emojiGrid: e7,
                    columnCounts: e4,
                } = (0, H.wu)({
                    gridWidth: e2,
                    fallbackGuildId: eD,
                    channel: a,
                    pickerIntention: s,
                    emojiSearchResults: e$,
                    collapsedSections: e0,
                    emojiPaddingHorizontal: Q,
                    emojiSpriteSize: O,
                    shouldShowSoundmojiInEmojiPicker: eI,
                    showOnlyUnicode: ev,
                }),
                { newlyAddedEmojis: e8 } = (0, U.A)(eD, s);
            (0, D.y)({ intention: s, isBurstReaction: eU, analyticsObject: eK });
            let e5 = l.useCallback(() => {
                    let e = e8.length > 0 ? e8[0].id : null;
                    (0, v.uV)(eD, e), (0, D.A)({ intention: s, isBurstReaction: eU, analyticsObject: eK });
                }, [e8, eD, s, eU, eK]),
                e9 = (0, H.Mq)({
                    pickerIntention: s,
                    selectedChannel: a,
                    fallbackGuildId: eD,
                    closePopout: h,
                    onSelectEmoji: ea,
                    setUpsellConfigs: ew,
                    emojiSelectAnalytics: (e) => {
                        "" !== eM
                            ? (0, P.Wf)({
                                  emoji: e.emoji,
                                  location: { ...eq, object: Y.ZSU.EMOJI },
                                  searchQuery: eM,
                                  intention: s,
                                  messageId: ex,
                              })
                            : (0, P._7)({
                                  emoji: e.emoji,
                                  location: { ...eq, object: eK ?? Y.ZSU.EMOJI, ...(null != eH && { page: eH }) },
                                  pickerIntention: s,
                                  category: e.category,
                                  subCategory: e.subCategory,
                                  position: e.columnIndex + 1,
                                  newlyAddedHighlight:
                                      e.subCategory === q.tm.NEWLY_ADDED_EMOJI &&
                                      I.A.isNewerThanLastSeen(eD, e.emoji.id),
                                  isBurstReaction: eU,
                                  messageId: ex,
                              });
                    },
                    trackEmojiFavorited: (e) => {
                        (0, P.C5)({ emoji: e.emoji, location: { ...eq, object: Y.ZSU.EMOJI } });
                    },
                }),
                te = l.useCallback(() => {
                    h(), eu?.();
                }, [h, eu]),
                {
                    getItemProps: tt,
                    getRowProps: tn,
                    gridContainerProps: ti,
                    handleGridContainerKeyDown: tl,
                    isUsingKeyboardNavigation: ts,
                } = ((e) => {
                    let {
                            analyticsLocation: t,
                            pickerIntention: n,
                            columnCounts: i,
                            onSelectEmoji: s,
                            emojiGrid: r,
                            emojiList: a,
                            channelGuildId: o,
                            isBurstReaction: d,
                        } = e,
                        h = (0, u.bG)([E.Ay], () => E.Ay.getDisambiguatedEmojiContext(o), [o]),
                        m = l.useCallback(
                            (e, i) => {
                                if (e.type === H.bm.EMOJI) {
                                    if (null != e.emoji && i.altKey)
                                        return void (h.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                            ? (0, p.Sw)(e.emoji)
                                            : ((0, P.C5)({ emoji: e.emoji, location: { ...t, object: Y.ZSU.EMOJI } }),
                                              (0, p.V4)(e.emoji)));
                                    let l = {
                                        page: null != o ? Y.liQ.GUILD_CHANNEL : Y.liQ.DM_CHANNEL,
                                        section: Y.JJy.EMOJI_PICKER_POPOUT,
                                        object: Y.ZSU.EMOJI,
                                    };
                                    d &&
                                        (l = {
                                            page: null != o ? Y.liQ.GUILD_CHANNEL : Y.liQ.DM_CHANNEL,
                                            section: Y.JJy.EMOJI_PICKER_POPOUT,
                                            object: Y.ZSU.EMOJI,
                                        }),
                                        (0, P._7)({
                                            emoji: e.emoji,
                                            location: l,
                                            pickerIntention: n,
                                            category: e.category,
                                            subCategory: e.subCategory,
                                            newlyAddedHighlight:
                                                e.subCategory === q.tm.NEWLY_ADDED_EMOJI &&
                                                I.A.isNewerThanLastSeen(o, e.emoji.id),
                                        }),
                                        s({ emoji: e.emoji, willClose: !i.shiftKey, isBurst: d });
                                }
                            },
                            [s, o, n, h, t, d],
                        ),
                        {
                            gridDispatch: f,
                            getItemProps: g,
                            getRowProps: _,
                            gridContainerProps: x,
                            handleGridContainerKeyDown: A,
                            isUsingKeyboardNavigation: C,
                        } = (0, N.Ff)({
                            columnCounts: i,
                            gridNavigatorId: q.lq,
                            itemGrid: r,
                            itemList: a,
                            onGridNavigatorItemSelect: m,
                            onGridNavigatorPositionChange: en,
                        });
                    return (
                        l.useEffect(
                            () =>
                                y.Om.subscribe(
                                    (e) => e.inspectedExpressionPosition,
                                    (e) => {
                                        if (null == e) return;
                                        let { columnIndex: t, rowIndex: n, source: i } = e;
                                        i !== b.t.GRID_NAVIGATOR_EVENT &&
                                            f({ type: c.n.SET_FOCUSED_POSITION, x: t, y: n });
                                    },
                                ),
                            [f],
                        ),
                        {
                            getItemProps: g,
                            getRowProps: _,
                            gridContainerProps: x,
                            handleGridContainerKeyDown: A,
                            isUsingKeyboardNavigation: C,
                        }
                    );
                })({
                    pickerIntention: s,
                    analyticsLocation: eq,
                    columnCounts: e4,
                    onSelectEmoji: ea,
                    emojiGrid: e7,
                    emojiList: eO,
                    channelGuildId: eD,
                    isBurstReaction: eU,
                });
            ((e, t) => {
                let [n, i] = l.useState(null);
                l.useEffect(() => {
                    null != n && (t.current?.scrollToSectionTop(n), i(null));
                }, [t, n]),
                    l.useEffect(() => {
                        i(y.Om.getState().activeCategoryIndex);
                    }, [e]);
            })(ec, eO),
                l.useLayoutEffect(() => {
                    eN && eP.current?.focus();
                }, [ec, eJ, eP, eN]),
                l.useEffect(() => {
                    ed || (0, S.Ri)("");
                }, [ed]),
                l.useEffect(
                    () => (
                        M.default.track(Y.HAw.OPEN_POPOUT, {
                            type: ez ?? "Emoji Picker",
                            guild_id: eD,
                            location: eZ,
                            ...(0, x.dI)(a),
                        }),
                        y.Om.resetStoreState
                    ),
                    [ez, eD, eZ, a],
                ),
                l.useEffect(() => () => (0, j.sF)(j._2.FAVORITE_EMOJI_TOOLTIP), []),
                l.useLayoutEffect(() => {
                    let { columnIndex: e, rowIndex: t } = y.Om.getState().inspectedExpressionPosition;
                    e7[t]?.[e] == null && 0 !== e && y.Om.setInspectedExpressionPosition(0, 0);
                }, [e7]),
                l.useEffect(() => {
                    "" === eL.current && "" !== eM && (0, P.EG)(eq, s),
                        0 === eX && "" !== eM
                            ? ei(eq, eM)
                            : "" !== eM && eL.current !== eM && el(eX, e$?.locked.length ?? 0, eq, eM, s),
                        (eL.current = eM);
                }, [eM, eq, eX, e$, s]);
            let tr = eg ?? (er ? "div" : m.l),
                ta = null != e2;
            eR?.type === H.a2.PREMIUM
                ? (n = (0, i.jsx)(Z.default, {
                      onLearnMore: te,
                      emojiDescriptor: eR.emojiDescriptor,
                      pickerIntention: s,
                      analyticsLocation: eq,
                      onClose: () => ew(null),
                      channel: a,
                  }))
                : eR?.type === H.a2.ROLE_SUBSCRIPTION
                  ? (n = (0, i.jsx)(T.A, { onClose: () => ew(null), guildId: eR.guildId, emojiId: eR.emojiId }))
                  : eU && !eF && (n = (0, i.jsx)(V.A, { onDismiss: () => eV(!1) }));
            let to = (0, i.jsx)(B.A, {
                    channel: a,
                    pickerIntention: s,
                    emojiListRef: eO,
                    onKeyDown: (e) => {
                        tl?.(e), eb?.(e);
                    },
                    searchBarRef: eP,
                    onFocus: eS,
                    autoFocus: eN,
                    accessory: eT,
                    headerClassName: em,
                    diversitySurrogate: eJ,
                    isBurstReaction: eU,
                    onBurstReactionToggle: () => {
                        eV(!eU), eP.current?.focus();
                    },
                    renderHeader: eA,
                    showAddEmojiButton: ey,
                }),
                tc = [];
            s === $.EmojiIntention.REACTION && tc.push(d.M.SUPER_REACTIONS_NITRO_MARKETING),
                E.Ay.hasFavoriteEmojis(eD) || tc.push(d.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
            let tu = (0, i.jsx)(f.A, {
                ...eq,
                children: (0, i.jsxs)(tr, {
                    id: q.Do,
                    "aria-labelledby": er ? q.k1 : void 0,
                    role: er ? "tabpanel" : void 0,
                    className: r()(X.iE, { [X.r6]: er, [X.cB]: eU && eF }),
                    children: [
                        er ? null : to,
                        (0, i.jsxs)("div", {
                            className: r()(X.Fb, eh),
                            onScroll: et,
                            children: [
                                er ? to : null,
                                (0, i.jsxs)("div", {
                                    className: X.uK,
                                    ref: ek,
                                    children: [
                                        (0, i.jsx)(z.A, { channel: a, closePopout: h }),
                                        (0, i.jsx)(C.Ay, {
                                            contentTypes: tc,
                                            children: (e) => {
                                                let { visibleContent: t, markAsDismissed: n } = e;
                                                if (t === d.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                    return (0, i.jsx)(F.A, { markAsDismissed: () => n(J.i.UNKNOWN) });
                                            },
                                        }),
                                        e_
                                            ? null
                                            : (0, i.jsx)("div", {
                                                  className: X.Iy,
                                                  id: q.lq,
                                                  ...ti,
                                                  children: ta
                                                      ? (0, i.jsx)(K.A, {
                                                            collapsedSections: e0,
                                                            diversitySurrogate: eJ,
                                                            emojiGrid: e7,
                                                            emojiListRef: eO,
                                                            emojiSize: O,
                                                            getEmojiItemProps: tt,
                                                            getEmojiRowProps: tn,
                                                            gridWidth: e2,
                                                            isUsingKeyboardNavigation: ts,
                                                            onEmojiSelect: (e, t) => {
                                                                e9(e, { ...t, isBurst: eU });
                                                            },
                                                            onSelectSoundmoji: eo,
                                                            setUpsellConfigs: ew,
                                                            rowCount: e7.length,
                                                            rowCountBySection: e3,
                                                            sectionDescriptors: e6,
                                                            setCollapsedSections: e1,
                                                            channelGuildId: eD,
                                                            channelId: a?.id,
                                                            messageId: ex,
                                                            isBurstReaction: eU,
                                                            listHeaderClassName: eC,
                                                        })
                                                      : null,
                                              }),
                                    ],
                                }),
                                (0, i.jsx)(W.Y, {
                                    emojiGrid: e7,
                                    className: X.qV,
                                    guildId: eD,
                                    pickerIntention: s,
                                    channel: a,
                                }),
                                n,
                            ],
                        }),
                        e_
                            ? null
                            : (0, i.jsx)(G.A, {
                                  className: r()(X.jv, eE),
                                  emojiListRef: eO,
                                  sectionDescriptors: e6,
                                  intention: s,
                                  channel: a,
                                  fallbackGuildId: eD,
                                  shouldShowSoundmojiInEmojiPicker: eI,
                                  showOnlyUnicode: ev,
                              }),
                    ],
                }),
            });
            return (0, i.jsx)(A.f5, { value: eY, children: tu });
        }),
    );
