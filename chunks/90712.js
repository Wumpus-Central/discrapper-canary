n.d(t, { Z: () => f }), n(388685);
var r = n(726542),
    i = n(394821),
    a = n(503438),
    o = n(177267),
    s = n(297196),
    l = n(834353),
    c = n(802856),
    u = n(981631);
let d = new Set([u.ABu.LEAGUE_OF_LEGENDS, u.ABu.ROBLOX, u.ABu.TWITCH, u.ABu.YOUTUBE]);
function f(e) {
    if ((0, a.Z)(e)) return r.Z.get(u.ABu.SPOTIFY);
    if ((0, i.Z)(e)) return r.Z.get(u.ABu.CRUNCHYROLL);
    if ((0, c.Z)(e)) return r.Z.get(u.ABu.XBOX);
    if ((0, l.Z)(e)) return r.Z.get(u.ABu.PLAYSTATION);
    if ((0, s.Z)(e) || (0, o.Z)(e)) return r.Z.get(u.ABu.META_QUEST_OR_HORIZON);
    let t = r.Z.find((t) => {
        let { name: n } = t;
        return n === e.name;
    });
    return null != t && d.has(t.type) ? t : null;
}
