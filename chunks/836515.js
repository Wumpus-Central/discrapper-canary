n.d(t, {
    H: () => f,
    L: () => d,
});
var r = n(436242),
    i = n(506364),
    a = n(840810),
    o = n(647438),
    s = n(128643),
    l = n(764075),
    c = n(712847),
    u = n(578206);
let d = new WeakMap();
function f(e, t, n) {
    let { direction: f } = (0, u.j)(),
        _ =
            e.keyboardDelegate ||
            new (0, a.d)({
                collection: t.collection,
                ref: n,
                orientation: "horizontal",
                direction: f,
                disabledKeys: t.disabledKeys,
                disabledBehavior: t.selectionManager.disabledBehavior,
            }),
        {
            labelProps: p,
            fieldProps: h,
            descriptionProps: m,
            errorMessageProps: g,
        } = (0, s.U)({
            ...e,
            labelElementType: "span",
        }),
        { gridProps: E } = (0, c.c)(
            {
                ...e,
                ...h,
                keyboardDelegate: _,
                shouldFocusWrap: !0,
                linkBehavior: "override",
            },
            t,
            n,
        ),
        [b, y] = (0, o.useState)(!1),
        { focusWithinProps: O } = (0, l.L)({ onFocusWithinChange: y }),
        v = (0, r.z)(e),
        I = (0, o.useRef)(t.collection.size);
    return (
        (0, o.useEffect)(() => {
            n.current && I.current > 0 && 0 === t.collection.size && b && n.current.focus(),
                (I.current = t.collection.size);
        }, [t.collection.size, b, n]),
        d.set(t, { onRemove: e.onRemove }),
        {
            gridProps: (0, i.d)(E, v, {
                role: t.collection.size ? "grid" : null,
                "aria-atomic": !1,
                "aria-relevant": "additions",
                "aria-live": b ? "polite" : "off",
                ...O,
                ...h,
            }),
            labelProps: p,
            descriptionProps: m,
            errorMessageProps: g,
        }
    );
}
