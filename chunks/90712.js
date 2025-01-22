r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(47120);
var a = r(726542),
    o = r(394821),
    s = r(503438),
    l = r(834353),
    u = r(802856),
    c = r(981631);
let d = new Set([c.ABu.LEAGUE_OF_LEGENDS, c.ABu.ROBLOX, c.ABu.TWITCH, c.ABu.YOUTUBE]);
function f(e) {
    if ((0, s.Z)(e)) return a.Z.get(c.ABu.SPOTIFY);
    if ((0, o.Z)(e)) return a.Z.get(c.ABu.CRUNCHYROLL);
    if ((0, u.Z)(e)) return a.Z.get(c.ABu.XBOX);
    if ((0, l.Z)(e)) return a.Z.get(c.ABu.PLAYSTATION);
    let n = a.Z.find((n) => {
        let { name: r } = n;
        return r === e.name;
    });
    return null != n && d.has(n.type) ? n : null;
}
