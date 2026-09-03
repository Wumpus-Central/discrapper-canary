n.d(t, { A: () => a, Cw: () => l, jg: () => s, k9: () => r }), n(321073);
var i = n(70283);
n(609782), n(518477);
let r = 6;
function a(e) {
    return e === i.$.STAFF;
}
function s(e) {
    let { tenureBadgeHideable: t } = e;
    return new Set(t ? [i.$.STAFF] : [i.$.STAFF, i.$.PREMIUM_TENURE]);
}
function l(e) {
    let t = [],
        n = [],
        i = [];
    for (let r of e) r.owned && (a(r.badge_id) ? t.push(r) : r.hidden ? i.push(r) : n.push(r));
    return { fixedBadges: t, reorderableBadges: n, hiddenBadges: i };
}
