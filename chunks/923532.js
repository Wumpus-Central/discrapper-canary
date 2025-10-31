n.d(t, { Z: () => f });
var i = n(951288),
    r = n(647438),
    l = n(512722),
    o = n.n(l),
    s = n(399606),
    a = n(822183),
    c = n(673125),
    d = n(90753),
    u = n(594174),
    h = n(901602);
function p(e) {
    let { streamerId: t, channelId: n } = e,
        l = r.useRef(null),
        a = (0, s.e7)([u.default], () => u.default.getCurrentUser());
    return (
        o()(null != a, "user cannot be null"),
        (0, d.Z)(l, a, t, n),
        (0, i.jsx)("canvas", {
            className: h.canvas,
            ref: l,
        })
    );
}
function f(e) {
    let { guildId: t, channelId: n, streamerId: r } = e,
        { isSharedCanvasEnabled: l } = a.Z.useExperiment(
            {
                guildId: t,
                location: "f0d1b1_1",
            },
            { autoTrackExposure: !0 },
        ),
        o = (0, s.e7)([c.Z], () => c.Z.visibleOverlayCanvas);
    return l && o
        ? (0, i.jsx)(p, {
              guildId: t,
              channelId: n,
              streamerId: r,
          })
        : null;
}
