l.d(t, { K: () => v });
var n = l(224507),
    o = l(825733),
    r = l(442058),
    i = l(217512),
    s = l(873291),
    u = l(723906),
    a = l(807177),
    c = l(98909),
    d = l(803082),
    g = l(790637),
    p = l(74172),
    m = l(853590),
    h = l(47276),
    y = l(64700);
function v(e, t, l) {
    var v;
    let { keyboardDelegate: f, isVirtualized: k, layoutDelegate: b, layout: S } = e,
        C = (0, p.Q)({ usage: "search", sensitivity: "base" }),
        { direction: D } = (0, m.Y)(),
        x = t.selectionManager.disabledBehavior,
        A = (0, y.useMemo)(
            () =>
                f ||
                new (0, r.h)({
                    collection: t.collection,
                    disabledKeys: t.disabledKeys,
                    disabledBehavior: x,
                    ref: l,
                    direction: D,
                    collator: C,
                    layoutDelegate: b,
                    layout: S,
                }),
            [f, t.collection, t.disabledKeys, x, l, D, C, b, S],
        ),
        w = (0, u.Bi)(e.id);
    n.V4.set(t, w);
    let { gridProps: E } = (0, s.E)({ ...e, id: w, keyboardDelegate: A }, t, l);
    k && (E["aria-rowcount"] = t.collection.size + t.collection.headerRows.length),
        (0, g.D5)() && "expandedKeys" in t && (E.role = "treegrid");
    let { column: K, direction: z } = t.sortDescriptor || {},
        N = (0, h.o)((v = o.A) && v.__esModule ? v.default : v, "@react-aria/table"),
        B = (0, y.useMemo)(() => {
            var e, l;
            let n =
                null != (l = null == (e = t.collection.columns.find((e) => e.key === K)) ? void 0 : e.textValue)
                    ? l
                    : "";
            return z && K ? N.format(`${z}Sort`, { columnName: n }) : void 0;
        }, [z, K, t.collection.columns]),
        $ = (0, a.I)(B);
    return (
        (0, c.w)(() => {
            B && (0, i.iP)(B, "assertive", 500);
        }, [B]),
        {
            gridProps: (0, d.v)(E, $, {
                "aria-describedby": [$["aria-describedby"], E["aria-describedby"]].filter(Boolean).join(" "),
            }),
        }
    );
}
