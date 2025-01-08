var a = r(311596);
function n() {}
function o() {}
(o.resetWarningCache = n),
    (e.exports = function () {
        function e(e, t, r, n, o, s) {
            if (s !== a) {
                var i = Error('Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types');
                throw ((i.name = 'Invariant Violation'), i);
            }
        }
        function t() {
            return e;
        }
        e.isRequired = e;
        var r = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: o,
            resetWarningCache: n
        };
        return (r.PropTypes = r), r;
    });
