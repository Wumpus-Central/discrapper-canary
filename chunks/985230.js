n.d(t, { ZP: () => u });
var i = n(657707),
    l = n(509613),
    o = n(388032);
let r = (0, l.k4)("Voice", {
        useTitle: () => o.intl.string(o.t.K3lovL),
        getLayout: () => [],
    }),
    s = (0, l.k4)("Camera", {
        useTitle: () => o.intl.string(o.t.FlNoSU),
        getLayout: () => [],
    }),
    a = (0, l.x1)("VoiceAndVideoPane", {
        useTitle: () => o.intl.string(o.t.B1fFpa),
        getLayout: () => [r, s],
    }),
    u = (0, l.wf)("VoiceAndVideo", {
        icon: i.S6n,
        useTitle: () => o.intl.string(o.t.B1fFpa),
        getLayout: () => [a],
    });
