var r = n(147018),
    i = n(71480),
    o = n(182867);
r(
    {
        target: 'Object',
        stat: !0
    },
    {
        fromEntries: function (e) {
            var t = {};
            return (
                i(
                    e,
                    function (e, n) {
                        o(t, e, n);
                    },
                    { AS_ENTRIES: !0 }
                ),
                t
            );
        }
    }
);
