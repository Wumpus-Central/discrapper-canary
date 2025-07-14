(n.d(t, {
    As: () => F,
    ZP: () => J,
    hC: () => z,
    jd: () => H
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
    g = n(622822),
    m = n(853856),
    b = n(181945),
    _ = n(220444),
    O = n(601070),
    y = n(344185),
    v = n(569471),
    C = n(723170),
    j = n(675478),
    E = n(581883),
    x = n(131704),
    S = n(592125),
    I = n(984933),
    P = n(731290),
    N = n(430824),
    w = n(375954),
    Z = n(496675),
    T = n(306680),
    A = n(771845),
    R = n(9156),
    D = n(70956),
    L = n(823379),
    M = n(709054),
    k = n(981631),
    U = n(124368);
function G(e, t, n) {
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
function B(e) {
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
                G(e, t, n[t]);
            }));
    }
    return e;
}
function V(e, t) {
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
    H = (((i = {}).Loading = 'loading'), (i.Loaded = 'loaded'), (i.Done = 'done'), i);
let z = 25;
class W extends o.EventEmitter {
    loadMore() {
        let { loadState: e, channels: t } = this.state;
        if ('loaded' !== e) return;
        let n = !1,
            r = t.map((e) => {
                if (e.isFullyLoaded || e.deleted || n) return e;
                if (e.collapsed)
                    if (!e.hasLoadedAnything) return V(B({}, e), { hasLoadedAnything: !0 });
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
        if ('messages' === e.type) return K(e, !1);
        if ('nsfw' === e.type)
            return V(B({}, e), {
                isFullyLoaded: !0,
                hasLoadedAnything: !0
            });
        if ('forum' === e.type) {
            let t = y.Z.hasLoaded(e.guildId);
            return V(B({}, e), {
                isFullyLoaded: t,
                hasLoadedAnything: !0
            });
        }
        (0, L.vE)(e);
    }
    clearScrollToChannelIndex() {
        this.setState({ scrollToChannelIndex: null });
    }
    loadChannelMessages(e) {
        h.Z.clearChannel(e.channelId);
        let t = h.Z.fetchMessages({
            channelId: e.channelId,
            limit: k.AQB,
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
                            let n = K(e, !0);
                            return (
                                (0 === n.messages.length || n.messages.length === e.messages.length) &&
                                    (n = V(B({}, n), {
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
                                V(B({}, K(e, !0)), {
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
                ((this.state = B({}, this.state, e)), this.emit('change', this.state));
                return;
            }
    }
    constructor(e, t) {
        (super(),
            G(this, 'state', void 0),
            G(this, 'scrollerRef', void 0),
            G(this, 'undoStack', void 0),
            G(this, 'maybeLoadMore', void 0),
            G(this, 'reloadMessages', void 0),
            G(this, 'getNumUnreadChannels', void 0),
            G(this, 'markChannelRead', void 0),
            G(this, 'undoMarkChannelRead', void 0),
            G(this, 'markGuildRead', void 0),
            G(this, 'deleteChannel', void 0),
            G(this, 'markAllRead', void 0),
            G(this, 'toggle', void 0),
            G(this, 'handleUserGuildSettingsStoreChange', void 0),
            G(this, 'handleJoinedThreadsStoreChange', void 0),
            G(this, 'handleActiveThreadsStoreChange', void 0),
            (this.state = e),
            (this.scrollerRef = t),
            (this.undoStack = []),
            (this.maybeLoadMore = () => {
                var e;
                let t = null == (e = this.scrollerRef.current) ? void 0 : e.getScrollerState();
                null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 2000 && this.loadMore();
            }),
            (this.reloadMessages = () => {
                this.setState({ channels: this.state.channels.map((e) => ('messages' === e.type && e.hasLoadedAnything ? K(e, !1, !0) : e)) });
            }),
            (this.getNumUnreadChannels = () => this.state.channels.length),
            (this.markChannelRead = (e) => {
                let { channelId: t, newestUnreadMessageId: n } = e;
                d.Z.wait(() =>
                    p.In(
                        t,
                        {
                            section: k.jXE.INBOX,
                            object: k.qAy.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                            objectType: k.Qqv.ACK_AUTOMATIC
                        },
                        !0,
                        void 0,
                        n
                    )
                );
                let r = this.state.channels.find((e) => e.channelId === t);
                if ((null != r && this.undoStack.push(r), 1 === this.state.channels.length)) return void this.deleteChannel(t);
                (this.setState({ channels: this.updateChannel(t, (e) => V(B({}, e), { deleted: !0 })) }), f.Z.useReducedMotion && this.deleteChannel(t), this.maybeLoadMore());
            }),
            (this.undoMarkChannelRead = () => {
                if (0 === this.undoStack.length) return;
                let e = this.undoStack.pop();
                if (null == e) return;
                p.In(
                    e.channelId,
                    {
                        section: k.jXE.INBOX,
                        object: k.qAy.UNDO_MARK_AS_READ,
                        objectType: k.Qqv.ACK_MANUAL
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
                (d.Z.wait(() => (0, b.Z)([e], k.jXE.INBOX)), this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }), this.maybeLoadMore());
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
                    (0, j.BU)(
                        n,
                        t,
                        (e) => {
                            e.collapsedInInbox = a;
                        },
                        j.fy.FREQUENT_USER_ACTION
                    ),
                    this.setState({
                        scrollToChannelIndex: o,
                        collapsedChannels: i,
                        loadState: 'done' !== l || a || s.isFullyLoaded ? l : 'loaded',
                        channels: this.updateChannel(t, (e) => V(B({}, e), { collapsed: a }))
                    }),
                    s.collapsed ? s.isFullyLoaded || this.loadMore() : this.maybeLoadMore());
            }),
            (this.handleUserGuildSettingsStoreChange = () => {
                let e = this.state.channels.filter((e) => !R.ZP.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
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
                        if (!e.hasLoadedAnything) return e;
                        let t = y.Z.hasLoaded(e.guildId);
                        return V(B({}, e), {
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
function K(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = w.Z.getMessages(e.channelId),
        l = i.toArray().filter((t) => M.default.compare(t.id, e.oldestReadMessageId) > 0 && 0 >= M.default.compare(t.id, e.newestUnreadMessageId));
    if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && r) return e;
    let o = null != i.getAfter(e.oldestReadMessageId) || (null == (n = l[0]) ? void 0 : n.id) === e.oldestUnreadMessageId,
        s = l[l.length - 1],
        a = M.default.compare(null == s ? void 0 : s.id, e.newestUnreadMessageId) >= 0 || l.length >= z;
    return V(B({}, e), {
        messages: l,
        hasLoadedAnything: e.hasLoadedAnything || o || t,
        hasLoadedFirst: e.hasLoadedFirst || o || t,
        isFullyLoaded: e.isFullyLoaded || (o && a) || (t && !i.hasMoreAfter)
    });
}
function Y() {
    let e = (function () {
            var e, t;
            let n = {},
                r = null != (t = null == (e = E.Z.settings.guilds) ? void 0 : e.guilds) ? t : {};
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
                S.Z.getSortedPrivateChannels().forEach((n) => q(e, t, null, n.id)),
                A.ZP.getFlattenedGuildIds().forEach((n) => {
                    if (null == n) return;
                    let r = I.ZP.getSelectableChannelIds(n),
                        i = O.Z.getActiveJoinedUnreadThreadsForGuild(n);
                    r.forEach((r) => {
                        var l;
                        q(e, t, n, r);
                        let o = null != (l = i[r]) ? l : {};
                        for (let r in o) q(e, t, n, r);
                    });
                }),
                u().sortBy(t, (e) => e.sortOrder)
            );
        })(e),
        n = u()
            .uniq(t.map((e) => e.guildId))
            .filter(L.lm);
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
function q(e, t, n, r) {
    if (null == r) return;
    let i = S.Z.getChannel(r);
    if (null == i || (!x.Ec.has(i.type) && R.ZP.isGuildOrCategoryOrChannelMuted(n, i.id))) return;
    if (i.isPrivate()) {
        if (0 === T.ZP.getMentionCount(r)) return;
    } else if (!(0, _.d)(i) && 0 === T.ZP.getMentionCount(r)) return;
    if (!i.isPrivate() && !Z.Z.can(k.Plq.READ_MESSAGE_HISTORY, i)) return;
    let l = T.ZP.ackMessageId(r);
    if (null == l) {
        let e = N.Z.getGuild(i.guild_id);
        if (null == e || null == e.joinedAt) return;
        l = M.default.fromTimestamp(e.joinedAt.getTime());
    }
    let o = T.ZP.getOldestUnreadMessageId(r),
        s = T.ZP.lastMessageId(r),
        a = T.ZP.getMentionCount(r),
        c = a > 0 || i.isPrivate();
    if (null == s || M.default.compare(l, s) >= 0) return;
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
            if (m.Z.isFavorite(t)) return 0;
            if (r.isPrivate()) return 1;
            if (T.ZP.getMentionCount(t) > 0) return T.ZP.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = M.default.extractTimestamp(n);
                if (Date.now() - e > Q) return 8;
                if (Date.now() - e > X) return 6;
            }
            if (r.isThread()) {
                let e = (0, C.J)(r);
                return e === U.iN.ALL_MESSAGES ? 4 : e === U.iN.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = R.ZP.getChannelMessageNotifications(e, t),
                    r = n === k.bL.NULL ? R.ZP.getMessageNotifications(e) : n;
                return r === k.bL.ALL_MESSAGES ? 4 : r === k.bL.NO_MESSAGES ? 7 : 5;
            }
        })(n, r, s),
        order: 0
    };
    (0, g.aC)(i) && !P.Z.didAgree(i.guild_id)
        ? t.push(V(B({}, u), { type: 'nsfw' }))
        : i.isForumLikeChannel()
          ? t.push(V(B({}, u), { type: 'forum' }))
          : t.push(
                V(B({}, u), {
                    type: 'messages',
                    messages: []
                })
            );
}
let X = 2 * D.Z.Millis.DAY,
    Q = 10 * D.Z.Millis.DAY;
function J(e) {
    let [t, n] = l.useState(() => new W(Y(), e)),
        [r, i] = l.useState(!1),
        o = l.useRef(Date.now()),
        [s, a] = l.useState(() => Y());
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
                l = Y();
            0 === l.channels.length || t - o.current < 10 * D.Z.Millis.SECOND ? i(!0) : ((o.current = Date.now()), n(new W(l, e)));
        }, [s, r, e]));
    let c = l.useRef(t);
    return (
        l.useLayoutEffect(() => {
            c.current = t;
        }),
        l.useLayoutEffect(() => {
            (null == s || s.channels, null == s || s.loadState, c.current.maybeLoadMore());
        }, [null == s ? void 0 : s.channels, null == s ? void 0 : s.loadState]),
        l.useEffect(() => (w.Z.addChangeListener(t.reloadMessages), () => w.Z.removeChangeListener(t.reloadMessages)), [t.reloadMessages]),
        l.useEffect(() => (R.ZP.addChangeListener(t.handleUserGuildSettingsStoreChange), () => R.ZP.removeChangeListener(t.handleUserGuildSettingsStoreChange)), [t]),
        l.useEffect(() => (v.Z.addChangeListener(t.handleJoinedThreadsStoreChange), () => v.Z.removeChangeListener(t.handleJoinedThreadsStoreChange)), [t]),
        l.useEffect(() => (y.Z.addChangeListener(t.handleActiveThreadsStoreChange), () => y.Z.removeChangeListener(t.handleActiveThreadsStoreChange)), [t]),
        [s, t]
    );
}
