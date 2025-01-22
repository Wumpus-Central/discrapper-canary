var i = r(325008),
    a = r(581031),
    o = r(4340),
    s = URLSearchParams.prototype,
    l = a(s.forEach);
i &&
    !('size' in s) &&
    o(s, 'size', {
        get: function () {
            var e = 0;
            return (
                l(this, function () {
                    e++;
                }),
                e
            );
        },
        configurable: !0,
        enumerable: !0
    });
