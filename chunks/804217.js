var i = n(67867),
    r = n(804104).findIndex,
    a = n(501953),
    s = 'findIndex',
    o = !0;
s in [] &&
    [,][s](function () {
        o = !1;
    }),
    i(
        {
            target: 'Array',
            proto: !0,
            forced: o
        },
        {
            findIndex: function (e) {
                return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
            }
        }
    ),
    a(s);
