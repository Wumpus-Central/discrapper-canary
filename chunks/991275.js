"use strict";
n.d(t, { A: () => ec, Y: () => es });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(735438),
    o = n.n(a),
    c = n(837381);
if (21552 == n.j) var u = n(884362);
var d = n(607399),
    h = n(311907),
    m = n(140735),
    p = n(312138),
    f = n(707554),
    g = n(475825);
if (21552 == n.j) var _ = n(506309);
var x = n(442433),
    A = n(361610),
    C = n(414798),
    E = n(110574),
    I = n(775602),
    v = n(793574),
    y = n(58149),
    S = n(688810),
    b = n(941726),
    N = n(449582),
    T = n(276055),
    j = n(83974),
    R = n(420706),
    w = n(750770),
    L = n(485947),
    M = n(915089),
    k = n(509536),
    O = n(201275),
    P = n(657048),
    D = n(728321),
    U = n(342296),
    V = n(773669),
    G = n(963307),
    F = n(317525),
    B = n(994500),
    H = n(309010),
    W = n(741961),
    K = n(287809),
    z = n(977997),
    Z = n(203982),
    q = n(403362),
    Y = n(427262),
    J = n(837921),
    $ = n(47167),
    X = n(652215),
    Q = n(985018),
    ee = n(540808);
let et = J.Ay.getEnableHardwareAcceleration(),
    en = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    ei = l.memo(function (e) {
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
                guildId: _,
                isTyping: A,
                isMobileOnline: I,
                isVROnline: v,
                premiumSince: y,
                nameplate: S,
                ...b
            } = e,
            N = l.useRef(null),
            [T, j] = l.useState(!1),
            R = null != y ? new Date(y) : null,
            w = l.useCallback(
                (e) => {
                    (0, x.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                                n.e("41927"),
                                n.e("97262"),
                                n.e("92493"),
                                n.e("93103"),
                                n.e("42128"),
                                n.e("97278"),
                                n.e("35313"),
                                n.e("81653"),
                                n.e("84841"),
                                n.e("63143"),
                            ]).then(n.bind(n, 107632)),
                            t = z.A.isInChannel(H.A.getVoiceChannelId(), u.id);
                        return (n) => (0, i.jsx)(e, { ...n, user: u, guildId: _, channel: g, showMediaItems: t });
                    });
                },
                [u, _, g],
            ),
            L = l.useCallback(() => {
                let e = `@${Y.Ay.getUserTag(u, { decoration: "never" })}`,
                    t = `<@${u.id}>`;
                Z._.dispatch(X.jej.TEXTAREA_FOCUS, { channelId: g.id }),
                    Z._.dispatchToLastSubscribed(X.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    C.A.startTyping(g.id);
            }, [u, g.id]),
            M = l.useCallback(
                (e) => {
                    null != _ &&
                        (e.stopPropagation(),
                        (0, k.K4)({
                            guildId: _,
                            location: { section: X.JJy.MEMBER_LIST, object: X.ZSU.BOOST_GEM_ICON },
                        }));
                },
                [_],
            );
        return (0, i.jsx)(U.A, {
            targetElementRef: N,
            user: u,
            guildId: _,
            channelId: g.id,
            roleId: a,
            position: d.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: L,
            shouldShow: T,
            onRequestClose: () => {
                j(!1);
            },
            children: (e) => {
                let { onClick: n, onMouseDown: l, ...a } = e;
                return (0, i.jsx)(E.A, {
                    ref: N,
                    className: ee.Dc,
                    onContextMenu: w,
                    shouldAnimateStatus: et,
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
                    isTyping: A,
                    channel: g,
                    guildId: _,
                    isMobile: I,
                    isVR: v,
                    onClickPremiumGuildIcon: M,
                    selected: T,
                    itemProps: b,
                    nameplate: S,
                    onClick: (e) => {
                        e.shiftKey ? L?.() : j((e) => !e);
                    },
                    onMouseDown: (e) => {
                        T ? e.stopPropagation() : l?.(e);
                    },
                    ...a,
                });
            },
        });
    }),
    el = l.memo(function (e) {
        let { colorRoleId: t, ...n } = e,
            { channel: l, user: s, index: r } = e,
            a = (0, c.rm)(`${r}`),
            o = (0, h.bG)([W.A], () => W.A.isTyping(l.id, s.id)),
            u = (0, h.bG)([K.default], () => K.default.getCurrentUser()),
            d = (0, h.bG)([F.A], () => (null != t ? F.A.getRole(l.guild_id, t)?.name : void 0), [l, t]),
            m = (0, N.r)({ user: s, guildId: l.guild_id });
        return (0, i.jsx)(ei, { ...n, ...a, isTyping: o, currentUser: u, colorRoleName: d, nameplate: m });
    }),
    es = l.memo(function (e) {
        let { id: t, title: s, count: r, guildId: a, className: o } = e,
            c = (0, O.$7)({ roleId: t, guildId: a, size: 16 }),
            u = (0, h.bG)([V.default], () => (null == r ? null : new Intl.NumberFormat(V.default.locale).format(r)), [
                r,
            ]),
            d = l.useCallback(
                (e) => {
                    c?.src != null &&
                        (0, x.L3)(e, async () => {
                            let { default: e } = await n.e("33743").then(n.bind(n, 455538));
                            return (t) => (0, i.jsx)(e, { ...t, imageUrl: c.src });
                        });
                },
                [c?.src],
            );
        return t === X.clD.UNKNOWN
            ? (0, i.jsx)("div", { className: o, children: (0, i.jsx)("div", { className: ee.k1 }) })
            : (0, i.jsxs)(L.A, {
                  className: o,
                  children: [
                      (0, i.jsx)(m.A, { children: null == r ? s : Q.intl.format(Q.t.Uaqbke, { title: s, count: r }) }),
                      (0, i.jsxs)("div", {
                          className: ee.CN,
                          "aria-hidden": !0,
                          children: [
                              null != c
                                  ? (0, i.jsx)("span", {
                                        onContextMenu: d,
                                        children: (0, i.jsx)(P.A, { className: ee.UT, ...c }),
                                    })
                                  : null,
                              (0, i.jsx)("span", { className: ee.iy, children: s }),
                              null == u ? null : (0, i.jsxs)("span", { children: ["\xa0— ", u] }),
                          ],
                      }),
                  ],
              });
    });
function er(e) {
    let { index: t } = e,
        n = (0, c.rm)(`${t}`);
    return (0, i.jsx)(E.A, { itemProps: n });
}
class ea extends l.Component {
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
        if ((0, T.l)(r)) return (0, l.createElement)(T.A, { ...r, key: `section-${t}` });
        if (0 === t) {
            let { key: e } = r;
            return (0, i.jsx)(
                D.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: en,
                    children: (0, l.createElement)(es, {
                        ...r,
                        key: `section-${e}`,
                        guildId: s.guild_id,
                        className: ee.lL,
                    }),
                },
                `section-${t}`,
            );
        }
        return (0, l.createElement)(es, { ...r, key: `section-${t}`, guildId: s.guild_id, className: ee.lL });
    };
    getRowProps = (e) => {
        let { groups: t, rows: n } = this.props,
            i = t[e.section];
        if (null == i) return null;
        let { index: l } = i;
        return null == l || "row" !== e.type ? null : n[l + 1 + e.row];
    };
    getFirstApplicationIdOccurrences = () => {
        let { rows: e, version: t } = this.props;
        if (null != this._firstApplicationIdOccurrences && this._lastRowsVersion === t)
            return this._firstApplicationIdOccurrences;
        let n = new Set(),
            i = new Set();
        for (let t of e)
            if (null != t && t.type === G.S9.CONTENT_INVENTORY) {
                let { entry: e } = t;
                if ("application_id" in e.extra && null != e.extra.application_id) {
                    let t = e.extra.application_id;
                    n.has(t) || (n.add(t), i.add(e.id));
                }
            }
        return (this._firstApplicationIdOccurrences = i), (this._lastRowsVersion = t), i;
    };
    renderRow = (e) => {
        let { section: t, row: n, rowIndex: l } = e,
            { channel: s } = this.props,
            r = this.getRowProps(e);
        if (null != r) {
            if (r.type === G.S9.MEMBER && "user" in r) {
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
                return (0, i.jsx)(
                    el,
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
                        index: l,
                    },
                    `member-${r.user.id}`,
                );
            }
            if (r.type === G.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${r.entry.id}`;
                null != r.entry.original_id && (e += `-${r.entry.original_id}`);
                let t = this.getFirstApplicationIdOccurrences().has(r.entry.id);
                return (0, i.jsx)(
                    R.Ay,
                    { ...r, channel: this.props.channel, index: l, isFirstApplicationOccurrence: t },
                    e,
                );
            }
            if (r.type === G.S9.HIDDEN_CONTENT_INVENTORY) return (0, i.jsx)(j.A, {}, "content-inventory-hidden-entry");
        }
        return (0, i.jsx)(er, { index: l }, `placeholder-${t}:${n}`);
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
        let e = this.props.groups[w.f];
        if ((0, T.l)(e)) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: t } = this.props;
        if (null != e) {
            let { rows: n } = this.props,
                i = e.index;
            return function (e, l) {
                if (e === w.f) {
                    let e = n[i + 1 + l];
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
        let { height: t, rowHeight: n, y: i } = e,
            l = this.getContentFeedHeight(),
            s = Math.max(0, t - Math.max(0, l - i)),
            r = Math.floor(s / n);
        return { height: s, rowHeight: n, rowsVisible: r, y: Math.max(0, i - l) };
    }
    getDimensions() {
        let e = this._list;
        if (null == e) return { y: 0, height: 0, rowHeight: 0 };
        let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            { rowHeight: i } = this.props,
            l = Math.floor(t / i);
        return this.getContentFeedAdjustedDimensions({ height: t, rowHeight: i, rowsVisible: l, y: n });
    }
    updateSubscription = o().debounce(() => {
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
        this.hasContentFeed() && (e = e.filter((e) => e.section !== w.f));
        let n = e
            .map((e) => this.getRowProps(e))
            .slice(0, t + 1)
            .filter(q.Vq);
        if (0 === n.length) return;
        let i = n.reduce(
            (e, t) => (
                t.type !== G.S9.MEMBER ||
                    (e.num_users_visible++,
                    t.isMobileOnline && e.num_users_visible_with_mobile_indicator++,
                    null != t.activities &&
                        t.activities.length > 0 &&
                        (e.num_users_visible_with_activity++,
                        t.activities.some((e) => e.type === X.$pd.PLAYING) && e.num_users_visible_with_game_activity++),
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
            y.Ay.trackWithMetadata(X.HAw.MEMBER_LIST_VIEWED, { ...i });
    };
    render() {
        let { groups: e, listId: t, channel: n, sectionHeight: l } = this.props;
        return (0, i.jsx)(p.sk, {
            children: (s) =>
                (0, i.jsx)(M.V0, {
                    children: (a) =>
                        (0, i.jsx)("aside", {
                            className: r()(ee.yg, ee.ML),
                            "aria-labelledby": a,
                            children: (0, i.jsx)(f.F, {
                                component: (0, i.jsx)(m.A, {
                                    children: (0, i.jsx)(f.H, {
                                        id: a,
                                        children: Q.intl.format(Q.t.JBQxV6, { channel: (0, $.m1)(n, K.default, B.A) }),
                                    }),
                                }),
                                children: (0, i.jsx)(c.PR, {
                                    children: (n) => {
                                        let { ref: a, role: o, ...c } = n;
                                        return (0, i.jsx)(
                                            g.OZ,
                                            {
                                                innerRole: o,
                                                innerAriaLabel: Q.intl.string(Q.t["9Oq93m"]),
                                                ref: (e) => {
                                                    (this._list = e),
                                                        (this.props.listRef.current = e),
                                                        (a.current = e?.getScrollerNode() ?? null);
                                                },
                                                className: r()(ee.ol, { [ee.Ij]: d.Fr }),
                                                paddingTop: 0,
                                                sectionHeight: l,
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
function eo(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: s } = (0, S.Ay)(v.A.MEMBER_LIST),
        a = (0, h.bG)([I.A], () => I.A.keyboardModeEnabled),
        o = (0, h.cf)([G.Ay], () => G.Ay.getProps(t.guild_id, t.id)),
        {
            rows: d,
            groups: m,
            version: p,
            updateMaxRowSeen: f,
        } = (0, w.s)({ memberStoreProps: o, channelId: t.id, guildId: t.guild_id }),
        g = l.useRef(null),
        x = (0, _.W)("lg") + (0, _.W)("xxs"),
        A = l.useCallback(
            (e, t) => {
                let n = g.current;
                if (null == n) return;
                let i = parseInt(t, 10),
                    [l, s] = n.getSectionRowFromIndex(i);
                n.scrollToIndex({
                    section: l,
                    row: s,
                    padding: 42 * (0 === l && 0 === s),
                    callback: () => {
                        requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                    },
                });
            },
            [42],
        ),
        C = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = g.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        E = l.useCallback(
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
        y = (0, u.Ay)({ id: `members-${t.id}`, setFocus: A, isEnabled: a, scrollToStart: C, scrollToEnd: E });
    return (0, i.jsx)(S.f5, {
        value: s,
        children: (0, i.jsx)("div", {
            className: r()(ee.kL, n),
            children: (0, i.jsx)(c.hD, {
                navigator: y,
                children: (0, i.jsx)(ea, {
                    ...e,
                    ...o,
                    version: p,
                    groups: m,
                    rows: d,
                    listRef: g,
                    updateMaxContentFeedRowSeen: f,
                    sectionHeight: 18 + x,
                    rowHeight: 42,
                }),
            }),
        }),
    });
}
function ec(e) {
    let { channel: t, className: n } = e,
        s = l.useDeferredValue(t);
    return l.useMemo(() => (0, i.jsx)(b.r$, { children: (0, i.jsx)(eo, { channel: s, className: n }) }), [s, n]);
}
