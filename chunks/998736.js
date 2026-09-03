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
e.exports = function (e, r, n, i) {
    return ((r = r || "&"), (n = n || "="), null === e && (e = void 0), "object" == typeof e)
        ? Object.keys(e)
              .map(function (i) {
                  var o = encodeURIComponent(t(i)) + n;
                  return Array.isArray(e[i])
                      ? e[i]
                            .map(function (e) {
                                return o + encodeURIComponent(t(e));
                            })
                            .join(r)
                      : o + encodeURIComponent(t(e[i]));
              })
              .filter(Boolean)
              .join(r)
        : i
          ? encodeURIComponent(t(i)) + n + encodeURIComponent(t(e))
          : "";
};
