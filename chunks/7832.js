n.d(t, { I: () => d });
var i = n(64700),
    r = n(323889),
    l = n(311907),
    a = n(605180),
    s = n(829219),
    o = n(859703);
function d() {
    let e = (0, l.bG)([o.A], () => o.A.getQuestHomeHero()),
        t = e?.id,
        n = (0, l.bG)([a.A], () => null != t && a.A.hasSeen(r.p.QUEST_HOME_HERO, t), [t]);
    return {
        shouldShowQuestHomeHeroContent: e?.questHomeEntrypoint != null && !n,
        dismissQuestHomeHeroContent: i.useCallback(() => {
            null != t && (0, s.zh)(r.p.QUEST_HOME_HERO, [t]);
        }, [t]),
        questHomeHero: e,
    };
}
