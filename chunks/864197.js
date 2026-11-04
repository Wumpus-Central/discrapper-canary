n(321073);
var i = n(70283);
let r = [i.$.STREAMING, i.$.GAME_VARIETY, i.$.GAME_TIME, i.$.ACCOUNT_AGE];
n.d(
    t,
    {},
    {
        g: function (e) {
            let [t, n, i] = e;
            return null == t
                ? { type: "fallback" }
                : null == n
                  ? { type: "single", iconUrls: [t] }
                  : null == i
                    ? { type: "pair", iconUrls: [n, t] }
                    : { type: "trio", iconUrls: [n, t, i] };
        },
        z: function (e) {
            let t = new Map(e.map((e) => [e.badge_id, e])),
                n = [];
            for (let e of r) {
                let i = t.get(e);
                if (i?.owned !== !0 || null == i.current_tier) continue;
                let r = i.tiers.findIndex((e) => e.key === i.current_tier);
                if (-1 === r) continue;
                let l = i.tiers[r],
                    u = l?.simple_icon_url;
                null != u && n.push({ iconUrl: u, tierIndex: r });
            }
            return n
                .sort((e, t) => t.tierIndex - e.tierIndex)
                .slice(0, 3)
                .map((e) => e.iconUrl);
        },
    },
);
