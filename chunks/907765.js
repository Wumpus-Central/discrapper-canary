_.d(e, { R: () => E });
var a = _(622916),
    r = _(688838),
    n = _(151122),
    o = _(255768);
let E = (0, n._I)(() => {
    let t;
    return {
        name: "Dedupe",
        processEvent(e) {
            if (e.type) return e;
            try {
                var _, r;
                if (
                    ((_ = e),
                    (r = t) &&
                        ((function (t, e) {
                            let _ = t.message,
                                a = e.message;
                            return (
                                (!!_ || !!a) && (!_ || !!a) && (!!_ || !a) && _ === a && !!c(t, e) && !!i(t, e) && !0
                            );
                        })(_, r) ||
                            (function (t, e) {
                                let _ = s(e),
                                    a = s(t);
                                return !!_ && !!a && _.type === a.type && _.value === a.value && !!c(t, e) && !!i(t, e);
                            })(_, r)))
                )
                    return (
                        o.X && a.kg.warn("Event dropped due to being a duplicate of previously captured event."), null
                    );
            } catch (t) {}
            return (t = e);
        },
    };
});
function i(t, e) {
    let _ = (0, r.Fr)(t),
        a = (0, r.Fr)(e);
    if (!_ && !a) return !0;
    if ((_ && !a) || (!_ && a) || a.length !== _.length) return !1;
    for (let t = 0; t < a.length; t++) {
        let e = a[t],
            r = _[t];
        if (e.filename !== r.filename || e.lineno !== r.lineno || e.colno !== r.colno || e.function !== r.function)
            return !1;
    }
    return !0;
}
function c(t, e) {
    let _ = t.fingerprint,
        a = e.fingerprint;
    if (!_ && !a) return !0;
    if ((_ && !a) || (!_ && a)) return !1;
    try {
        return _.join("") === a.join("");
    } catch (t) {
        return !1;
    }
}
function s(t) {
    return t.exception && t.exception.values && t.exception.values[0];
}
