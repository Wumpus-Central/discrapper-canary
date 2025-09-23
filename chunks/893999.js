t.d(n, { Z: () => d }), t(388685);
var r = t(647438);
let i = new Map(),
    l = new Map(),
    a = new Map();
function o(e) {
    return i.has(e) || i.set(e, !1), i.get(e);
}
function s(e) {
    return (
        l.has(e) ||
            (l.set(e, new Set()),
            a.set(
                e,
                (function (e) {
                    let n = (n) => {
                            c(n.shiftKey, e);
                        },
                        t = (n) => {
                            c(n.shiftKey, e);
                        },
                        r = (n) => {
                            c(n.shiftKey, e);
                        },
                        i = () => {
                            c(!1, e);
                        };
                    return (
                        e.addEventListener("keydown", n),
                        e.addEventListener("keyup", t),
                        e.addEventListener("mousemove", r),
                        e.addEventListener("blur", i),
                        () => {
                            e.removeEventListener("keydown", n),
                                e.removeEventListener("keyup", t),
                                e.removeEventListener("mousemove", r),
                                e.removeEventListener("blur", i);
                        }
                    );
                })(e),
            )),
        l.get(e)
    );
}
function c(e, n) {
    e !== o(n) && (i.set(n, e), s(n).forEach((n) => n(e)));
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
        [n, t] = r.useState(o(e));
    return (
        r.useEffect(() => {
            let n = (e) => {
                t(e);
            };
            return (
                s(e).add(n),
                () => {
                    var t;
                    s(e).delete(n),
                        0 === s(e).size && (null == (t = a.get(e)) || t(), a.delete(e), l.delete(e), i.delete(e));
                }
            );
        }, [e]),
        n
    );
}
