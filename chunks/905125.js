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
    p = n(632384);
e.exports = function (e, t, n, _, h) {
    var m,
        g,
        E = p(e);
    if ('Undefined' !== E && 'Object' !== E) throw new r('Assertion failed: O must be undefined or an Object');
    if (!d(t)) throw new r('Assertion failed: P must be a Property Key');
    if ('Boolean' !== p(n)) throw new r('Assertion failed: extensible must be a Boolean');
    if (
        !a(
            {
                Type: p,
                IsDataDescriptor: c,
                IsAccessorDescriptor: l
            },
            _
        )
    )
        throw new r('Assertion failed: Desc must be a Property Descriptor');
    if (
        'Undefined' !== p(h) &&
        !a(
            {
                Type: p,
                IsDataDescriptor: c,
                IsAccessorDescriptor: l
            },
            h
        )
    )
        throw new r('Assertion failed: current must be a Property Descriptor, or undefined');
    if ('Undefined' === p(h))
        return (
            !!n &&
            ('Undefined' === E ||
                (l(_)
                    ? i(c, f, s, e, t, _)
                    : i(c, f, s, e, t, {
                          '[[Configurable]]': !!_['[[Configurable]]'],
                          '[[Enumerable]]': !!_['[[Enumerable]]'],
                          '[[Value]]': _['[[Value]]'],
                          '[[Writable]]': !!_['[[Writable]]']
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
        if (('[[Configurable]]' in _ && _['[[Configurable]]']) || ('[[Enumerable]]' in _ && !f(_['[[Enumerable]]'], h['[[Enumerable]]'])) || (!u(_) && !f(l(_), l(h)))) return !1;
        if (l(h)) {
            if (('[[Get]]' in _ && !f(_['[[Get]]'], h['[[Get]]'])) || ('[[Set]]' in _ && !f(_['[[Set]]'], h['[[Set]]']))) return !1;
        } else if (!h['[[Writable]]'] && (('[[Writable]]' in _ && _['[[Writable]]']) || ('[[Value]]' in _ && !f(_['[[Value]]'], h['[[Value]]'])))) return !1;
    }
    return (
        'Undefined' === E ||
        (c(h) && l(_)
            ? i(c, f, s, e, t, {
                  '[[Configurable]]': !!(m = ('[[Configurable]]' in _ ? _ : h)['[[Configurable]]']),
                  '[[Enumerable]]': !!(g = ('[[Enumerable]]' in _ ? _ : h)['[[Enumerable]]']),
                  '[[Get]]': ('[[Get]]' in _ ? _ : h)['[[Get]]'],
                  '[[Set]]': ('[[Set]]' in _ ? _ : h)['[[Set]]']
              })
            : l(h) && c(_)
              ? i(c, f, s, e, t, {
                    '[[Configurable]]': !!(m = ('[[Configurable]]' in _ ? _ : h)['[[Configurable]]']),
                    '[[Enumerable]]': !!(g = ('[[Enumerable]]' in _ ? _ : h)['[[Enumerable]]']),
                    '[[Value]]': ('[[Value]]' in _ ? _ : h)['[[Value]]'],
                    '[[Writable]]': !!('[[Writable]]' in _ ? _ : h)['[[Writable]]']
                })
              : i(c, f, s, e, t, _))
    );
};
