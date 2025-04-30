var r = n(507604),
    i = n(46015),
    a = n(573078),
    o = URLSearchParams.prototype,
    s = i(o.forEach);
!r ||
    'size' in o ||
    a(o, 'size', {
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
