n.d(t, { W4: () => s });
var r = n(142809),
    i = n(550505);
function a(e, t, n) {
    try {
        Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0,
        });
    } catch (n) {
        DEBUG_BUILD && logger.log(`Failed to add non-enumerable property "${t}" to object`, e);
    }
}
function s(e) {
    if ((0, i.bJ)(e))
        return {
            message: e.message,
            name: e.name,
            stack: e.stack,
            ...l(e),
        };
    if (!(0, i.xH)(e)) return e;
    {
        let t = {
            type: e.type,
            target: o(e.target),
            currentTarget: o(e.currentTarget),
            ...l(e),
        };
        return "u" > typeof CustomEvent && (0, i.tH)(e, CustomEvent) && (t.detail = e.detail), t;
    }
}
function o(e) {
    try {
        return (0, i.vq)(e) ? (0, r.Hd)(e) : Object.prototype.toString.call(e);
    } catch (e) {
        return "<unknown>";
    }
}
function l(e) {
    if ("object" != typeof e || null === e) return {};
    {
        let t = {};
        for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t;
    }
}
function c(e) {
    if (!isPlainObject(e)) return !1;
    try {
        let t = Object.getPrototypeOf(e).constructor.name;
        return !t || "Object" === t;
    } catch (e) {
        return !0;
    }
}
