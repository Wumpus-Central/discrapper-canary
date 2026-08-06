n.d(t, { D: () => D, g: () => y }), n(321073);
var i = n(582128),
    l = n(435558),
    r = n.n(l),
    s = n(873298),
    a = n(933958),
    o = n(617710),
    d = n(698441),
    c = n(297469),
    u = n(863005),
    h = n(152007),
    A = n(353202),
    E = n(95701),
    g = n(924985),
    C = n(734057),
    _ = n(945886),
    I = n(576705),
    T = n(568548),
    p = n(309010),
    N = n(543465),
    S = n(403362),
    L = n(181079),
    m = n(313281),
    f = n(774452),
    O = n(349828),
    b = n(281405),
    R = n(818348);
let v = 21552 == n.j ? [a.Ay, L.A, o.A, d.Ay, u.A, h.A, g.A, C.A, I.A, T.Ay, p.Ay, N.Ay] : null;
function U(e) {
    let { limit: t, includeLoading: n } = e,
        i = L.A.getFavoriteChannels(),
        l = [];
    for (let e in i) {
        if (l.length >= t) break;
        let r = i[e];
        if (
            r.type !== s.Ip.REFERENCE_ORIGINAL ||
            null == r.channelType ||
            !E.Le.has(r.channelType) ||
            null != C.A.getChannel(e)
        )
            continue;
        let a = A.A.getLoadState(e);
        "NOT_FOUND" !== a && (n || "LOADING" !== a) && l.push(e);
    }
    return l;
}
function D() {
    let { withUpsellNotice: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { hasAccess: t, canUpsellFavoriteLimit: n } = (0, m.TW)("FavoritesGuildChannelList"),
        l = e && n,
        [s, a] = i.useState(() => y(void 0, { withUpsellNotice: l })),
        d = o.A.isConnected(),
        u = i.useMemo(() => y({}), []);
    i.useEffect(() => {
        function e() {
            a(y(void 0, { withUpsellNotice: l }));
        }
        e();
        let t = r().throttle(e, 100);
        return v.forEach((e) => e.addChangeListener(t)), () => v.forEach((e) => e.removeChangeListener(t));
    }, [l]),
        i.useEffect(() => {
            if (t && d) {
                let e;
                0 === (e = U({ limit: O.lj, includeLoading: !1 })).length ? Promise.resolve() : A.A.loadThreadsBulk(e);
            }
        }, [t, d]);
    let h = t ? s : u,
        E = t && U({ limit: 1, includeLoading: !0 }).length > 0,
        g = (function (e) {
            if (e.getSections().length > c.TF) return !1;
            let t = !1;
            return (
                e.forEachShownChannel(() => {
                    t = !0;
                }),
                !t
            );
        })(h);
    return { guildChannels: h, shouldShowEmptyState: g && !E, hasNoChannels: g };
}
function y(e) {
    let { withUpsellNotice: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = e ?? L.A.getFavoriteChannels(),
        i = N.Ay.isGuildCollapsed(O.Vc),
        l = p.Ay.getChannelId(),
        a = C.A.getChannel(l),
        o = p.Ay.getVoiceChannelId(),
        d = [],
        A = {};
    for (let e in n) {
        let t = n[e],
            i = C.A.getChannel(t.id);
        if (null == i || t.type === s.Ip.CATEGORY) continue;
        let l = (0, f.R)(n, t, i);
        if (null == t.parentId || null == n[t.parentId] || n[t.parentId].type !== s.Ip.CATEGORY) {
            d.push(l);
            continue;
        }
        let r = t.parentId;
        r in A || (A[r] = []), A[r].push(l);
    }
    function v(e, t) {
        let { isCollapsed: l, isMuted: s } = t;
        return r()(e)
            .map((e) => {
                if (!e.isPrivate() && !I.A.can(R.xB.VIEW_CHANNEL, e)) return null;
                let d = null != a && (a.id === e.id || o === e.id),
                    A = null != a && a.isThread() && a.parent_id === e.id,
                    g =
                        (d || A || !l
                            ? u.A.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id)
                            : u.A.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) ?? {},
                    C = (0, c.wF)(e, g, a, o, i),
                    p = _.A.isCollapsed(e.id),
                    S = e.isThread() ? h.A.isMuted(e.id) : N.Ay.isChannelMuted(e.guild_id, e.id),
                    L = {
                        id: e.id,
                        record: e,
                        category: t,
                        position: n[e.id].order,
                        threadIds: C,
                        threadCount: r().size(C),
                        isCollapsed: p,
                        isMuted: S,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, c.go)(e, p, !1),
                    };
                return d || A || !r().isEmpty(g) || T.Ay.getMentionCount(e.id) > 0
                    ? L
                    : (i && S) ||
                        (l && (S || s || (0, E.gV)(e.type) || ((0, E.ig)(e.type) && !1 === T.Ay.hasUnread(e.id))))
                      ? null
                      : L;
            })
            .filter(S.Vq)
            .sortBy((e) => (e.record.isGuildVocal() ? e.position + 1e4 : e.position))
            .value();
    }
    let U = null,
        D = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => d,
            getShownChannelIds: () => d.map((e) => e.id),
            getShownChannelAndThreadIds: () => d.map((e) => e.id),
            isEmpty: () => 0 === d.length,
            get channelList() {
                return null == U && (U = v(d, this)), U;
            },
        },
        y = (0, m.m_)(n)
            .filter((e) => null != e.id)
            .map((e) => {
                let { id: t } = e,
                    i = L.A.getCategoryRecord(t);
                if (null == i) return null;
                let l = A[t] ?? [],
                    r = N.Ay.isChannelMuted(O.Vc, t),
                    s = g.A.isCollapsed(t),
                    a = null;
                return {
                    isMuted: r,
                    isCollapsed: s,
                    record: i,
                    id: t,
                    position: n[t]?.order ?? 0,
                    getChannelRecords: () => l,
                    getShownChannelIds: () => l.map((e) => e.id),
                    getShownChannelAndThreadIds: () => l.map((e) => e.id),
                    isEmpty: () => 0 === l.length,
                    get channelList() {
                        return null == a && (a = v(l, this)), a;
                    },
                };
            })
            .filter((e) => null != e),
        G = 0;
    for (let e of [D, ...y]) for (let t of ((e.position = ++G), e.channelList)) t.position = ++G;
    let M = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
        P = t ? [b.r.FAVORITES_UPSELL] : [],
        x = { isEmpty: () => 0 === P.length, getRows: () => P, getRow: (e) => P[e] ?? null };
    return {
        id: O.Vc,
        hideMutedChannels: i,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[c.Xt] = P.length), (e[c.PU] = 0), (e[c.HP] = 0), (e[c.yO] = 0), (e[c.bK] = D.channelList.length);
            for (let t = 0; t < y.length; t++) e[c.TF + t] = Math.max(1, y[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < c.TF) && 0 === t && 0 === y[e - c.TF].channelList.length,
        getCategoryFromSection: (e) => (e === c.bK ? D : y[e - c.TF]),
        getNamedCategoryFromSection: (e) => y[e - c.TF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t] ? null : { category: n, channel: n.channelList[t] };
        },
        getGuildActionSection: () => M,
        getChannelNoticeSection: () => x,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [D, ...y];
            for (let n = 0; n < t.length; n++)
                for (let i = 0; i < t[n].channelList.length; i++)
                    if (t[n].channelList[i].id === e) return [{ section: n + c.bK, row: i }];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [D, ...y])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = C.A.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [D, ...y]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => [],
    };
}
