"use strict";
n.d(t, { A: () => eu, Y: () => es });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(837381),
    c = n(884362),
    d = n(607399),
    _ = n(311907),
    f = n(140735),
    p = n(312138),
    h = n(707554),
    E = n(475825),
    m = n(506309),
    g = n(442433),
    A = n(361610),
    I = n(414798),
    T = n(110574),
    S = n(775602),
    y = n(793574),
    N = n(58149),
    v = n(688810),
    C = n(941726),
    O = n(449582),
    R = n(276055),
    b = n(83974),
    D = n(420706),
    L = n(750770),
    w = n(485947),
    M = n(915089),
    P = n(509536),
    x = n(201275),
    k = n(657048),
    U = n(728321),
    G = n(342296),
    F = n(773669),
    V = n(963307),
    B = n(317525),
    H = n(994500),
    j = n(309010),
    Y = n(741961),
    W = n(287809),
    K = n(977997),
    $ = n(203982),
    z = n(403362),
    q = n(427262),
    X = n(837921),
    Q = n(47167),
    Z = n(652215),
    J = n(985018),
    ee = n(540808);
let et = X.Ay.getEnableHardwareAcceleration(),
    en = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    er = i.memo(function (e) {
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
                applicationStream: p,
                status: h,
                channel: E,
                guildId: m,
                isTyping: A,
                isMobileOnline: S,
                isVROnline: y,
                premiumSince: N,
                nameplate: v,
                ...C
            } = e,
            O = i.useRef(null),
            [R, b] = i.useState(!1),
            D = null != N ? new Date(N) : null,
            L = i.useCallback(
                (e) => {
                    (0, g.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                                n.e("41927"),
                                n.e("97262"),
                                n.e("93103"),
                                n.e("92493"),
                                n.e("42128"),
                                n.e("97278"),
                                n.e("35313"),
                                n.e("74372"),
                                n.e("84841"),
                                n.e("15690"),
                            ]).then(n.bind(n, 107632)),
                            t = K.A.isInChannel(j.A.getVoiceChannelId(), c.id);
                        return (n) => (0, r.jsx)(e, { ...n, user: c, guildId: m, channel: E, showMediaItems: t });
                    });
                },
                [c, m, E],
            ),
            w = i.useCallback(() => {
                let e = `@${q.Ay.getUserTag(c, { decoration: "never" })}`,
                    t = `<@${c.id}>`;
                $._.dispatch(Z.jej.TEXTAREA_FOCUS, { channelId: E.id }),
                    $._.dispatchToLastSubscribed(Z.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    I.A.startTyping(E.id);
            }, [c, E.id]),
            M = i.useCallback(
                (e) => {
                    null != m &&
                        (e.stopPropagation(),
                        (0, P.K4)({
                            guildId: m,
                            location: { section: Z.JJy.MEMBER_LIST, object: Z.ZSU.BOOST_GEM_ICON },
                        }));
                },
                [m],
            );
        return (0, r.jsx)(G.A, {
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
                let { onClick: n, onMouseDown: i, ...o } = e;
                return (0, r.jsx)(T.A, {
                    ref: O,
                    className: ee.Dc,
                    onContextMenu: L,
                    shouldAnimateStatus: et,
                    user: c,
                    currentUser: _,
                    nick: u,
                    status: h,
                    activities: f,
                    applicationStream: p,
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
                    selected: R,
                    itemProps: C,
                    nameplate: v,
                    onClick: (e) => {
                        e.shiftKey ? w?.() : b((e) => !e);
                    },
                    onMouseDown: (e) => {
                        R ? e.stopPropagation() : i?.(e);
                    },
                    ...o,
                });
            },
        });
    }),
    ei = i.memo(function (e) {
        let { colorRoleId: t, ...n } = e,
            { channel: i, user: s, index: a } = e,
            o = (0, u.rm)(`${a}`),
            l = (0, _.bG)([Y.A], () => Y.A.isTyping(i.id, s.id)),
            c = (0, _.bG)([W.default], () => W.default.getCurrentUser()),
            d = (0, _.bG)([B.A], () => (null != t ? B.A.getRole(i.guild_id, t)?.name : void 0), [i, t]),
            f = (0, O.r)({ user: s, guildId: i.guild_id });
        return (0, r.jsx)(er, { ...n, ...o, isTyping: l, currentUser: c, colorRoleName: d, nameplate: f });
    }),
    es = i.memo(function (e) {
        let { id: t, title: s, count: a, guildId: o, className: l } = e,
            u = (0, x.$7)({ roleId: t, guildId: o, size: 16 }),
            c = (0, _.bG)([F.default], () => (null == a ? null : new Intl.NumberFormat(F.default.locale).format(a)), [
                a,
            ]),
            d = i.useCallback(
                (e) => {
                    u?.src != null &&
                        (0, g.L3)(e, async () => {
                            let { default: e } = await n.e("33743").then(n.bind(n, 455538));
                            return (t) => (0, r.jsx)(e, { ...t, imageUrl: u.src });
                        });
                },
                [u?.src],
            );
        return t === Z.clD.UNKNOWN
            ? (0, r.jsx)("div", { className: l, children: (0, r.jsx)("div", { className: ee.k1 }) })
            : (0, r.jsxs)(w.A, {
                  className: l,
                  children: [
                      (0, r.jsx)(f.A, { children: null == a ? s : J.intl.format(J.t.Uaqbke, { title: s, count: a }) }),
                      (0, r.jsxs)("div", {
                          className: ee.CN,
                          "aria-hidden": !0,
                          children: [
                              null != u
                                  ? (0, r.jsx)("span", {
                                        onContextMenu: d,
                                        children: (0, r.jsx)(k.A, { className: ee.UT, ...u }),
                                    })
                                  : null,
                              (0, r.jsx)("span", { className: ee.iy, children: s }),
                              null == c ? null : (0, r.jsxs)("span", { children: ["\xa0— ", c] }),
                          ],
                      }),
                  ],
              });
    });
function ea(e) {
    let { index: t } = e,
        n = (0, u.rm)(`${t}`);
    return (0, r.jsx)(T.A, { itemProps: n });
}
class eo extends i.Component {
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
        if ((0, R.l)(a)) return (0, i.createElement)(R.A, { ...a, key: `section-${t}` });
        if (0 === t) {
            let { key: e } = a;
            return (0, r.jsx)(
                U.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: en,
                    children: (0, i.createElement)(es, {
                        ...a,
                        key: `section-${e}`,
                        guildId: s.guild_id,
                        className: ee.lL,
                    }),
                },
                `section-${t}`,
            );
        }
        return (0, i.createElement)(es, { ...a, key: `section-${t}`, guildId: s.guild_id, className: ee.lL });
    };
    getRowProps = (e) => {
        let { groups: t, rows: n } = this.props,
            r = t[e.section];
        if (null == r) return null;
        let { index: i } = r;
        return null == i || "row" !== e.type ? null : n[i + 1 + e.row];
    };
    getFirstApplicationIdOccurrences = () => {
        let { rows: e, version: t } = this.props;
        if (null != this._firstApplicationIdOccurrences && this._lastRowsVersion === t)
            return this._firstApplicationIdOccurrences;
        let n = new Set(),
            r = new Set();
        for (let t of e)
            if (null != t && t.type === V.S9.CONTENT_INVENTORY) {
                let { entry: e } = t;
                if ("application_id" in e.extra && null != e.extra.application_id) {
                    let t = e.extra.application_id;
                    n.has(t) || (n.add(t), r.add(e.id));
                }
            }
        return (this._firstApplicationIdOccurrences = r), (this._lastRowsVersion = t), r;
    };
    renderRow = (e) => {
        let { section: t, row: n, rowIndex: i } = e,
            { channel: s } = this.props,
            a = this.getRowProps(e);
        if (null != a) {
            if (a.type === V.S9.MEMBER && "user" in a) {
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
                    applicationStream: p,
                    premiumSince: h,
                } = a;
                return (0, r.jsx)(
                    ei,
                    {
                        colorString: e,
                        colorStrings: t,
                        colorRoleId: n,
                        user: o,
                        status: l,
                        isOwner: u,
                        nick: _,
                        activities: f,
                        applicationStream: p,
                        channel: s,
                        guildId: s.guild_id,
                        premiumSince: h,
                        isMobileOnline: c,
                        isVROnline: d,
                        index: i,
                    },
                    `member-${a.user.id}`,
                );
            }
            if (a.type === V.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${a.entry.id}`;
                null != a.entry.original_id && (e += `-${a.entry.original_id}`);
                let t = this.getFirstApplicationIdOccurrences().has(a.entry.id);
                return (0, r.jsx)(
                    D.Ay,
                    { ...a, channel: this.props.channel, index: i, isFirstApplicationOccurrence: t },
                    e,
                );
            }
            if (a.type === V.S9.HIDDEN_CONTENT_INVENTORY) return (0, r.jsx)(b.A, {}, "content-inventory-hidden-entry");
        }
        return (0, r.jsx)(ea, { index: i }, `placeholder-${t}:${n}`);
    };
    handleScroll = () => {
        this.updateSubscription(), this.updateMaxContentFeedRowSeen();
    };
    updateMaxContentFeedRowSeen = l().debounce(() => {
        let e = this._list;
        if (null == e) return;
        let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            r = n + t - this.props.sectionHeight;
        this.props.updateMaxContentFeedRowSeen(r);
    }, 50);
    getContentFeedGroup = () => {
        let e = this.props.groups[L.f];
        if ((0, R.l)(e)) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: t } = this.props;
        if (null != e) {
            let { rows: n } = this.props,
                r = e.index;
            return function (e, i) {
                if (e === L.f) {
                    let e = n[r + 1 + i];
                    return (0, D.h9)(e);
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
        let { height: t, rowHeight: n, y: r } = e,
            i = this.getContentFeedHeight(),
            s = Math.max(0, t - Math.max(0, i - r)),
            a = Math.floor(s / n);
        return { height: s, rowHeight: n, rowsVisible: a, y: Math.max(0, r - i) };
    }
    getDimensions() {
        let e = this._list;
        if (null == e) return { y: 0, height: 0, rowHeight: 0 };
        let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            { rowHeight: r } = this.props,
            i = Math.floor(t / r);
        return this.getContentFeedAdjustedDimensions({ height: t, rowHeight: r, rowsVisible: i, y: n });
    }
    updateSubscription = l().debounce(() => {
        if (null == this._list) return;
        let { channel: e } = this.props,
            { rowHeight: t, y: n, height: r } = this.getDimensions();
        (0, A.NJ)({ guildId: e.guild_id, channelId: e.id, y: n, height: r, rowHeight: t });
    }, 50);
    trackMemberListViewed = () => {
        if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
        let e = this._list?.getItems(),
            { rowsVisible: t } = this.getDimensions();
        if (void 0 === t || 0 === t || null == e) return;
        this.hasContentFeed() && (e = e.filter((e) => e.section !== L.f));
        let n = e
            .map((e) => this.getRowProps(e))
            .slice(0, t + 1)
            .filter(z.Vq);
        if (0 === n.length) return;
        let r = n.reduce(
            (e, t) => (
                t.type !== V.S9.MEMBER ||
                    (e.num_users_visible++,
                    t.isMobileOnline && e.num_users_visible_with_mobile_indicator++,
                    null != t.activities &&
                        t.activities.length > 0 &&
                        (e.num_users_visible_with_activity++,
                        t.activities.some((e) => e.type === Z.$pd.PLAYING) && e.num_users_visible_with_game_activity++),
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
            N.Ay.trackWithMetadata(Z.HAw.MEMBER_LIST_VIEWED, { ...r });
    };
    render() {
        let { groups: e, listId: t, channel: n, sectionHeight: i } = this.props;
        return (0, r.jsx)(p.sk, {
            children: (s) =>
                (0, r.jsx)(M.V0, {
                    children: (o) =>
                        (0, r.jsx)("aside", {
                            className: a()(ee.yg, ee.ML),
                            "aria-labelledby": o,
                            children: (0, r.jsx)(h.F, {
                                component: (0, r.jsx)(f.A, {
                                    children: (0, r.jsx)(h.H, {
                                        id: o,
                                        children: J.intl.format(J.t.JBQxV6, { channel: (0, Q.m1)(n, W.default, H.A) }),
                                    }),
                                }),
                                children: (0, r.jsx)(u.PR, {
                                    children: (n) => {
                                        let { ref: o, role: l, ...u } = n;
                                        return (0, r.jsx)(
                                            E.OZ,
                                            {
                                                innerRole: l,
                                                innerAriaLabel: J.intl.string(J.t["9Oq93m"]),
                                                ref: (e) => {
                                                    (this._list = e),
                                                        (this.props.listRef.current = e),
                                                        (o.current = e?.getScrollerNode() ?? null);
                                                },
                                                className: a()(ee.ol, { [ee.Ij]: d.Fr }),
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
function el(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: s } = (0, v.Ay)(y.A.MEMBER_LIST),
        o = (0, _.bG)([S.A], () => S.A.keyboardModeEnabled),
        l = (0, _.cf)([V.Ay], () => V.Ay.getProps(t.guild_id, t.id)),
        {
            rows: d,
            groups: f,
            version: p,
            updateMaxRowSeen: h,
        } = (0, L.s)({ memberStoreProps: l, channelId: t.id, guildId: t.guild_id }),
        E = i.useRef(null),
        g = (0, m.W)("lg") + (0, m.W)("xxs"),
        A = i.useCallback(
            (e, t) => {
                let n = E.current;
                if (null == n) return;
                let r = parseInt(t, 10),
                    [i, s] = n.getSectionRowFromIndex(r);
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
                    let t = E.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        T = i.useCallback(
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
        N = (0, c.Ay)({ id: `members-${t.id}`, setFocus: A, isEnabled: o, scrollToStart: I, scrollToEnd: T });
    return (0, r.jsx)(v.f5, {
        value: s,
        children: (0, r.jsx)("div", {
            className: a()(ee.kL, n),
            children: (0, r.jsx)(u.hD, {
                navigator: N,
                children: (0, r.jsx)(eo, {
                    ...e,
                    ...l,
                    version: p,
                    groups: f,
                    rows: d,
                    listRef: E,
                    updateMaxContentFeedRowSeen: h,
                    sectionHeight: 18 + g,
                    rowHeight: 42,
                }),
            }),
        }),
    });
}
function eu(e) {
    let { channel: t, className: n } = e,
        s = i.useDeferredValue(t);
    return i.useMemo(() => (0, r.jsx)(C.r$, { children: (0, r.jsx)(el, { channel: s, className: n }) }), [s, n]);
}
