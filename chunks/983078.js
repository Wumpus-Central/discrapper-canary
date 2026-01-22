n.d(t, { B: () => l }), n(896048), n(321073);
var a = n(360619);
function l() {
    let e = (0, a.PH)(),
        t = new Map();
    return (
        t.set("root", []),
        Object.entries(e).forEach((e) => {
            var n;
            let [a, l] = e;
            if (null != l.predicate && !l.predicate()) return;
            let i = null != (n = l.parent) ? n : "root";
            t.set(a, []), t.has(i) || t.set(i, []), t.get(i).push(a);
        }),
        { legacySettingDirectory: t }
    );
}
