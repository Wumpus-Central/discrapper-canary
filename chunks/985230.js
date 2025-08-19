n.d(t, { ZP: () => u });
var i = n(657707),
    l = n(509613),
    r = n(388032);
let o = (0, l.k4)("Voice", {
        useTitle: () => r.intl.string(r.t.K3lovL),
        getLayout: () => [],
    }),
    s = (0, l.k4)("Camera", {
        useTitle: () => r.intl.string(r.t.FlNoSU),
        getLayout: () => [],
    }),
    a = (0, l.x1)("VoiceAndVideoPane", {
        useTitle: () => r.intl.string(r.t.B1fFpa),
        getLayout: () => [o, s],
    }),
    u = (0, l.wf)("VoiceAndVideo", {
        icon: i.S6n,
        useTitle: () => r.intl.string(r.t.B1fFpa),
        getLayout: () => [a],
    });
