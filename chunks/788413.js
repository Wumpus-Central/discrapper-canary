"use strict";
n.d(t, { A: () => o, n: () => s });
var i,
    l = n(741918),
    s =
        (((i = {}).UPDATE_COLUMN_COUNTS = "UPDATE_COLUMN_COUNTS"),
        (i.SET_FOCUSED_POSITION = "SET_FOCUSED_POSITION"),
        i);
function r(e, t) {
    return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.max(e, t);
}
function a(e, t) {
    return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.min(e, t);
}
function o(e, t) {
    switch (t.type) {
        case l.X2.NAVIGATE_UP:
            let n;
            return (n = r(0, e.focusedY - 1)), { ...e, focusedX: a(e.columnCounts[n] - 1, e.focusedX), focusedY: n };
        case l.X2.NAVIGATE_DOWN:
            let i;
            return (
                (i = a(e.focusedY + 1, e.columnCounts.length - 1)),
                { ...e, focusedX: a(e.columnCounts[i] - 1, e.focusedX), focusedY: i }
            );
        case l.X2.NAVIGATE_RIGHT:
            let s, o, c;
            return (
                (o = (s = e.focusedY !== e.columnCounts.length - 1 && e.focusedX + 1 === e.columnCounts[e.focusedY])
                    ? 0
                    : a(e.focusedX + 1, e.columnCounts[e.focusedY] - 1)),
                (c = s ? e.focusedY + 1 : e.focusedY),
                { ...e, focusedX: o, focusedY: c }
            );
        case l.X2.NAVIGATE_LEFT:
            let u, d, h;
            return (
                (d = (u = 0 !== e.focusedY && 0 === e.focusedX) ? e.focusedY - 1 : e.focusedY),
                (h = u ? e.columnCounts[d] - 1 : r(0, e.focusedX - 1)),
                { ...e, focusedX: h, focusedY: d }
            );
        case l.X2.NAVIGATE_INLINE_START:
            return { ...e, focusedX: 0 };
        case l.X2.NAVIGATE_INLINE_END:
            return { ...e, focusedX: e.columnCounts[e.focusedY] - 1 };
        case l.X2.NAVIGATE_START:
            return { ...e, focusedX: 0, focusedY: 0 };
        case l.X2.NAVIGATE_END:
            let m;
            return (m = e.columnCounts.length - 1), { ...e, focusedX: e.columnCounts[m] - 1, focusedY: m };
        case "UPDATE_COLUMN_COUNTS":
            return (function (e, t) {
                let { columnCounts: n } = t,
                    i = a(r(0, n.length - 1), e.focusedY);
                return { ...e, columnCounts: n, focusedX: a(null == n[i] ? 0 : n[i] - 1, e.focusedX), focusedY: i };
            })(e, t);
        case "SET_FOCUSED_POSITION":
            return (function (e, t) {
                let { x: n, y: i } = t,
                    l = r(0, a(i, e.columnCounts.length - 1));
                return { ...e, focusedX: r(0, a(n, e.columnCounts[l] - 1)), focusedY: l };
            })(e, t);
        case l.X2.SELECT_FOCUSED_ITEM:
            break;
        default:
            console.warn(`Grid navigator was given an unhandled action ${t.type}`);
    }
    return e;
}
