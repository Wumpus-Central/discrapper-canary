c.d(e, { Z: () => n });
var d = c(200651),
    a = c(81063),
    s = c(388032);
function n(t) {
    let { leaderboard: e, className: c } = t,
        n = (0, a.getAssetImage)(e.settings.application_id, e.settings.winner_asset_id);
    return null == n
        ? null
        : (0, d.jsx)('img', {
              className: c,
              src: n,
              alt: s.intl.string(s.t.QyRmzc)
          });
}
