n.d(t, { Q: () => a });
var l = n(582128);
function a(e) {
    let [t, n] = l.useState(e),
        [a, i] = l.useState("idle"),
        [r, s] = l.useState(e);
    return (
        r !== e && (s(e), i(e === t ? "idle" : "exit")),
        l.useEffect(() => {
            if ("exit" !== a) return;
            let e = setTimeout(() => {
                (n(r), i("enter"));
            }, 150);
            return () => clearTimeout(e);
        }, [a, r]),
        l.useEffect(() => {
            if ("enter" !== a) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => i("idle"));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [a]),
        { text: t, phase: a }
    );
}
