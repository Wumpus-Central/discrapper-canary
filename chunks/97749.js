var n = r(507604),
    i = r(46015),
    s = r(573078),
    a = URLSearchParams.prototype,
    o = i(a.forEach);
!n ||
    'size' in a ||
    s(a, 'size', {
        get: function () {
            var t = 0;
            return (
                o(this, function () {
                    t++;
                }),
                t
            );
        },
        configurable: !0,
        enumerable: !0
    });
