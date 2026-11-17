i.d(t, { x: () => w });
var n = i(477900),
    l = i(582128);
let r =
    "https://cdn.discordapp.com/assets/content/f9902a37a9e65cbeee19648efc6501868d5394d331eb8e8fff9405e9b42adbad.riv";
var a = i(729901),
    s = i(611361),
    o = i(799226),
    c = i(752540);
let d = { Web: { fill: "color" }, Mobile: { fill: "color" } },
    h = { Web: ["Instance"], Mobile: ["Instance"] },
    g = { Web: ["State Machine 1"], Mobile: ["State Machine 1"] },
    f = {
        Web: function (e) {
            let { dataBinding: t, onDataBindingChange: i } = e,
                { instance: n, playIfNeeded: l } = (0, s.o)();
            return ((0, c.QJ)("fill", n, t?.fill, i?.fill, l), null);
        },
        Mobile: function (e) {
            let { dataBinding: t, onDataBindingChange: i } = e,
                { instance: n, playIfNeeded: l } = (0, s.o)();
            return ((0, c.QJ)("fill", n, t?.fill, i?.fill, l), null);
        },
    };
function w(e) {
    let { artboard: t = "Web", stateMachine: i, dataBinding: s, onDataBindingChange: c, ...w } = e,
        { status: p, buffer: u } = (0, o.CE)(r),
        x = (0, o.m2)(r),
        v = l.useCallback(() => {
            let e = f[t];
            return null == e ? null : (0, n.jsx)(e, { dataBinding: s, onDataBindingChange: c });
        }, [t, s, c]);
    return p === o.BW.Loading
        ? null
        : (0, n.jsx)(a.w, {
              ...(x ? { key: "override" } : {}),
              buffer: u,
              artboard: t,
              stateMachine: i,
              artboardProperties: d,
              artboardViewModelInstances: h,
              artboardStateMachines: g,
              renderDataBinding: v,
              ...w,
          });
}
w.riveSrc = r;
