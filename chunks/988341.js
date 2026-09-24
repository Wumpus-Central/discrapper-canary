(n.d(t, {
    A: () => s,
    Cw: () => h,
    DW: () => u,
    HW: () => c,
    Jn: () => o,
    Vs: () => f,
    YU: () => I,
    hK: () => _,
    in: () => E,
    jg: () => A,
    k9: () => a,
    sC: () => d,
}),
    n(321073));
var i = n(70283);
(n(240248), n(609782), n(518477));
var r = n(375708);
let a = 6;
function s(e) {
    return e === i.$.STAFF;
}
let l = new Set([i.$.GAME_VARIETY, i.$.GAME_TIME, i.$.STREAMING]);
function o(e) {
    return l.has(e);
}
let d = new Set([i.$.ACCOUNT_AGE, i.$.STREAMING, i.$.GAME_TIME, i.$.GAME_VARIETY]);
function c(e) {
    return d.has(e);
}
function u(e) {
    let t = e.tiers;
    if (null == t || 0 === t.length) return;
    let n = e.owned ? e.current_tier : e.next_tier;
    return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
}
function _(e) {
    return s(e) ? r.t.t3udZb : r.t.nPQVxb;
}
function E(e) {
    let t = [],
        n = [];
    for (let i of e) i.owned ? n.push(i) : i.is_earnable && t.push(i);
    return { earnable: t, owned: n };
}
function A(e) {
    let { tenureBadgeHideable: t } = e;
    return new Set(t ? [i.$.STAFF] : [i.$.STAFF, i.$.PREMIUM_TENURE]);
}
function h(e) {
    let t = [],
        n = [],
        i = [];
    for (let r of e) r.owned && (s(r.badge_id) ? t.push(r) : r.hidden ? i.push(r) : n.push(r));
    return { fixedBadges: t, reorderableBadges: n, hiddenBadges: i };
}
function I(e, t) {
    return null != t ? e.tiers.find((e) => e.key === t) : void 0;
}
function f(e) {
    let { tier: t, isUnlocked: n, isViewingOtherUser: i, isViewerOnUpgradeableNitro: a } = e;
    return n || !a || i ? (t.milestone_text ?? "") : r.intl.string(r.t.VPu695);
}
