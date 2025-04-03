var r = n(67867),
    o = n(804104).some;
r(
    {
        target: 'Array',
        proto: !0,
        forced: !n(54659)('some')
    },
    {
        some: function (e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
    }
);
