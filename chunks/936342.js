var r = n(815329),
    i = n(243647),
    o = n(13863),
    a = n(699367),
    s = n(744145),
    l = n(425194),
    c = n(883367),
    u = n(711902),
    d = n(163567),
    f = n(414235),
    _ = n(71256),
    p = n(951575);
e.exports = function (e, t, n, h, m) {
    var g,
        E,
        b = _(e);
    if (void 0 !== e && !p(e)) throw new r('Assertion failed: O must be undefined or an Object');
    if (!d(t)) throw new r('Assertion failed: P must be a Property Key');
    if ('boolean' != typeof n) throw new r('Assertion failed: extensible must be a Boolean');
    if (!a(h)) throw new r('Assertion failed: Desc must be a Property Descriptor');
    if (void 0 !== m && !a(m)) throw new r('Assertion failed: current must be a Property Descriptor, or undefined');
    if (void 0 === m)
        return (
            !!n &&
            ('Undefined' === b ||
                (l(h)
                    ? i(c, f, s, e, t, h)
                    : i(c, f, s, e, t, {
                          '[[Configurable]]': !!h['[[Configurable]]'],
                          '[[Enumerable]]': !!h['[[Enumerable]]'],
                          '[[Value]]': h['[[Value]]'],
                          '[[Writable]]': !!h['[[Writable]]']
                      })))
        );
    if (
        !o(
            {
                IsAccessorDescriptor: l,
                IsDataDescriptor: c
            },
            m
        )
    )
        throw new r('`current`, when present, must be a fully populated and valid Property Descriptor');
    if (!m['[[Configurable]]']) {
        if (('[[Configurable]]' in h && h['[[Configurable]]']) || ('[[Enumerable]]' in h && !f(h['[[Enumerable]]'], m['[[Enumerable]]'])) || (!u(h) && !f(l(h), l(m)))) return !1;
        if (l(m)) {
            if (('[[Get]]' in h && !f(h['[[Get]]'], m['[[Get]]'])) || ('[[Set]]' in h && !f(h['[[Set]]'], m['[[Set]]']))) return !1;
        } else if (!m['[[Writable]]'] && (('[[Writable]]' in h && h['[[Writable]]']) || ('[[Value]]' in h && !f(h['[[Value]]'], m['[[Value]]'])))) return !1;
    }
    return (
        'Undefined' === b ||
        (c(m) && l(h)
            ? i(c, f, s, e, t, {
                  '[[Configurable]]': !!(g = ('[[Configurable]]' in h ? h : m)['[[Configurable]]']),
                  '[[Enumerable]]': !!(E = ('[[Enumerable]]' in h ? h : m)['[[Enumerable]]']),
                  '[[Get]]': ('[[Get]]' in h ? h : m)['[[Get]]'],
                  '[[Set]]': ('[[Set]]' in h ? h : m)['[[Set]]']
              })
            : l(m) && c(h)
              ? i(c, f, s, e, t, {
                    '[[Configurable]]': !!(g = ('[[Configurable]]' in h ? h : m)['[[Configurable]]']),
                    '[[Enumerable]]': !!(E = ('[[Enumerable]]' in h ? h : m)['[[Enumerable]]']),
                    '[[Value]]': ('[[Value]]' in h ? h : m)['[[Value]]'],
                    '[[Writable]]': !!('[[Writable]]' in h ? h : m)['[[Writable]]']
                })
              : i(c, f, s, e, t, h))
    );
};
