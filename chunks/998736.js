"use strict";
var t = function (e) {
    switch (typeof e) {
        case "string":
            return e;
        case "boolean":
            return e ? "true" : "false";
        case "number":
            return isFinite(e) ? e : "";
        default:
            return "";
    }
};
e.exports = function (e, r, n, o) {
    return ((r = r || "&"), (n = n || "="), null === e && (e = void 0), "object" == typeof e)
        ? Object.keys(e)
              .map(function (o) {
                  var i = encodeURIComponent(t(o)) + n;
                  return Array.isArray(e[o])
                      ? e[o]
                            .map(function (e) {
                                return i + encodeURIComponent(t(e));
                            })
                            .join(r)
                      : i + encodeURIComponent(t(e[o]));
              })
              .filter(Boolean)
              .join(r)
        : o
          ? encodeURIComponent(t(o)) + n + encodeURIComponent(t(e))
          : "";
};
