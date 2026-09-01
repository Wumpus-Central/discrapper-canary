"use strict";
n.d(t, { A: () => r, Cw: () => a }), n(321073);
var i = n(70283);
function r(e) {
    return e === i.$.STAFF;
}
function a(e) {
    let t = [],
        n = [],
        i = [];
    for (let a of e) a.owned && (r(a.badge_id) ? t.push(a) : a.hidden ? i.push(a) : n.push(a));
    return { fixedBadges: t, reorderableBadges: n, hiddenBadges: i };
}
n(609782), n(518477);
