n.d(t, { Z: () => s });
var i = n(192379);
function s(e, t) {
    let n = i.useRef(e);
    i.useEffect(() => {
        e.length > n.current.length && t(), (n.current = e);
    }, [e, t]);
}
