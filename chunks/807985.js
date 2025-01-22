var i = r(690244),
    a = i('%TypeError%'),
    o = i('%SyntaxError%'),
    s = r(706165),
    l = r(73871),
    u = {
        'Property Descriptor': function (e) {
            var n = {
                '[[Configurable]]': !0,
                '[[Enumerable]]': !0,
                '[[Get]]': !0,
                '[[Set]]': !0,
                '[[Value]]': !0,
                '[[Writable]]': !0
            };
            if (!e) return !1;
            for (var r in e) if (s(e, r) && !n[r]) return !1;
            var i = s(e, '[[Value]]'),
                o = s(e, '[[Get]]') || s(e, '[[Set]]');
            if (i && o) throw new a('Property Descriptors may not be both accessor and data descriptors');
            return !0;
        },
        'Match Record': r(290951),
        'Iterator Record': function (e) {
            return s(e, '[[Iterator]]') && s(e, '[[NextMethod]]') && s(e, '[[Done]]');
        },
        'PromiseCapability Record': function (e) {
            return !!e && s(e, '[[Resolve]]') && 'function' == typeof e['[[Resolve]]'] && s(e, '[[Reject]]') && 'function' == typeof e['[[Reject]]'] && s(e, '[[Promise]]') && e['[[Promise]]'] && 'function' == typeof e['[[Promise]]'].then;
        },
        'AsyncGeneratorRequest Record': function (e) {
            return !!e && s(e, '[[Completion]]') && s(e, '[[Capability]]') && u['PromiseCapability Record'](e['[[Capability]]']);
        },
        'RegExp Record': function (e) {
            return e && s(e, '[[IgnoreCase]]') && 'boolean' == typeof e['[[IgnoreCase]]'] && s(e, '[[Multiline]]') && 'boolean' == typeof e['[[Multiline]]'] && s(e, '[[DotAll]]') && 'boolean' == typeof e['[[DotAll]]'] && s(e, '[[Unicode]]') && 'boolean' == typeof e['[[Unicode]]'] && s(e, '[[CapturingGroupsCount]]') && 'number' == typeof e['[[CapturingGroupsCount]]'] && l(e['[[CapturingGroupsCount]]']) && e['[[CapturingGroupsCount]]'] >= 0;
        }
    };
e.exports = function (e, n, r, i) {
    var s = u[n];
    if ('function' != typeof s) throw new o('unknown record type: ' + n);
    if ('Object' !== e(i) || !s(i)) throw new a(r + ' must be a ' + n);
};
