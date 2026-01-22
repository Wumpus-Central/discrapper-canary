var t = function (e) {
    if (void 0 === e) throw Error("invariant(...): Second argument must be a string.");
};
e.exports = function (e, n) {
    for (var r, i = arguments.length, a = Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++) a[s - 2] = arguments[s];
    if ((t(n), !e)) {
        if (void 0 === n)
            r = Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
        else {
            var o = 0;
            (r = Error(
                n.replace(/%s/g, function () {
                    return String(a[o++]);
                }),
            )).name = "Invariant Violation";
        }
        throw ((r.framesToPop = 1), r);
    }
};
