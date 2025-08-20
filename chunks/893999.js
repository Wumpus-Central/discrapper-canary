n.d(t, { Z: () => p }), n(388685);
var r = n(647438);
let i = new Map(),
    a = new Map(),
    o = new Map();
function s(e) {
    return i.has(e) || i.set(e, !1), i.get(e);
}
function l(e) {
    return !a.has(e);
}
function c(e) {
    return l(e) && (a.set(e, new Set()), o.set(e, u(e))), a.get(e);
}
function u(e) {
    let t = (t) => {
            _(t.shiftKey, e);
        },
        n = (t) => {
            _(t.shiftKey, e);
        },
        r = (t) => {
            _(t.shiftKey, e);
        },
        i = () => {
            _(!1, e);
        };
    return (
        e.addEventListener("keydown", t),
        e.addEventListener("keyup", n),
        e.addEventListener("mousemove", r),
        e.addEventListener("blur", i),
        () => {
            e.removeEventListener("keydown", t),
                e.removeEventListener("keyup", n),
                e.removeEventListener("mousemove", r),
                e.removeEventListener("blur", i);
        }
    );
}
function d(e, t) {
    c(e).add(t);
}
function f(e, t) {
    if ((c(e).delete(t), 0 === c(e).size)) {
        var n;
        null == (n = o.get(e)) || n(), o.delete(e), a.delete(e), i.delete(e);
    }
}
function _(e, t) {
    e !== s(t) && (i.set(t, e), c(t).forEach((t) => t(e)));
}
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
        [t, n] = r.useState(s(e));
    return (
        r.useEffect(() => {
            let t = (e) => {
                n(e);
            };
            return (
                d(e, t),
                () => {
                    f(e, t);
                }
            );
        }, [e]),
        t
    );
}
