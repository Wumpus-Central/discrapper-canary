var i = n(67867),
    r = n(818140).includes,
    a = n(821819),
    s = n(501953);
i(
    {
        target: 'Array',
        proto: !0,
        forced: a(function () {
            return ![,].includes();
        })
    },
    {
        includes: function (e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
    }
),
    s('includes');
