n.d(a, { m: () => p });
var t = n(477900),
    i = n(582128);
let r =
    "https://cdn.discordapp.com/assets/content/b02469d463aaa6b145fab2e70084146735951008acc87c49261038a2e5864994.riv";
var c = n(729901),
    d = n(611361),
    o = n(799226),
    l = n(270597);
let s = { "Icon Dice": { fill: "color", muted: "boolean" } },
    u = { "Icon Dice": [""] },
    b = { "Icon Dice": ["State Machine 1"] },
    h = {
        "Icon Dice": function (e) {
            let { dataBinding: a, onDataBindingChange: n } = e,
                { instance: t, playIfNeeded: i } = (0, d.o)();
            return ((0, l.QJ)("fill", t, a?.fill, n?.fill, i), (0, l.Dr)("muted", t, a?.muted, n?.muted, i), null);
        },
    };
function p(e) {
    let { artboard: a = "Icon Dice", stateMachine: n, dataBinding: d, onDataBindingChange: l, ...p } = e,
        { status: f, buffer: D } = (0, o.CE)(r),
        g = (0, o.m2)(r),
        m = i.useCallback(() => {
            let e = h[a];
            return null == e ? null : (0, t.jsx)(e, { dataBinding: d, onDataBindingChange: l });
        }, [a, d, l]);
    return f === o.BW.Loading
        ? null
        : (0, t.jsx)(c.w, {
              ...(g ? { key: "override" } : {}),
              buffer: D,
              artboard: a,
              stateMachine: n,
              artboardProperties: s,
              artboardViewModelInstances: u,
              artboardStateMachines: b,
              renderDataBinding: m,
              ...p,
          });
}
p.riveSrc = r;
