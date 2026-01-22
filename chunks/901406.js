n.d(t, {
    $J: () => b,
    IG: () => O,
    UR: () => m,
    W1: () => E,
    b6: () => I,
    bg: () => g,
    pu: () => v,
    se: () => T,
    v0: () => y,
}),
    n(321073),
    n(896048),
    n(134528),
    n(947204);
var r = n(412703),
    i = n(73153),
    a = n(975807),
    s = n(882997),
    o = n(780964),
    l = n(203982),
    c = n(723702),
    u = n(216456),
    d = n(651892),
    f = n(792620),
    p = n(654487),
    _ = n(652215),
    h = n(985018);

function m(e) {
    let t =
            (0, f.t)({
                quest: e,
            }) ||
            (0, f.fE)({
                quest: e,
            }),
        n = (0, f.uD)(e),
        r = [];
    return t && r.push(p.fO.DESKTOP), n && r.push(p.fO.CONSOLE), r;
}

function g(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case r.n.PLAY_ON_XBOX:
                n.push(_.fg2.XBOX);
                break;
            case r.n.PLAY_ON_PLAYSTATION:
                n.push(_.fg2.PLAYSTATION);
        }
    return n;
}

function E(e) {
    let t = (0, f.vv)(e),
        n = (0, f.vl)(e);
    return t || n;
}

function b(e) {
    return "xbox" === e.connected_account_type ? _.fg2.XBOX : _.fg2.PLAYSTATION;
}

function y(e, t) {
    let { platformType: n, quest: r } = e;
    (0, u.Y5)({
        questId: r.id,
        questContent: t.content,
        sourceQuestContent: t.sourceQuestContent,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
    }),
        (0, s.A)({
            platformType: n,
            location: t.ctaContent,
        });
}

function O(e) {
    return b(e) === _.fg2.XBOX ? h.t["mytEv+"] : h.t.iDiwby;
}

function A(e) {
    var t, n;
    let r = e.config.ctaConfig;
    return null == r
        ? null
        : ((0, c.isIOS)() || "ios" === (0, c.getOS)()) && (null == (t = r.ios) ? void 0 : t.iosAppId) != null
          ? "https://apps.apple.com/app/id".concat(r.ios.iosAppId)
          : ((0, c.isAndroid)() || "android" === (0, c.getOS)()) &&
              (null == (n = r.android) ? void 0 : n.androidAppId) != null
            ? "https://play.google.com/store/apps/details?id=".concat(r.android.androidAppId)
            : null;
}

function v(e, t) {
    let n = (0, d.Jx)(e.config),
        r = A(e);
    null != r && (n = r),
        (0, u.Y5)({
            questId: e.id,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId,
            sourceQuestContent: t.sourceQuestContent,
        }),
        l._.dispatch(_.jej.QUEST_GAME_LINK_OPENED),
        (0, a.A)(n);
}

function S() {
    {
        let { openUserSettings: e } = n(840065);
        e(o.X.CONNECTIONS_PANEL, {
            section: _.nc_.CONNECTIONS,
        });
    }
}

function I(e, t) {
    let { quest: n } = e;
    (0, u.Y5)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        S();
}

function T(e, t) {
    let { quest: n } = e;
    (0, u.Y5)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    });
    let r = g(n);
    if (1 === r.length)
        return (0, s.A)({
            platformType: r.at(0),
        });
    i.h.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) =>
            (0, s.A)({
                platformType: e,
            }),
        includedPlatformTypes: new Set(r),
    });
}
