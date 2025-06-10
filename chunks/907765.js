a.d(e, { R: () => i });
var r = a(622916),
    _ = a(688838),
    n = a(151122),
    o = a(255768);
let i = (0, n._I)(() => {
    let t;
    return {
        name: 'Dedupe',
        processEvent(e) {
            if (e.type) return e;
            try {
                var a, _;
                if (
                    ((a = e),
                    (_ = t) &&
                        ((function (t, e) {
                            let a = t.message,
                                r = e.message;
                            return (!!a || !!r) && (!a || !!r) && (!!a || !r) && a === r && !!E(t, e) && !!c(t, e) && !0;
                        })(a, _) ||
                            (function (t, e) {
                                let a = s(e),
                                    r = s(t);
                                return !!a && !!r && a.type === r.type && a.value === r.value && !!E(t, e) && !!c(t, e);
                            })(a, _)))
                )
                    return o.X && r.kg.warn('Event dropped due to being a duplicate of previously captured event.'), null;
            } catch (t) {}
            return (t = e);
        }
    };
});
function c(t, e) {
    let a = (0, _.Fr)(t),
        r = (0, _.Fr)(e);
    if (!a && !r) return !0;
    if ((a && !r) || (!a && r) || r.length !== a.length) return !1;
    for (let t = 0; t < r.length; t++) {
        let e = r[t],
            _ = a[t];
        if (e.filename !== _.filename || e.lineno !== _.lineno || e.colno !== _.colno || e.function !== _.function) return !1;
    }
    return !0;
}
function E(t, e) {
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
function s(t) {
    return t.exception && t.exception.values && t.exception.values[0];
}
