n.d(t, {
    v: () => c,
});
var r = n(64700),
    l = n(793574),
    o = n(979286),
    i = n(92246),
    s = n(201805),
    a = n(758836);

function c(e) {
    var t;
    let { quest: n, questContent: c, sourceQuestContent: u, onCloseModal: d, shouldShowShopIfAlreadyClaimed: f } = e,
        m = (0, s.ix)({
            quest: n,
            questContent: c,
            sourceQuestContent: u,
        });
    return r.useCallback(
        (e) => {
            var t;
            (0, i.ks)(n.config) && (null == (t = n.userStatus) ? void 0 : t.claimedAt) != null && f
                ? (null == d || d(e),
                  (0, o.Cz)({
                      tab: a.G2.ORBS,
                      analyticsLocations: [],
                      analyticsSource: l.A.QUEST_HOME_PAGE,
                  }))
                : ((0, i.K9)(n.config) && (null == d || d(e)), m());
        },
        [n.config, null == (t = n.userStatus) ? void 0 : t.claimedAt, m, f, d],
    );
}
