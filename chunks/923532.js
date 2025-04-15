n.d(t, { Z: () => f });
var i = n(200651),
    r = n(192379),
    s = n(512722),
    o = n.n(s),
    a = n(399606),
    l = n(822183),
    c = n(673125),
    d = n(90753),
    u = n(594174),
    h = n(770376);
function p(e) {
    let { streamerId: t, channelId: n } = e,
        s = r.useRef(null),
        l = (0, a.e7)([u.default], () => u.default.getCurrentUser());
    return (
        o()(null != l, 'user cannot be null'),
        (0, d.Z)(s, l, t, n),
        (0, i.jsx)('canvas', {
            className: h.canvas,
            ref: s
        })
    );
}
function f(e) {
    let { guildId: t, channelId: n, streamerId: r } = e,
        { isSharedCanvasEnabled: s } = l.Z.useExperiment(
            {
                guildId: t,
                location: 'f0d1b1_1'
            },
            { autoTrackExposure: !0 }
        ),
        o = (0, a.e7)([c.Z], () => c.Z.visibleOverlayCanvas);
    return s && o
        ? (0, i.jsx)(p, {
              guildId: t,
              channelId: n,
              streamerId: r
          })
        : null;
}
