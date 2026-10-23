n.d(t, { $: () => r });
var l = n(536637),
    i = n.n(l),
    a = n(105292);
function r(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.intl.string(a.t.Yl1D84),
        l = i().duration(e, "seconds");
    return l.days() > 0
        ? a.intl.formatToPlainString(t ? a.t.GBLpQ8 : a.t["k2UNz+"], { days: l.days() })
        : l.hours() > 0
          ? a.intl.formatToPlainString(t ? a.t.rhY1Rs : a.t.xCjYxK, { hours: l.hours() })
          : l.minutes() > 0
            ? a.intl.formatToPlainString(t ? a.t["XIGt+W"] : a.t.iXLF9W, { minutes: l.minutes() })
            : e > 0
              ? a.intl.formatToPlainString(t ? a.t.pyvjRp : a.t.geSp4K, { seconds: l.seconds() })
              : t
                ? a.intl.string(a.t.Yl1D84)
                : n;
}
