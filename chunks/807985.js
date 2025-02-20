var r = n(690244),
    i = r('%TypeError%'),
    o = r('%SyntaxError%'),
    a = n(706165),
    s = n(73871),
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
            for (var n in e) if (a(e, n) && !t[n]) return !1;
            var r = a(e, '[[Value]]'),
                o = a(e, '[[Get]]') || a(e, '[[Set]]');
            if (r && o) throw new i('Property Descriptors may not be both accessor and data descriptors');
            return !0;
        },
        'Match Record': n(290951),
        'Iterator Record': function (e) {
            return a(e, '[[Iterator]]') && a(e, '[[NextMethod]]') && a(e, '[[Done]]');
        },
        'PromiseCapability Record': function (e) {
            return !!e && a(e, '[[Resolve]]') && 'function' == typeof e['[[Resolve]]'] && a(e, '[[Reject]]') && 'function' == typeof e['[[Reject]]'] && a(e, '[[Promise]]') && e['[[Promise]]'] && 'function' == typeof e['[[Promise]]'].then;
        },
        'AsyncGeneratorRequest Record': function (e) {
            return !!e && a(e, '[[Completion]]') && a(e, '[[Capability]]') && l['PromiseCapability Record'](e['[[Capability]]']);
        },
        'RegExp Record': function (e) {
            return e && a(e, '[[IgnoreCase]]') && 'boolean' == typeof e['[[IgnoreCase]]'] && a(e, '[[Multiline]]') && 'boolean' == typeof e['[[Multiline]]'] && a(e, '[[DotAll]]') && 'boolean' == typeof e['[[DotAll]]'] && a(e, '[[Unicode]]') && 'boolean' == typeof e['[[Unicode]]'] && a(e, '[[CapturingGroupsCount]]') && 'number' == typeof e['[[CapturingGroupsCount]]'] && s(e['[[CapturingGroupsCount]]']) && e['[[CapturingGroupsCount]]'] >= 0;
        }
    };
e.exports = function (e, t, n, r) {
    var a = l[t];
    if ('function' != typeof a) throw new o('unknown record type: ' + t);
    if ('Object' !== e(r) || !a(r)) throw new i(n + ' must be a ' + t);
};
