"use strict";
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
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "listbox",
        t = arguments.length > 1 ? arguments[1] : void 0;
    return `${e}-option-${t}`;
}
n.d(t, { ZN: () => s, fI: () => i, qH: () => r }), n(321073);
