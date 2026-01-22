n.d(t, { A: () => l });
var r = n(64700);
let l = () => {
    let e = r.useRef(!0);
    return (
        r.useEffect(
            () => () => {
                e.current = !1;
            },
            [],
        ),
        r.useCallback(() => e.current, [])
    );
};
