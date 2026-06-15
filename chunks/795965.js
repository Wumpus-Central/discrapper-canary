"use strict";
n.d(t, { D: () => g });
var i = n(64700),
    r = n(323889),
    s = n(274670),
    a = n(144779),
    o = n(793574),
    l = n(859040),
    u = n(104886);
let c = (0, n(945810).mj)({
    name: "2026-05-quest-home-reward-claim",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var d = n(18437),
    _ = n(590202),
    h = n(971649),
    f = n(801365),
    p = n(371912),
    E = n(617986),
    m = n(758836);
function g(e) {
    let {
            quest: t,
            questContent: n,
            sourceQuestContent: g,
            questContentPosition: A,
            questContentRowIndex: I,
            experimentLocation: T,
            shouldShowShopIfAlreadyClaimed: S = !0,
            onBeforeClaim: y,
            onCloseModal: N,
        } = e,
        v = (function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = c.useConfig({ location: t && null != e ? e : "quest home reward claim experiment: disabled" });
            return !!t && null != e && n.enabled;
        })(T, t.userStatus?.completedAt != null && t.userStatus?.claimedAt == null),
        C = (0, d.Ut)(),
        R = (0, h.go)(),
        O = (0, p.ix)({
            quest: t,
            questContent: n,
            questContentPosition: A,
            questContentRowIndex: I,
            sourceQuestContent: g,
        });
    return i.useCallback(
        (e) => {
            if ((null != e && y?.(e), S && (0, f.ks)(t.config) && t.userStatus?.claimedAt != null)) {
                N?.(), (0, l.Cz)({ tab: m.G2.ORBS, analyticsLocations: [], analyticsSource: o.A.QUEST_HOME_PAGE });
                return;
            }
            v &&
                (N?.(),
                (0, f.K9)(t.config) ||
                    ((0, u.E5)(u.kI.STEP_2_CLICKED_INTERNAL, "completed_quest_claim_click")
                        ? (0, s.r)({
                              type: a.F.CLICK_INTERNAL,
                              adCreativeType: r.p.QUEST,
                              adCreativeId: t.id,
                              questContentCTA: _.Cy.OPEN_QUEST_HOME_TO_CLAIM,
                              surfaceId: n,
                              sourceQuestContent: g,
                              impressionId: R,
                              questContentPosition: A,
                              questContentRowIndex: I,
                          })
                        : C({
                              questId: t.id,
                              questContent: n,
                              questContentCTA: _.Cy.OPEN_QUEST_HOME_TO_CLAIM,
                              sourceQuestContent: g,
                              questContentPosition: A,
                              questContentRowIndex: I,
                          }),
                    (0, E.navigateToQuestHome)({ questId: t.id, fromContent: n }))),
                !v && (0, f.K9)(t.config) && N?.(),
                O();
        },
        [y, N, t.config, t.userStatus?.claimedAt, O, S, v, t.id, n, g, A, I, C, R],
    );
}
