n.d(t, { U: () => f });
var r = n(455419),
    i = n(746047),
    a = n(529665),
    o = n(601339),
    s = n(158821),
    l = n(154343),
    c = n(227399);
let u = {
        ltr: "ArrowRight",
        rtl: "ArrowLeft",
    },
    d = {
        ltr: "ArrowLeft",
        rtl: "ArrowRight",
    };
function f(e, t, n) {
    let { node: f, isVirtualized: p } = e,
        { rowProps: _, ...m } = (0, a.K)(e, t, n),
        { direction: h } = (0, c.j)();
    p && !((0, l.OV)() && "expandedKeys" in t)
        ? (_["aria-rowindex"] = f.index + 1 + t.collection.headerRows.length)
        : delete _["aria-rowindex"];
    let g = {};
    if ((0, l.OV)() && "expandedKeys" in t) {
        let e = t.keyMap.get(f.key);
        if (null != e) {
            var E, b, y, O, v, S, I, T, A, C;
            let n =
                (null == (E = e.props) ? void 0 : E.UNSTABLE_childItems) ||
                (null == (y = e.props) || null == (b = y.children) ? void 0 : b.length) > t.userColumnCount;
            g = {
                onKeyDown: (r) => {
                    r.key === u[h] &&
                    t.selectionManager.focusedKey === e.key &&
                    n &&
                    "all" !== t.expandedKeys &&
                    !t.expandedKeys.has(e.key)
                        ? (t.toggleKey(e.key), r.stopPropagation())
                        : r.key === d[h] &&
                          t.selectionManager.focusedKey === e.key &&
                          n &&
                          ("all" === t.expandedKeys || t.expandedKeys.has(e.key)) &&
                          (t.toggleKey(e.key), r.stopPropagation());
                },
                "aria-expanded": n ? "all" === t.expandedKeys || t.expandedKeys.has(f.key) : void 0,
                "aria-level": e.level,
                "aria-posinset": (null != (I = e.indexOfType) ? I : 0) + 1,
                "aria-setsize":
                    e.level > 1
                        ? (null !=
                          (A =
                              null ==
                              (O = (0, i.s)(
                                  null != (T = null == (v = t.keyMap.get(e.parentKey)) ? void 0 : v.childNodes)
                                      ? T
                                      : [],
                              ))
                                  ? void 0
                                  : O.indexOfType)
                              ? A
                              : 0) + 1
                        : (null != (C = null == (S = (0, i.s)(t.collection.body.childNodes)) ? void 0 : S.indexOfType)
                              ? C
                              : 0) + 1,
            };
        }
    }
    let N = (0, o.fU)(f.props),
        P = m.hasAction ? N : {};
    return {
        rowProps: {
            ...(0, s.d)(_, g, P),
            "aria-labelledby": (0, r.u)(t, f.key),
        },
        ...m,
    };
}
