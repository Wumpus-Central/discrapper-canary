"use strict";
n.d(t, { A: () => eF, Y: () => ew });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(735438),
    o = n.n(l),
    d = n(837381),
    c = n(887129),
    u = n(607399),
    _ = n(17928),
    E = n(140735),
    A = n(312138),
    h = n(707554),
    I = n(475825),
    f = n(506309),
    p = n(442433),
    T = n(361610),
    m = n(414798),
    g = n(589158),
    S = n(775602),
    N = n(793574),
    C = n(95561),
    O = n(688810),
    R = n(449582),
    L = n(900797),
    D = n(847374),
    y = n(320448),
    v = n(939249),
    b = n(485947),
    M = n(180170),
    P = n(435738),
    U = n(38055);
let w = "content-inventory-feed";
var G = n(652215),
    x = n(375708),
    k = n(933928),
    F = n(540808);
let V = r.memo(function (e) {
        let t,
            { title: a, onToggleExpand: s, expanded: l, expandedCount: o } = e,
            d = (0, _.bG)([P.A], () => P.A.hidden),
            c = r.useCallback((e) => {
                (0, p.L3)(e, async () => {
                    let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 38055));
                    return () => (0, i.jsx)(e, { closePopout: p.Z_ });
                });
            }, []),
            u = r.useCallback(() => (d ? (0, M.Il)() : o > 3 ? s() : (0, G.tEg)()), [d, o, s]);
        return (0, i.jsxs)(b.A, {
            className: F.lL,
            children: [
                (0, i.jsx)(E.A, { children: x.intl.format(x.t.Uaqbke, { title: a, count: o }) }),
                (0, i.jsxs)("div", {
                    className: k.N1,
                    children: [
                        (0, i.jsx)(v.D, {
                            onClick: u,
                            onContextMenu: c,
                            tag: "span",
                            tabIndex: -1,
                            "aria-hidden": !0,
                            children: (0, i.jsxs)("span", { children: [a, " \u2014 ", o] }),
                        }),
                        (0, i.jsx)(U.A, {}),
                        (0, i.jsx)(v.D, {
                            onClick: u,
                            onContextMenu: c,
                            tag: "span",
                            tabIndex: -1,
                            "aria-hidden": !0,
                            className: k.AN,
                            children: (0, i.jsx)("span", {}),
                        }),
                        o <= 3 && !d
                            ? null
                            : ((t = d
                                  ? (0, i.jsx)(L.t, { className: k.wT })
                                  : l
                                    ? (0, i.jsx)(D.a, { className: k.wT })
                                    : (0, i.jsx)(y._, { className: k.wT })),
                              (0, i.jsx)(v.D, {
                                  onClick: u,
                                  tag: "span",
                                  "aria-label": x.intl.string(l && !d ? x.t.iTcuma : x.t.dcl9MQ),
                                  "aria-expanded": !d && l,
                                  className: k.wT,
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
    ea = n(818348);
let es = [],
    el = new Set();
var eo = n(583846);
let ed = new Set();
var ec = n(808323),
    eu = n(424994);
let e_ = new Set([
    Q.ContentInventoryEntryType.PLAYED_GAME,
    Q.ContentInventoryEntryType.WATCHED_MEDIA,
    Q.ContentInventoryEntryType.TOP_GAME,
    Q.ContentInventoryEntryType.TOP_ARTIST,
    Q.ContentInventoryEntryType.LISTENED_SESSION,
    Q.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var eE = n(915089),
    eA = n(63152),
    eh = n(201275),
    eI = n(657048),
    ef = n(728321),
    ep = n(342296),
    eT = n(773669),
    em = n(317525),
    eg = n(994500),
    eS = n(309010),
    eN = n(741961),
    eC = n(287809),
    eO = n(977997),
    eR = n(625494),
    eL = n(403362),
    eD = n(427262),
    ey = n(19575),
    ev = n(47167);
let eb = ey.Ay.getEnableHardwareAcceleration(),
    eM = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    eP = r.memo(function (e) {
        let {
                colorString: t,
                colorStrings: a,
                colorRoleName: s,
                colorRoleId: l,
                isOwner: o,
                nick: d,
                user: c,
                currentUser: _,
                activities: E,
                applicationStream: A,
                status: h,
                channel: I,
                guildId: f,
                isTyping: T,
                isMobileOnline: S,
                isVROnline: N,
                premiumSince: C,
                nameplate: O,
                ...R
            } = e,
            L = r.useRef(null),
            [D, y] = r.useState(!1),
            v = null != C ? new Date(C) : null,
            b = r.useCallback(
                (e) => {
                    (0, p.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                                n.e("31463"),
                                n.e("41831"),
                                n.e("65264"),
                                n.e("62323"),
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
                                n.e("54625"),
                                n.e("76665"),
                                n.e("28662"),
                                n.e("35313"),
                                n.e("71133"),
                                n.e("28152"),
                                n.e("39171"),
                                n.e("36564"),
                                n.e("24198"),
                                n.e("52229"),
                                n.e("45996"),
                                n.e("792"),
                                n.e("92822"),
                                n.e("61268"),
                                n.e("23427"),
                                n.e("49145"),
                                n.e("29422"),
                                n.e("9291"),
                                n.e("56753"),
                                n.e("65826"),
                                n.e("49520"),
                                n.e("14461"),
                                n.e("93014"),
                                n.e("7059"),
                                n.e("25486"),
                                n.e("22261"),
                                n.e("49644"),
                                n.e("78195"),
                                n.e("43116"),
                                n.e("39103"),
                                n.e("70314"),
                                n.e("42204"),
                                n.e("74021"),
                                n.e("70515"),
                                n.e("4524"),
                                n.e("13708"),
                                n.e("54148"),
                                n.e("66939"),
                                n.e("30221"),
                                n.e("24240"),
                                n.e("21879"),
                                n.e("17334"),
                                n.e("84841"),
                            ]).then(n.bind(n, 107632)),
                            t = eO.A.isInChannel(eS.A.getVoiceChannelId(), c.id);
                        return (n) => (0, i.jsx)(e, { ...n, user: c, guildId: f, channel: I, showMediaItems: t });
                    });
                },
                [c, f, I],
            ),
            M = r.useCallback(() => {
                let e = `@${eD.Ay.getUserTag(c, { decoration: "never" })}`,
                    t = `<@${c.id}>`;
                eR._.dispatch(G.jej.TEXTAREA_FOCUS, { channelId: I.id }),
                    eR._.dispatchToLastSubscribed(G.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    m.A.startTyping(I.id);
            }, [c, I.id]),
            P = r.useCallback(
                (e) => {
                    null != f &&
                        (e.stopPropagation(),
                        (0, eA.K4)({
                            guildId: f,
                            location: { section: G.JJy.MEMBER_LIST, object: G.ZSU.BOOST_GEM_ICON },
                        }));
                },
                [f],
            );
        return (0, i.jsx)(ep.A, {
            targetElementRef: L,
            user: c,
            guildId: f,
            channelId: I.id,
            roleId: l,
            position: u.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: M,
            shouldShow: D,
            onRequestClose: () => {
                y(!1);
            },
            children: (e) => {
                let { onClick: n, onMouseDown: r, ...l } = e;
                return (0, i.jsx)(g.A, {
                    ref: L,
                    className: F.Dc,
                    onContextMenu: b,
                    shouldAnimateStatus: eb,
                    user: c,
                    currentUser: _,
                    nick: d,
                    status: h,
                    activities: E,
                    applicationStream: A,
                    isOwner: o,
                    premiumSince: v,
                    colorString: t,
                    colorStrings: a,
                    colorRoleName: s,
                    isTyping: T,
                    channel: I,
                    guildId: f,
                    isMobile: S,
                    isVR: N,
                    onClickPremiumGuildIcon: P,
                    selected: D,
                    itemProps: R,
                    nameplate: O,
                    onClick: (e) => {
                        e.shiftKey ? M?.() : y((e) => !e);
                    },
                    onMouseDown: (e) => {
                        D ? e.stopPropagation() : r?.(e);
                    },
                    ...l,
                });
            },
        });
    }),
    eU = r.memo(function (e) {
        let { colorRoleId: t, ...n } = e,
            { channel: r, user: a, index: s } = e,
            l = (0, d.rm)(`${s}`),
            o = (0, _.bG)([eN.A], () => eN.A.isTyping(r.id, a.id)),
            c = (0, _.bG)([eC.default], () => eC.default.getCurrentUser()),
            u = (0, _.bG)([em.A], () => (null != t ? em.A.getRole(r.guild_id, t)?.name : void 0), [r, t]),
            E = (0, R.r)({ user: a, guildId: r.guild_id });
        return (0, i.jsx)(eP, { ...n, ...l, isTyping: o, currentUser: c, colorRoleName: u, nameplate: E });
    }),
    ew = r.memo(function (e) {
        let { id: t, title: a, count: s, guildId: l, className: o } = e,
            d = (0, eh.$7)({ roleId: t, guildId: l, size: 16 }),
            c = (0, _.bG)([eT.default], () => (null == s ? null : new Intl.NumberFormat(eT.default.locale).format(s)), [
                s,
            ]),
            u = r.useCallback(
                (e) => {
                    d?.src != null &&
                        (0, p.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("95340"), n.e("33743")]).then(
                                n.bind(n, 455538),
                            );
                            return (t) => (0, i.jsx)(e, { ...t, imageUrl: d.src });
                        });
                },
                [d?.src],
            );
        return t === G.clD.UNKNOWN
            ? (0, i.jsx)("div", { className: o, children: (0, i.jsx)("div", { className: F.k1 }) })
            : (0, i.jsxs)(b.A, {
                  className: o,
                  children: [
                      (0, i.jsx)(E.A, { children: null == s ? a : x.intl.format(x.t.Uaqbke, { title: a, count: s }) }),
                      (0, i.jsxs)("div", {
                          className: F.CN,
                          "aria-hidden": !0,
                          children: [
                              null != d
                                  ? (0, i.jsx)("span", {
                                        onContextMenu: u,
                                        children: (0, i.jsx)(eI.A, { className: F.UT, ...d }),
                                    })
                                  : null,
                              (0, i.jsx)("span", { className: F.iy, children: a }),
                              null == c ? null : (0, i.jsxs)("span", { children: ["\xa0\u2014 ", c] }),
                          ],
                      }),
                  ],
              });
    });
function eG(e) {
    let { index: t } = e,
        n = (0, d.rm)(`${t}`);
    return (0, i.jsx)(g.A, { itemProps: n });
}
class ex extends r.Component {
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
            { groups: n, channel: a } = this.props,
            s = n[t];
        if (s?.id === w) return (0, r.createElement)(V, { ...s, key: `section-${t}` });
        if (0 === t) {
            let { key: e } = s;
            return (0, i.jsx)(
                ef.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: eM,
                    children: (0, r.createElement)(ew, {
                        ...s,
                        key: `section-${e}`,
                        guildId: a.guild_id,
                        className: F.lL,
                    }),
                },
                `section-${t}`,
            );
        }
        return (0, r.createElement)(ew, { ...s, key: `section-${t}`, guildId: a.guild_id, className: F.lL });
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
            { channel: a } = this.props,
            s = this.getRowProps(e);
        if (null != s) {
            if (s.type === W.S9.MEMBER && "user" in s) {
                let {
                    colorString: e,
                    colorStrings: t,
                    colorRoleId: n,
                    user: l,
                    status: o,
                    isOwner: d,
                    isMobileOnline: c,
                    isVROnline: u,
                    nick: _,
                    activities: E,
                    applicationStream: A,
                    premiumSince: h,
                } = s;
                return (0, i.jsx)(
                    eU,
                    {
                        colorString: e,
                        colorStrings: t,
                        colorRoleId: n,
                        user: l,
                        status: o,
                        isOwner: d,
                        nick: _,
                        activities: E,
                        applicationStream: A,
                        channel: a,
                        guildId: a.guild_id,
                        premiumSince: h,
                        isMobileOnline: c,
                        isVROnline: u,
                        index: r,
                    },
                    `member-${s.user.id}`,
                );
            }
            if (s.type === W.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${s.entry.id}`;
                null != s.entry.original_id && (e += `-${s.entry.original_id}`);
                let t = this.getFirstApplicationIdOccurrences().has(s.entry.id);
                return (0, i.jsx)(
                    H.Ay,
                    { ...s, channel: this.props.channel, index: r, isFirstApplicationOccurrence: t },
                    e,
                );
            }
            if (s.type === W.S9.HIDDEN_CONTENT_INVENTORY) return (0, i.jsx)(B, {}, "content-inventory-hidden-entry");
        }
        return (0, i.jsx)(eG, { index: r }, `placeholder-${t}:${n}`);
    };
    handleScroll = () => {
        this.updateSubscription(), this.updateMaxContentFeedRowSeen();
    };
    updateMaxContentFeedRowSeen = o().debounce(() => {
        let e = this._list;
        if (null == e) return;
        let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            i = n + t - this.props.sectionHeight;
        this.props.updateMaxContentFeedRowSeen(i);
    }, 50);
    getContentFeedGroup = () => {
        let e = this.props.groups[0];
        if (e?.id === w) return e;
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
            a = Math.max(0, t - Math.max(0, r - i)),
            s = Math.floor(a / n);
        return { height: a, rowHeight: n, rowsVisible: s, y: Math.max(0, i - r) };
    }
    getDimensions() {
        let e = this._list;
        if (null == e) return { y: 0, height: 0, rowHeight: 0 };
        let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            { rowHeight: i } = this.props,
            r = Math.floor(t / i);
        return this.getContentFeedAdjustedDimensions({ height: t, rowHeight: i, rowsVisible: r, y: n });
    }
    updateSubscription = o().debounce(() => {
        if (null == this._list) return;
        let { channel: e } = this.props,
            { rowHeight: t, y: n, height: i } = this.getDimensions();
        (0, T.NJ)({ guildId: e.guild_id, channelId: e.id, y: n, height: i, rowHeight: t });
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
            .filter(eL.Vq);
        if (0 === n.length) return;
        let i = n.reduce(
            (e, t) => (
                t.type !== W.S9.MEMBER ||
                    (e.num_users_visible++,
                    t.isMobileOnline && e.num_users_visible_with_mobile_indicator++,
                    null != t.activities &&
                        t.activities.length > 0 &&
                        (e.num_users_visible_with_activity++,
                        t.activities.some((e) => e.type === G.$pd.PLAYING) && e.num_users_visible_with_game_activity++),
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
            C.Ay.trackWithMetadata(G.HAw.MEMBER_LIST_VIEWED, { ...i });
    };
    render() {
        let { groups: e, listId: t, channel: n, sectionHeight: r } = this.props;
        return (0, i.jsx)(A.sk, {
            children: (a) =>
                (0, i.jsx)(eE.V0, {
                    children: (l) =>
                        (0, i.jsx)("aside", {
                            className: s()(F.yg, F.ML),
                            "aria-labelledby": l,
                            children: (0, i.jsx)(h.F, {
                                component: (0, i.jsx)(E.A, {
                                    children: (0, i.jsx)(h.H, {
                                        id: l,
                                        children: x.intl.format(x.t.JBQxV6, {
                                            channel: (0, ev.m1)(n, eC.default, eg.A),
                                        }),
                                    }),
                                }),
                                children: (0, i.jsx)(d.PR, {
                                    children: (n) => {
                                        let { ref: l, role: o, ...d } = n;
                                        return (0, i.jsx)(
                                            I.OZ,
                                            {
                                                role: o,
                                                "aria-label": x.intl.string(x.t["9Oq93m"]),
                                                ref: (e) => {
                                                    (this._list = e),
                                                        (this.props.listRef.current = e),
                                                        (l.current = e?.getScrollerNode() ?? null);
                                                },
                                                className: s()(F.ol, { [F.Ij]: u.Fr }),
                                                paddingTop: 0,
                                                sectionHeight: r,
                                                rowHeight: this.getRowHeightComputer(),
                                                renderSection: this.renderSection,
                                                renderRow: this.renderRow,
                                                sections: e.map((e) => e.count),
                                                onScroll: this.handleScroll,
                                                fade: !0,
                                                ...d,
                                                ...a,
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
function ek(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: a } = (0, O.Ay)(N.A.MEMBER_LIST),
        l = (0, _.bG)([S.Ay], () => S.Ay.keyboardModeEnabled),
        o = (0, _.cf)([W.Ay], () => W.Ay.getProps(t.guild_id, t.id)),
        {
            rows: u,
            groups: E,
            version: A,
            updateMaxRowSeen: h,
        } = (function (e) {
            let {
                    memberStoreProps: { groups: t, rows: n, version: i },
                    channelId: a,
                    guildId: s,
                } = e,
                [l, o] = r.useState(!1),
                {
                    requestId: d,
                    entries: c,
                    impressionCappedEntryIds: u,
                } = (function (e) {
                    var t;
                    let n,
                        i = (0, ec.A)({ id: eu.X1.GLOBAL_FEED });
                    i = (function (e) {
                        let { entries: t, channelId: n } = e,
                            i = (0, _.bG)([Y.A], () => Y.A.getChannel(n)),
                            a = i?.guild_id,
                            s = r.useRef(new Set()),
                            l = r.useMemo(() => {
                                let e = new Set(t?.map((e) => e.author_id));
                                return (0, et.v)([...s.current], [...e]) || (s.current = e), s.current;
                            }, [t]);
                        r.useEffect(() => {
                            null != a &&
                                Array.from(l).forEach((e) => {
                                    en.A.requestMember(a, e);
                                });
                        }, [l, a]);
                        let o = (0, _.yK)([ei.Ay], () => {
                                if (null == a) return es;
                                let e = [];
                                for (let t of l) ei.Ay.isMember(a, t) && e.push(t);
                                return e;
                            }, [l, a]),
                            d = r.useMemo(() => {
                                if (null == i || 0 === o.length) return el;
                                let e = new Set();
                                for (let t of o) {
                                    let n = er.cc({ user: t, context: i });
                                    ee.zy(n, ea.xB.VIEW_CHANNEL) && e.add(t);
                                }
                                return e;
                            }, [o, i]);
                        return r.useMemo(() => t?.filter((e) => d.has(e.author_id)), [t, d]);
                    })({ entries: i, channelId: e });
                    let { entries: a, filteredIds: s } =
                        ((t = i = r.useMemo(() => i?.filter((e) => e_.has(e.content_type)), [i])),
                        (n = (0, _.bG)([P.A, J.A], () => {
                            let e = J.A.getDebugImpressionCappingDisabled();
                            return !(0, q.sE)("useFilterImpressionCappedContent") || e
                                ? ed
                                : P.A.getImpressionCappedItemIds();
                        }, [t])),
                        r.useMemo(() => {
                            if (null == t) return { entries: t, filteredIds: ed };
                            let e = new Set();
                            return {
                                entries: t.filter((t) => !!(0, eo.JM)(t) || !n.has(t.id) || (e.add(t.id), !1)),
                                filteredIds: e,
                            };
                        }, [t, n]));
                    return (
                        (i = a),
                        {
                            requestId: (0, _.bG)([J.A], () => J.A.getFeedRequestId(eu.X1.GLOBAL_FEED)),
                            entries: i,
                            impressionCappedEntryIds: s,
                        }
                    );
                })(a),
                E = (0, _.bG)([P.A], () => P.A.hidden),
                A = (0, _.bG)([$.A], () => $.A.isFocused()),
                h = (0, _.bG)([Y.A], () => Y.A.getChannel(a)),
                I = (0, _.bG)([K.A], () => K.A.getGuild(s), [s]),
                f = ((0, Z.T)(I) ?? !1) && h?.isForumChannel() === !1,
                [p, T, m, g] = r.useMemo(() => {
                    let e;
                    if (null == c || 0 === c.length || null == d || !f) return [t, n, i];
                    let r = l ? c.length : 3,
                        u = c.slice(0, r);
                    e = E
                        ? [{ type: W.S9.HIDDEN_CONTENT_INVENTORY }]
                        : u.map((e) => ({ type: W.S9.CONTENT_INVENTORY, entry: e, requestId: d }));
                    let _ = {
                        id: w,
                        type: W.S9.CONTENT_INVENTORY_GROUP,
                        key: w,
                        count: e.length,
                        index: n.length,
                        title: x.intl.string(x.t["6gwSFY"]),
                        onToggleExpand: function () {
                            o((e) => {
                                let t = !e;
                                return (
                                    z.default.track(G.HAw.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                        channel_id: a,
                                        guild_id: s,
                                        expanded: t,
                                    }),
                                    t
                                );
                            });
                        },
                        expanded: l,
                        expandedCount: c.length,
                        feedHeight: e.map(H.h9).reduce((e, t) => e + t, 0),
                    };
                    return [[_, ...t], [...n, _, ...e], Math.random(), e];
                }, [a, c, l, t, s, d, n, i, E, f]),
                S = r.useRef(0),
                N = r.useRef(c),
                C = r.useRef(void 0),
                O = r.useRef({ impressionCappedEntryIds: u }),
                R = r.useCallback(
                    (e) => {
                        let t = Math.floor(e / H.bG),
                            n = Math.min(g?.length ?? 0, t);
                        S.current = Math.max(S.current, n);
                    },
                    [g],
                );
            return (
                r.useEffect(() => {
                    N.current = c;
                }, [c]),
                r.useEffect(() => {
                    O.current = { impressionCappedEntryIds: u };
                }, [u]),
                r.useEffect(
                    () => (
                        (S.current = 0),
                        (C.current = Date.now()),
                        () => {
                            if (null == d || null == C.current || Date.now() - C.current < 3e3) return;
                            let e = N.current?.map((e) => e.id) ?? [],
                                t = e.slice(0, S.current);
                            !E &&
                                A &&
                                f &&
                                ((0, X.D)(G.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: d,
                                    first_shown_at: C.current,
                                    item_ids: t,
                                    surface_type: eu.UG.GUILD_MEMBER_LIST,
                                    channel_id: a,
                                    guild_id: s,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [...O.current.impressionCappedEntryIds],
                                }),
                                (0, q.sE)("useInjectContentInventoryFeed") &&
                                    j.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: t }));
                        }
                    ),
                    [d, a, s, E, A, f],
                ),
                { groups: p, rows: T, version: m, updateMaxRowSeen: R }
            );
        })({ memberStoreProps: o, channelId: t.id, guildId: t.guild_id }),
        I = r.useRef(null),
        p = r.useRef(null);
    r.useEffect(() => {
        "u" < typeof document ||
            (null != document.activeElement &&
                document.activeElement !== document.body &&
                p.current?.focus({ preventScroll: !0 }));
    }, []);
    let T = (0, f.W)("lg") + (0, f.W)("xxs"),
        m = r.useCallback(
            (e, t) => {
                let n = I.current;
                if (null == n) return;
                let i = parseInt(t, 10),
                    [r, a] = n.getSectionRowFromIndex(i);
                n.scrollToIndex({
                    section: r,
                    row: a,
                    padding: 42 * (0 === r && 0 === a),
                    callback: () => {
                        requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                    },
                });
            },
            [42],
        ),
        g = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = I.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        C = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = I.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        },
                    });
                }),
            [],
        ),
        R = (0, c.Ay)({ id: `members-${t.id}`, setFocus: m, isEnabled: l, scrollToStart: g, scrollToEnd: C });
    return (0, i.jsx)(O.f5, {
        value: a,
        children: (0, i.jsx)("div", {
            ref: p,
            tabIndex: -1,
            className: s()(F.kL, n),
            children: (0, i.jsx)(d.hD, {
                navigator: R,
                children: (0, i.jsx)(ex, {
                    ...e,
                    ...o,
                    version: A,
                    groups: E,
                    rows: u,
                    listRef: I,
                    updateMaxContentFeedRowSeen: h,
                    sectionHeight: 18 + T,
                    rowHeight: 42,
                }),
            }),
        }),
    });
}
function eF(e) {
    let { channel: t, className: n } = e,
        a = r.useDeferredValue(t);
    return r.useMemo(() => (0, i.jsx)(ek, { channel: a, className: n }), [a, n]);
}
