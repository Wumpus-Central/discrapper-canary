n.d(t, { Q: () => a });
var l = n(582128);
function a(e) {
    let [t, n] = l.useState(e),
        [a, s] = l.useState("idle"),
        [i, r] = l.useState(e);
    return (
        i !== e && (r(e), s(e === t ? "idle" : "exit")),
        l.useEffect(() => {
            if ("exit" !== a) return;
            let e = setTimeout(() => {
                (n(i), s("enter"));
            }, 150);
            return () => clearTimeout(e);
        }, [a, i]),
        l.useEffect(() => {
            if ("enter" !== a) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => s("idle"));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [a]),
        { text: t, phase: a }
    );
}
