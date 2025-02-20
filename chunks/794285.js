var r = n(67867),
    i = n(294377),
    o = n(414629),
    a = n(197859),
    s = n(732116).CONSTRUCTOR,
    l = n(607672),
    c = i('Promise'),
    u = o && !s;
r(
    {
        target: 'Promise',
        stat: !0,
        forced: o || s
    },
    {
        resolve: function (e) {
            return l(u && this === c ? a : this, e);
        }
    }
);
