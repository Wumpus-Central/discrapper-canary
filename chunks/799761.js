function r(e) {
    return function (t, n) {
        var r;
        if ('formatting' === (null != n && n.context ? String(n.context) : 'standalone') && e.formattingValues) {
            var i = e.defaultFormattingWidth || e.defaultWidth,
                o = null != n && n.width ? String(n.width) : i;
            r = e.formattingValues[o] || e.formattingValues[i];
        } else {
            var a = e.defaultWidth,
                s = null != n && n.width ? String(n.width) : e.defaultWidth;
            r = e.values[s] || e.values[a];
        }
        return r[e.argumentCallback ? e.argumentCallback(t) : t];
    };
}
n.d(t, { Z: () => r });
