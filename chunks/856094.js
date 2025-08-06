var r = n(98405),
    i = n(1266).findLastIndex,
    o = n(967333);
r(
    {
        target: "Array",
        proto: !0,
    },
    {
        findLastIndex: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
    },
),
    o("findLastIndex");
