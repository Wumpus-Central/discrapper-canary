n.d(t, { Z: () => i });
var r = n(429550);
function i(e, t) {
    if (e) {
        if ("string" == typeof e) return (0, r.Z)(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? (0, r.Z)(e, t)
                  : void 0
        );
    }
}
