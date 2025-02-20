t.exports = function (t) {
    var e = this.has(t) && delete this.__data__[t];
    return (this.size -= +!!e), e;
};
