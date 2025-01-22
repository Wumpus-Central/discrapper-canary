r(771008);
var i = r(327192),
    a = r(141603),
    o = r(875604),
    s = r(194085),
    l = Array.prototype,
    u = {
        DOMTokenList: !0,
        NodeList: !0
    };
e.exports = function (e) {
    var n = e.entries;
    return e === l || (o(l, e) && n === l.entries) || a(u, i(e)) ? s : n;
};
