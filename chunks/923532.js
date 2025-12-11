n.d(t, { Z: () => p });
var i = n(54381),
    r = n(473749),
    a = n(512722),
    s = n.n(a),
    o = n(399606),
    l = n(822183),
    c = n(673125),
    d = n(90753),
    u = n(594174),
    f = n(91178);
function h(e) {
    let { streamerId: t, channelId: n } = e,
        a = r.useRef(null),
        l = (0, o.e7)([u.default], () => u.default.getCurrentUser());
    return (
        s()(null != l, "user cannot be null"),
        (0, d.Z)(a, l, t, n),
        (0, i.jsx)("canvas", {
            className: f.canvas,
            ref: a,
        })
    );
}
function p(e) {
    let { guildId: t, channelId: n, streamerId: r } = e,
        { isSharedCanvasEnabled: a } = l.Z.useExperiment(
            {
                guildId: t,
                location: "f0d1b1_1",
            },
            { autoTrackExposure: !0 },
        ),
        s = (0, o.e7)([c.Z], () => c.Z.visibleOverlayCanvas);
    return a && s
        ? (0, i.jsx)(h, {
              guildId: t,
              channelId: n,
              streamerId: r,
          })
        : null;
}
