n.d(t, {
    w: () => i,
});
var r = n(64700);

function i(e, t) {
    let n = (0, r.useRef)(!0),
        i = (0, r.useRef)(null);
    (0, r.useEffect)(
        () => (
            (n.current = !0),
            () => {
                n.current = !1;
            }
        ),
        [],
    ),
        (0, r.useEffect)(() => {
            let r = i.current;
            n.current ? (n.current = !1) : (!r || t.some((e, t) => !Object.is(e, r[t]))) && e(), (i.current = t);
        }, t);
}
