"use strict";
let n;
r.d(t, { X1: () => f, Tw: () => d, Bi: () => c });
var a = r(3388),
    s = r(959462),
    i = r(64700),
    o = r(341221);
let l = !!("u" > typeof window && window.document && window.document.createElement),
    u = new Map();
function c(e) {
    let [t, r] = (0, i.useState)(e),
        s = (0, i.useRef)(null),
        c = (0, o.Cc)(t),
        d = (0, i.useRef)(null);
    if ((n && n.register(d, c), l)) {
        let e = u.get(c);
        e && !e.includes(s) ? e.push(s) : u.set(c, [s]);
    }
    return (
        (0, a.N)(
            () => () => {
                n && n.unregister(d), u.delete(c);
            },
            [c],
        ),
        (0, i.useEffect)(() => {
            let e = s.current;
            return (
                e && r(e),
                () => {
                    e && (s.current = null);
                }
            );
        }),
        c
    );
}
function d(e, t) {
    if (e === t) return e;
    let r = u.get(e);
    if (r) return r.forEach((e) => (e.current = t)), t;
    let n = u.get(t);
    return n ? (n.forEach((t) => (t.current = e)), e) : t;
}
function f(e = []) {
    let t = c(),
        [r, n] = (function (e) {
            let [t, r] = (0, i.useState)(e),
                n = (0, i.useRef)(null),
                o = (0, s.J)(() => {
                    if (!n.current) return;
                    let e = n.current.next();
                    if (e.done) {
                        n.current = null;
                        return;
                    }
                    t === e.value ? o() : r(e.value);
                });
            (0, a.N)(() => {
                n.current && o();
            });
            let l = (0, s.J)((e) => {
                (n.current = e(t)), o();
            });
            return [t, l];
        })(t),
        o = (0, i.useCallback)(() => {
            n(function* () {
                yield t, yield document.getElementById(t) ? t : void 0;
            });
        }, [t, n]);
    return (0, a.N)(o, [t, o, ...e]), r;
}
"u" > typeof FinalizationRegistry &&
    (n = new FinalizationRegistry((e) => {
        u.delete(e);
    }));
