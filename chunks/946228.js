"use strict";
n.d(t, { A: () => eV, Y: () => ek });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(837381),
    c = n(887129),
    d = n(607399),
    _ = n(17928),
    h = n(140735),
    f = n(312138),
    p = n(707554),
    E = n(475825),
    m = n(506309),
    g = n(442433),
    A = n(361610),
    I = n(414798),
    T = n(589158),
    S = n(775602),
    y = n(793574),
    C = n(95561),
    N = n(688810),
    v = n(941726),
    R = n(449582),
    O = n(900797),
    b = n(847374),
    D = n(320448),
    L = n(939249),
    w = n(485947),
    M = n(180170),
    P = n(435738),
    x = n(38055);
let k = "content-inventory-feed";
var U = n(652215),
    G = n(375708),
    F = n(933928),
    V = n(540808);
let B = r.memo(function (e) {
        let t,
            { title: s, onToggleExpand: a, expanded: o, expandedCount: l } = e,
            u = (0, _.bG)([P.A], () => P.A.hidden),
            c = r.useCallback((e) => {
                (0, g.L3)(e, async () => {
                    let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 38055));
                    return () => (0, i.jsx)(e, { closePopout: g.Z_ });
                });
            }, []);
        return (0, i.jsxs)(w.A, {
            className: V.lL,
            children: [
                (0, i.jsx)(h.A, { children: G.intl.format(G.t.Uaqbke, { title: s, count: l }) }),
                (0, i.jsxs)("div", {
                    className: F.N1,
                    children: [
                        (0, i.jsx)(L.D, {
                            onClick: (e) => {
                                if (e.currentTarget === e.target || e.currentTarget.contains(e.target))
                                    return u ? (0, M.Il)() : l > 3 ? a() : (0, U.tEg)();
                            },
                            onContextMenu: c,
                            tag: "span",
                            tabIndex: -1,
                            "aria-hidden": !0,
                            className: F.qd,
                            children: (0, i.jsxs)("span", { children: [s, " \u2014 ", l] }),
                        }),
                        (0, i.jsx)(x.A, {}),
                        (0, i.jsx)("div", { className: F.AN }),
                        l <= 3 && !u
                            ? null
                            : ((t = u
                                  ? (0, i.jsx)(O.t, { className: F.wT })
                                  : o
                                    ? (0, i.jsx)(b.a, { className: F.wT })
                                    : (0, i.jsx)(D._, { className: F.wT })),
                              (0, i.jsx)(L.D, {
                                  onClick: () => (u ? (0, M.Il)() : l > 3 ? a() : (0, U.tEg)()),
                                  tag: "span",
                                  "aria-label": G.intl.string(o && !u ? G.t.iTcuma : G.t.dcl9MQ),
                                  "aria-expanded": !u && o,
                                  className: F.wT,
                                  children: t,
                              })),
                    ],
                }),
            ],
        });
    }),
    j = () => null;
var H = n(742424),
    Y = n(228366),
    W = n(963307),
    K = n(734057),
    $ = n(71393),
    z = n(531685),
    q = n(174459),
    Z = n(99066),
    X = n(376261),
    Q = n(947593),
    J = n(681154),
    ee = n(99753);
n(321073);
var et = n(136722),
    en = n(52133),
    ei = n(860071),
    er = n(696451),
    es = n(488926),
    ea = n(818348);
let eo = [],
    el = new Set();
var eu = n(751765);
let ec = new Set();
var ed = n(808323),
    e_ = n(424994);
let eh = new Set([
    J.ContentInventoryEntryType.PLAYED_GAME,
    J.ContentInventoryEntryType.WATCHED_MEDIA,
    J.ContentInventoryEntryType.TOP_GAME,
    J.ContentInventoryEntryType.TOP_ARTIST,
    J.ContentInventoryEntryType.LISTENED_SESSION,
    J.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var ef = n(915089),
    ep = n(85829),
    eE = n(201275),
    em = n(657048),
    eg = n(728321),
    eA = n(342296),
    eI = n(773669),
    eT = n(317525),
    eS = n(994500),
    ey = n(309010),
    eC = n(741961),
    eN = n(287809),
    ev = n(977997),
    eR = n(625494),
    eO = n(403362),
    eb = n(427262),
    eD = n(19575),
    eL = n(47167);
let ew = eD.Ay.getEnableHardwareAcceleration(),
    eM = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    eP = r.memo(function (e) {
        let {
                colorString: t,
                colorStrings: s,
                colorRoleName: a,
                colorRoleId: o,
                isOwner: l,
                nick: u,
                user: c,
                currentUser: _,
                activities: h,
                applicationStream: f,
                status: p,
                channel: E,
                guildId: m,
                isTyping: A,
                isMobileOnline: S,
                isVROnline: y,
                premiumSince: C,
                nameplate: N,
                ...v
            } = e,
            R = r.useRef(null),
            [O, b] = r.useState(!1),
            D = null != C ? new Date(C) : null,
            L = r.useCallback(
                (e) => {
                    (0, g.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                                n.e("61312"),
                                n.e("89982"),
                                n.e("76900"),
                                n.e("88429"),
                                n.e("94881"),
                                n.e("26692"),
                                n.e("26132"),
                                n.e("46652"),
                                n.e("93103"),
                                n.e("93190"),
                                n.e("34552"),
                                n.e("21921"),
                                n.e("8757"),
                                n.e("76418"),
                                n.e("23625"),
                                n.e("66495"),
                                n.e("54037"),
                                n.e("89673"),
                                n.e("71210"),
                                n.e("68403"),
                                n.e("29787"),
                                n.e("88342"),
                                n.e("35027"),
                                n.e("82073"),
                                n.e("97558"),
                                n.e("89421"),
                                n.e("98965"),
                                n.e("91994"),
                                n.e("76665"),
                                n.e("35313"),
                                n.e("24198"),
                                n.e("39171"),
                                n.e("36564"),
                                n.e("52229"),
                                n.e("45996"),
                                n.e("792"),
                                n.e("92822"),
                                n.e("23427"),
                                n.e("49145"),
                                n.e("29422"),
                                n.e("14461"),
                                n.e("61268"),
                                n.e("9291"),
                                n.e("56753"),
                                n.e("65826"),
                                n.e("49520"),
                                n.e("7059"),
                                n.e("25486"),
                                n.e("22261"),
                                n.e("49644"),
                                n.e("43116"),
                                n.e("78195"),
                                n.e("39103"),
                                n.e("70314"),
                                n.e("42204"),
                                n.e("70515"),
                                n.e("4524"),
                                n.e("30221"),
                                n.e("54148"),
                                n.e("74021"),
                                n.e("13708"),
                                n.e("66939"),
                                n.e("24240"),
                                n.e("21879"),
                                n.e("17334"),
                                n.e("84841"),
                            ]).then(n.bind(n, 107632)),
                            t = ev.A.isInChannel(ey.A.getVoiceChannelId(), c.id);
                        return (n) => (0, i.jsx)(e, { ...n, user: c, guildId: m, channel: E, showMediaItems: t });
                    });
                },
                [c, m, E],
            ),
            w = r.useCallback(() => {
                let e = `@${eb.Ay.getUserTag(c, { decoration: "never" })}`,
                    t = `<@${c.id}>`;
                eR._.dispatch(U.jej.TEXTAREA_FOCUS, { channelId: E.id }),
                    eR._.dispatchToLastSubscribed(U.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    I.A.startTyping(E.id);
            }, [c, E.id]),
            M = r.useCallback(
                (e) => {
                    null != m &&
                        (e.stopPropagation(),
                        (0, ep.K4)({
                            guildId: m,
                            location: { section: U.JJy.MEMBER_LIST, object: U.ZSU.BOOST_GEM_ICON },
                        }));
                },
                [m],
            );
        return (0, i.jsx)(eA.A, {
            targetElementRef: R,
            user: c,
            guildId: m,
            channelId: E.id,
            roleId: o,
            position: d.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: w,
            shouldShow: O,
            onRequestClose: () => {
                b(!1);
            },
            children: (e) => {
                let { onClick: n, onMouseDown: r, ...o } = e;
                return (0, i.jsx)(T.A, {
                    ref: R,
                    className: V.Dc,
                    onContextMenu: L,
                    shouldAnimateStatus: ew,
                    user: c,
                    currentUser: _,
                    nick: u,
                    status: p,
                    activities: h,
                    applicationStream: f,
                    isOwner: l,
                    premiumSince: D,
                    colorString: t,
                    colorStrings: s,
                    colorRoleName: a,
                    isTyping: A,
                    channel: E,
                    guildId: m,
                    isMobile: S,
                    isVR: y,
                    onClickPremiumGuildIcon: M,
                    selected: O,
                    itemProps: v,
                    nameplate: N,
                    onClick: (e) => {
                        e.shiftKey ? w?.() : b((e) => !e);
                    },
                    onMouseDown: (e) => {
                        O ? e.stopPropagation() : r?.(e);
                    },
                    ...o,
                });
            },
        });
    }),
    ex = r.memo(function (e) {
        let { colorRoleId: t, ...n } = e,
            { channel: r, user: s, index: a } = e,
            o = (0, u.rm)(`${a}`),
            l = (0, _.bG)([eC.A], () => eC.A.isTyping(r.id, s.id)),
            c = (0, _.bG)([eN.default], () => eN.default.getCurrentUser()),
            d = (0, _.bG)([eT.A], () => (null != t ? eT.A.getRole(r.guild_id, t)?.name : void 0), [r, t]),
            h = (0, R.r)({ user: s, guildId: r.guild_id });
        return (0, i.jsx)(eP, { ...n, ...o, isTyping: l, currentUser: c, colorRoleName: d, nameplate: h });
    }),
    ek = r.memo(function (e) {
        let { id: t, title: s, count: a, guildId: o, className: l } = e,
            u = (0, eE.$7)({ roleId: t, guildId: o, size: 16 }),
            c = (0, _.bG)([eI.default], () => (null == a ? null : new Intl.NumberFormat(eI.default.locale).format(a)), [
                a,
            ]),
            d = r.useCallback(
                (e) => {
                    u?.src != null &&
                        (0, g.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("95340"), n.e("33743")]).then(
                                n.bind(n, 455538),
                            );
                            return (t) => (0, i.jsx)(e, { ...t, imageUrl: u.src });
                        });
                },
                [u?.src],
            );
        return t === U.clD.UNKNOWN
            ? (0, i.jsx)("div", { className: l, children: (0, i.jsx)("div", { className: V.k1 }) })
            : (0, i.jsxs)(w.A, {
                  className: l,
                  children: [
                      (0, i.jsx)(h.A, { children: null == a ? s : G.intl.format(G.t.Uaqbke, { title: s, count: a }) }),
                      (0, i.jsxs)("div", {
                          className: V.CN,
                          "aria-hidden": !0,
                          children: [
                              null != u
                                  ? (0, i.jsx)("span", {
                                        onContextMenu: d,
                                        children: (0, i.jsx)(em.A, { className: V.UT, ...u }),
                                    })
                                  : null,
                              (0, i.jsx)("span", { className: V.iy, children: s }),
                              null == c ? null : (0, i.jsxs)("span", { children: ["\xa0\u2014 ", c] }),
                          ],
                      }),
                  ],
              });
    });
function eU(e) {
    let { index: t } = e,
        n = (0, u.rm)(`${t}`);
    return (0, i.jsx)(T.A, { itemProps: n });
}
class eG extends r.Component {
    _list = null;
    _firstApplicationIdOccurrences = null;
    _lastRowsVersion;
    lastReportedAnalyticsChannel;
    shouldComponentUpdate(e) {
        return (
            e.channel.id !== this.props.channel.id ||
            e.version !== this.props.version ||
            e.groups.length !== this.props.groups.length
        );
    }
    componentDidMount() {
        this.updateSubscription(), this.trackMemberListViewed();
    }
    componentDidUpdate(e) {
        e.channel.id !== this.props.channel.id && this.updateSubscription(),
            this.trackMemberListViewed(),
            this.updateMaxContentFeedRowSeen();
    }
    setList = (e) => {
        (this._list = e), (this.props.listRef.current = e);
    };
    renderSection = (e) => {
        let { section: t } = e,
            { groups: n, channel: s } = this.props,
            a = n[t];
        if (a?.id === k) return (0, r.createElement)(B, { ...a, key: `section-${t}` });
        if (0 === t) {
            let { key: e } = a;
            return (0, i.jsx)(
                eg.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: eM,
                    children: (0, r.createElement)(ek, {
                        ...a,
                        key: `section-${e}`,
                        guildId: s.guild_id,
                        className: V.lL,
                    }),
                },
                `section-${t}`,
            );
        }
        return (0, r.createElement)(ek, { ...a, key: `section-${t}`, guildId: s.guild_id, className: V.lL });
    };
    getRowProps = (e) => {
        let { groups: t, rows: n } = this.props,
            i = t[e.section];
        if (null == i) return null;
        let { index: r } = i;
        return null == r || "row" !== e.type ? null : n[r + 1 + e.row];
    };
    getFirstApplicationIdOccurrences = () => {
        let { rows: e, version: t } = this.props;
        if (null != this._firstApplicationIdOccurrences && this._lastRowsVersion === t)
            return this._firstApplicationIdOccurrences;
        let n = new Set(),
            i = new Set();
        for (let t of e)
            if (null != t && t.type === W.S9.CONTENT_INVENTORY) {
                let { entry: e } = t;
                if ("application_id" in e.extra && null != e.extra.application_id) {
                    let t = e.extra.application_id;
                    n.has(t) || (n.add(t), i.add(e.id));
                }
            }
        return (this._firstApplicationIdOccurrences = i), (this._lastRowsVersion = t), i;
    };
    renderRow = (e) => {
        let { section: t, row: n, rowIndex: r } = e,
            { channel: s } = this.props,
            a = this.getRowProps(e);
        if (null != a) {
            if (a.type === W.S9.MEMBER && "user" in a) {
                let {
                    colorString: e,
                    colorStrings: t,
                    colorRoleId: n,
                    user: o,
                    status: l,
                    isOwner: u,
                    isMobileOnline: c,
                    isVROnline: d,
                    nick: _,
                    activities: h,
                    applicationStream: f,
                    premiumSince: p,
                } = a;
                return (0, i.jsx)(
                    ex,
                    {
                        colorString: e,
                        colorStrings: t,
                        colorRoleId: n,
                        user: o,
                        status: l,
                        isOwner: u,
                        nick: _,
                        activities: h,
                        applicationStream: f,
                        channel: s,
                        guildId: s.guild_id,
                        premiumSince: p,
                        isMobileOnline: c,
                        isVROnline: d,
                        index: r,
                    },
                    `member-${a.user.id}`,
                );
            }
            if (a.type === W.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${a.entry.id}`;
                null != a.entry.original_id && (e += `-${a.entry.original_id}`);
                let t = this.getFirstApplicationIdOccurrences().has(a.entry.id);
                return (0, i.jsx)(
                    H.Ay,
                    { ...a, channel: this.props.channel, index: r, isFirstApplicationOccurrence: t },
                    e,
                );
            }
            if (a.type === W.S9.HIDDEN_CONTENT_INVENTORY) return (0, i.jsx)(j, {}, "content-inventory-hidden-entry");
        }
        return (0, i.jsx)(eU, { index: r }, `placeholder-${t}:${n}`);
    };
    handleScroll = () => {
        this.updateSubscription(), this.updateMaxContentFeedRowSeen();
    };
    updateMaxContentFeedRowSeen = l().debounce(() => {
        let e = this._list;
        if (null == e) return;
        let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            i = n + t - this.props.sectionHeight;
        this.props.updateMaxContentFeedRowSeen(i);
    }, 50);
    getContentFeedGroup = () => {
        let e = this.props.groups[0];
        if (e?.id === k) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: t } = this.props;
        if (null != e) {
            let { rows: n } = this.props,
                i = e.index;
            return function (e, r) {
                if (0 === e) {
                    let e = n[i + 1 + r];
                    return (0, H.h9)(e);
                }
                return t;
            };
        }
        return t;
    };
    getContentFeedHeight = () => {
        let e = this.getContentFeedGroup();
        return null != e ? e.feedHeight + this.props.sectionHeight : 0;
    };
    getContentFeedAdjustedDimensions(e) {
        let { height: t, rowHeight: n, y: i } = e,
            r = this.getContentFeedHeight(),
            s = Math.max(0, t - Math.max(0, r - i)),
            a = Math.floor(s / n);
        return { height: s, rowHeight: n, rowsVisible: a, y: Math.max(0, i - r) };
    }
    getDimensions() {
        let e = this._list;
        if (null == e) return { y: 0, height: 0, rowHeight: 0 };
        let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            { rowHeight: i } = this.props,
            r = Math.floor(t / i);
        return this.getContentFeedAdjustedDimensions({ height: t, rowHeight: i, rowsVisible: r, y: n });
    }
    updateSubscription = l().debounce(() => {
        if (null == this._list) return;
        let { channel: e } = this.props,
            { rowHeight: t, y: n, height: i } = this.getDimensions();
        (0, A.NJ)({ guildId: e.guild_id, channelId: e.id, y: n, height: i, rowHeight: t });
    }, 50);
    trackMemberListViewed = () => {
        if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
        let e = this._list?.getItems(),
            { rowsVisible: t } = this.getDimensions();
        if (void 0 === t || 0 === t || null == e) return;
        this.hasContentFeed() && (e = e.filter((e) => 0 !== e.section));
        let n = e
            .map((e) => this.getRowProps(e))
            .slice(0, t + 1)
            .filter(eO.Vq);
        if (0 === n.length) return;
        let i = n.reduce(
            (e, t) => (
                t.type !== W.S9.MEMBER ||
                    (e.num_users_visible++,
                    t.isMobileOnline && e.num_users_visible_with_mobile_indicator++,
                    null != t.activities &&
                        t.activities.length > 0 &&
                        (e.num_users_visible_with_activity++,
                        t.activities.some((e) => e.type === U.$pd.PLAYING) && e.num_users_visible_with_game_activity++),
                    null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++,
                    t.user.collectibles?.nameplate != null && e.num_users_visible_with_nameplate++),
                e
            ),
            {
                num_users_visible: 0,
                num_users_visible_with_mobile_indicator: 0,
                num_users_visible_with_game_activity: 0,
                num_users_visible_with_activity: 0,
                num_users_visible_with_avatar_decoration: 0,
                num_users_visible_with_nameplate: 0,
            },
        );
        (this.lastReportedAnalyticsChannel = this.props.channel.id),
            C.Ay.trackWithMetadata(U.HAw.MEMBER_LIST_VIEWED, { ...i });
    };
    render() {
        let { groups: e, listId: t, channel: n, sectionHeight: r } = this.props;
        return (0, i.jsx)(f.sk, {
            children: (s) =>
                (0, i.jsx)(ef.V0, {
                    children: (o) =>
                        (0, i.jsx)("aside", {
                            className: a()(V.yg, V.ML),
                            "aria-labelledby": o,
                            children: (0, i.jsx)(p.F, {
                                component: (0, i.jsx)(h.A, {
                                    children: (0, i.jsx)(p.H, {
                                        id: o,
                                        children: G.intl.format(G.t.JBQxV6, {
                                            channel: (0, eL.m1)(n, eN.default, eS.A),
                                        }),
                                    }),
                                }),
                                children: (0, i.jsx)(u.PR, {
                                    children: (n) => {
                                        let { ref: o, role: l, ...u } = n;
                                        return (0, i.jsx)(
                                            E.OZ,
                                            {
                                                innerRole: l,
                                                innerAriaLabel: G.intl.string(G.t["9Oq93m"]),
                                                ref: (e) => {
                                                    (this._list = e),
                                                        (this.props.listRef.current = e),
                                                        (o.current = e?.getScrollerNode() ?? null);
                                                },
                                                className: a()(V.ol, { [V.Ij]: d.Fr }),
                                                paddingTop: 0,
                                                sectionHeight: r,
                                                rowHeight: this.getRowHeightComputer(),
                                                renderSection: this.renderSection,
                                                renderRow: this.renderRow,
                                                sections: e.map((e) => e.count),
                                                onScroll: this.handleScroll,
                                                fade: !0,
                                                ...u,
                                                ...s,
                                            },
                                            t,
                                        );
                                    },
                                }),
                            }),
                        }),
                }),
        });
    }
}
function eF(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: s } = (0, N.Ay)(y.A.MEMBER_LIST),
        o = (0, _.bG)([S.Ay], () => S.Ay.keyboardModeEnabled),
        l = (0, _.cf)([W.Ay], () => W.Ay.getProps(t.guild_id, t.id)),
        {
            rows: d,
            groups: h,
            version: f,
            updateMaxRowSeen: p,
        } = (function (e) {
            let {
                    memberStoreProps: { groups: t, rows: n, version: i },
                    channelId: s,
                    guildId: a,
                } = e,
                [o, l] = r.useState(!1),
                {
                    requestId: u,
                    entries: c,
                    impressionCappedEntryIds: d,
                } = (function (e) {
                    var t;
                    let n,
                        i = (0, ed.A)({ id: e_.X1.GLOBAL_FEED });
                    i = (function (e) {
                        let { entries: t, channelId: n } = e,
                            i = (0, _.bG)([K.A], () => K.A.getChannel(n)),
                            s = i?.guild_id,
                            a = r.useRef(new Set()),
                            o = r.useMemo(() => {
                                let e = new Set(t?.map((e) => e.author_id));
                                return (0, en.v)([...a.current], [...e]) || (a.current = e), a.current;
                            }, [t]);
                        r.useEffect(() => {
                            null != s &&
                                Array.from(o).forEach((e) => {
                                    ei.A.requestMember(s, e);
                                });
                        }, [o, s]);
                        let l = (0, _.yK)([er.Ay], () => {
                                if (null == s) return eo;
                                let e = [];
                                for (let t of o) er.Ay.isMember(s, t) && e.push(t);
                                return e;
                            }, [o, s]),
                            u = r.useMemo(() => {
                                if (null == i || 0 === l.length) return el;
                                let e = new Set();
                                for (let t of l) {
                                    let n = es.cc({ user: t, context: i });
                                    et.zy(n, ea.xB.VIEW_CHANNEL) && e.add(t);
                                }
                                return e;
                            }, [l, i]);
                        return r.useMemo(() => t?.filter((e) => u.has(e.author_id)), [t, u]);
                    })({ entries: i, channelId: e });
                    let { entries: s, filteredIds: a } =
                        ((t = i = r.useMemo(() => i?.filter((e) => eh.has(e.content_type)), [i])),
                        (n = (0, _.bG)([P.A, ee.A], () => {
                            let e = ee.A.getDebugImpressionCappingDisabled();
                            return !(0, Z.sE)("useFilterImpressionCappedContent") || e
                                ? ec
                                : P.A.getImpressionCappedItemIds();
                        }, [t])),
                        r.useMemo(() => {
                            if (null == t) return { entries: t, filteredIds: ec };
                            let e = new Set();
                            return {
                                entries: t.filter((t) => !!(0, eu.JM)(t) || !n.has(t.id) || (e.add(t.id), !1)),
                                filteredIds: e,
                            };
                        }, [t, n]));
                    return (
                        (i = s),
                        {
                            requestId: (0, _.bG)([ee.A], () => ee.A.getFeedRequestId(e_.X1.GLOBAL_FEED)),
                            entries: (i = (0, v.Ay)(i)),
                            impressionCappedEntryIds: a,
                        }
                    );
                })(s),
                h = (0, _.bG)([P.A], () => P.A.hidden),
                f = (0, _.bG)([z.A], () => z.A.isFocused()),
                p = (0, _.bG)([K.A], () => K.A.getChannel(s)),
                E = (0, _.bG)([$.A], () => $.A.getGuild(a), [a]),
                m = ((0, X.T)(E) ?? !1) && p?.isForumChannel() === !1,
                [g, A, I, T] = r.useMemo(() => {
                    let e;
                    if (null == c || 0 === c.length || null == u || !m) return [t, n, i];
                    let r = o ? c.length : 3,
                        d = c.slice(0, r);
                    e = h
                        ? [{ type: W.S9.HIDDEN_CONTENT_INVENTORY }]
                        : d.map((e) => ({ type: W.S9.CONTENT_INVENTORY, entry: e, requestId: u }));
                    let _ = {
                        id: k,
                        type: W.S9.CONTENT_INVENTORY_GROUP,
                        key: k,
                        count: e.length,
                        index: n.length,
                        title: G.intl.string(G.t["6gwSFY"]),
                        onToggleExpand: () => {
                            l((e) => {
                                let t = !e;
                                return (
                                    q.default.track(U.HAw.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                        channel_id: s,
                                        guild_id: a,
                                        expanded: t,
                                    }),
                                    t
                                );
                            });
                        },
                        expanded: o,
                        expandedCount: c.length,
                        feedHeight: e.map(H.h9).reduce((e, t) => e + t, 0),
                    };
                    return [[_, ...t], [...n, _, ...e], Math.random(), e];
                }, [s, c, o, t, a, u, n, i, h, m]),
                S = r.useRef(0),
                y = r.useRef(c),
                C = r.useRef(void 0),
                N = r.useRef({ impressionCappedEntryIds: d }),
                R = r.useCallback(
                    (e) => {
                        let t = Math.floor(e / H.bG),
                            n = Math.min(T?.length ?? 0, t);
                        S.current = Math.max(S.current, n);
                    },
                    [T],
                );
            return (
                r.useEffect(() => {
                    y.current = c;
                }, [c]),
                r.useEffect(() => {
                    N.current = { impressionCappedEntryIds: d };
                }, [d]),
                r.useEffect(
                    () => (
                        (S.current = 0),
                        (C.current = Date.now()),
                        () => {
                            if (null == u || null == C.current || Date.now() - C.current < 3e3) return;
                            let e = y.current?.map((e) => e.id) ?? [],
                                t = e.slice(0, S.current);
                            !h &&
                                f &&
                                m &&
                                ((0, Q.D)(U.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: u,
                                    first_shown_at: C.current,
                                    item_ids: t,
                                    surface_type: e_.UG.GUILD_MEMBER_LIST,
                                    channel_id: s,
                                    guild_id: a,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [...N.current.impressionCappedEntryIds],
                                }),
                                (0, Z.sE)("useInjectContentInventoryFeed") &&
                                    Y.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: t }));
                        }
                    ),
                    [u, s, a, h, f, m],
                ),
                { groups: g, rows: A, version: I, updateMaxRowSeen: R }
            );
        })({ memberStoreProps: l, channelId: t.id, guildId: t.guild_id }),
        E = r.useRef(null),
        g = r.useRef(null);
    r.useEffect(() => {
        "u" < typeof document ||
            (null != document.activeElement &&
                document.activeElement !== document.body &&
                g.current?.focus({ preventScroll: !0 }));
    }, []);
    let A = (0, m.W)("lg") + (0, m.W)("xxs"),
        I = r.useCallback(
            (e, t) => {
                let n = E.current;
                if (null == n) return;
                let i = parseInt(t, 10),
                    [r, s] = n.getSectionRowFromIndex(i);
                n.scrollToIndex({
                    section: r,
                    row: s,
                    padding: 42 * (0 === r && 0 === s),
                    callback: () => {
                        requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                    },
                });
            },
            [42],
        ),
        T = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = E.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        C = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = E.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        },
                    });
                }),
            [],
        ),
        R = (0, c.Ay)({ id: `members-${t.id}`, setFocus: I, isEnabled: o, scrollToStart: T, scrollToEnd: C });
    return (0, i.jsx)(N.f5, {
        value: s,
        children: (0, i.jsx)("div", {
            ref: g,
            tabIndex: -1,
            className: a()(V.kL, n),
            children: (0, i.jsx)(u.hD, {
                navigator: R,
                children: (0, i.jsx)(eG, {
                    ...e,
                    ...l,
                    version: f,
                    groups: h,
                    rows: d,
                    listRef: E,
                    updateMaxContentFeedRowSeen: p,
                    sectionHeight: 18 + A,
                    rowHeight: 42,
                }),
            }),
        }),
    });
}
function eV(e) {
    let { channel: t, className: n } = e,
        s = r.useDeferredValue(t);
    return r.useMemo(() => (0, i.jsx)(v.r$, { children: (0, i.jsx)(eF, { channel: s, className: n }) }), [s, n]);
}
