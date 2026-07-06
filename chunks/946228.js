"use strict";
n.d(t, { A: () => eV, Y: () => ex });
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
    E = n(707554),
    p = n(475825),
    m = n(506309),
    g = n(442433),
    A = n(361610),
    I = n(414798),
    T = n(589158),
    S = n(775602),
    N = n(793574),
    C = n(95561),
    y = n(688810),
    O = n(449582),
    R = n(900797),
    v = n(847374),
    b = n(320448),
    L = n(939249),
    D = n(485947),
    w = n(180170),
    P = n(435738),
    M = n(38055);
let x = "content-inventory-feed";
var U = n(652215),
    k = n(375708),
    G = n(933928),
    V = n(540808);
let F = r.memo(function (e) {
        let t,
            { title: s, onToggleExpand: a, expanded: o, expandedCount: l } = e,
            u = (0, _.bG)([P.A], () => P.A.hidden),
            c = r.useCallback((e) => {
                (0, g.L3)(e, async () => {
                    let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 38055));
                    return () => (0, i.jsx)(e, { closePopout: g.Z_ });
                });
            }, []),
            d = r.useCallback(() => (u ? (0, w.Il)() : l > 3 ? a() : (0, U.tEg)()), [u, l, a]);
        return (0, i.jsxs)(D.A, {
            className: V.lL,
            children: [
                (0, i.jsx)(h.A, { children: k.intl.format(k.t.Uaqbke, { title: s, count: l }) }),
                (0, i.jsxs)("div", {
                    className: G.N1,
                    children: [
                        (0, i.jsx)(L.D, {
                            onClick: d,
                            onContextMenu: c,
                            tag: "span",
                            tabIndex: -1,
                            "aria-hidden": !0,
                            children: (0, i.jsxs)("span", { children: [s, " \u2014 ", l] }),
                        }),
                        (0, i.jsx)(M.A, {}),
                        (0, i.jsx)(L.D, {
                            onClick: d,
                            onContextMenu: c,
                            tag: "span",
                            tabIndex: -1,
                            "aria-hidden": !0,
                            className: G.AN,
                            children: (0, i.jsx)("span", {}),
                        }),
                        l <= 3 && !u
                            ? null
                            : ((t = u
                                  ? (0, i.jsx)(R.t, { className: G.wT })
                                  : o
                                    ? (0, i.jsx)(v.a, { className: G.wT })
                                    : (0, i.jsx)(b._, { className: G.wT })),
                              (0, i.jsx)(L.D, {
                                  onClick: d,
                                  tag: "span",
                                  "aria-label": k.intl.string(o && !u ? k.t.iTcuma : k.t.dcl9MQ),
                                  "aria-expanded": !u && o,
                                  className: G.wT,
                                  children: t,
                              })),
                    ],
                }),
            ],
        });
    }),
    B = function () {
        return null;
    };
var H = n(742424),
    j = n(228366),
    W = n(963307),
    Y = n(734057),
    K = n(71393),
    $ = n(531685),
    z = n(174459),
    q = n(99066),
    Z = n(376261),
    X = n(947593),
    Q = n(681154),
    J = n(99753);
n(321073);
var ee = n(136722),
    et = n(52133),
    en = n(860071),
    ei = n(696451),
    er = n(488926),
    es = n(818348);
let ea = [],
    eo = new Set();
var el = n(583846);
let eu = new Set();
var ec = n(808323),
    ed = n(424994);
let e_ = new Set([
    Q.ContentInventoryEntryType.PLAYED_GAME,
    Q.ContentInventoryEntryType.WATCHED_MEDIA,
    Q.ContentInventoryEntryType.TOP_GAME,
    Q.ContentInventoryEntryType.TOP_ARTIST,
    Q.ContentInventoryEntryType.LISTENED_SESSION,
    Q.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var eh = n(915089),
    ef = n(63152),
    eE = n(201275),
    ep = n(657048),
    em = n(728321),
    eg = n(342296),
    eA = n(773669),
    eI = n(317525),
    eT = n(994500),
    eS = n(309010),
    eN = n(741961),
    eC = n(287809),
    ey = n(977997),
    eO = n(625494),
    eR = n(403362),
    ev = n(427262),
    eb = n(19575),
    eL = n(47167);
let eD = eb.Ay.getEnableHardwareAcceleration(),
    ew = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
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
                status: E,
                channel: p,
                guildId: m,
                isTyping: A,
                isMobileOnline: S,
                isVROnline: N,
                premiumSince: C,
                nameplate: y,
                ...O
            } = e,
            R = r.useRef(null),
            [v, b] = r.useState(!1),
            L = null != C ? new Date(C) : null,
            D = r.useCallback(
                (e) => {
                    (0, g.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                                n.e("61312"),
                                n.e("41831"),
                                n.e("87761"),
                                n.e("18078"),
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
                                n.e("66495"),
                                n.e("71210"),
                                n.e("85968"),
                                n.e("89673"),
                                n.e("68403"),
                                n.e("88342"),
                                n.e("29787"),
                                n.e("89421"),
                                n.e("35027"),
                                n.e("98965"),
                                n.e("82073"),
                                n.e("97558"),
                                n.e("91994"),
                                n.e("76665"),
                                n.e("28662"),
                                n.e("35313"),
                                n.e("54625"),
                                n.e("71133"),
                                n.e("28152"),
                                n.e("39171"),
                                n.e("36564"),
                                n.e("24198"),
                                n.e("52229"),
                                n.e("45996"),
                                n.e("792"),
                                n.e("92822"),
                                n.e("23427"),
                                n.e("49145"),
                                n.e("29422"),
                                n.e("61268"),
                                n.e("9291"),
                                n.e("65826"),
                                n.e("49520"),
                                n.e("7059"),
                                n.e("56753"),
                                n.e("14461"),
                                n.e("25486"),
                                n.e("22261"),
                                n.e("49644"),
                                n.e("43116"),
                                n.e("39103"),
                                n.e("78195"),
                                n.e("70314"),
                                n.e("70515"),
                                n.e("4524"),
                                n.e("42204"),
                                n.e("54148"),
                                n.e("74021"),
                                n.e("13708"),
                                n.e("66939"),
                                n.e("30221"),
                                n.e("24240"),
                                n.e("21879"),
                                n.e("17334"),
                                n.e("84841"),
                            ]).then(n.bind(n, 107632)),
                            t = ey.A.isInChannel(eS.A.getVoiceChannelId(), c.id);
                        return (n) => (0, i.jsx)(e, { ...n, user: c, guildId: m, channel: p, showMediaItems: t });
                    });
                },
                [c, m, p],
            ),
            w = r.useCallback(() => {
                let e = `@${ev.Ay.getUserTag(c, { decoration: "never" })}`,
                    t = `<@${c.id}>`;
                eO._.dispatch(U.jej.TEXTAREA_FOCUS, { channelId: p.id }),
                    eO._.dispatchToLastSubscribed(U.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    I.A.startTyping(p.id);
            }, [c, p.id]),
            P = r.useCallback(
                (e) => {
                    null != m &&
                        (e.stopPropagation(),
                        (0, ef.K4)({
                            guildId: m,
                            location: { section: U.JJy.MEMBER_LIST, object: U.ZSU.BOOST_GEM_ICON },
                        }));
                },
                [m],
            );
        return (0, i.jsx)(eg.A, {
            targetElementRef: R,
            user: c,
            guildId: m,
            channelId: p.id,
            roleId: o,
            position: d.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: w,
            shouldShow: v,
            onRequestClose: () => {
                b(!1);
            },
            children: (e) => {
                let { onClick: n, onMouseDown: r, ...o } = e;
                return (0, i.jsx)(T.A, {
                    ref: R,
                    className: V.Dc,
                    onContextMenu: D,
                    shouldAnimateStatus: eD,
                    user: c,
                    currentUser: _,
                    nick: u,
                    status: E,
                    activities: h,
                    applicationStream: f,
                    isOwner: l,
                    premiumSince: L,
                    colorString: t,
                    colorStrings: s,
                    colorRoleName: a,
                    isTyping: A,
                    channel: p,
                    guildId: m,
                    isMobile: S,
                    isVR: N,
                    onClickPremiumGuildIcon: P,
                    selected: v,
                    itemProps: O,
                    nameplate: y,
                    onClick: (e) => {
                        e.shiftKey ? w?.() : b((e) => !e);
                    },
                    onMouseDown: (e) => {
                        v ? e.stopPropagation() : r?.(e);
                    },
                    ...o,
                });
            },
        });
    }),
    eM = r.memo(function (e) {
        let { colorRoleId: t, ...n } = e,
            { channel: r, user: s, index: a } = e,
            o = (0, u.rm)(`${a}`),
            l = (0, _.bG)([eN.A], () => eN.A.isTyping(r.id, s.id)),
            c = (0, _.bG)([eC.default], () => eC.default.getCurrentUser()),
            d = (0, _.bG)([eI.A], () => (null != t ? eI.A.getRole(r.guild_id, t)?.name : void 0), [r, t]),
            h = (0, O.r)({ user: s, guildId: r.guild_id });
        return (0, i.jsx)(eP, { ...n, ...o, isTyping: l, currentUser: c, colorRoleName: d, nameplate: h });
    }),
    ex = r.memo(function (e) {
        let { id: t, title: s, count: a, guildId: o, className: l } = e,
            u = (0, eE.$7)({ roleId: t, guildId: o, size: 16 }),
            c = (0, _.bG)([eA.default], () => (null == a ? null : new Intl.NumberFormat(eA.default.locale).format(a)), [
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
            : (0, i.jsxs)(D.A, {
                  className: l,
                  children: [
                      (0, i.jsx)(h.A, { children: null == a ? s : k.intl.format(k.t.Uaqbke, { title: s, count: a }) }),
                      (0, i.jsxs)("div", {
                          className: V.CN,
                          "aria-hidden": !0,
                          children: [
                              null != u
                                  ? (0, i.jsx)("span", {
                                        onContextMenu: d,
                                        children: (0, i.jsx)(ep.A, { className: V.UT, ...u }),
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
class ek extends r.Component {
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
        if (a?.id === x) return (0, r.createElement)(F, { ...a, key: `section-${t}` });
        if (0 === t) {
            let { key: e } = a;
            return (0, i.jsx)(
                em.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: ew,
                    children: (0, r.createElement)(ex, {
                        ...a,
                        key: `section-${e}`,
                        guildId: s.guild_id,
                        className: V.lL,
                    }),
                },
                `section-${t}`,
            );
        }
        return (0, r.createElement)(ex, { ...a, key: `section-${t}`, guildId: s.guild_id, className: V.lL });
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
                    premiumSince: E,
                } = a;
                return (0, i.jsx)(
                    eM,
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
                        premiumSince: E,
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
            if (a.type === W.S9.HIDDEN_CONTENT_INVENTORY) return (0, i.jsx)(B, {}, "content-inventory-hidden-entry");
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
        if (e?.id === x) return e;
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
            .filter(eR.Vq);
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
                (0, i.jsx)(eh.V0, {
                    children: (o) =>
                        (0, i.jsx)("aside", {
                            className: a()(V.yg, V.ML),
                            "aria-labelledby": o,
                            children: (0, i.jsx)(E.F, {
                                component: (0, i.jsx)(h.A, {
                                    children: (0, i.jsx)(E.H, {
                                        id: o,
                                        children: k.intl.format(k.t.JBQxV6, {
                                            channel: (0, eL.m1)(n, eC.default, eT.A),
                                        }),
                                    }),
                                }),
                                children: (0, i.jsx)(u.PR, {
                                    children: (n) => {
                                        let { ref: o, role: l, ...u } = n;
                                        return (0, i.jsx)(
                                            p.OZ,
                                            {
                                                role: l,
                                                "aria-label": k.intl.string(k.t["9Oq93m"]),
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
function eG(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: s } = (0, y.Ay)(N.A.MEMBER_LIST),
        o = (0, _.bG)([S.Ay], () => S.Ay.keyboardModeEnabled),
        l = (0, _.cf)([W.Ay], () => W.Ay.getProps(t.guild_id, t.id)),
        {
            rows: d,
            groups: h,
            version: f,
            updateMaxRowSeen: E,
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
                        i = (0, ec.A)({ id: ed.X1.GLOBAL_FEED });
                    i = (function (e) {
                        let { entries: t, channelId: n } = e,
                            i = (0, _.bG)([Y.A], () => Y.A.getChannel(n)),
                            s = i?.guild_id,
                            a = r.useRef(new Set()),
                            o = r.useMemo(() => {
                                let e = new Set(t?.map((e) => e.author_id));
                                return (0, et.v)([...a.current], [...e]) || (a.current = e), a.current;
                            }, [t]);
                        r.useEffect(() => {
                            null != s &&
                                Array.from(o).forEach((e) => {
                                    en.A.requestMember(s, e);
                                });
                        }, [o, s]);
                        let l = (0, _.yK)([ei.Ay], () => {
                                if (null == s) return ea;
                                let e = [];
                                for (let t of o) ei.Ay.isMember(s, t) && e.push(t);
                                return e;
                            }, [o, s]),
                            u = r.useMemo(() => {
                                if (null == i || 0 === l.length) return eo;
                                let e = new Set();
                                for (let t of l) {
                                    let n = er.cc({ user: t, context: i });
                                    ee.zy(n, es.xB.VIEW_CHANNEL) && e.add(t);
                                }
                                return e;
                            }, [l, i]);
                        return r.useMemo(() => t?.filter((e) => u.has(e.author_id)), [t, u]);
                    })({ entries: i, channelId: e });
                    let { entries: s, filteredIds: a } =
                        ((t = i = r.useMemo(() => i?.filter((e) => e_.has(e.content_type)), [i])),
                        (n = (0, _.bG)([P.A, J.A], () => {
                            let e = J.A.getDebugImpressionCappingDisabled();
                            return !(0, q.sE)("useFilterImpressionCappedContent") || e
                                ? eu
                                : P.A.getImpressionCappedItemIds();
                        }, [t])),
                        r.useMemo(() => {
                            if (null == t) return { entries: t, filteredIds: eu };
                            let e = new Set();
                            return {
                                entries: t.filter((t) => !!(0, el.JM)(t) || !n.has(t.id) || (e.add(t.id), !1)),
                                filteredIds: e,
                            };
                        }, [t, n]));
                    return (
                        (i = s),
                        {
                            requestId: (0, _.bG)([J.A], () => J.A.getFeedRequestId(ed.X1.GLOBAL_FEED)),
                            entries: i,
                            impressionCappedEntryIds: a,
                        }
                    );
                })(s),
                h = (0, _.bG)([P.A], () => P.A.hidden),
                f = (0, _.bG)([$.A], () => $.A.isFocused()),
                E = (0, _.bG)([Y.A], () => Y.A.getChannel(s)),
                p = (0, _.bG)([K.A], () => K.A.getGuild(a), [a]),
                m = ((0, Z.T)(p) ?? !1) && E?.isForumChannel() === !1,
                [g, A, I, T] = r.useMemo(() => {
                    let e;
                    if (null == c || 0 === c.length || null == u || !m) return [t, n, i];
                    let r = o ? c.length : 3,
                        d = c.slice(0, r);
                    e = h
                        ? [{ type: W.S9.HIDDEN_CONTENT_INVENTORY }]
                        : d.map((e) => ({ type: W.S9.CONTENT_INVENTORY, entry: e, requestId: u }));
                    let _ = {
                        id: x,
                        type: W.S9.CONTENT_INVENTORY_GROUP,
                        key: x,
                        count: e.length,
                        index: n.length,
                        title: k.intl.string(k.t["6gwSFY"]),
                        onToggleExpand: function () {
                            l((e) => {
                                let t = !e;
                                return (
                                    z.default.track(U.HAw.MEMBERLIST_CONTENT_FEED_TOGGLED, {
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
                N = r.useRef(c),
                C = r.useRef(void 0),
                y = r.useRef({ impressionCappedEntryIds: d }),
                O = r.useCallback(
                    (e) => {
                        let t = Math.floor(e / H.bG),
                            n = Math.min(T?.length ?? 0, t);
                        S.current = Math.max(S.current, n);
                    },
                    [T],
                );
            return (
                r.useEffect(() => {
                    N.current = c;
                }, [c]),
                r.useEffect(() => {
                    y.current = { impressionCappedEntryIds: d };
                }, [d]),
                r.useEffect(
                    () => (
                        (S.current = 0),
                        (C.current = Date.now()),
                        () => {
                            if (null == u || null == C.current || Date.now() - C.current < 3e3) return;
                            let e = N.current?.map((e) => e.id) ?? [],
                                t = e.slice(0, S.current);
                            !h &&
                                f &&
                                m &&
                                ((0, X.D)(U.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: u,
                                    first_shown_at: C.current,
                                    item_ids: t,
                                    surface_type: ed.UG.GUILD_MEMBER_LIST,
                                    channel_id: s,
                                    guild_id: a,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [...y.current.impressionCappedEntryIds],
                                }),
                                (0, q.sE)("useInjectContentInventoryFeed") &&
                                    j.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: t }));
                        }
                    ),
                    [u, s, a, h, f, m],
                ),
                { groups: g, rows: A, version: I, updateMaxRowSeen: O }
            );
        })({ memberStoreProps: l, channelId: t.id, guildId: t.guild_id }),
        p = r.useRef(null),
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
                let n = p.current;
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
                    let t = p.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        C = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = p.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        },
                    });
                }),
            [],
        ),
        O = (0, c.Ay)({ id: `members-${t.id}`, setFocus: I, isEnabled: o, scrollToStart: T, scrollToEnd: C });
    return (0, i.jsx)(y.f5, {
        value: s,
        children: (0, i.jsx)("div", {
            ref: g,
            tabIndex: -1,
            className: a()(V.kL, n),
            children: (0, i.jsx)(u.hD, {
                navigator: O,
                children: (0, i.jsx)(ek, {
                    ...e,
                    ...l,
                    version: f,
                    groups: h,
                    rows: d,
                    listRef: p,
                    updateMaxContentFeedRowSeen: E,
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
    return r.useMemo(() => (0, i.jsx)(eG, { channel: s, className: n }), [s, n]);
}
