var r = n(309943),
    i = n(102736);
e.exports = function (e) {
    var t = r.splitBlock(e.getCurrentContent(), e.getSelection());
    return i.push(e, t, "split-block");
};
