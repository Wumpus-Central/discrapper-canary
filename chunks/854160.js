var r = n(970661),
    i = (function () {
        try {
            return !!Object.defineProperty({}, 'a', {});
        } catch (e) {
            return !1;
        }
    })();
i || Object.prototype.__defineGetter__;
var a = i
        ? Object.defineProperty
        : function (e, t, n) {
              'get' in n && e.__defineGetter__ ? e.__defineGetter__(t, n.get) : (!r.hop.call(e, t) || 'value' in n) && (e[t] = n.value);
          },
    o =
        Object.create ||
        function (e, t) {
            var n, i;
            function o() {}
            for (i in ((o.prototype = e), (n = new o()), t)) r.hop.call(t, i) && a(n, i, t[i]);
            return n;
        };
(t.defineProperty = a), (t.objCreate = o);
