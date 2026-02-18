"use strict";
n.d(t, { A: () => ea, Y: () => en });
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
    f = n(397927),
    p = n(442433),
    h = n(361610),
    m = n(414798),
    E = n(110574),
    g = n(775602),
    A = n(793574),
    I = n(58149),
    T = n(688810),
    S = n(941726),
    y = n(122997),
    v = n(276055),
    N = n(83974),
    C = n(420706),
    b = n(750770),
    R = n(485947),
    O = n(915089),
    D = n(509536),
    L = n(201275),
    w = n(111864),
    x = n(657048),
    M = n(728321),
    P = n(342296),
    k = n(773669),
    U = n(963307),
    G = n(317525),
    F = n(309010),
    V = n(741961),
    B = n(287809),
    H = n(977997),
    j = n(203982),
    Y = n(403362),
    W = n(427262),
    K = n(837921),
    z = n(652215),
    $ = n(985018),
    q = n(701939);
let Z = K.Ay.getEnableHardwareAcceleration(),
    X = 18,
    Q = 42,
    J = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    ee = i.memo(function (e) {
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
                status: g,
                channel: A,
                guildId: I,
                isTyping: T,
                isMobileOnline: S,
                isVROnline: y,
                premiumSince: v,
                nameplate: N,
                ...C
            } = e,
            b = i.useRef(null),
            [R, O] = i.useState(!1),
            L = null != v ? new Date(v) : null,
            w = i.useCallback(
                (e) => {
                    (0, p.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                                n.e("41927"),
                                n.e("97262"),
                                n.e("3795"),
                                n.e("42128"),
                                n.e("97283"),
                                n.e("84841"),
                                n.e("82669"),
                            ]).then(n.bind(n, 107632)),
                            t = H.A.isInChannel(F.A.getVoiceChannelId(), c.id);
                        return (n) => (0, r.jsx)(e, { ...n, user: c, guildId: I, channel: A, showMediaItems: t });
                    });
                },
                [c, I, A],
            ),
            x = i.useCallback(() => {
                let e = `@${W.Ay.getUserTag(c, { decoration: "never" })}`,
                    t = `<@${c.id}>`;
                j._.dispatch(z.jej.TEXTAREA_FOCUS, { channelId: A.id }),
                    j._.dispatchToLastSubscribed(z.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    m.A.startTyping(A.id);
            }, [c, A.id]),
            M = i.useCallback(
                (e) => {
                    null != I &&
                        (e.stopPropagation(),
                        (0, D.K)({
                            guildId: I,
                            location: { section: z.JJy.MEMBER_LIST, object: z.ZSU.BOOST_GEM_ICON },
                        }));
                },
                [I],
            );
        return (0, r.jsx)(P.A, {
            targetElementRef: b,
            user: c,
            guildId: I,
            channelId: A.id,
            roleId: o,
            position: d.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: x,
            shouldShow: R,
            onRequestClose: () => {
                O(!1);
            },
            children: (e) => {
                let { onClick: n, onMouseDown: i, ...o } = e;
                return (0, r.jsx)(E.A, {
                    ref: b,
                    className: q.Dc,
                    onContextMenu: w,
                    shouldAnimateStatus: Z,
                    user: c,
                    currentUser: _,
                    nick: u,
                    status: g,
                    activities: f,
                    applicationStream: h,
                    isOwner: l,
                    premiumSince: L,
                    colorString: t,
                    colorStrings: s,
                    colorRoleName: a,
                    isTyping: T,
                    channel: A,
                    guildId: I,
                    isMobile: S,
                    isVR: y,
                    onClickPremiumGuildIcon: M,
                    selected: R,
                    itemProps: C,
                    nameplate: N,
                    onClick: (e) => {
                        e.shiftKey ? x?.() : O((e) => !e);
                    },
                    onMouseDown: (e) => {
                        R ? e.stopPropagation() : i?.(e);
                    },
                    ...o,
                });
            },
        });
    }),
    et = i.memo(function (e) {
        let { colorRoleId: t, ...n } = e,
            { channel: i, user: s, index: a } = e,
            o = (0, u.rm)(`${a}`),
            l = (0, _.bG)([V.A], () => V.A.isTyping(i.id, s.id)),
            c = (0, _.bG)([B.default], () => B.default.getCurrentUser()),
            d = (0, _.bG)([G.A], () => (null != t ? G.A.getRole(i.guild_id, t)?.name : void 0), [i, t]),
            f = (0, w.r)({ user: s, guildId: i.guild_id });
        return (0, r.jsx)(ee, { ...n, ...o, isTyping: l, currentUser: c, colorRoleName: d, nameplate: f });
    }),
    en = i.memo(function (e) {
        let { id: t, title: s, count: a, guildId: o, className: l } = e,
            u = (0, L.$7)({ roleId: t, guildId: o, size: 16 }),
            c = (0, _.bG)([k.default], () => (null == a ? null : new Intl.NumberFormat(k.default.locale).format(a)), [
                a,
            ]),
            d = i.useCallback(
                (e) => {
                    u?.src != null &&
                        (0, p.L3)(e, async () => {
                            let { default: e } = await n.e("33743").then(n.bind(n, 455538));
                            return (t) => (0, r.jsx)(e, { ...t, imageUrl: u.src });
                        });
                },
                [u?.src],
            );
        return t === z.clD.UNKNOWN
            ? (0, r.jsx)("div", { className: l, children: (0, r.jsx)("div", { className: q.k1 }) })
            : (0, r.jsxs)(R.A, {
                  className: l,
                  children: [
                      (0, r.jsx)(f.AC4, {
                          children: null == a ? s : $.intl.format($.t.Uaqbke, { title: s, count: a }),
                      }),
                      (0, r.jsxs)("div", {
                          className: q.CN,
                          "aria-hidden": !0,
                          children: [
                              null != u
                                  ? (0, r.jsx)("span", {
                                        onContextMenu: d,
                                        children: (0, r.jsx)(x.A, { className: q.UT, ...u }),
                                    })
                                  : null,
                              (0, r.jsx)("span", { className: q.iy, children: s }),
                              null == c ? null : (0, r.jsxs)("span", { children: ["\xa0— ", c] }),
                          ],
                      }),
                  ],
              });
    });
function er(e) {
    let { index: t } = e,
        n = (0, u.rm)(`${t}`);
    return (0, r.jsx)(E.A, { itemProps: n });
}
class ei extends i.Component {
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
            (this._areActivitiesExperimentallyHidden = (0, y.M)("ChannelMembers"));
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
        if ((0, v.l)(a)) return (0, i.createElement)(v.A, { ...a, key: `section-${t}` });
        if (0 === t) {
            let { key: e } = a;
            return (0, r.jsx)(
                M.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: J,
                    children: (0, i.createElement)(en, {
                        ...a,
                        key: `section-${e}`,
                        guildId: s.guild_id,
                        className: q.lL,
                    }),
                },
                `section-${t}`,
            );
        }
        return (0, i.createElement)(en, { ...a, key: `section-${t}`, guildId: s.guild_id, className: q.lL });
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
            if (null != t && t.type === U.S9.CONTENT_INVENTORY) {
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
            if (a.type === U.S9.MEMBER && "user" in a) {
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
                    et,
                    {
                        colorString: e,
                        colorStrings: t,
                        colorRoleId: n,
                        user: o,
                        status: l,
                        isOwner: u,
                        nick: _,
                        activities: this._areActivitiesExperimentallyHidden ? [] : f,
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
            if (a.type === U.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${a.entry.id}`;
                null != a.entry.original_id && (e += `-${a.entry.original_id}`);
                let t = this.getFirstApplicationIdOccurrences().has(a.entry.id);
                return (0, r.jsx)(
                    C.Ay,
                    { ...a, channel: this.props.channel, index: i, isFirstApplicationOccurrence: t },
                    e,
                );
            }
            if (a.type === U.S9.HIDDEN_CONTENT_INVENTORY) return (0, r.jsx)(N.A, {}, "content-inventory-hidden-entry");
        }
        return (0, r.jsx)(er, { index: i }, `placeholder-${t}:${n}`);
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
        let e = this.props.groups[b.f];
        if ((0, v.l)(e)) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: t } = this.props;
        if (null != e) {
            let { rows: n } = this.props,
                r = e.index;
            return function (e, i) {
                if (e === b.f) {
                    let e = n[r + 1 + i];
                    return (0, C.h9)(e);
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
        (0, h.NJ)({ guildId: e.guild_id, channelId: e.id, y: n, height: r, rowHeight: t });
    }, 50);
    trackMemberListViewed = () => {
        if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
        let e = this._list?.getItems(),
            { rowsVisible: t } = this.getDimensions();
        if (void 0 === t || 0 === t || null == e) return;
        this.hasContentFeed() && (e = e.filter((e) => e.section !== b.f));
        let n = e
            .map((e) => this.getRowProps(e))
            .slice(0, t + 1)
            .filter(Y.Vq);
        if (0 === n.length) return;
        let r = n.reduce(
            (e, t) => (
                t.type !== U.S9.MEMBER ||
                    (e.num_users_visible++,
                    t.isMobileOnline && e.num_users_visible_with_mobile_indicator++,
                    null != t.activities &&
                        t.activities.length > 0 &&
                        (e.num_users_visible_with_activity++,
                        t.activities.some((e) => e.type === z.$pd.PLAYING) && e.num_users_visible_with_game_activity++),
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
            I.Ay.trackWithMetadata(z.HAw.MEMBER_LIST_VIEWED, { ...r });
    };
    render() {
        let { groups: e, listId: t, channel: n, sectionHeight: i } = this.props;
        return (0, r.jsx)(f.skg, {
            children: (s) =>
                (0, r.jsx)(O.V0, {
                    children: (o) =>
                        (0, r.jsx)("aside", {
                            className: a()(q.yg, q.ML),
                            "aria-labelledby": o,
                            children: (0, r.jsx)(f.Fmo, {
                                component: (0, r.jsx)(f.AC4, {
                                    children: (0, r.jsx)(f.H, {
                                        id: o,
                                        children: $.intl.format($.t.JBQxV6, { channel: n.name }),
                                    }),
                                }),
                                children: (0, r.jsx)(u.PR, {
                                    children: (n) => {
                                        let { ref: o, role: l, ...u } = n;
                                        return (0, r.jsx)(
                                            f.B8B,
                                            {
                                                innerRole: l,
                                                innerAriaLabel: $.intl.string($.t["9Oq93m"]),
                                                ref: (e) => {
                                                    (this._list = e),
                                                        (this.props.listRef.current = e),
                                                        (o.current = e?.getScrollerNode() ?? null);
                                                },
                                                className: a()(q.ol, { [q.Ij]: d.Fr }),
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
function es(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: s } = (0, T.Ay)(A.A.MEMBER_LIST),
        o = (0, _.bG)([g.A], () => g.A.keyboardModeEnabled),
        l = (0, _.cf)([U.Ay], () => U.Ay.getProps(t.guild_id, t.id)),
        {
            rows: d,
            groups: p,
            version: h,
            updateMaxRowSeen: m,
        } = (0, b.s)({ memberStoreProps: l, channelId: t.id, guildId: t.guild_id }),
        E = i.useRef(null),
        I = X + ((0, f.WHe)("lg") + (0, f.WHe)("xxs")),
        S = Q,
        y = i.useCallback(
            (e, t) => {
                let n = E.current;
                if (null == n) return;
                let r = parseInt(t, 10),
                    [i, s] = n.getSectionRowFromIndex(r),
                    a = 0 === i && 0 === s ? S : 0;
                n.scrollToIndex({
                    section: i,
                    row: s,
                    padding: a,
                    callback: () => {
                        requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                    },
                });
            },
            [S],
        ),
        v = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = E.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        N = i.useCallback(
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
        C = (0, c.Ay)({ id: `members-${t.id}`, setFocus: y, isEnabled: o, scrollToStart: v, scrollToEnd: N });
    return (0, r.jsx)(T.f5, {
        value: s,
        children: (0, r.jsx)("div", {
            className: a()(q.kL, n),
            children: (0, r.jsx)(u.hD, {
                navigator: C,
                children: (0, r.jsx)(ei, {
                    ...e,
                    ...l,
                    version: h,
                    groups: p,
                    rows: d,
                    listRef: E,
                    updateMaxContentFeedRowSeen: m,
                    sectionHeight: I,
                    rowHeight: S,
                }),
            }),
        }),
    });
}
function ea(e) {
    let { channel: t, className: n } = e,
        s = i.useDeferredValue(t);
    return i.useMemo(() => (0, r.jsx)(S.r$, { children: (0, r.jsx)(es, { channel: s, className: n }) }), [s, n]);
}
