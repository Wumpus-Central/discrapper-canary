var o = r(311596);
function n() {}
function i() {}
(i.resetWarningCache = n),
    (t.exports = function () {
        function t(t, e, r, n, i, a) {
            if (a !== o) {
                var u = Error('Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types');
                throw ((u.name = 'Invariant Violation'), u);
            }
        }
        function e() {
            return t;
        }
        t.isRequired = t;
        var r = {
            array: t,
            bigint: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: i,
            resetWarningCache: n
        };
        return (r.PropTypes = r), r;
    });
