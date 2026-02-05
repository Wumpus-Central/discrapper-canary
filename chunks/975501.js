n.d(t, { A: () => u });
var i = n(64700),
    l = n(735438),
    a = n.n(l),
    s = n(835245),
    r = n(451988),
    o = n(318937),
    c = n(134753);
n(824217);
let d = a().debounce(o.W9, 500, { maxWait: 500 });
function u(e, t, n) {
    let l = i.useRef((0, s.A)()),
        a = i.useRef(new r.IX()),
        u = i.useCallback(
            (i) => {
                (i.lastUpdatedAt = Date.now()), (0, o.Rl)(i, e, n), (0, o.W9)(t, n, i);
            },
            [t, n, e],
        ),
        h = i.useCallback(
            (i, r, d) => {
                l.current = (0, s.A)();
                let h = { ...i, id: l.current, x: r, y: d, userId: e, state: c.B.START, lastUpdatedAt: Date.now() };
                (0, o.W9)(t, n, h), (0, o.Rl)(h, e, n), a.current.start(5e3, () => u(h));
            },
            [e, t, n, u],
        ),
        m = i.useCallback(
            (i, s, r) => {
                let h = { ...i, id: l.current, x: s, y: r, userId: e, state: c.B.START, lastUpdatedAt: Date.now() };
                d(t, n, h), (0, o.Rl)(h, e, n), a.current.start(5e3, () => u(h));
            },
            [e, t, n, u],
        ),
        A = i.useCallback(
            (i, s, r) => {
                d.cancel(),
                    (0, o.MH)(t, n, l.current),
                    (0, o.Rl)(
                        { ...i, id: l.current, x: s, y: r, userId: e, state: c.B.STOP, lastUpdatedAt: Date.now() },
                        e,
                        n,
                    ),
                    a.current.stop();
            },
            [t, n, e],
        ),
        p = i.useCallback((e, t, n) => m(e, t, n), [m]);
    return i.useMemo(
        () => ({ handleMouseDown: h, handleMouseMove: m, handleMouseUp: A, handleMouseEnter: p }),
        [h, p, m, A],
    );
}
