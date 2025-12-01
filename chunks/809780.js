n.d(t, {
    As: () => F,
    ZP: () => X,
    hC: () => H,
    jd: () => V,
}),
    n(539854),
    n(388685);
var r,
    i,
    l = n(473749),
    o = n(836560),
    a = n(512722),
    s = n.n(a),
    c = n(392711),
    u = n.n(c),
    d = n(570140),
    f = n(904245),
    h = n(45114),
    p = n(607070),
    g = n(622822),
    m = n(853856),
    b = n(181945),
    _ = n(220444),
    y = n(601070),
    O = n(344185),
    v = n(569471),
    j = n(723170),
    x = n(675478),
    C = n(581883),
    E = n(131704),
    S = n(592125),
    I = n(984933),
    P = n(430824),
    N = n(375954),
    Z = n(496675),
    w = n(306680),
    T = n(771845),
    A = n(9156),
    R = n(70956),
    D = n(823379),
    L = n(709054),
    M = n(981631),
    k = n(124368);
function G(e, t, n) {
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
function U(e) {
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
                G(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
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
var F =
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
    V = (((i = {}).Loading = "loading"), (i.Loaded = "loaded"), (i.Done = "done"), i);
let H = 25;
class W extends o.EventEmitter {
    loadMore() {
        let { loadState: e, channels: t } = this.state;
        if ("loaded" !== e) return;
        let n = !1,
            r = t.map((e) => {
                if (e.isFullyLoaded || e.deleted || n) return e;
                if (e.collapsed)
                    if (!e.hasLoadedAnything) return B(U({}, e), { hasLoadedAnything: !0 });
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
        if ("messages" === e.type) return z(e, !1);
        if ("nsfw" === e.type)
            return B(U({}, e), {
                isFullyLoaded: !0,
                hasLoadedAnything: !0,
            });
        if ("forum" === e.type) {
            let t = O.Z.hasLoaded(e.guildId);
            return B(U({}, e), {
                isFullyLoaded: t,
                hasLoadedAnything: !0,
            });
        }
        (0, D.vE)(e);
    }
    clearScrollToChannelIndex() {
        this.setState({ scrollToChannelIndex: null });
    }
    loadChannelMessages(e) {
        f.Z.clearChannel(e.channelId);
        let t = f.Z.fetchMessages({
            channelId: e.channelId,
            limit: M.AQB,
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
                            let n = z(e, !0);
                            return (
                                (0 === n.messages.length || n.messages.length === e.messages.length) &&
                                    (n = B(U({}, n), {
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
                                B(U({}, z(e, !0)), {
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
                (this.state = U({}, this.state, e)), this.emit("change", this.state);
                return;
            }
    }
    constructor(e, t) {
        super(),
            G(this, "state", void 0),
            G(this, "scrollerRef", void 0),
            G(this, "undoStack", void 0),
            G(this, "maybeLoadMore", void 0),
            G(this, "reloadMessages", void 0),
            G(this, "getNumUnreadChannels", void 0),
            G(this, "markChannelRead", void 0),
            G(this, "undoMarkChannelRead", void 0),
            G(this, "markGuildRead", void 0),
            G(this, "deleteChannel", void 0),
            G(this, "markAllRead", void 0),
            G(this, "toggle", void 0),
            G(this, "handleUserGuildSettingsStoreChange", void 0),
            G(this, "handleJoinedThreadsStoreChange", void 0),
            G(this, "handleActiveThreadsStoreChange", void 0),
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
                        "messages" === e.type && e.hasLoadedAnything ? z(e, !1, !0) : e,
                    ),
                });
            }),
            (this.getNumUnreadChannels = () => this.state.channels.length),
            (this.markChannelRead = (e) => {
                let { channelId: t, newestUnreadMessageId: n } = e;
                d.Z.wait(() =>
                    h.ack(
                        t,
                        {
                            section: M.jXE.INBOX,
                            object: M.qAy.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                            objectType: M.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                        void 0,
                        n,
                    ),
                );
                let r = this.state.channels.find((e) => e.channelId === t);
                if ((null != r && this.undoStack.push(r), 1 === this.state.channels.length))
                    return void this.deleteChannel(t);
                this.setState({ channels: this.updateChannel(t, (e) => B(U({}, e), { deleted: !0 })) }),
                    p.Z.useReducedMotion && this.deleteChannel(t),
                    this.maybeLoadMore();
            }),
            (this.undoMarkChannelRead = () => {
                if (0 === this.undoStack.length) return;
                let e = this.undoStack.pop();
                if (null == e) return;
                h.ack(
                    e.channelId,
                    {
                        section: M.jXE.INBOX,
                        object: M.qAy.UNDO_MARK_AS_READ,
                        objectType: M.AnalyticsObjectTypes.ACK_MANUAL,
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
                d.Z.wait(() => (0, b.Z)([e], M.jXE.INBOX)),
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
                h.y5(
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
                    (0, x.BU)(
                        n,
                        t,
                        (e) => {
                            e.collapsedInInbox = s;
                        },
                        x.fy.FREQUENT_USER_ACTION,
                    ),
                    this.setState({
                        scrollToChannelIndex: o,
                        collapsedChannels: i,
                        loadState: "done" !== l || s || a.isFullyLoaded ? l : "loaded",
                        channels: this.updateChannel(t, (e) => B(U({}, e), { collapsed: s })),
                    }),
                    a.collapsed ? a.isFullyLoaded || this.loadMore() : this.maybeLoadMore();
            }),
            (this.handleUserGuildSettingsStoreChange = () => {
                let e = this.state.channels.filter(
                    (e) => !A.ZP.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId),
                );
                e.length !== this.state.channels.length && this.setState({ channels: e });
            }),
            (this.handleJoinedThreadsStoreChange = () => {
                let e = this.state.channels.filter((e) => !v.Z.isMuted(e.channelId));
                e.length !== this.state.channels.length && this.setState({ channels: e });
            }),
            (this.handleActiveThreadsStoreChange = () => {
                let e = this.state.channels.map((e) => {
                    if ("forum" !== e.type) return e;
                    {
                        if (!e.hasLoadedAnything) return e;
                        let t = O.Z.hasLoaded(e.guildId);
                        return B(U({}, e), {
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
function z(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = N.Z.getMessages(e.channelId),
        l = i
            .toArray()
            .filter(
                (t) =>
                    L.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= L.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && r) return e;
    let o =
            null != i.getAfter(e.oldestReadMessageId) ||
            (null == (n = l[0]) ? void 0 : n.id) === e.oldestUnreadMessageId,
        a = l[l.length - 1],
        s = L.default.compare(null == a ? void 0 : a.id, e.newestUnreadMessageId) >= 0 || l.length >= H;
    return B(U({}, e), {
        messages: l,
        hasLoadedAnything: e.hasLoadedAnything || o || t,
        hasLoadedFirst: e.hasLoadedFirst || o || t,
        isFullyLoaded: e.isFullyLoaded || (o && s) || (t && !i.hasMoreAfter),
    });
}
function K() {
    let e = (function () {
            var e, t;
            let n = {},
                r = null != (t = null == (e = C.Z.settings.guilds) ? void 0 : e.guilds) ? t : {};
            for (let e in r)
                for (let t in r[e].channels) {
                    let i = S.Z.getChannel(t);
                    (t in n && (null == i ? void 0 : i.guild_id) !== e) || (n[t] = r[e].channels[t].collapsedInInbox);
                }
            return n;
        })(),
        t = (function (e) {
            let t = [];
            return (
                S.Z.getSortedPrivateChannels().forEach((n) => Y(e, t, null, n.id)),
                T.ZP.getFlattenedGuildIds().forEach((n) => {
                    if (null == n) return;
                    let r = I.ZP.getSelectableChannelIds(n),
                        i = y.Z.getActiveJoinedUnreadThreadsForGuild(n);
                    r.forEach((r) => {
                        var l;
                        Y(e, t, n, r);
                        let o = null != (l = i[r]) ? l : {};
                        for (let r in o) Y(e, t, n, r);
                    });
                }),
                u().sortBy(t, (e) => e.sortOrder)
            );
        })(e),
        n = u()
            .uniq(t.map((e) => e.guildId))
            .filter(D.lm);
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
function Y(e, t, n, r) {
    if (null == r) return;
    let i = S.Z.getChannel(r);
    if (null == i || (!E.Ec.has(i.type) && A.ZP.isGuildOrCategoryOrChannelMuted(n, i.id))) return;
    if (i.isPrivate()) {
        if (0 === w.ZP.getMentionCount(r)) return;
    } else if (!(0, _.d)(i) && 0 === w.ZP.getMentionCount(r)) return;
    if ((!i.isPrivate() && !Z.Z.can(M.Plq.READ_MESSAGE_HISTORY, i)) || (0, g.Y3)(i)) return;
    let l = w.ZP.ackMessageId(r);
    if (null == l) {
        let e = P.Z.getGuild(i.guild_id);
        if (null == e || null == e.joinedAt) return;
        l = L.default.fromTimestamp(e.joinedAt.getTime());
    }
    let o = w.ZP.getOldestUnreadMessageId(r),
        a = w.ZP.lastMessageId(r),
        s = w.ZP.getMentionCount(r),
        c = s > 0 || i.isPrivate();
    if (null == a || L.default.compare(l, a) >= 0) return;
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
            let r = S.Z.getChannel(t);
            if (m.Z.isFavorite(t)) return 0;
            if (r.isPrivate()) return 1;
            if (w.ZP.getMentionCount(t) > 0) return w.ZP.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = L.default.extractTimestamp(n);
                if (Date.now() - e > Q) return 8;
                if (Date.now() - e > q) return 6;
            }
            if (r.isThread()) {
                let e = (0, j.J)(r);
                return e === k.iN.ALL_MESSAGES ? 4 : e === k.iN.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = A.ZP.getChannelMessageNotifications(e, t),
                    r = n === M.bL.NULL ? A.ZP.getMessageNotifications(e) : n;
                return r === M.bL.ALL_MESSAGES ? 4 : r === M.bL.NO_MESSAGES ? 7 : 5;
            }
        })(n, r, a),
        order: 0,
    };
    (0, g.Y3)(i)
        ? t.push(B(U({}, u), { type: "nsfw" }))
        : i.isForumLikeChannel()
          ? t.push(B(U({}, u), { type: "forum" }))
          : t.push(
                B(U({}, u), {
                    type: "messages",
                    messages: [],
                }),
            );
}
let q = 2 * R.Z.Millis.DAY,
    Q = 10 * R.Z.Millis.DAY;
function X(e) {
    let [t, n] = l.useState(() => new W(K(), e)),
        [r, i] = l.useState(!1),
        o = l.useRef(Date.now()),
        [a, s] = l.useState(() => K());
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
                l = K();
            0 === l.channels.length || t - o.current < 10 * R.Z.Millis.SECOND
                ? i(!0)
                : ((o.current = Date.now()), n(new W(l, e)));
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
            () => (N.Z.addChangeListener(t.reloadMessages), () => N.Z.removeChangeListener(t.reloadMessages)),
            [t.reloadMessages],
        ),
        l.useEffect(
            () => (
                A.ZP.addChangeListener(t.handleUserGuildSettingsStoreChange),
                () => A.ZP.removeChangeListener(t.handleUserGuildSettingsStoreChange)
            ),
            [t],
        ),
        l.useEffect(
            () => (
                v.Z.addChangeListener(t.handleJoinedThreadsStoreChange),
                () => v.Z.removeChangeListener(t.handleJoinedThreadsStoreChange)
            ),
            [t],
        ),
        l.useEffect(
            () => (
                O.Z.addChangeListener(t.handleActiveThreadsStoreChange),
                () => O.Z.removeChangeListener(t.handleActiveThreadsStoreChange)
            ),
            [t],
        ),
        [a, t]
    );
}
