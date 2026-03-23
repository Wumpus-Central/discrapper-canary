n.d(t, { B: () => i }), n(321073);
var a = n(360619);
function i() {
    let e = (0, a.P)(),
        t = new Map();
    return (
        t.set("root", []),
        Object.entries(e).forEach((e) => {
            let [n, a] = e;
            if (null != a.predicate && !a.predicate()) return;
            let i = a.parent ?? "root";
            t.set(n, []), t.has(i) || t.set(i, []), t.get(i).push(n);
        }),
        { legacySettingDirectory: t }
    );
}
