n.d(
    t,
    {},
    {
        A: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
            return e.filter((e) => {
                var i, r;
                return (
                    (i = e.effectiveStartDate),
                    (r = e.effectiveEndDate),
                    !((null != i && t.getTime() < i.getTime()) || (null != r && t.getTime() > r.getTime())) &&
                        (!e.isTimed || n(e))
                );
            });
        },
    },
);
