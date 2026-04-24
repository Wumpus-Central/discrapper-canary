n.d(t, { v: () => d });
var i = n(64700),
    l = n(793574),
    s = n(29292),
    a = n(801365),
    r = n(371912),
    o = n(758836);
function d(e) {
    let { quest: t, questContent: n, sourceQuestContent: d, onCloseModal: c, shouldShowShopIfAlreadyClaimed: u } = e,
        h = (0, r.ix)({ quest: t, questContent: n, sourceQuestContent: d });
    return i.useCallback(
        (e) => {
            (0, a.ks)(t.config) && t.userStatus?.claimedAt != null && u
                ? (c?.(e), (0, s.Cz)({ tab: o.G2.ORBS, analyticsLocations: [], analyticsSource: l.A.QUEST_HOME_PAGE }))
                : ((0, a.K9)(t.config) && c?.(e), h());
        },
        [t.config, t.userStatus?.claimedAt, h, u, c],
    );
}
