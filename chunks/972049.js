r.d(t, { dL: () => M, nY: () => b }), r(321073);
var n = r(64700),
    a = r(799193),
    l = r(763424),
    i = r(283014),
    s = r(992520),
    o = r(175678),
    u = r(265337),
    c = r(517576),
    d = r(249214),
    f = r(908665);
let h = [i.A, s.A, o.A, c.A, u.A, f.A, d.A],
    b = "data-accessibility-violation",
    m = "function" == typeof navigator?.scheduling?.isInputPending,
    p = null,
    g = null,
    v = 0,
    A = 0,
    w = null,
    y = { hash: 0, violations: new Map() },
    $ = () => {},
    _ = document.body;
function k() {
    (v = 0), (A = 0), (w = null), (y = { hash: 0, violations: new Map() });
}
function x() {
    g = requestIdleCallback(N);
}
function I() {
    (w = null), (A = 0), v < h.length - 1 ? ((v += 1), x()) : ($(y), k());
}
function N() {
    let e = h[v];
    if (
        (null == w && (w = null != e.selector ? Array.from(_.querySelectorAll(e.selector)) : e.select(_)),
        0 === w.length)
    )
        return I();
    let t = performance.now() + 16,
        r = { includeContinuous: !0 };
    for (; A < w.length && !(navigator.scheduling.isInputPending(r) || performance.now() >= t); ) {
        let t = w[A++],
            r = e.check(t);
        if (r !== l.o) {
            let n = (0, a.h)(t),
                l = S(
                    `${r}_${e.id}_${
                        null == n
                            ? (function (e) {
                                  let t = "",
                                      r = e;
                                  for (; null != r; ) (t += r.className), (r = r.parentElement);
                                  return S(t);
                              })(t)
                            : n.join("\n")
                    }`,
                );
            y.hash = S(`${y.hash}${l}`);
            let i = l.toString(),
                s = `${e.id}_${l}`,
                o = y.violations.get(e.id) ?? { rule: e, instances: new Map() },
                u = o.instances.get(s) ?? [],
                c = { element: t, message: r, trace: n ?? [], hash: i };
            u.push(c), o.instances.set(s, u), y.violations.set(e.id, o);
        }
    }
    if (A < w.length - 1) return x();
    I();
}
let E = (e) => {
    0 !== e.filter((e) => "attributes" !== e.type || e.attributeName !== b).length &&
        (k(),
        null != p && (clearTimeout(p), (p = null)),
        null != g && (clearTimeout(g), (g = null)),
        (p = setTimeout(x, 250)));
};
function M(e, t) {
    let r = (0, n.useRef)(t);
    (0, n.useLayoutEffect)(() => {
        r.current = t;
    }),
        (0, n.useLayoutEffect)(() => {
            if (m && null != e) {
                let t;
                ($ = r.current), (_ = e);
                let n = ((t = new MutationObserver(E)).observe(e, { attributes: !0, childList: !0, subtree: !0 }), t);
                return () => {
                    ($ = () => {}), n.disconnect();
                };
            }
        }, [e]);
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        r = 0xdeadbeef ^ t,
        n = 0x41c6ce57 ^ t;
    for (let t = 0, a; t < e.length; t++)
        (r = Math.imul(r ^ (a = e.charCodeAt(t)), 0x9e3779b1)), (n = Math.imul(n ^ a, 0x5f356495));
    return (
        (r = Math.imul(r ^ (r >>> 16), 0x85ebca6b) ^ Math.imul(n ^ (n >>> 13), 0xc2b2ae35)),
        0x100000000 * (2097151 & (n = Math.imul(n ^ (n >>> 16), 0x85ebca6b) ^ Math.imul(r ^ (r >>> 13), 0xc2b2ae35))) +
            (r >>> 0)
    );
}
