let n = r(221180);
class i extends Error {
    constructor(e) {
        super(e), (this.name = "TimeoutError");
    }
}
let o = (e, t, r) =>
    new Promise((o, a) => {
        if ("number" != typeof t || t < 0) throw TypeError("Expected `milliseconds` to be a positive number");
        if (t === 1 / 0) return void o(e);
        let s = setTimeout(() => {
            if ("function" == typeof r) {
                try {
                    o(r());
                } catch (e) {
                    a(e);
                }
                return;
            }
            let n = "string" == typeof r ? r : `Promise timed out after ${t} milliseconds`,
                s = r instanceof Error ? r : new i(n);
            "function" == typeof e.cancel && e.cancel(), a(s);
        }, t);
        n(e.then(o, a), () => {
            clearTimeout(s);
        });
    });
(e.exports = o), (e.exports.default = o), (e.exports.TimeoutError = i);
