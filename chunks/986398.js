r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(200651),
    a = r(81063),
    o = r(388032);
function s(e) {
    let { leaderboard: n, className: r } = e,
        s = (0, a.getAssetImage)(n.settings.application_id, n.settings.winner_asset_id);
    return null == s
        ? null
        : (0, i.jsx)('img', {
              className: r,
              src: s,
              alt: o.intl.string(o.t.QyRmzc)
          });
}
