n.d(a, { C: () => h });
var r = n(477900),
    t = n(582128);
let i =
    "https://cdn.discordapp.com/assets/content/38e9b5b82f80eb8908b757cf6987d77f6d7a67290610458d2119151a1052bd5b.riv";
var d = n(729901),
    o = n(611361),
    l = n(799226),
    s = n(752540);
let c = { "Nitro 3P Rewards Anim Illo": { reducedMotion: "boolean" } },
    u = { "Nitro 3P Rewards Anim Illo": ["Instance"] },
    b = { "Nitro 3P Rewards Anim Illo": ["State Machine 1"] },
    p = {
        "Nitro 3P Rewards Anim Illo": function (e) {
            let { dataBinding: a } = e,
                { instance: n, reducedMotionEnabled: r, playIfNeeded: t } = (0, o.o)();
            return ((0, s.Dr)("reducedMotion", n, a?.reducedMotion ?? r, void 0, t), null);
        },
    };
function h(e) {
    let {
            artboard: a = "Nitro 3P Rewards Anim Illo",
            stateMachine: n,
            dataBinding: o,
            onDataBindingChange: s,
            ...h
        } = e,
        { status: w, buffer: f } = (0, l.CE)(i),
        m = (0, l.m2)(i),
        I = t.useCallback(() => {
            let e = p[a];
            return null == e ? null : (0, r.jsx)(e, { dataBinding: o, onDataBindingChange: s });
        }, [a, o, s]);
    return w === l.BW.Loading
        ? null
        : (0, r.jsx)(d.w, {
              ...(m ? { key: "override" } : {}),
              buffer: f,
              artboard: a,
              stateMachine: n,
              artboardProperties: c,
              artboardViewModelInstances: u,
              artboardStateMachines: b,
              renderDataBinding: I,
              ...h,
          });
}
h.riveSrc = i;
