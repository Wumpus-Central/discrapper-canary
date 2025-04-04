a.d(e, { R: () => i });
var r = a(622916),
    n = a(688838),
    _ = a(151122),
    o = a(255768);
let i = (0, _._I)(() => {
    let t;
    return {
        name: 'Dedupe',
        processEvent(e) {
            if (e.type) return e;
            try {
                var a, n;
                if (
                    ((a = e),
                    (n = t) &&
                        ((function (t, e) {
                            let a = t.message,
                                r = e.message;
                            return (!!a || !!r) && (!a || !!r) && (!!a || !r) && a === r && !!s(t, e) && !!c(t, e) && !0;
                        })(a, n) ||
                            (function (t, e) {
                                let a = E(e),
                                    r = E(t);
                                return !!a && !!r && a.type === r.type && a.value === r.value && !!s(t, e) && !!c(t, e);
                            })(a, n)))
                )
                    return o.X && r.kg.warn('Event dropped due to being a duplicate of previously captured event.'), null;
            } catch (t) {}
            return (t = e);
        }
    };
});
function c(t, e) {
    let a = (0, n.Fr)(t),
        r = (0, n.Fr)(e);
    if (!a && !r) return !0;
    if ((a && !r) || (!a && r) || r.length !== a.length) return !1;
    for (let t = 0; t < r.length; t++) {
        let e = r[t],
            n = a[t];
        if (e.filename !== n.filename || e.lineno !== n.lineno || e.colno !== n.colno || e.function !== n.function) return !1;
    }
    return !0;
}
function s(t, e) {
    let a = t.fingerprint,
        r = e.fingerprint;
    if (!a && !r) return !0;
    if ((a && !r) || (!a && r)) return !1;
    try {
        return a.join('') === r.join('');
    } catch (t) {
        return !1;
    }
}
function E(t) {
    return t.exception && t.exception.values && t.exception.values[0];
}
