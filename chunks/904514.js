"use strict";
n.d(t, { A: () => c });
var r = n(391898),
    i = n(114922),
    s = n(531857),
    a = n(985307),
    o = n(586538),
    l = n(327854),
    u = n(222367);
let c = (function () {
    function e(e) {
        this.options = e;
    }
    return (
        (e.prototype.rebuild = function (e, t) {
            var n = this.options;
            if (
                (e !== this.lastyear && (this.yearinfo = (0, s.N)(e, n)),
                (0, r.z2)(n.bynweekday) && (t !== this.lastmonth || e !== this.lastyear))
            ) {
                var i = this.yearinfo,
                    l = i.yearlen,
                    u = i.mrange,
                    c = i.wdaymask;
                this.monthinfo = (0, a.W)(e, t, l, u, c, n);
            }
            (0, r.Wo)(n.byeaster) && (this.eastermask = (0, o.H)(e, n.byeaster));
        }),
        Object.defineProperty(e.prototype, "lastyear", {
            get: function () {
                return this.monthinfo ? this.monthinfo.lastyear : null;
            },
            enumerable: !1,
            configurable: !0,
        }),
        Object.defineProperty(e.prototype, "lastmonth", {
            get: function () {
                return this.monthinfo ? this.monthinfo.lastmonth : null;
            },
            enumerable: !1,
            configurable: !0,
        }),
        Object.defineProperty(e.prototype, "yearlen", {
            get: function () {
                return this.yearinfo.yearlen;
            },
            enumerable: !1,
            configurable: !0,
        }),
        Object.defineProperty(e.prototype, "yearordinal", {
            get: function () {
                return this.yearinfo.yearordinal;
            },
            enumerable: !1,
            configurable: !0,
        }),
        Object.defineProperty(e.prototype, "mrange", {
            get: function () {
                return this.yearinfo.mrange;
            },
            enumerable: !1,
            configurable: !0,
        }),
        Object.defineProperty(e.prototype, "wdaymask", {
            get: function () {
                return this.yearinfo.wdaymask;
            },
            enumerable: !1,
            configurable: !0,
        }),
        Object.defineProperty(e.prototype, "mmask", {
            get: function () {
                return this.yearinfo.mmask;
            },
            enumerable: !1,
            configurable: !0,
        }),
        Object.defineProperty(e.prototype, "wnomask", {
            get: function () {
                return this.yearinfo.wnomask;
            },
            enumerable: !1,
            configurable: !0,
        }),
        Object.defineProperty(e.prototype, "nwdaymask", {
            get: function () {
                return this.monthinfo ? this.monthinfo.nwdaymask : [];
            },
            enumerable: !1,
            configurable: !0,
        }),
        Object.defineProperty(e.prototype, "nextyearlen", {
            get: function () {
                return this.yearinfo.nextyearlen;
            },
            enumerable: !1,
            configurable: !0,
        }),
        Object.defineProperty(e.prototype, "mdaymask", {
            get: function () {
                return this.yearinfo.mdaymask;
            },
            enumerable: !1,
            configurable: !0,
        }),
        Object.defineProperty(e.prototype, "nmdaymask", {
            get: function () {
                return this.yearinfo.nmdaymask;
            },
            enumerable: !1,
            configurable: !0,
        }),
        (e.prototype.ydayset = function () {
            return [(0, r.y1)(this.yearlen), 0, this.yearlen];
        }),
        (e.prototype.mdayset = function (e, t) {
            for (var n = this.mrange[t - 1], i = this.mrange[t], s = (0, r.ux)(null, this.yearlen), a = n; a < i; a++)
                s[a] = a;
            return [s, n, i];
        }),
        (e.prototype.wdayset = function (e, t, n) {
            for (
                var i = (0, r.ux)(null, this.yearlen + 7),
                    s = (0, u.ZO)((0, u.w$)(e, t, n)) - this.yearordinal,
                    a = s,
                    o = 0;
                o < 7 && ((i[s] = s), ++s, this.wdaymask[s] !== this.options.wkst);
                o++
            );
            return [i, a, s];
        }),
        (e.prototype.ddayset = function (e, t, n) {
            var i = (0, r.ux)(null, this.yearlen),
                s = (0, u.ZO)((0, u.w$)(e, t, n)) - this.yearordinal;
            return (i[s] = s), [i, s, s + 1];
        }),
        (e.prototype.htimeset = function (e, t, n, r) {
            var i = this,
                s = [];
            return (
                this.options.byminute.forEach(function (t) {
                    s = s.concat(i.mtimeset(e, t, n, r));
                }),
                (0, u.di)(s),
                s
            );
        }),
        (e.prototype.mtimeset = function (e, t, n, r) {
            var i = this.options.bysecond.map(function (n) {
                return new l.g(e, t, n, r);
            });
            return (0, u.di)(i), i;
        }),
        (e.prototype.stimeset = function (e, t, n, r) {
            return [new l.g(e, t, n, r)];
        }),
        (e.prototype.getdayset = function (e) {
            switch (e) {
                case i.j.YEARLY:
                    return this.ydayset.bind(this);
                case i.j.MONTHLY:
                    return this.mdayset.bind(this);
                case i.j.WEEKLY:
                    return this.wdayset.bind(this);
                case i.j.DAILY:
                default:
                    return this.ddayset.bind(this);
            }
        }),
        (e.prototype.gettimeset = function (e) {
            switch (e) {
                case i.j.HOURLY:
                    return this.htimeset.bind(this);
                case i.j.MINUTELY:
                    return this.mtimeset.bind(this);
                case i.j.SECONDLY:
                    return this.stimeset.bind(this);
            }
        }),
        e
    );
})();
