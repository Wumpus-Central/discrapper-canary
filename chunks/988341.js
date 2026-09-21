(n.d(t, { A: () => s, Cw: () => c, hK: () => l, in: () => o, jg: () => d, k9: () => a }), n(321073));
var i = n(70283);
(n(240248), n(609782), n(518477));
var r = n(375708);
let a = 6;
function s(e) {
    return e === i.$.STAFF;
}
function l(e) {
    return s(e) ? r.t.t3udZb : r.t.nPQVxb;
}
function o(e) {
    let t = [],
        n = [];
    for (let i of e) i.owned ? n.push(i) : i.is_earnable && t.push(i);
    return { earnable: t, owned: n };
}
function d(e) {
    let { tenureBadgeHideable: t } = e;
    return new Set(t ? [i.$.STAFF] : [i.$.STAFF, i.$.PREMIUM_TENURE]);
}
function c(e) {
    let t = [],
        n = [],
        i = [];
    for (let r of e) r.owned && (s(r.badge_id) ? t.push(r) : r.hidden ? i.push(r) : n.push(r));
    return { fixedBadges: t, reorderableBadges: n, hiddenBadges: i };
}
