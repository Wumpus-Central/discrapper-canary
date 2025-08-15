var n = r(309943),
    i = r(102736);
t.exports = function (t) {
    var e = n.splitBlock(t.getCurrentContent(), t.getSelection());
    return i.push(t, e, "split-block");
};
