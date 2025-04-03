var r = n(67867),
    o = n(818140).includes,
    a = n(821819),
    i = n(501953);
r(
    {
        target: 'Array',
        proto: !0,
        forced: a(function () {
            return ![,].includes();
        })
    },
    {
        includes: function (e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
    }
),
    i('includes');
