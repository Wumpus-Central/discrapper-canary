"use strict";
n.d(t, { A: () => e_ }), n(321073);
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
    R = n(887695),
    O = n(564068),
    b = n(450510),
    D = n(253932),
    L = n(808728),
    w = n(287809),
    M = n(954571),
    x = n(474090),
    P = n(240248),
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
    Z = n(49999),
    X = n(307731),
    Q = n(117155);
let J = (0, P.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    ee = (0, P.xI)(_.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
    et = 8,
    en = (e) => e.stopPropagation(),
    er = (e, t) => {
        v.Om.setInspectedExpressionPosition(e, t, C.t.GRID_NAVIGATOR_EVENT);
    },
    ei = (e) => {
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
                                    e.subCategory === z.tm.NEWLY_ADDED_EMOJI && S.A.isNewerThanLastSeen(l, e.emoji.id),
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
            } = (0, R.Ff)({
                columnCounts: r,
                gridNavigatorId: z.lq,
                itemGrid: a,
                itemList: o,
                onGridNavigatorItemSelect: f,
                onGridNavigatorPositionChange: er,
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
    es = (e, t) => {
        let [n, r] = i.useState(null);
        i.useEffect(() => {
            null != n && (t.current?.scrollToSectionTop(n), r(null));
        }, [t, n]),
            i.useEffect(() => {
                r(v.Om.getState().activeCategoryIndex);
            }, [e]);
    },
    ea = (e, t, n, r) => {
        i.useLayoutEffect(() => {
            r && n.current?.focus();
        }, [e, t, n, r]);
    },
    eo = 200,
    el = l()(k.bo, eo),
    eu = l()(k.Wi, eo),
    ec = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    ed = function (e, t) {
        let n,
            {
                pickerIntention: s,
                channel: o,
                guildId: l,
                closePopout: u,
                emojiSize: _ = z.as.MEDIUM,
                hasTabWrapper: p = !1,
                onSelectEmoji: C,
                onSelectSoundmoji: P,
                containerWidth: er,
                onNavigateAway: eo,
                persistSearch: ed,
                className: e_,
                headerClassName: ef,
                analyticsOverride: ep = ec,
                searchProps: eh = {},
                wrapper: em,
                shouldHidePickerActions: eE = !1,
                messageId: eg,
                renderHeader: eA,
                listHeaderClassName: eI,
                categoryListClassName: eT,
                shouldShowSoundmojiInEmojiPicker: eS = !1,
                showOnlyUnicode: ey = !1,
                showAddEmojiButton: ev,
            } = e,
            { onFocus: eN, onKeyDown: eC, autoFocus: eR = !0, accessory: eO } = eh,
            eb = (0, c.bG)([L.Ay], () => (null != l ? L.Ay.getDefaultChannel(l) : null), [l]),
            [eD, eL] = i.useState(null),
            ew = i.useRef(""),
            eM = (0, N.RQ)((e) => e.searchQuery),
            ex = i.useRef(null),
            eP = i.useRef(null),
            ek = i.useRef(null);
        null == o && null != eb && (o = eb);
        let eU = o?.getGuildId() ?? l ?? null,
            [eG, eF] = i.useState(!1),
            eV = w.default.getCurrentUser(),
            eB = (0, x.ki)(eV);
        i.useImperativeHandle(t, () => ({ onPickerOpen: e8 }));
        let { location: eH } = (0, m.p)(),
            { page: ej, section: eY, object: eW, openPopoutType: eK, popoutLocation: e$ } = ep,
            ez = i.useMemo(() => ({ ...eH, section: eY ?? q.JJy.EMOJI_PICKER_POPOUT }), [eH, eY]),
            { analyticsLocations: eq } = (0, A.Ay)(E.A.EMOJI_PICKER),
            { diversitySurrogate: eZ } = (0, c.cf)([T.Ay], () => ({ diversitySurrogate: T.Ay.diversitySurrogate })),
            eX = (0, k.sL)(eM, o, s, ey),
            eQ = null == eX ? 0 : eX.locked.length + eX.unlocked.length,
            eJ = D.iM.useSetting(),
            e0 = i.useMemo(() => new Set(eJ), [eJ]),
            e1 = i.useCallback((e) => {
                D.iM.updateSetting(Array.from(e));
            }, []),
            e2 = (0, R.oV)({ gridWrapperRef: ex, containerWidth: er, listPaddingLeft: ee, listScrollbarWidth: et }),
            {
                rowCountBySection: e3,
                sectionDescriptors: e6,
                emojiGrid: e4,
                columnCounts: e5,
            } = (0, j.wu)({
                gridWidth: e2,
                fallbackGuildId: eU,
                channel: o,
                pickerIntention: s,
                emojiSearchResults: eX,
                collapsedSections: e0,
                emojiPaddingHorizontal: J,
                emojiSpriteSize: _,
                shouldShowSoundmojiInEmojiPicker: eS,
                showOnlyUnicode: ey,
            }),
            { newlyAddedEmojis: e7 } = (0, G.A)(eU, s);
        (0, U.y)({ intention: s, isBurstReaction: eG, analyticsObject: eW });
        let e8 = i.useCallback(() => {
                let e = e7.length > 0 ? e7[0].id : null;
                (0, y.uV)(eU, e), (0, U.A)({ intention: s, isBurstReaction: eG, analyticsObject: eW });
            }, [e7, eU, s, eG, eW]),
            e9 = (0, j.Mq)({
                pickerIntention: s,
                selectedChannel: o,
                fallbackGuildId: eU,
                closePopout: u,
                onSelectEmoji: C,
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
                                  e.subCategory === z.tm.NEWLY_ADDED_EMOJI && S.A.isNewerThanLastSeen(eU, e.emoji.id),
                              isBurstReaction: eG,
                              messageId: eg,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, k.C5)({ emoji: e.emoji, location: { ...ez, object: q.ZSU.EMOJI } });
                },
            }),
            te = i.useCallback(() => {
                u(), eo?.();
            }, [u, eo]),
            {
                getItemProps: tt,
                getRowProps: tn,
                gridContainerProps: tr,
                handleGridContainerKeyDown: ti,
                isUsingKeyboardNavigation: ts,
            } = ei({
                pickerIntention: s,
                analyticsLocation: ez,
                columnCounts: e5,
                onSelectEmoji: C,
                emojiGrid: e4,
                emojiList: eP,
                channelGuildId: eU,
                isBurstReaction: eG,
            });
        es(er, eP),
            ea(er, eZ, ek, eR),
            i.useEffect(() => {
                ed || (0, N.Ri)("");
            }, [ed]),
            i.useEffect(
                () => (
                    M.default.track(q.HAw.OPEN_POPOUT, {
                        type: eK ?? "Emoji Picker",
                        guild_id: eU,
                        location: e$,
                        ...(0, g.dI)(o),
                    }),
                    v.Om.resetStoreState
                ),
                [eK, eU, e$, o],
            ),
            i.useEffect(() => () => (0, b.sF)(b._2.FAVORITE_EMOJI_TOOLTIP), []),
            i.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = v.Om.getState().inspectedExpressionPosition;
                e4[t]?.[e] == null && 0 !== e && v.Om.setInspectedExpressionPosition(0, 0);
            }, [e4]),
            i.useEffect(() => {
                "" === ew.current && "" !== eM && (0, k.EG)(ez, s),
                    0 === eQ && "" !== eM
                        ? el(ez, eM)
                        : "" !== eM && ew.current !== eM && eu(eQ, eX?.locked.length ?? 0, ez, eM, s),
                    (ew.current = eM);
            }, [eM, ez, eQ, eX, s]);
        let ta = em ?? (p ? "div" : f.lGe),
            to = null != e2;
        eD?.type === j.a2.PREMIUM
            ? (n = (0, r.jsx)($.A, {
                  onLearnMore: te,
                  emojiDescriptor: eD.emojiDescriptor,
                  pickerIntention: s,
                  analyticsLocation: ez,
                  onClose: () => eL(null),
                  channel: o,
              }))
            : eD?.type === j.a2.ROLE_SUBSCRIPTION
              ? (n = (0, r.jsx)(O.A, { onClose: () => eL(null), guildId: eD.guildId, emojiId: eD.emojiId }))
              : eG && !eB && (n = (0, r.jsx)(F.A, { onDismiss: () => eF(!1) }));
        let tl = (e, t) => {
                e9(e, { ...t, isBurst: eG });
            },
            tu = () => {
                eF(!eG), ek.current?.focus();
            },
            tc = (0, r.jsx)(H.A, {
                channel: o,
                pickerIntention: s,
                emojiListRef: eP,
                onKeyDown: (e) => {
                    ti?.(e), eC?.(e);
                },
                searchBarRef: ek,
                onFocus: eN,
                autoFocus: eR,
                accessory: eO,
                headerClassName: ef,
                diversitySurrogate: eZ,
                isBurstReaction: eG,
                onBurstReactionToggle: tu,
                renderHeader: eA,
                showAddEmojiButton: ev,
            }),
            td = [];
        s === X.b_.REACTION && td.push(d.M.SUPER_REACTIONS_NITRO_MARKETING),
            T.Ay.hasFavoriteEmojis(eU) || td.push(d.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let t_ = (0, r.jsx)(h.A, {
            ...ez,
            children: (0, r.jsxs)(ta, {
                id: z.Do,
                "aria-labelledby": p ? z.k1 : void 0,
                role: p ? "tabpanel" : void 0,
                className: a()(Q.iE, { [Q.r6]: p, [Q.cB]: eG && eB }),
                children: [
                    p ? null : tc,
                    (0, r.jsxs)("div", {
                        className: a()(Q.Fb, e_),
                        onScroll: en,
                        children: [
                            p ? tc : null,
                            (0, r.jsxs)("div", {
                                className: Q.uK,
                                ref: ex,
                                children: [
                                    (0, r.jsx)(K.A, { channel: o, closePopout: u }),
                                    (0, r.jsx)(I.Ay, {
                                        contentTypes: td,
                                        children: (e) => {
                                            let { visibleContent: t, markAsDismissed: n } = e;
                                            if (t === d.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                                                return (0, r.jsx)(B.A, { markAsDismissed: () => n(Z.i.UNKNOWN) });
                                        },
                                    }),
                                    eE
                                        ? null
                                        : (0, r.jsx)("div", {
                                              className: Q.Iy,
                                              id: z.lq,
                                              ...tr,
                                              children: to
                                                  ? (0, r.jsx)(W.A, {
                                                        collapsedSections: e0,
                                                        diversitySurrogate: eZ,
                                                        emojiGrid: e4,
                                                        emojiListRef: eP,
                                                        emojiSize: _,
                                                        getEmojiItemProps: tt,
                                                        getEmojiRowProps: tn,
                                                        gridWidth: e2,
                                                        isUsingKeyboardNavigation: ts,
                                                        onEmojiSelect: tl,
                                                        onSelectSoundmoji: P,
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
                                className: Q.qV,
                                guildId: eU,
                                pickerIntention: s,
                                channel: o,
                            }),
                            n,
                        ],
                    }),
                    eE
                        ? null
                        : (0, r.jsx)(V.A, {
                              className: a()(Q.jv, eT),
                              emojiListRef: eP,
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
        return (0, r.jsx)(A.f5, { value: eq, children: t_ });
    },
    e_ = i.memo(i.forwardRef(ed));
