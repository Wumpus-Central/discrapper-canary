n.d(t, { A: () => l });
var i = n(64700);
let l = () => {
    let e = i.useRef(!0);
    return (
        i.useEffect(
            () => () => {
                e.current = !1;
            },
            [],
        ),
        i.useCallback(() => e.current, [])
    );
};
