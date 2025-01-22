var i = r(970661),
    a = (function () {
        try {
            return !!Object.defineProperty({}, 'a', {});
        } catch (e) {
            return !1;
        }
    })();
a || Object.prototype.__defineGetter__;
var o = a
        ? Object.defineProperty
        : function (e, n, r) {
              'get' in r && e.__defineGetter__ ? e.__defineGetter__(n, r.get) : (!i.hop.call(e, n) || 'value' in r) && (e[n] = r.value);
          },
    s =
        Object.create ||
        function (e, n) {
            var r, a;
            function s() {}
            for (a in ((s.prototype = e), (r = new s()), n)) i.hop.call(n, a) && o(r, a, n[a]);
            return r;
        };
(n.defineProperty = o), (n.objCreate = s);
