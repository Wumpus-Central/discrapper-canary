"use strict";
n.d(t, { Ay: () => f, dw: () => u, oi: () => c });
var r = n(64700),
    i = n(735438),
    s = n(465863),
    a = n(9318),
    o = n(610223),
    l = n(346640),
    u = (function (e) {
        return (e.UP = "ArrowUp"), (e.DOWN = "ArrowDown"), (e.LEFT = "ArrowLeft"), (e.RIGHT = "ArrowRight"), e;
    })({}),
    c = (function (e) {
        return (e[(e.PENDING = 0)] = "PENDING"), (e[(e.SUCCESS = 1)] = "SUCCESS"), (e[(e.FAILURE = 2)] = "FAILURE"), e;
    })({});
let d = 3,
    _ = 7;
function f(e, t) {
    let [n, c] = (0, r.useState)(d),
        [f, p] = (0, r.useState)([...Array(_)].map(() => ({ key: (0, i.sample)(u) ?? "ArrowLeft", state: 0 }))),
        h = l.zX[t],
        m = (0, o.W)(h.craftingSound),
        E = (0, o.W)(s.A),
        g = (0, o.W)(a.A),
        A = (0, r.useCallback)(() => {
            (0.5 > Math.random() ? E : g)();
        }, [E, g]),
        I = (0, r.useCallback)(
            (t) => {
                let r = t.key;
                if (!Object.values(u).includes(r)) return;
                t.stopPropagation();
                let s = f.findIndex((e) => 1 !== e.state);
                if (f[s].key === r) {
                    m();
                    let t = [...f.map((e) => ({ ...e, state: +(1 === e.state) }))];
                    if (((t[s].state = 1), t.every((e) => 1 === e.state))) {
                        c(n - 1),
                            n - 1 == 0
                                ? (p([]), e())
                                : p([...Array(_)].map(() => ({ key: (0, i.sample)(u) ?? "ArrowLeft", state: 0 })));
                        return;
                    }
                    p(t);
                    return;
                }
                A(), p(f.map((e, t) => ({ ...e, state: 2 * (t === s) })));
            },
            [e, A, m, f, n],
        );
    return (
        (0, r.useEffect)(
            () => (
                document.addEventListener("keydown", I, { capture: !0 }),
                () => {
                    document.removeEventListener("keydown", I, { capture: !0 });
                }
            ),
            [I],
        ),
        (0, r.useEffect)(() => {
            0 === n && document.removeEventListener("keydown", I, { capture: !0 });
        }, [n, I]),
        { sequence: f, totalSequences: d, sequencesCompleted: d - n }
    );
}
