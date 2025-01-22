var i = r(690244)('%TypeError%'),
    a = r(116298),
    o = r(125179),
    s = r(395238),
    l = r(441596),
    u = r(75150),
    c = r(860438),
    d = r(465555),
    f = r(828148),
    p = r(148309),
    h = r(632384);
e.exports = function (e, n, r, _, m) {
    var g,
        E,
        v = h(e);
    if ('Undefined' !== v && 'Object' !== v) throw new i('Assertion failed: O must be undefined or an Object');
    if (!f(n)) throw new i('Assertion failed: P must be a Property Key');
    if ('Boolean' !== h(r)) throw new i('Assertion failed: extensible must be a Boolean');
    if (
        !s(
            {
                Type: h,
                IsDataDescriptor: c,
                IsAccessorDescriptor: u
            },
            _
        )
    )
        throw new i('Assertion failed: Desc must be a Property Descriptor');
    if (
        'Undefined' !== h(m) &&
        !s(
            {
                Type: h,
                IsDataDescriptor: c,
                IsAccessorDescriptor: u
            },
            m
        )
    )
        throw new i('Assertion failed: current must be a Property Descriptor, or undefined');
    if ('Undefined' === h(m))
        return (
            !!r &&
            ('Undefined' === v ||
                (u(_)
                    ? a(c, p, l, e, n, _)
                    : a(c, p, l, e, n, {
                          '[[Configurable]]': !!_['[[Configurable]]'],
                          '[[Enumerable]]': !!_['[[Enumerable]]'],
                          '[[Value]]': _['[[Value]]'],
                          '[[Writable]]': !!_['[[Writable]]']
                      })))
        );
    if (
        !o(
            {
                IsAccessorDescriptor: u,
                IsDataDescriptor: c
            },
            m
        )
    )
        throw new i('`current`, when present, must be a fully populated and valid Property Descriptor');
    if (!m['[[Configurable]]']) {
        if (('[[Configurable]]' in _ && _['[[Configurable]]']) || ('[[Enumerable]]' in _ && !p(_['[[Enumerable]]'], m['[[Enumerable]]'])) || (!d(_) && !p(u(_), u(m)))) return !1;
        if (u(m)) {
            if (('[[Get]]' in _ && !p(_['[[Get]]'], m['[[Get]]'])) || ('[[Set]]' in _ && !p(_['[[Set]]'], m['[[Set]]']))) return !1;
        } else if (!m['[[Writable]]'] && (('[[Writable]]' in _ && _['[[Writable]]']) || ('[[Value]]' in _ && !p(_['[[Value]]'], m['[[Value]]'])))) return !1;
    }
    if ('Undefined' !== v)
        return c(m) && u(_)
            ? ((g = ('[[Configurable]]' in _ ? _ : m)['[[Configurable]]']),
              a(c, p, l, e, n, {
                  '[[Configurable]]': !!g,
                  '[[Enumerable]]': !!(E = ('[[Enumerable]]' in _ ? _ : m)['[[Enumerable]]']),
                  '[[Get]]': ('[[Get]]' in _ ? _ : m)['[[Get]]'],
                  '[[Set]]': ('[[Set]]' in _ ? _ : m)['[[Set]]']
              }))
            : u(m) && c(_)
              ? ((g = ('[[Configurable]]' in _ ? _ : m)['[[Configurable]]']),
                a(c, p, l, e, n, {
                    '[[Configurable]]': !!g,
                    '[[Enumerable]]': !!(E = ('[[Enumerable]]' in _ ? _ : m)['[[Enumerable]]']),
                    '[[Value]]': ('[[Value]]' in _ ? _ : m)['[[Value]]'],
                    '[[Writable]]': !!('[[Writable]]' in _ ? _ : m)['[[Writable]]']
                }))
              : a(c, p, l, e, n, _);
    return !0;
};
