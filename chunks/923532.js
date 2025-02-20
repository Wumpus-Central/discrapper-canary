n.d(t, { Z: () => g });
var i = n(200651),
    r = n(192379),
    s = n(512722),
    o = n.n(s),
    l = n(399606),
    a = n(822183),
    c = n(673125),
    d = n(90753),
    u = n(594174),
    h = n(18892);
function p(e) {
    let { streamerId: t, channelId: n } = e,
        s = r.useRef(null),
        a = (0, l.e7)([u.default], () => u.default.getCurrentUser());
    return (
        o()(null != a, 'user cannot be null'),
        (0, d.Z)(s, a, t, n),
        (0, i.jsx)('canvas', {
            className: h.canvas,
            ref: s
        })
    );
}
function g(e) {
    let { guildId: t, channelId: n, streamerId: r } = e,
        { isSharedCanvasEnabled: s } = a.Z.useExperiment(
            {
                guildId: t,
                location: 'f0d1b1_1'
            },
            { autoTrackExposure: !0 }
        ),
        o = (0, l.e7)([c.Z], () => c.Z.visibleOverlayCanvas);
    return s && o
        ? (0, i.jsx)(p, {
              guildId: t,
              channelId: n,
              streamerId: r
          })
        : null;
}
