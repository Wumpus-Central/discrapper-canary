n.d(t, {
    As: () => U,
    ZP: () => X,
    hC: () => G,
    jd: () => B
}),
    n(653041),
    n(47120);
var i,
    l,
    a = n(192379),
    r = n(836560),
    s = n(512722),
    o = n.n(s),
    c = n(392711),
    d = n.n(c),
    u = n(570140),
    m = n(904245),
    _ = n(45114),
    h = n(607070),
    p = n(853856),
    g = n(181945),
    f = n(220444),
    x = n(601070),
    C = n(344185),
    v = n(569471),
    E = n(723170),
    I = n(675478),
    N = n(581883),
    S = n(131704),
    T = n(592125),
    b = n(984933),
    A = n(731290),
    j = n(430824),
    y = n(375954),
    Z = n(496675),
    R = n(306680),
    L = n(771845),
    P = n(9156),
    k = n(70956),
    M = n(823379),
    O = n(709054),
    D = n(981631),
    w = n(124368);
function F(e, t, n) {
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
var U = (((i = {})[(i.Favorite = 0)] = 'Favorite'), (i[(i.PrivateChannel = 1)] = 'PrivateChannel'), (i[(i.HighImportanceMentioned = 2)] = 'HighImportanceMentioned'), (i[(i.LowImportanceMentioned = 3)] = 'LowImportanceMentioned'), (i[(i.AllMessagesNotifications = 4)] = 'AllMessagesNotifications'), (i[(i.GuildChannel = 5)] = 'GuildChannel'), (i[(i.OldChannel = 6)] = 'OldChannel'), (i[(i.NoNotifications = 7)] = 'NoNotifications'), (i[(i.ReallyOldChannel = 8)] = 'ReallyOldChannel'), i),
    B = (((l = {}).Loading = 'loading'), (l.Loaded = 'loaded'), (l.Done = 'done'), l);
let G = 25;
class H extends r.EventEmitter {
    loadMore() {
        let { loadState: e, channels: t } = this.state;
        if ('loaded' !== e) return;
        let n = !1,
            i = t.map((e) =>
                e.isFullyLoaded || e.deleted || n
                    ? e
                    : e.collapsed
                      ? e.hasLoadedAnything
                          ? e
                          : {
                                ...e,
                                hasLoadedAnything: !0
                            }
                      : ((e = this.populateInitialStateFromStore(e)).isFullyLoaded || (o()('nsfw' !== e.type, 'this channel should already be loaded'), 'messages' === e.type && this.loadChannelMessages(e) && (n = !0)), e)
            );
        (!n || i.some((e, n) => e !== t[n])) &&
            this.setState({
                channels: i,
                loadState: n ? this.state.loadState : 'done'
            });
    }
    populateInitialStateFromStore(e) {
        if ('messages' === e.type) return V(e, !1);
        if ('nsfw' === e.type)
            return {
                ...e,
                isFullyLoaded: !0,
                hasLoadedAnything: !0
            };
        if ('forum' === e.type) {
            let t = C.Z.hasLoaded(e.guildId);
            return {
                ...e,
                isFullyLoaded: t,
                hasLoadedAnything: t
            };
        }
        (0, M.vE)(e);
    }
    clearScrollToChannelIndex() {
        this.setState({ scrollToChannelIndex: null });
    }
    loadChannelMessages(e) {
        m.Z.clearChannel(e.channelId);
        let t = m.Z.fetchMessages({
            channelId: e.channelId,
            limit: D.AQB,
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
                            o()('messages' === e.type, 'channel cannot change type');
                            let n = V(e, !0);
                            return (
                                (0 === n.messages.length || n.messages.length === e.messages.length) &&
                                    (n = {
                                        ...n,
                                        hasLoadedAnything: !0,
                                        isFullyLoaded: !0,
                                        hasError: !t
                                    }),
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
                                o()('messages' === e.type, 'channel cannot change type'),
                                {
                                    ...V(e, !0),
                                    isFullyLoaded: !0,
                                    hasError: !0,
                                    hasLoadedAnything: !0,
                                    newestUnreadMessageId: null === (t = e.messages[e.messages.length - 1]) || void 0 === t ? void 0 : t.id
                                }
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
                (this.state = {
                    ...this.state,
                    ...e
                }),
                    this.emit('change', this.state);
                return;
            }
    }
    constructor(e, t) {
        super(),
            F(this, 'state', void 0),
            F(this, 'scrollerRef', void 0),
            F(this, 'undoStack', void 0),
            F(this, 'maybeLoadMore', void 0),
            F(this, 'reloadMessages', void 0),
            F(this, 'getNumUnreadChannels', void 0),
            F(this, 'markChannelRead', void 0),
            F(this, 'undoMarkChannelRead', void 0),
            F(this, 'markGuildRead', void 0),
            F(this, 'deleteChannel', void 0),
            F(this, 'markAllRead', void 0),
            F(this, 'toggle', void 0),
            F(this, 'handleUserGuildSettingsStoreChange', void 0),
            F(this, 'handleJoinedThreadsStoreChange', void 0),
            F(this, 'handleActiveThreadsStoreChange', void 0),
            (this.state = e),
            (this.scrollerRef = t),
            (this.undoStack = []),
            (this.maybeLoadMore = () => {
                var e;
                let t = null === (e = this.scrollerRef.current) || void 0 === e ? void 0 : e.getScrollerState();
                null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 2000 && this.loadMore();
            }),
            (this.reloadMessages = () => {
                this.setState({ channels: this.state.channels.map((e) => ('messages' === e.type && e.hasLoadedAnything ? V(e, !1, !0) : e)) });
            }),
            (this.getNumUnreadChannels = () => this.state.channels.length),
            (this.markChannelRead = (e) => {
                let { channelId: t, newestUnreadMessageId: n } = e;
                u.Z.wait(() => _.In(t, !0, void 0, n, { section: D.jXE.INBOX }));
                let i = this.state.channels.find((e) => e.channelId === t);
                if ((null != i && this.undoStack.push(i), 1 === this.state.channels.length)) {
                    this.deleteChannel(t);
                    return;
                }
                this.setState({
                    channels: this.updateChannel(t, (e) => ({
                        ...e,
                        deleted: !0
                    }))
                }),
                    h.Z.useReducedMotion && this.deleteChannel(t),
                    this.maybeLoadMore();
            }),
            (this.undoMarkChannelRead = () => {
                if (0 === this.undoStack.length) return;
                let e = this.undoStack.pop();
                if (null == e) return;
                _.In(e.channelId, !0, void 0, e.oldestReadMessageId, { section: D.jXE.INBOX });
                let t = this.state.channels.findIndex((t) => t.order > e.order),
                    n = [...this.state.channels];
                t < 0 ? n.push(e) : n.splice(t, 0, e),
                    this.setState({
                        scrollToChannelIndex: t,
                        channels: n
                    });
            }),
            (this.markGuildRead = (e) => {
                u.Z.wait(() => (0, g.Z)([e], D.jXE.INBOX)), this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }), this.maybeLoadMore();
            }),
            (this.deleteChannel = (e) => {
                this.setState({
                    scrollToChannelIndex: d().findIndex(this.state.channels, (t) => t.channelId === e),
                    channels: this.state.channels.filter((t) => t.channelId !== e)
                }),
                    this.maybeLoadMore();
            }),
            (this.markAllRead = () => {
                _.y5(
                    this.state.channels.map((e) => ({
                        channelId: e.channelId,
                        messageId: e.newestUnreadMessageId
                    }))
                ),
                    this.setState({ channels: [] });
            }),
            (this.toggle = (e) => {
                let { channelId: t, guildId: n } = e,
                    { channels: i, collapsedChannels: l, loadState: a } = this.state,
                    r = d().findIndex(i, (e) => e.channelId === t),
                    s = i[r],
                    o = !s.collapsed;
                (l[t] = o),
                    (0, I.BU)(
                        n,
                        t,
                        (e) => {
                            e.collapsedInInbox = o;
                        },
                        I.fy.FREQUENT_USER_ACTION
                    ),
                    this.setState({
                        scrollToChannelIndex: r,
                        collapsedChannels: l,
                        loadState: 'done' !== a || o || s.isFullyLoaded ? a : 'loaded',
                        channels: this.updateChannel(t, (e) => ({
                            ...e,
                            collapsed: o
                        }))
                    }),
                    s.collapsed ? s.isFullyLoaded || this.loadMore() : this.maybeLoadMore();
            }),
            (this.handleUserGuildSettingsStoreChange = () => {
                let e = this.state.channels.filter((e) => !P.ZP.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
                e.length !== this.state.channels.length && this.setState({ channels: e });
            }),
            (this.handleJoinedThreadsStoreChange = () => {
                let e = this.state.channels.filter((e) => !v.Z.isMuted(e.channelId));
                e.length !== this.state.channels.length && this.setState({ channels: e });
            }),
            (this.handleActiveThreadsStoreChange = () => {
                let e = this.state.channels.map((e) => {
                    if ('forum' !== e.type) return e;
                    {
                        let t = C.Z.hasLoaded(e.guildId);
                        return {
                            ...e,
                            isFullyLoaded: t,
                            hasLoadedAnything: t
                        };
                    }
                });
                this.setState({ channels: e });
            });
        for (let t = 0; t < e.channels.length; t++) e.channels[t].order = t;
    }
}
function V(e, t) {
    var n;
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = y.Z.getMessages(e.channelId),
        a = l.toArray().filter((t) => O.default.compare(t.id, e.oldestReadMessageId) > 0 && 0 >= O.default.compare(t.id, e.newestUnreadMessageId));
    if (a.length === e.messages.length && a.every((t, n) => e.messages[n] === t) && i) return e;
    let r = null != l.getAfter(e.oldestReadMessageId) || (null === (n = a[0]) || void 0 === n ? void 0 : n.id) === e.oldestUnreadMessageId,
        s = a[a.length - 1],
        o = O.default.compare(null == s ? void 0 : s.id, e.newestUnreadMessageId) >= 0 || a.length >= G;
    return {
        ...e,
        messages: a,
        hasLoadedAnything: e.hasLoadedAnything || r || t,
        hasLoadedFirst: e.hasLoadedFirst || r || t,
        isFullyLoaded: e.isFullyLoaded || (r && o) || (t && !l.hasMoreAfter)
    };
}
function z() {
    let e = (function () {
            var e, t;
            let n = {},
                i = null !== (t = null === (e = N.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : {};
            for (let e in i)
                for (let t in i[e].channels) {
                    let l = T.Z.getChannel(t);
                    (t in n && (null == l ? void 0 : l.guild_id) !== e) || (n[t] = i[e].channels[t].collapsedInInbox);
                }
            return n;
        })(),
        t = (function (e) {
            let t = [];
            return (
                T.Z.getSortedPrivateChannels().forEach((n) => W(e, t, null, n.id)),
                L.ZP.getFlattenedGuildIds().forEach((n) => {
                    if (null == n) return;
                    let i = b.ZP.getSelectableChannelIds(n),
                        l = x.Z.getActiveJoinedUnreadThreadsForGuild(n);
                    i.forEach((i) => {
                        var a;
                        W(e, t, n, i);
                        let r = null !== (a = l[i]) && void 0 !== a ? a : {};
                        for (let i in r) W(e, t, n, i);
                    });
                }),
                d().sortBy(t, (e) => e.sortOrder)
            );
        })(e),
        n = d()
            .uniq(t.map((e) => e.guildId))
            .filter(M.lm);
    return (
        u.Z.dispatch({
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
function W(e, t, n, i) {
    if (null == i) return;
    let l = T.Z.getChannel(i);
    if (null == l || (!S.Ec.has(l.type) && P.ZP.isGuildOrCategoryOrChannelMuted(n, l.id))) return;
    if (l.isPrivate()) {
        if (0 === R.ZP.getMentionCount(i)) return;
    } else if (!(0, f.d)(l) && 0 === R.ZP.getMentionCount(i)) return;
    if (!l.isPrivate() && !Z.Z.can(D.Plq.READ_MESSAGE_HISTORY, l)) return;
    let a = R.ZP.ackMessageId(i);
    if (null == a) {
        let e = j.Z.getGuild(l.guild_id);
        if (null == e || null == e.joinedAt) return;
        a = O.default.fromTimestamp(e.joinedAt.getTime());
    }
    let r = R.ZP.getOldestUnreadMessageId(i),
        s = R.ZP.lastMessageId(i),
        o = R.ZP.getMentionCount(i),
        c = o > 0 || l.isPrivate();
    if (null == s || O.default.compare(a, s) >= 0) return;
    let d = {
        guildId: n,
        channelId: i,
        oldestReadMessageId: a,
        oldestUnreadMessageId: r,
        newestUnreadMessageId: s,
        collapsed: !0 === e[i],
        hasLoadedAnything: !1,
        hasLoadedFirst: !1,
        isFullyLoaded: !1,
        hasError: !1,
        hasMentionsOrUnreads: c,
        mentionCount: o,
        sortOrder: (function (e, t, n) {
            let i = T.Z.getChannel(t);
            if (p.Z.isFavorite(t)) return 0;
            if (i.isPrivate()) return 1;
            if (R.ZP.getMentionCount(t) > 0) return R.ZP.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = O.default.extractTimestamp(n);
                if (Date.now() - e > Y) return 8;
                if (Date.now() - e > K) return 6;
            }
            if (i.isThread()) {
                let e = (0, E.J)(i);
                return e === w.iN.ALL_MESSAGES ? 4 : e === w.iN.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = P.ZP.getChannelMessageNotifications(e, t),
                    i = n === D.bL.NULL ? P.ZP.getMessageNotifications(e) : n;
                return i === D.bL.ALL_MESSAGES ? 4 : i === D.bL.NO_MESSAGES ? 7 : 5;
            }
        })(n, i, s),
        order: 0
    };
    l.isNSFW() && !A.Z.didAgree(l.guild_id)
        ? t.push({
              ...d,
              type: 'nsfw'
          })
        : l.isForumLikeChannel()
          ? t.push({
                ...d,
                type: 'forum'
            })
          : t.push({
                ...d,
                type: 'messages',
                messages: []
            });
}
let K = 2 * k.Z.Millis.DAY,
    Y = 10 * k.Z.Millis.DAY;
function X(e) {
    let [t, n] = a.useState(() => new H(z(), e)),
        [i, l] = a.useState(!1),
        r = a.useRef(Date.now()),
        [s, o] = a.useState(() => z());
    a.useEffect(() => {
        let e = (e) => o(e);
        return (
            t.on('change', e),
            o(t.state),
            () => {
                t.off('change', e);
            }
        );
    }, [t]),
        a.useEffect(() => {
            if (null == s || s.channels.length > 0 || i) return;
            let t = Date.now(),
                a = z();
            0 === a.channels.length || t - r.current < 10 * k.Z.Millis.SECOND ? l(!0) : ((r.current = Date.now()), n(new H(a, e)));
        }, [s, i, e]);
    let c = a.useRef(t);
    return (
        a.useLayoutEffect(() => {
            c.current = t;
        }),
        a.useLayoutEffect(() => {
            null == s || s.channels, null == s || s.loadState, c.current.maybeLoadMore();
        }, [null == s ? void 0 : s.channels, null == s ? void 0 : s.loadState]),
        a.useEffect(() => (y.Z.addChangeListener(t.reloadMessages), () => y.Z.removeChangeListener(t.reloadMessages)), [t.reloadMessages]),
        a.useEffect(() => (P.ZP.addChangeListener(t.handleUserGuildSettingsStoreChange), () => P.ZP.removeChangeListener(t.handleUserGuildSettingsStoreChange)), [t]),
        a.useEffect(() => (v.Z.addChangeListener(t.handleJoinedThreadsStoreChange), () => v.Z.removeChangeListener(t.handleJoinedThreadsStoreChange)), [t]),
        a.useEffect(() => (C.Z.addChangeListener(t.handleActiveThreadsStoreChange), () => C.Z.removeChangeListener(t.handleActiveThreadsStoreChange)), [t]),
        [s, t]
    );
}
