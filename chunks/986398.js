a.d(e, { Z: () => n });
var c = a(200651),
    d = a(81063),
    s = a(388032);
function n(t) {
    let { leaderboard: e, className: a } = t,
        n = (0, d.xF)(e.settings.application_id, e.settings.winner_asset_id);
    return null == n
        ? null
        : (0, c.jsx)('img', {
              className: a,
              src: n,
              alt: s.NW.string(s.t.QyRmzc)
          });
}
