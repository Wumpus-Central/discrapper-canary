n.d(t, {
    Ay: () => i,
    l0: () => o,
    u5: () => a,
});
var r = n(64700);

function i(e) {
    let t = r.useRef(e);
    r.useEffect(() => t.current(), []);
}

function a(e) {
    let t = r.useRef(e);
    r.useLayoutEffect(() => t.current(), []);
}

function o(e) {
    let t = r.useRef(e);
    r.useEffect(() => {
        t.current = e;
    }),
        r.useEffect(
            () => () => {
                t.current();
            },
            [],
        );
}
