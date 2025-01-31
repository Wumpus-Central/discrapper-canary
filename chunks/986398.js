n.d(t, { Z: () => s });
var i = n(200651),
    r = n(81063),
    a = n(388032);
function s(e) {
    let { leaderboard: t, className: n } = e,
        s = (0, r.getAssetImage)(t.settings.application_id, t.settings.winner_asset_id);
    return null == s
        ? null
        : (0, i.jsx)('img', {
              className: n,
              src: s,
              alt: a.intl.string(a.t.QyRmzc)
          });
}
