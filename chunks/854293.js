function n(e) {
    return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
var r,
    i = "basil",
    a = function (e) {
        return 3 === e ? "v3" : e;
    },
    o = "https://js.stripe.com",
    s = "".concat(o, "/").concat(i, "/stripe.js"),
    l = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
    c = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/,
    u =
        "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
    d = function (e) {
        return l.test(e) || c.test(e);
    },
    f = function () {
        for (var e = document.querySelectorAll('script[src^="'.concat(o, '"]')), t = 0; t < e.length; t++) {
            var n = e[t];
            if (d(n.src)) return n;
        }
        return null;
    },
    p = function (e) {
        var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
            n = document.createElement("script");
        n.src = "".concat(s).concat(t);
        var r = document.head || document.body;
        if (!r) throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
        return r.appendChild(n), n;
    },
    _ = function (e, t) {
        e &&
            e._registerWrapper &&
            e._registerWrapper({
                name: "stripe-js",
                version: "7.3.1",
                startTime: t,
            });
    },
    m = null,
    h = null,
    g = null,
    E = function (e) {
        return function (t) {
            e(Error("Failed to load Stripe.js", { cause: t }));
        };
    },
    b = function (e, t) {
        return function () {
            window.Stripe ? e(window.Stripe) : t(Error("Stripe.js not available"));
        };
    },
    y = function (e) {
        return null !== m
            ? m
            : (m = new Promise(function (t, n) {
                  if ("undefined" == typeof window || "undefined" == typeof document) return void t(null);
                  if ((window.Stripe && e && console.warn(u), window.Stripe)) return void t(window.Stripe);
                  try {
                      var r,
                          i = f();
                      i && e
                          ? console.warn(u)
                          : i
                            ? i &&
                              null !== g &&
                              null !== h &&
                              (i.removeEventListener("load", g),
                              i.removeEventListener("error", h),
                              null == (r = i.parentNode) || r.removeChild(i),
                              (i = p(e)))
                            : (i = p(e)),
                          (g = b(t, n)),
                          (h = E(n)),
                          i.addEventListener("load", g),
                          i.addEventListener("error", h);
                  } catch (e) {
                      n(e);
                      return;
                  }
              })).catch(function (e) {
                  return (m = null), Promise.reject(e);
              });
    },
    O = function (e, t, n) {
        if (null === e) return null;
        var r = t[0].match(/^pk_test/),
            o = a(e.version),
            s = i;
        r &&
            o !== s &&
            console.warn(
                "Stripe.js@"
                    .concat(o, " was loaded on the page, but @stripe/stripe-js@")
                    .concat("7.3.1", " expected Stripe.js@")
                    .concat(
                        s,
                        ". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning",
                    ),
            );
        var l = e.apply(void 0, t);
        return _(l, n), l;
    },
    v = function (e) {
        var t =
            "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(
                JSON.stringify(e),
                "\n",
            );
        if (null === e || "object" !== n(e)) throw Error(t);
        if (1 === Object.keys(e).length && "boolean" == typeof e.advancedFraudSignals) return e;
        throw Error(t);
    },
    S = !1,
    I = function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        S = !0;
        var i = Date.now();
        return y(r).then(function (e) {
            return O(e, t, i);
        });
    };
(I.setLoadParameters = function (e) {
    if (
        !(
            S &&
            r &&
            Object.keys(v(e)).reduce(function (t, n) {
                var i;
                return t && e[n] === (null == (i = r) ? void 0 : i[n]);
            }, !0)
        )
    ) {
        if (S) throw Error("You cannot change load parameters after calling loadStripe");
        r = v(e);
    }
}),
    (t.loadStripe = I);
