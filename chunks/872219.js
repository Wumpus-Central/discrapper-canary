n.d(t, {
    K: () => E,
});
var r = n(224507),
    i = n(825733),
    a = n(442058),
    s = n(217512),
    o = n(873291),
    l = n(723906),
    c = n(807177),
    u = n(98909),
    d = n(803082),
    f = n(790637),
    p = n(74172),
    _ = n(853590),
    h = n(47276),
    m = n(64700);

function g(e) {
    return e && e.__esModule ? e.default : e;
}

function E(e, t, n) {
    let { keyboardDelegate: E, isVirtualized: b, layoutDelegate: y, layout: O } = e,
        A = (0, p.Q)({
            usage: "search",
            sensitivity: "base",
        }),
        { direction: v } = (0, _.Y)(),
        S = t.selectionManager.disabledBehavior,
        I = (0, m.useMemo)(
            () =>
                E ||
                new (0, a.h)({
                    collection: t.collection,
                    disabledKeys: t.disabledKeys,
                    disabledBehavior: S,
                    ref: n,
                    direction: v,
                    collator: A,
                    layoutDelegate: y,
                    layout: O,
                }),
            [E, t.collection, t.disabledKeys, S, n, v, A, y, O],
        ),
        T = (0, l.Bi)(e.id);
    r.V4.set(t, T);
    let { gridProps: C } = (0, o.E)(
        {
            ...e,
            id: T,
            keyboardDelegate: I,
        },
        t,
        n,
    );
    b && (C["aria-rowcount"] = t.collection.size + t.collection.headerRows.length),
        (0, f.D5)() && "expandedKeys" in t && (C.role = "treegrid");
    let { column: N, direction: R } = t.sortDescriptor || {},
        w = (0, h.o)(g(i.A), "@react-aria/table"),
        P = (0, m.useMemo)(() => {
            var e, n;
            let r =
                null != (n = null == (e = t.collection.columns.find((e) => e.key === N)) ? void 0 : e.textValue)
                    ? n
                    : "";
            return R && N
                ? w.format(`${R}Sort`, {
                      columnName: r,
                  })
                : void 0;
        }, [R, N, t.collection.columns]),
        D = (0, c.I)(P);
    return (
        (0, u.w)(() => {
            P && (0, s.iP)(P, "assertive", 500);
        }, [P]),
        {
            gridProps: (0, d.v)(C, D, {
                "aria-describedby": [D["aria-describedby"], C["aria-describedby"]].filter(Boolean).join(" "),
            }),
        }
    );
}
