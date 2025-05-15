var r = n(507604),
    i = n(46015),
    o = n(573078),
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
