n.d(t, { M: () => r });
var i = n(695170),
    r = (function () {
        function e(e, t) {
            if (isNaN(e.getTime())) throw RangeError('Invalid date passed to DateWithZone');
            (this.date = e), (this.tzid = t);
        }
        return (
            Object.defineProperty(e.prototype, 'isUTC', {
                get: function () {
                    return !this.tzid || 'UTC' === this.tzid.toUpperCase();
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.toString = function () {
                var e = (0, i.Od)(this.date.getTime(), this.isUTC);
                return this.isUTC ? ':'.concat(e) : ';TZID='.concat(this.tzid, ':').concat(e);
            }),
            (e.prototype.getTime = function () {
                return this.date.getTime();
            }),
            (e.prototype.rezonedDate = function () {
                return this.isUTC ? this.date : (0, i.ZY)(this.date, this.tzid);
            }),
            e
        );
    })();
