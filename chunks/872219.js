"use strict";
n.d(t, { K: () => E });
var r = n(224507),
    i = n(825733),
    a = n(442058),
    s = n(217512),
    o = n(873291),
    l = n(723906),
    u = n(807177),
    c = n(98909),
    d = n(803082),
    _ = n(790637),
    f = n(74172),
    p = n(853590),
    h = n(47276),
    m = n(64700);
function g(e) {
    return e && e.__esModule ? e.default : e;
}
function E(e, t, n) {
    let { keyboardDelegate: E, isVirtualized: A, layoutDelegate: I, layout: T } = e,
        y = (0, f.Q)({ usage: "search", sensitivity: "base" }),
        { direction: S } = (0, p.Y)(),
        v = t.selectionManager.disabledBehavior,
        C = (0, m.useMemo)(
            () =>
                E ||
                new (0, a.h)({
                    collection: t.collection,
                    disabledKeys: t.disabledKeys,
                    disabledBehavior: v,
                    ref: n,
                    direction: S,
                    collator: y,
                    layoutDelegate: I,
                    layout: T,
                }),
            [E, t.collection, t.disabledKeys, v, n, S, y, I, T],
        ),
        b = (0, l.Bi)(e.id);
    r.V4.set(t, b);
    let { gridProps: N } = (0, o.E)({ ...e, id: b, keyboardDelegate: C }, t, n);
    A && (N["aria-rowcount"] = t.collection.size + t.collection.headerRows.length),
        (0, _.D5)() && "expandedKeys" in t && (N.role = "treegrid");
    let { column: R, direction: O } = t.sortDescriptor || {},
        D = (0, h.o)(g(i.A), "@react-aria/table"),
        L = (0, m.useMemo)(() => {
            var e, n;
            let r =
                null != (n = null == (e = t.collection.columns.find((e) => e.key === R)) ? void 0 : e.textValue)
                    ? n
                    : "";
            return O && R ? D.format(`${O}Sort`, { columnName: r }) : void 0;
        }, [O, R, t.collection.columns]),
        w = (0, u.I)(L);
    return (
        (0, c.w)(() => {
            L && (0, s.iP)(L, "assertive", 500);
        }, [L]),
        {
            gridProps: (0, d.v)(N, w, {
                "aria-describedby": [w["aria-describedby"], N["aria-describedby"]].filter(Boolean).join(" "),
            }),
        }
    );
}
