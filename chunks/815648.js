var r = n(325008),
    i = n(581031),
    o = n(4340),
    a = URLSearchParams.prototype,
    s = i(a.forEach);
!r ||
    'size' in a ||
    o(a, 'size', {
        get: function () {
            var e = 0;
            return (
                s(this, function () {
                    e++;
                }),
                e
            );
        },
        configurable: !0,
        enumerable: !0
    });
