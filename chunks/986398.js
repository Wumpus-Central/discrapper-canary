n.d(t, { Z: () => o });
var r = n(200651),
    i = n(81063),
    a = n(388032);
function o(e) {
    let { leaderboard: t, className: n } = e,
        o = (0, i.xF)(t.settings.application_id, t.settings.winner_asset_id);
    return null == o
        ? null
        : (0, r.jsx)('img', {
              className: n,
              src: o,
              alt: a.NW.string(a.t.QyRmzc)
          });
}
