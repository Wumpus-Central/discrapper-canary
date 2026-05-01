n.d(t, {
    $J: () => p,
    IG: () => O,
    UR: () => S,
    W1: () => f,
    _Q: () => g,
    b6: () => L,
    bg: () => N,
    pu: () => R,
    se: () => D,
    v0: () => m,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956),
    n(134528),
    n(947204);
var i = n(132500),
    a = n(412703),
    r = n(228366),
    s = n(975807),
    l = n(773952),
    o = n(780964),
    d = n(625494),
    c = n(723702),
    _ = n(245853),
    E = n(561844),
    u = n(651892),
    A = n(792620),
    I = n(654487),
    T = n(652215),
    h = n(985018);
function S(e) {
    let t = (0, A.t)({ quest: e }) || (0, A.fE)({ quest: e }),
        n = (0, A.uD)(e),
        i = [];
    return t && i.push(I.fO.DESKTOP), n && i.push(I.fO.CONSOLE), i;
}
function N(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case a.n.PLAY_ON_XBOX:
                n.push(T.fg2.XBOX);
                break;
            case a.n.PLAY_ON_PLAYSTATION:
                n.push(T.fg2.PLAYSTATION);
        }
    return n;
}
function f(e) {
    let t = (0, A.vv)(e),
        n = (0, A.vl)(e);
    return t || n;
}
function p(e) {
    return "xbox" === e.connected_account_type ? T.fg2.XBOX : T.fg2.PLAYSTATION;
}
function m(e, t) {
    let { platformType: n, quest: i } = e;
    (0, E.Y5)({
        questId: i.id,
        questContent: t.content,
        sourceQuestContent: t.sourceQuestContent,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
    }),
        (0, l.A)({ platformType: n, location: t.ctaContent });
}
function O(e) {
    return p(e) === T.fg2.XBOX ? h.t["mytEv+"] : h.t.iDiwby;
}
function C(e) {
    if (((0, c.isIOS)() || "ios" === (0, c.getOS)()) && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId : `id${e.ios.iosAppId}`;
        return `https://apps.apple.com/app/${t}`;
    }
    return ((0, c.isAndroid)() || "android" === (0, c.getOS)()) && e.android?.androidAppId != null
        ? `https://play.google.com/store/apps/details?id=${e.android.androidAppId}`
        : null;
}
function R(e, t) {
    let n,
        a,
        r = (0, u.Jx)(e.config),
        l = null == (n = e.config.ctaConfig) ? null : C({ url: (0, u.Jx)(e.config), android: n.android, ios: n.ios });
    null != l && (r = l),
        (function (e) {
            try {
                return new URL(e).searchParams.has("dclid");
            } catch {
                return !1;
            }
        })(r) &&
            (r = (function (e, t) {
                try {
                    let n = new URL(e);
                    return n.searchParams.set("dclid", t), n.toString();
                } catch {
                    return e;
                }
            })(r, (a = (0, i.A)()))),
        (0, E.Y5)({
            questId: e.id,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId,
            sourceQuestContent: t.sourceQuestContent,
            clickId: a,
        }),
        d._.dispatch(T.jej.QUEST_GAME_LINK_OPENED),
        _.YX.getConfig({ location: "quest_open_game_link" }).enabled,
        (0, s.A)(r);
}
function g(e, t) {
    let { adContentId: n, adCreativeType: i, cta: a } = e,
        r = a.url,
        l = C(a);
    null != l && (r = l),
        (0, E.vK)({
            adContentId: n,
            adCreativeType: i,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId,
            sourceQuestContent: t.sourceQuestContent,
        }),
        d._.dispatch(T.jej.QUEST_GAME_LINK_OPENED),
        _.YX.getConfig({ location: "quest_open_game_link" }).enabled,
        (0, s.A)(r);
}
function L(e, t) {
    let { quest: i } = e;
    (0, E.Y5)({
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
                e(o.X.CONNECTIONS_PANEL);
            }
        })();
}
function D(e, t) {
    let { quest: n } = e;
    (0, E.Y5)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    });
    let i = N(n);
    if (1 === i.length) return (0, l.A)({ platformType: i.at(0) });
    r.h.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, l.A)({ platformType: e }),
        includedPlatformTypes: new Set(i),
        includeApplicationConnections: !1,
    });
}
