n.d(t, {
    As: () => z,
    ZP: () => ee,
    hC: () => K,
    jd: () => W,
}),
    n(539854),
    n(388685);
var r,
    i,
    l = n(647438),
    o = n(836560),
    a = n(512722),
    s = n.n(a),
    c = n(392711),
    u = n.n(c),
    d = n(570140),
    p = n(904245),
    f = n(45114),
    h = n(607070),
    g = n(81643),
    m = n(974814),
    b = n(622822),
    O = n(853856),
    _ = n(181945),
    y = n(220444),
    j = n(601070),
    v = n(344185),
    C = n(569471),
    x = n(723170),
    E = n(675478),
    S = n(581883),
    I = n(131704),
    P = n(592125),
    N = n(984933),
    w = n(731290),
    Z = n(430824),
    T = n(375954),
    A = n(496675),
    R = n(306680),
    D = n(771845),
    M = n(9156),
    L = n(70956),
    k = n(823379),
    U = n(709054),
    G = n(981631),
    B = n(124368);
function V(e, t, n) {
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
function F(e) {
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
                V(e, t, n[t]);
            });
    }
    return e;
}
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var z =
        (((r = {})[(r.Favorite = 0)] = "Favorite"),
        (r[(r.PrivateChannel = 1)] = "PrivateChannel"),
        (r[(r.HighImportanceMentioned = 2)] = "HighImportanceMentioned"),
        (r[(r.LowImportanceMentioned = 3)] = "LowImportanceMentioned"),
        (r[(r.AllMessagesNotifications = 4)] = "AllMessagesNotifications"),
        (r[(r.GuildChannel = 5)] = "GuildChannel"),
        (r[(r.OldChannel = 6)] = "OldChannel"),
        (r[(r.NoNotifications = 7)] = "NoNotifications"),
        (r[(r.ReallyOldChannel = 8)] = "ReallyOldChannel"),
        r),
    W = (((i = {}).Loading = "loading"), (i.Loaded = "loaded"), (i.Done = "done"), i);
let K = 25;
class Y extends o.EventEmitter {
    loadMore() {
        let { loadState: e, channels: t } = this.state;
        if ("loaded" !== e) return;
        let n = !1,
            r = t.map((e) => {
                if (e.isFullyLoaded || e.deleted || n) return e;
                if (e.collapsed)
                    if (!e.hasLoadedAnything) return H(F({}, e), { hasLoadedAnything: !0 });
                    else return e;
                return (
                    (e = this.populateInitialStateFromStore(e)).isFullyLoaded ||
                        (s()("nsfw" !== e.type, "this channel should already be loaded"),
                        "messages" === e.type && this.loadChannelMessages(e) && (n = !0)),
                    e
                );
            });
        (!n || r.some((e, n) => e !== t[n])) &&
            this.setState({
                channels: r,
                loadState: n ? this.state.loadState : "done",
            });
    }
    populateInitialStateFromStore(e) {
        if ("messages" === e.type) return q(e, !1);
        if ("nsfw" === e.type)
            return H(F({}, e), {
                isFullyLoaded: !0,
                hasLoadedAnything: !0,
            });
        if ("forum" === e.type) {
            let t = v.Z.hasLoaded(e.guildId);
            return H(F({}, e), {
                isFullyLoaded: t,
                hasLoadedAnything: !0,
            });
        }
        (0, k.vE)(e);
    }
    clearScrollToChannelIndex() {
        this.setState({ scrollToChannelIndex: null });
    }
    loadChannelMessages(e) {
        p.Z.clearChannel(e.channelId);
        let t = p.Z.fetchMessages({
            channelId: e.channelId,
            limit: G.AQB,
            jump: {
                messageId: e.oldestReadMessageId,
                flash: !0,
            },
        });
        return (
            null != t &&
            !1 !== t &&
            (this.setState({ loadState: "loading" }),
            t.then(
                (t) => {
                    this.setState({
                        loadState: "loaded",
                        channels: this.updateChannel(e.channelId, (e) => {
                            s()("messages" === e.type, "channel cannot change type");
                            let n = q(e, !0);
                            return (
                                (0 === n.messages.length || n.messages.length === e.messages.length) &&
                                    (n = H(F({}, n), {
                                        hasLoadedAnything: !0,
                                        isFullyLoaded: !0,
                                        hasError: !t,
                                    })),
                                n
                            );
                        }),
                    });
                },
                () => {
                    this.setState({
                        loadState: "loaded",
                        channels: this.updateChannel(e.channelId, (e) => {
                            var t;
                            return (
                                s()("messages" === e.type, "channel cannot change type"),
                                H(F({}, q(e, !0)), {
                                    isFullyLoaded: !0,
                                    hasError: !0,
                                    hasLoadedAnything: !0,
                                    newestUnreadMessageId:
                                        null == (t = e.messages[e.messages.length - 1]) ? void 0 : t.id,
                                })
                            );
                        }),
                    });
                },
            ),
            !0)
        );
    }
    updateChannel(e, t) {
        return this.state.channels.map((n) => (n.channelId === e ? t(n) : n));
    }
    setState(e) {
        for (let t in e)
            if (e[t] !== this.state[t]) {
                (this.state = F({}, this.state, e)), this.emit("change", this.state);
                return;
            }
    }
    constructor(e, t) {
        super(),
            V(this, "state", void 0),
            V(this, "scrollerRef", void 0),
            V(this, "undoStack", void 0),
            V(this, "maybeLoadMore", void 0),
            V(this, "reloadMessages", void 0),
            V(this, "getNumUnreadChannels", void 0),
            V(this, "markChannelRead", void 0),
            V(this, "undoMarkChannelRead", void 0),
            V(this, "markGuildRead", void 0),
            V(this, "deleteChannel", void 0),
            V(this, "markAllRead", void 0),
            V(this, "toggle", void 0),
            V(this, "handleUserGuildSettingsStoreChange", void 0),
            V(this, "handleJoinedThreadsStoreChange", void 0),
            V(this, "handleActiveThreadsStoreChange", void 0),
            (this.state = e),
            (this.scrollerRef = t),
            (this.undoStack = []),
            (this.maybeLoadMore = () => {
                var e;
                let t = null == (e = this.scrollerRef.current) ? void 0 : e.getScrollerState();
                null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 2000 && this.loadMore();
            }),
            (this.reloadMessages = () => {
                this.setState({
                    channels: this.state.channels.map((e) =>
                        "messages" === e.type && e.hasLoadedAnything ? q(e, !1, !0) : e,
                    ),
                });
            }),
            (this.getNumUnreadChannels = () => this.state.channels.length),
            (this.markChannelRead = (e) => {
                let { channelId: t, newestUnreadMessageId: n } = e;
                d.Z.wait(() =>
                    f.In(
                        t,
                        {
                            section: G.jXE.INBOX,
                            object: G.qAy.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                            objectType: G.Qqv.ACK_AUTOMATIC,
                        },
                        !0,
                        void 0,
                        n,
                    ),
                );
                let r = this.state.channels.find((e) => e.channelId === t);
                if ((null != r && this.undoStack.push(r), 1 === this.state.channels.length))
                    return void this.deleteChannel(t);
                this.setState({ channels: this.updateChannel(t, (e) => H(F({}, e), { deleted: !0 })) }),
                    h.Z.useReducedMotion && this.deleteChannel(t),
                    this.maybeLoadMore();
            }),
            (this.undoMarkChannelRead = () => {
                if (0 === this.undoStack.length) return;
                let e = this.undoStack.pop();
                if (null == e) return;
                f.In(
                    e.channelId,
                    {
                        section: G.jXE.INBOX,
                        object: G.qAy.UNDO_MARK_AS_READ,
                        objectType: G.Qqv.ACK_MANUAL,
                    },
                    !0,
                    void 0,
                    e.oldestReadMessageId,
                );
                let t = this.state.channels.findIndex((t) => t.order > e.order),
                    n = [...this.state.channels];
                t < 0 ? n.push(e) : n.splice(t, 0, e),
                    this.setState({
                        scrollToChannelIndex: t,
                        channels: n,
                    });
            }),
            (this.markGuildRead = (e) => {
                d.Z.wait(() => (0, _.Z)([e], G.jXE.INBOX)),
                    this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }),
                    this.maybeLoadMore();
            }),
            (this.deleteChannel = (e) => {
                this.setState({
                    scrollToChannelIndex: u().findIndex(this.state.channels, (t) => t.channelId === e),
                    channels: this.state.channels.filter((t) => t.channelId !== e),
                }),
                    this.maybeLoadMore();
            }),
            (this.markAllRead = () => {
                f.y5(
                    this.state.channels.map((e) => ({
                        channelId: e.channelId,
                        messageId: e.newestUnreadMessageId,
                    })),
                ),
                    this.setState({ channels: [] });
            }),
            (this.toggle = (e) => {
                let { channelId: t, guildId: n } = e,
                    { channels: r, collapsedChannels: i, loadState: l } = this.state,
                    o = u().findIndex(r, (e) => e.channelId === t),
                    a = r[o],
                    s = !a.collapsed;
                (i[t] = s),
                    (0, E.BU)(
                        n,
                        t,
                        (e) => {
                            e.collapsedInInbox = s;
                        },
                        E.fy.FREQUENT_USER_ACTION,
                    ),
                    this.setState({
                        scrollToChannelIndex: o,
                        collapsedChannels: i,
                        loadState: "done" !== l || s || a.isFullyLoaded ? l : "loaded",
                        channels: this.updateChannel(t, (e) => H(F({}, e), { collapsed: s })),
                    }),
                    a.collapsed ? a.isFullyLoaded || this.loadMore() : this.maybeLoadMore();
            }),
            (this.handleUserGuildSettingsStoreChange = () => {
                let e = this.state.channels.filter(
                    (e) => !M.ZP.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId),
                );
                e.length !== this.state.channels.length && this.setState({ channels: e });
            }),
            (this.handleJoinedThreadsStoreChange = () => {
                let e = this.state.channels.filter((e) => !C.Z.isMuted(e.channelId));
                e.length !== this.state.channels.length && this.setState({ channels: e });
            }),
            (this.handleActiveThreadsStoreChange = () => {
                let e = this.state.channels.map((e) => {
                    if ("forum" !== e.type) return e;
                    {
                        if (!e.hasLoadedAnything) return e;
                        let t = v.Z.hasLoaded(e.guildId);
                        return H(F({}, e), {
                            isFullyLoaded: t,
                            hasLoadedAnything: !0,
                        });
                    }
                });
                this.setState({ channels: e });
            });
        for (let t = 0; t < e.channels.length; t++) e.channels[t].order = t;
    }
}
function q(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = T.Z.getMessages(e.channelId),
        l = i
            .toArray()
            .filter(
                (t) =>
                    U.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= U.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && r) return e;
    let o =
            null != i.getAfter(e.oldestReadMessageId) ||
            (null == (n = l[0]) ? void 0 : n.id) === e.oldestUnreadMessageId,
        a = l[l.length - 1],
        s = U.default.compare(null == a ? void 0 : a.id, e.newestUnreadMessageId) >= 0 || l.length >= K;
    return H(F({}, e), {
        messages: l,
        hasLoadedAnything: e.hasLoadedAnything || o || t,
        hasLoadedFirst: e.hasLoadedFirst || o || t,
        isFullyLoaded: e.isFullyLoaded || (o && s) || (t && !i.hasMoreAfter),
    });
}
function X() {
    let e = (function () {
            var e, t;
            let n = {},
                r = null != (t = null == (e = S.Z.settings.guilds) ? void 0 : e.guilds) ? t : {};
            for (let e in r)
                for (let t in r[e].channels) {
                    let i = P.Z.getChannel(t);
                    (t in n && (null == i ? void 0 : i.guild_id) !== e) || (n[t] = r[e].channels[t].collapsedInInbox);
                }
            return n;
        })(),
        t = (function (e) {
            let t = [];
            return (
                P.Z.getSortedPrivateChannels().forEach((n) => Q(e, t, null, n.id)),
                D.ZP.getFlattenedGuildIds().forEach((n) => {
                    if (null == n) return;
                    let r = N.ZP.getSelectableChannelIds(n),
                        i = j.Z.getActiveJoinedUnreadThreadsForGuild(n);
                    r.forEach((r) => {
                        var l;
                        Q(e, t, n, r);
                        let o = null != (l = i[r]) ? l : {};
                        for (let r in o) Q(e, t, n, r);
                    });
                }),
                u().sortBy(t, (e) => e.sortOrder)
            );
        })(e),
        n = u()
            .uniq(t.map((e) => e.guildId))
            .filter(k.lm);
    return (
        d.Z.dispatch({
            type: "INBOX_OPEN",
            guildIds: n,
        }),
        {
            collapsedChannels: e,
            loadState: "loaded",
            channels: t,
            scrollToChannelIndex: null,
        }
    );
}
function Q(e, t, n, r) {
    if (null == r) return;
    let i = P.Z.getChannel(r);
    if (null == i || (!I.Ec.has(i.type) && M.ZP.isGuildOrCategoryOrChannelMuted(n, i.id))) return;
    if (i.isPrivate()) {
        if (0 === R.ZP.getMentionCount(r)) return;
    } else if (!(0, y.d)(i) && 0 === R.ZP.getMentionCount(r)) return;
    if (
        (!i.isPrivate() && !A.Z.can(G.Plq.READ_MESSAGE_HISTORY, i)) ||
        ((0, b.aC)(i) && (0, m.H1)({ location: "unreads-loader" }) && (0, g.sf)())
    )
        return;
    let l = R.ZP.ackMessageId(r);
    if (null == l) {
        let e = Z.Z.getGuild(i.guild_id);
        if (null == e || null == e.joinedAt) return;
        l = U.default.fromTimestamp(e.joinedAt.getTime());
    }
    let o = R.ZP.getOldestUnreadMessageId(r),
        a = R.ZP.lastMessageId(r),
        s = R.ZP.getMentionCount(r),
        c = s > 0 || i.isPrivate();
    if (null == a || U.default.compare(l, a) >= 0) return;
    let u = {
        guildId: n,
        channelId: r,
        oldestReadMessageId: l,
        oldestUnreadMessageId: o,
        newestUnreadMessageId: a,
        collapsed: !0 === e[r],
        hasLoadedAnything: !1,
        hasLoadedFirst: !1,
        isFullyLoaded: !1,
        hasError: !1,
        hasMentionsOrUnreads: c,
        mentionCount: s,
        sortOrder: (function (e, t, n) {
            let r = P.Z.getChannel(t);
            if (O.Z.isFavorite(t)) return 0;
            if (r.isPrivate()) return 1;
            if (R.ZP.getMentionCount(t) > 0) return R.ZP.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = U.default.extractTimestamp(n);
                if (Date.now() - e > $) return 8;
                if (Date.now() - e > J) return 6;
            }
            if (r.isThread()) {
                let e = (0, x.J)(r);
                return e === B.iN.ALL_MESSAGES ? 4 : e === B.iN.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = M.ZP.getChannelMessageNotifications(e, t),
                    r = n === G.bL.NULL ? M.ZP.getMessageNotifications(e) : n;
                return r === G.bL.ALL_MESSAGES ? 4 : r === G.bL.NO_MESSAGES ? 7 : 5;
            }
        })(n, r, a),
        order: 0,
    };
    (0, b.aC)(i) && !w.Z.didAgree(i.guild_id)
        ? t.push(H(F({}, u), { type: "nsfw" }))
        : i.isForumLikeChannel()
          ? t.push(H(F({}, u), { type: "forum" }))
          : t.push(
                H(F({}, u), {
                    type: "messages",
                    messages: [],
                }),
            );
}
let J = 2 * L.Z.Millis.DAY,
    $ = 10 * L.Z.Millis.DAY;
function ee(e) {
    let [t, n] = l.useState(() => new Y(X(), e)),
        [r, i] = l.useState(!1),
        o = l.useRef(Date.now()),
        [a, s] = l.useState(() => X());
    l.useEffect(() => {
        let e = (e) => s(e);
        return (
            t.on("change", e),
            s(t.state),
            () => {
                t.off("change", e);
            }
        );
    }, [t]),
        l.useEffect(() => {
            if (null == a || a.channels.length > 0 || r) return;
            let t = Date.now(),
                l = X();
            0 === l.channels.length || t - o.current < 10 * L.Z.Millis.SECOND
                ? i(!0)
                : ((o.current = Date.now()), n(new Y(l, e)));
        }, [a, r, e]);
    let c = l.useRef(t);
    return (
        l.useLayoutEffect(() => {
            c.current = t;
        }),
        l.useLayoutEffect(() => {
            null == a || a.channels, null == a || a.loadState, c.current.maybeLoadMore();
        }, [null == a ? void 0 : a.channels, null == a ? void 0 : a.loadState]),
        l.useEffect(
            () => (T.Z.addChangeListener(t.reloadMessages), () => T.Z.removeChangeListener(t.reloadMessages)),
            [t.reloadMessages],
        ),
        l.useEffect(
            () => (
                M.ZP.addChangeListener(t.handleUserGuildSettingsStoreChange),
                () => M.ZP.removeChangeListener(t.handleUserGuildSettingsStoreChange)
            ),
            [t],
        ),
        l.useEffect(
            () => (
                C.Z.addChangeListener(t.handleJoinedThreadsStoreChange),
                () => C.Z.removeChangeListener(t.handleJoinedThreadsStoreChange)
            ),
            [t],
        ),
        l.useEffect(
            () => (
                v.Z.addChangeListener(t.handleActiveThreadsStoreChange),
                () => v.Z.removeChangeListener(t.handleActiveThreadsStoreChange)
            ),
            [t],
        ),
        [a, t]
    );
}
