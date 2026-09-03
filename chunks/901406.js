n.d(t, {
    $J: () => P,
    IG: () => L,
    Ps: () => G,
    UR: () => O,
    W1: () => y,
    WU: () => N,
    _Q: () => D,
    b6: () => q,
    bg: () => b,
    pu: () => Q,
    se: () => U,
    v0: () => w,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956),
    n(134528),
    n(947204);
var i,
    r = n(132500),
    s = n(323889),
    o = n(412703),
    a = n(228366),
    l = n(975807),
    u = n(274670),
    d = n(144779),
    c = n(7588),
    C = n(657375),
    f = n(968309),
    E = n(780964),
    m = n(625494),
    A = n(723702),
    T = n(192444),
    p = n(104886),
    I = n(561844),
    h = n(651892),
    _ = n(792620),
    S = n(190107),
    g = n(652215),
    v = n(375708);
function O(e) {
    let t = (0, _.t)({ quest: e }) || (0, _.fE)({ quest: e }) || (0, _.I6)(e),
        n = (0, _.uD)(e),
        i = [];
    return t && i.push(S.fO.DESKTOP), n && i.push(S.fO.CONSOLE), i;
}
function b(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case o.n.PLAY_ON_XBOX:
                n.push(g.fg2.XBOX);
                break;
            case o.n.PLAY_ON_PLAYSTATION:
                n.push(g.fg2.PLAYSTATION);
        }
    return n;
}
function y(e) {
    let t = (0, _.vv)(e),
        n = (0, _.vl)(e);
    return t || n;
}
var N = (((i = {}).DESKTOP = "desktop"), (i.XBOX = "xbox"), (i.PLAYSTATION = "playstation"), i);
function P(e) {
    return "xbox" === e.connected_account_type ? g.fg2.XBOX : g.fg2.PLAYSTATION;
}
function w(e, t) {
    let { platformType: n, quest: i } = e;
    (0, p.E5)(p.kI.STEP_2_CLICKED_INTERNAL, "open_authorization_connection_modal")
        ? (0, u.r)({
              type: d.F.CLICK_INTERNAL,
              adCreativeType: s.p.QUEST,
              adCreativeId: i.id,
              questContentCTA: t.ctaContent,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              impressionId: t.impressionId,
          })
        : (0, I.Y5)({
              questId: i.id,
              questContent: t.content,
              sourceQuestContent: t.sourceQuestContent,
              questContentCTA: t.ctaContent,
              impressionId: t.impressionId,
          }),
        (0, f.A)({ platformType: n, location: t.ctaContent });
}
function L(e) {
    return P(e) === g.fg2.XBOX ? v.t["mytEv+"] : v.t.iDiwby;
}
function R(e) {
    if (((0, A.isIOS)() || "ios" === (0, A.getOS)()) && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId : `id${e.ios.iosAppId}`;
        return `https://apps.apple.com/app/${t}`;
    }
    return ((0, A.isAndroid)() || "android" === (0, A.getOS)()) && e.android?.androidAppId != null
        ? `https://play.google.com/store/apps/details?id=${e.android.androidAppId}`
        : null;
}
function M(e) {
    if ((0, A.isAndroid)() && e.android?.androidAppId != null)
        return {
            url: `https://play.google.com/d?id=${e.android.androidAppId}`,
            os: "android",
            storeAppId: e.android.androidAppId,
            appId: null,
        };
    if ((0, A.isIOS)() && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId.slice(2) : e.ios.iosAppId;
        return { url: `https://apps.apple.com/app/id${t}`, os: "ios", storeAppId: t, appId: parseInt(t, 10) };
    }
    return null;
}
function k(e) {
    let {
        link: t,
        directLink: n,
        inlineStoreParams: i,
        trackOverlayEvent: r,
        getIosAttribution: s,
        allowExternalOpen: o = !0,
    } = e;
    return T.OO.getConfig({ location: "quest_open_game_link" }).enabled, o && (0, l.A)(t), Promise.resolve(!1);
}
function Q(e, t) {
    let n,
        i,
        o,
        a = (0, h.Jx)(e.config),
        l = null == (n = e.config.ctaConfig) ? null : R({ url: (0, h.Jx)(e.config), android: n.android, ios: n.ios });
    null != l && (a = l),
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
            })(a, (o = (0, r.A)()))),
        (0, p.E5)(p.kI.STEP_3_CLICKED_EXTERNAL, "open_game_link_directly")
            ? (0, u.r)({
                  type: d.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                  adCreativeType: s.p.QUEST,
                  adCreativeId: e.id,
                  questContentCTA: t.ctaContent,
                  surfaceId: t.content,
                  sourceQuestContent: t.sourceQuestContent,
                  questContentPosition: t.position,
                  impressionId: t.impressionId,
                  clickId: o,
              })
            : (0, I.Y5)({
                  questId: e.id,
                  questContent: t.content,
                  questContentCTA: t.ctaContent,
                  questContentPosition: t.position,
                  impressionId: t.impressionId,
                  sourceQuestContent: t.sourceQuestContent,
                  clickId: o,
              });
    let { impressionId: f } = t,
        E = null != f ? (0, c.vV)(e.config.ctaConfig?.ios?.iosAppId != null, t.sourceQuestContent, e.id) : null;
    m._.dispatch(g.jej.QUEST_GAME_LINK_OPENED),
        k({
            link: a,
            directLink: l,
            inlineStoreParams:
                null == (i = e.config.ctaConfig)
                    ? null
                    : M({ url: (0, h.Jx)(e.config), android: i.android, ios: i.ios }),
            trackOverlayEvent: (n, i, r, s, o) =>
                (0, I.eA)({
                    quest: e,
                    trackingCtx: t,
                    inlineStoreAppId: i,
                    overlayVariant: r,
                    event: n,
                    timeSpentMs: s,
                    overlaySurface: o,
                }),
            getIosAttribution: null != E && null != f ? () => (0, C.FW)({ impressionId: f }) : void 0,
        });
}
function D(e, t) {
    let { adContentId: n, adCreativeType: i, cta: r } = e,
        s = r.url,
        o = R(r);
    null != o && (s = o),
        (0, p.E5)(p.kI.STEP_3_CLICKED_EXTERNAL, "open_ad_game_link_directly")
            ? (0, u.r)({
                  type: d.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                  adCreativeType: i,
                  adCreativeId: n,
                  questContentCTA: t.ctaContent,
                  surfaceId: t.content,
                  sourceQuestContent: t.sourceQuestContent,
                  questContentPosition: t.position,
                  impressionId: t.impressionId,
              })
            : (0, I.vK)({
                  adContentId: n,
                  adCreativeType: i,
                  questContent: t.content,
                  questContentCTA: t.ctaContent,
                  questContentPosition: t.position,
                  impressionId: t.impressionId,
                  sourceQuestContent: t.sourceQuestContent,
              }),
        m._.dispatch(g.jej.QUEST_GAME_LINK_OPENED);
    let { impressionId: a } = t,
        l = null != a ? (0, c.vV)(r.ios?.iosAppId != null, t.sourceQuestContent, n) : null;
    k({
        link: s,
        directLink: o,
        inlineStoreParams: M(r),
        trackOverlayEvent: (e, r, s, o, a) =>
            (0, I.YE)({
                adContentId: n,
                adCreativeType: i,
                trackingCtx: t,
                inlineStoreAppId: r,
                overlayVariant: s,
                event: e,
                timeSpentMs: o,
                overlaySurface: a,
            }),
        getIosAttribution: null != l && null != a ? () => (0, C.FW)({ impressionId: a }) : void 0,
    });
}
function q(e, t) {
    let { quest: i } = e;
    (0, p.E5)(p.kI.STEP_2_CLICKED_INTERNAL, "open_console_connection_settings")
        ? (0, u.r)({
              type: d.F.CLICK_INTERNAL,
              adCreativeType: s.p.QUEST,
              adCreativeId: i.id,
              questContentCTA: t.ctaContent,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              impressionId: t.impressionId,
              questContentPosition: t.position,
          })
        : (0, I.Y5)({
              questId: i.id,
              questContent: t.content,
              questContentPosition: t.position,
              questContentCTA: t.ctaContent,
              impressionId: t.impressionId,
              sourceQuestContent: t.sourceQuestContent,
          }),
        (function () {
            {
                let { openUserSettings: e } = n(766075);
                e(E.X.CONNECTIONS_CATEGORY);
            }
        })();
}
function U(e, t) {
    let { quest: n } = e;
    (0, p.E5)(p.kI.STEP_2_CLICKED_INTERNAL, "open_add_console_connection_modal")
        ? (0, u.r)({
              type: d.F.CLICK_INTERNAL,
              adCreativeType: s.p.QUEST,
              adCreativeId: n.id,
              questContentCTA: t.ctaContent,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              impressionId: t.impressionId,
              questContentPosition: t.position,
              questContentRowIndex: t.rowIndex,
          })
        : (0, I.Y5)({
              questId: n.id,
              questContent: t.content,
              questContentPosition: t.position,
              questContentRowIndex: t.rowIndex,
              questContentCTA: t.ctaContent,
              impressionId: t.impressionId,
              sourceQuestContent: t.sourceQuestContent,
          });
    let i = b(n);
    if (1 === i.length) return (0, f.A)({ platformType: i.at(0) });
    a.h.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, f.A)({ platformType: e }),
        includedPlatformTypes: new Set(i),
        includeApplicationConnections: !1,
    });
}
function G(e, t, n) {
    let { quest: i } = e;
    return (
        (0, p.E5)(p.kI.STEP_2_CLICKED_INTERNAL, "open_single_console_connection_modal")
            ? (0, u.r)({
                  type: d.F.CLICK_INTERNAL,
                  adCreativeType: s.p.QUEST,
                  adCreativeId: i.id,
                  questContentCTA: t.ctaContent,
                  surfaceId: t.content,
                  sourceQuestContent: t.sourceQuestContent,
                  impressionId: t.impressionId,
                  questContentPosition: t.position,
                  questContentRowIndex: t.rowIndex,
              })
            : (0, I.Y5)({
                  questId: i.id,
                  questContent: t.content,
                  questContentPosition: t.position,
                  questContentRowIndex: t.rowIndex,
                  questContentCTA: t.ctaContent,
                  impressionId: t.impressionId,
                  sourceQuestContent: t.sourceQuestContent,
              }),
        (0, f.A)({ platformType: n })
    );
}
