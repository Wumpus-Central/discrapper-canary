var r = n(311596);
function i() {}
function s() {}
(s.resetWarningCache = i),
    (e.exports = function () {
        function e(e, t, n, i, s, a) {
            if (a !== r) {
                var l = Error(
                    "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
                );
                throw ((l.name = "Invariant Violation"), l);
            }
        }
        function t() {
            return e;
        }
        e.isRequired = e;
        var n = {
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
            checkPropTypes: s,
            resetWarningCache: i,
        };
        return (n.PropTypes = n), n;
    });
