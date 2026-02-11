"use strict";
n.d(t, { v: () => u });
var r = n(64700),
    i = n(793574),
    a = n(979286),
    s = n(92246),
    o = n(201805),
    l = n(758836);
function u(e) {
    let { quest: t, questContent: n, sourceQuestContent: u, onCloseModal: c, shouldShowShopIfAlreadyClaimed: d } = e,
        _ = (0, o.ix)({ quest: t, questContent: n, sourceQuestContent: u });
    return r.useCallback(
        (e) => {
            (0, s.ks)(t.config) && t.userStatus?.claimedAt != null && d
                ? (c?.(e), (0, a.Cz)({ tab: l.G2.ORBS, analyticsLocations: [], analyticsSource: i.A.QUEST_HOME_PAGE }))
                : ((0, s.K9)(t.config) && c?.(e), _());
        },
        [t.config, t.userStatus?.claimedAt, _, d, c],
    );
}
