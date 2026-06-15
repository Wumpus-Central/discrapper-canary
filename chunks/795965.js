n.d(t, { D: () => h });
var r = n(64700),
    l = n(793574),
    a = n(859040);
let i = (0, n(945810).mj)({
    name: "2026-05-quest-home-reward-claim",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var s = n(18437),
    u = n(590202),
    o = n(801365),
    c = n(371912),
    d = n(617986),
    m = n(758836);
function h(e) {
    let {
            quest: t,
            questContent: n,
            sourceQuestContent: h,
            questContentPosition: f,
            questContentRowIndex: p,
            experimentLocation: v,
            shouldShowShopIfAlreadyClaimed: g = !0,
            onBeforeClaim: x,
            onCloseModal: E,
        } = e,
        b = (function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = i.useConfig({ location: t && null != e ? e : "quest home reward claim experiment: disabled" });
            return !!t && null != e && n.enabled;
        })(v, t.userStatus?.completedAt != null && t.userStatus?.claimedAt == null),
        S = (0, s.Ut)(),
        C = (0, c.ix)({
            quest: t,
            questContent: n,
            questContentPosition: f,
            questContentRowIndex: p,
            sourceQuestContent: h,
        });
    return r.useCallback(
        (e) => {
            if ((null != e && x?.(e), g && (0, o.ks)(t.config) && t.userStatus?.claimedAt != null)) {
                E?.(), (0, a.Cz)({ tab: m.G2.ORBS, analyticsLocations: [], analyticsSource: l.A.QUEST_HOME_PAGE });
                return;
            }
            b &&
                (E?.(),
                (0, o.K9)(t.config) ||
                    (S({
                        questId: t.id,
                        questContent: n,
                        questContentCTA: u.Cy.OPEN_QUEST_HOME_TO_CLAIM,
                        sourceQuestContent: h,
                        questContentPosition: f,
                        questContentRowIndex: p,
                    }),
                    (0, d.navigateToQuestHome)({ questId: t.id, fromContent: n }))),
                !b && (0, o.K9)(t.config) && E?.(),
                C();
        },
        [x, E, t.config, t.userStatus?.claimedAt, C, g, b, t.id, n, h, f, p, S],
    );
}
