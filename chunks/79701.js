var r = n(834647),
    a = n(673162).some;
r(
    {
        target: "Array",
        proto: !0,
        forced: !n(242291)("some"),
    },
    {
        some: function (e) {
            return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
    },
);
