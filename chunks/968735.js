n.d(t, {
    C8: () => s,
    HR: () => l,
    YR: () => o,
    jK: () => i,
    u_: () => a
});
var i,
    r = n(259630);
!(function (e) {
    (e.MISSING_VALUE = 'MISSING_VALUE'), (e.INVALID_VALUE = 'INVALID_VALUE'), (e.MISSING_INTL_API = 'MISSING_INTL_API');
})(i || (i = {}));
var a = (function (e) {
        function t(t, n, i) {
            var r = e.call(this, t) || this;
            return (r.code = n), (r.originalMessage = i), r;
        }
        return (
            (0, r.ZT)(t, e),
            (t.prototype.toString = function () {
                return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
            }),
            t
        );
    })(Error),
    s = (function (e) {
        function t(t, n, r, a) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(n, '". Options are "').concat(Object.keys(r).join('", "'), '"'), i.INVALID_VALUE, a) || this;
        }
        return (0, r.ZT)(t, e), t;
    })(a),
    o = (function (e) {
        function t(t, n, r) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(n), i.INVALID_VALUE, r) || this;
        }
        return (0, r.ZT)(t, e), t;
    })(a),
    l = (function (e) {
        function t(t, n) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(n, '"'), i.MISSING_VALUE, n) || this;
        }
        return (0, r.ZT)(t, e), t;
    })(a);
