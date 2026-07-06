a.d(t, { D: () => f });
var n = a(64700),
    i = a(323889),
    u = a(274670),
    l = a(144779),
    s = a(793574),
    d = a(662388),
    c = a(104886);
let r = (0, a(945810).mj)({
    name: "2026-05-quest-home-reward-claim",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var o = a(18437),
    C = a(590202),
    _ = a(971649),
    m = a(801365),
    E = a(371912),
    p = a(617986),
    A = a(758836);
function f(e) {
    let {
            quest: t,
            questContent: a,
            sourceQuestContent: f,
            questContentPosition: T,
            questContentRowIndex: I,
            experimentLocation: S,
            shouldShowShopIfAlreadyClaimed: k = !0,
            onBeforeClaim: b,
            onCloseModal: g,
        } = e,
        h = (function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                a = r.useConfig({ location: t && null != e ? e : "quest home reward claim experiment: disabled" });
            return !!t && null != e && a.enabled;
        })(S, t.userStatus?.completedAt != null && t.userStatus?.claimedAt == null),
        O = (0, o.Ut)(),
        q = (0, _.go)(),
        L = (0, E.ix)({
            quest: t,
            questContent: a,
            questContentPosition: T,
            questContentRowIndex: I,
            sourceQuestContent: f,
        });
    return n.useCallback(
        (e) => {
            if ((null != e && b?.(e), k && (0, m.ks)(t.config) && t.userStatus?.claimedAt != null)) {
                g?.(), (0, d.Cz)({ tab: A.G2.ORBS, analyticsLocations: [], analyticsSource: s.A.QUEST_HOME_PAGE });
                return;
            }
            h &&
                (g?.(),
                (0, m.K9)(t.config) ||
                    ((0, c.E5)(c.kI.STEP_2_CLICKED_INTERNAL, "completed_quest_claim_click")
                        ? (0, u.r)({
                              type: l.F.CLICK_INTERNAL,
                              adCreativeType: i.p.QUEST,
                              adCreativeId: t.id,
                              questContentCTA: C.Cy.OPEN_QUEST_HOME_TO_CLAIM,
                              surfaceId: a,
                              sourceQuestContent: f,
                              impressionId: q,
                              questContentPosition: T,
                              questContentRowIndex: I,
                          })
                        : O({
                              questId: t.id,
                              questContent: a,
                              questContentCTA: C.Cy.OPEN_QUEST_HOME_TO_CLAIM,
                              sourceQuestContent: f,
                              questContentPosition: T,
                              questContentRowIndex: I,
                          }),
                    (0, p.mA)({ questId: t.id, fromContent: a }))),
                !h && (0, m.K9)(t.config) && g?.(),
                L();
        },
        [b, g, t.config, t.userStatus?.claimedAt, L, k, h, t.id, a, f, T, I, O, q],
    );
}
