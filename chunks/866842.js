n.d(t, { D: () => G, g: () => R }), n(321073);
var i = n(64700),
    l = n(735438),
    r = n.n(l),
    s = n(873298),
    o = n(933958),
    a = n(181079),
    d = n(93055),
    c = n(424345),
    u = n(698441),
    A = n(863005),
    E = n(152007),
    _ = n(95701),
    I = n(924985),
    g = n(734057),
    C = n(945886),
    h = n(760751),
    p = n(576705),
    T = n(222823),
    S = n(309010),
    N = n(543465),
    b = n(403362),
    L = n(32603),
    O = n(349828),
    m = n(818348);
let f = 21552 == n.j ? [o.Ay, a.A, u.Ay, A.A, E.A, I.A, g.A, h.A, p.A, T.Ay, S.A, N.Ay] : null;
function G() {
    let { hasAccess: e } = (0, d.TW)("FavoritesGuildChannelList"),
        [t, n] = i.useState(() => R()),
        l = i.useMemo(() => R({}), []);
    i.useEffect(() => {
        let e = r().throttle(() => n(R()), 100);
        return f.forEach((t) => t.addChangeListener(e)), () => f.forEach((t) => t.removeChangeListener(e));
    }, []);
    let s = e ? t : l,
        o = (function (e) {
            if (e.getSections().length > L.TF) return !1;
            let t = !1;
            return (
                e.forEachShownChannel(() => {
                    t = !0;
                }),
                !t
            );
        })(s);
    return { guildChannels: s, shouldShowEmptyState: o };
}
function R(e) {
    let t = e ?? a.A.getFavoriteChannels(),
        n = N.Ay.isGuildCollapsed(O.Vc),
        i = S.A.getChannelId(),
        l = g.A.getChannel(i),
        o = S.A.getVoiceChannelId(),
        d = [],
        u = {};
    for (let e in t) {
        let n = t[e],
            i = g.A.getChannel(n.id);
        if (null == i || n.type === s.Ip.CATEGORY) continue;
        let l = (0, c.K)(t, n, i);
        if (null == n.parentId || null == t[n.parentId] || t[n.parentId].type !== s.Ip.CATEGORY) {
            d.push(l);
            continue;
        }
        let r = n.parentId;
        r in u || (u[r] = []), u[r].push(l);
    }
    function E(e, i) {
        let { isCollapsed: s, isMuted: a } = i;
        return r()(e)
            .map((e) => {
                if (!e.isPrivate() && !p.A.can(m.xB.VIEW_CHANNEL, e)) return null;
                let d = null != l && (l.id === e.id || o === e.id),
                    c = null != l && l.isThread() && l.parent_id === e.id,
                    u =
                        (d || c || !s
                            ? A.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : A.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    E = (0, L.wF)(e, u, l, o, n),
                    I = C.A.isCollapsed(e.id),
                    g = N.Ay.isChannelMuted(e.guild_id, e.id),
                    h = {
                        id: e.id,
                        record: e,
                        category: i,
                        position: t[e.id].order,
                        threadIds: E,
                        threadCount: r().size(E),
                        isCollapsed: I,
                        isMuted: g,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, L.go)(e, I, !1),
                    };
                return d || c || !r().isEmpty(u) || T.Ay.getMentionCount(e.id) > 0
                    ? h
                    : (n && g) ||
                        (s && (g || a || (0, _.gV)(e.type) || ((0, _.ig)(e.type) && !1 === T.Ay.hasUnread(e.id))))
                      ? null
                      : h;
            })
            .filter(b.Vq)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 1e4 : t.position;
            })
            .value();
    }
    let h = null,
        f = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => d,
            getShownChannelIds: () => d.map((e) => e.id),
            getShownChannelAndThreadIds: () => d.map((e) => e.id),
            isEmpty: () => 0 === d.length,
            get channelList() {
                return null == h && (h = E(d, this)), h;
            },
        },
        G = r()(t)
            .values()
            .filter((e) => e.type === s.Ip.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
                let { id: t, order: n } = e,
                    i = a.A.getCategoryRecord(t);
                if (null == i) return null;
                let l = u[t] ?? [],
                    r = N.Ay.isChannelMuted(O.Vc, t),
                    s = I.A.isCollapsed(t),
                    o = null;
                return {
                    isMuted: r,
                    isCollapsed: s,
                    record: i,
                    id: t,
                    position: n,
                    getChannelRecords: () => l,
                    getShownChannelIds: () => l.map((e) => e.id),
                    getShownChannelAndThreadIds: () => l.map((e) => e.id),
                    isEmpty: () => 0 === l.length,
                    get channelList() {
                        return null == o && (o = E(l, this)), o;
                    },
                };
            })
            .filter((e) => null != e)
            .value(),
        R = 0;
    for (let e of [f, ...G]) for (let t of ((e.position = ++R), e.channelList)) t.position = ++R;
    let U = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        D = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
    return {
        id: O.Vc,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[L.Xt] = 0), (e[L.PU] = 0), (e[L.HP] = 0), (e[L.yO] = 0), (e[L.bK] = f.channelList.length);
            for (let t = 0; t < G.length; t++) e[L.TF + t] = Math.max(1, G[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < L.TF) && 0 === t && 0 === G[e - L.TF].channelList.length,
        getCategoryFromSection: (e) => (e === L.bK ? f : G[e - L.TF]),
        getNamedCategoryFromSection: (e) => G[e - L.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => U,
        getChannelNoticeSection: () => D,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [f, ...G];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + L.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [f, ...G])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = g.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [f, ...G]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
