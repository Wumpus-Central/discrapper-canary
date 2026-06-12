"use strict";
n.d(t, { A: () => l, n: () => s });
var i,
    r = n(741918),
    s =
        (((i = {}).UPDATE_COLUMN_COUNTS = "UPDATE_COLUMN_COUNTS"),
        (i.SET_FOCUSED_POSITION = "SET_FOCUSED_POSITION"),
        i);
function a(e, t) {
    return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.max(e, t);
}
function o(e, t) {
    return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.min(e, t);
}
function l(e, t) {
    switch (t.type) {
        case r.X2.NAVIGATE_UP:
            let n;
            return (n = a(0, e.focusedY - 1)), { ...e, focusedX: o(e.columnCounts[n] - 1, e.focusedX), focusedY: n };
        case r.X2.NAVIGATE_DOWN:
            let i;
            return (
                (i = o(e.focusedY + 1, e.columnCounts.length - 1)),
                { ...e, focusedX: o(e.columnCounts[i] - 1, e.focusedX), focusedY: i }
            );
        case r.X2.NAVIGATE_RIGHT:
            let s, l, u;
            return (
                (l = (s = e.focusedY !== e.columnCounts.length - 1 && e.focusedX + 1 === e.columnCounts[e.focusedY])
                    ? 0
                    : o(e.focusedX + 1, e.columnCounts[e.focusedY] - 1)),
                (u = s ? e.focusedY + 1 : e.focusedY),
                { ...e, focusedX: l, focusedY: u }
            );
        case r.X2.NAVIGATE_LEFT:
            let c, d, _;
            return (
                (d = (c = 0 !== e.focusedY && 0 === e.focusedX) ? e.focusedY - 1 : e.focusedY),
                (_ = c ? e.columnCounts[d] - 1 : a(0, e.focusedX - 1)),
                { ...e, focusedX: _, focusedY: d }
            );
        case r.X2.NAVIGATE_INLINE_START:
            return { ...e, focusedX: 0 };
        case r.X2.NAVIGATE_INLINE_END:
            return { ...e, focusedX: e.columnCounts[e.focusedY] - 1 };
        case r.X2.NAVIGATE_START:
            return { ...e, focusedX: 0, focusedY: 0 };
        case r.X2.NAVIGATE_END:
            let h;
            return (h = e.columnCounts.length - 1), { ...e, focusedX: e.columnCounts[h] - 1, focusedY: h };
        case "UPDATE_COLUMN_COUNTS":
            return (function (e, t) {
                let { columnCounts: n } = t,
                    i = o(a(0, n.length - 1), e.focusedY);
                return { ...e, columnCounts: n, focusedX: o(null == n[i] ? 0 : n[i] - 1, e.focusedX), focusedY: i };
            })(e, t);
        case "SET_FOCUSED_POSITION":
            return (function (e, t) {
                let { x: n, y: i } = t,
                    r = a(0, o(i, e.columnCounts.length - 1));
                return { ...e, focusedX: a(0, o(n, e.columnCounts[r] - 1)), focusedY: r };
            })(e, t);
        case r.X2.SELECT_FOCUSED_ITEM:
            break;
        default:
            console.warn(`Grid navigator was given an unhandled action ${t.type}`);
    }
    return e;
}
