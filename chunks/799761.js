function i(e) {
    return function (t, n) {
        var i;
        if ('formatting' === (null != n && n.context ? String(n.context) : 'standalone') && e.formattingValues) {
            var r = e.defaultFormattingWidth || e.defaultWidth,
                a = null != n && n.width ? String(n.width) : r;
            i = e.formattingValues[a] || e.formattingValues[r];
        } else {
            var s = e.defaultWidth,
                o = null != n && n.width ? String(n.width) : e.defaultWidth;
            i = e.values[o] || e.values[s];
        }
        return i[e.argumentCallback ? e.argumentCallback(t) : t];
    };
}
n.d(t, { Z: () => i });
