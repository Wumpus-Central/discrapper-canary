r.d(t, { Z: () => n });
var a = r(429550);
function n(e, t) {
    if (e) {
        if ('string' == typeof e) return (0, a.Z)(e, t);
        var r = {}.toString.call(e).slice(8, -1);
        return 'Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r ? Array.from(e) : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? (0, a.Z)(e, t) : void 0;
    }
}
