t.d(e, { V: () => i });
var a = t(183580),
    r = t(839006);
function i(n, e, t) {
    let i = { locale: "" };
    for (let t of e) {
        let e = t.replace(r.KB, ""),
            s = (0, a.q)(n, e);
        if (s) return (i.locale = s), t !== e && (i.extension = t.slice(e.length, t.length)), i;
    }
    return (i.locale = t()), i;
}
