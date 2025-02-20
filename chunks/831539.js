n(771008);
var r = n(327192),
    i = n(141603),
    o = n(875604),
    a = n(194085),
    s = Array.prototype,
    l = {
        DOMTokenList: !0,
        NodeList: !0
    };
e.exports = function (e) {
    var t = e.entries;
    return e === s || (o(s, e) && t === s.entries) || i(l, r(e)) ? a : t;
};
