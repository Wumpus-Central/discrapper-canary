var r = n(690244),
    i = n(706165),
    o = n(478497)(),
    a = r('%TypeError%'),
    s = {
        assert: function (e, t) {
            if (!e || ('object' != typeof e && 'function' != typeof e)) throw new a('`O` is not an object');
            if ('string' != typeof t) throw new a('`slot` must be a string');
            if ((o.assert(e), !s.has(e, t))) throw new a('`' + t + '` is not present on `O`');
        },
        get: function (e, t) {
            if (!e || ('object' != typeof e && 'function' != typeof e)) throw new a('`O` is not an object');
            if ('string' != typeof t) throw new a('`slot` must be a string');
            var n = o.get(e);
            return n && n['$' + t];
        },
        has: function (e, t) {
            if (!e || ('object' != typeof e && 'function' != typeof e)) throw new a('`O` is not an object');
            if ('string' != typeof t) throw new a('`slot` must be a string');
            var n = o.get(e);
            return !!n && i(n, '$' + t);
        },
        set: function (e, t, n) {
            if (!e || ('object' != typeof e && 'function' != typeof e)) throw new a('`O` is not an object');
            if ('string' != typeof t) throw new a('`slot` must be a string');
            var r = o.get(e);
            r || ((r = {}), o.set(e, r)), (r['$' + t] = n);
        }
    };
Object.freeze && Object.freeze(s), (e.exports = s);
