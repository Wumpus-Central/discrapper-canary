var i = n(50613),
    r = i ? i.prototype : void 0,
    s = r ? r.valueOf : void 0;
e.exports = function (e) {
    return s ? Object(s.call(e)) : {};
};
