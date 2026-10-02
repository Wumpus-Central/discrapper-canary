(n.d(t, { g: () => c, z: () => r }), n(321073));
var i = n(70283);
let l = [i.$.STREAMING, i.$.GAME_VARIETY, i.$.GAME_TIME, i.$.ACCOUNT_AGE];
function r(e) {
    let t = new Map(e.map((e) => [e.badge_id, e])),
        n = [];
    for (let e of l) {
        let i = t.get(e);
        if (i?.owned !== !0 || null == i.current_tier) continue;
        let l = i.tiers.findIndex((e) => e.key === i.current_tier);
        if (-1 === l) continue;
        let r = i.tiers[l],
            c = r?.complex_icon_static_url ?? r?.simple_icon_url;
        null != c && n.push({ iconUrl: c, tierIndex: l });
    }
    return n
        .sort((e, t) => t.tierIndex - e.tierIndex)
        .slice(0, 3)
        .map((e) => e.iconUrl);
}
function c(e) {
    let [t, n, i] = e;
    return null == t
        ? { type: "fallback" }
        : null == n
          ? { type: "single", iconUrls: [t] }
          : null == i
            ? { type: "pair", iconUrls: [n, t] }
            : { type: "trio", iconUrls: [n, t, i] };
}
