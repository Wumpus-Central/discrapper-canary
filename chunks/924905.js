var t = {
    isImage: function (e) {
        return "image" === n(e)[0];
    },
    isJpeg: function (e) {
        var r = n(e);
        return t.isImage(e) && ("jpeg" === r[1] || "pjpeg" === r[1]);
    },
};

function n(e) {
    return e.split("/");
}
e.exports = t;
