e.d(i, { v: () => c });
var l = e(64700),
    n = e(793574),
    s = e(693477),
    u = e(801365),
    a = e(201805),
    d = e(758836);
function c(t) {
    let { quest: i, questContent: e, sourceQuestContent: c, onCloseModal: o, shouldShowShopIfAlreadyClaimed: r } = t,
        S = (0, a.ix)({ quest: i, questContent: e, sourceQuestContent: c });
    return l.useCallback(
        (t) => {
            (0, u.ks)(i.config) && i.userStatus?.claimedAt != null && r
                ? (o?.(t), (0, s.Cz)({ tab: d.G2.ORBS, analyticsLocations: [], analyticsSource: n.A.QUEST_HOME_PAGE }))
                : ((0, u.K9)(i.config) && o?.(t), S());
        },
        [i.config, i.userStatus?.claimedAt, S, r, o],
    );
}
