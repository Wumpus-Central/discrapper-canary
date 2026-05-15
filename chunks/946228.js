"use strict";
n.d(t, { A: () => eB, Y: () => ek });
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
    f = n(140735),
    h = n(312138),
    p = n(707554),
    E = n(475825),
    m = n(506309),
    g = n(442433),
    A = n(361610),
    I = n(414798),
    T = n(589158),
    S = n(775602),
    N = n(793574),
    y = n(95561),
    C = n(688810),
    v = n(941726),
    O = n(449582),
    R = n(900797),
    b = n(847374),
    D = n(320448),
    L = n(187322),
    w = n(939249),
    M = n(485947),
    P = n(180170),
    x = n(435738),
    U = n(38055);
let k = "content-inventory-feed";
var G = n(652215),
    F = n(375708),
    V = n(933928),
    B = n(540808);
let H = r.memo(function (e) {
        let t,
            { title: s, onToggleExpand: a, expanded: o, expandedCount: l } = e,
            u = (0, _.bG)([x.A], () => x.A.hidden),
            c = r.useCallback((e) => {
                (0, g.L3)(e, async () => {
                    let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 38055));
                    return () => (0, i.jsx)(e, { closePopout: g.Z_ });
                });
            }, []);
        return (0, i.jsxs)(M.A, {
            className: B.lL,
            children: [
                (0, i.jsx)(f.A, { children: F.intl.format(F.t.Uaqbke, { title: s, count: l }) }),
                (0, i.jsxs)(w.D, {
                    onClick: (e) => {
                        if (e.currentTarget === e.target || e.currentTarget.contains(e.target))
                            return u ? (0, P.Il)() : l > 3 ? a() : (0, G.tEg)();
                    },
                    onContextMenu: c,
                    tag: "span",
                    "aria-hidden": !0,
                    className: V.N1,
                    children: [
                        (0, i.jsxs)("div", {
                            className: V.wx,
                            children: [(0, i.jsxs)("span", { children: [s, " \u2014 ", l] }), (0, i.jsx)(U.A, {})],
                        }),
                        l <= 3 && !u
                            ? null
                            : ((t = u
                                  ? (0, i.jsx)(R.t, { className: V.wT })
                                  : o
                                    ? (0, i.jsx)(b.a, { className: V.wT })
                                    : (0, i.jsx)(D._, { className: V.wT })),
                              (0, i.jsx)(L.vN, {
                                  children: (0, i.jsx)("div", { tabIndex: 0, className: V.wT, children: t }),
                              })),
                    ],
                }),
            ],
        });
    }),
    j = () => null;
var Y = n(742424),
    W = n(228366),
    K = n(963307),
    z = n(734057),
    $ = n(71393),
    q = n(531685),
    Z = n(174459),
    X = n(99066),
    Q = n(376261),
    J = n(947593),
    ee = n(681154),
    et = n(99753);
n(321073);
var en = n(136722),
    ei = n(52133),
    er = n(860071),
    es = n(696451),
    ea = n(488926),
    eo = n(818348);
let el = [],
    eu = new Set();
var ec = n(832384);
let ed = new Set();
var e_ = n(808323),
    ef = n(424994);
let eh = new Set([
    ee.ContentInventoryEntryType.PLAYED_GAME,
    ee.ContentInventoryEntryType.WATCHED_MEDIA,
    ee.ContentInventoryEntryType.TOP_GAME,
    ee.ContentInventoryEntryType.TOP_ARTIST,
    ee.ContentInventoryEntryType.LISTENED_SESSION,
    ee.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var ep = n(915089),
    eE = n(509536),
    em = n(201275),
    eg = n(657048),
    eA = n(728321),
    eI = n(342296),
    eT = n(773669),
    eS = n(317525),
    eN = n(994500),
    ey = n(309010),
    eC = n(741961),
    ev = n(287809),
    eO = n(977997),
    eR = n(625494),
    eb = n(403362),
    eD = n(427262),
    eL = n(19575),
    ew = n(47167);
let eM = eL.Ay.getEnableHardwareAcceleration(),
    eP = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    ex = r.memo(function (e) {
        let {
                colorString: t,
                colorStrings: s,
                colorRoleName: a,
                colorRoleId: o,
                isOwner: l,
                nick: u,
                user: c,
                currentUser: _,
                activities: f,
                applicationStream: h,
                status: p,
                channel: E,
                guildId: m,
                isTyping: A,
                isMobileOnline: S,
                isVROnline: N,
                premiumSince: y,
                nameplate: C,
                ...v
            } = e,
            O = r.useRef(null),
            [R, b] = r.useState(!1),
            D = null != y ? new Date(y) : null,
            L = r.useCallback(
                (e) => {
                    (0, g.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                                n.e("74389"),
                                n.e("80203"),
                                n.e("54266"),
                                n.e("685"),
                                n.e("12697"),
                                n.e("26692"),
                                n.e("26132"),
                                n.e("46652"),
                                n.e("93190"),
                                n.e("34552"),
                                n.e("93103"),
                                n.e("8757"),
                                n.e("89673"),
                                n.e("85968"),
                                n.e("60195"),
                                n.e("21921"),
                                n.e("68403"),
                                n.e("76418"),
                                n.e("29787"),
                                n.e("71210"),
                                n.e("97558"),
                                n.e("94000"),
                                n.e("82263"),
                                n.e("66495"),
                                n.e("88342"),
                                n.e("91994"),
                                n.e("42451"),
                                n.e("76665"),
                                n.e("98965"),
                                n.e("35027"),
                                n.e("35313"),
                                n.e("54975"),
                                n.e("24198"),
                                n.e("71133"),
                                n.e("54625"),
                                n.e("39171"),
                                n.e("36564"),
                                n.e("45996"),
                                n.e("52229"),
                                n.e("792"),
                                n.e("92822"),
                                n.e("56753"),
                                n.e("23427"),
                                n.e("49145"),
                                n.e("29422"),
                                n.e("61268"),
                                n.e("25486"),
                                n.e("9291"),
                                n.e("14461"),
                                n.e("7059"),
                                n.e("49644"),
                                n.e("28152"),
                                n.e("42204"),
                                n.e("43116"),
                                n.e("65826"),
                                n.e("49520"),
                                n.e("78195"),
                                n.e("11617"),
                                n.e("70314"),
                                n.e("22261"),
                                n.e("70515"),
                                n.e("27435"),
                                n.e("74021"),
                                n.e("13708"),
                                n.e("66939"),
                                n.e("30221"),
                                n.e("24240"),
                                n.e("21879"),
                                n.e("17334"),
                                n.e("84841"),
                            ]).then(n.bind(n, 107632)),
                            t = eO.A.isInChannel(ey.A.getVoiceChannelId(), c.id);
                        return (n) => (0, i.jsx)(e, { ...n, user: c, guildId: m, channel: E, showMediaItems: t });
                    });
                },
                [c, m, E],
            ),
            w = r.useCallback(() => {
                let e = `@${eD.Ay.getUserTag(c, { decoration: "never" })}`,
                    t = `<@${c.id}>`;
                eR._.dispatch(G.jej.TEXTAREA_FOCUS, { channelId: E.id }),
                    eR._.dispatchToLastSubscribed(G.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    I.A.startTyping(E.id);
            }, [c, E.id]),
            M = r.useCallback(
                (e) => {
                    null != m &&
                        (e.stopPropagation(),
                        (0, eE.K4)({
                            guildId: m,
                            location: { section: G.JJy.MEMBER_LIST, object: G.ZSU.BOOST_GEM_ICON },
                        }));
                },
                [m],
            );
        return (0, i.jsx)(eI.A, {
            targetElementRef: O,
            user: c,
            guildId: m,
            channelId: E.id,
            roleId: o,
            position: d.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: w,
            shouldShow: R,
            onRequestClose: () => {
                b(!1);
            },
            children: (e) => {
                let { onClick: n, onMouseDown: r, ...o } = e;
                return (0, i.jsx)(T.A, {
                    ref: O,
                    className: B.Dc,
                    onContextMenu: L,
                    shouldAnimateStatus: eM,
                    user: c,
                    currentUser: _,
                    nick: u,
                    status: p,
                    activities: f,
                    applicationStream: h,
                    isOwner: l,
                    premiumSince: D,
                    colorString: t,
                    colorStrings: s,
                    colorRoleName: a,
                    isTyping: A,
                    channel: E,
                    guildId: m,
                    isMobile: S,
                    isVR: N,
                    onClickPremiumGuildIcon: M,
                    selected: R,
                    itemProps: v,
                    nameplate: C,
                    onClick: (e) => {
                        e.shiftKey ? w?.() : b((e) => !e);
                    },
                    onMouseDown: (e) => {
                        R ? e.stopPropagation() : r?.(e);
                    },
                    ...o,
                });
            },
        });
    }),
    eU = r.memo(function (e) {
        let { colorRoleId: t, ...n } = e,
            { channel: r, user: s, index: a } = e,
            o = (0, u.rm)(`${a}`),
            l = (0, _.bG)([eC.A], () => eC.A.isTyping(r.id, s.id)),
            c = (0, _.bG)([ev.default], () => ev.default.getCurrentUser()),
            d = (0, _.bG)([eS.A], () => (null != t ? eS.A.getRole(r.guild_id, t)?.name : void 0), [r, t]),
            f = (0, O.r)({ user: s, guildId: r.guild_id });
        return (0, i.jsx)(ex, { ...n, ...o, isTyping: l, currentUser: c, colorRoleName: d, nameplate: f });
    }),
    ek = r.memo(function (e) {
        let { id: t, title: s, count: a, guildId: o, className: l } = e,
            u = (0, em.$7)({ roleId: t, guildId: o, size: 16 }),
            c = (0, _.bG)([eT.default], () => (null == a ? null : new Intl.NumberFormat(eT.default.locale).format(a)), [
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
        return t === G.clD.UNKNOWN
            ? (0, i.jsx)("div", { className: l, children: (0, i.jsx)("div", { className: B.k1 }) })
            : (0, i.jsxs)(M.A, {
                  className: l,
                  children: [
                      (0, i.jsx)(f.A, { children: null == a ? s : F.intl.format(F.t.Uaqbke, { title: s, count: a }) }),
                      (0, i.jsxs)("div", {
                          className: B.CN,
                          "aria-hidden": !0,
                          children: [
                              null != u
                                  ? (0, i.jsx)("span", {
                                        onContextMenu: d,
                                        children: (0, i.jsx)(eg.A, { className: B.UT, ...u }),
                                    })
                                  : null,
                              (0, i.jsx)("span", { className: B.iy, children: s }),
                              null == c ? null : (0, i.jsxs)("span", { children: ["\xa0\u2014 ", c] }),
                          ],
                      }),
                  ],
              });
    });
function eG(e) {
    let { index: t } = e,
        n = (0, u.rm)(`${t}`);
    return (0, i.jsx)(T.A, { itemProps: n });
}
class eF extends r.Component {
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
        if (a?.id === k) return (0, r.createElement)(H, { ...a, key: `section-${t}` });
        if (0 === t) {
            let { key: e } = a;
            return (0, i.jsx)(
                eA.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: eP,
                    children: (0, r.createElement)(ek, {
                        ...a,
                        key: `section-${e}`,
                        guildId: s.guild_id,
                        className: B.lL,
                    }),
                },
                `section-${t}`,
            );
        }
        return (0, r.createElement)(ek, { ...a, key: `section-${t}`, guildId: s.guild_id, className: B.lL });
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
            if (null != t && t.type === K.S9.CONTENT_INVENTORY) {
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
            if (a.type === K.S9.MEMBER && "user" in a) {
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
                    activities: f,
                    applicationStream: h,
                    premiumSince: p,
                } = a;
                return (0, i.jsx)(
                    eU,
                    {
                        colorString: e,
                        colorStrings: t,
                        colorRoleId: n,
                        user: o,
                        status: l,
                        isOwner: u,
                        nick: _,
                        activities: f,
                        applicationStream: h,
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
            if (a.type === K.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${a.entry.id}`;
                null != a.entry.original_id && (e += `-${a.entry.original_id}`);
                let t = this.getFirstApplicationIdOccurrences().has(a.entry.id);
                return (0, i.jsx)(
                    Y.Ay,
                    { ...a, channel: this.props.channel, index: r, isFirstApplicationOccurrence: t },
                    e,
                );
            }
            if (a.type === K.S9.HIDDEN_CONTENT_INVENTORY) return (0, i.jsx)(j, {}, "content-inventory-hidden-entry");
        }
        return (0, i.jsx)(eG, { index: r }, `placeholder-${t}:${n}`);
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
                    return (0, Y.h9)(e);
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
            .filter(eb.Vq);
        if (0 === n.length) return;
        let i = n.reduce(
            (e, t) => (
                t.type !== K.S9.MEMBER ||
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
            y.Ay.trackWithMetadata(G.HAw.MEMBER_LIST_VIEWED, { ...i });
    };
    render() {
        let { groups: e, listId: t, channel: n, sectionHeight: r } = this.props;
        return (0, i.jsx)(h.sk, {
            children: (s) =>
                (0, i.jsx)(ep.V0, {
                    children: (o) =>
                        (0, i.jsx)("aside", {
                            className: a()(B.yg, B.ML),
                            "aria-labelledby": o,
                            children: (0, i.jsx)(p.F, {
                                component: (0, i.jsx)(f.A, {
                                    children: (0, i.jsx)(p.H, {
                                        id: o,
                                        children: F.intl.format(F.t.JBQxV6, {
                                            channel: (0, ew.m1)(n, ev.default, eN.A),
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
                                                innerAriaLabel: F.intl.string(F.t["9Oq93m"]),
                                                ref: (e) => {
                                                    (this._list = e),
                                                        (this.props.listRef.current = e),
                                                        (o.current = e?.getScrollerNode() ?? null);
                                                },
                                                className: a()(B.ol, { [B.Ij]: d.Fr }),
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
function eV(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: s } = (0, C.Ay)(N.A.MEMBER_LIST),
        o = (0, _.bG)([S.A], () => S.A.keyboardModeEnabled),
        l = (0, _.cf)([K.Ay], () => K.Ay.getProps(t.guild_id, t.id)),
        {
            rows: d,
            groups: f,
            version: h,
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
                        i = (0, e_.A)({ id: ef.X1.GLOBAL_FEED });
                    i = (function (e) {
                        let { entries: t, channelId: n } = e,
                            i = (0, _.bG)([z.A], () => z.A.getChannel(n)),
                            s = i?.guild_id,
                            a = r.useRef(new Set()),
                            o = r.useMemo(() => {
                                let e = new Set(t?.map((e) => e.author_id));
                                return (0, ei.v)([...a.current], [...e]) || (a.current = e), a.current;
                            }, [t]);
                        r.useEffect(() => {
                            null != s &&
                                Array.from(o).forEach((e) => {
                                    er.A.requestMember(s, e);
                                });
                        }, [o, s]);
                        let l = (0, _.yK)([es.Ay], () => {
                                if (null == s) return el;
                                let e = [];
                                for (let t of o) es.Ay.isMember(s, t) && e.push(t);
                                return e;
                            }, [o, s]),
                            u = r.useMemo(() => {
                                if (null == i || 0 === l.length) return eu;
                                let e = new Set();
                                for (let t of l) {
                                    let n = ea.cc({ user: t, context: i });
                                    en.zy(n, eo.xB.VIEW_CHANNEL) && e.add(t);
                                }
                                return e;
                            }, [l, i]);
                        return r.useMemo(() => t?.filter((e) => u.has(e.author_id)), [t, u]);
                    })({ entries: i, channelId: e });
                    let { entries: s, filteredIds: a } =
                        ((t = i = r.useMemo(() => i?.filter((e) => eh.has(e.content_type)), [i])),
                        (n = (0, _.bG)([x.A, et.A], () => {
                            let e = et.A.getDebugImpressionCappingDisabled();
                            return !(0, X.sE)("useFilterImpressionCappedContent") || e
                                ? ed
                                : x.A.getImpressionCappedItemIds();
                        }, [t])),
                        r.useMemo(() => {
                            if (null == t) return { entries: t, filteredIds: ed };
                            let e = new Set();
                            return {
                                entries: t.filter((t) => !!(0, ec.JM)(t) || !n.has(t.id) || (e.add(t.id), !1)),
                                filteredIds: e,
                            };
                        }, [t, n]));
                    return (
                        (i = s),
                        {
                            requestId: (0, _.bG)([et.A], () => et.A.getFeedRequestId(ef.X1.GLOBAL_FEED)),
                            entries: (i = (0, v.Ay)(i)),
                            impressionCappedEntryIds: a,
                        }
                    );
                })(s),
                f = (0, _.bG)([x.A], () => x.A.hidden),
                h = (0, _.bG)([q.A], () => q.A.isFocused()),
                p = (0, _.bG)([z.A], () => z.A.getChannel(s)),
                E = (0, _.bG)([$.A], () => $.A.getGuild(a), [a]),
                m = ((0, Q.T)(E) ?? !1) && p?.isForumChannel() === !1,
                [g, A, I, T] = r.useMemo(() => {
                    let e;
                    if (null == c || 0 === c.length || null == u || !m) return [t, n, i];
                    let r = o ? c.length : 3,
                        d = c.slice(0, r);
                    e = f
                        ? [{ type: K.S9.HIDDEN_CONTENT_INVENTORY }]
                        : d.map((e) => ({ type: K.S9.CONTENT_INVENTORY, entry: e, requestId: u }));
                    let _ = {
                        id: k,
                        type: K.S9.CONTENT_INVENTORY_GROUP,
                        key: k,
                        count: e.length,
                        index: n.length,
                        title: F.intl.string(F.t["6gwSFY"]),
                        onToggleExpand: () => {
                            l((e) => {
                                let t = !e;
                                return (
                                    Z.default.track(G.HAw.MEMBERLIST_CONTENT_FEED_TOGGLED, {
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
                        feedHeight: e.map(Y.h9).reduce((e, t) => e + t, 0),
                    };
                    return [[_, ...t], [...n, _, ...e], Math.random(), e];
                }, [s, c, o, t, a, u, n, i, f, m]),
                S = r.useRef(0),
                N = r.useRef(c),
                y = r.useRef(void 0),
                C = r.useRef({ impressionCappedEntryIds: d }),
                O = r.useCallback(
                    (e) => {
                        let t = Math.floor(e / Y.bG),
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
                    C.current = { impressionCappedEntryIds: d };
                }, [d]),
                r.useEffect(
                    () => (
                        (S.current = 0),
                        (y.current = Date.now()),
                        () => {
                            if (null == u || null == y.current || Date.now() - y.current < 3e3) return;
                            let e = N.current?.map((e) => e.id) ?? [],
                                t = e.slice(0, S.current);
                            !f &&
                                h &&
                                m &&
                                ((0, J.D)(G.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: u,
                                    first_shown_at: y.current,
                                    item_ids: t,
                                    surface_type: ef.UG.GUILD_MEMBER_LIST,
                                    channel_id: s,
                                    guild_id: a,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [...C.current.impressionCappedEntryIds],
                                }),
                                (0, X.sE)("useInjectContentInventoryFeed") &&
                                    W.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: t }));
                        }
                    ),
                    [u, s, a, f, h, m],
                ),
                { groups: g, rows: A, version: I, updateMaxRowSeen: O }
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
        y = r.useCallback(
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
        O = (0, c.Ay)({ id: `members-${t.id}`, setFocus: I, isEnabled: o, scrollToStart: T, scrollToEnd: y });
    return (0, i.jsx)(C.f5, {
        value: s,
        children: (0, i.jsx)("div", {
            ref: g,
            tabIndex: -1,
            className: a()(B.kL, n),
            children: (0, i.jsx)(u.hD, {
                navigator: O,
                children: (0, i.jsx)(eF, {
                    ...e,
                    ...l,
                    version: h,
                    groups: f,
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
function eB(e) {
    let { channel: t, className: n } = e,
        s = r.useDeferredValue(t);
    return r.useMemo(() => (0, i.jsx)(v.r$, { children: (0, i.jsx)(eV, { channel: s, className: n }) }), [s, n]);
}
