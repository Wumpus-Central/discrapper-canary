var i = n(690244),
    r = i('%TypeError%'),
    a = i('%SyntaxError%'),
    s = n(706165),
    o = n(73871),
    l = {
        'Property Descriptor': function (e) {
            var t = {
                '[[Configurable]]': !0,
                '[[Enumerable]]': !0,
                '[[Get]]': !0,
                '[[Set]]': !0,
                '[[Value]]': !0,
                '[[Writable]]': !0
            };
            if (!e) return !1;
            for (var n in e) if (s(e, n) && !t[n]) return !1;
            var i = s(e, '[[Value]]'),
                a = s(e, '[[Get]]') || s(e, '[[Set]]');
            if (i && a) throw new r('Property Descriptors may not be both accessor and data descriptors');
            return !0;
        },
        'Match Record': n(290951),
        'Iterator Record': function (e) {
            return s(e, '[[Iterator]]') && s(e, '[[NextMethod]]') && s(e, '[[Done]]');
        },
        'PromiseCapability Record': function (e) {
            return !!e && s(e, '[[Resolve]]') && 'function' == typeof e['[[Resolve]]'] && s(e, '[[Reject]]') && 'function' == typeof e['[[Reject]]'] && s(e, '[[Promise]]') && e['[[Promise]]'] && 'function' == typeof e['[[Promise]]'].then;
        },
        'AsyncGeneratorRequest Record': function (e) {
            return !!e && s(e, '[[Completion]]') && s(e, '[[Capability]]') && l['PromiseCapability Record'](e['[[Capability]]']);
        },
        'RegExp Record': function (e) {
            return e && s(e, '[[IgnoreCase]]') && 'boolean' == typeof e['[[IgnoreCase]]'] && s(e, '[[Multiline]]') && 'boolean' == typeof e['[[Multiline]]'] && s(e, '[[DotAll]]') && 'boolean' == typeof e['[[DotAll]]'] && s(e, '[[Unicode]]') && 'boolean' == typeof e['[[Unicode]]'] && s(e, '[[CapturingGroupsCount]]') && 'number' == typeof e['[[CapturingGroupsCount]]'] && o(e['[[CapturingGroupsCount]]']) && e['[[CapturingGroupsCount]]'] >= 0;
        }
    };
e.exports = function (e, t, n, i) {
    var s = l[t];
    if ('function' != typeof s) throw new a('unknown record type: ' + t);
    if ('Object' !== e(i) || !s(i)) throw new r(n + ' must be a ' + t);
};
