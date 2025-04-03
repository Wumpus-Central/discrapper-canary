var e = {
    isImage: function (t) {
        return 'image' === r(t)[0];
    },
    isJpeg: function (t) {
        var n = r(t);
        return e.isImage(t) && ('jpeg' === n[1] || 'pjpeg' === n[1]);
    }
};
function r(t) {
    return t.split('/');
}
t.exports = e;
