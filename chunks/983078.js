n.d(t, { B: () => s }), n(321073);
var a = n(360619);
function s() {
    let e = (0, a.PH)(),
        t = new Map();
    return (
        t.set("root", []),
        Object.entries(e).forEach((e) => {
            let [n, a] = e;
            if (null != a.predicate && !a.predicate()) return;
            let s = a.parent ?? "root";
            t.set(n, []), t.has(s) || t.set(s, []), t.get(s).push(n);
        }),
        { legacySettingDirectory: t }
    );
}
