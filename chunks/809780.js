n.d(t, {
    As: function () {
        return i;
    },
    ZP: function () {
        return X;
    },
    hC: function () {
        return G;
    },
    jd: function () {
        return r;
    }
}),
    n(653041),
    n(47120);
var i,
    r,
    l,
    a,
    o = n(192379),
    s = n(836560),
    c = n(512722),
    u = n.n(c),
    d = n(392711),
    m = n.n(d),
    h = n(570140),
    f = n(904245),
    p = n(45114),
    _ = n(607070),
    g = n(853856),
    E = n(181945),
    C = n(220444),
    I = n(601070),
    x = n(344185),
    N = n(569471),
    v = n(723170),
    T = n(675478),
    S = n(581883),
    A = n(131704),
    b = n(592125),
    j = n(984933),
    R = n(731290),
    Z = n(430824),
    P = n(375954),
    L = n(496675),
    y = n(306680),
    O = n(771845),
    M = n(9156),
    k = n(70956),
    D = n(823379),
    B = n(709054),
    U = n(981631),
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
((l = i || (i = {}))[(l.Favorite = 0)] = 'Favorite'), (l[(l.PrivateChannel = 1)] = 'PrivateChannel'), (l[(l.HighImportanceMentioned = 2)] = 'HighImportanceMentioned'), (l[(l.LowImportanceMentioned = 3)] = 'LowImportanceMentioned'), (l[(l.AllMessagesNotifications = 4)] = 'AllMessagesNotifications'), (l[(l.GuildChannel = 5)] = 'GuildChannel'), (l[(l.OldChannel = 6)] = 'OldChannel'), (l[(l.NoNotifications = 7)] = 'NoNotifications'), (l[(l.ReallyOldChannel = 8)] = 'ReallyOldChannel'), ((a = r || (r = {})).Loading = 'loading'), (a.Loaded = 'loaded'), (a.Done = 'done');
let G = 25;
class V extends s.EventEmitter {
    loadMore() {
        let { loadState: e, channels: t } = this.state;
        if ('loaded' !== e) return;
        let n = !1,
            i = t.map((e) => {
                if (e.isFullyLoaded || e.deleted || n) return e;
                if (e.collapsed)
                    return e.hasLoadedAnything
                        ? e
                        : {
                              ...e,
                              hasLoadedAnything: !0
                          };
                return (e = this.populateInitialStateFromStore(e)).isFullyLoaded ? e : (u()('nsfw' !== e.type, 'this channel should already be loaded'), 'messages' === e.type && this.loadChannelMessages(e) && (n = !0), e);
            });
        (!n || i.some((e, n) => e !== t[n])) &&
            this.setState({
                channels: i,
                loadState: n ? this.state.loadState : 'done'
            });
    }
    populateInitialStateFromStore(e) {
        if ('messages' === e.type) return H(e, !1);
        if ('nsfw' === e.type)
            return {
                ...e,
                isFullyLoaded: !0,
                hasLoadedAnything: !0
            };
        if ('forum' === e.type) {
            let t = x.Z.hasLoaded(e.guildId);
            return {
                ...e,
                isFullyLoaded: t,
                hasLoadedAnything: t
            };
        } else (0, D.vE)(e);
    }
    clearScrollToChannelIndex() {
        this.setState({ scrollToChannelIndex: null });
    }
    loadChannelMessages(e) {
        f.Z.clearChannel(e.channelId);
        let t = f.Z.fetchMessages({
            channelId: e.channelId,
            limit: U.AQB,
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
                            u()('messages' === e.type, 'channel cannot change type');
                            let n = H(e, !0);
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
                                u()('messages' === e.type, 'channel cannot change type'),
                                {
                                    ...H(e, !0),
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
                if (null != t) t.scrollHeight - t.scrollTop - t.offsetHeight < 2000 && this.loadMore();
            }),
            (this.reloadMessages = () => {
                this.setState({ channels: this.state.channels.map((e) => ('messages' === e.type && e.hasLoadedAnything ? H(e, !1, !0) : e)) });
            }),
            (this.getNumUnreadChannels = () => this.state.channels.length),
            (this.markChannelRead = (e) => {
                let { channelId: t, newestUnreadMessageId: n } = e;
                h.Z.wait(() => p.In(t, !0, void 0, n, { section: U.jXE.INBOX }));
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
                    _.Z.useReducedMotion && this.deleteChannel(t),
                    this.maybeLoadMore();
            }),
            (this.undoMarkChannelRead = () => {
                if (0 === this.undoStack.length) return;
                let e = this.undoStack.pop();
                if (null == e) return;
                p.In(e.channelId, !0, void 0, e.oldestReadMessageId, { section: U.jXE.INBOX });
                let t = this.state.channels.findIndex((t) => t.order > e.order),
                    n = [...this.state.channels];
                t < 0 ? n.push(e) : n.splice(t, 0, e),
                    this.setState({
                        scrollToChannelIndex: t,
                        channels: n
                    });
            }),
            (this.markGuildRead = (e) => {
                h.Z.wait(() => (0, E.Z)([e], U.jXE.INBOX)), this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }), this.maybeLoadMore();
            }),
            (this.deleteChannel = (e) => {
                this.setState({
                    scrollToChannelIndex: m().findIndex(this.state.channels, (t) => t.channelId === e),
                    channels: this.state.channels.filter((t) => t.channelId !== e)
                }),
                    this.maybeLoadMore();
            }),
            (this.markAllRead = () => {
                p.y5(
                    this.state.channels.map((e) => ({
                        channelId: e.channelId,
                        messageId: e.newestUnreadMessageId
                    }))
                ),
                    this.setState({ channels: [] });
            }),
            (this.toggle = (e) => {
                let { channelId: t, guildId: n } = e,
                    { channels: i, collapsedChannels: r, loadState: l } = this.state,
                    a = m().findIndex(i, (e) => e.channelId === t),
                    o = i[a],
                    s = !o.collapsed;
                (r[t] = s),
                    (0, T.BU)(
                        n,
                        t,
                        (e) => {
                            e.collapsedInInbox = s;
                        },
                        T.fy.FREQUENT_USER_ACTION
                    ),
                    this.setState({
                        scrollToChannelIndex: a,
                        collapsedChannels: r,
                        loadState: 'done' !== l || s || o.isFullyLoaded ? l : 'loaded',
                        channels: this.updateChannel(t, (e) => ({
                            ...e,
                            collapsed: s
                        }))
                    }),
                    o.collapsed ? !o.isFullyLoaded && this.loadMore() : this.maybeLoadMore();
            }),
            (this.handleUserGuildSettingsStoreChange = () => {
                let e = this.state.channels.filter((e) => !M.ZP.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
                e.length !== this.state.channels.length && this.setState({ channels: e });
            }),
            (this.handleJoinedThreadsStoreChange = () => {
                let e = this.state.channels.filter((e) => !N.Z.isMuted(e.channelId));
                e.length !== this.state.channels.length && this.setState({ channels: e });
            }),
            (this.handleActiveThreadsStoreChange = () => {
                let e = this.state.channels.map((e) => {
                    if ('forum' !== e.type) return e;
                    {
                        let t = x.Z.hasLoaded(e.guildId);
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
function H(e, t) {
    var n;
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = P.Z.getMessages(e.channelId),
        l = r.toArray().filter((t) => B.default.compare(t.id, e.oldestReadMessageId) > 0 && 0 >= B.default.compare(t.id, e.newestUnreadMessageId));
    if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && i) return e;
    let a = null != r.getAfter(e.oldestReadMessageId) || (null === (n = l[0]) || void 0 === n ? void 0 : n.id) === e.oldestUnreadMessageId,
        o = l[l.length - 1],
        s = B.default.compare(null == o ? void 0 : o.id, e.newestUnreadMessageId) >= 0 || l.length >= G;
    return {
        ...e,
        messages: l,
        hasLoadedAnything: e.hasLoadedAnything || a || t,
        hasLoadedFirst: e.hasLoadedFirst || a || t,
        isFullyLoaded: e.isFullyLoaded || (a && s) || (t && !r.hasMoreAfter)
    };
}
function z() {
    let e = (function () {
            var e, t;
            let n = {},
                i = null !== (t = null === (e = S.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : {};
            for (let e in i)
                for (let t in i[e].channels) {
                    let r = b.Z.getChannel(t);
                    (!(t in n) || (null == r ? void 0 : r.guild_id) === e) && (n[t] = i[e].channels[t].collapsedInInbox);
                }
            return n;
        })(),
        t = (function (e) {
            let t = [];
            return (
                b.Z.getSortedPrivateChannels().forEach((n) => W(e, t, null, n.id)),
                O.ZP.getFlattenedGuildIds().forEach((n) => {
                    if (null == n) return;
                    let i = j.ZP.getSelectableChannelIds(n),
                        r = I.Z.getActiveJoinedUnreadThreadsForGuild(n);
                    i.forEach((i) => {
                        var l;
                        W(e, t, n, i);
                        let a = null !== (l = r[i]) && void 0 !== l ? l : {};
                        for (let i in a) W(e, t, n, i);
                    });
                }),
                m().sortBy(t, (e) => e.sortOrder)
            );
        })(e),
        n = m()
            .uniq(t.map((e) => e.guildId))
            .filter(D.lm);
    return (
        h.Z.dispatch({
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
    let r = b.Z.getChannel(i);
    if (null == r || (!A.Ec.has(r.type) && M.ZP.isGuildOrCategoryOrChannelMuted(n, r.id))) return;
    if (r.isPrivate()) {
        if (0 === y.ZP.getMentionCount(i)) return;
    } else if (!(0, C.d)(r) && 0 === y.ZP.getMentionCount(i)) return;
    if (!r.isPrivate() && !L.Z.can(U.Plq.READ_MESSAGE_HISTORY, r)) return;
    let l = y.ZP.ackMessageId(i);
    if (null == l) {
        let e = Z.Z.getGuild(r.guild_id);
        if (null == e || null == e.joinedAt) return;
        l = B.default.fromTimestamp(e.joinedAt.getTime());
    }
    let a = y.ZP.getOldestUnreadMessageId(i),
        o = y.ZP.lastMessageId(i),
        s = y.ZP.getMentionCount(i),
        c = s > 0 || r.isPrivate();
    if (null == o || B.default.compare(l, o) >= 0) return;
    let u = {
        guildId: n,
        channelId: i,
        oldestReadMessageId: l,
        oldestUnreadMessageId: a,
        newestUnreadMessageId: o,
        collapsed: !0 === e[i],
        hasLoadedAnything: !1,
        hasLoadedFirst: !1,
        isFullyLoaded: !1,
        hasError: !1,
        hasMentionsOrUnreads: c,
        mentionCount: s,
        sortOrder: (function (e, t, n) {
            let i = b.Z.getChannel(t);
            if (g.Z.isFavorite(t)) return 0;
            if (i.isPrivate()) return 1;
            if (y.ZP.getMentionCount(t) > 0) return y.ZP.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = B.default.extractTimestamp(n);
                if (Date.now() - e > Y) return 8;
                if (Date.now() - e > K) return 6;
            }
            if (i.isThread()) {
                let e = (0, v.J)(i);
                return e === w.iN.ALL_MESSAGES ? 4 : e === w.iN.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = M.ZP.getChannelMessageNotifications(e, t),
                    i = n === U.bL.NULL ? M.ZP.getMessageNotifications(e) : n;
                return i === U.bL.ALL_MESSAGES ? 4 : i === U.bL.NO_MESSAGES ? 7 : 5;
            }
        })(n, i, o),
        order: 0
    };
    r.isNSFW() && !R.Z.didAgree(r.guild_id)
        ? t.push({
              ...u,
              type: 'nsfw'
          })
        : r.isForumLikeChannel()
          ? t.push({
                ...u,
                type: 'forum'
            })
          : t.push({
                ...u,
                type: 'messages',
                messages: []
            });
}
let K = 2 * k.Z.Millis.DAY,
    Y = 10 * k.Z.Millis.DAY;
function X(e) {
    let [t, n] = o.useState(() => new V(z(), e)),
        [i, r] = o.useState(!1),
        l = o.useRef(Date.now()),
        [a, s] = o.useState(() => z());
    o.useEffect(() => {
        let e = (e) => s(e);
        return (
            t.on('change', e),
            s(t.state),
            () => {
                t.off('change', e);
            }
        );
    }, [t]),
        o.useEffect(() => {
            if (null == a || a.channels.length > 0 || i) return;
            let t = Date.now(),
                o = z();
            0 === o.channels.length || t - l.current < 10 * k.Z.Millis.SECOND ? r(!0) : ((l.current = Date.now()), n(new V(o, e)));
        }, [a, i, e]);
    let c = o.useRef(t);
    return (
        o.useLayoutEffect(() => {
            c.current = t;
        }),
        o.useLayoutEffect(() => {
            null == a || a.channels, null == a || a.loadState, c.current.maybeLoadMore();
        }, [null == a ? void 0 : a.channels, null == a ? void 0 : a.loadState]),
        o.useEffect(() => (P.Z.addChangeListener(t.reloadMessages), () => P.Z.removeChangeListener(t.reloadMessages)), [t.reloadMessages]),
        o.useEffect(() => (M.ZP.addChangeListener(t.handleUserGuildSettingsStoreChange), () => M.ZP.removeChangeListener(t.handleUserGuildSettingsStoreChange)), [t]),
        o.useEffect(() => (N.Z.addChangeListener(t.handleJoinedThreadsStoreChange), () => N.Z.removeChangeListener(t.handleJoinedThreadsStoreChange)), [t]),
        o.useEffect(() => (x.Z.addChangeListener(t.handleActiveThreadsStoreChange), () => x.Z.removeChangeListener(t.handleActiveThreadsStoreChange)), [t]),
        [a, t]
    );
}
