"use strict";
n.d(t, { A: () => ea }), n(321073);
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
    f = n(305866),
    p = n(554375),
    h = n(820284),
    E = n(212245),
    m = n(793574),
    g = n(58149),
    A = n(688810),
    I = n(379848),
    T = n(508675),
    S = n(598770),
    y = n(451731),
    N = n(850992),
    v = n(151271),
    C = n(60587),
    O = n(887695),
    R = n(564068),
    b = n(450510),
    D = n(253932),
    L = n(808728),
    w = n(287809),
    M = n(954571),
    P = n(474090),
    x = n(240248),
    k = n(822123),
    U = n(141862),
    G = n(316884),
    F = n(370968),
    V = n(653145),
    B = n(624751),
    H = n(867738),
    j = n(484333),
    Y = n(815082),
    W = n(775505),
    K = n(178898),
    $ = n(148361),
    z = n(732139),
    q = n(652215),
    X = n(49999),
    Q = n(307731),
    Z = n(873426);
let J = (0, x.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    ee = (0, x.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    et = (e) => e.stopPropagation(),
    en = (e, t) => {
        N.Om.setInspectedExpressionPosition(e, t, C.t.GRID_NAVIGATOR_EVENT);
    },
    er = l()(k.bo, 200),
    ei = l()(k.Wi, 200),
    es = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    ea = i.memo(
        i.forwardRef(function (e, t) {
            let n,
                {
                    pickerIntention: s,
                    channel: o,
                    guildId: l,
                    closePopout: _,
                    emojiSize: x = z.as.MEDIUM,
                    hasTabWrapper: ea = !1,
                    onSelectEmoji: eo,
                    onSelectSoundmoji: el,
                    containerWidth: eu,
                    onNavigateAway: ec,
                    persistSearch: ed,
                    className: e_,
                    headerClassName: ef,
                    analyticsOverride: ep = es,
                    searchProps: eh = {},
                    wrapper: eE,
                    shouldHidePickerActions: em = !1,
                    messageId: eg,
                    renderHeader: eA,
                    listHeaderClassName: eI,
                    categoryListClassName: eT,
                    shouldShowSoundmojiInEmojiPicker: eS = !1,
                    showOnlyUnicode: ey = !1,
                    showAddEmojiButton: eN,
                } = e,
                { onFocus: ev, onKeyDown: eC, autoFocus: eO = !0, accessory: eR } = eh,
                eb = (0, c.bG)([L.Ay], () => (null != l ? L.Ay.getDefaultChannel(l) : null), [l]),
                [eD, eL] = i.useState(null),
                ew = i.useRef(""),
                eM = (0, v.RQ)((e) => e.searchQuery),
                eP = i.useRef(null),
                ex = i.useRef(null),
                ek = i.useRef(null);
            null == o && null != eb && (o = eb);
            let eU = o?.getGuildId() ?? l ?? null,
                [eG, eF] = i.useState(!1),
                eV = w.default.getCurrentUser(),
                eB = (0, P.ki)(eV);
            i.useImperativeHandle(t, () => ({ onPickerOpen: e8 }));
            let { location: eH } = (0, E.p)(),
                { page: ej, section: eY, object: eW, openPopoutType: eK, popoutLocation: e$ } = ep,
                ez = i.useMemo(() => ({ ...eH, section: eY ?? q.JJy.EMOJI_PICKER_POPOUT }), [eH, eY]),
                { analyticsLocations: eq } = (0, A.Ay)(m.A.EMOJI_PICKER),
                { diversitySurrogate: eX } = (0, c.cf)([T.Ay], () => ({ diversitySurrogate: T.Ay.diversitySurrogate })),
                eQ = (0, k.sL)(eM, o, s, ey),
                eZ = null == eQ ? 0 : eQ.locked.length + eQ.unlocked.length,
                eJ = D.iM.useSetting(),
                e0 = i.useMemo(() => new Set(eJ), [eJ]),
                e1 = i.useCallback((e) => {
                    D.iM.updateSetting(Array.from(e));
                }, []),
                e2 = (0, O.oV)({ gridWrapperRef: eP, containerWidth: eu, listPaddingLeft: ee, listScrollbarWidth: 8 }),
                {
                    rowCountBySection: e3,
                    sectionDescriptors: e6,
                    emojiGrid: e4,
                    columnCounts: e7,
                } = (0, j.wu)({
                    gridWidth: e2,
                    fallbackGuildId: eU,
                    channel: o,
                    pickerIntention: s,
                    emojiSearchResults: eQ,
                    collapsedSections: e0,
                    emojiPaddingHorizontal: J,
                    emojiSpriteSize: x,
                    shouldShowSoundmojiInEmojiPicker: eS,
                    showOnlyUnicode: ey,
                }),
                { newlyAddedEmojis: e5 } = (0, G.A)(eU, s);
            (0, U.y)({ intention: s, isBurstReaction: eG, analyticsObject: eW });
            let e8 = i.useCallback(() => {
                    let e = e5.length > 0 ? e5[0].id : null;
                    (0, y.uV)(eU, e), (0, U.A)({ intention: s, isBurstReaction: eG, analyticsObject: eW });
                }, [e5, eU, s, eG, eW]),
                e9 = (0, j.Mq)({
                    pickerIntention: s,
                    selectedChannel: o,
                    fallbackGuildId: eU,
                    closePopout: _,
                    onSelectEmoji: eo,
                    setUpsellConfigs: eL,
                    emojiSelectAnalytics: (e) => {
                        "" !== eM
                            ? (0, k.Wf)({
                                  emoji: e.emoji,
                                  location: { ...ez, object: q.ZSU.EMOJI },
                                  searchQuery: eM,
                                  intention: s,
                                  messageId: eg,
                              })
                            : (0, k._7)({
                                  emoji: e.emoji,
                                  location: { ...ez, object: eW ?? q.ZSU.EMOJI, ...(null != ej && { page: ej }) },
                                  pickerIntention: s,
                                  category: e.category,
                                  subCategory: e.subCategory,
                                  position: e.columnIndex + 1,
                                  newlyAddedHighlight:
                                      e.subCategory === z.tm.NEWLY_ADDED_EMOJI &&
                                      S.A.isNewerThanLastSeen(eU, e.emoji.id),
                                  isBurstReaction: eG,
                                  messageId: eg,
                              });
                    },
                    trackEmojiFavorited: (e) => {
                        (0, k.C5)({ emoji: e.emoji, location: { ...ez, object: q.ZSU.EMOJI } });
                    },
                }),
                te = i.useCallback(() => {
                    _(), ec?.();
                }, [_, ec]),
                {
                    getItemProps: tt,
                    getRowProps: tn,
                    gridContainerProps: tr,
                    handleGridContainerKeyDown: ti,
                    isUsingKeyboardNavigation: ts,
                } = ((e) => {
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
                                if (e.type === j.bm.EMOJI) {
                                    if (null != e.emoji && r.altKey)
                                        return void (_.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                                            ? (0, p.Sw)(e.emoji)
                                            : ((0, k.C5)({ emoji: e.emoji, location: { ...t, object: q.ZSU.EMOJI } }),
                                              (0, p.V4)(e.emoji)));
                                    let i = {
                                        page: null != l ? q.liQ.GUILD_CHANNEL : q.liQ.DM_CHANNEL,
                                        section: q.JJy.EMOJI_PICKER_POPOUT,
                                        object: q.ZSU.EMOJI,
                                    };
                                    d &&
                                        (i = {
                                            page: null != l ? q.liQ.GUILD_CHANNEL : q.liQ.DM_CHANNEL,
                                            section: q.JJy.EMOJI_PICKER_POPOUT,
                                            object: q.ZSU.EMOJI,
                                        }),
                                        (0, k._7)({
                                            emoji: e.emoji,
                                            location: i,
                                            pickerIntention: n,
                                            category: e.category,
                                            subCategory: e.subCategory,
                                            newlyAddedHighlight:
                                                e.subCategory === z.tm.NEWLY_ADDED_EMOJI &&
                                                S.A.isNewerThanLastSeen(l, e.emoji.id),
                                        }),
                                        s({ emoji: e.emoji, willClose: !r.shiftKey, isBurst: d });
                                }
                            },
                            [s, l, n, _, t, d],
                        ),
                        {
                            gridDispatch: h,
                            getItemProps: E,
                            getRowProps: m,
                            gridContainerProps: g,
                            handleGridContainerKeyDown: A,
                            isUsingKeyboardNavigation: I,
                        } = (0, O.Ff)({
                            columnCounts: r,
                            gridNavigatorId: z.lq,
                            itemGrid: a,
                            itemList: o,
                            onGridNavigatorItemSelect: f,
                            onGridNavigatorPositionChange: en,
                        });
                    return (
                        i.useEffect(
                            () =>
                                N.Om.subscribe(
                                    (e) => e.inspectedExpressionPosition,
                                    (e) => {
                                        if (null == e) return;
                                        let { columnIndex: t, rowIndex: n, source: r } = e;
                                        r !== C.t.GRID_NAVIGATOR_EVENT &&
                                            h({ type: u.n.SET_FOCUSED_POSITION, x: t, y: n });
                                    },
                                ),
                            [h],
                        ),
                        {
                            getItemProps: E,
                            getRowProps: m,
                            gridContainerProps: g,
                            handleGridContainerKeyDown: A,
                            isUsingKeyboardNavigation: I,
                        }
                    );
                })({
                    pickerIntention: s,
                    analyticsLocation: ez,
                    columnCounts: e7,
                    onSelectEmoji: eo,
                    emojiGrid: e4,
                    emojiList: ex,
                    channelGuildId: eU,
                    isBurstReaction: eG,
                });
            ((e, t) => {
                let [n, r] = i.useState(null);
                i.useEffect(() => {
                    null != n && (t.current?.scrollToSectionTop(n), r(null));
                }, [t, n]),
                    i.useEffect(() => {
                        r(N.Om.getState().activeCategoryIndex);
                    }, [e]);
            })(eu, ex),
                i.useLayoutEffect(() => {
                    eO && ek.current?.focus();
                }, [eu, eX, ek, eO]),
                i.useEffect(() => {
                    ed || (0, v.Ri)("");
                }, [ed]),
                i.useEffect(
                    () => (
                        M.default.track(q.HAw.OPEN_POPOUT, {
                            type: eK ?? "Emoji Picker",
                            guild_id: eU,
                            location: e$,
                            ...(0, g.dI)(o),
                        }),
                        N.Om.resetStoreState
                    ),
                    [eK, eU, e$, o],
                ),
                i.useEffect(() => () => (0, b.sF)(b._2.FAVORITE_EMOJI_TOOLTIP), []),
                i.useLayoutEffect(() => {
                    let { columnIndex: e, rowIndex: t } = N.Om.getState().inspectedExpressionPosition;
                    e4[t]?.[e] == null && 0 !== e && N.Om.setInspectedExpressionPosition(0, 0);
                }, [e4]),
                i.useEffect(() => {
                    "" === ew.current && "" !== eM && (0, k.EG)(ez, s),
                        0 === eZ && "" !== eM
                            ? er(ez, eM)
                            : "" !== eM && ew.current !== eM && ei(eZ, eQ?.locked.length ?? 0, ez, eM, s),
                        (ew.current = eM);
                }, [eM, ez, eZ, eQ, s]);
            let ta = eE ?? (ea ? "div" : f.l),
                to = null != e2;
            eD?.type === j.a2.PREMIUM
                ? (n = (0, r.jsx)($.default, {
                      onLearnMore: te,
                      emojiDescriptor: eD.emojiDescriptor,
                      pickerIntention: s,
                      analyticsLocation: ez,
                      onClose: () => eL(null),
                      channel: o,
                  }))
                : eD?.type === j.a2.ROLE_SUBSCRIPTION
                  ? (n = (0, r.jsx)(R.A, { onClose: () => eL(null), guildId: eD.guildId, emojiId: eD.emojiId }))
                  : eG && !eB && (n = (0, r.jsx)(F.A, { onDismiss: () => eF(!1) }));
            let tl = (0, r.jsx)(H.A, {
                    channel: o,
                    pickerIntention: s,
                    emojiListRef: ex,
                    onKeyDown: (e) => {
                        ti?.(e), eC?.(e);
                    },
                    searchBarRef: ek,
                    onFocus: ev,
                    autoFocus: eO,
                    accessory: eR,
                    headerClassName: ef,
                    diversitySurrogate: eX,
                    isBurstReaction: eG,
                    onBurstReactionToggle: () => {
                        eF(!eG), ek.current?.focus();
                    },
                    renderHeader: eA,
                    showAddEmojiButton: eN,
                }),
                tu = [];
            s === Q.EmojiIntention.REACTION && tu.push(d.M.SUPER_REACTIONS_NITRO_MARKETING),
                T.Ay.hasFavoriteEmojis(eU) || tu.push(d.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
            let tc = (0, r.jsx)(h.A, {
                ...ez,
                children: (0, r.jsxs)(ta, {
                    id: z.Do,
                    "aria-labelledby": ea ? z.k1 : void 0,
                    role: ea ? "tabpanel" : void 0,
                    className: a()(Z.iE, { [Z.r6]: ea, [Z.cB]: eG && eB }),
                    children: [
                        ea ? null : tl,
                        (0, r.jsxs)("div", {
                            className: a()(Z.Fb, e_),
                            onScroll: et,
                            children: [
                                ea ? tl : null,
                                (0, r.jsxs)("div", {
                                    className: Z.uK,
                                    ref: eP,
                                    children: [
                                        (0, r.jsx)(K.A, { channel: o, closePopout: _ }),
                                        (0, r.jsx)(I.Ay, {
                                            contentTypes: tu,
                                            children: (e) => {
                                                let { visibleContent: t, markAsDismissed: n } = e;
                                                if (t === d.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                    return (0, r.jsx)(B.A, { markAsDismissed: () => n(X.i.UNKNOWN) });
                                            },
                                        }),
                                        em
                                            ? null
                                            : (0, r.jsx)("div", {
                                                  className: Z.Iy,
                                                  id: z.lq,
                                                  ...tr,
                                                  children: to
                                                      ? (0, r.jsx)(W.A, {
                                                            collapsedSections: e0,
                                                            diversitySurrogate: eX,
                                                            emojiGrid: e4,
                                                            emojiListRef: ex,
                                                            emojiSize: x,
                                                            getEmojiItemProps: tt,
                                                            getEmojiRowProps: tn,
                                                            gridWidth: e2,
                                                            isUsingKeyboardNavigation: ts,
                                                            onEmojiSelect: (e, t) => {
                                                                e9(e, { ...t, isBurst: eG });
                                                            },
                                                            onSelectSoundmoji: el,
                                                            setUpsellConfigs: eL,
                                                            rowCount: e4.length,
                                                            rowCountBySection: e3,
                                                            sectionDescriptors: e6,
                                                            setCollapsedSections: e1,
                                                            channelGuildId: eU,
                                                            channelId: o?.id,
                                                            messageId: eg,
                                                            isBurstReaction: eG,
                                                            listHeaderClassName: eI,
                                                        })
                                                      : null,
                                              }),
                                    ],
                                }),
                                (0, r.jsx)(Y.Y, {
                                    emojiGrid: e4,
                                    className: Z.qV,
                                    guildId: eU,
                                    pickerIntention: s,
                                    channel: o,
                                }),
                                n,
                            ],
                        }),
                        em
                            ? null
                            : (0, r.jsx)(V.A, {
                                  className: a()(Z.jv, eT),
                                  emojiListRef: ex,
                                  sectionDescriptors: e6,
                                  intention: s,
                                  channel: o,
                                  fallbackGuildId: eU,
                                  shouldShowSoundmojiInEmojiPicker: eS,
                                  showOnlyUnicode: ey,
                              }),
                    ],
                }),
            });
            return (0, r.jsx)(A.f5, { value: eq, children: tc });
        }),
    );
