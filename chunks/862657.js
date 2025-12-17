n.d(t, {
    $V: () => x,
    E8: () => S,
    GN: () => g,
    PM: () => I,
    R_: () => R,
    UE: () => v,
    VB: () => C,
    Zp: () => T,
    _x: () => h,
    iQ: () => O,
    jY: () => P,
    qe: () => N,
    uN: () => w,
    vR: () => b,
    ys: () => D,
    zE: () => E,
    zi: () => y,
}),
    n(388685);
var r = n(95015),
    i = n(706454),
    a = n(960048),
    o = n(616022),
    s = n(49436),
    l = n(704161),
    c = n(324805),
    u = n(981631);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = 2592000000;
function h(e, t, n) {
    var r;
    let i = Array.isArray(t) ? new Map(t.map((e) => [e.id, e])) : t,
        a = Array.isArray(n) ? new Map(n.map((e) => [e.id, e])) : n,
        o = i.get(e);
    if (null != o) return o;
    let s = null == (r = a.get(e)) ? void 0 : r.replacementId;
    if (null != s) return i.get(s);
}
function g(e) {
    return Object.keys(c.a_).includes(s.jn[e]);
}
function E(e, t) {
    if (!g(t)) return !1;
    let n = s.jn[t];
    return (0, r.yE)(e.dismissedQuestContent, c.a_[n]);
}
function b(e, t) {
    return e.targetedContent.includes(t);
}
function y(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function O(e) {
    if (!y(e)) return !1;
    let t = Date.now() - m,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t);
}
function v(e) {
    let t = null,
        n = Date.now();
    for (let r of e) {
        let e = new Date(r.config.expiresAt).valueOf();
        !(e <= n) && (null == t || e < t) && (t = e);
    }
    return t;
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dateStyle: "short" };
    return null == e ? "" : new Date(e).toLocaleDateString(i.default.locale, t);
}
function I(e, t, n) {
    let r = t.get(n);
    if (null == r) return;
    let i = e.get(r.quest.id);
    if (null != i && !y(i)) return i;
}
function T(e) {
    return {
        [s.jn.QUEST_BAR]: s.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [s.jn.QUEST_BAR_V2]: s.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
        [s.jn.QUEST_BAR_MOBILE]: s.Ok.MOBILE_HOME_DOCK_AREA,
    }[e];
}
function C(e) {
    let t = T(e);
    return null != t && c.v6.has(t);
}
function A(e) {
    let { enableNewRequestBehavior: t } = l.Z.getConfig({ location: "getQuestDeliveryDataForPlacement" });
    if (t) {
        let t = o.Z.questAdDecisionByPlacement.get(e);
        return null == t
            ? null
            : {
                  questId: t.questId,
                  adDecisionData: t.adDecisionData,
                  adContext: t.adContext,
                  metadataRaw: t.metadataRaw,
                  metadataSealed: t.metadataSealed,
              };
    }
    {
        let t = o.Z.questToDeliverForPlacement.get(e);
        return null == t
            ? null
            : {
                  questId: t.quest.id,
                  adDecisionData: t.adDecisionData,
                  adContext: t.adContext,
                  metadataRaw: t.metadataRaw,
                  metadataSealed: t.metadataSealed,
              };
    }
}
function N(e, t) {
    var n;
    let r = T(t);
    if (null == r) return c.Jp;
    let { adDecisionData: i, questId: a } = null != (n = A(r)) ? n : {};
    return null != i && a === e ? i : c.Jp;
}
function P(e) {
    var t;
    let n = T(e);
    if (null != n) return null == (t = A(n)) ? void 0 : t.metadataRaw;
}
function R(e) {
    var t;
    let n = T(e);
    if (null != n) return null == (t = A(n)) ? void 0 : t.metadataSealed;
}
function w(e) {
    var t;
    let n = T(e);
    if (null != n) return null == (t = A(n)) ? void 0 : t.adContext;
}
function D(e, t) {
    a.Z.captureException(e, _(f({}, t), { tags: _(f({}, null == t ? void 0 : t.tags), { app_context: "quests" }) }));
}
function x() {
    return window.location.pathname.startsWith(u.Z5c.QUEST_HOME);
}
