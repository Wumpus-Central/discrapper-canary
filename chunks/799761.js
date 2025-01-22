function i(e) {
    return function (n, r) {
        var i;
        if ('formatting' === (null != r && r.context ? String(r.context) : 'standalone') && e.formattingValues) {
            var a = e.defaultFormattingWidth || e.defaultWidth,
                o = null != r && r.width ? String(r.width) : a;
            i = e.formattingValues[o] || e.formattingValues[a];
        } else {
            var s = e.defaultWidth,
                l = null != r && r.width ? String(r.width) : e.defaultWidth;
            i = e.values[l] || e.values[s];
        }
        return i[e.argumentCallback ? e.argumentCallback(n) : n];
    };
}
r.d(n, {
    Z: function () {
        return i;
    }
});
