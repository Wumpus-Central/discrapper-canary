n.d(t, { D: () => c });
var r = n(473749),
    o = n(100527),
    l = n(335131),
    i = n(509212),
    a = n(667105),
    s = n(215023);
function c(e) {
    var t;
    let { quest: n, questContent: c, sourceQuestContent: u, onClick: d, shouldShowShopIfAlreadyClaimed: m } = e,
        p = (0, a.hf)({
            quest: n,
            questContent: c,
            sourceQuestContent: u,
        });
    return r.useCallback(
        (e) => {
            var t;
            null == d || d(e),
                (0, i.xN)(n.config) && (null == (t = n.userStatus) ? void 0 : t.claimedAt) != null && m
                    ? (0, l.mK)({
                          tab: s.AW.ORBS,
                          analyticsLocations: [],
                          analyticsSource: o.Z.QUEST_HOME_PAGE,
                      })
                    : p();
        },
        [d, n.config, null == (t = n.userStatus) ? void 0 : t.claimedAt, p, m],
    );
}
