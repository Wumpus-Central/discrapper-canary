t.exports = (function () {
    function t() {
        (this.dataPoints_ = []),
            (this.color_ = "red"),
            (this.isVisible_ = !0),
            (this.cacheStartTime_ = null),
            (this.cacheStepSize_ = 0),
            (this.cacheValues_ = []);
    }
    function e(t, e) {
        (this.time = t), (this.value = e);
    }
    return (
        (t.prototype = {
            toJSON: function () {
                if (this.dataPoints_.length < 1) return {};
                for (var t = [], e = 0; e < this.dataPoints_.length; ++e) t.push(this.dataPoints_[e].value);
                return {
                    startTime: this.dataPoints_[0].time,
                    endTime: this.dataPoints_[this.dataPoints_.length - 1].time,
                    values: JSON.stringify(t),
                };
            },
            addPoint: function (t, i) {
                var n = new Date(t);
                this.dataPoints_.push(new e(n, i)), this.dataPoints_.length > 1000 && this.dataPoints_.shift();
            },
            setPoints: function (t) {
                let e = Math.max(0, t.length - 1000);
                this.dataPoints_ = t.slice(e);
            },
            isVisible: function () {
                return this.isVisible_;
            },
            show: function (t) {
                this.isVisible_ = t;
            },
            getColor: function () {
                return this.color_;
            },
            setColor: function (t) {
                this.color_ = t;
            },
            getCount: function () {
                return this.dataPoints_.length;
            },
            getValues: function (t, e, i) {
                return (
                    (this.cacheStartTime_ == t && this.cacheStepSize_ == e && this.cacheValues_.length == i) ||
                        ((this.cacheValues_ = this.getValuesInternal_(t, e, i)),
                        (this.cacheStartTime_ = t),
                        (this.cacheStepSize_ = e)),
                    this.cacheValues_
                );
            },
            getValuesInternal_: function (t, e, i) {
                for (var n = [], r = 0, a = 0, s = t, o = 0; o < i; ++o) {
                    for (; r < this.dataPoints_.length && this.dataPoints_[r].time < s; )
                        (a = this.dataPoints_[r].value), ++r;
                    (n[o] = a), (s += e);
                }
                return n;
            },
        }),
        t
    );
})();
