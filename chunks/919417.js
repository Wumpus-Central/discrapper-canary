n.d(e, { Gt: () => s, V5: () => d, sI: () => p });
let i = (0, n(196765).v)(() => ({ hiddenApplicationIds: new Set() }));
function d(t) {
    return i((e) => null == t || !e.hiddenApplicationIds.has(t));
}
function p() {
    return i((t) => t.hiddenApplicationIds);
}
function s(t, e) {
    i.setState((n) => {
        let { hiddenApplicationIds: i } = n;
        if (i.has(t) === !e) return { hiddenApplicationIds: i };
        let d = new Set(i);
        return (e ? d.delete(t) : d.add(t), { hiddenApplicationIds: d });
    });
}
