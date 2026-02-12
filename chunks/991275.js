"use strict";
n.d(t, { A: () => el, Y: () => ei });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    u = n(837381),
    c = n(884362),
    d = n(607399),
    _ = n(311907),
    f = n(397927),
    h = n(442433),
    p = n(361610),
    g = n(414798),
    E = n(110574),
    A = n(775602),
    I = n(793574),
    T = n(58149),
    y = n(688810),
    S = n(496015),
    v = n(941726),
    C = n(122997),
    b = n(276055),
    N = n(83974),
    R = n(420706),
    O = n(750770),
    D = n(485947),
    L = n(915089),
    w = n(509536),
    x = n(201275),
    P = n(111864),
    M = n(657048),
    k = n(728321),
    U = n(342296),
    G = n(773669),
    F = n(963307),
    V = n(317525),
    B = n(309010),
    j = n(741961),
    H = n(287809),
    Y = n(977997),
    W = n(203982),
    K = n(403362),
    $ = n(427262),
    z = n(837921),
    q = n(652215),
    X = n(985018),
    Z = n(701939);
let Q = z.Ay.getEnableHardwareAcceleration(),
    J = 18,
    ee = 42,
    et = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    en = i.memo(function (e) {
        let {
                colorString: t,
                colorStrings: a,
                colorRoleName: s,
                colorRoleId: o,
                isOwner: l,
                nick: u,
                user: c,
                currentUser: _,
                activities: f,
                applicationStream: p,
                status: A,
                channel: I,
                guildId: T,
                isTyping: y,
                isMobileOnline: S,
                isVROnline: v,
                premiumSince: C,
                nameplate: b,
                ...N
            } = e,
            R = i.useRef(null),
            [O, D] = i.useState(!1),
            L = null != C ? new Date(C) : null,
            x = i.useCallback(
                (e) => {
                    (0, h.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                                n.e("41927"),
                                n.e("97262"),
                                n.e("3795"),
                                n.e("42128"),
                                n.e("97283"),
                                n.e("84841"),
                                n.e("29347"),
                            ]).then(n.bind(n, 107632)),
                            t = Y.A.isInChannel(B.A.getVoiceChannelId(), c.id);
                        return (n) => (0, r.jsx)(e, { ...n, user: c, guildId: T, channel: I, showMediaItems: t });
                    });
                },
                [c, T, I],
            ),
            P = i.useCallback(() => {
                let e = `@${$.Ay.getUserTag(c, { decoration: "never" })}`,
                    t = `<@${c.id}>`;
                W._.dispatch(q.jej.TEXTAREA_FOCUS, { channelId: I.id }),
                    W._.dispatchToLastSubscribed(q.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    g.A.startTyping(I.id);
            }, [c, I.id]),
            M = i.useCallback(
                (e) => {
                    null != T &&
                        (e.stopPropagation(),
                        (0, w.K)({
                            guildId: T,
                            location: { section: q.JJy.MEMBER_LIST, object: q.ZSU.BOOST_GEM_ICON },
                        }));
                },
                [T],
            );
        return (0, r.jsx)(U.A, {
            targetElementRef: R,
            user: c,
            guildId: T,
            channelId: I.id,
            roleId: o,
            position: d.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: P,
            shouldShow: O,
            onRequestClose: () => {
                D(!1);
            },
            children: (e) => {
                let { onClick: n, onMouseDown: i, ...o } = e;
                return (0, r.jsx)(E.A, {
                    ref: R,
                    className: Z.Dc,
                    onContextMenu: x,
                    shouldAnimateStatus: Q,
                    user: c,
                    currentUser: _,
                    nick: u,
                    status: A,
                    activities: f,
                    applicationStream: p,
                    isOwner: l,
                    premiumSince: L,
                    colorString: t,
                    colorStrings: a,
                    colorRoleName: s,
                    isTyping: y,
                    channel: I,
                    guildId: T,
                    isMobile: S,
                    isVR: v,
                    onClickPremiumGuildIcon: M,
                    selected: O,
                    itemProps: N,
                    nameplate: b,
                    onClick: (e) => {
                        e.shiftKey ? P?.() : D((e) => !e);
                    },
                    onMouseDown: (e) => {
                        O ? e.stopPropagation() : i?.(e);
                    },
                    ...o,
                });
            },
        });
    }),
    er = i.memo(function (e) {
        let { colorRoleId: t, ...n } = e,
            { channel: i, user: a, index: s } = e,
            o = (0, u.rm)(`${s}`),
            l = (0, _.bG)([j.A], () => j.A.isTyping(i.id, a.id)),
            c = (0, _.bG)([H.default], () => H.default.getCurrentUser()),
            d = (0, _.bG)([V.A], () => (null != t ? V.A.getRole(i.guild_id, t)?.name : void 0), [i, t]),
            f = (0, P.r)({ user: a, guildId: i.guild_id });
        return (0, r.jsx)(en, { ...n, ...o, isTyping: l, currentUser: c, colorRoleName: d, nameplate: f });
    }),
    ei = i.memo(function (e) {
        let { id: t, title: a, count: s, guildId: o, className: l } = e,
            u = (0, x.$7)({ roleId: t, guildId: o, size: 16 }),
            c = (0, _.bG)([G.default], () => (null == s ? null : new Intl.NumberFormat(G.default.locale).format(s)), [
                s,
            ]),
            d = i.useCallback(
                (e) => {
                    u?.src != null &&
                        (0, h.L3)(e, async () => {
                            let { default: e } = await n.e("33743").then(n.bind(n, 455538));
                            return (t) => (0, r.jsx)(e, { ...t, imageUrl: u.src });
                        });
                },
                [u?.src],
            );
        return t === q.clD.UNKNOWN
            ? (0, r.jsx)("div", { className: l, children: (0, r.jsx)("div", { className: Z.k1 }) })
            : (0, r.jsxs)(D.A, {
                  className: l,
                  children: [
                      (0, r.jsx)(f.AC4, {
                          children: null == s ? a : X.intl.format(X.t.Uaqbke, { title: a, count: s }),
                      }),
                      (0, r.jsxs)("div", {
                          className: Z.CN,
                          "aria-hidden": !0,
                          children: [
                              null != u
                                  ? (0, r.jsx)("span", {
                                        onContextMenu: d,
                                        children: (0, r.jsx)(M.A, { className: Z.UT, ...u }),
                                    })
                                  : null,
                              (0, r.jsx)("span", { className: Z.iy, children: a }),
                              null == c ? null : (0, r.jsxs)("span", { children: ["\xa0— ", c] }),
                          ],
                      }),
                  ],
              });
    });
function ea(e) {
    let { index: t } = e,
        n = (0, u.rm)(`${t}`);
    return (0, r.jsx)(E.A, { itemProps: n });
}
class es extends i.Component {
    _list = null;
    _areActivitiesExperimentallyHidden = !1;
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
        this.updateSubscription(),
            this.trackMemberListViewed(),
            (this._areActivitiesExperimentallyHidden = (0, C.M)("ChannelMembers"));
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
        if ((0, b.l)(s)) return (0, i.createElement)(b.A, { ...s, key: `section-${t}` });
        if (0 === t) {
            let { key: e } = s;
            return (0, r.jsx)(
                k.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: et,
                    children: (0, i.createElement)(ei, {
                        ...s,
                        key: `section-${e}`,
                        guildId: a.guild_id,
                        className: Z.lL,
                    }),
                },
                `section-${t}`,
            );
        }
        return (0, i.createElement)(ei, { ...s, key: `section-${t}`, guildId: a.guild_id, className: Z.lL });
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
            if (null != t && t.type === F.S9.CONTENT_INVENTORY) {
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
            { channel: a } = this.props,
            s = this.getRowProps(e);
        if (null != s) {
            if (s.type === F.S9.MEMBER && "user" in s) {
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
                } = s;
                return (0, r.jsx)(
                    er,
                    {
                        colorString: e,
                        colorStrings: t,
                        colorRoleId: n,
                        user: o,
                        status: l,
                        isOwner: u,
                        nick: _,
                        activities: this._areActivitiesExperimentallyHidden ? [] : f,
                        applicationStream: h,
                        channel: a,
                        guildId: a.guild_id,
                        premiumSince: p,
                        isMobileOnline: c,
                        isVROnline: d,
                        index: i,
                    },
                    `member-${s.user.id}`,
                );
            }
            if (s.type === F.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${s.entry.id}`;
                null != s.entry.original_id && (e += `-${s.entry.original_id}`);
                let t = this.getFirstApplicationIdOccurrences().has(s.entry.id);
                return (0, r.jsx)(
                    R.Ay,
                    { ...s, channel: this.props.channel, index: i, isFirstApplicationOccurrence: t },
                    e,
                );
            }
            if (s.type === F.S9.HIDDEN_CONTENT_INVENTORY) return (0, r.jsx)(N.A, {}, "content-inventory-hidden-entry");
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
        let e = this.props.groups[O.f];
        if ((0, b.l)(e)) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: t } = this.props;
        if (null != e) {
            let { rows: n } = this.props,
                r = e.index;
            return function (e, i) {
                if (e === O.f) {
                    let e = n[r + 1 + i];
                    return (0, R.h9)(e);
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
            a = Math.max(0, t - Math.max(0, i - r)),
            s = Math.floor(a / n);
        return { height: a, rowHeight: n, rowsVisible: s, y: Math.max(0, r - i) };
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
        (0, p.NJ)({ guildId: e.guild_id, channelId: e.id, y: n, height: r, rowHeight: t });
    }, 50);
    trackMemberListViewed = () => {
        if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
        let e = this._list?.getItems(),
            { rowsVisible: t } = this.getDimensions();
        if (void 0 === t || 0 === t || null == e) return;
        this.hasContentFeed() && (e = e.filter((e) => e.section !== O.f));
        let n = e
            .map((e) => this.getRowProps(e))
            .slice(0, t + 1)
            .filter(K.Vq);
        if (0 === n.length) return;
        let r = n.reduce(
            (e, t) => (
                t.type !== F.S9.MEMBER ||
                    (e.num_users_visible++,
                    t.isMobileOnline && e.num_users_visible_with_mobile_indicator++,
                    null != t.activities &&
                        t.activities.length > 0 &&
                        (e.num_users_visible_with_activity++,
                        t.activities.some((e) => e.type === q.$pd.PLAYING) && e.num_users_visible_with_game_activity++),
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
            T.Ay.trackWithMetadata(q.HAw.MEMBER_LIST_VIEWED, { ...r });
    };
    render() {
        let { groups: e, listId: t, channel: n, sectionHeight: i } = this.props;
        return (0, r.jsx)(f.skg, {
            children: (a) =>
                (0, r.jsx)(L.V0, {
                    children: (o) =>
                        (0, r.jsx)("aside", {
                            className: s()(Z.yg, Z.ML),
                            "aria-labelledby": o,
                            children: (0, r.jsx)(f.Fmo, {
                                component: (0, r.jsx)(f.AC4, {
                                    children: (0, r.jsx)(f.H, {
                                        id: o,
                                        children: X.intl.format(X.t.JBQxV6, { channel: n.name }),
                                    }),
                                }),
                                children: (0, r.jsx)(u.PR, {
                                    children: (n) => {
                                        let { ref: o, role: l, ...u } = n;
                                        return (0, r.jsx)(
                                            f.B8B,
                                            {
                                                innerRole: l,
                                                innerAriaLabel: X.intl.string(X.t["9Oq93m"]),
                                                ref: (e) => {
                                                    (this._list = e),
                                                        (this.props.listRef.current = e),
                                                        (o.current = e?.getScrollerNode() ?? null);
                                                },
                                                className: s()(Z.ol, { [Z.Ij]: d.Fr }),
                                                paddingTop: 0,
                                                sectionHeight: i,
                                                rowHeight: this.getRowHeightComputer(),
                                                renderSection: this.renderSection,
                                                renderRow: this.renderRow,
                                                sections: e.map((e) => e.count),
                                                onScroll: this.handleScroll,
                                                fade: !0,
                                                ...u,
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
function eo(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: a } = (0, y.Ay)(I.A.MEMBER_LIST),
        o = (0, _.bG)([A.A], () => A.A.keyboardModeEnabled),
        l = (0, _.cf)([F.Ay], () => F.Ay.getProps(t.guild_id, t.id)),
        {
            rows: d,
            groups: h,
            version: p,
            updateMaxRowSeen: g,
        } = (0, O.s)({ memberStoreProps: l, channelId: t.id, guildId: t.guild_id }),
        E = i.useRef(null),
        T = J + ((0, f.WHe)("lg") + (0, f.WHe)("xxs")),
        S = ee,
        v = i.useCallback(
            (e, t) => {
                let n = E.current;
                if (null == n) return;
                let r = parseInt(t, 10),
                    [i, a] = n.getSectionRowFromIndex(r),
                    s = 0 === i && 0 === a ? S : 0;
                n.scrollToIndex({
                    section: i,
                    row: a,
                    padding: s,
                    callback: () => {
                        requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                    },
                });
            },
            [S],
        ),
        C = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = E.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        b = i.useCallback(
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
        N = (0, c.Ay)({ id: `members-${t.id}`, setFocus: v, isEnabled: o, scrollToStart: C, scrollToEnd: b });
    return (0, r.jsx)(y.f5, {
        value: a,
        children: (0, r.jsx)("div", {
            className: s()(Z.kL, n),
            children: (0, r.jsx)(u.hD, {
                navigator: N,
                children: (0, r.jsx)(es, {
                    ...e,
                    ...l,
                    version: p,
                    groups: h,
                    rows: d,
                    listRef: E,
                    updateMaxContentFeedRowSeen: g,
                    sectionHeight: T,
                    rowHeight: S,
                }),
            }),
        }),
    });
}
function el(e) {
    let { channel: t, className: n } = e,
        a = i.useDeferredValue(t),
        s = (0, S.p)({ location: I.A.MEMBER_LIST });
    return i.useMemo(
        () =>
            s
                ? (0, r.jsx)(v.r$, { children: (0, r.jsx)(eo, { channel: a, className: n }) })
                : (0, r.jsx)(eo, { channel: a, className: n }),
        [s, a, n],
    );
}
