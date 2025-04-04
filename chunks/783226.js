var e = n(220159),
    o = n(517522),
    i = n(475424),
    u = n(879257),
    s = n(288510),
    c = n(6837);
e(
    {
        target: 'Date',
        proto: !0,
        forced: n(779688)(function () {
            return (
                null !== new Date(NaN).toJSON() ||
                1 !==
                    o(Date.prototype.toJSON, {
                        toISOString: function () {
                            return 1;
                        }
                    })
            );
        })
    },
    {
        toJSON: function (t) {
            var r = i(this),
                n = u(r, 'number');
            return 'number' != typeof n || isFinite(n) ? ('toISOString' in r || 'Date' !== c(r) ? r.toISOString() : o(s, r)) : null;
        }
    }
);
