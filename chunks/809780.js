(n.d(t, {
    As: () => F,
    ZP: () => Q,
    hC: () => H,
    jd: () => V
}),
    n(539854),
    n(388685));
var r,
    i,
    l = n(73800),
    o = n(836560),
    s = n(512722),
    a = n.n(s),
    c = n(392711),
    u = n.n(c),
    d = n(570140),
    h = n(904245),
    p = n(45114),
    f = n(607070),
    g = n(853856),
    m = n(181945),
    b = n(220444),
    _ = n(601070),
    O = n(344185),
    y = n(569471),
    v = n(723170),
    C = n(675478),
    j = n(581883),
    E = n(131704),
    S = n(592125),
    x = n(984933),
    I = n(731290),
    P = n(430824),
    N = n(375954),
    w = n(496675),
    Z = n(306680),
    T = n(771845),
    A = n(9156),
    R = n(70956),
    D = n(823379),
    L = n(709054),
    M = n(981631),
    k = n(124368);
function U(e, t, n) {
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
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                U(e, t, n[t]);
            }));
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
var F = (((r = {})[(r.Favorite = 0)] = 'Favorite'), (r[(r.PrivateChannel = 1)] = 'PrivateChannel'), (r[(r.HighImportanceMentioned = 2)] = 'HighImportanceMentioned'), (r[(r.LowImportanceMentioned = 3)] = 'LowImportanceMentioned'), (r[(r.AllMessagesNotifications = 4)] = 'AllMessagesNotifications'), (r[(r.GuildChannel = 5)] = 'GuildChannel'), (r[(r.OldChannel = 6)] = 'OldChannel'), (r[(r.NoNotifications = 7)] = 'NoNotifications'), (r[(r.ReallyOldChannel = 8)] = 'ReallyOldChannel'), r),
    V = (((i = {}).Loading = 'loading'), (i.Loaded = 'loaded'), (i.Done = 'done'), i);
let H = 25;
class z extends o.EventEmitter {
    loadMore() {
        let { loadState: e, channels: t } = this.state;
        if ('loaded' !== e) return;
        let n = !1,
            r = t.map((e) => {
                if (e.isFullyLoaded || e.deleted || n) return e;
                if (e.collapsed)
                    if (!e.hasLoadedAnything) return B(G({}, e), { hasLoadedAnything: !0 });
                    else return e;
                return ((e = this.populateInitialStateFromStore(e)).isFullyLoaded || (a()('nsfw' !== e.type, 'this channel should already be loaded'), 'messages' === e.type && this.loadChannelMessages(e) && (n = !0)), e);
            });
        (!n || r.some((e, n) => e !== t[n])) &&
            this.setState({
                channels: r,
                loadState: n ? this.state.loadState : 'done'
            });
    }
    populateInitialStateFromStore(e) {
        if ('messages' === e.type) return W(e, !1);
        if ('nsfw' === e.type)
            return B(G({}, e), {
                isFullyLoaded: !0,
                hasLoadedAnything: !0
            });
        if ('forum' === e.type) {
            let t = O.Z.hasLoaded(e.guildId);
            return B(G({}, e), {
                isFullyLoaded: t,
                hasLoadedAnything: !0
            });
        }
        (0, D.vE)(e);
    }
    clearScrollToChannelIndex() {
        this.setState({ scrollToChannelIndex: null });
    }
    loadChannelMessages(e) {
        h.Z.clearChannel(e.channelId);
        let t = h.Z.fetchMessages({
            channelId: e.channelId,
            limit: M.AQB,
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
                            a()('messages' === e.type, 'channel cannot change type');
                            let n = W(e, !0);
                            return (
                                (0 === n.messages.length || n.messages.length === e.messages.length) &&
                                    (n = B(G({}, n), {
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
                                a()('messages' === e.type, 'channel cannot change type'),
                                B(G({}, W(e, !0)), {
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
                ((this.state = G({}, this.state, e)), this.emit('change', this.state));
                return;
            }
    }
    constructor(e, t) {
        (super(),
            U(this, 'state', void 0),
            U(this, 'scrollerRef', void 0),
            U(this, 'undoStack', void 0),
            U(this, 'maybeLoadMore', void 0),
            U(this, 'reloadMessages', void 0),
            U(this, 'getNumUnreadChannels', void 0),
            U(this, 'markChannelRead', void 0),
            U(this, 'undoMarkChannelRead', void 0),
            U(this, 'markGuildRead', void 0),
            U(this, 'deleteChannel', void 0),
            U(this, 'markAllRead', void 0),
            U(this, 'toggle', void 0),
            U(this, 'handleUserGuildSettingsStoreChange', void 0),
            U(this, 'handleJoinedThreadsStoreChange', void 0),
            U(this, 'handleActiveThreadsStoreChange', void 0),
            (this.state = e),
            (this.scrollerRef = t),
            (this.undoStack = []),
            (this.maybeLoadMore = () => {
                var e;
                let t = null == (e = this.scrollerRef.current) ? void 0 : e.getScrollerState();
                null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 2000 && this.loadMore();
            }),
            (this.reloadMessages = () => {
                this.setState({ channels: this.state.channels.map((e) => ('messages' === e.type && e.hasLoadedAnything ? W(e, !1, !0) : e)) });
            }),
            (this.getNumUnreadChannels = () => this.state.channels.length),
            (this.markChannelRead = (e) => {
                let { channelId: t, newestUnreadMessageId: n } = e;
                d.Z.wait(() =>
                    p.In(
                        t,
                        {
                            section: M.jXE.INBOX,
                            object: M.qAy.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                            objectType: M.Qqv.ACK_AUTOMATIC
                        },
                        !0,
                        void 0,
                        n
                    )
                );
                let r = this.state.channels.find((e) => e.channelId === t);
                if ((null != r && this.undoStack.push(r), 1 === this.state.channels.length)) return void this.deleteChannel(t);
                (this.setState({ channels: this.updateChannel(t, (e) => B(G({}, e), { deleted: !0 })) }), f.Z.useReducedMotion && this.deleteChannel(t), this.maybeLoadMore());
            }),
            (this.undoMarkChannelRead = () => {
                if (0 === this.undoStack.length) return;
                let e = this.undoStack.pop();
                if (null == e) return;
                p.In(
                    e.channelId,
                    {
                        section: M.jXE.INBOX,
                        object: M.qAy.UNDO_MARK_AS_READ,
                        objectType: M.Qqv.ACK_MANUAL
                    },
                    !0,
                    void 0,
                    e.oldestReadMessageId
                );
                let t = this.state.channels.findIndex((t) => t.order > e.order),
                    n = [...this.state.channels];
                (t < 0 ? n.push(e) : n.splice(t, 0, e),
                    this.setState({
                        scrollToChannelIndex: t,
                        channels: n
                    }));
            }),
            (this.markGuildRead = (e) => {
                (d.Z.wait(() => (0, m.Z)([e], M.jXE.INBOX)), this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }), this.maybeLoadMore());
            }),
            (this.deleteChannel = (e) => {
                (this.setState({
                    scrollToChannelIndex: u().findIndex(this.state.channels, (t) => t.channelId === e),
                    channels: this.state.channels.filter((t) => t.channelId !== e)
                }),
                    this.maybeLoadMore());
            }),
            (this.markAllRead = () => {
                (p.y5(
                    this.state.channels.map((e) => ({
                        channelId: e.channelId,
                        messageId: e.newestUnreadMessageId
                    }))
                ),
                    this.setState({ channels: [] }));
            }),
            (this.toggle = (e) => {
                let { channelId: t, guildId: n } = e,
                    { channels: r, collapsedChannels: i, loadState: l } = this.state,
                    o = u().findIndex(r, (e) => e.channelId === t),
                    s = r[o],
                    a = !s.collapsed;
                ((i[t] = a),
                    (0, C.BU)(
                        n,
                        t,
                        (e) => {
                            e.collapsedInInbox = a;
                        },
                        C.fy.FREQUENT_USER_ACTION
                    ),
                    this.setState({
                        scrollToChannelIndex: o,
                        collapsedChannels: i,
                        loadState: 'done' !== l || a || s.isFullyLoaded ? l : 'loaded',
                        channels: this.updateChannel(t, (e) => B(G({}, e), { collapsed: a }))
                    }),
                    s.collapsed ? s.isFullyLoaded || this.loadMore() : this.maybeLoadMore());
            }),
            (this.handleUserGuildSettingsStoreChange = () => {
                let e = this.state.channels.filter((e) => !A.ZP.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
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
                        if (!e.hasLoadedAnything) return e;
                        let t = O.Z.hasLoaded(e.guildId);
                        return B(G({}, e), {
                            isFullyLoaded: t,
                            hasLoadedAnything: !0
                        });
                    }
                });
                this.setState({ channels: e });
            }));
        for (let t = 0; t < e.channels.length; t++) e.channels[t].order = t;
    }
}
function W(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = N.Z.getMessages(e.channelId),
        l = i.toArray().filter((t) => L.default.compare(t.id, e.oldestReadMessageId) > 0 && 0 >= L.default.compare(t.id, e.newestUnreadMessageId));
    if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && r) return e;
    let o = null != i.getAfter(e.oldestReadMessageId) || (null == (n = l[0]) ? void 0 : n.id) === e.oldestUnreadMessageId,
        s = l[l.length - 1],
        a = L.default.compare(null == s ? void 0 : s.id, e.newestUnreadMessageId) >= 0 || l.length >= H;
    return B(G({}, e), {
        messages: l,
        hasLoadedAnything: e.hasLoadedAnything || o || t,
        hasLoadedFirst: e.hasLoadedFirst || o || t,
        isFullyLoaded: e.isFullyLoaded || (o && a) || (t && !i.hasMoreAfter)
    });
}
function K() {
    let e = (function () {
            var e, t;
            let n = {},
                r = null != (t = null == (e = j.Z.settings.guilds) ? void 0 : e.guilds) ? t : {};
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
                    let r = x.ZP.getSelectableChannelIds(n),
                        i = _.Z.getActiveJoinedUnreadThreadsForGuild(n);
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
    let i = S.Z.getChannel(r);
    if (null == i || (!E.Ec.has(i.type) && A.ZP.isGuildOrCategoryOrChannelMuted(n, i.id))) return;
    if (i.isPrivate()) {
        if (0 === Z.ZP.getMentionCount(r)) return;
    } else if (!(0, b.d)(i) && 0 === Z.ZP.getMentionCount(r)) return;
    if (!i.isPrivate() && !w.Z.can(M.Plq.READ_MESSAGE_HISTORY, i)) return;
    let l = Z.ZP.ackMessageId(r);
    if (null == l) {
        let e = P.Z.getGuild(i.guild_id);
        if (null == e || null == e.joinedAt) return;
        l = L.default.fromTimestamp(e.joinedAt.getTime());
    }
    let o = Z.ZP.getOldestUnreadMessageId(r),
        s = Z.ZP.lastMessageId(r),
        a = Z.ZP.getMentionCount(r),
        c = a > 0 || i.isPrivate();
    if (null == s || L.default.compare(l, s) >= 0) return;
    let u = {
        guildId: n,
        channelId: r,
        oldestReadMessageId: l,
        oldestUnreadMessageId: o,
        newestUnreadMessageId: s,
        collapsed: !0 === e[r],
        hasLoadedAnything: !1,
        hasLoadedFirst: !1,
        isFullyLoaded: !1,
        hasError: !1,
        hasMentionsOrUnreads: c,
        mentionCount: a,
        sortOrder: (function (e, t, n) {
            let r = S.Z.getChannel(t);
            if (g.Z.isFavorite(t)) return 0;
            if (r.isPrivate()) return 1;
            if (Z.ZP.getMentionCount(t) > 0) return Z.ZP.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = L.default.extractTimestamp(n);
                if (Date.now() - e > X) return 8;
                if (Date.now() - e > q) return 6;
            }
            if (r.isThread()) {
                let e = (0, v.J)(r);
                return e === k.iN.ALL_MESSAGES ? 4 : e === k.iN.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = A.ZP.getChannelMessageNotifications(e, t),
                    r = n === M.bL.NULL ? A.ZP.getMessageNotifications(e) : n;
                return r === M.bL.ALL_MESSAGES ? 4 : r === M.bL.NO_MESSAGES ? 7 : 5;
            }
        })(n, r, s),
        order: 0
    };
    i.isNSFW() && !I.Z.didAgree(i.guild_id)
        ? t.push(B(G({}, u), { type: 'nsfw' }))
        : i.isForumLikeChannel()
          ? t.push(B(G({}, u), { type: 'forum' }))
          : t.push(
                B(G({}, u), {
                    type: 'messages',
                    messages: []
                })
            );
}
let q = 2 * R.Z.Millis.DAY,
    X = 10 * R.Z.Millis.DAY;
function Q(e) {
    let [t, n] = l.useState(() => new z(K(), e)),
        [r, i] = l.useState(!1),
        o = l.useRef(Date.now()),
        [s, a] = l.useState(() => K());
    (l.useEffect(() => {
        let e = (e) => a(e);
        return (
            t.on('change', e),
            a(t.state),
            () => {
                t.off('change', e);
            }
        );
    }, [t]),
        l.useEffect(() => {
            if (null == s || s.channels.length > 0 || r) return;
            let t = Date.now(),
                l = K();
            0 === l.channels.length || t - o.current < 10 * R.Z.Millis.SECOND ? i(!0) : ((o.current = Date.now()), n(new z(l, e)));
        }, [s, r, e]));
    let c = l.useRef(t);
    return (
        l.useLayoutEffect(() => {
            c.current = t;
        }),
        l.useLayoutEffect(() => {
            (null == s || s.channels, null == s || s.loadState, c.current.maybeLoadMore());
        }, [null == s ? void 0 : s.channels, null == s ? void 0 : s.loadState]),
        l.useEffect(() => (N.Z.addChangeListener(t.reloadMessages), () => N.Z.removeChangeListener(t.reloadMessages)), [t.reloadMessages]),
        l.useEffect(() => (A.ZP.addChangeListener(t.handleUserGuildSettingsStoreChange), () => A.ZP.removeChangeListener(t.handleUserGuildSettingsStoreChange)), [t]),
        l.useEffect(() => (y.Z.addChangeListener(t.handleJoinedThreadsStoreChange), () => y.Z.removeChangeListener(t.handleJoinedThreadsStoreChange)), [t]),
        l.useEffect(() => (O.Z.addChangeListener(t.handleActiveThreadsStoreChange), () => O.Z.removeChangeListener(t.handleActiveThreadsStoreChange)), [t]),
        [s, t]
    );
}
