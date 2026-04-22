n.d(t, { A: () => l });
var i = n(64700);
function l(e) {
    let [t, n] = i.useState(e),
        l = i.useRef(null);
    return (
        i.useEffect(() => {
            n(l.current?.offsetHeight ?? e);
        }, [e, l.current?.offsetHeight]),
        { headerHeight: t, headerRef: l }
    );
}
