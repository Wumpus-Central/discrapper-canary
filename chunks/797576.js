var r = n(212032);
e.exports = function (e, t) {
    var n = r(this, e),
        i = n.size;
    return n.set(e, t), (this.size += +(n.size != i)), this;
};
