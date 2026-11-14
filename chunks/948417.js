n(321073);
var s = n(927813),
    i = n(122760),
    l = n(977416),
    r = n(417404),
    a = n(814793),
    o = n(221596),
    u = n(709245);
let c = 2 * s.A.Millis.DAY,
    d = 3 * s.A.Millis.DAY,
    x = new Map(u.FQ.map((e) => [e.identifier, e])),
    m = {
        [u.gi.DISCOVERED]: function (e, t) {
            let { discoveredAtByQuestId: n } = t;
            return e.slice().sort((e, t) => {
                var s, i;
                return ((s = n.get(e)), (i = n.get(t)), null == s || null == i ? 0 : i.localeCompare(s));
            });
        },
    };
function E(e) {
    return e.features.includes(o.Li.EXCLUDE_FROM_FEATURED);
}
function h(e, t) {
    let n = x.get(e)?.maxItems,
        s = t.get(e)?.length ?? 0;
    return null == n || s < n;
}
n.d(
    t,
    {},
    {
        P_: function (e) {
            let {
                    allQuestIds: t,
                    hero: n,
                    discoveredAtByQuestId: s,
                    isStaff: o,
                    isPreviewerOnAnyQuest: x,
                    useNewTile: C = !1,
                } = e,
                f = new Map(),
                g = new Set();
            function A(e) {
                if (g.has(e)) return;
                let t = i.A.getQuestConfig(e);
                if (null == t) return;
                let m = (function (e) {
                    let {
                            quest: t,
                            hero: n,
                            discoveredAtByQuestId: s,
                            questIdsBySectionIdentifier: o,
                            isStaff: x,
                            isPreviewerOnAnyQuest: m,
                            useNewTile: C = !1,
                        } = e,
                        { userStatus: f, preview: g } = i.A.getQuest(t.id) ?? {},
                        A = [],
                        v = null != f && null != f.enrolledAt && null != f.completedAt && null == f.claimedAt;
                    if ((0, l.kd)(t) && !v) return x ? [u.gi.EXPIRED] : null;
                    if (
                        (s.has(t.id) && A.push(u.gi.DISCOVERED),
                        m && !0 === g && A.push(u.gi.PREVIEW),
                        null != f && null != f.enrolledAt && null == f.claimedAt)
                    )
                        return [...A, u.gi.IN_PROGRESS];
                    let j = !E(t);
                    return j && null != n && (0, a.I0)(n, t.id) && h(u.gi.FEATURED, o)
                        ? [...A, u.gi.FEATURED]
                        : new Date(t.expiresAt).valueOf() <= Date.now() + (C ? d : c)
                          ? [...A, u.gi.ENDING_SOON]
                          : j && h(u.gi.FEATURED, o)
                            ? [...A, u.gi.FEATURED]
                            : (0, r.ks)(t)
                              ? [...A, u.gi.ORB]
                              : [...A, u.gi.SPECIAL_QUESTS];
                })({
                    quest: t,
                    hero: n,
                    discoveredAtByQuestId: s,
                    questIdsBySectionIdentifier: f,
                    isStaff: o,
                    isPreviewerOnAnyQuest: x,
                    useNewTile: C,
                });
                null != m &&
                    (m.forEach((t) => {
                        f.set(t, [...(f.get(t) ?? []), e]);
                    }),
                    g.add(e));
            }
            return (
                n?.questIds?.forEach((e) => {
                    let t = i.A.getQuestConfig(e);
                    null == t || E(t) || A(e);
                }),
                t.forEach((e) => A(e)),
                u.FQ.map((e) => {
                    let t = m?.[e.identifier];
                    if (null != e.shouldShowFn && !e.shouldShowFn(o, x)) return { ...e, questIds: [] };
                    let n =
                        null != t
                            ? t(f.get(e.identifier) ?? [], { discoveredAtByQuestId: s })
                            : (f.get(e.identifier) ?? []);
                    return { ...e, questIds: n };
                }).filter((e) => {
                    let { questIds: t } = e;
                    return t.length > 0;
                })
            );
        },
        zY: d,
    },
);
