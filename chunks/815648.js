var i = n(325008),
    r = n(581031),
    a = n(4340),
    s = URLSearchParams.prototype,
    o = r(s.forEach);
!i ||
    'size' in s ||
    a(s, 'size', {
        get: function () {
            var e = 0;
            return (
                o(this, function () {
                    e++;
                }),
                e
            );
        },
        configurable: !0,
        enumerable: !0
    });
