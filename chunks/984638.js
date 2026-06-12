e = n.nmd(e);
var i = n(527731),
    r = t && !t.nodeType && t,
    s = r && e && !e.nodeType && e,
    a = s && s.exports === r && i.process,
    o = (function () {
        try {
            var e = s && s.require && s.require("util").types;
            if (e) return e;
            return a && a.binding && a.binding("util");
        } catch (e) {}
    })();
e.exports = o;
