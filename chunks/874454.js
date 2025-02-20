var r = n(67867),
    i = n(818140).includes,
    o = n(821819),
    a = n(501953);
r(
    {
        target: 'Array',
        proto: !0,
        forced: o(function () {
            return ![,].includes();
        })
    },
    {
        includes: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
    }
),
    a('includes');
