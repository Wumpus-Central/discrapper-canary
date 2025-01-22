var i = r(67867),
    a = r(818140).includes,
    o = r(821819),
    s = r(501953);
i(
    {
        target: 'Array',
        proto: !0,
        forced: o(function () {
            return ![,].includes();
        })
    },
    {
        includes: function (e) {
            return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
    }
),
    s('includes');
