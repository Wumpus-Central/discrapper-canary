"use strict";
n.d(t, { A: () => eB, Y: () => eG });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(435558),
    o = n.n(a),
    u = n(837381);
if (221552 == n.j) var c = n(887129);
var d = n(607399),
    h = n(17928),
    m = n(140735),
    f = n(312138),
    p = n(707554),
    g = n(475825);
if (221552 == n.j) var x = n(506309);
var A = n(442433),
    E = n(361610),
    C = n(414798),
    I = n(589158),
    y = n(775602),
    S = n(793574),
    N = n(95561),
    v = n(688810),
    _ = n(941726),
    T = n(449582),
    j = n(900797),
    b = n(847374),
    R = n(320448),
    O = n(939249),
    M = n(485947),
    L = n(180170),
    k = n(435738),
    w = n(38055);
let P = "content-inventory-feed",
    D = `${P}-settings`,
    U = `${P}-toggle`;
var G = n(652215),
    V = n(375708),
    F = n(569709),
    H = n(4577);
let B = i.memo(function (e) {
        let t,
            { title: s, onToggleExpand: r, expanded: o, expandedCount: c } = e,
            d = (0, h.bG)([k.A], () => k.A.hidden),
            f = (0, a.omit)((0, u.rm)(D), ["role", "tabIndex"]),
            p = (0, a.omit)((0, u.rm)(U), ["role", "tabIndex"]),
            g = i.useCallback((e) => {
                (0, A.L3)(e, async () => {
                    let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 38055));
                    return () => (0, l.jsx)(e, { closePopout: A.Z_ });
                });
            }, []),
            x = i.useCallback(() => (d ? (0, L.Il)() : c > 3 ? r() : (0, G.tEg)()), [d, c, r]);
        return (0, l.jsxs)(M.A, {
            className: H.lL,
            children: [
                (0, l.jsx)(m.A, { children: V.intl.format(V.t.Uaqbke, { title: s, count: c }) }),
                (0, l.jsxs)("div", {
                    className: F.N1,
                    children: [
                        (0, l.jsx)(O.D, {
                            onClick: x,
                            onContextMenu: g,
                            tag: "span",
                            tabIndex: -1,
                            "aria-hidden": !0,
                            children: (0, l.jsxs)("span", { children: [s, " \u2014 ", c] }),
                        }),
                        (0, l.jsx)(w.A, { ...f }),
                        (0, l.jsx)(O.D, {
                            onClick: x,
                            onContextMenu: g,
                            tag: "span",
                            tabIndex: -1,
                            "aria-hidden": !0,
                            className: F.AN,
                            children: (0, l.jsx)("span", {}),
                        }),
                        c <= 3 && !d
                            ? null
                            : ((t = d
                                  ? (0, l.jsx)(j.t, { className: F.wT })
                                  : o
                                    ? (0, l.jsx)(b.a, { className: F.wT })
                                    : (0, l.jsx)(R._, { className: F.wT })),
                              (0, l.jsx)(O.D, {
                                  ...p,
                                  onClick: x,
                                  tag: "span",
                                  "aria-label": V.intl.string(o && !d ? V.t.iTcuma : V.t.dcl9MQ),
                                  "aria-expanded": !d && o,
                                  className: F.wT,
                                  children: t,
                              })),
                    ],
                }),
            ],
        });
    }),
    W = function () {
        return null;
    };
var K = n(438692),
    z = n(228366),
    Z = n(963307),
    Y = n(734057),
    q = n(71393),
    J = n(531685),
    $ = n(174459),
    X = n(99066),
    Q = n(376261),
    ee = n(947593),
    et = n(681154),
    en = n(99753);
n(321073);
var el = n(136722),
    ei = n(52133),
    es = n(860071),
    er = n(696451),
    ea = n(488926),
    eo = n(818348);
let eu = 221552 == n.j ? [] : null,
    ec = new Set();
var ed = n(583846);
let eh = new Set();
var em = n(808323),
    ef = n(424994);
let ep = new Set([
        et.ContentInventoryEntryType.PLAYED_GAME,
        et.ContentInventoryEntryType.WATCHED_MEDIA,
        et.ContentInventoryEntryType.TOP_GAME,
        et.ContentInventoryEntryType.TOP_ARTIST,
        et.ContentInventoryEntryType.LISTENED_SESSION,
        et.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
    ]),
    eg = 221552 == n.j ? 3e3 : null;
var ex = n(915089),
    eA = n(906199),
    eE = n(201275),
    eC = n(657048),
    eI = n(728321),
    ey = n(342296),
    eS = n(773669),
    eN = n(317525),
    ev = n(994500),
    e_ = n(309010),
    eT = n(741961),
    ej = n(287809),
    eb = n(977997),
    eR = n(625494),
    eO = n(403362),
    eM = n(427262),
    eL = n(19575),
    ek = n(47167);
let ew = eL.Ay.getEnableHardwareAcceleration(),
    eP = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    eD = i.memo(function (e) {
        let {
                colorString: t,
                colorStrings: s,
                colorRoleName: r,
                colorRoleId: a,
                isOwner: o,
                nick: u,
                user: c,
                currentUser: h,
                activities: m,
                applicationStream: f,
                status: p,
                channel: g,
                guildId: x,
                isTyping: E,
                isMobileOnline: y,
                isVROnline: S,
                premiumSince: N,
                nameplate: v,
                ..._
            } = e,
            T = i.useRef(null),
            [j, b] = i.useState(!1),
            R = null != N ? new Date(N) : null,
            O = i.useCallback(
                (e) => {
                    (0, A.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                                n.e("59766"),
                                n.e("207322"),
                                n.e("622936"),
                                n.e("216947"),
                                n.e("866038"),
                                n.e("326692"),
                                n.e("926132"),
                                n.e("146652"),
                                n.e("834552"),
                                n.e("708757"),
                                n.e("993103"),
                                n.e("585968"),
                                n.e("893190"),
                                n.e("21921"),
                                n.e("571210"),
                                n.e("676418"),
                                n.e("166495"),
                                n.e("88342"),
                                n.e("189673"),
                                n.e("311802"),
                                n.e("229787"),
                                n.e("698965"),
                                n.e("931319"),
                                n.e("882073"),
                                n.e("797558"),
                                n.e("691994"),
                                n.e("682337"),
                                n.e("235313"),
                                n.e("371133"),
                                n.e("576665"),
                                n.e("454625"),
                                n.e("538887"),
                                n.e("436564"),
                                n.e("939171"),
                                n.e("624198"),
                                n.e("252229"),
                                n.e("856753"),
                                n.e("245996"),
                                n.e("700792"),
                                n.e("592822"),
                                n.e("823427"),
                                n.e("449145"),
                                n.e("214461"),
                                n.e("529422"),
                                n.e("309291"),
                                n.e("349644"),
                                n.e("365826"),
                                n.e("649520"),
                                n.e("493014"),
                                n.e("825486"),
                                n.e("307059"),
                                n.e("242204"),
                                n.e("678195"),
                                n.e("522261"),
                                n.e("343116"),
                                n.e("713708"),
                                n.e("139103"),
                                n.e("470314"),
                                n.e("774021"),
                                n.e("70515"),
                                n.e("404524"),
                                n.e("654148"),
                                n.e("666939"),
                                n.e("830221"),
                                n.e("324240"),
                                n.e("221879"),
                                n.e("717334"),
                                n.e("184841"),
                            ]).then(n.bind(n, 107632)),
                            t = eb.A.isInChannel(e_.Ay.getVoiceChannelId(), c.id);
                        return (n) => (0, l.jsx)(e, { ...n, user: c, guildId: x, channel: g, showMediaItems: t });
                    });
                },
                [c, x, g],
            ),
            M = i.useCallback(() => {
                let e = `@${eM.Ay.getUserTag(c, { decoration: "never" })}`,
                    t = `<@${c.id}>`;
                eR._.dispatch(G.jej.TEXTAREA_FOCUS, { channelId: g.id }),
                    eR._.dispatchToLastSubscribed(G.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    C.A.startTyping(g.id);
            }, [c, g.id]),
            L = i.useCallback(
                (e) => {
                    null != x &&
                        (e.stopPropagation(),
                        (0, eA.K4)({
                            guildId: x,
                            location: { section: G.JJy.MEMBER_LIST, object: G.ZSU.BOOST_GEM_ICON },
                        }));
                },
                [x],
            );
        return (0, l.jsx)(ey.A, {
            targetElementRef: T,
            user: c,
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
                    className: H.Dc,
                    onContextMenu: O,
                    shouldAnimateStatus: ew,
                    user: c,
                    currentUser: h,
                    nick: u,
                    status: p,
                    activities: m,
                    applicationStream: f,
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
                    onClickPremiumGuildIcon: L,
                    selected: j,
                    itemProps: _,
                    nameplate: v,
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
    eU = i.memo(function (e) {
        let { colorRoleId: t, ...n } = e,
            { channel: i, user: s, index: r } = e,
            a = (0, u.rm)(`${r}`),
            o = (0, h.bG)([eT.A], () => eT.A.isTyping(i.id, s.id)),
            c = (0, h.bG)([ej.default], () => ej.default.getCurrentUser()),
            d = (0, h.bG)([eN.A], () => (null != t ? eN.A.getRole(i.guild_id, t)?.name : void 0), [i, t]),
            m = (0, T.r)({ user: s, guildId: i.guild_id });
        return (0, l.jsx)(eD, { ...n, ...a, isTyping: o, currentUser: c, colorRoleName: d, nameplate: m });
    }),
    eG = i.memo(function (e) {
        let { id: t, title: s, count: r, guildId: a, className: o } = e,
            u = (0, eE.$7)({ roleId: t, guildId: a, size: 16 }),
            c = (0, h.bG)([eS.default], () => (null == r ? null : new Intl.NumberFormat(eS.default.locale).format(r)), [
                r,
            ]),
            d = i.useCallback(
                (e) => {
                    u?.src != null &&
                        (0, A.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("95340"), n.e("733743")]).then(
                                n.bind(n, 455538),
                            );
                            return (t) => (0, l.jsx)(e, { ...t, imageUrl: u.src });
                        });
                },
                [u?.src],
            );
        return t === G.clD.UNKNOWN
            ? (0, l.jsx)("div", { className: o, children: (0, l.jsx)("div", { className: H.k1 }) })
            : (0, l.jsxs)(M.A, {
                  className: o,
                  children: [
                      (0, l.jsx)(m.A, { children: null == r ? s : V.intl.format(V.t.Uaqbke, { title: s, count: r }) }),
                      (0, l.jsxs)("div", {
                          className: H.CN,
                          "aria-hidden": !0,
                          children: [
                              null != u
                                  ? (0, l.jsx)("span", {
                                        onContextMenu: d,
                                        children: (0, l.jsx)(eC.A, { className: H.UT, ...u }),
                                    })
                                  : null,
                              (0, l.jsx)("span", { className: H.iy, children: s }),
                              null == c ? null : (0, l.jsxs)("span", { children: ["\xa0\u2014 ", c] }),
                          ],
                      }),
                  ],
              });
    });
function eV(e) {
    let { index: t } = e,
        n = (0, u.rm)(`${t}`);
    return (0, l.jsx)(I.A, { itemProps: n });
}
class eF extends i.Component {
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
        if (r?.id === P) return (0, i.createElement)(B, { ...r, key: `section-${t}` });
        if (0 === t) {
            let { key: e } = r;
            return (0, l.jsx)(
                eI.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: eP,
                    children: (0, i.createElement)(eG, {
                        ...r,
                        key: `section-${e}`,
                        guildId: s.guild_id,
                        className: H.lL,
                    }),
                },
                `section-${t}`,
            );
        }
        return (0, i.createElement)(eG, { ...r, key: `section-${t}`, guildId: s.guild_id, className: H.lL });
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
            if (null != t && t.type === Z.S9.CONTENT_INVENTORY) {
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
            if (r.type === Z.S9.MEMBER && "user" in r) {
                let {
                    colorString: e,
                    colorStrings: t,
                    colorRoleId: n,
                    user: a,
                    status: o,
                    isOwner: u,
                    isMobileOnline: c,
                    isVROnline: d,
                    nick: h,
                    activities: m,
                    applicationStream: f,
                    premiumSince: p,
                } = r;
                return (0, l.jsx)(
                    eU,
                    {
                        colorString: e,
                        colorStrings: t,
                        colorRoleId: n,
                        user: a,
                        status: o,
                        isOwner: u,
                        nick: h,
                        activities: m,
                        applicationStream: f,
                        channel: s,
                        guildId: s.guild_id,
                        premiumSince: p,
                        isMobileOnline: c,
                        isVROnline: d,
                        index: i,
                    },
                    `member-${r.user.id}`,
                );
            }
            if (r.type === Z.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${r.entry.id}`;
                null != r.entry.original_id && (e += `-${r.entry.original_id}`);
                let t = this.getFirstApplicationIdOccurrences().has(r.entry.id);
                return (0, l.jsx)(
                    K.Ay,
                    { ...r, channel: this.props.channel, index: i, isFirstApplicationOccurrence: t },
                    e,
                );
            }
            if (r.type === Z.S9.HIDDEN_CONTENT_INVENTORY) return (0, l.jsx)(W, {}, "content-inventory-hidden-entry");
        }
        return (0, l.jsx)(eV, { index: i }, `placeholder-${t}:${n}`);
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
                    return (0, K.h9)(e);
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
            .filter(eO.Vq);
        if (0 === n.length) return;
        let l = n.reduce(
            (e, t) => (
                t.type !== Z.S9.MEMBER ||
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
            N.Ay.trackWithMetadata(G.HAw.MEMBER_LIST_VIEWED, { ...l });
    };
    render() {
        let { groups: e, listId: t, channel: n, sectionHeight: i } = this.props;
        return (0, l.jsx)(f.sk, {
            children: (s) =>
                (0, l.jsx)(ex.V0, {
                    children: (a) =>
                        (0, l.jsx)("aside", {
                            className: r()(H.yg, H.ML),
                            "aria-labelledby": a,
                            children: (0, l.jsx)(p.F, {
                                component: (0, l.jsx)(m.A, {
                                    children: (0, l.jsx)(p.H, {
                                        id: a,
                                        children: V.intl.format(V.t.JBQxV6, {
                                            channel: (0, ek.m1)(n, ej.default, ev.A),
                                        }),
                                    }),
                                }),
                                children: (0, l.jsx)(u.PR, {
                                    children: (n) => {
                                        let { ref: a, role: o, ...u } = n;
                                        return (0, l.jsx)(
                                            g.OZ,
                                            {
                                                role: o,
                                                "aria-label": V.intl.string(V.t["9Oq93m"]),
                                                ref: (e) => {
                                                    (this._list = e),
                                                        (this.props.listRef.current = e),
                                                        (a.current = e?.getScrollerNode() ?? null);
                                                },
                                                className: r()(H.ol, { [H.Ij]: d.Fr }),
                                                paddingTop: 0,
                                                sectionHeight: i,
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
function eH(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: s } = (0, v.Ay)(S.A.MEMBER_LIST),
        a = (0, h.bG)([y.Ay], () => y.Ay.keyboardModeEnabled),
        o = (0, h.cf)([Z.Ay], () => Z.Ay.getProps(t.guild_id, t.id)),
        {
            rows: d,
            groups: m,
            version: f,
            updateMaxRowSeen: p,
        } = (function (e) {
            let {
                    memberStoreProps: { groups: t, rows: n, version: l },
                    channelId: s,
                    guildId: r,
                } = e,
                [a, o] = i.useState(!1),
                {
                    requestId: u,
                    entries: c,
                    impressionCappedEntryIds: d,
                } = (function (e) {
                    var t;
                    let n,
                        l = (0, em.A)({ id: ef.X1.GLOBAL_FEED });
                    l = (function (e) {
                        let { entries: t, channelId: n } = e,
                            l = (0, h.bG)([Y.A], () => Y.A.getChannel(n)),
                            s = l?.guild_id,
                            r = i.useRef(new Set()),
                            a = i.useMemo(() => {
                                let e = new Set(t?.map((e) => e.author_id));
                                return (0, ei.v)([...r.current], [...e]) || (r.current = e), r.current;
                            }, [t]);
                        i.useEffect(() => {
                            null != s &&
                                Array.from(a).forEach((e) => {
                                    es.A.requestMember(s, e);
                                });
                        }, [a, s]);
                        let o = (0, h.yK)([er.Ay], () => {
                                if (null == s) return eu;
                                let e = [];
                                for (let t of a) er.Ay.isMember(s, t) && e.push(t);
                                return e;
                            }, [a, s]),
                            u = i.useMemo(() => {
                                if (null == l || 0 === o.length) return ec;
                                let e = new Set();
                                for (let t of o) {
                                    let n = ea.cc({ user: t, context: l });
                                    el.zy(n, eo.xB.VIEW_CHANNEL) && e.add(t);
                                }
                                return e;
                            }, [o, l]);
                        return i.useMemo(() => t?.filter((e) => u.has(e.author_id)), [t, u]);
                    })({ entries: l, channelId: e });
                    let { entries: s, filteredIds: r } =
                        ((t = l = i.useMemo(() => l?.filter((e) => ep.has(e.content_type)), [l])),
                        (n = (0, h.bG)([k.A, en.A], () => {
                            let e = en.A.getDebugImpressionCappingDisabled();
                            return !(0, X.sE)("useFilterImpressionCappedContent") || e
                                ? eh
                                : k.A.getImpressionCappedItemIds();
                        }, [t])),
                        i.useMemo(() => {
                            if (null == t) return { entries: t, filteredIds: eh };
                            let e = new Set();
                            return {
                                entries: t.filter((t) => !!(0, ed.JM)(t) || !n.has(t.id) || (e.add(t.id), !1)),
                                filteredIds: e,
                            };
                        }, [t, n]));
                    return (
                        (l = s),
                        {
                            requestId: (0, h.bG)([en.A], () => en.A.getFeedRequestId(ef.X1.GLOBAL_FEED)),
                            entries: (l = (0, _.Ay)(l)),
                            impressionCappedEntryIds: r,
                        }
                    );
                })(s),
                m = (0, h.bG)([k.A], () => k.A.hidden),
                f = (0, h.bG)([J.A], () => J.A.isFocused()),
                p = (0, h.bG)([Y.A], () => Y.A.getChannel(s)),
                g = (0, h.bG)([q.A], () => q.A.getGuild(r), [r]),
                x = ((0, Q.T)(g) ?? !1) && p?.isForumChannel() === !1,
                [A, E, C, I] = i.useMemo(() => {
                    let e;
                    if (null == c || 0 === c.length || null == u || !x) return [t, n, l];
                    let i = a ? c.length : 3,
                        d = c.slice(0, i);
                    e = m
                        ? [{ type: Z.S9.HIDDEN_CONTENT_INVENTORY }]
                        : d.map((e) => ({ type: Z.S9.CONTENT_INVENTORY, entry: e, requestId: u }));
                    let h = {
                        id: P,
                        type: Z.S9.CONTENT_INVENTORY_GROUP,
                        key: P,
                        count: e.length,
                        index: n.length,
                        title: V.intl.string(V.t["6gwSFY"]),
                        onToggleExpand: function () {
                            o((e) => {
                                let t = !e;
                                return (
                                    $.default.track(G.HAw.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                        channel_id: s,
                                        guild_id: r,
                                        expanded: t,
                                    }),
                                    t
                                );
                            });
                        },
                        expanded: a,
                        expandedCount: c.length,
                        feedHeight: e.map(K.h9).reduce((e, t) => e + t, 0),
                    };
                    return [[h, ...t], [...n, h, ...e], Math.random(), e];
                }, [s, c, a, t, r, u, n, l, m, x]),
                y = i.useRef(0),
                S = i.useRef(c),
                N = i.useRef(void 0),
                v = i.useRef({ impressionCappedEntryIds: d }),
                T = i.useCallback(
                    (e) => {
                        let t = Math.floor(e / K.bG),
                            n = Math.min(I?.length ?? 0, t);
                        y.current = Math.max(y.current, n);
                    },
                    [I],
                );
            return (
                i.useEffect(() => {
                    S.current = c;
                }, [c]),
                i.useEffect(() => {
                    v.current = { impressionCappedEntryIds: d };
                }, [d]),
                i.useEffect(
                    () => (
                        (y.current = 0),
                        (N.current = Date.now()),
                        () => {
                            if (null == u || null == N.current || Date.now() - N.current < eg) return;
                            let e = S.current?.map((e) => e.id) ?? [],
                                t = e.slice(0, y.current);
                            !m &&
                                f &&
                                x &&
                                ((0, ee.D)(G.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: u,
                                    first_shown_at: N.current,
                                    item_ids: t,
                                    surface_type: ef.UG.GUILD_MEMBER_LIST,
                                    channel_id: s,
                                    guild_id: r,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [...v.current.impressionCappedEntryIds],
                                }),
                                (0, X.sE)("useInjectContentInventoryFeed") &&
                                    z.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: t }));
                        }
                    ),
                    [u, s, r, m, f, x],
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
                let l = t === D || t === U ? 0 : parseInt(t, 10),
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
        N = i.useCallback(
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
        T = (0, c.Ay)({ id: `members-${t.id}`, setFocus: C, isEnabled: a, scrollToStart: I, scrollToEnd: N });
    return (0, l.jsx)(v.f5, {
        value: s,
        children: (0, l.jsx)("div", {
            ref: A,
            tabIndex: -1,
            className: r()(H.kL, n),
            children: (0, l.jsx)(u.hD, {
                navigator: T,
                children: (0, l.jsx)(eF, {
                    ...e,
                    ...o,
                    version: f,
                    groups: m,
                    rows: d,
                    listRef: g,
                    updateMaxContentFeedRowSeen: p,
                    sectionHeight: 18 + E,
                    rowHeight: 42,
                }),
            }),
        }),
    });
}
function eB(e) {
    let { channel: t, className: n } = e,
        s = i.useDeferredValue(t);
    return i.useMemo(() => (0, l.jsx)(_.r$, { children: (0, l.jsx)(eH, { channel: s, className: n }) }), [s, n]);
}
