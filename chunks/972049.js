r.d(t, { dL: () => _, nY: () => b }), r(321073);
var n = r(64700),
    a = r(799193),
    l = r(763424),
    i = r(283014),
    o = r(992520),
    u = r(175678),
    s = r(265337),
    c = r(517576),
    d = r(249214),
    f = r(908665);
let h = [i.A, o.A, u.A, c.A, s.A, f.A, d.A],
    b = "data-accessibility-violation",
    m = "function" == typeof navigator?.scheduling?.isInputPending,
    g = null,
    p = null,
    v = 0,
    A = 0,
    w = null,
    y = { hash: 0, violations: new Map() },
    $ = () => {},
    x = document.body;
function k() {
    (v = 0), (A = 0), (w = null), (y = { hash: 0, violations: new Map() });
}
function I() {
    p = requestIdleCallback(E);
}
function N() {
    (w = null), (A = 0), v < h.length - 1 ? ((v += 1), I()) : ($(y), k());
}
function E() {
    let e = h[v];
    if (
        (null == w && (w = null != e.selector ? Array.from(x.querySelectorAll(e.selector)) : e.select(x)),
        0 === w.length)
    )
        return N();
    let t = performance.now() + 16,
        r = { includeContinuous: !0 };
    for (; A < w.length && !(navigator.scheduling.isInputPending(r) || performance.now() >= t); ) {
        let t = w[A++],
            r = e.check(t);
        if (r !== l.o) {
            let n = (0, a.h)(t),
                l = L(
                    `${r}_${e.id}_${
                        null == n
                            ? (function (e) {
                                  let t = "",
                                      r = e;
                                  for (; null != r; ) (t += r.className), (r = r.parentElement);
                                  return L(t);
                              })(t)
                            : n.join("\n")
                    }`,
                );
            y.hash = L(`${y.hash}${l}`);
            let i = l.toString(),
                o = `${e.id}_${l}`,
                u = y.violations.get(e.id) ?? { rule: e, instances: new Map() },
                s = u.instances.get(o) ?? [],
                c = { element: t, message: r, trace: n ?? [], hash: i };
            s.push(c), u.instances.set(o, s), y.violations.set(e.id, u);
        }
    }
    if (A < w.length - 1) return I();
    N();
}
let M = (e) => {
    0 !== e.filter((e) => "attributes" !== e.type || e.attributeName !== b).length &&
        (k(),
        null != g && (clearTimeout(g), (g = null)),
        null != p && (clearTimeout(p), (p = null)),
        (g = setTimeout(I, 250)));
};
function _(e, t) {
    let r = (0, n.useRef)(t);
    (0, n.useLayoutEffect)(() => {
        r.current = t;
    }),
        (0, n.useLayoutEffect)(() => {
            if (m && null != e) {
                let t;
                ($ = r.current), (x = e);
                let n = ((t = new MutationObserver(M)).observe(e, { attributes: !0, childList: !0, subtree: !0 }), t);
                return () => {
                    ($ = () => {}), n.disconnect();
                };
            }
        }, [e]);
}
function L(e) {
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
