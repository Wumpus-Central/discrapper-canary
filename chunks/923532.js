n.d(t, { Z: () => g });
var i = n(200651),
    s = n(192379),
    l = n(512722),
    a = n.n(l),
    r = n(399606),
    o = n(822183),
    d = n(673125),
    c = n(90753),
    u = n(594174),
    h = n(497343);
function p(e) {
    let { streamerId: t, channelId: n } = e,
        l = s.useRef(null),
        o = (0, r.e7)([u.default], () => u.default.getCurrentUser());
    return (
        a()(null != o, 'user cannot be null'),
        (0, c.Z)(l, o, t, n),
        (0, i.jsx)('canvas', {
            className: h.canvas,
            ref: l
        })
    );
}
function g(e) {
    let { guildId: t, channelId: n, streamerId: s } = e,
        { isSharedCanvasEnabled: l } = o.Z.useExperiment(
            {
                guildId: t,
                location: 'f0d1b1_1'
            },
            { autoTrackExposure: !0 }
        ),
        a = (0, r.e7)([d.Z], () => d.Z.visibleOverlayCanvas);
    return l && a
        ? (0, i.jsx)(p, {
              guildId: t,
              channelId: n,
              streamerId: s
          })
        : null;
}
