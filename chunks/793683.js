"use strict";
n.d(t, { v: () => u });
var i = n(64700),
    r = n(793574),
    s = n(859040),
    a = n(801365),
    o = n(371912),
    l = n(758836);
function u(e) {
    let { quest: t, questContent: n, sourceQuestContent: u, onCloseModal: c, shouldShowShopIfAlreadyClaimed: d } = e,
        _ = (0, o.ix)({ quest: t, questContent: n, sourceQuestContent: u });
    return i.useCallback(
        (e) => {
            (0, a.ks)(t.config) && t.userStatus?.claimedAt != null && d
                ? (c?.(e), (0, s.Cz)({ tab: l.G2.ORBS, analyticsLocations: [], analyticsSource: r.A.QUEST_HOME_PAGE }))
                : ((0, a.K9)(t.config) && c?.(e), _());
        },
        [t.config, t.userStatus?.claimedAt, _, d, c],
    );
}
