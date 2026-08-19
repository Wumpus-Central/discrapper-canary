"use strict";
let n = r(221180);
class o extends Error {
    constructor(e) {
        super(e), (this.name = "TimeoutError");
    }
}
let i = (e, t, r) =>
    new Promise((i, a) => {
        if ("number" != typeof t || t < 0) throw TypeError("Expected `milliseconds` to be a positive number");
        if (t === 1 / 0) return void i(e);
        let s = setTimeout(() => {
            if ("function" == typeof r) {
                try {
                    i(r());
                } catch (e) {
                    a(e);
                }
                return;
            }
            let n = "string" == typeof r ? r : `Promise timed out after ${t} milliseconds`,
                s = r instanceof Error ? r : new o(n);
            "function" == typeof e.cancel && e.cancel(), a(s);
        }, t);
        n(e.then(i, a), () => {
            clearTimeout(s);
        });
    });
(e.exports = i), (e.exports.default = i), (e.exports.TimeoutError = o);
