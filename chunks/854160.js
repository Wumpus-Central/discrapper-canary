var i = n(970661),
    r = (function () {
        try {
            return !!Object.defineProperty({}, 'a', {});
        } catch (e) {
            return !1;
        }
    })();
r || Object.prototype.__defineGetter__;
var a = r
        ? Object.defineProperty
        : function (e, t, n) {
              'get' in n && e.__defineGetter__ ? e.__defineGetter__(t, n.get) : (!i.hop.call(e, t) || 'value' in n) && (e[t] = n.value);
          },
    s =
        Object.create ||
        function (e, t) {
            var n, r;
            function s() {}
            for (r in ((s.prototype = e), (n = new s()), t)) i.hop.call(t, r) && a(n, r, t[r]);
            return n;
        };
(t.defineProperty = a), (t.objCreate = s);
