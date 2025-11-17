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
    let { node: f, isVirtualized: _ } = e,
        { rowProps: p, ...h } = (0, a.K)(e, t, n),
        { direction: m } = (0, c.j)();
    _ && !((0, l.OV)() && "expandedKeys" in t)
        ? (p["aria-rowindex"] = f.index + 1 + t.collection.headerRows.length)
        : delete p["aria-rowindex"];
    let g = {};
    if ((0, l.OV)() && "expandedKeys" in t) {
        let e = t.keyMap.get(f.key);
        if (null != e) {
            var E, b, y, O, v, I, T, S, A, C;
            let n =
                (null == (E = e.props) ? void 0 : E.UNSTABLE_childItems) ||
                (null == (y = e.props) || null == (b = y.children) ? void 0 : b.length) > t.userColumnCount;
            g = {
                onKeyDown: (r) => {
                    r.key === u[m] &&
                    t.selectionManager.focusedKey === e.key &&
                    n &&
                    "all" !== t.expandedKeys &&
                    !t.expandedKeys.has(e.key)
                        ? (t.toggleKey(e.key), r.stopPropagation())
                        : r.key === d[m] &&
                          t.selectionManager.focusedKey === e.key &&
                          n &&
                          ("all" === t.expandedKeys || t.expandedKeys.has(e.key)) &&
                          (t.toggleKey(e.key), r.stopPropagation());
                },
                "aria-expanded": n ? "all" === t.expandedKeys || t.expandedKeys.has(f.key) : void 0,
                "aria-level": e.level,
                "aria-posinset": (null != (T = e.indexOfType) ? T : 0) + 1,
                "aria-setsize":
                    e.level > 1
                        ? (null !=
                          (A =
                              null ==
                              (O = (0, i.s)(
                                  null != (S = null == (v = t.keyMap.get(e.parentKey)) ? void 0 : v.childNodes)
                                      ? S
                                      : [],
                              ))
                                  ? void 0
                                  : O.indexOfType)
                              ? A
                              : 0) + 1
                        : (null != (C = null == (I = (0, i.s)(t.collection.body.childNodes)) ? void 0 : I.indexOfType)
                              ? C
                              : 0) + 1,
            };
        }
    }
    let N = (0, o.fU)(f.props),
        R = h.hasAction ? N : {};
    return {
        rowProps: {
            ...(0, s.d)(p, g, R),
            "aria-labelledby": (0, r.u)(t, f.key),
        },
        ...h,
    };
}
