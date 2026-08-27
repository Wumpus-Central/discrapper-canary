"use strict";
r.d(t, { m: () => l });
var n = r(817738),
    i = r(383491),
    o = r(225801),
    a = r(481238),
    s = r(582128);
function l(e) {
    var t;
    let r = (0, a.o)((t = n.A) && t.__esModule ? t.default : t, "@react-aria/grid"),
        l = (0, o.lb)(),
        u = ("pointer" === l || "virtual" === l || null == l) && "u" > typeof window && "ontouchstart" in window,
        c = (0, s.useMemo)(() => {
            let t,
                n = e.selectionManager.selectionMode,
                i = e.selectionManager.selectionBehavior;
            return (
                u && (t = r.format("longPressToSelect")),
                "replace" === i && "none" !== n && e.hasItemActions ? t : void 0
            );
        }, [e.selectionManager.selectionMode, e.selectionManager.selectionBehavior, e.hasItemActions, r, u]);
    return (0, i.I)(c);
}
