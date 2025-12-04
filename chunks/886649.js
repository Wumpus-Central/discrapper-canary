n.d(t, { xp: () => a });
var r = n(975318),
    i = n(98076);
function a(e, t, n) {
    try {
        Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0,
        });
    } catch (n) {
        r.X && i.kg.log(`Failed to add non-enumerable property "${t}" to object`, e);
    }
}
function o(e) {
    try {
        return isElement(e) ? htmlTreeAsString(e) : Object.prototype.toString.call(e);
    } catch (e) {
        return "<unknown>";
    }
}
function s(e) {
    if ("object" != typeof e || null === e) return {};
    {
        let t = {};
        for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t;
    }
}
function l(e) {
    if (!isPlainObject(e)) return !1;
    try {
        let t = Object.getPrototypeOf(e).constructor.name;
        return !t || "Object" === t;
    } catch (e) {
        return !0;
    }
}
