n.d(t, {
    A: () => ed,
    Y: () => eo,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    c = n(837381),
    u = n(884362),
    d = n(607399),
    f = n(311907),
    p = n(397927),
    _ = n(442433),
    h = n(361610),
    m = n(414798),
    g = n(110574),
    E = n(775602),
    b = n(793574),
    y = n(58149),
    O = n(688810),
    A = n(122997),
    v = n(276055),
    S = n(83974),
    I = n(420706),
    T = n(750770),
    C = n(485947),
    N = n(915089),
    R = n(509536),
    w = n(201275),
    P = n(111864),
    D = n(657048),
    x = n(728321),
    L = n(342296),
    j = n(773669),
    M = n(963307),
    k = n(317525),
    U = n(309010),
    G = n(741961),
    V = n(287809),
    F = n(977997),
    B = n(203982),
    H = n(403362),
    Y = n(427262),
    W = n(837921),
    K = n(652215),
    z = n(985018),
    q = n(701939);
function X(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                X(e, t, n[t]);
            });
    }
    return e;
}
function Q(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function $(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function J(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = ee(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function ee(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let et = W.Ay.getEnableHardwareAcceleration(),
    en = 18,
    er = 42,
    ei = {
        origin: {
            x: 38,
            y: 11,
        },
        targetWidth: 232,
        targetHeight: 40,
        offset: {
            x: 0,
            y: 0,
        },
    },
    ea = i.memo(function (e) {
        let {
                colorString: t,
                colorStrings: a,
                colorRoleName: s,
                colorRoleId: o,
                isOwner: l,
                nick: c,
                user: u,
                currentUser: f,
                activities: p,
                applicationStream: h,
                status: E,
                channel: b,
                guildId: y,
                isTyping: O,
                isMobileOnline: A,
                premiumSince: v,
                nameplate: S,
            } = e,
            I = J(e, [
                "colorString",
                "colorStrings",
                "colorRoleName",
                "colorRoleId",
                "isOwner",
                "nick",
                "user",
                "currentUser",
                "activities",
                "applicationStream",
                "status",
                "channel",
                "guildId",
                "isTyping",
                "isMobileOnline",
                "premiumSince",
                "nameplate",
            ]),
            T = i.useRef(null),
            [C, N] = i.useState(!1),
            w = null != v ? new Date(v) : null,
            P = i.useCallback(
                (e) => {
                    (0, _.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                                n.e("97262"),
                                n.e("29534"),
                                n.e("33818"),
                                n.e("55296"),
                                n.e("84841"),
                                n.e("86246"),
                            ]).then(n.bind(n, 107632)),
                            t = F.A.isInChannel(U.A.getVoiceChannelId(), u.id);
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                $(Z({}, n), {
                                    user: u,
                                    guildId: y,
                                    channel: b,
                                    showMediaItems: t,
                                }),
                            );
                    });
                },
                [u, y, b],
            ),
            D = i.useCallback(() => {
                let e = "@".concat(Y.Ay.getUserTag(u, { decoration: "never" })),
                    t = "<@".concat(u.id, ">");
                B._.dispatch(K.jej.TEXTAREA_FOCUS, { channelId: b.id }),
                    B._.dispatchToLastSubscribed(K.jej.INSERT_TEXT, {
                        plainText: e,
                        rawText: t,
                    }),
                    m.A.startTyping(b.id);
            }, [u, b.id]),
            x = i.useCallback(
                (e) => {
                    null != y &&
                        (e.stopPropagation(),
                        (0, R.K)({
                            guildId: y,
                            location: {
                                section: K.JJy.MEMBER_LIST,
                                object: K.ZSU.BOOST_GEM_ICON,
                            },
                        }));
                },
                [y],
            );
        return (0, r.jsx)(L.A, {
            targetElementRef: T,
            user: u,
            guildId: y,
            channelId: b.id,
            roleId: o,
            position: d.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: D,
            shouldShow: C,
            onRequestClose: () => {
                N(!1);
            },
            children: (e) => {
                let { onClick: n, onMouseDown: i } = e,
                    o = J(e, ["onClick", "onMouseDown"]);
                return (0, r.jsx)(
                    g.A,
                    Z(
                        {
                            ref: T,
                            className: q.Dc,
                            onContextMenu: P,
                            shouldAnimateStatus: et,
                            user: u,
                            currentUser: f,
                            nick: c,
                            status: E,
                            activities: p,
                            applicationStream: h,
                            isOwner: l,
                            premiumSince: w,
                            colorString: t,
                            colorStrings: a,
                            colorRoleName: s,
                            isTyping: O,
                            channel: b,
                            guildId: y,
                            isMobile: A,
                            onClickPremiumGuildIcon: x,
                            selected: C,
                            itemProps: I,
                            nameplate: S,
                            onClick: (e) => {
                                e.shiftKey ? null == D || D() : N((e) => !e);
                            },
                            onMouseDown: (e) => {
                                C ? e.stopPropagation() : null == i || i(e);
                            },
                        },
                        o,
                    ),
                );
            },
        });
    }),
    es = i.memo(function (e) {
        let { colorRoleId: t } = e,
            n = J(e, ["colorRoleId"]),
            { channel: i, user: a, index: s } = e,
            o = (0, c.rm)("".concat(s)),
            l = (0, f.bG)([G.A], () => G.A.isTyping(i.id, a.id)),
            u = (0, f.bG)([V.default], () => V.default.getCurrentUser()),
            d = (0, f.bG)([k.A], () => {
                var e;
                return null != t ? (null == (e = k.A.getRole(i.guild_id, t)) ? void 0 : e.name) : void 0;
            }, [i, t]),
            p = (0, P.r)({
                user: a,
                guildId: i.guild_id,
            });
        return (0, r.jsx)(
            ea,
            $(Z({}, n, o), {
                isTyping: l,
                currentUser: u,
                colorRoleName: d,
                nameplate: p,
            }),
        );
    }),
    eo = i.memo(function (e) {
        let { id: t, title: a, count: s, guildId: o, className: l } = e,
            c = (0, w.$7)({
                roleId: t,
                guildId: o,
                size: 16,
            }),
            u = (0, f.bG)([j.default], () => (null == s ? null : new Intl.NumberFormat(j.default.locale).format(s)), [
                s,
            ]),
            d = i.useCallback(
                (e) => {
                    (null == c ? void 0 : c.src) != null &&
                        (0, _.L3)(e, async () => {
                            let { default: e } = await n.e("33743").then(n.bind(n, 455538));
                            return (t) => (0, r.jsx)(e, $(Z({}, t), { imageUrl: c.src }));
                        });
                },
                [null == c ? void 0 : c.src],
            );
        return t === K.clD.UNKNOWN
            ? (0, r.jsx)("div", {
                  className: l,
                  children: (0, r.jsx)("div", { className: q.k1 }),
              })
            : (0, r.jsxs)(C.A, {
                  className: l,
                  children: [
                      (0, r.jsx)(p.AC4, {
                          children:
                              null == s
                                  ? a
                                  : z.intl.format(z.t.Uaqbke, {
                                        title: a,
                                        count: s,
                                    }),
                      }),
                      (0, r.jsxs)("div", {
                          className: q.CN,
                          "aria-hidden": !0,
                          children: [
                              null != c
                                  ? (0, r.jsx)("span", {
                                        onContextMenu: d,
                                        children: (0, r.jsx)(D.A, Z({ className: q.UT }, c)),
                                    })
                                  : null,
                              (0, r.jsx)("span", {
                                  className: q.iy,
                                  children: a,
                              }),
                              null == u
                                  ? null
                                  : (0, r.jsxs)("span", {
                                        children: ["\xA0\u2014 ", u],
                                    }),
                          ],
                      }),
                  ],
              });
    });
function el(e) {
    let { index: t } = e,
        n = (0, c.rm)("".concat(t));
    return (0, r.jsx)(g.A, { itemProps: n });
}
class ec extends i.Component {
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
            (this._areActivitiesExperimentallyHidden = (0, A.M)("ChannelMembers"));
    }
    componentDidUpdate(e) {
        e.channel.id !== this.props.channel.id && this.updateSubscription(),
            this.trackMemberListViewed(),
            this.updateMaxContentFeedRowSeen();
    }
    getContentFeedAdjustedDimensions(e) {
        let { height: t, rowHeight: n, y: r } = e,
            i = this.getContentFeedHeight(),
            a = Math.max(0, t - Math.max(0, i - r)),
            s = Math.floor(a / n);
        return {
            height: a,
            rowHeight: n,
            rowsVisible: s,
            y: Math.max(0, r - i),
        };
    }
    getDimensions() {
        let e = this._list;
        if (null == e)
            return {
                y: 0,
                height: 0,
                rowHeight: 0,
            };
        let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            { rowHeight: r } = this.props,
            i = Math.floor(t / r);
        return this.getContentFeedAdjustedDimensions({
            height: t,
            rowHeight: r,
            rowsVisible: i,
            y: n,
        });
    }
    render() {
        let { groups: e, listId: t, channel: n, sectionHeight: i } = this.props;
        return (0, r.jsx)(p.skg, {
            children: (a) =>
                (0, r.jsx)(N.V0, {
                    children: (o) =>
                        (0, r.jsx)("aside", {
                            className: s()(q.yg, q.ML),
                            "aria-labelledby": o,
                            children: (0, r.jsx)(p.Fmo, {
                                component: (0, r.jsx)(p.AC4, {
                                    children: (0, r.jsx)(p.H, {
                                        id: o,
                                        children: z.intl.format(z.t.JBQxV6, { channel: n.name }),
                                    }),
                                }),
                                children: (0, r.jsx)(c.PR, {
                                    children: (n) => {
                                        let { ref: o, role: l } = n,
                                            c = J(n, ["ref", "role"]);
                                        return (0, r.jsx)(
                                            p.B8B,
                                            Z(
                                                {
                                                    innerRole: l,
                                                    innerAriaLabel: z.intl.string(z.t["9Oq93m"]),
                                                    ref: (e) => {
                                                        var t;
                                                        (this._list = e),
                                                            (this.props.listRef.current = e),
                                                            (o.current =
                                                                null != (t = null == e ? void 0 : e.getScrollerNode())
                                                                    ? t
                                                                    : null);
                                                    },
                                                    className: s()(q.ol, { [q.Ij]: d.Fr }),
                                                    paddingTop: 0,
                                                    sectionHeight: i,
                                                    rowHeight: this.getRowHeightComputer(),
                                                    renderSection: this.renderSection,
                                                    renderRow: this.renderRow,
                                                    sections: e.map((e) => e.count),
                                                    onScroll: this.handleScroll,
                                                    fade: !0,
                                                },
                                                c,
                                                a,
                                            ),
                                            t,
                                        );
                                    },
                                }),
                            }),
                        }),
                }),
        });
    }
    constructor(...e) {
        super(...e),
            X(this, "_list", null),
            X(this, "_areActivitiesExperimentallyHidden", !1),
            X(this, "_firstApplicationIdOccurrences", null),
            X(this, "_lastRowsVersion", void 0),
            X(this, "lastReportedAnalyticsChannel", void 0),
            X(this, "setList", (e) => {
                (this._list = e), (this.props.listRef.current = e);
            }),
            X(this, "renderSection", (e) => {
                let { section: t } = e,
                    { groups: n, channel: a } = this.props,
                    s = n[t];
                if ((0, v.l)(s)) return (0, i.createElement)(v.A, $(Z({}, s), { key: "section-".concat(t) }));
                if (0 === t) {
                    let { key: e } = s;
                    return (0, r.jsx)(
                        x.A,
                        {
                            tutorialId: "whos-online",
                            position: "left",
                            inlineSpecs: ei,
                            children: (0, i.createElement)(
                                eo,
                                $(Z({}, s), {
                                    key: "section-".concat(e),
                                    guildId: a.guild_id,
                                    className: q.lL,
                                }),
                            ),
                        },
                        "section-".concat(t),
                    );
                }
                return (0, i.createElement)(
                    eo,
                    $(Z({}, s), {
                        key: "section-".concat(t),
                        guildId: a.guild_id,
                        className: q.lL,
                    }),
                );
            }),
            X(this, "getRowProps", (e) => {
                let { groups: t, rows: n } = this.props,
                    r = t[e.section];
                if (null == r) return null;
                let { index: i } = r;
                return null == i || "row" !== e.type ? null : n[i + 1 + e.row];
            }),
            X(this, "getFirstApplicationIdOccurrences", () => {
                let { rows: e, version: t } = this.props;
                if (null != this._firstApplicationIdOccurrences && this._lastRowsVersion === t)
                    return this._firstApplicationIdOccurrences;
                let n = new Set(),
                    r = new Set();
                for (let t of e)
                    if (null != t && t.type === M.S9.CONTENT_INVENTORY) {
                        let { entry: e } = t;
                        if ("application_id" in e.extra && null != e.extra.application_id) {
                            let t = e.extra.application_id;
                            n.has(t) || (n.add(t), r.add(e.id));
                        }
                    }
                return (this._firstApplicationIdOccurrences = r), (this._lastRowsVersion = t), r;
            }),
            X(this, "renderRow", (e) => {
                let { section: t, row: n, rowIndex: i } = e,
                    { channel: a } = this.props,
                    s = this.getRowProps(e);
                if (null != s) {
                    if (s.type === M.S9.MEMBER && "user" in s) {
                        let {
                            colorString: e,
                            colorStrings: t,
                            colorRoleId: n,
                            user: o,
                            status: l,
                            isOwner: c,
                            isMobileOnline: u,
                            nick: d,
                            activities: f,
                            applicationStream: p,
                            premiumSince: _,
                        } = s;
                        return (0, r.jsx)(
                            es,
                            {
                                colorString: e,
                                colorStrings: t,
                                colorRoleId: n,
                                user: o,
                                status: l,
                                isOwner: c,
                                nick: d,
                                activities: this._areActivitiesExperimentallyHidden ? [] : f,
                                applicationStream: p,
                                channel: a,
                                guildId: a.guild_id,
                                premiumSince: _,
                                isMobileOnline: u,
                                index: i,
                            },
                            "member-".concat(s.user.id),
                        );
                    }
                    if (s.type === M.S9.CONTENT_INVENTORY) {
                        let e = "content-inventory-".concat(s.entry.id);
                        null != s.entry.original_id && (e += "-".concat(s.entry.original_id));
                        let t = this.getFirstApplicationIdOccurrences().has(s.entry.id);
                        return (0, r.jsx)(
                            I.Ay,
                            $(Z({}, s), {
                                channel: this.props.channel,
                                index: i,
                                isFirstApplicationOccurrence: t,
                            }),
                            e,
                        );
                    }
                    if (s.type === M.S9.HIDDEN_CONTENT_INVENTORY)
                        return (0, r.jsx)(S.A, {}, "content-inventory-hidden-entry");
                }
                return (0, r.jsx)(el, { index: i }, "placeholder-".concat(t, ":").concat(n));
            }),
            X(this, "handleScroll", () => {
                this.updateSubscription(), this.updateMaxContentFeedRowSeen();
            }),
            X(
                this,
                "updateMaxContentFeedRowSeen",
                l().debounce(() => {
                    let e = this._list;
                    if (null == e) return;
                    let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
                        r = n + t - this.props.sectionHeight;
                    this.props.updateMaxContentFeedRowSeen(r);
                }, 50),
            ),
            X(this, "getContentFeedGroup", () => {
                let e = this.props.groups[T.f];
                if ((0, v.l)(e)) return e;
            }),
            X(this, "hasContentFeed", () => null != this.getContentFeedGroup()),
            X(this, "getRowHeightComputer", () => {
                let e = this.getContentFeedGroup(),
                    { rowHeight: t } = this.props;
                if (null != e) {
                    let { rows: n } = this.props,
                        r = e.index;
                    return function (e, i) {
                        if (e === T.f) {
                            let e = n[r + 1 + i];
                            return (0, I.h9)(e);
                        }
                        return t;
                    };
                }
                return t;
            }),
            X(this, "getContentFeedHeight", () => {
                let e = this.getContentFeedGroup();
                return null != e ? e.feedHeight + this.props.sectionHeight : 0;
            }),
            X(
                this,
                "updateSubscription",
                l().debounce(() => {
                    if (null == this._list) return;
                    let { channel: e } = this.props,
                        { rowHeight: t, y: n, height: r } = this.getDimensions();
                    (0, h.NJ)({
                        guildId: e.guild_id,
                        channelId: e.id,
                        y: n,
                        height: r,
                        rowHeight: t,
                    });
                }, 50),
            ),
            X(this, "trackMemberListViewed", () => {
                var e;
                if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
                let t = null == (e = this._list) ? void 0 : e.getItems(),
                    { rowsVisible: n } = this.getDimensions();
                if (void 0 === n || 0 === n || null == t) return;
                this.hasContentFeed() && (t = t.filter((e) => e.section !== T.f));
                let r = t
                    .map((e) => this.getRowProps(e))
                    .slice(0, n + 1)
                    .filter(H.Vq);
                if (0 === r.length) return;
                let i = r.reduce(
                    (e, t) => {
                        var n;
                        return (
                            t.type !== M.S9.MEMBER ||
                                (e.num_users_visible++,
                                t.isMobileOnline && e.num_users_visible_with_mobile_indicator++,
                                null != t.activities &&
                                    t.activities.length > 0 &&
                                    (e.num_users_visible_with_activity++,
                                    t.activities.some((e) => e.type === K.$pd.PLAYING) &&
                                        e.num_users_visible_with_game_activity++),
                                null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++,
                                (null == (n = t.user.collectibles) ? void 0 : n.nameplate) != null &&
                                    e.num_users_visible_with_nameplate++),
                            e
                        );
                    },
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
                    y.Ay.trackWithMetadata(K.HAw.MEMBER_LIST_VIEWED, Z({}, i));
            });
    }
}
function eu(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: a } = (0, O.Ay)(b.A.MEMBER_LIST),
        o = (0, f.bG)([E.A], () => E.A.keyboardModeEnabled),
        l = (0, f.cf)([M.Ay], () => M.Ay.getProps(t.guild_id, t.id)),
        {
            rows: d,
            groups: _,
            version: h,
            updateMaxRowSeen: m,
        } = (0, T.s)({
            memberStoreProps: l,
            channelId: t.id,
            guildId: t.guild_id,
        }),
        g = i.useRef(null),
        y = en + ((0, p.WHe)("lg") + (0, p.WHe)("xxs")),
        A = er,
        v = i.useCallback(
            (e, t) => {
                let n = g.current;
                if (null == n) return;
                let r = parseInt(t, 10),
                    [i, a] = n.getSectionRowFromIndex(r),
                    s = 0 === i && 0 === a ? A : 0;
                n.scrollToIndex({
                    section: i,
                    row: a,
                    padding: s,
                    callback: () => {
                        requestAnimationFrame(() => {
                            var t;
                            return null == (t = document.querySelector(e)) ? void 0 : t.focus({ preventScroll: !0 });
                        });
                    },
                });
            },
            [A],
        ),
        S = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = g.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        I = i.useCallback(
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
        C = (0, u.Ay)({
            id: "members-".concat(t.id),
            setFocus: v,
            isEnabled: o,
            scrollToStart: S,
            scrollToEnd: I,
        });
    return (0, r.jsx)(O.f5, {
        value: a,
        children: (0, r.jsx)("div", {
            className: s()(q.kL, n),
            children: (0, r.jsx)(c.hD, {
                navigator: C,
                children: (0, r.jsx)(
                    ec,
                    $(Z({}, e, l), {
                        version: h,
                        groups: _,
                        rows: d,
                        listRef: g,
                        updateMaxContentFeedRowSeen: m,
                        sectionHeight: y,
                        rowHeight: A,
                    }),
                ),
            }),
        }),
    });
}
function ed(e) {
    let { channel: t, className: n } = e,
        a = i.useDeferredValue(t);
    return i.useMemo(
        () =>
            (0, r.jsx)(eu, {
                channel: a,
                className: n,
            }),
        [a, n],
    );
}
