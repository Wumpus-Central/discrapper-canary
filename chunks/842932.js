var r = n(50613),
    i = r ? r.prototype : void 0,
    a = i ? i.valueOf : void 0;
e.exports = function (e) {
    return a ? Object(a.call(e)) : {};
};
