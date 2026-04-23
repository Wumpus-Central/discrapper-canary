n.d(t, { v: () => d });
var i = n(64700),
    l = n(793574),
    s = n(803375),
    r = n(801365),
    a = n(371912),
    o = n(758836);
function d(e) {
    let { quest: t, questContent: n, sourceQuestContent: d, onCloseModal: c, shouldShowShopIfAlreadyClaimed: u } = e,
        h = (0, a.ix)({ quest: t, questContent: n, sourceQuestContent: d });
    return i.useCallback(
        (e) => {
            (0, r.ks)(t.config) && t.userStatus?.claimedAt != null && u
                ? (c?.(e), (0, s.Cz)({ tab: o.G2.ORBS, analyticsLocations: [], analyticsSource: l.A.QUEST_HOME_PAGE }))
                : ((0, r.K9)(t.config) && c?.(e), h());
        },
        [t.config, t.userStatus?.claimedAt, h, u, c],
    );
}
