n.d(t, { ZP: () => u });
var i = n(657707),
    l = n(509613),
    s = n(388032);
let o = (0, l.k4)("Voice", {
        useTitle: () => s.intl.string(s.t.K3lovL),
        getLayout: () => [],
    }),
    r = (0, l.k4)("Camera", {
        useTitle: () => s.intl.string(s.t.FlNoSU),
        getLayout: () => [],
    }),
    a = (0, l.x1)("VoiceAndVideoPane", {
        useTitle: () => s.intl.string(s.t.B1fFpa),
        getLayout: () => [o, r],
    }),
    u = (0, l.wf)("VoiceAndVideo", {
        icon: i.S6n,
        useTitle: () => s.intl.string(s.t.B1fFpa),
        getLayout: () => [a],
    });
