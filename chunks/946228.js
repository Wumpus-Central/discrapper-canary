"use strict";
n.d(t, { A: () => eF, Y: () => eD });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(735438),
    o = n.n(a),
    c = n(837381);
if (21552 == n.j) var u = n(887129);
var d = n(607399),
    h = n(17928),
    m = n(140735),
    p = n(312138),
    f = n(707554),
    g = n(475825);
if (21552 == n.j) var x = n(506309);
var A = n(442433),
    E = n(361610),
    C = n(414798),
    I = n(589158),
    y = n(775602),
    S = n(793574),
    v = n(95561),
    N = n(688810),
    _ = n(941726),
    T = n(449582),
    j = n(900797),
    b = n(847374),
    R = n(320448),
    O = n(939249),
    M = n(485947),
    w = n(180170),
    L = n(435738),
    k = n(38055);
let P = "content-inventory-feed";
var D = n(652215),
    U = n(375708),
    V = n(933928),
    G = n(540808);
let F = i.memo(function (e) {
        let t,
            { title: s, onToggleExpand: r, expanded: a, expandedCount: o } = e,
            c = (0, h.bG)([L.A], () => L.A.hidden),
            u = i.useCallback((e) => {
                (0, A.L3)(e, async () => {
                    let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 38055));
                    return () => (0, l.jsx)(e, { closePopout: A.Z_ });
                });
            }, []);
        return (0, l.jsxs)(M.A, {
            className: G.lL,
            children: [
                (0, l.jsx)(m.A, { children: U.intl.format(U.t.Uaqbke, { title: s, count: o }) }),
                (0, l.jsxs)("div", {
                    className: V.N1,
                    children: [
                        (0, l.jsx)(O.D, {
                            onClick: (e) => {
                                if (e.currentTarget === e.target || e.currentTarget.contains(e.target))
                                    return c ? (0, w.Il)() : o > 3 ? r() : (0, D.tEg)();
                            },
                            onContextMenu: u,
                            tag: "span",
                            tabIndex: -1,
                            "aria-hidden": !0,
                            className: V.qd,
                            children: (0, l.jsxs)("span", { children: [s, " \u2014 ", o] }),
                        }),
                        (0, l.jsx)(k.A, {}),
                        (0, l.jsx)("div", { className: V.AN }),
                        o <= 3 && !c
                            ? null
                            : ((t = c
                                  ? (0, l.jsx)(j.t, { className: V.wT })
                                  : a
                                    ? (0, l.jsx)(b.a, { className: V.wT })
                                    : (0, l.jsx)(R._, { className: V.wT })),
                              (0, l.jsx)(O.D, {
                                  onClick: () => (c ? (0, w.Il)() : o > 3 ? r() : (0, D.tEg)()),
                                  tag: "span",
                                  "aria-label": U.intl.string(a && !c ? U.t.iTcuma : U.t.dcl9MQ),
                                  "aria-expanded": !c && a,
                                  className: V.wT,
                                  children: t,
                              })),
                    ],
                }),
            ],
        });
    }),
    H = () => null;
var B = n(742424),
    W = n(228366),
    K = n(963307),
    z = n(734057),
    Z = n(71393),
    Y = n(531685),
    q = n(174459),
    J = n(99066),
    $ = n(376261),
    X = n(947593),
    Q = n(681154),
    ee = n(99753);
n(321073);
var et = n(136722),
    en = n(52133),
    el = n(860071),
    ei = n(696451),
    es = n(488926),
    er = n(818348);
let ea = 21552 == n.j ? [] : null,
    eo = new Set();
var ec = n(751765);
let eu = new Set();
var ed = n(808323),
    eh = n(424994);
let em = new Set([
        Q.ContentInventoryEntryType.PLAYED_GAME,
        Q.ContentInventoryEntryType.WATCHED_MEDIA,
        Q.ContentInventoryEntryType.TOP_GAME,
        Q.ContentInventoryEntryType.TOP_ARTIST,
        Q.ContentInventoryEntryType.LISTENED_SESSION,
        Q.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
    ]),
    ep = 21552 == n.j ? 3e3 : null;
var ef = n(915089),
    eg = n(509536),
    ex = n(201275),
    eA = n(657048),
    eE = n(728321),
    eC = n(342296),
    eI = n(773669),
    ey = n(317525),
    eS = n(994500),
    ev = n(309010),
    eN = n(741961),
    e_ = n(287809),
    eT = n(977997),
    ej = n(625494),
    eb = n(403362),
    eR = n(427262),
    eO = n(19575),
    eM = n(47167);
let ew = eO.Ay.getEnableHardwareAcceleration(),
    eL = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    ek = i.memo(function (e) {
        let {
                colorString: t,
                colorStrings: s,
                colorRoleName: r,
                colorRoleId: a,
                isOwner: o,
                nick: c,
                user: u,
                currentUser: h,
                activities: m,
                applicationStream: p,
                status: f,
                channel: g,
                guildId: x,
                isTyping: E,
                isMobileOnline: y,
                isVROnline: S,
                premiumSince: v,
                nameplate: N,
                ..._
            } = e,
            T = i.useRef(null),
            [j, b] = i.useState(!1),
            R = null != v ? new Date(v) : null,
            O = i.useCallback(
                (e) => {
                    (0, A.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                                n.e("40989"),
                                n.e("63593"),
                                n.e("60940"),
                                n.e("2677"),
                                n.e("47141"),
                                n.e("94881"),
                                n.e("26692"),
                                n.e("26132"),
                                n.e("46652"),
                                n.e("93190"),
                                n.e("34552"),
                                n.e("93103"),
                                n.e("8757"),
                                n.e("21921"),
                                n.e("85968"),
                                n.e("89673"),
                                n.e("68403"),
                                n.e("76418"),
                                n.e("29787"),
                                n.e("66495"),
                                n.e("71210"),
                                n.e("82073"),
                                n.e("97558"),
                                n.e("88342"),
                                n.e("91994"),
                                n.e("89421"),
                                n.e("35027"),
                                n.e("76665"),
                                n.e("98965"),
                                n.e("28662"),
                                n.e("35313"),
                                n.e("71133"),
                                n.e("28152"),
                                n.e("24198"),
                                n.e("39171"),
                                n.e("36564"),
                                n.e("52229"),
                                n.e("45996"),
                                n.e("792"),
                                n.e("92822"),
                                n.e("56753"),
                                n.e("23427"),
                                n.e("49145"),
                                n.e("14461"),
                                n.e("29422"),
                                n.e("65826"),
                                n.e("49520"),
                                n.e("25486"),
                                n.e("9291"),
                                n.e("61268"),
                                n.e("7059"),
                                n.e("49644"),
                                n.e("42204"),
                                n.e("43116"),
                                n.e("78195"),
                                n.e("22261"),
                                n.e("39103"),
                                n.e("70314"),
                                n.e("70515"),
                                n.e("27435"),
                                n.e("74021"),
                                n.e("13708"),
                                n.e("30221"),
                                n.e("66939"),
                                n.e("24240"),
                                n.e("21879"),
                                n.e("17334"),
                                n.e("84841"),
                            ]).then(n.bind(n, 107632)),
                            t = eT.A.isInChannel(ev.A.getVoiceChannelId(), u.id);
                        return (n) => (0, l.jsx)(e, { ...n, user: u, guildId: x, channel: g, showMediaItems: t });
                    });
                },
                [u, x, g],
            ),
            M = i.useCallback(() => {
                let e = `@${eR.Ay.getUserTag(u, { decoration: "never" })}`,
                    t = `<@${u.id}>`;
                ej._.dispatch(D.jej.TEXTAREA_FOCUS, { channelId: g.id }),
                    ej._.dispatchToLastSubscribed(D.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    C.A.startTyping(g.id);
            }, [u, g.id]),
            w = i.useCallback(
                (e) => {
                    null != x &&
                        (e.stopPropagation(),
                        (0, eg.K4)({
                            guildId: x,
                            location: { section: D.JJy.MEMBER_LIST, object: D.ZSU.BOOST_GEM_ICON },
                        }));
                },
                [x],
            );
        return (0, l.jsx)(eC.A, {
            targetElementRef: T,
            user: u,
            guildId: x,
            channelId: g.id,
            roleId: a,
            position: d.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: M,
            shouldShow: j,
            onRequestClose: () => {
                b(!1);
            },
            children: (e) => {
                let { onClick: n, onMouseDown: i, ...a } = e;
                return (0, l.jsx)(I.A, {
                    ref: T,
                    className: G.Dc,
                    onContextMenu: O,
                    shouldAnimateStatus: ew,
                    user: u,
                    currentUser: h,
                    nick: c,
                    status: f,
                    activities: m,
                    applicationStream: p,
                    isOwner: o,
                    premiumSince: R,
                    colorString: t,
                    colorStrings: s,
                    colorRoleName: r,
                    isTyping: E,
                    channel: g,
                    guildId: x,
                    isMobile: y,
                    isVR: S,
                    onClickPremiumGuildIcon: w,
                    selected: j,
                    itemProps: _,
                    nameplate: N,
                    onClick: (e) => {
                        e.shiftKey ? M?.() : b((e) => !e);
                    },
                    onMouseDown: (e) => {
                        j ? e.stopPropagation() : i?.(e);
                    },
                    ...a,
                });
            },
        });
    }),
    eP = i.memo(function (e) {
        let { colorRoleId: t, ...n } = e,
            { channel: i, user: s, index: r } = e,
            a = (0, c.rm)(`${r}`),
            o = (0, h.bG)([eN.A], () => eN.A.isTyping(i.id, s.id)),
            u = (0, h.bG)([e_.default], () => e_.default.getCurrentUser()),
            d = (0, h.bG)([ey.A], () => (null != t ? ey.A.getRole(i.guild_id, t)?.name : void 0), [i, t]),
            m = (0, T.r)({ user: s, guildId: i.guild_id });
        return (0, l.jsx)(ek, { ...n, ...a, isTyping: o, currentUser: u, colorRoleName: d, nameplate: m });
    }),
    eD = i.memo(function (e) {
        let { id: t, title: s, count: r, guildId: a, className: o } = e,
            c = (0, ex.$7)({ roleId: t, guildId: a, size: 16 }),
            u = (0, h.bG)([eI.default], () => (null == r ? null : new Intl.NumberFormat(eI.default.locale).format(r)), [
                r,
            ]),
            d = i.useCallback(
                (e) => {
                    c?.src != null &&
                        (0, A.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("95340"), n.e("33743")]).then(
                                n.bind(n, 455538),
                            );
                            return (t) => (0, l.jsx)(e, { ...t, imageUrl: c.src });
                        });
                },
                [c?.src],
            );
        return t === D.clD.UNKNOWN
            ? (0, l.jsx)("div", { className: o, children: (0, l.jsx)("div", { className: G.k1 }) })
            : (0, l.jsxs)(M.A, {
                  className: o,
                  children: [
                      (0, l.jsx)(m.A, { children: null == r ? s : U.intl.format(U.t.Uaqbke, { title: s, count: r }) }),
                      (0, l.jsxs)("div", {
                          className: G.CN,
                          "aria-hidden": !0,
                          children: [
                              null != c
                                  ? (0, l.jsx)("span", {
                                        onContextMenu: d,
                                        children: (0, l.jsx)(eA.A, { className: G.UT, ...c }),
                                    })
                                  : null,
                              (0, l.jsx)("span", { className: G.iy, children: s }),
                              null == u ? null : (0, l.jsxs)("span", { children: ["\xa0\u2014 ", u] }),
                          ],
                      }),
                  ],
              });
    });
function eU(e) {
    let { index: t } = e,
        n = (0, c.rm)(`${t}`);
    return (0, l.jsx)(I.A, { itemProps: n });
}
class eV extends i.Component {
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
            r = n[t];
        if (r?.id === P) return (0, i.createElement)(F, { ...r, key: `section-${t}` });
        if (0 === t) {
            let { key: e } = r;
            return (0, l.jsx)(
                eE.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: eL,
                    children: (0, i.createElement)(eD, {
                        ...r,
                        key: `section-${e}`,
                        guildId: s.guild_id,
                        className: G.lL,
                    }),
                },
                `section-${t}`,
            );
        }
        return (0, i.createElement)(eD, { ...r, key: `section-${t}`, guildId: s.guild_id, className: G.lL });
    };
    getRowProps = (e) => {
        let { groups: t, rows: n } = this.props,
            l = t[e.section];
        if (null == l) return null;
        let { index: i } = l;
        return null == i || "row" !== e.type ? null : n[i + 1 + e.row];
    };
    getFirstApplicationIdOccurrences = () => {
        let { rows: e, version: t } = this.props;
        if (null != this._firstApplicationIdOccurrences && this._lastRowsVersion === t)
            return this._firstApplicationIdOccurrences;
        let n = new Set(),
            l = new Set();
        for (let t of e)
            if (null != t && t.type === K.S9.CONTENT_INVENTORY) {
                let { entry: e } = t;
                if ("application_id" in e.extra && null != e.extra.application_id) {
                    let t = e.extra.application_id;
                    n.has(t) || (n.add(t), l.add(e.id));
                }
            }
        return (this._firstApplicationIdOccurrences = l), (this._lastRowsVersion = t), l;
    };
    renderRow = (e) => {
        let { section: t, row: n, rowIndex: i } = e,
            { channel: s } = this.props,
            r = this.getRowProps(e);
        if (null != r) {
            if (r.type === K.S9.MEMBER && "user" in r) {
                let {
                    colorString: e,
                    colorStrings: t,
                    colorRoleId: n,
                    user: a,
                    status: o,
                    isOwner: c,
                    isMobileOnline: u,
                    isVROnline: d,
                    nick: h,
                    activities: m,
                    applicationStream: p,
                    premiumSince: f,
                } = r;
                return (0, l.jsx)(
                    eP,
                    {
                        colorString: e,
                        colorStrings: t,
                        colorRoleId: n,
                        user: a,
                        status: o,
                        isOwner: c,
                        nick: h,
                        activities: m,
                        applicationStream: p,
                        channel: s,
                        guildId: s.guild_id,
                        premiumSince: f,
                        isMobileOnline: u,
                        isVROnline: d,
                        index: i,
                    },
                    `member-${r.user.id}`,
                );
            }
            if (r.type === K.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${r.entry.id}`;
                null != r.entry.original_id && (e += `-${r.entry.original_id}`);
                let t = this.getFirstApplicationIdOccurrences().has(r.entry.id);
                return (0, l.jsx)(
                    B.Ay,
                    { ...r, channel: this.props.channel, index: i, isFirstApplicationOccurrence: t },
                    e,
                );
            }
            if (r.type === K.S9.HIDDEN_CONTENT_INVENTORY) return (0, l.jsx)(H, {}, "content-inventory-hidden-entry");
        }
        return (0, l.jsx)(eU, { index: i }, `placeholder-${t}:${n}`);
    };
    handleScroll = () => {
        this.updateSubscription(), this.updateMaxContentFeedRowSeen();
    };
    updateMaxContentFeedRowSeen = o().debounce(() => {
        let e = this._list;
        if (null == e) return;
        let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            l = n + t - this.props.sectionHeight;
        this.props.updateMaxContentFeedRowSeen(l);
    }, 50);
    getContentFeedGroup = () => {
        let e = this.props.groups[0];
        if (e?.id === P) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: t } = this.props;
        if (null != e) {
            let { rows: n } = this.props,
                l = e.index;
            return function (e, i) {
                if (0 === e) {
                    let e = n[l + 1 + i];
                    return (0, B.h9)(e);
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
        let { height: t, rowHeight: n, y: l } = e,
            i = this.getContentFeedHeight(),
            s = Math.max(0, t - Math.max(0, i - l)),
            r = Math.floor(s / n);
        return { height: s, rowHeight: n, rowsVisible: r, y: Math.max(0, l - i) };
    }
    getDimensions() {
        let e = this._list;
        if (null == e) return { y: 0, height: 0, rowHeight: 0 };
        let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            { rowHeight: l } = this.props,
            i = Math.floor(t / l);
        return this.getContentFeedAdjustedDimensions({ height: t, rowHeight: l, rowsVisible: i, y: n });
    }
    updateSubscription = o().debounce(() => {
        if (null == this._list) return;
        let { channel: e } = this.props,
            { rowHeight: t, y: n, height: l } = this.getDimensions();
        (0, E.NJ)({ guildId: e.guild_id, channelId: e.id, y: n, height: l, rowHeight: t });
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
            .filter(eb.Vq);
        if (0 === n.length) return;
        let l = n.reduce(
            (e, t) => (
                t.type !== K.S9.MEMBER ||
                    (e.num_users_visible++,
                    t.isMobileOnline && e.num_users_visible_with_mobile_indicator++,
                    null != t.activities &&
                        t.activities.length > 0 &&
                        (e.num_users_visible_with_activity++,
                        t.activities.some((e) => e.type === D.$pd.PLAYING) && e.num_users_visible_with_game_activity++),
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
            v.Ay.trackWithMetadata(D.HAw.MEMBER_LIST_VIEWED, { ...l });
    };
    render() {
        let { groups: e, listId: t, channel: n, sectionHeight: i } = this.props;
        return (0, l.jsx)(p.sk, {
            children: (s) =>
                (0, l.jsx)(ef.V0, {
                    children: (a) =>
                        (0, l.jsx)("aside", {
                            className: r()(G.yg, G.ML),
                            "aria-labelledby": a,
                            children: (0, l.jsx)(f.F, {
                                component: (0, l.jsx)(m.A, {
                                    children: (0, l.jsx)(f.H, {
                                        id: a,
                                        children: U.intl.format(U.t.JBQxV6, {
                                            channel: (0, eM.m1)(n, e_.default, eS.A),
                                        }),
                                    }),
                                }),
                                children: (0, l.jsx)(c.PR, {
                                    children: (n) => {
                                        let { ref: a, role: o, ...c } = n;
                                        return (0, l.jsx)(
                                            g.OZ,
                                            {
                                                innerRole: o,
                                                innerAriaLabel: U.intl.string(U.t["9Oq93m"]),
                                                ref: (e) => {
                                                    (this._list = e),
                                                        (this.props.listRef.current = e),
                                                        (a.current = e?.getScrollerNode() ?? null);
                                                },
                                                className: r()(G.ol, { [G.Ij]: d.Fr }),
                                                paddingTop: 0,
                                                sectionHeight: i,
                                                rowHeight: this.getRowHeightComputer(),
                                                renderSection: this.renderSection,
                                                renderRow: this.renderRow,
                                                sections: e.map((e) => e.count),
                                                onScroll: this.handleScroll,
                                                fade: !0,
                                                ...c,
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
        { analyticsLocations: s } = (0, N.Ay)(S.A.MEMBER_LIST),
        a = (0, h.bG)([y.Ay], () => y.Ay.keyboardModeEnabled),
        o = (0, h.cf)([K.Ay], () => K.Ay.getProps(t.guild_id, t.id)),
        {
            rows: d,
            groups: m,
            version: p,
            updateMaxRowSeen: f,
        } = (function (e) {
            let {
                    memberStoreProps: { groups: t, rows: n, version: l },
                    channelId: s,
                    guildId: r,
                } = e,
                [a, o] = i.useState(!1),
                {
                    requestId: c,
                    entries: u,
                    impressionCappedEntryIds: d,
                } = (function (e) {
                    var t;
                    let n,
                        l = (0, ed.A)({ id: eh.X1.GLOBAL_FEED });
                    l = (function (e) {
                        let { entries: t, channelId: n } = e,
                            l = (0, h.bG)([z.A], () => z.A.getChannel(n)),
                            s = l?.guild_id,
                            r = i.useRef(new Set()),
                            a = i.useMemo(() => {
                                let e = new Set(t?.map((e) => e.author_id));
                                return (0, en.v)([...r.current], [...e]) || (r.current = e), r.current;
                            }, [t]);
                        i.useEffect(() => {
                            null != s &&
                                Array.from(a).forEach((e) => {
                                    el.A.requestMember(s, e);
                                });
                        }, [a, s]);
                        let o = (0, h.yK)([ei.Ay], () => {
                                if (null == s) return ea;
                                let e = [];
                                for (let t of a) ei.Ay.isMember(s, t) && e.push(t);
                                return e;
                            }, [a, s]),
                            c = i.useMemo(() => {
                                if (null == l || 0 === o.length) return eo;
                                let e = new Set();
                                for (let t of o) {
                                    let n = es.cc({ user: t, context: l });
                                    et.zy(n, er.xB.VIEW_CHANNEL) && e.add(t);
                                }
                                return e;
                            }, [o, l]);
                        return i.useMemo(() => t?.filter((e) => c.has(e.author_id)), [t, c]);
                    })({ entries: l, channelId: e });
                    let { entries: s, filteredIds: r } =
                        ((t = l = i.useMemo(() => l?.filter((e) => em.has(e.content_type)), [l])),
                        (n = (0, h.bG)([L.A, ee.A], () => {
                            let e = ee.A.getDebugImpressionCappingDisabled();
                            return !(0, J.sE)("useFilterImpressionCappedContent") || e
                                ? eu
                                : L.A.getImpressionCappedItemIds();
                        }, [t])),
                        i.useMemo(() => {
                            if (null == t) return { entries: t, filteredIds: eu };
                            let e = new Set();
                            return {
                                entries: t.filter((t) => !!(0, ec.JM)(t) || !n.has(t.id) || (e.add(t.id), !1)),
                                filteredIds: e,
                            };
                        }, [t, n]));
                    return (
                        (l = s),
                        {
                            requestId: (0, h.bG)([ee.A], () => ee.A.getFeedRequestId(eh.X1.GLOBAL_FEED)),
                            entries: (l = (0, _.Ay)(l)),
                            impressionCappedEntryIds: r,
                        }
                    );
                })(s),
                m = (0, h.bG)([L.A], () => L.A.hidden),
                p = (0, h.bG)([Y.A], () => Y.A.isFocused()),
                f = (0, h.bG)([z.A], () => z.A.getChannel(s)),
                g = (0, h.bG)([Z.A], () => Z.A.getGuild(r), [r]),
                x = ((0, $.T)(g) ?? !1) && f?.isForumChannel() === !1,
                [A, E, C, I] = i.useMemo(() => {
                    let e;
                    if (null == u || 0 === u.length || null == c || !x) return [t, n, l];
                    let i = a ? u.length : 3,
                        d = u.slice(0, i);
                    e = m
                        ? [{ type: K.S9.HIDDEN_CONTENT_INVENTORY }]
                        : d.map((e) => ({ type: K.S9.CONTENT_INVENTORY, entry: e, requestId: c }));
                    let h = {
                        id: P,
                        type: K.S9.CONTENT_INVENTORY_GROUP,
                        key: P,
                        count: e.length,
                        index: n.length,
                        title: U.intl.string(U.t["6gwSFY"]),
                        onToggleExpand: () => {
                            o((e) => {
                                let t = !e;
                                return (
                                    q.default.track(D.HAw.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                        channel_id: s,
                                        guild_id: r,
                                        expanded: t,
                                    }),
                                    t
                                );
                            });
                        },
                        expanded: a,
                        expandedCount: u.length,
                        feedHeight: e.map(B.h9).reduce((e, t) => e + t, 0),
                    };
                    return [[h, ...t], [...n, h, ...e], Math.random(), e];
                }, [s, u, a, t, r, c, n, l, m, x]),
                y = i.useRef(0),
                S = i.useRef(u),
                v = i.useRef(void 0),
                N = i.useRef({ impressionCappedEntryIds: d }),
                T = i.useCallback(
                    (e) => {
                        let t = Math.floor(e / B.bG),
                            n = Math.min(I?.length ?? 0, t);
                        y.current = Math.max(y.current, n);
                    },
                    [I],
                );
            return (
                i.useEffect(() => {
                    S.current = u;
                }, [u]),
                i.useEffect(() => {
                    N.current = { impressionCappedEntryIds: d };
                }, [d]),
                i.useEffect(
                    () => (
                        (y.current = 0),
                        (v.current = Date.now()),
                        () => {
                            if (null == c || null == v.current || Date.now() - v.current < ep) return;
                            let e = S.current?.map((e) => e.id) ?? [],
                                t = e.slice(0, y.current);
                            !m &&
                                p &&
                                x &&
                                ((0, X.D)(D.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: c,
                                    first_shown_at: v.current,
                                    item_ids: t,
                                    surface_type: eh.UG.GUILD_MEMBER_LIST,
                                    channel_id: s,
                                    guild_id: r,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [...N.current.impressionCappedEntryIds],
                                }),
                                (0, J.sE)("useInjectContentInventoryFeed") &&
                                    W.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: t }));
                        }
                    ),
                    [c, s, r, m, p, x],
                ),
                { groups: A, rows: E, version: C, updateMaxRowSeen: T }
            );
        })({ memberStoreProps: o, channelId: t.id, guildId: t.guild_id }),
        g = i.useRef(null),
        A = i.useRef(null);
    i.useEffect(() => {
        "u" < typeof document ||
            (null != document.activeElement &&
                document.activeElement !== document.body &&
                A.current?.focus({ preventScroll: !0 }));
    }, []);
    let E = (0, x.W)("lg") + (0, x.W)("xxs"),
        C = i.useCallback(
            (e, t) => {
                let n = g.current;
                if (null == n) return;
                let l = parseInt(t, 10),
                    [i, s] = n.getSectionRowFromIndex(l);
                n.scrollToIndex({
                    section: i,
                    row: s,
                    padding: 42 * (0 === i && 0 === s),
                    callback: () => {
                        requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                    },
                });
            },
            [42],
        ),
        I = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = g.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        v = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = g.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        },
                    });
                }),
            [],
        ),
        T = (0, u.Ay)({ id: `members-${t.id}`, setFocus: C, isEnabled: a, scrollToStart: I, scrollToEnd: v });
    return (0, l.jsx)(N.f5, {
        value: s,
        children: (0, l.jsx)("div", {
            ref: A,
            tabIndex: -1,
            className: r()(G.kL, n),
            children: (0, l.jsx)(c.hD, {
                navigator: T,
                children: (0, l.jsx)(eV, {
                    ...e,
                    ...o,
                    version: p,
                    groups: m,
                    rows: d,
                    listRef: g,
                    updateMaxContentFeedRowSeen: f,
                    sectionHeight: 18 + E,
                    rowHeight: 42,
                }),
            }),
        }),
    });
}
function eF(e) {
    let { channel: t, className: n } = e,
        s = i.useDeferredValue(t);
    return i.useMemo(() => (0, l.jsx)(_.r$, { children: (0, l.jsx)(eG, { channel: s, className: n }) }), [s, n]);
}
