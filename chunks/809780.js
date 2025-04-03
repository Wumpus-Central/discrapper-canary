n.d(t, {
    As: () => B,
    ZP: () => Q,
    hC: () => H,
    jd: () => G
}),
    n(653041),
    n(47120);
var r,
    i,
    a = n(192379),
    l = n(836560),
    o = n(512722),
    s = n.n(o),
    c = n(392711),
    u = n.n(c),
    d = n(570140),
    p = n(904245),
    m = n(45114),
    f = n(607070),
    h = n(853856),
    g = n(181945),
    _ = n(220444),
    b = n(601070),
    x = n(344185),
    y = n(569471),
    E = n(723170),
    v = n(675478),
    O = n(581883),
    N = n(131704),
    j = n(592125),
    C = n(984933),
    I = n(731290),
    S = n(430824),
    T = n(375954),
    P = n(496675),
    A = n(306680),
    w = n(771845),
    Z = n(9156),
    k = n(70956),
    R = n(823379),
    D = n(709054),
    L = n(981631),
    M = n(124368);
function W(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                W(e, t, n[t]);
            });
    }
    return e;
}
function F(e, t) {
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
var B = (((r = {})[(r.Favorite = 0)] = 'Favorite'), (r[(r.PrivateChannel = 1)] = 'PrivateChannel'), (r[(r.HighImportanceMentioned = 2)] = 'HighImportanceMentioned'), (r[(r.LowImportanceMentioned = 3)] = 'LowImportanceMentioned'), (r[(r.AllMessagesNotifications = 4)] = 'AllMessagesNotifications'), (r[(r.GuildChannel = 5)] = 'GuildChannel'), (r[(r.OldChannel = 6)] = 'OldChannel'), (r[(r.NoNotifications = 7)] = 'NoNotifications'), (r[(r.ReallyOldChannel = 8)] = 'ReallyOldChannel'), r),
    G = (((i = {}).Loading = 'loading'), (i.Loaded = 'loaded'), (i.Done = 'done'), i);
let H = 25;
class V extends l.EventEmitter {
    loadMore() {
        let { loadState: e, channels: t } = this.state;
        if ('loaded' !== e) return;
        let n = !1,
            r = t.map((e) => {
                if (e.isFullyLoaded || e.deleted || n) return e;
                if (e.collapsed)
                    if (!e.hasLoadedAnything) return F(U({}, e), { hasLoadedAnything: !0 });
                    else return e;
                return (e = this.populateInitialStateFromStore(e)).isFullyLoaded || (s()('nsfw' !== e.type, 'this channel should already be loaded'), 'messages' === e.type && this.loadChannelMessages(e) && (n = !0)), e;
            });
        (!n || r.some((e, n) => e !== t[n])) &&
            this.setState({
                channels: r,
                loadState: n ? this.state.loadState : 'done'
            });
    }
    populateInitialStateFromStore(e) {
        if ('messages' === e.type) return z(e, !1);
        if ('nsfw' === e.type)
            return F(U({}, e), {
                isFullyLoaded: !0,
                hasLoadedAnything: !0
            });
        if ('forum' === e.type) {
            let t = x.Z.hasLoaded(e.guildId);
            return F(U({}, e), {
                isFullyLoaded: t,
                hasLoadedAnything: t
            });
        }
        (0, R.vE)(e);
    }
    clearScrollToChannelIndex() {
        this.setState({ scrollToChannelIndex: null });
    }
    loadChannelMessages(e) {
        p.Z.clearChannel(e.channelId);
        let t = p.Z.fetchMessages({
            channelId: e.channelId,
            limit: L.AQB,
            jump: {
                messageId: e.oldestReadMessageId,
                flash: !0
            }
        });
        return (
            null != t &&
            !1 !== t &&
            (this.setState({ loadState: 'loading' }),
            t.then(
                (t) => {
                    this.setState({
                        loadState: 'loaded',
                        channels: this.updateChannel(e.channelId, (e) => {
                            s()('messages' === e.type, 'channel cannot change type');
                            let n = z(e, !0);
                            return (
                                (0 === n.messages.length || n.messages.length === e.messages.length) &&
                                    (n = F(U({}, n), {
                                        hasLoadedAnything: !0,
                                        isFullyLoaded: !0,
                                        hasError: !t
                                    })),
                                n
                            );
                        })
                    });
                },
                () => {
                    this.setState({
                        loadState: 'loaded',
                        channels: this.updateChannel(e.channelId, (e) => {
                            var t;
                            return (
                                s()('messages' === e.type, 'channel cannot change type'),
                                F(U({}, z(e, !0)), {
                                    isFullyLoaded: !0,
                                    hasError: !0,
                                    hasLoadedAnything: !0,
                                    newestUnreadMessageId: null == (t = e.messages[e.messages.length - 1]) ? void 0 : t.id
                                })
                            );
                        })
                    });
                }
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
                (this.state = U({}, this.state, e)), this.emit('change', this.state);
                return;
            }
    }
    constructor(e, t) {
        super(),
            W(this, 'state', void 0),
            W(this, 'scrollerRef', void 0),
            W(this, 'undoStack', void 0),
            W(this, 'maybeLoadMore', void 0),
            W(this, 'reloadMessages', void 0),
            W(this, 'getNumUnreadChannels', void 0),
            W(this, 'markChannelRead', void 0),
            W(this, 'undoMarkChannelRead', void 0),
            W(this, 'markGuildRead', void 0),
            W(this, 'deleteChannel', void 0),
            W(this, 'markAllRead', void 0),
            W(this, 'toggle', void 0),
            W(this, 'handleUserGuildSettingsStoreChange', void 0),
            W(this, 'handleJoinedThreadsStoreChange', void 0),
            W(this, 'handleActiveThreadsStoreChange', void 0),
            (this.state = e),
            (this.scrollerRef = t),
            (this.undoStack = []),
            (this.maybeLoadMore = () => {
                var e;
                let t = null == (e = this.scrollerRef.current) ? void 0 : e.getScrollerState();
                null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 2000 && this.loadMore();
            }),
            (this.reloadMessages = () => {
                this.setState({ channels: this.state.channels.map((e) => ('messages' === e.type && e.hasLoadedAnything ? z(e, !1, !0) : e)) });
            }),
            (this.getNumUnreadChannels = () => this.state.channels.length),
            (this.markChannelRead = (e) => {
                let { channelId: t, newestUnreadMessageId: n } = e;
                d.Z.wait(() => m.In(t, !0, void 0, n, { section: L.jXE.INBOX }));
                let r = this.state.channels.find((e) => e.channelId === t);
                if ((null != r && this.undoStack.push(r), 1 === this.state.channels.length)) return void this.deleteChannel(t);
                this.setState({ channels: this.updateChannel(t, (e) => F(U({}, e), { deleted: !0 })) }), f.Z.useReducedMotion && this.deleteChannel(t), this.maybeLoadMore();
            }),
            (this.undoMarkChannelRead = () => {
                if (0 === this.undoStack.length) return;
                let e = this.undoStack.pop();
                if (null == e) return;
                m.In(e.channelId, !0, void 0, e.oldestReadMessageId, { section: L.jXE.INBOX });
                let t = this.state.channels.findIndex((t) => t.order > e.order),
                    n = [...this.state.channels];
                t < 0 ? n.push(e) : n.splice(t, 0, e),
                    this.setState({
                        scrollToChannelIndex: t,
                        channels: n
                    });
            }),
            (this.markGuildRead = (e) => {
                d.Z.wait(() => (0, g.Z)([e], L.jXE.INBOX)), this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }), this.maybeLoadMore();
            }),
            (this.deleteChannel = (e) => {
                this.setState({
                    scrollToChannelIndex: u().findIndex(this.state.channels, (t) => t.channelId === e),
                    channels: this.state.channels.filter((t) => t.channelId !== e)
                }),
                    this.maybeLoadMore();
            }),
            (this.markAllRead = () => {
                m.y5(
                    this.state.channels.map((e) => ({
                        channelId: e.channelId,
                        messageId: e.newestUnreadMessageId
                    }))
                ),
                    this.setState({ channels: [] });
            }),
            (this.toggle = (e) => {
                let { channelId: t, guildId: n } = e,
                    { channels: r, collapsedChannels: i, loadState: a } = this.state,
                    l = u().findIndex(r, (e) => e.channelId === t),
                    o = r[l],
                    s = !o.collapsed;
                (i[t] = s),
                    (0, v.BU)(
                        n,
                        t,
                        (e) => {
                            e.collapsedInInbox = s;
                        },
                        v.fy.FREQUENT_USER_ACTION
                    ),
                    this.setState({
                        scrollToChannelIndex: l,
                        collapsedChannels: i,
                        loadState: 'done' !== a || s || o.isFullyLoaded ? a : 'loaded',
                        channels: this.updateChannel(t, (e) => F(U({}, e), { collapsed: s }))
                    }),
                    o.collapsed ? o.isFullyLoaded || this.loadMore() : this.maybeLoadMore();
            }),
            (this.handleUserGuildSettingsStoreChange = () => {
                let e = this.state.channels.filter((e) => !Z.ZP.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
                e.length !== this.state.channels.length && this.setState({ channels: e });
            }),
            (this.handleJoinedThreadsStoreChange = () => {
                let e = this.state.channels.filter((e) => !y.Z.isMuted(e.channelId));
                e.length !== this.state.channels.length && this.setState({ channels: e });
            }),
            (this.handleActiveThreadsStoreChange = () => {
                let e = this.state.channels.map((e) => {
                    if ('forum' !== e.type) return e;
                    {
                        let t = x.Z.hasLoaded(e.guildId);
                        return F(U({}, e), {
                            isFullyLoaded: t,
                            hasLoadedAnything: t
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
        i = T.Z.getMessages(e.channelId),
        a = i.toArray().filter((t) => D.default.compare(t.id, e.oldestReadMessageId) > 0 && 0 >= D.default.compare(t.id, e.newestUnreadMessageId));
    if (a.length === e.messages.length && a.every((t, n) => e.messages[n] === t) && r) return e;
    let l = null != i.getAfter(e.oldestReadMessageId) || (null == (n = a[0]) ? void 0 : n.id) === e.oldestUnreadMessageId,
        o = a[a.length - 1],
        s = D.default.compare(null == o ? void 0 : o.id, e.newestUnreadMessageId) >= 0 || a.length >= H;
    return F(U({}, e), {
        messages: a,
        hasLoadedAnything: e.hasLoadedAnything || l || t,
        hasLoadedFirst: e.hasLoadedFirst || l || t,
        isFullyLoaded: e.isFullyLoaded || (l && s) || (t && !i.hasMoreAfter)
    });
}
function K() {
    let e = (function () {
            var e, t;
            let n = {},
                r = null != (t = null == (e = O.Z.settings.guilds) ? void 0 : e.guilds) ? t : {};
            for (let e in r)
                for (let t in r[e].channels) {
                    let i = j.Z.getChannel(t);
                    (t in n && (null == i ? void 0 : i.guild_id) !== e) || (n[t] = r[e].channels[t].collapsedInInbox);
                }
            return n;
        })(),
        t = (function (e) {
            let t = [];
            return (
                j.Z.getSortedPrivateChannels().forEach((n) => Y(e, t, null, n.id)),
                w.ZP.getFlattenedGuildIds().forEach((n) => {
                    if (null == n) return;
                    let r = C.ZP.getSelectableChannelIds(n),
                        i = b.Z.getActiveJoinedUnreadThreadsForGuild(n);
                    r.forEach((r) => {
                        var a;
                        Y(e, t, n, r);
                        let l = null != (a = i[r]) ? a : {};
                        for (let r in l) Y(e, t, n, r);
                    });
                }),
                u().sortBy(t, (e) => e.sortOrder)
            );
        })(e),
        n = u()
            .uniq(t.map((e) => e.guildId))
            .filter(R.lm);
    return (
        d.Z.dispatch({
            type: 'INBOX_OPEN',
            guildIds: n
        }),
        {
            collapsedChannels: e,
            loadState: 'loaded',
            channels: t,
            scrollToChannelIndex: null
        }
    );
}
function Y(e, t, n, r) {
    if (null == r) return;
    let i = j.Z.getChannel(r);
    if (null == i || (!N.Ec.has(i.type) && Z.ZP.isGuildOrCategoryOrChannelMuted(n, i.id))) return;
    if (i.isPrivate()) {
        if (0 === A.ZP.getMentionCount(r)) return;
    } else if (!(0, _.d)(i) && 0 === A.ZP.getMentionCount(r)) return;
    if (!i.isPrivate() && !P.Z.can(L.Plq.READ_MESSAGE_HISTORY, i)) return;
    let a = A.ZP.ackMessageId(r);
    if (null == a) {
        let e = S.Z.getGuild(i.guild_id);
        if (null == e || null == e.joinedAt) return;
        a = D.default.fromTimestamp(e.joinedAt.getTime());
    }
    let l = A.ZP.getOldestUnreadMessageId(r),
        o = A.ZP.lastMessageId(r),
        s = A.ZP.getMentionCount(r),
        c = s > 0 || i.isPrivate();
    if (null == o || D.default.compare(a, o) >= 0) return;
    let u = {
        guildId: n,
        channelId: r,
        oldestReadMessageId: a,
        oldestUnreadMessageId: l,
        newestUnreadMessageId: o,
        collapsed: !0 === e[r],
        hasLoadedAnything: !1,
        hasLoadedFirst: !1,
        isFullyLoaded: !1,
        hasError: !1,
        hasMentionsOrUnreads: c,
        mentionCount: s,
        sortOrder: (function (e, t, n) {
            let r = j.Z.getChannel(t);
            if (h.Z.isFavorite(t)) return 0;
            if (r.isPrivate()) return 1;
            if (A.ZP.getMentionCount(t) > 0) return A.ZP.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = D.default.extractTimestamp(n);
                if (Date.now() - e > q) return 8;
                if (Date.now() - e > X) return 6;
            }
            if (r.isThread()) {
                let e = (0, E.J)(r);
                return e === M.iN.ALL_MESSAGES ? 4 : e === M.iN.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = Z.ZP.getChannelMessageNotifications(e, t),
                    r = n === L.bL.NULL ? Z.ZP.getMessageNotifications(e) : n;
                return r === L.bL.ALL_MESSAGES ? 4 : r === L.bL.NO_MESSAGES ? 7 : 5;
            }
        })(n, r, o),
        order: 0
    };
    i.isNSFW() && !I.Z.didAgree(i.guild_id)
        ? t.push(F(U({}, u), { type: 'nsfw' }))
        : i.isForumLikeChannel()
          ? t.push(F(U({}, u), { type: 'forum' }))
          : t.push(
                F(U({}, u), {
                    type: 'messages',
                    messages: []
                })
            );
}
let X = 2 * k.Z.Millis.DAY,
    q = 10 * k.Z.Millis.DAY;
function Q(e) {
    let [t, n] = a.useState(() => new V(K(), e)),
        [r, i] = a.useState(!1),
        l = a.useRef(Date.now()),
        [o, s] = a.useState(() => K());
    a.useEffect(() => {
        let e = (e) => s(e);
        return (
            t.on('change', e),
            s(t.state),
            () => {
                t.off('change', e);
            }
        );
    }, [t]),
        a.useEffect(() => {
            if (null == o || o.channels.length > 0 || r) return;
            let t = Date.now(),
                a = K();
            0 === a.channels.length || t - l.current < 10 * k.Z.Millis.SECOND ? i(!0) : ((l.current = Date.now()), n(new V(a, e)));
        }, [o, r, e]);
    let c = a.useRef(t);
    return (
        a.useLayoutEffect(() => {
            c.current = t;
        }),
        a.useLayoutEffect(() => {
            null == o || o.channels, null == o || o.loadState, c.current.maybeLoadMore();
        }, [null == o ? void 0 : o.channels, null == o ? void 0 : o.loadState]),
        a.useEffect(() => (T.Z.addChangeListener(t.reloadMessages), () => T.Z.removeChangeListener(t.reloadMessages)), [t.reloadMessages]),
        a.useEffect(() => (Z.ZP.addChangeListener(t.handleUserGuildSettingsStoreChange), () => Z.ZP.removeChangeListener(t.handleUserGuildSettingsStoreChange)), [t]),
        a.useEffect(() => (y.Z.addChangeListener(t.handleJoinedThreadsStoreChange), () => y.Z.removeChangeListener(t.handleJoinedThreadsStoreChange)), [t]),
        a.useEffect(() => (x.Z.addChangeListener(t.handleActiveThreadsStoreChange), () => x.Z.removeChangeListener(t.handleActiveThreadsStoreChange)), [t]),
        [o, t]
    );
}
