n.d(t, { Z: () => g });
var i = n(200651),
    s = n(192379),
    l = n(512722),
    r = n.n(l),
    o = n(399606),
    a = n(822183),
    d = n(673125),
    c = n(610947),
    u = n(594174),
    h = n(497343);
function p(e) {
    let { streamerId: t, channelId: n } = e,
        l = s.useRef(null),
        a = (0, o.e7)([u.default], () => u.default.getCurrentUser());
    return (
        r()(null != a, 'user cannot be null'),
        (0, c.Z)(l, a, t, n),
        (0, i.jsx)('canvas', {
            className: h.canvas,
            ref: l
        })
    );
}
function g(e) {
    let { guildId: t, channelId: n, streamerId: s } = e,
        { isSharedCanvasEnabled: l } = a.Z.useExperiment(
            {
                guildId: t,
                location: 'f0d1b1_1'
            },
            { autoTrackExposure: !0 }
        ),
        r = (0, o.e7)([d.Z], () => d.Z.visibleOverlayCanvas);
    return l && r
        ? (0, i.jsx)(p, {
              guildId: t,
              channelId: n,
              streamerId: s
          })
        : null;
}
