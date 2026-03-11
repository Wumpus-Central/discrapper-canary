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
    Q = n(836553);
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
            } = e,
            { onFocus: ev, onKeyDown: eN, autoFocus: eC = !0, accessory: eR } = eh,
            eO = (0, c.bG)([L.Ay], () => (null != l ? L.Ay.getDefaultChannel(l) : null), [l]),
            [eb, eD] = i.useState(null),
            eL = i.useRef(""),
            ew = (0, N.RQ)((e) => e.searchQuery),
            eM = i.useRef(null),
            ex = i.useRef(null),
            eP = i.useRef(null);
        null == o && null != eO && (o = eO);
        let ek = o?.getGuildId() ?? l ?? null,
            [eU, eG] = i.useState(!1),
            eF = w.default.getCurrentUser(),
            eV = (0, x.ki)(eF);
        i.useImperativeHandle(t, () => ({ onPickerOpen: e7 }));
        let { location: eB } = (0, m.p)(),
            { page: eH, section: ej, object: eY, openPopoutType: eW, popoutLocation: eK } = ep,
            e$ = i.useMemo(() => ({ ...eB, section: ej ?? q.JJy.EMOJI_PICKER_POPOUT }), [eB, ej]),
            { analyticsLocations: ez } = (0, A.Ay)(E.A.EMOJI_PICKER),
            { diversitySurrogate: eq } = (0, c.cf)([T.Ay], () => ({ diversitySurrogate: T.Ay.diversitySurrogate })),
            eZ = (0, k.sL)(ew, o, s, ey),
            eX = null == eZ ? 0 : eZ.locked.length + eZ.unlocked.length,
            eQ = D.iM.useSetting(),
            eJ = i.useMemo(() => new Set(eQ), [eQ]),
            e0 = i.useCallback((e) => {
                D.iM.updateSetting(Array.from(e));
            }, []),
            e1 = (0, R.oV)({ gridWrapperRef: eM, containerWidth: er, listPaddingLeft: ee, listScrollbarWidth: et }),
            {
                rowCountBySection: e2,
                sectionDescriptors: e3,
                emojiGrid: e6,
                columnCounts: e4,
            } = (0, j.wu)({
                gridWidth: e1,
                fallbackGuildId: ek,
                channel: o,
                pickerIntention: s,
                emojiSearchResults: eZ,
                collapsedSections: eJ,
                emojiPaddingHorizontal: J,
                emojiSpriteSize: _,
                shouldShowSoundmojiInEmojiPicker: eS,
                showOnlyUnicode: ey,
            }),
            { newlyAddedEmojis: e5 } = (0, G.A)(ek, s);
        (0, U.y)({ intention: s, isBurstReaction: eU, analyticsObject: eY });
        let e7 = i.useCallback(() => {
                let e = e5.length > 0 ? e5[0].id : null;
                (0, y.uV)(ek, e), (0, U.A)({ intention: s, isBurstReaction: eU, analyticsObject: eY });
            }, [e5, ek, s, eU, eY]),
            e8 = (0, j.Mq)({
                pickerIntention: s,
                selectedChannel: o,
                fallbackGuildId: ek,
                closePopout: u,
                onSelectEmoji: C,
                setUpsellConfigs: eD,
                emojiSelectAnalytics: (e) => {
                    "" !== ew
                        ? (0, k.Wf)({
                              emoji: e.emoji,
                              location: { ...e$, object: q.ZSU.EMOJI },
                              searchQuery: ew,
                              intention: s,
                              messageId: eg,
                          })
                        : (0, k._7)({
                              emoji: e.emoji,
                              location: { ...e$, object: eY ?? q.ZSU.EMOJI, ...(null != eH && { page: eH }) },
                              pickerIntention: s,
                              category: e.category,
                              subCategory: e.subCategory,
                              position: e.columnIndex + 1,
                              newlyAddedHighlight:
                                  e.subCategory === z.tm.NEWLY_ADDED_EMOJI && S.A.isNewerThanLastSeen(ek, e.emoji.id),
                              isBurstReaction: eU,
                              messageId: eg,
                          });
                },
                trackEmojiFavorited: (e) => {
                    (0, k.C5)({ emoji: e.emoji, location: { ...e$, object: q.ZSU.EMOJI } });
                },
            }),
            e9 = i.useCallback(() => {
                u(), eo?.();
            }, [u, eo]),
            {
                getItemProps: te,
                getRowProps: tt,
                gridContainerProps: tn,
                handleGridContainerKeyDown: tr,
                isUsingKeyboardNavigation: ti,
            } = ei({
                pickerIntention: s,
                analyticsLocation: e$,
                columnCounts: e4,
                onSelectEmoji: C,
                emojiGrid: e6,
                emojiList: ex,
                channelGuildId: ek,
                isBurstReaction: eU,
            });
        es(er, ex),
            ea(er, eq, eP, eC),
            i.useEffect(() => {
                ed || (0, N.Ri)("");
            }, [ed]),
            i.useEffect(
                () => (
                    M.default.track(q.HAw.OPEN_POPOUT, {
                        type: eW ?? "Emoji Picker",
                        guild_id: ek,
                        location: eK,
                        ...(0, g.dI)(o),
                    }),
                    v.Om.resetStoreState
                ),
                [eW, ek, eK, o],
            ),
            i.useEffect(() => () => (0, b.sF)(b._2.FAVORITE_EMOJI_TOOLTIP), []),
            i.useLayoutEffect(() => {
                let { columnIndex: e, rowIndex: t } = v.Om.getState().inspectedExpressionPosition;
                e6[t]?.[e] == null && 0 !== e && v.Om.setInspectedExpressionPosition(0, 0);
            }, [e6]),
            i.useEffect(() => {
                "" === eL.current && "" !== ew && (0, k.EG)(e$, s),
                    0 === eX && "" !== ew
                        ? el(e$, ew)
                        : "" !== ew && eL.current !== ew && eu(eX, eZ?.locked.length ?? 0, e$, ew, s),
                    (eL.current = ew);
            }, [ew, e$, eX, eZ, s]);
        let ts = em ?? (p ? "div" : f.lGe),
            ta = null != e1;
        eb?.type === j.a2.PREMIUM
            ? (n = (0, r.jsx)($.A, {
                  onLearnMore: e9,
                  emojiDescriptor: eb.emojiDescriptor,
                  pickerIntention: s,
                  analyticsLocation: e$,
                  onClose: () => eD(null),
                  channel: o,
              }))
            : eb?.type === j.a2.ROLE_SUBSCRIPTION
              ? (n = (0, r.jsx)(O.A, { onClose: () => eD(null), guildId: eb.guildId, emojiId: eb.emojiId }))
              : eU && !eV && (n = (0, r.jsx)(F.A, { onDismiss: () => eG(!1) }));
        let to = (e, t) => {
                e8(e, { ...t, isBurst: eU });
            },
            tl = () => {
                eG(!eU), eP.current?.focus();
            },
            tu = (0, r.jsx)(H.A, {
                channel: o,
                pickerIntention: s,
                emojiListRef: ex,
                onKeyDown: (e) => {
                    tr?.(e), eN?.(e);
                },
                searchBarRef: eP,
                onFocus: ev,
                autoFocus: eC,
                accessory: eR,
                headerClassName: ef,
                diversitySurrogate: eq,
                isBurstReaction: eU,
                onBurstReactionToggle: tl,
                renderHeader: eA,
            }),
            tc = [];
        s === X.b_.REACTION && tc.push(d.M.SUPER_REACTIONS_NITRO_MARKETING),
            T.Ay.hasFavoriteEmojis(ek) || tc.push(d.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
        let td = (0, r.jsx)(h.A, {
            ...e$,
            children: (0, r.jsxs)(ts, {
                id: z.Do,
                "aria-labelledby": p ? z.k1 : void 0,
                role: p ? "tabpanel" : void 0,
                className: a()(Q.iE, { [Q.r6]: p, [Q.cB]: eU && eV }),
                children: [
                    p ? null : tu,
                    (0, r.jsxs)("div", {
                        className: a()(Q.Fb, e_),
                        onScroll: en,
                        children: [
                            p ? tu : null,
                            (0, r.jsxs)("div", {
                                className: Q.uK,
                                ref: eM,
                                children: [
                                    (0, r.jsx)(K.A, { channel: o, closePopout: u }),
                                    (0, r.jsx)(I.Ay, {
                                        contentTypes: tc,
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
                                              ...tn,
                                              children: ta
                                                  ? (0, r.jsx)(W.A, {
                                                        collapsedSections: eJ,
                                                        diversitySurrogate: eq,
                                                        emojiGrid: e6,
                                                        emojiListRef: ex,
                                                        emojiSize: _,
                                                        getEmojiItemProps: te,
                                                        getEmojiRowProps: tt,
                                                        gridWidth: e1,
                                                        isUsingKeyboardNavigation: ti,
                                                        onEmojiSelect: to,
                                                        onSelectSoundmoji: P,
                                                        setUpsellConfigs: eD,
                                                        rowCount: e6.length,
                                                        rowCountBySection: e2,
                                                        sectionDescriptors: e3,
                                                        setCollapsedSections: e0,
                                                        channelGuildId: ek,
                                                        channelId: o?.id,
                                                        messageId: eg,
                                                        isBurstReaction: eU,
                                                        listHeaderClassName: eI,
                                                    })
                                                  : null,
                                          }),
                                ],
                            }),
                            (0, r.jsx)(Y.Y, {
                                emojiGrid: e6,
                                className: Q.qV,
                                guildId: ek,
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
                              emojiListRef: ex,
                              sectionDescriptors: e3,
                              intention: s,
                              channel: o,
                              fallbackGuildId: ek,
                              shouldShowSoundmojiInEmojiPicker: eS,
                              showOnlyUnicode: ey,
                          }),
                ],
            }),
        });
        return (0, r.jsx)(A.f5, { value: ez, children: td });
    },
    e_ = i.memo(i.forwardRef(ed));
