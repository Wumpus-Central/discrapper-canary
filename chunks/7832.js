a.d(l, { I: () => r });
var t = a(64700),
    s = a(323889),
    i = a(311907),
    n = a(605180),
    c = a(829219),
    h = a(859703);
function r() {
    let e = (0, i.bG)([h.A], () => h.A.getQuestHomeHero()),
        l = e?.id,
        a = (0, i.bG)([n.A], () => null != l && n.A.hasSeen(s.p.QUEST_HOME_HERO, l), [l]);
    return {
        shouldShowQuestHomeHeroContent: e?.questHomeEntrypoint != null && !a,
        dismissQuestHomeHeroContent: t.useCallback(() => {
            null != l && (0, c.zh)(s.p.QUEST_HOME_HERO, [l]);
        }, [l]),
        questHomeHero: e,
    };
}
