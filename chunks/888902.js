t.exports = (function () {
    function t() {
        (this.dataPoints_ = []), (this.color_ = 'red'), (this.isVisible_ = !0), (this.cacheStartTime_ = null), (this.cacheStepSize_ = 0), (this.cacheValues_ = []);
    }
    function i(t, i) {
        (this.time = t), (this.value = i);
    }
    return (
        (t.prototype = {
            toJSON: function () {
                if (this.dataPoints_.length < 1) return {};
                for (var t = [], i = 0; i < this.dataPoints_.length; ++i) t.push(this.dataPoints_[i].value);
                return {
                    startTime: this.dataPoints_[0].time,
                    endTime: this.dataPoints_[this.dataPoints_.length - 1].time,
                    values: JSON.stringify(t)
                };
            },
            addPoint: function (t, e) {
                var s = new Date(t);
                this.dataPoints_.push(new i(s, e)), this.dataPoints_.length > 1000 && this.dataPoints_.shift();
            },
            setPoints: function (t) {
                let i = Math.max(0, t.length - 1000);
                this.dataPoints_ = t.slice(i);
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
            getValues: function (t, i, e) {
                return (this.cacheStartTime_ == t && this.cacheStepSize_ == i && this.cacheValues_.length == e) || ((this.cacheValues_ = this.getValuesInternal_(t, i, e)), (this.cacheStartTime_ = t), (this.cacheStepSize_ = i)), this.cacheValues_;
            },
            getValuesInternal_: function (t, i, e) {
                for (var s = [], a = 0, h = 0, n = t, r = 0; r < e; ++r) {
                    for (; a < this.dataPoints_.length && this.dataPoints_[a].time < n; ) (h = this.dataPoints_[a].value), ++a;
                    (s[r] = h), (n += i);
                }
                return s;
            }
        }),
        t
    );
})();
