var t = /\w*$/;
e.exports = function (e) {
    var n = new e.constructor(e.source, t.exec(e));
    return (n.lastIndex = e.lastIndex), n;
};
