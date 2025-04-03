var r = n(67867),
    o = n(804104).findIndex,
    a = n(501953),
    i = 'findIndex',
    s = !0;
i in [] &&
    [,][i](function () {
        s = !1;
    }),
    r(
        {
            target: 'Array',
            proto: !0,
            forced: s
        },
        {
            findIndex: function (e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
            }
        }
    ),
    a(i);
