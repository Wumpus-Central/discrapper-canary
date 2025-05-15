n.d(t, { Z: () => u }), n(388685);
var r = n(726542),
    i = n(394821),
    a = n(503438),
    o = n(834353),
    s = n(802856),
    l = n(981631);
let c = new Set([l.ABu.LEAGUE_OF_LEGENDS, l.ABu.ROBLOX, l.ABu.TWITCH, l.ABu.YOUTUBE]);
function u(e) {
    if ((0, a.Z)(e)) return r.Z.get(l.ABu.SPOTIFY);
    if ((0, i.Z)(e)) return r.Z.get(l.ABu.CRUNCHYROLL);
    if ((0, s.Z)(e)) return r.Z.get(l.ABu.XBOX);
    if ((0, o.Z)(e)) return r.Z.get(l.ABu.PLAYSTATION);
    let t = r.Z.find((t) => {
        let { name: n } = t;
        return n === e.name;
    });
    return null != t && c.has(t.type) ? t : null;
}
