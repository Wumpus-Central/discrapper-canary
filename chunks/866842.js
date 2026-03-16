n.d(t, { Om: () => y, g3: () => R }), n(321073);
var i = n(64700),
    r = n(735438),
    a = n.n(r),
    s = n(873298),
    l = n(933958),
    o = n(181079),
    d = n(93055),
    c = n(424345),
    _ = n(698441),
    u = n(863005),
    A = n(152007),
    E = n(95701),
    g = n(924985),
    I = n(734057),
    h = n(945886),
    C = n(760751),
    p = n(576705),
    f = n(222823),
    m = n(309010),
    S = n(543465),
    T = n(403362),
    b = n(32603),
    N = n(349828),
    L = n(818348);
let O = 21552 == n.j ? [l.Ay, o.A, _.Ay, u.A, A.A, g.A, I.A, C.A, p.A, f.Ay, m.A, S.Ay] : null;
function y() {
    let e = (function () {
        let { hasAccess: e } = (0, d.TW)("FavoritesGuildChannelList"),
            [t, n] = i.useState(() => R()),
            r = i.useMemo(() => R({}), []);
        return (
            i.useEffect(() => {
                let e = a().throttle(() => n(R()), 100);
                return O.forEach((t) => t.addChangeListener(e)), () => O.forEach((t) => t.removeChangeListener(e));
            }, []),
            e ? t : r
        );
    })();
    return {
        guildChannels: e,
        hasShownFavoritedChannels: (function (e) {
            if (e.getSections().length > b.TF) return !0;
            let t = !1;
            return (
                e.forEachShownChannel(() => {
                    t = !0;
                }),
                t
            );
        })(e),
    };
}
function R(e) {
    let t = e ?? o.A.getFavoriteChannels(),
        n = S.Ay.isGuildCollapsed(N.Vc),
        i = m.A.getChannelId(),
        r = I.A.getChannel(i),
        l = m.A.getVoiceChannelId(),
        d = [],
        _ = {};
    for (let e in t) {
        let n = t[e],
            i = I.A.getChannel(n.id);
        if (null == i || n.type === s.Ip.CATEGORY) continue;
        let r = (0, c.K)(t, n, i);
        if (null == n.parentId || null == t[n.parentId] || t[n.parentId].type !== s.Ip.CATEGORY) {
            d.push(r);
            continue;
        }
        let a = n.parentId;
        a in _ || (_[a] = []), _[a].push(r);
    }
    function A(e, i) {
        let { isCollapsed: s, isMuted: o } = i;
        return a()(e)
            .map((e) => {
                if (!e.isPrivate() && !p.A.can(L.xB.VIEW_CHANNEL, e)) return null;
                let d = null != r && (r.id === e.id || l === e.id),
                    c = null != r && r.isThread() && r.parent_id === e.id,
                    _ =
                        (d || c || !s
                            ? u.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : u.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    A = (0, b.wF)(e, _, r, l, n),
                    g = h.A.isCollapsed(e.id),
                    I = S.Ay.isChannelMuted(e.guild_id, e.id),
                    C = {
                        id: e.id,
                        record: e,
                        category: i,
                        position: t[e.id].order,
                        threadIds: A,
                        threadCount: a().size(A),
                        isCollapsed: g,
                        isMuted: I,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, b.go)(e, g, !1),
                    };
                return d || c || !a().isEmpty(_) || f.Ay.getMentionCount(e.id) > 0
                    ? C
                    : (n && I) ||
                        (s && (I || o || (0, E.gV)(e.type) || ((0, E.ig)(e.type) && !1 === f.Ay.hasUnread(e.id))))
                      ? null
                      : C;
            })
            .filter(T.Vq)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 1e4 : t.position;
            })
            .value();
    }
    let C = null,
        O = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => d,
            getShownChannelIds: () => d.map((e) => e.id),
            getShownChannelAndThreadIds: () => d.map((e) => e.id),
            isEmpty: () => 0 === d.length,
            get channelList() {
                return null == C && (C = A(d, this)), C;
            },
        },
        y = a()(t)
            .values()
            .filter((e) => e.type === s.Ip.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
                let { id: t, order: n } = e,
                    i = o.A.getCategoryRecord(t);
                if (null == i) return null;
                let r = _[t] ?? [],
                    a = S.Ay.isChannelMuted(N.Vc, t),
                    s = g.A.isCollapsed(t),
                    l = null;
                return {
                    isMuted: a,
                    isCollapsed: s,
                    record: i,
                    id: t,
                    position: n,
                    getChannelRecords: () => r,
                    getShownChannelIds: () => r.map((e) => e.id),
                    getShownChannelAndThreadIds: () => r.map((e) => e.id),
                    isEmpty: () => 0 === r.length,
                    get channelList() {
                        return null == l && (l = A(r, this)), l;
                    },
                };
            })
            .filter((e) => null != e)
            .value(),
        R = 0;
    for (let e of [O, ...y]) for (let t of ((e.position = ++R), e.channelList)) t.position = ++R;
    let v = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        G = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
    return {
        id: N.Vc,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[b.Xt] = 0), (e[b.PU] = 0), (e[b.HP] = 0), (e[b.yO] = 0), (e[b.bK] = O.channelList.length);
            for (let t = 0; t < y.length; t++) e[b.TF + t] = Math.max(1, y[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < b.TF) && 0 === t && 0 === y[e - b.TF].channelList.length,
        getCategoryFromSection: (e) => (e === b.bK ? O : y[e - b.TF]),
        getNamedCategoryFromSection: (e) => y[e - b.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => v,
        getChannelNoticeSection: () => G,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [O, ...y];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + b.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [O, ...y])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = I.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [O, ...y]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
