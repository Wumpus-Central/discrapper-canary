"use strict";
n.d(t, { v: () => c });
var i = n(64700),
    s = n(793574),
    l = n(979286),
    a = n(92246),
    r = n(201805),
    o = n(758836);
function c(e) {
    let { quest: t, questContent: n, sourceQuestContent: c, onCloseModal: d, shouldShowShopIfAlreadyClaimed: u } = e,
        h = (0, r.ix)({ quest: t, questContent: n, sourceQuestContent: c });
    return i.useCallback(
        (e) => {
            (0, a.ks)(t.config) && t.userStatus?.claimedAt != null && u
                ? (d?.(e), (0, l.Cz)({ tab: o.G2.ORBS, analyticsLocations: [], analyticsSource: s.A.QUEST_HOME_PAGE }))
                : ((0, a.K9)(t.config) && d?.(e), h());
        },
        [t.config, t.userStatus?.claimedAt, h, u, d],
    );
}
