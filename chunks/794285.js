var i = r(67867),
    a = r(294377),
    o = r(414629),
    s = r(197859),
    l = r(732116).CONSTRUCTOR,
    u = r(607672),
    c = a('Promise'),
    d = o && !l;
i(
    {
        target: 'Promise',
        stat: !0,
        forced: o || l
    },
    {
        resolve: function (e) {
            return u(d && this === c ? s : this, e);
        }
    }
);
