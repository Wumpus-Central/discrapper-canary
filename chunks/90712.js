n.d(t, { Z: () => d }), n(388685);
var r = n(726542),
    i = n(394821),
    a = n(503438),
    o = n(297196),
    s = n(834353),
    l = n(802856),
    c = n(981631);
let u = new Set([c.ABu.LEAGUE_OF_LEGENDS, c.ABu.ROBLOX, c.ABu.TWITCH, c.ABu.YOUTUBE]);
function d(e) {
    if ((0, a.Z)(e)) return r.Z.get(c.ABu.SPOTIFY);
    if ((0, i.Z)(e)) return r.Z.get(c.ABu.CRUNCHYROLL);
    if ((0, l.Z)(e)) return r.Z.get(c.ABu.XBOX);
    if ((0, s.Z)(e)) return r.Z.get(c.ABu.PLAYSTATION);
    if ((0, o.Z)(e)) return r.Z.get(c.ABu.META_QUEST);
    let t = r.Z.find((t) => {
        let { name: n } = t;
        return n === e.name;
    });
    return null != t && u.has(t.type) ? t : null;
}
