function r(e, t) {
    return "function" == typeof t.getChildren ? t.getChildren(e.key) : e.childNodes;
}
function i(e) {
    return a(e, 0);
}
function a(e, t) {
    if (t < 0) return;
    let n = 0;
    for (let r of e) {
        if (n === t) return r;
        n++;
    }
}
function o(e) {
    let t;
    for (let n of e) t = n;
    return t;
}
function s(e, t, n) {
    if (t.parentKey === n.parentKey) return t.index - n.index;
    let r = [...l(e, t), t],
        i = [...l(e, n), n],
        a = r.slice(0, i.length).findIndex((e, t) => e !== i[t]);
    return -1 !== a
        ? ((t = r[a]), (n = i[a]), t.index - n.index)
        : r.findIndex((e) => e === n) >= 0
          ? 1
          : (i.findIndex((e) => e === t), -1);
}
function l(e, t) {
    let n = [],
        r = t;
    for (; (null == r ? void 0 : r.parentKey) != null; ) (r = e.getItem(r.parentKey)) && n.unshift(r);
    return n;
}
n.d(t, {
    Em: () => a,
    _P: () => r,
    eg: () => s,
    l8: () => i,
    s: () => o,
});
