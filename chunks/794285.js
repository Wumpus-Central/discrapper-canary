var i = n(67867),
    r = n(294377),
    a = n(414629),
    s = n(197859),
    o = n(732116).CONSTRUCTOR,
    l = n(607672),
    u = r('Promise'),
    c = a && !o;
i(
    {
        target: 'Promise',
        stat: !0,
        forced: a || o
    },
    {
        resolve: function (e) {
            return l(c && this === u ? s : this, e);
        }
    }
);
