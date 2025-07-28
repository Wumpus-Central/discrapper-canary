(n.d(t, {
    As: () => H,
    ZP: () => $,
    hC: () => W,
    jd: () => z
}),
    n(539854),
    n(388685));
var r,
    i,
    l = n(73800),
    o = n(836560),
    a = n(512722),
    s = n.n(a),
    c = n(392711),
    u = n.n(c),
    d = n(570140),
    h = n(904245),
    p = n(45114),
    f = n(607070),
    g = n(81643),
    m = n(622822),
    b = n(853856),
    _ = n(181945),
    O = n(220444),
    y = n(601070),
    C = n(344185),
    v = n(569471),
    j = n(723170),
    E = n(675478),
    S = n(581883),
    x = n(131704),
    I = n(592125),
    P = n(984933),
    N = n(731290),
    w = n(430824),
    T = n(375954),
    Z = n(496675),
    A = n(306680),
    R = n(771845),
    D = n(9156),
    L = n(70956),
    M = n(823379),
    k = n(709054),
    U = n(981631),
    G = n(124368);
function B(e, t, n) {
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
function V(e) {
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
                B(e, t, n[t]);
            }));
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
var H = (((r = {})[(r.Favorite = 0)] = 'Favorite'), (r[(r.PrivateChannel = 1)] = 'PrivateChannel'), (r[(r.HighImportanceMentioned = 2)] = 'HighImportanceMentioned'), (r[(r.LowImportanceMentioned = 3)] = 'LowImportanceMentioned'), (r[(r.AllMessagesNotifications = 4)] = 'AllMessagesNotifications'), (r[(r.GuildChannel = 5)] = 'GuildChannel'), (r[(r.OldChannel = 6)] = 'OldChannel'), (r[(r.NoNotifications = 7)] = 'NoNotifications'), (r[(r.ReallyOldChannel = 8)] = 'ReallyOldChannel'), r),
    z = (((i = {}).Loading = 'loading'), (i.Loaded = 'loaded'), (i.Done = 'done'), i);
let W = 25;
class K extends o.EventEmitter {
    loadMore() {
        let { loadState: e, channels: t } = this.state;
        if ('loaded' !== e) return;
        let n = !1,
            r = t.map((e) => {
                if (e.isFullyLoaded || e.deleted || n) return e;
                if (e.collapsed)
                    if (!e.hasLoadedAnything) return F(V({}, e), { hasLoadedAnything: !0 });
                    else return e;
                return ((e = this.populateInitialStateFromStore(e)).isFullyLoaded || (s()('nsfw' !== e.type, 'this channel should already be loaded'), 'messages' === e.type && this.loadChannelMessages(e) && (n = !0)), e);
            });
        (!n || r.some((e, n) => e !== t[n])) &&
            this.setState({
                channels: r,
                loadState: n ? this.state.loadState : 'done'
            });
    }
    populateInitialStateFromStore(e) {
        if ('messages' === e.type) return Y(e, !1);
        if ('nsfw' === e.type)
            return F(V({}, e), {
                isFullyLoaded: !0,
                hasLoadedAnything: !0
            });
        if ('forum' === e.type) {
            let t = C.Z.hasLoaded(e.guildId);
            return F(V({}, e), {
                isFullyLoaded: t,
                hasLoadedAnything: !0
            });
        }
        (0, M.vE)(e);
    }
    clearScrollToChannelIndex() {
        this.setState({ scrollToChannelIndex: null });
    }
    loadChannelMessages(e) {
        h.Z.clearChannel(e.channelId);
        let t = h.Z.fetchMessages({
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
                            s()('messages' === e.type, 'channel cannot change type');
                            let n = Y(e, !0);
                            return (
                                (0 === n.messages.length || n.messages.length === e.messages.length) &&
                                    (n = F(V({}, n), {
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
                                F(V({}, Y(e, !0)), {
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
                ((this.state = V({}, this.state, e)), this.emit('change', this.state));
                return;
            }
    }
    constructor(e, t) {
        (super(),
            B(this, 'state', void 0),
            B(this, 'scrollerRef', void 0),
            B(this, 'undoStack', void 0),
            B(this, 'maybeLoadMore', void 0),
            B(this, 'reloadMessages', void 0),
            B(this, 'getNumUnreadChannels', void 0),
            B(this, 'markChannelRead', void 0),
            B(this, 'undoMarkChannelRead', void 0),
            B(this, 'markGuildRead', void 0),
            B(this, 'deleteChannel', void 0),
            B(this, 'markAllRead', void 0),
            B(this, 'toggle', void 0),
            B(this, 'handleUserGuildSettingsStoreChange', void 0),
            B(this, 'handleJoinedThreadsStoreChange', void 0),
            B(this, 'handleActiveThreadsStoreChange', void 0),
            (this.state = e),
            (this.scrollerRef = t),
            (this.undoStack = []),
            (this.maybeLoadMore = () => {
                var e;
                let t = null == (e = this.scrollerRef.current) ? void 0 : e.getScrollerState();
                null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 2000 && this.loadMore();
            }),
            (this.reloadMessages = () => {
                this.setState({ channels: this.state.channels.map((e) => ('messages' === e.type && e.hasLoadedAnything ? Y(e, !1, !0) : e)) });
            }),
            (this.getNumUnreadChannels = () => this.state.channels.length),
            (this.markChannelRead = (e) => {
                let { channelId: t, newestUnreadMessageId: n } = e;
                d.Z.wait(() =>
                    p.In(
                        t,
                        {
                            section: U.jXE.INBOX,
                            object: U.qAy.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                            objectType: U.Qqv.ACK_AUTOMATIC
                        },
                        !0,
                        void 0,
                        n
                    )
                );
                let r = this.state.channels.find((e) => e.channelId === t);
                if ((null != r && this.undoStack.push(r), 1 === this.state.channels.length)) return void this.deleteChannel(t);
                (this.setState({ channels: this.updateChannel(t, (e) => F(V({}, e), { deleted: !0 })) }), f.Z.useReducedMotion && this.deleteChannel(t), this.maybeLoadMore());
            }),
            (this.undoMarkChannelRead = () => {
                if (0 === this.undoStack.length) return;
                let e = this.undoStack.pop();
                if (null == e) return;
                p.In(
                    e.channelId,
                    {
                        section: U.jXE.INBOX,
                        object: U.qAy.UNDO_MARK_AS_READ,
                        objectType: U.Qqv.ACK_MANUAL
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
                (d.Z.wait(() => (0, _.Z)([e], U.jXE.INBOX)), this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }), this.maybeLoadMore());
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
                    a = r[o],
                    s = !a.collapsed;
                ((i[t] = s),
                    (0, E.BU)(
                        n,
                        t,
                        (e) => {
                            e.collapsedInInbox = s;
                        },
                        E.fy.FREQUENT_USER_ACTION
                    ),
                    this.setState({
                        scrollToChannelIndex: o,
                        collapsedChannels: i,
                        loadState: 'done' !== l || s || a.isFullyLoaded ? l : 'loaded',
                        channels: this.updateChannel(t, (e) => F(V({}, e), { collapsed: s }))
                    }),
                    a.collapsed ? a.isFullyLoaded || this.loadMore() : this.maybeLoadMore());
            }),
            (this.handleUserGuildSettingsStoreChange = () => {
                let e = this.state.channels.filter((e) => !D.ZP.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
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
                        let t = C.Z.hasLoaded(e.guildId);
                        return F(V({}, e), {
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
function Y(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = T.Z.getMessages(e.channelId),
        l = i.toArray().filter((t) => k.default.compare(t.id, e.oldestReadMessageId) > 0 && 0 >= k.default.compare(t.id, e.newestUnreadMessageId));
    if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && r) return e;
    let o = null != i.getAfter(e.oldestReadMessageId) || (null == (n = l[0]) ? void 0 : n.id) === e.oldestUnreadMessageId,
        a = l[l.length - 1],
        s = k.default.compare(null == a ? void 0 : a.id, e.newestUnreadMessageId) >= 0 || l.length >= W;
    return F(V({}, e), {
        messages: l,
        hasLoadedAnything: e.hasLoadedAnything || o || t,
        hasLoadedFirst: e.hasLoadedFirst || o || t,
        isFullyLoaded: e.isFullyLoaded || (o && s) || (t && !i.hasMoreAfter)
    });
}
function q() {
    let e = (function () {
            var e, t;
            let n = {},
                r = null != (t = null == (e = S.Z.settings.guilds) ? void 0 : e.guilds) ? t : {};
            for (let e in r)
                for (let t in r[e].channels) {
                    let i = I.Z.getChannel(t);
                    (t in n && (null == i ? void 0 : i.guild_id) !== e) || (n[t] = r[e].channels[t].collapsedInInbox);
                }
            return n;
        })(),
        t = (function (e) {
            let t = [];
            return (
                I.Z.getSortedPrivateChannels().forEach((n) => X(e, t, null, n.id)),
                R.ZP.getFlattenedGuildIds().forEach((n) => {
                    if (null == n) return;
                    let r = P.ZP.getSelectableChannelIds(n),
                        i = y.Z.getActiveJoinedUnreadThreadsForGuild(n);
                    r.forEach((r) => {
                        var l;
                        X(e, t, n, r);
                        let o = null != (l = i[r]) ? l : {};
                        for (let r in o) X(e, t, n, r);
                    });
                }),
                u().sortBy(t, (e) => e.sortOrder)
            );
        })(e),
        n = u()
            .uniq(t.map((e) => e.guildId))
            .filter(M.lm);
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
function X(e, t, n, r) {
    if (null == r) return;
    let i = I.Z.getChannel(r);
    if (null == i || (!x.Ec.has(i.type) && D.ZP.isGuildOrCategoryOrChannelMuted(n, i.id))) return;
    if (i.isPrivate()) {
        if (0 === A.ZP.getMentionCount(r)) return;
    } else if (!(0, O.d)(i) && 0 === A.ZP.getMentionCount(r)) return;
    if ((!i.isPrivate() && !Z.Z.can(U.Plq.READ_MESSAGE_HISTORY, i)) || ((0, m.aC)(i) && (0, g.sf)())) return;
    let l = A.ZP.ackMessageId(r);
    if (null == l) {
        let e = w.Z.getGuild(i.guild_id);
        if (null == e || null == e.joinedAt) return;
        l = k.default.fromTimestamp(e.joinedAt.getTime());
    }
    let o = A.ZP.getOldestUnreadMessageId(r),
        a = A.ZP.lastMessageId(r),
        s = A.ZP.getMentionCount(r),
        c = s > 0 || i.isPrivate();
    if (null == a || k.default.compare(l, a) >= 0) return;
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
            let r = I.Z.getChannel(t);
            if (b.Z.isFavorite(t)) return 0;
            if (r.isPrivate()) return 1;
            if (A.ZP.getMentionCount(t) > 0) return A.ZP.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = k.default.extractTimestamp(n);
                if (Date.now() - e > J) return 8;
                if (Date.now() - e > Q) return 6;
            }
            if (r.isThread()) {
                let e = (0, j.J)(r);
                return e === G.iN.ALL_MESSAGES ? 4 : e === G.iN.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = D.ZP.getChannelMessageNotifications(e, t),
                    r = n === U.bL.NULL ? D.ZP.getMessageNotifications(e) : n;
                return r === U.bL.ALL_MESSAGES ? 4 : r === U.bL.NO_MESSAGES ? 7 : 5;
            }
        })(n, r, a),
        order: 0
    };
    (0, m.aC)(i) && !N.Z.didAgree(i.guild_id)
        ? t.push(F(V({}, u), { type: 'nsfw' }))
        : i.isForumLikeChannel()
          ? t.push(F(V({}, u), { type: 'forum' }))
          : t.push(
                F(V({}, u), {
                    type: 'messages',
                    messages: []
                })
            );
}
let Q = 2 * L.Z.Millis.DAY,
    J = 10 * L.Z.Millis.DAY;
function $(e) {
    let [t, n] = l.useState(() => new K(q(), e)),
        [r, i] = l.useState(!1),
        o = l.useRef(Date.now()),
        [a, s] = l.useState(() => q());
    (l.useEffect(() => {
        let e = (e) => s(e);
        return (
            t.on('change', e),
            s(t.state),
            () => {
                t.off('change', e);
            }
        );
    }, [t]),
        l.useEffect(() => {
            if (null == a || a.channels.length > 0 || r) return;
            let t = Date.now(),
                l = q();
            0 === l.channels.length || t - o.current < 10 * L.Z.Millis.SECOND ? i(!0) : ((o.current = Date.now()), n(new K(l, e)));
        }, [a, r, e]));
    let c = l.useRef(t);
    return (
        l.useLayoutEffect(() => {
            c.current = t;
        }),
        l.useLayoutEffect(() => {
            (null == a || a.channels, null == a || a.loadState, c.current.maybeLoadMore());
        }, [null == a ? void 0 : a.channels, null == a ? void 0 : a.loadState]),
        l.useEffect(() => (T.Z.addChangeListener(t.reloadMessages), () => T.Z.removeChangeListener(t.reloadMessages)), [t.reloadMessages]),
        l.useEffect(() => (D.ZP.addChangeListener(t.handleUserGuildSettingsStoreChange), () => D.ZP.removeChangeListener(t.handleUserGuildSettingsStoreChange)), [t]),
        l.useEffect(() => (v.Z.addChangeListener(t.handleJoinedThreadsStoreChange), () => v.Z.removeChangeListener(t.handleJoinedThreadsStoreChange)), [t]),
        l.useEffect(() => (C.Z.addChangeListener(t.handleActiveThreadsStoreChange), () => C.Z.removeChangeListener(t.handleActiveThreadsStoreChange)), [t]),
        [a, t]
    );
}
