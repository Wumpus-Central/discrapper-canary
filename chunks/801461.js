function i(e, t) {
    return (
        null != t &&
        (Array.isArray(t) ? t.includes(e) : "object" == typeof e ? JSON.stringify(e) === JSON.stringify(t) : e === t)
    );
}
function r(e, t, n) {
    let i = [...t];
    return (
        "multiple" === e
            ? null != t.find((e) => e.id === n.id)
                ? (i = t.filter((e) => e.id !== n.id))
                : i.push(n)
            : (i = [n]),
        i
    );
}
function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "listbox",
        t = arguments.length > 1 ? arguments[1] : void 0;
    return `${e}-option-${t}`;
}
function s(e, t) {
    let n = 0;
    for (let i = 0; i < e.length; i++) {
        let r = e[i].count;
        if (t < n + r) return [i, t - n];
        n += r;
    }
    return [0, t];
}
function l(e, t, n) {
    let i = 0;
    for (let n = 0; n < t; n++) i += e[n].count;
    return i + n;
}
n.d(t, { LE: () => s, ZN: () => a, fI: () => i, qH: () => r, rp: () => l }), n(321073);
