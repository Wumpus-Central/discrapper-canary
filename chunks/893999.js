(n.d(t, { Z: () => u }), n(388685));
var r = n(73800);
let i = new Map(),
    l = new Map(),
    a = new Map();
function o(e) {
    return (i.has(e) || i.set(e, !1), i.get(e));
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
                        r = (t) => {
                            c(t.shiftKey, e);
                        },
                        i = () => {
                            c(!1, e);
                        };
                    return (
                        e.addEventListener('keydown', t),
                        e.addEventListener('keyup', n),
                        e.addEventListener('mousemove', r),
                        e.addEventListener('blur', i),
                        () => {
                            (e.removeEventListener('keydown', t), e.removeEventListener('keyup', n), e.removeEventListener('mousemove', r), e.removeEventListener('blur', i));
                        }
                    );
                })(e)
            )),
        l.get(e)
    );
}
function c(e, t) {
    e !== o(t) && (i.set(t, e), s(t).forEach((t) => t(e)));
}
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
        [t, n] = r.useState(o(e));
    return (
        r.useEffect(() => {
            let t = (e) => {
                n(e);
            };
            return (
                s(e).add(t),
                () => {
                    var n;
                    (s(e).delete(t), 0 === s(e).size && (null == (n = a.get(e)) || n(), a.delete(e), l.delete(e), i.delete(e)));
                }
            );
        }, [e]),
        t
    );
}
