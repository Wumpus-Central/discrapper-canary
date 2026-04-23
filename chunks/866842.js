n.d(t, { D: () => y, g: () => G }), n(321073);
var i = n(64700),
    r = n(735438),
    s = n.n(r),
    l = n(873298),
    o = n(933958),
    a = n(181079),
    d = n(313281),
    c = n(424345),
    _ = n(698441),
    u = n(695633),
    g = n(152007),
    h = n(95701),
    A = n(924985),
    p = n(734057),
    I = n(945886),
    E = n(760751),
    b = n(576705),
    C = n(222823),
    S = n(309010),
    m = n(543465),
    f = n(403362),
    N = n(32603),
    T = n(349828),
    L = n(818348);
let O = 21552 == n.j ? [o.Ay, a.A, _.Ay, u.A, g.A, A.A, p.A, E.A, b.A, C.Ay, S.A, m.Ay] : null;
function y() {
    let { hasAccess: e } = (0, d.TW)("FavoritesGuildChannelList"),
        [t, n] = i.useState(() => G()),
        r = i.useMemo(() => G({}), []);
    i.useEffect(() => {
        let e = s().throttle(() => n(G()), 100);
        return O.forEach((t) => t.addChangeListener(e)), () => O.forEach((t) => t.removeChangeListener(e));
    }, []);
    let l = e ? t : r,
        o = (function (e) {
            if (e.getSections().length > N.TF) return !1;
            let t = !1;
            return (
                e.forEachShownChannel(() => {
                    t = !0;
                }),
                !t
            );
        })(l);
    return { guildChannels: l, shouldShowEmptyState: o };
}
function G(e) {
    let t = e ?? a.A.getFavoriteChannels(),
        n = m.Ay.isGuildCollapsed(T.Vc),
        i = S.A.getChannelId(),
        r = p.A.getChannel(i),
        o = S.A.getVoiceChannelId(),
        _ = [],
        g = {};
    for (let e in t) {
        let n = t[e],
            i = p.A.getChannel(n.id);
        if (null == i || n.type === l.Ip.CATEGORY) continue;
        let r = (0, c.K)(t, n, i);
        if (null == n.parentId || null == t[n.parentId] || t[n.parentId].type !== l.Ip.CATEGORY) {
            _.push(r);
            continue;
        }
        let s = n.parentId;
        s in g || (g[s] = []), g[s].push(r);
    }
    function E(e, i) {
        let { isCollapsed: l, isMuted: a } = i;
        return s()(e)
            .map((e) => {
                if (!e.isPrivate() && !b.A.can(L.xB.VIEW_CHANNEL, e)) return null;
                let d = null != r && (r.id === e.id || o === e.id),
                    c = null != r && r.isThread() && r.parent_id === e.id,
                    _ =
                        (d || c || !l
                            ? u.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : u.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    g = (0, N.wF)(e, _, r, o, n),
                    A = I.A.isCollapsed(e.id),
                    p = m.Ay.isChannelMuted(e.guild_id, e.id),
                    E = {
                        id: e.id,
                        record: e,
                        category: i,
                        position: t[e.id].order,
                        threadIds: g,
                        threadCount: s().size(g),
                        isCollapsed: A,
                        isMuted: p,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, N.go)(e, A, !1),
                    };
                return d || c || !s().isEmpty(_) || C.Ay.getMentionCount(e.id) > 0
                    ? E
                    : (n && p) ||
                        (l && (p || a || (0, h.gV)(e.type) || ((0, h.ig)(e.type) && !1 === C.Ay.hasUnread(e.id))))
                      ? null
                      : E;
            })
            .filter(f.Vq)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 1e4 : t.position;
            })
            .value();
    }
    let O = null,
        y = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => _,
            getShownChannelIds: () => _.map((e) => e.id),
            getShownChannelAndThreadIds: () => _.map((e) => e.id),
            isEmpty: () => 0 === _.length,
            get channelList() {
                return null == O && (O = E(_, this)), O;
            },
        },
        G = (0, d.m_)(t)
            .filter((e) => null != e.id)
            .map((e) => {
                let { id: n } = e,
                    i = a.A.getCategoryRecord(n);
                if (null == i) return null;
                let r = g[n] ?? [],
                    s = m.Ay.isChannelMuted(T.Vc, n),
                    l = A.A.isCollapsed(n),
                    o = null;
                return {
                    isMuted: s,
                    isCollapsed: l,
                    record: i,
                    id: n,
                    position: t[n]?.order ?? 0,
                    getChannelRecords: () => r,
                    getShownChannelIds: () => r.map((e) => e.id),
                    getShownChannelAndThreadIds: () => r.map((e) => e.id),
                    isEmpty: () => 0 === r.length,
                    get channelList() {
                        return null == o && (o = E(r, this)), o;
                    },
                };
            })
            .filter((e) => null != e),
        x = 0;
    for (let e of [y, ...G]) for (let t of ((e.position = ++x), e.channelList)) t.position = ++x;
    let R = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        M = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
    return {
        id: T.Vc,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[N.Xt] = 0), (e[N.PU] = 0), (e[N.HP] = 0), (e[N.yO] = 0), (e[N.bK] = y.channelList.length);
            for (let t = 0; t < G.length; t++) e[N.TF + t] = Math.max(1, G[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < N.TF) && 0 === t && 0 === G[e - N.TF].channelList.length,
        getCategoryFromSection: (e) => (e === N.bK ? y : G[e - N.TF]),
        getNamedCategoryFromSection: (e) => G[e - N.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => R,
        getChannelNoticeSection: () => M,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [y, ...G];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + N.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [y, ...G])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = p.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [y, ...G]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
