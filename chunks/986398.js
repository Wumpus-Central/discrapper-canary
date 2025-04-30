n.d(t, { Z: () => a });
var r = n(200651),
    i = n(81063),
    o = n(388032);
function a(e) {
    let { leaderboard: t, className: n } = e,
        a = (0, i.xF)(t.settings.application_id, t.settings.winner_asset_id);
    return null == a
        ? null
        : (0, r.jsx)('img', {
              className: n,
              src: a,
              alt: o.intl.string(o.t.QyRmzc)
          });
}
