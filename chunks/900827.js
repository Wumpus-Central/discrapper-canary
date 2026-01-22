var r = n(834647),
    a = n(375797),
    o = n(654272).indexOf,
    i = n(242291),
    s = a([].indexOf),
    l = !!s && 1 / s([1], 1, -0) < 0;
r(
    {
        target: "Array",
        proto: !0,
        forced: l || !i("indexOf"),
    },
    {
        indexOf: function (e) {
            var t = arguments.length > 1 ? arguments[1] : void 0;
            return l ? s(this, e, t) || 0 : o(this, e, t);
        },
    },
);
