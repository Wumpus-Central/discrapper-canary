var i = r(686942),
    a = r(707908),
    o = r(747337),
    s = r(117089),
    l = r(109766),
    u = r(68808),
    c = r(695170),
    d = (function () {
        function e(e) {
            this.options = e;
        }
        return (
            (e.prototype.rebuild = function (e, n) {
                var r = this.options;
                if ((e !== this.lastyear && (this.yearinfo = (0, o.h)(e, r)), (0, i.Dw)(r.bynweekday) && (n !== this.lastmonth || e !== this.lastyear))) {
                    var a = this.yearinfo,
                        u = a.yearlen,
                        c = a.mrange,
                        d = a.wdaymask;
                    this.monthinfo = (0, s.D)(e, n, u, c, d, r);
                }
                (0, i.EN)(r.byeaster) && (this.eastermask = (0, l.d)(e, r.byeaster));
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
            (e.prototype.mdayset = function (e, n) {
                for (var r = this.mrange[n - 1], a = this.mrange[n], o = (0, i.rx)(null, this.yearlen), s = r; s < a; s++) o[s] = s;
                return [o, r, a];
            }),
            (e.prototype.wdayset = function (e, n, r) {
                for (var a = (0, i.rx)(null, this.yearlen + 7), o = (0, c.fv)((0, c.t2)(e, n, r)) - this.yearordinal, s = o, l = 0; l < 7 && ((a[o] = o), ++o, this.wdaymask[o] !== this.options.wkst); l++);
                return [a, s, o];
            }),
            (e.prototype.ddayset = function (e, n, r) {
                var a = (0, i.rx)(null, this.yearlen),
                    o = (0, c.fv)((0, c.t2)(e, n, r)) - this.yearordinal;
                return (a[o] = o), [a, o, o + 1];
            }),
            (e.prototype.htimeset = function (e, n, r, i) {
                var a = this,
                    o = [];
                return (
                    this.options.byminute.forEach(function (n) {
                        o = o.concat(a.mtimeset(e, n, r, i));
                    }),
                    (0, c.DY)(o),
                    o
                );
            }),
            (e.prototype.mtimeset = function (e, n, r, i) {
                var a = this.options.bysecond.map(function (r) {
                    return new u.q(e, n, r, i);
                });
                return (0, c.DY)(a), a;
            }),
            (e.prototype.stimeset = function (e, n, r, i) {
                return [new u.q(e, n, r, i)];
            }),
            (e.prototype.getdayset = function (e) {
                switch (e) {
                    case a.D.YEARLY:
                        return this.ydayset.bind(this);
                    case a.D.MONTHLY:
                        return this.mdayset.bind(this);
                    case a.D.WEEKLY:
                        return this.wdayset.bind(this);
                    case a.D.DAILY:
                    default:
                        return this.ddayset.bind(this);
                }
            }),
            (e.prototype.gettimeset = function (e) {
                switch (e) {
                    case a.D.HOURLY:
                        return this.htimeset.bind(this);
                    case a.D.MINUTELY:
                        return this.mtimeset.bind(this);
                    case a.D.SECONDLY:
                        return this.stimeset.bind(this);
                }
            }),
            e
        );
    })();
n.Z = d;
