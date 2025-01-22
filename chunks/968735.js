r.d(n, {
    C8: function () {
        return s;
    },
    HR: function () {
        return u;
    },
    YR: function () {
        return l;
    },
    jK: function () {
        return i;
    },
    u_: function () {
        return o;
    }
});
var i,
    a = r(259630);
!(function (e) {
    (e.MISSING_VALUE = 'MISSING_VALUE'), (e.INVALID_VALUE = 'INVALID_VALUE'), (e.MISSING_INTL_API = 'MISSING_INTL_API');
})(i || (i = {}));
var o = (function (e) {
        function n(n, r, i) {
            var a = e.call(this, n) || this;
            return (a.code = r), (a.originalMessage = i), a;
        }
        return (
            (0, a.ZT)(n, e),
            (n.prototype.toString = function () {
                return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
            }),
            n
        );
    })(Error),
    s = (function (e) {
        function n(n, r, a, o) {
            return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(a).join('", "'), '"'), i.INVALID_VALUE, o) || this;
        }
        return (0, a.ZT)(n, e), n;
    })(o),
    l = (function (e) {
        function n(n, r, a) {
            return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), i.INVALID_VALUE, a) || this;
        }
        return (0, a.ZT)(n, e), n;
    })(o),
    u = (function (e) {
        function n(n, r) {
            return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), i.MISSING_VALUE, r) || this;
        }
        return (0, a.ZT)(n, e), n;
    })(o);
