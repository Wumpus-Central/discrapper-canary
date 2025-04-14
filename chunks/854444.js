n.d(t, {
    o: () => b,
    t: () => v
}),
    n(388685),
    n(539854);
var l = n(192379),
    r = n(392711),
    i = n.n(r),
    o = n(524437),
    a = n(317381),
    s = n(853856),
    u = n(846787),
    c = n(924301),
    d = n(601070),
    E = n(569471),
    f = n(131704),
    C = n(680089),
    _ = n(592125),
    p = n(58468),
    h = n(77498),
    g = n(496675),
    I = n(306680),
    O = n(944486),
    T = n(9156),
    S = n(823379),
    N = n(540126),
    A = n(647086),
    m = n(231338);
let P = [a.ZP, s.Z, c.ZP, d.Z, E.Z, C.Z, _.Z, h.Z, g.Z, I.ZP, O.Z, T.ZP];
function b() {
    let [e, t] = l.useState(() => v());
    return (
        l.useEffect(() => {
            let e = i().throttle(() => t(v()), 100);
            return P.forEach((t) => t.addChangeListener(e)), () => P.forEach((t) => t.removeChangeListener(e));
        }, []),
        e
    );
}
function v() {
    let e = s.Z.getFavoriteChannels(),
        t = T.ZP.isGuildCollapsed(A._),
        n = O.Z.getChannelId(),
        l = _.Z.getChannel(n),
        r = O.Z.getVoiceChannelId(),
        a = [],
        c = {};
    for (let t in e) {
        let n = e[t],
            l = _.Z.getChannel(n.id);
        if (null == l || n.type === o.Dd.CATEGORY) continue;
        let r = (0, u.r)(e, n, l);
        if (null == n.parentId || !(n.parentId in e)) {
            a.push(r);
            continue;
        }
        n.parentId in c || (c[n.parentId] = []), c[n.parentId].push(r);
    }
    function E(n, o) {
        let { isCollapsed: a, isMuted: s } = o;
        return i()(n)
            .map((n) => {
                var u;
                if (!n.isPrivate() && !g.Z.can(m.Pl.VIEW_CHANNEL, n)) return null;
                let c = null != l && (l.id === n.id || r === n.id),
                    E = null != l && l.isThread() && l.parent_id === n.id,
                    C = null != (u = c || E || !a ? d.Z.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : d.Z.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) ? u : {},
                    _ = (0, N.zR)(n, C, l, r, t),
                    h = p.Z.isCollapsed(n.id),
                    O = T.ZP.isChannelMuted(n.guild_id, n.id),
                    S = {
                        id: n.id,
                        record: n,
                        category: o,
                        position: e[n.id].order,
                        threadIds: _,
                        threadCount: i().size(_),
                        isCollapsed: h,
                        isMuted: O,
                        isFirstVoiceChannel: !1,
                        subtitle: (0, N.Bz)(n, h, !1)
                    };
                return c || E || !i().isEmpty(C) || I.ZP.getMentionCount(n.id) > 0 ? S : (t && O) || (a && (O || s || (0, f.vd)(n.type) || ((0, f.vc)(n.type) && !1 === I.ZP.hasUnread(n.id)))) ? null : S;
            })
            .filter(S.lm)
            .sortBy((e) => {
                let { record: t } = e;
                return t.isGuildVocal() ? t.position + 10000 : t.position;
            })
            .value();
    }
    let h = null,
        P = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => a,
            getShownChannelIds: () => a.map((e) => e.id),
            getShownChannelAndThreadIds: () => a.map((e) => e.id),
            isEmpty: () => 0 === a.length,
            get channelList() {
                return null == h && (h = E(a, this)), h;
            }
        },
        b = i()(e)
            .values()
            .filter((e) => e.type === o.Dd.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
                var t;
                let { id: n, order: l } = e,
                    r = s.Z.getCategoryRecord(n),
                    i = null != (t = c[n]) ? t : [],
                    o = T.ZP.isChannelMuted(A._, n),
                    a = C.Z.isCollapsed(n),
                    u = null;
                return {
                    isMuted: o,
                    isCollapsed: a,
                    record: r,
                    id: n,
                    position: l,
                    getChannelRecords: () => i,
                    getShownChannelIds: () => i.map((e) => e.id),
                    getShownChannelAndThreadIds: () => i.map((e) => e.id),
                    isEmpty: () => 0 === i.length,
                    get channelList() {
                        return null == u && (u = E(i, this)), u;
                    }
                };
            })
            .value(),
        v = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        },
        L = {
            isEmpty: () => !0,
            getRows: () => [],
            getRow: () => null
        };
    return {
        id: A._,
        hideMutedChannels: t,
        favoritesSectionNumber: 1,
        recentsSectionNumber: 2,
        voiceChannelsSectionNumber: -999,
        getSections() {
            let e = [];
            (e[N.Fq] = 0), (e[N.wZ] = 0), (e[N.p2] = 0), (e[N.PB] = 0), (e[N.wd] = P.channelList.length);
            for (let t = 0; t < b.length; t++) e[N.wF + t] = Math.max(1, b[t].channelList.length);
            return e;
        },
        isPlaceholderRow: (e, t) => !(e < N.wF) && 0 === t && 0 === b[e - N.wF].channelList.length,
        getCategoryFromSection: (e) => (e === N.wd ? P : b[e - N.wF]),
        getNamedCategoryFromSection: (e) => b[e - N.wF],
        getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t]
                ? null
                : {
                      category: n,
                      channel: n.channelList[t]
                  };
        },
        getGuildActionSection: () => v,
        getChannelNoticeSection: () => L,
        getFirstVoiceChannel: () => null,
        getSectionRowsFromChannel(e) {
            let t = [P, ...b];
            for (let n = 0; n < t.length; n++)
                for (let l = 0; l < t[n].channelList.length; l++)
                    if (t[n].channelList[l].id === e)
                        return [
                            {
                                section: n + N.wd,
                                row: l
                            }
                        ];
            return [];
        },
        forEachShownChannel(e) {
            for (let t of [P, ...b])
                for (let n of t.channelList)
                    for (let t of (e(n.record), n.threadIds)) {
                        let n = _.Z.getChannel(t);
                        null != n && e(n);
                    }
        },
        forEachChannel(e) {
            for (let t of [P, ...b]) for (let n of t.getChannelRecords()) e(n);
        },
        getSlicedChannels: (e) => [[], e, []],
        getChannels: () => []
    };
}
