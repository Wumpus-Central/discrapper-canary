"use strict";
function r(e) {
    return function (t, n) {
        var r;
        if ("formatting" === (null != n && n.context ? String(n.context) : "standalone") && e.formattingValues) {
            var i = e.defaultFormattingWidth || e.defaultWidth,
                a = null != n && n.width ? String(n.width) : i;
            r = e.formattingValues[a] || e.formattingValues[i];
        } else {
            var s = e.defaultWidth,
                o = null != n && n.width ? String(n.width) : e.defaultWidth;
            r = e.values[o] || e.values[s];
        }
        return r[e.argumentCallback ? e.argumentCallback(t) : t];
    };
}
n.d(t, { A: () => r });
