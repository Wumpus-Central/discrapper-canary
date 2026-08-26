n.d(t, { Q: () => a });
var l = n(582128);
function a(e) {
    let [t, n] = l.useState(e),
        [a, i] = l.useState("idle"),
        [s, r] = l.useState(e);
    return (
        s !== e && (r(e), i(e === t ? "idle" : "exit")),
        l.useEffect(() => {
            if ("exit" !== a) return;
            let e = setTimeout(() => {
                n(s), i("enter");
            }, 150);
            return () => clearTimeout(e);
        }, [a, s]),
        l.useEffect(() => {
            if ("enter" !== a) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => i("idle"));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [a]),
        { text: t, phase: a }
    );
}
