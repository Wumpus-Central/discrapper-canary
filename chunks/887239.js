"use strict";
n.d(t, { A: () => i });
var r = n(56636);
let i = (function (e) {
    function t(t, n, r) {
        var i = e.call(this, t, n) || this;
        return (i.iterator = r), i;
    }
    return (
        (0, r.C6)(t, e),
        (t.prototype.add = function (e) {
            return !!this.iterator(e, this._result.length) && (this._result.push(e), !0);
        }),
        t
    );
})(n(485756).A);
