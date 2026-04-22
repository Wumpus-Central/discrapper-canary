"use strict";
n.d(t, { A: () => c });
var r = n(559374),
    i = n(619881),
    s = n(175924),
    a = n(444746),
    o = n(439776),
    l = n(543894),
    u = n(205219);
function d(e) {
    return (0, a.sb)(e) && "fixed" !== (0, s.A)(e).position ? e.offsetParent : null;
}
function c(e) {
    for (var t = (0, r.A)(e), n = d(e); n && (0, o.A)(n) && "static" === (0, s.A)(n).position; ) n = d(n);
    return n && ("html" === (0, i.A)(n) || ("body" === (0, i.A)(n) && "static" === (0, s.A)(n).position))
        ? t
        : n ||
              (function (e) {
                  var t = /firefox/i.test((0, u.A)());
                  if (/Trident/i.test((0, u.A)()) && (0, a.sb)(e) && "fixed" === (0, s.A)(e).position) return null;
                  var n = (0, l.A)(e);
                  for ((0, a.Ng)(n) && (n = n.host); (0, a.sb)(n) && 0 > ["html", "body"].indexOf((0, i.A)(n)); ) {
                      var r = (0, s.A)(n);
                      if (
                          "none" !== r.transform ||
                          "none" !== r.perspective ||
                          "paint" === r.contain ||
                          -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                          (t && "filter" === r.willChange) ||
                          (t && r.filter && "none" !== r.filter)
                      )
                          return n;
                      n = n.parentNode;
                  }
                  return null;
              })(e) ||
              t;
}
