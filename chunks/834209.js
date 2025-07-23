n.d(t, { Z: () => o });
var r = n(706454);
function o(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {
                  month: 'numeric',
                  day: 'numeric'
              };
    return new Date(e).toLocaleDateString(r.default.locale, t);
}
