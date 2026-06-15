"use strict";
n.d(t, { D: () => h });
var i = n(64700),
    r = n(793574),
    s = n(859040);
let a = (0, n(945810).mj)({
    name: "2026-05-quest-home-reward-claim",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var o = n(18437),
    l = n(590202),
    u = n(801365),
    c = n(371912),
    d = n(617986),
    _ = n(758836);
function h(e) {
    let {
            quest: t,
            questContent: n,
            sourceQuestContent: h,
            questContentPosition: f,
            questContentRowIndex: p,
            experimentLocation: E,
            shouldShowShopIfAlreadyClaimed: m = !0,
            onBeforeClaim: g,
            onCloseModal: A,
        } = e,
        I = (function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = a.useConfig({ location: t && null != e ? e : "quest home reward claim experiment: disabled" });
            return !!t && null != e && n.enabled;
        })(E, t.userStatus?.completedAt != null && t.userStatus?.claimedAt == null),
        T = (0, o.Ut)(),
        S = (0, c.ix)({
            quest: t,
            questContent: n,
            questContentPosition: f,
            questContentRowIndex: p,
            sourceQuestContent: h,
        });
    return i.useCallback(
        (e) => {
            if ((null != e && g?.(e), m && (0, u.ks)(t.config) && t.userStatus?.claimedAt != null)) {
                A?.(), (0, s.Cz)({ tab: _.G2.ORBS, analyticsLocations: [], analyticsSource: r.A.QUEST_HOME_PAGE });
                return;
            }
            I &&
                (A?.(),
                (0, u.K9)(t.config) ||
                    (T({
                        questId: t.id,
                        questContent: n,
                        questContentCTA: l.Cy.OPEN_QUEST_HOME_TO_CLAIM,
                        sourceQuestContent: h,
                        questContentPosition: f,
                        questContentRowIndex: p,
                    }),
                    (0, d.navigateToQuestHome)({ questId: t.id, fromContent: n }))),
                !I && (0, u.K9)(t.config) && A?.(),
                S();
        },
        [g, A, t.config, t.userStatus?.claimedAt, S, m, I, t.id, n, h, f, p, T],
    );
}
