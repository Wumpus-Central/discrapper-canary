n.d(t, {
    A: () => s,
});
var r = n(253932),
    i = n(430452),
    a = n(824744);

function s(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (() => {
                  var e, t;
                  return null != (e = null == (t = r.dG.getSetting()) ? void 0 : t.volume) ? e : 100;
              })();
    return Math.min(e * ((0, a.M)(t) / 100) * Math.min(i.A.getOutputVolume() / 100, 1), 1);
}
