var i = r(147018),
    a = r(82246).findLast,
    o = r(345374);
i(
    {
        target: 'Array',
        proto: !0
    },
    {
        findLast: function (e) {
            return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
    }
),
    o('findLast');
