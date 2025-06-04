n.d(t, { Z: () => a });
var r = n(255367),
    i = n(81063),
    o = n(388032);
function a(e) {
    let { leaderboard: t, className: n, ref: a } = e,
        s = (0, i.xF)(t.settings.application_id, t.settings.winner_asset_id);
    return null == s
        ? null
        : (0, r.jsx)('img', {
              className: n,
              src: s,
              alt: o.intl.string(o.t.QyRmzc),
              ref: a
          });
}
