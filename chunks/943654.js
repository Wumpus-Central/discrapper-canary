a.d(n, { x: () => h });
var i = a(477900),
    t = a(582128);
let l =
    "https://cdn.discordapp.com/assets/content/f9902a37a9e65cbeee19648efc6501868d5394d331eb8e8fff9405e9b42adbad.riv";
var r = a(729901),
    d = a(611361),
    o = a(799226),
    c = a(270597);
let s = { Web: { fill: "color" }, Mobile: { fill: "color" } },
    b = { Web: ["Instance"], Mobile: ["Instance"] },
    f = { Web: ["State Machine 1"], Mobile: ["State Machine 1"] },
    u = {
        Web: function (e) {
            let { dataBinding: n, onDataBindingChange: a } = e,
                { instance: i, playIfNeeded: t } = (0, d.o)();
            return ((0, c.QJ)("fill", i, n?.fill, a?.fill, t), null);
        },
        Mobile: function (e) {
            let { dataBinding: n, onDataBindingChange: a } = e,
                { instance: i, playIfNeeded: t } = (0, d.o)();
            return ((0, c.QJ)("fill", i, n?.fill, a?.fill, t), null);
        },
    };
function h(e) {
    let { artboard: n = "Web", stateMachine: a, dataBinding: d, onDataBindingChange: c, ...h } = e,
        { status: g, buffer: p } = (0, o.CE)(l),
        M = (0, o.m2)(l),
        B = t.useCallback(() => {
            let e = u[n];
            return null == e ? null : (0, i.jsx)(e, { dataBinding: d, onDataBindingChange: c });
        }, [n, d, c]);
    return g === o.BW.Loading
        ? null
        : (0, i.jsx)(r.w, {
              ...(M ? { key: "override" } : {}),
              buffer: p,
              artboard: n,
              stateMachine: a,
              artboardProperties: s,
              artboardViewModelInstances: b,
              artboardStateMachines: f,
              renderDataBinding: B,
              ...h,
          });
}
h.riveSrc = l;
