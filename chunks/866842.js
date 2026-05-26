"use strict";
n.d(t, { D: () => R, g: () => b }), n(321073);
var i = n(64700),
    r = n(735438),
    s = n.n(r),
    a = n(873298),
    o = n(933958),
    l = n(181079),
    u = n(313281),
    c = n(424345),
    d = n(698441),
    _ = n(695633),
    f = n(152007),
    h = n(95701),
    p = n(924985),
    E = n(734057),
    m = n(945886),
    g = n(760751),
    A = n(576705),
    I = n(222823),
    T = n(309010),
    S = n(543465),
    N = n(403362),
    y = n(297469),
    C = n(349828),
    v = n(818348);
let O = [o.Ay, l.A, d.Ay, _.A, f.A, p.A, E.A, g.A, A.A, I.Ay, T.A, S.Ay];
function R() {
    let { hasAccess: e } = (0, u.TW)("FavoritesGuildChannelList"),
        [t, n] = i.useState(() => b()),
        r = i.useMemo(() => b({}), []);
    i.useEffect(() => {
        let e = s().throttle(() => n(b()), 100);
        return O.forEach((t) => t.addChangeListener(e)), () => O.forEach((t) => t.removeChangeListener(e));
    }, []);
    let a = e ? t : r,
        o = (function (e) {
            if (e.getSections().length > y.TF) return !1;
            let t = !1;
            return (
                e.forEachShownChannel(() => {
                    t = !0;
                }),
                !t
            );
        })(a);
    return { guildChannels: a, shouldShowEmptyState: o };
}
function b(e) {
    let t = e ?? l.A.getFavoriteChannels(),
        n = S.Ay.isGuildCollapsed(C.Vc),
        i = T.A.getChannelId(),
        r = E.A.getChannel(i),
        o = T.A.getVoiceChannelId(),
        d = [],
        f = {};
    for (let e in t) {
        let n = t[e],
            i = E.A.getChannel(n.id);
        if (null == i || n.type === a.Ip.CATEGORY) continue;
        let r = (0, c.K)(t, n, i);
        if (null == n.parentId || null == t[n.parentId] || t[n.parentId].type !== a.Ip.CATEGORY) {
            d.push(r);
            continue;
        }
        let s = n.parentId;
        s in f || (f[s] = []), f[s].push(r);
    }
    function g(e, i) {
        let { isCollapsed: a, isMuted: l } = i;
        return s()(e)
            .map((e) => {
                if (!e.isPrivate() && !A.A.can(v.xB.VIEW_CHANNEL, e)) return null;
                let u = null != r && (r.id === e.id || o === e.id),
                    c = null != r && r.isThread() && r.parent_id === e.id,
                    d =
                        (u || c || !a
                            ? _.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : _.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    f = (0, y.wF)(e, d, r, o, n),
                    p = m.A.isCollapsed(e.id),
                    E = S.Ay.isChannelMuted(e.guild_id, e.id),
                    g = {
                        id: e.id,
                        record: e,
                        category: i,
                        position: t[e.id].order,
                        threadIds: f,
                        threadCount: s().size(f),
                        isCollapsed: p,
                        isMuted: E,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, y.go)(e, p, !1),
                    };
                return u || c || !s().isEmpty(d) || I.Ay.getMentionCount(e.id) > 0
                    ? g
                    : (n && E) ||
                        (a && (E || l || (0, h.gV)(e.type) || ((0, h.ig)(e.type) && !1 === I.Ay.hasUnread(e.id))))
                      ? null
                      : g;
            })
            .filter(N.Vq)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 1e4 : t.position;
            })
            .value();
    }
    let O = null,
        R = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => d,
            getShownChannelIds: () => d.map((e) => e.id),
            getShownChannelAndThreadIds: () => d.map((e) => e.id),
            isEmpty: () => 0 === d.length,
            get channelList() {
                return null == O && (O = g(d, this)), O;
            },
        },
        b = (0, u.m_)(t)
            .filter((e) => null != e.id)
            .map((e) => {
                let { id: n } = e,
                    i = l.A.getCategoryRecord(n);
                if (null == i) return null;
                let r = f[n] ?? [],
                    s = S.Ay.isChannelMuted(C.Vc, n),
                    a = p.A.isCollapsed(n),
                    o = null;
                return {
                    isMuted: s,
                    isCollapsed: a,
                    record: i,
                    id: n,
                    position: t[n]?.order ?? 0,
                    getChannelRecords: () => r,
                    getShownChannelIds: () => r.map((e) => e.id),
                    getShownChannelAndThreadIds: () => r.map((e) => e.id),
                    isEmpty: () => 0 === r.length,
                    get channelList() {
                        return null == o && (o = g(r, this)), o;
                    },
                };
            })
            .filter((e) => null != e),
        D = 0;
    for (let e of [R, ...b]) for (let t of ((e.position = ++D), e.channelList)) t.position = ++D;
    let L = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        w = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
    return {
        id: C.Vc,
        hideMutedChannels: n,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[y.Xt] = 0), (e[y.PU] = 0), (e[y.HP] = 0), (e[y.yO] = 0), (e[y.bK] = R.channelList.length);
            for (let t = 0; t < b.length; t++) e[y.TF + t] = Math.max(1, b[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < y.TF) && 0 === t && 0 === b[e - y.TF].channelList.length,
        getCategoryFromSection: (e) => (e === y.bK ? R : b[e - y.TF]),
        getNamedCategoryFromSection: (e) => b[e - y.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => L,
        getChannelNoticeSection: () => w,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [R, ...b];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + y.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [R, ...b])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = E.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [R, ...b]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
