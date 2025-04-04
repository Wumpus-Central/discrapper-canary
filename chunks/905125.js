var r = n(690244)('%TypeError%'),
    i = n(116298),
    o = n(125179),
    a = n(395238),
    s = n(441596),
    l = n(75150),
    c = n(860438),
    u = n(465555),
    d = n(828148),
    f = n(148309),
    _ = n(632384);
e.exports = function (e, t, n, p, h) {
    var m,
        g,
        E = _(e);
    if ('Undefined' !== E && 'Object' !== E) throw new r('Assertion failed: O must be undefined or an Object');
    if (!d(t)) throw new r('Assertion failed: P must be a Property Key');
    if ('Boolean' !== _(n)) throw new r('Assertion failed: extensible must be a Boolean');
    if (
        !a(
            {
                Type: _,
                IsDataDescriptor: c,
                IsAccessorDescriptor: l
            },
            p
        )
    )
        throw new r('Assertion failed: Desc must be a Property Descriptor');
    if (
        'Undefined' !== _(h) &&
        !a(
            {
                Type: _,
                IsDataDescriptor: c,
                IsAccessorDescriptor: l
            },
            h
        )
    )
        throw new r('Assertion failed: current must be a Property Descriptor, or undefined');
    if ('Undefined' === _(h))
        return (
            !!n &&
            ('Undefined' === E ||
                (l(p)
                    ? i(c, f, s, e, t, p)
                    : i(c, f, s, e, t, {
                          '[[Configurable]]': !!p['[[Configurable]]'],
                          '[[Enumerable]]': !!p['[[Enumerable]]'],
                          '[[Value]]': p['[[Value]]'],
                          '[[Writable]]': !!p['[[Writable]]']
                      })))
        );
    if (
        !o(
            {
                IsAccessorDescriptor: l,
                IsDataDescriptor: c
            },
            h
        )
    )
        throw new r('`current`, when present, must be a fully populated and valid Property Descriptor');
    if (!h['[[Configurable]]']) {
        if (('[[Configurable]]' in p && p['[[Configurable]]']) || ('[[Enumerable]]' in p && !f(p['[[Enumerable]]'], h['[[Enumerable]]'])) || (!u(p) && !f(l(p), l(h)))) return !1;
        if (l(h)) {
            if (('[[Get]]' in p && !f(p['[[Get]]'], h['[[Get]]'])) || ('[[Set]]' in p && !f(p['[[Set]]'], h['[[Set]]']))) return !1;
        } else if (!h['[[Writable]]'] && (('[[Writable]]' in p && p['[[Writable]]']) || ('[[Value]]' in p && !f(p['[[Value]]'], h['[[Value]]'])))) return !1;
    }
    return (
        'Undefined' === E ||
        (c(h) && l(p)
            ? i(c, f, s, e, t, {
                  '[[Configurable]]': !!(m = ('[[Configurable]]' in p ? p : h)['[[Configurable]]']),
                  '[[Enumerable]]': !!(g = ('[[Enumerable]]' in p ? p : h)['[[Enumerable]]']),
                  '[[Get]]': ('[[Get]]' in p ? p : h)['[[Get]]'],
                  '[[Set]]': ('[[Set]]' in p ? p : h)['[[Set]]']
              })
            : l(h) && c(p)
              ? i(c, f, s, e, t, {
                    '[[Configurable]]': !!(m = ('[[Configurable]]' in p ? p : h)['[[Configurable]]']),
                    '[[Enumerable]]': !!(g = ('[[Enumerable]]' in p ? p : h)['[[Enumerable]]']),
                    '[[Value]]': ('[[Value]]' in p ? p : h)['[[Value]]'],
                    '[[Writable]]': !!('[[Writable]]' in p ? p : h)['[[Writable]]']
                })
              : i(c, f, s, e, t, p))
    );
};
