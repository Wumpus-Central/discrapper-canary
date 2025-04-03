n.d(t, { Z: () => f });
var i = n(200651),
    r = n(192379),
    s = n(512722),
    o = n.n(s),
    l = n(399606),
    a = n(822183),
    c = n(673125),
    u = n(90753),
    d = n(594174),
    h = n(770376);
function p(e) {
    let { streamerId: t, channelId: n } = e,
        s = r.useRef(null),
        a = (0, l.e7)([d.default], () => d.default.getCurrentUser());
    return (
        o()(null != a, 'user cannot be null'),
        (0, u.Z)(s, a, t, n),
        (0, i.jsx)('canvas', {
            className: h.canvas,
            ref: s
        })
    );
}
function f(e) {
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
