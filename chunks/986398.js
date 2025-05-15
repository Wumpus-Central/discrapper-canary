n.d(t, { Z: () => o });
var r = n(255367),
    i = n(81063),
    a = n(388032);
function o(e) {
    let { leaderboard: t, className: n, ref: o } = e,
        s = (0, i.xF)(t.settings.application_id, t.settings.winner_asset_id);
    return null == s
        ? null
        : (0, r.jsx)('img', {
              className: n,
              src: s,
              alt: a.intl.string(a.t.QyRmzc),
              ref: o
          });
}
