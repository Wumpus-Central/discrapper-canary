var a = r(910974),
    n = r(192379),
    o = r(247595);
function s(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, a = Array(t); r < t; r++) a[r] = e[r];
    return a;
}
function i(e, t) {
    var r = 0,
        a = !1;
    if (Number.isSafeInteger(e.size)) r = e.size;
    else {
        var n,
            o = (function (e, t) {
                var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                if (!r) {
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return s(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
                                if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(e, t);
                            }
                        })(e))
                    ) {
                        r && (e = r);
                        var a = 0,
                            n = function () {};
                        return {
                            s: n,
                            n: function () {
                                return a >= e.length
                                    ? { done: !0 }
                                    : {
                                          done: !1,
                                          value: e[a++]
                                      };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: n
                        };
                    }
                    throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                }
                var o,
                    i = !0,
                    c = !1;
                return {
                    s: function () {
                        r = r.call(e);
                    },
                    n: function () {
                        var e = r.next();
                        return (i = e.done), e;
                    },
                    e: function (e) {
                        (c = !0), (o = e);
                    },
                    f: function () {
                        try {
                            !i && null != r.return && r.return();
                        } finally {
                            if (c) throw o;
                        }
                    }
                };
            })(e);
        try {
            for (o.s(); !(n = o.n()).done; ) {
                if ((n.value, t && r + 1 > t)) {
                    a = !0;
                    break;
                }
                r += 1;
            }
        } catch (e) {
            o.e(e);
        } finally {
            o.f();
        }
    }
    return ''
        .concat(a ? '>' : '')
        .concat(r, ' ')
        .concat(1 !== r ? 'entries' : 'entry');
}
t.Z = function (e) {
    var t = (0, a.Z)({}, e);
    return n.createElement(
        o.Z,
        (0, a.Z)({}, t, {
            nodeType: 'Iterable',
            nodeTypeIndicator: '()',
            createItemString: i
        })
    );
};
