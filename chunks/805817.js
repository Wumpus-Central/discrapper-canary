n.d(t, { Z: () => c });
var i = n(686942),
    r = n(707908),
    a = n(747337),
    s = n(117089),
    o = n(109766),
    l = n(68808),
    u = n(695170);
let c = (function () {
    function e(e) {
        this.options = e;
    }
    return (
        (e.prototype.rebuild = function (e, t) {
            var n = this.options;
            if ((e !== this.lastyear && (this.yearinfo = (0, a.h)(e, n)), (0, i.Dw)(n.bynweekday) && (t !== this.lastmonth || e !== this.lastyear))) {
                var r = this.yearinfo,
                    l = r.yearlen,
                    u = r.mrange,
                    c = r.wdaymask;
                this.monthinfo = (0, s.D)(e, t, l, u, c, n);
            }
            (0, i.EN)(n.byeaster) && (this.eastermask = (0, o.d)(e, n.byeaster));
        }),
        Object.defineProperty(e.prototype, 'lastyear', {
            get: function () {
                return this.monthinfo ? this.monthinfo.lastyear : null;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, 'lastmonth', {
            get: function () {
                return this.monthinfo ? this.monthinfo.lastmonth : null;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, 'yearlen', {
            get: function () {
                return this.yearinfo.yearlen;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, 'yearordinal', {
            get: function () {
                return this.yearinfo.yearordinal;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, 'mrange', {
            get: function () {
                return this.yearinfo.mrange;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, 'wdaymask', {
            get: function () {
                return this.yearinfo.wdaymask;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, 'mmask', {
            get: function () {
                return this.yearinfo.mmask;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, 'wnomask', {
            get: function () {
                return this.yearinfo.wnomask;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, 'nwdaymask', {
            get: function () {
                return this.monthinfo ? this.monthinfo.nwdaymask : [];
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, 'nextyearlen', {
            get: function () {
                return this.yearinfo.nextyearlen;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, 'mdaymask', {
            get: function () {
                return this.yearinfo.mdaymask;
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, 'nmdaymask', {
            get: function () {
                return this.yearinfo.nmdaymask;
            },
            enumerable: !1,
            configurable: !0
        }),
        (e.prototype.ydayset = function () {
            return [(0, i.w6)(this.yearlen), 0, this.yearlen];
        }),
        (e.prototype.mdayset = function (e, t) {
            for (var n = this.mrange[t - 1], r = this.mrange[t], a = (0, i.rx)(null, this.yearlen), s = n; s < r; s++) a[s] = s;
            return [a, n, r];
        }),
        (e.prototype.wdayset = function (e, t, n) {
            for (var r = (0, i.rx)(null, this.yearlen + 7), a = (0, u.fv)((0, u.t2)(e, t, n)) - this.yearordinal, s = a, o = 0; o < 7 && ((r[a] = a), ++a, this.wdaymask[a] !== this.options.wkst); o++);
            return [r, s, a];
        }),
        (e.prototype.ddayset = function (e, t, n) {
            var r = (0, i.rx)(null, this.yearlen),
                a = (0, u.fv)((0, u.t2)(e, t, n)) - this.yearordinal;
            return (r[a] = a), [r, a, a + 1];
        }),
        (e.prototype.htimeset = function (e, t, n, i) {
            var r = this,
                a = [];
            return (
                this.options.byminute.forEach(function (t) {
                    a = a.concat(r.mtimeset(e, t, n, i));
                }),
                (0, u.DY)(a),
                a
            );
        }),
        (e.prototype.mtimeset = function (e, t, n, i) {
            var r = this.options.bysecond.map(function (n) {
                return new l.q(e, t, n, i);
            });
            return (0, u.DY)(r), r;
        }),
        (e.prototype.stimeset = function (e, t, n, i) {
            return [new l.q(e, t, n, i)];
        }),
        (e.prototype.getdayset = function (e) {
            switch (e) {
                case r.D.YEARLY:
                    return this.ydayset.bind(this);
                case r.D.MONTHLY:
                    return this.mdayset.bind(this);
                case r.D.WEEKLY:
                    return this.wdayset.bind(this);
                case r.D.DAILY:
                default:
                    return this.ddayset.bind(this);
            }
        }),
        (e.prototype.gettimeset = function (e) {
            switch (e) {
                case r.D.HOURLY:
                    return this.htimeset.bind(this);
                case r.D.MINUTELY:
                    return this.mtimeset.bind(this);
                case r.D.SECONDLY:
                    return this.stimeset.bind(this);
            }
        }),
        e
    );
})();
