e.exports = (function () {
    "use strict";
    function e() {
        (this.dataPoints_ = []),
            (this.color_ = "red"),
            (this.isVisible_ = !0),
            (this.cacheStartTime_ = null),
            (this.cacheStepSize_ = 0),
            (this.cacheValues_ = []);
    }
    function t(e, t) {
        (this.time = e), (this.value = t);
    }
    return (
        (e.prototype = {
            toJSON: function () {
                if (this.dataPoints_.length < 1) return {};
                for (var e = [], t = 0; t < this.dataPoints_.length; ++t) e.push(this.dataPoints_[t].value);
                return {
                    startTime: this.dataPoints_[0].time,
                    endTime: this.dataPoints_[this.dataPoints_.length - 1].time,
                    values: JSON.stringify(e),
                };
            },
            addPoint: function (e, n) {
                var i = new Date(e);
                this.dataPoints_.push(new t(i, n)), this.dataPoints_.length > 1e3 && this.dataPoints_.shift();
            },
            setPoints: function (e) {
                let t = Math.max(0, e.length - 1e3);
                this.dataPoints_ = e.slice(t);
            },
            isVisible: function () {
                return this.isVisible_;
            },
            show: function (e) {
                this.isVisible_ = e;
            },
            getColor: function () {
                return this.color_;
            },
            setColor: function (e) {
                this.color_ = e;
            },
            getCount: function () {
                return this.dataPoints_.length;
            },
            getValues: function (e, t, n) {
                return (
                    (this.cacheStartTime_ == e && this.cacheStepSize_ == t && this.cacheValues_.length == n) ||
                        ((this.cacheValues_ = this.getValuesInternal_(e, t, n)),
                        (this.cacheStartTime_ = e),
                        (this.cacheStepSize_ = t)),
                    this.cacheValues_
                );
            },
            getValuesInternal_: function (e, t, n) {
                for (var i = [], r = 0, s = 0, a = e, o = 0; o < n; ++o) {
                    for (; r < this.dataPoints_.length && this.dataPoints_[r].time < a; )
                        (s = this.dataPoints_[r].value), ++r;
                    (i[o] = s), (a += t);
                }
                return i;
            },
        }),
        e
    );
})();
