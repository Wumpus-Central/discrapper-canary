var i = e(998218);
e.d(
    n,
    {},
    {
        A: function (t, n) {
            let e = t.getIconSource(n);
            if (null != e && "number" != typeof e) {
                let t;
                if ((Array.isArray(e) ? e.length > 0 && (t = e[0].uri) : (t = e.uri), null != t))
                    return i.A.toURLSafe(t) ?? void 0;
            }
        },
    },
);
