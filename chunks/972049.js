n.d(t, {
    dL: () => T,
    nY: () => g,
}),
    n(896048),
    n(321073);
var r,
    a,
    l = n(64700),
    o = n(21574),
    i = n(763424),
    u = n(283014),
    c = n(992520),
    s = n(175678),
    d = n(265337),
    f = n(517576),
    h = n(249214),
    b = n(908665);
let m = [u.A, c.A, s.A, f.A, d.A, b.A, h.A],
    g = "data-accessibility-violation",
    p = "function" == typeof (null == (a = navigator) || null == (r = a.scheduling) ? void 0 : r.isInputPending),
    v = null,
    A = null,
    w = 0,
    y = 0,
    x = null,
    k = {
        hash: 0,
        violations: new Map(),
    },
    I = () => {},
    N = document.body;
function E() {
    (w = 0),
        (y = 0),
        (x = null),
        (k = {
            hash: 0,
            violations: new Map(),
        });
}
function M() {
    A = requestIdleCallback(L);
}
function _() {
    (x = null), (y = 0), w < m.length - 1 ? ((w += 1), M()) : (I(k), E());
}
function L() {
    let e = m[w];
    if (
        (null == x && (x = null != e.selector ? Array.from(N.querySelectorAll(e.selector)) : e.select(N)),
        0 === x.length)
    )
        return _();
    let t = performance.now() + 16,
        n = { includeContinuous: !0 };
    for (; y < x.length && !(navigator.scheduling.isInputPending(n) || performance.now() >= t); ) {
        let t = x[y++],
            n = e.check(t);
        if (n !== i.o) {
            var r, a;
            let l = (0, o.h)(t),
                i = C(
                    ""
                        .concat(n, "_")
                        .concat(e.id, "_")
                        .concat(
                            null == l
                                ? (function (e) {
                                      let t = "",
                                          n = e;
                                      for (; null != n; ) (t += n.className), (n = n.parentElement);
                                      return C(t);
                                  })(t)
                                : l.join("\n"),
                        ),
                );
            k.hash = C("".concat(k.hash).concat(i));
            let u = i.toString(),
                c = "".concat(e.id, "_").concat(i),
                s =
                    null != (r = k.violations.get(e.id))
                        ? r
                        : {
                              rule: e,
                              instances: new Map(),
                          },
                d = null != (a = s.instances.get(c)) ? a : [],
                f = {
                    element: t,
                    message: n,
                    trace: null != l ? l : [],
                    hash: u,
                };
            d.push(f), s.instances.set(c, d), k.violations.set(e.id, s);
        }
    }
    if (y < x.length - 1) return M();
    _();
}
let S = (e) => {
    0 !== e.filter((e) => "attributes" !== e.type || e.attributeName !== g).length &&
        (E(),
        null != v && (clearTimeout(v), (v = null)),
        null != A && (clearTimeout(A), (A = null)),
        (v = setTimeout(M, 250)));
};
function T(e, t) {
    let n = (0, l.useRef)(t);
    (0, l.useLayoutEffect)(() => {
        n.current = t;
    }),
        (0, l.useLayoutEffect)(() => {
            if (p && null != e) {
                let t;
                (I = n.current), (N = e);
                let r =
                    ((t = new MutationObserver(S)).observe(e, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                    }),
                    t);
                return () => {
                    (I = () => {}), r.disconnect();
                };
            }
        }, [e]);
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = 3735928559 ^ t,
        r = 1103547991 ^ t;
    for (let t = 0, a; t < e.length; t++)
        (n = Math.imul(n ^ (a = e.charCodeAt(t)), 2654435761)), (r = Math.imul(r ^ a, 1597334677));
    return (
        (n = Math.imul(n ^ (n >>> 16), 2246822507) ^ Math.imul(r ^ (r >>> 13), 3266489909)),
        4294967296 * (2097151 & (r = Math.imul(r ^ (r >>> 16), 2246822507) ^ Math.imul(n ^ (n >>> 13), 3266489909))) +
            (n >>> 0)
    );
}
