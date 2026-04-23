n.d(t, {
    $J: () => f,
    IG: () => p,
    UR: () => N,
    W1: () => R,
    _Q: () => D,
    b6: () => h,
    bg: () => O,
    pu: () => L,
    se: () => g,
    v0: () => C,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956),
    n(134528),
    n(947204);
var i = n(132500),
    r = n(412703),
    a = n(228366),
    s = n(975807),
    _ = n(773952),
    l = n(780964),
    o = n(625494),
    E = n(723702),
    d = n(245853),
    c = n(561844),
    u = n(651892),
    I = n(792620),
    A = n(654487),
    T = n(652215),
    S = n(985018);
function N(e) {
    let t = (0, I.t)({ quest: e }) || (0, I.fE)({ quest: e }),
        n = (0, I.uD)(e),
        i = [];
    return t && i.push(A.fO.DESKTOP), n && i.push(A.fO.CONSOLE), i;
}
function O(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case r.n.PLAY_ON_XBOX:
                n.push(T.fg2.XBOX);
                break;
            case r.n.PLAY_ON_PLAYSTATION:
                n.push(T.fg2.PLAYSTATION);
        }
    return n;
}
function R(e) {
    let t = (0, I.vv)(e),
        n = (0, I.vl)(e);
    return t || n;
}
function f(e) {
    return "xbox" === e.connected_account_type ? T.fg2.XBOX : T.fg2.PLAYSTATION;
}
function C(e, t) {
    let { platformType: n, quest: i } = e;
    (0, c.Y5)({
        questId: i.id,
        questContent: t.content,
        sourceQuestContent: t.sourceQuestContent,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
    }),
        (0, _.A)({ platformType: n, location: t.ctaContent });
}
function p(e) {
    return f(e) === T.fg2.XBOX ? S.t["mytEv+"] : S.t.iDiwby;
}
function m(e) {
    if (((0, E.isIOS)() || "ios" === (0, E.getOS)()) && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId : `id${e.ios.iosAppId}`;
        return `https://apps.apple.com/app/${t}`;
    }
    return ((0, E.isAndroid)() || "android" === (0, E.getOS)()) && e.android?.androidAppId != null
        ? `https://play.google.com/store/apps/details?id=${e.android.androidAppId}`
        : null;
}
function L(e, t) {
    let n,
        r,
        a = (0, u.Jx)(e.config),
        _ = null == (n = e.config.ctaConfig) ? null : m({ url: (0, u.Jx)(e.config), android: n.android, ios: n.ios });
    null != _ && (a = _),
        (function (e) {
            try {
                return new URL(e).searchParams.has("dclid");
            } catch {
                return !1;
            }
        })(a) &&
            (a = (function (e, t) {
                try {
                    let n = new URL(e);
                    return n.searchParams.set("dclid", t), n.toString();
                } catch {
                    return e;
                }
            })(a, (r = (0, i.A)()))),
        (0, c.Y5)({
            questId: e.id,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId,
            sourceQuestContent: t.sourceQuestContent,
            clickId: r,
        }),
        o._.dispatch(T.jej.QUEST_GAME_LINK_OPENED),
        d.YX.getConfig({ location: "quest_open_game_link" }).enabled,
        (0, s.A)(a);
}
function D(e, t) {
    let { adContentId: n, adCreativeType: i, cta: r } = e,
        a = r.url,
        _ = m(r);
    null != _ && (a = _),
        (0, c.vK)({
            adContentId: n,
            adCreativeType: i,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId,
            sourceQuestContent: t.sourceQuestContent,
        }),
        o._.dispatch(T.jej.QUEST_GAME_LINK_OPENED),
        (0, s.A)(a);
}
function h(e, t) {
    let { quest: i } = e;
    (0, c.Y5)({
        questId: i.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (function () {
            {
                let { openUserSettings: e } = n(858897);
                e(l.X.CONNECTIONS_PANEL);
            }
        })();
}
function g(e, t) {
    let { quest: n } = e;
    (0, c.Y5)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    });
    let i = O(n);
    if (1 === i.length) return (0, _.A)({ platformType: i.at(0) });
    a.h.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, _.A)({ platformType: e }),
        includedPlatformTypes: new Set(i),
        includeApplicationConnections: !1,
    });
}
