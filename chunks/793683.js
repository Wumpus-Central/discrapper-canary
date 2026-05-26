s.d(t, { v: () => u });
var n = s(64700),
    l = s(793574),
    i = s(859040),
    a = s(801365),
    o = s(371912),
    r = s(758836);
function u(e) {
    let { quest: t, questContent: s, sourceQuestContent: u, onCloseModal: c, shouldShowShopIfAlreadyClaimed: d } = e,
        m = (0, o.ix)({ quest: t, questContent: s, sourceQuestContent: u });
    return n.useCallback(
        (e) => {
            (0, a.ks)(t.config) && t.userStatus?.claimedAt != null && d
                ? (c?.(e), (0, i.Cz)({ tab: r.G2.ORBS, analyticsLocations: [], analyticsSource: l.A.QUEST_HOME_PAGE }))
                : ((0, a.K9)(t.config) && c?.(e), m());
        },
        [t.config, t.userStatus?.claimedAt, m, d, c],
    );
}
