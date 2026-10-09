(n.d(t, {
    $J: () => R,
    IG: () => w,
    Ps: () => K,
    UR: () => h,
    W1: () => P,
    WU: () => b,
    _Q: () => Q,
    b6: () => q,
    bg: () => L,
    pu: () => U,
    se: () => G,
    v0: () => y,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956),
    n(134528),
    n(947204));
var r,
    u = n(132500),
    i = n(323889),
    o = n(412703),
    l = n(73153),
    s = n(975807),
    a = n(274670),
    d = n(144779),
    c = n(7588),
    f = n(657375),
    A = n(968309),
    E = n(780964),
    _ = n(625494),
    C = n(723702),
    I = n(192444),
    p = n(104886),
    T = n(561844),
    m = n(590202),
    S = n(651892),
    O = n(792620),
    g = n(190107),
    N = n(652215),
    v = n(660183);
function h(e) {
    let t = (0, O.t)({ quest: e }) || (0, O.fE)({ quest: e }) || (0, O.I6)(e),
        n = (0, O.uD)(e),
        r = [];
    return (t && r.push(g.fO.DESKTOP), n && r.push(g.fO.CONSOLE), r);
}
function L(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case o.n.PLAY_ON_XBOX:
                n.push(N.fg2.XBOX);
                break;
            case o.n.PLAY_ON_PLAYSTATION:
                n.push(N.fg2.PLAYSTATION);
        }
    return n;
}
function P(e) {
    let t = (0, O.vv)(e),
        n = (0, O.vl)(e);
    return t || n;
}
var b = (((r = {}).DESKTOP = "desktop"), (r.XBOX = "xbox"), (r.PLAYSTATION = "playstation"), r);
function R(e) {
    return "xbox" === e.connected_account_type ? N.fg2.XBOX : N.fg2.PLAYSTATION;
}
function y(e, t) {
    let { platformType: n, quest: r } = e;
    ((0, p.E5)(p.kI.STEP_2_CLICKED_INTERNAL, "open_authorization_connection_modal")
        ? (0, a.r)({
              type: d.F.CLICK_INTERNAL,
              adCreativeType: i.p.QUEST,
              adCreativeId: r.id,
              questContentCTA: t.ctaContent,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              impressionId: t.impressionId,
          })
        : (0, T.Y5)({
              questId: r.id,
              questContent: t.content,
              sourceQuestContent: t.sourceQuestContent,
              questContentCTA: t.ctaContent,
              impressionId: t.impressionId,
          }),
        (0, A.A)({ platformType: n, location: t.ctaContent }));
}
function w(e) {
    return R(e) === N.fg2.XBOX ? v.t["mytEv+"] : v.t.iDiwby;
}
function M(e) {
    if (((0, C.isIOS)() || "ios" === (0, C.getOS)()) && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId : `id${e.ios.iosAppId}`;
        return `https://apps.apple.com/app/${t}`;
    }
    return ((0, C.isAndroid)() || "android" === (0, C.getOS)()) && e.android?.androidAppId != null
        ? `https://play.google.com/store/apps/details?id=${e.android.androidAppId}`
        : null;
}
function k(e) {
    if ((0, C.isAndroid)() && e.android?.androidAppId != null)
        return {
            url: `https://play.google.com/d?id=${e.android.androidAppId}`,
            os: "android",
            storeAppId: e.android.androidAppId,
            appId: null,
        };
    if ((0, C.isIOS)() && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId.slice(2) : e.ios.iosAppId;
        return { url: `https://apps.apple.com/app/id${t}`, os: "ios", storeAppId: t, appId: parseInt(t, 10) };
    }
    return null;
}
function D(e) {
    let {
        link: t,
        directLink: n,
        inlineStoreParams: r,
        trackOverlayEvent: u,
        trackOverlaySurfaceClick: i,
        appStoreOverlayCarouselScrollContext: o,
        getIosAttribution: l,
        allowExternalOpen: a = !0,
    } = e;
    return (I.OO.getConfig({ location: "quest_open_game_link" }).enabled, a && (0, s.A)(t), Promise.resolve(!1));
}
function U(e, t) {
    let n,
        r,
        o,
        l = (0, S.Jx)(e.config),
        s = null == (n = e.config.ctaConfig) ? null : M({ url: (0, S.Jx)(e.config), android: n.android, ios: n.ios });
    (null != s && (l = s),
        (function (e) {
            try {
                return new URL(e).searchParams.has("dclid");
            } catch {
                return !1;
            }
        })(l) &&
            (l = (function (e, t) {
                try {
                    let n = new URL(e);
                    return (n.searchParams.set("dclid", t), n.toString());
                } catch {
                    return e;
                }
            })(l, (o = (0, u.A)()))));
    let { impressionId: A } = t,
        E = null != A ? (0, c.vV)(e.config.ctaConfig?.ios?.iosAppId != null, t.sourceQuestContent, e.id) : null;
    (_._.dispatch(N.jej.QUEST_GAME_LINK_OPENED),
        D({
            link: l,
            directLink: s,
            inlineStoreParams:
                null == (r = e.config.ctaConfig)
                    ? null
                    : k({ url: (0, S.Jx)(e.config), android: r.android, ios: r.ios }),
            trackOverlayEvent: (n, r, u, i, o) =>
                (0, T.eA)({
                    quest: e,
                    trackingCtx: t,
                    inlineStoreAppId: r,
                    overlayVariant: u,
                    event: n,
                    timeSpentMs: i,
                    overlaySurface: o,
                }),
            trackOverlaySurfaceClick: (n) => (0, T.hR)({ questId: e.id, trackingCtx: t, overlaySurface: n }),
            appStoreOverlayCarouselScrollContext: { questId: e.id },
            getIosAttribution: null != E && null != A ? () => (0, f.FW)({ impressionId: A }) : void 0,
        }).then((n) => {
            "custom" === n
                ? (0, a.r)({
                      type: d.F.CLICK_INTERNAL,
                      adCreativeType: i.p.QUEST,
                      adCreativeId: e.id,
                      questContentCTA: m.Cy.OPEN_CUSTOM_APP_STORE,
                      surfaceId: t.content,
                      sourceQuestContent: t.sourceQuestContent,
                      questContentPosition: t.position,
                      impressionId: t.impressionId,
                      clickId: o,
                  })
                : (0, p.E5)(p.kI.STEP_3_CLICKED_EXTERNAL, "open_game_link_directly")
                  ? (0, a.r)({
                        type: d.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                        adCreativeType: i.p.QUEST,
                        adCreativeId: e.id,
                        questContentCTA: t.ctaContent,
                        surfaceId: t.content,
                        sourceQuestContent: t.sourceQuestContent,
                        questContentPosition: t.position,
                        impressionId: t.impressionId,
                        clickId: o,
                    })
                  : (0, T.Y5)({
                        questId: e.id,
                        questContent: t.content,
                        questContentCTA: t.ctaContent,
                        questContentPosition: t.position,
                        impressionId: t.impressionId,
                        sourceQuestContent: t.sourceQuestContent,
                        clickId: o,
                    });
        }));
}
function Q(e, t) {
    let { adContentId: n, adCreativeType: r, cta: u } = e;
    !(function (e, t, n) {
        let { adContentId: r, adCreativeType: u, cta: i } = e,
            { preferExternalAppStore: o } = n,
            l = i.url,
            A = M(i);
        (null != A && (l = A), _._.dispatch(N.jej.QUEST_GAME_LINK_OPENED));
        let { impressionId: E } = t,
            C = null != E ? (0, c.vV)(i.ios?.iosAppId != null, t.sourceQuestContent, r) : null,
            I = k(i),
            S = null != C && null != E ? () => (0, f.FW)({ impressionId: E }) : void 0;
        function O(e) {
            "custom" === e
                ? (0, a.r)({
                      type: d.F.CLICK_INTERNAL,
                      adCreativeType: u,
                      adCreativeId: r,
                      questContentCTA: m.Cy.OPEN_CUSTOM_APP_STORE,
                      surfaceId: t.content,
                      sourceQuestContent: t.sourceQuestContent,
                      questContentPosition: t.position,
                      impressionId: t.impressionId,
                  })
                : (0, p.E5)(p.kI.STEP_3_CLICKED_EXTERNAL, "open_ad_game_link_directly")
                  ? (0, a.r)({
                        type: d.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                        adCreativeType: u,
                        adCreativeId: r,
                        questContentCTA: t.ctaContent,
                        surfaceId: t.content,
                        sourceQuestContent: t.sourceQuestContent,
                        questContentPosition: t.position,
                        impressionId: t.impressionId,
                    })
                  : (0, T.vK)({
                        adContentId: r,
                        adCreativeType: u,
                        questContent: t.content,
                        questContentCTA: t.ctaContent,
                        questContentPosition: t.position,
                        impressionId: t.impressionId,
                        sourceQuestContent: t.sourceQuestContent,
                    });
        }
        if (o && null == S) {
            ((0, s.A)(l), O(!1));
            return;
        }
        D({
            link: l,
            directLink: A,
            inlineStoreParams: I,
            trackOverlayEvent: (e, n, i, o, l) =>
                (0, T.YE)({
                    adContentId: r,
                    adCreativeType: u,
                    trackingCtx: t,
                    inlineStoreAppId: n,
                    overlayVariant: i,
                    event: e,
                    timeSpentMs: o,
                    overlaySurface: l,
                }),
            trackOverlaySurfaceClick: (e) =>
                (0, T.jk)({ adContentId: r, adCreativeType: u, trackingCtx: t, overlaySurface: e }),
            appStoreOverlayCarouselScrollContext: { adContentId: r },
            getIosAttribution: S,
        }).then(O);
    })({ adContentId: n, adCreativeType: r, cta: u }, t, { preferExternalAppStore: !1 });
}
function q(e, t) {
    let { quest: r } = e;
    ((0, p.E5)(p.kI.STEP_2_CLICKED_INTERNAL, "open_console_connection_settings")
        ? (0, a.r)({
              type: d.F.CLICK_INTERNAL,
              adCreativeType: i.p.QUEST,
              adCreativeId: r.id,
              questContentCTA: t.ctaContent,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              impressionId: t.impressionId,
              questContentPosition: t.position,
          })
        : (0, T.Y5)({
              questId: r.id,
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
        })());
}
function G(e, t) {
    let { quest: n } = e;
    (0, p.E5)(p.kI.STEP_2_CLICKED_INTERNAL, "open_add_console_connection_modal")
        ? (0, a.r)({
              type: d.F.CLICK_INTERNAL,
              adCreativeType: i.p.QUEST,
              adCreativeId: n.id,
              questContentCTA: t.ctaContent,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              impressionId: t.impressionId,
              questContentPosition: t.position,
              questContentRowIndex: t.rowIndex,
          })
        : (0, T.Y5)({
              questId: n.id,
              questContent: t.content,
              questContentPosition: t.position,
              questContentRowIndex: t.rowIndex,
              questContentCTA: t.ctaContent,
              impressionId: t.impressionId,
              sourceQuestContent: t.sourceQuestContent,
          });
    let r = L(n);
    if (1 === r.length) return (0, A.A)({ platformType: r.at(0) });
    l.h.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, A.A)({ platformType: e }),
        includedPlatformTypes: new Set(r),
        includeApplicationConnections: !1,
    });
}
function K(e, t, n) {
    let { quest: r } = e;
    return (
        (0, p.E5)(p.kI.STEP_2_CLICKED_INTERNAL, "open_single_console_connection_modal")
            ? (0, a.r)({
                  type: d.F.CLICK_INTERNAL,
                  adCreativeType: i.p.QUEST,
                  adCreativeId: r.id,
                  questContentCTA: t.ctaContent,
                  surfaceId: t.content,
                  sourceQuestContent: t.sourceQuestContent,
                  impressionId: t.impressionId,
                  questContentPosition: t.position,
                  questContentRowIndex: t.rowIndex,
              })
            : (0, T.Y5)({
                  questId: r.id,
                  questContent: t.content,
                  questContentPosition: t.position,
                  questContentRowIndex: t.rowIndex,
                  questContentCTA: t.ctaContent,
                  impressionId: t.impressionId,
                  sourceQuestContent: t.sourceQuestContent,
              }),
        (0, A.A)({ platformType: n })
    );
}
