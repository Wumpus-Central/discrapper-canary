n.d(t, { v: () => d });
var i = n(64700),
    l = n(793574),
    s = n(693477),
    r = n(801365),
    a = n(201805),
    o = n(758836);
function d(e) {
    let { quest: t, questContent: n, sourceQuestContent: d, onCloseModal: c, shouldShowShopIfAlreadyClaimed: u } = e,
        _ = (0, a.ix)({ quest: t, questContent: n, sourceQuestContent: d });
    return i.useCallback(
        (e) => {
            (0, r.ks)(t.config) && t.userStatus?.claimedAt != null && u
                ? (c?.(e), (0, s.Cz)({ tab: o.G2.ORBS, analyticsLocations: [], analyticsSource: l.A.QUEST_HOME_PAGE }))
                : ((0, r.K9)(t.config) && c?.(e), _());
        },
        [t.config, t.userStatus?.claimedAt, _, u, c],
    );
}
