n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(512722),
    a = n.n(r),
    o = n(399606),
    l = n(822183),
    d = n(673125),
    c = n(610947),
    u = n(594174),
    h = n(497343);
function p(e) {
    let { streamerId: t, channelId: n } = e,
        r = s.useRef(null),
        l = (0, o.e7)([u.default], () => u.default.getCurrentUser());
    return (
        a()(null != l, 'user cannot be null'),
        (0, c.Z)(r, l, t, n),
        (0, i.jsx)('canvas', {
            className: h.canvas,
            ref: r
        })
    );
}
function f(e) {
    let { guildId: t, channelId: n, streamerId: s } = e,
        { isSharedCanvasEnabled: r } = l.Z.useExperiment(
            {
                guildId: t,
                location: 'f0d1b1_1'
            },
            { autoTrackExposure: !0 }
        ),
        a = (0, o.e7)([d.Z], () => d.Z.visibleOverlayCanvas);
    return r && a
        ? (0, i.jsx)(p, {
              guildId: t,
              channelId: n,
              streamerId: s
          })
        : null;
}
