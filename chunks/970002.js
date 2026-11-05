var i = n(477900),
    r = n(582128),
    a = n(671325),
    s = n(729901),
    l = n(611361),
    o = n(799226),
    d = n(270597);
let c = {
        Base: { EntryTrigger: "trigger", ExitTrigger: "trigger", PosX: "number", PosY: "number" },
        "Nitro Illustration \u2014 Star": {},
        "Nitro Illustration \u2014 Key": {},
        "Nitro Illustration \u2014 Battery": {},
        "Nitro Illustration \u2014 Box": {},
        Wumpus: {},
        "Nitro Illustration \u2014 Power Jar": {},
        "Nitro Illustration \u2014 Lightning": {},
        "Nitro Illustration \u2014 Spaceship": {},
    },
    u = {
        Base: ["Instance"],
        "Nitro Illustration \u2014 Star": [],
        "Nitro Illustration \u2014 Key": [],
        "Nitro Illustration \u2014 Battery": [],
        "Nitro Illustration \u2014 Box": [],
        Wumpus: [],
        "Nitro Illustration \u2014 Power Jar": [],
        "Nitro Illustration \u2014 Lightning": [],
        "Nitro Illustration \u2014 Spaceship": [],
    },
    _ = {
        Base: ["State Machine 1"],
        "Nitro Illustration \u2014 Star": ["State Machine 1"],
        "Nitro Illustration \u2014 Key": ["State Machine 1"],
        "Nitro Illustration \u2014 Battery": ["State Machine 1"],
        "Nitro Illustration \u2014 Box": ["State Machine 1"],
        Wumpus: ["State Machine 1"],
        "Nitro Illustration \u2014 Power Jar": ["State Machine 1"],
        "Nitro Illustration \u2014 Lightning": ["State Machine 1"],
        "Nitro Illustration \u2014 Spaceship": ["State Machine 1"],
    },
    E = {
        Base: function (e) {
            let { dataBinding: t, onDataBindingChange: n } = e,
                { instance: i, playIfNeeded: r } = (0, l.o)();
            return (
                (0, d.zJ)("EntryTrigger", i, t?.EntryTrigger, n?.EntryTrigger, r),
                (0, d.zJ)("ExitTrigger", i, t?.ExitTrigger, n?.ExitTrigger, r),
                (0, d.Of)("PosX", i, t?.PosX, n?.PosX, r),
                (0, d.Of)("PosY", i, t?.PosY, n?.PosY, r),
                null
            );
        },
    };
function A(e) {
    let { artboard: t = "Base", stateMachine: n, dataBinding: l, onDataBindingChange: d, ...A } = e,
        { status: f, buffer: h } = (0, o.CE)(a.A),
        I = (0, o.m2)(a.A),
        p = r.useCallback(() => {
            let e = E[t];
            return null == e ? null : (0, i.jsx)(e, { dataBinding: l, onDataBindingChange: d });
        }, [t, l, d]);
    return f === o.BW.Loading
        ? null
        : (0, i.jsx)(s.w, {
              ...(I ? { key: "override" } : {}),
              buffer: h,
              artboard: t,
              stateMachine: n,
              artboardProperties: c,
              artboardViewModelInstances: u,
              artboardStateMachines: _,
              renderDataBinding: p,
              ...A,
          });
}
((A.riveSrc = a.A), n.d(t, {}, { e: A }));
