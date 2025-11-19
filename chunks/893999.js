n.d(t, { Z: () => u }), n(388685);
var i = n(473749);
let r = new Map(),
    l = new Map(),
    a = new Map();
function o(e) {
    return r.has(e) || r.set(e, !1), r.get(e);
}
function s(e) {
    return (
        l.has(e) ||
            (l.set(e, new Set()),
            a.set(
                e,
                (function (e) {
                    let t = (t) => {
                            c(t.shiftKey, e);
                        },
                        n = (t) => {
                            c(t.shiftKey, e);
                        },
                        i = (t) => {
                            c(t.shiftKey, e);
                        },
                        r = () => {
                            c(!1, e);
                        };
                    return (
                        e.addEventListener("keydown", t),
                        e.addEventListener("keyup", n),
                        e.addEventListener("mousemove", i),
                        e.addEventListener("blur", r),
                        () => {
                            e.removeEventListener("keydown", t),
                                e.removeEventListener("keyup", n),
                                e.removeEventListener("mousemove", i),
                                e.removeEventListener("blur", r);
                        }
                    );
                })(e),
            )),
        l.get(e)
    );
}
function c(e, t) {
    e !== o(t) && (r.set(t, e), s(t).forEach((t) => t(e)));
}
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
        [t, n] = i.useState(o(e));
    return (
        i.useEffect(() => {
            let t = (e) => {
                n(e);
            };
            return (
                s(e).add(t),
                () => {
                    var n;
                    s(e).delete(t),
                        0 === s(e).size && (null == (n = a.get(e)) || n(), a.delete(e), l.delete(e), r.delete(e));
                }
            );
        }, [e]),
        t
    );
}
