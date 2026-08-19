"use strict";
n.d(t, { A: () => o, n: () => s });
var l,
    i = n(741918),
    s =
        (((l = {}).UPDATE_COLUMN_COUNTS = "UPDATE_COLUMN_COUNTS"),
        (l.SET_FOCUSED_POSITION = "SET_FOCUSED_POSITION"),
        l);
function r(e, t) {
    return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.max(e, t);
}
function a(e, t) {
    return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.min(e, t);
}
function o(e, t) {
    switch (t.type) {
        case i.X2.NAVIGATE_UP:
            let n;
            return (n = r(0, e.focusedY - 1)), { ...e, focusedX: a(e.columnCounts[n] - 1, e.focusedX), focusedY: n };
        case i.X2.NAVIGATE_DOWN:
            let l;
            return (
                (l = a(e.focusedY + 1, e.columnCounts.length - 1)),
                { ...e, focusedX: a(e.columnCounts[l] - 1, e.focusedX), focusedY: l }
            );
        case i.X2.NAVIGATE_RIGHT:
            let s, o, u;
            return (
                (o = (s = e.focusedY !== e.columnCounts.length - 1 && e.focusedX + 1 === e.columnCounts[e.focusedY])
                    ? 0
                    : a(e.focusedX + 1, e.columnCounts[e.focusedY] - 1)),
                (u = s ? e.focusedY + 1 : e.focusedY),
                { ...e, focusedX: o, focusedY: u }
            );
        case i.X2.NAVIGATE_LEFT:
            let c, d, h;
            return (
                (d = (c = 0 !== e.focusedY && 0 === e.focusedX) ? e.focusedY - 1 : e.focusedY),
                (h = c ? e.columnCounts[d] - 1 : r(0, e.focusedX - 1)),
                { ...e, focusedX: h, focusedY: d }
            );
        case i.X2.NAVIGATE_INLINE_START:
            return { ...e, focusedX: 0 };
        case i.X2.NAVIGATE_INLINE_END:
            return { ...e, focusedX: e.columnCounts[e.focusedY] - 1 };
        case i.X2.NAVIGATE_START:
            return { ...e, focusedX: 0, focusedY: 0 };
        case i.X2.NAVIGATE_END:
            let m;
            return (m = e.columnCounts.length - 1), { ...e, focusedX: e.columnCounts[m] - 1, focusedY: m };
        case "UPDATE_COLUMN_COUNTS":
            return (function (e, t) {
                let { columnCounts: n } = t,
                    l = a(r(0, n.length - 1), e.focusedY);
                return { ...e, columnCounts: n, focusedX: a(null == n[l] ? 0 : n[l] - 1, e.focusedX), focusedY: l };
            })(e, t);
        case "SET_FOCUSED_POSITION":
            return (function (e, t) {
                let { x: n, y: l } = t,
                    i = r(0, a(l, e.columnCounts.length - 1));
                return { ...e, focusedX: r(0, a(n, e.columnCounts[i] - 1)), focusedY: i };
            })(e, t);
        case i.X2.SELECT_FOCUSED_ITEM:
            break;
        default:
            console.warn(`Grid navigator was given an unhandled action ${t.type}`);
    }
    return e;
}
