var i = n(578795),
    r = n(624443),
    s = n(994665);
e.exports = function (e, t) {
    var n = this.__data__;
    if (n instanceof i) {
        var a = n.__data__;
        if (!r || a.length < 199) return a.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new s(a);
    }
    return n.set(e, t), (this.size = n.size), this;
};
