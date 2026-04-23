"use strict";
function r(e, t, n) {
    let r = [...t];
    return (
        "multiple" === e
            ? null != t.find((e) => e.id === n.id)
                ? (r = t.filter((e) => e.id !== n.id))
                : r.push(n)
            : (r = [n]),
        r
    );
}
function i() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "listbox",
        t = arguments.length > 1 ? arguments[1] : void 0;
    return `${e}-option-${t}`;
}
n.d(t, { ZN: () => i, qH: () => r }), n(321073);
