var i = r(690244),
    a = r(706165),
    o = r(478497)(),
    s = i('%TypeError%'),
    l = {
        assert: function (e, n) {
            if (!e || ('object' != typeof e && 'function' != typeof e)) throw new s('`O` is not an object');
            if ('string' != typeof n) throw new s('`slot` must be a string');
            if ((o.assert(e), !l.has(e, n))) throw new s('`' + n + '` is not present on `O`');
        },
        get: function (e, n) {
            if (!e || ('object' != typeof e && 'function' != typeof e)) throw new s('`O` is not an object');
            if ('string' != typeof n) throw new s('`slot` must be a string');
            var r = o.get(e);
            return r && r['$' + n];
        },
        has: function (e, n) {
            if (!e || ('object' != typeof e && 'function' != typeof e)) throw new s('`O` is not an object');
            if ('string' != typeof n) throw new s('`slot` must be a string');
            var r = o.get(e);
            return !!r && a(r, '$' + n);
        },
        set: function (e, n, r) {
            if (!e || ('object' != typeof e && 'function' != typeof e)) throw new s('`O` is not an object');
            if ('string' != typeof n) throw new s('`slot` must be a string');
            var i = o.get(e);
            !i && ((i = {}), o.set(e, i)), (i['$' + n] = r);
        }
    };
Object.freeze && Object.freeze(l), (e.exports = l);
