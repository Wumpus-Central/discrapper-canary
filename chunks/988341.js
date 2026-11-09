n(321073);
var i = n(70283);
(n(240248), n(731309), n(518477));
var r = n(792996);
function a(e) {
    return e === i.$.STAFF;
}
let s = new Set([i.$.GAME_VARIETY, i.$.GAME_TIME, i.$.STREAMING]),
    l = new Set([i.$.ACCOUNT_AGE, i.$.STREAMING, i.$.GAME_TIME, i.$.GAME_VARIETY]);
n.d(
    t,
    {},
    {
        A: a,
        Cw: function (e) {
            let t = [],
                n = [],
                i = [];
            for (let r of e) r.owned && (a(r.badge_id) ? t.push(r) : r.hidden ? i.push(r) : n.push(r));
            return { fixedBadges: t, reorderableBadges: n, hiddenBadges: i };
        },
        DW: function (e) {
            let t = e.tiers;
            if (null == t || 0 === t.length) return;
            let n = e.owned ? e.current_tier : e.next_tier;
            return (null != n ? t.find((e) => e.key === n) : void 0) ?? t[0];
        },
        Jn: function (e) {
            return s.has(e);
        },
        Vs: function (e) {
            let { tier: t, isUnlocked: n, isViewingOtherUser: i, isViewerOnUpgradeableNitro: a } = e;
            return n || !a || i ? (t.milestone_text ?? "") : r.intl.string(r.t.VPu695);
        },
        YU: function (e, t) {
            return null != t ? e.tiers.find((e) => e.key === t) : void 0;
        },
        hK: function (e) {
            return a(e) ? r.t.t3udZb : r.t.nPQVxb;
        },
        in: function (e) {
            let t = [],
                n = [];
            for (let i of e) i.owned ? n.push(i) : i.is_earnable && t.push(i);
            return { earnable: t, owned: n };
        },
        jg: function (e) {
            let { tenureBadgeHideable: t } = e;
            return new Set(t ? [i.$.STAFF] : [i.$.STAFF, i.$.PREMIUM_TENURE]);
        },
        sC: l,
    },
);
