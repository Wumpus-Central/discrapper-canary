var r = n(578795),
    i = n(624443),
    a = n(994665),
    s = 200;
e.exports = function (e, t) {
    var n = this.__data__;
    if (n instanceof r) {
        var o = n.__data__;
        if (!i || o.length < s - 1) return o.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new a(o);
    }
    return n.set(e, t), (this.size = n.size), this;
};
