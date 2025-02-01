var i = n(67867),
    r = n(804104).some;
i(
    {
        target: 'Array',
        proto: !0,
        forced: !n(54659)('some')
    },
    {
        some: function (e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
    }
);
