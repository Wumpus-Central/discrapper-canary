n.d(t, { R: () => _ });
var r = n(98076),
    i = n(521257),
    a = n(688560),
    o = n(4757);
let _ = (0, a._I)(() => {
    let e;
    return {
        name: "Dedupe",
        processEvent(t) {
            if (t.type) return t;
            try {
                var n, i;
                if (
                    ((n = t),
                    (i = e) &&
                        ((function (e, t) {
                            let n = e.message,
                                r = t.message;
                            return (
                                (!!n || !!r) && (!n || !!r) && (!!n || !r) && n === r && !!c(e, t) && !!s(e, t) && !0
                            );
                        })(n, i) ||
                            (function (e, t) {
                                let n = E(t),
                                    r = E(e);
                                return !!n && !!r && n.type === r.type && n.value === r.value && !!c(e, t) && !!s(e, t);
                            })(n, i)))
                )
                    return (
                        o.X && r.kg.warn("Event dropped due to being a duplicate of previously captured event."), null
                    );
            } catch (e) {}
            return (e = t);
        },
    };
});
function s(e, t) {
    let n = (0, i.Fr)(e),
        r = (0, i.Fr)(t);
    if (!n && !r) return !0;
    if ((n && !r) || (!n && r) || r.length !== n.length) return !1;
    for (let e = 0; e < r.length; e++) {
        let t = r[e],
            i = n[e];
        if (t.filename !== i.filename || t.lineno !== i.lineno || t.colno !== i.colno || t.function !== i.function)
            return !1;
    }
    return !0;
}
function c(e, t) {
    let n = e.fingerprint,
        r = t.fingerprint;
    if (!n && !r) return !0;
    if ((n && !r) || (!n && r)) return !1;
    try {
        return n.join("") === r.join("");
    } catch (e) {
        return !1;
    }
}
function E(e) {
    return e.exception && e.exception.values && e.exception.values[0];
}
