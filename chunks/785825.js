n.d(t, { A: () => s, D: () => l });
var a,
    r = n(741918),
    l = (((a = {}).UPDATE_ITEM_COUNT = "UPDATE_ITEM_COUNT"), (a.SET_FOCUSED_INDEX = "SET_FOCUSED_INDEX"), a);
function s(e, t) {
    switch (t.type) {
        case r.X2.NAVIGATE_UP:
            return { ...e, focusedIndex: Math.max(0, e.focusedIndex - 1) };
        case r.X2.NAVIGATE_DOWN:
            return { ...e, focusedIndex: Math.min(e.focusedIndex + 1, e.itemCount - 1) };
        case r.X2.NAVIGATE_START:
            return { ...e, focusedIndex: 0 };
        case r.X2.NAVIGATE_END:
            return { ...e, focusedIndex: e.itemCount - 1 };
        case "UPDATE_ITEM_COUNT":
            return (function (e, t) {
                let { itemCount: n } = t;
                return { ...e, itemCount: n, focusedIndex: Math.min(n - 1, e.focusedIndex) };
            })(e, t);
        case "SET_FOCUSED_INDEX":
            return (function (e, t) {
                let { index: n } = t;
                return { ...e, focusedIndex: Math.max(0, Math.min(n, e.itemCount - 1)) };
            })(e, t);
        case r.X2.SELECT_FOCUSED_ITEM:
            break;
        default:
            console.warn(`Listbox navigator was given an unhandled action ${t.type}`);
    }
    return e;
}
