n.d(t, { ZP: () => c });
var i = n(657707),
    l = n(509613),
    r = n(869235),
    s = n(388032);
let a = (0, l.k4)(r.t.VOICE_CATEGORY, {
        useTitle: () => s.intl.string(s.t.K3lovL),
        getLayout: () => [],
    }),
    o = (0, l.k4)(r.t.CAMERA_CATEGORY, {
        useTitle: () => s.intl.string(s.t.FlNoSU),
        getLayout: () => [],
    }),
    u = (0, l.x1)(r.t.VOICE_AND_VIDEO_PANE, {
        getLayout: () => [a, o],
    }),
    c = (0, l.wf)(r.t.VOICE_AND_VIDEO_PANEL, {
        icon: i.S6n,
        useTitle: () => s.intl.string(s.t.B1fFpa),
        getLayout: () => [u],
    });
