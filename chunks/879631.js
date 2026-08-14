n.d(t, { $: () => s });
var i = n(989349),
    l = n.n(i),
    a = n(375708);
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.intl.string(a.t.Yl1D84),
        i = l().duration(e, "seconds");
    return i.days() > 0
        ? a.intl.formatToPlainString(t ? a.t.GBLpQ8 : a.t["k2UNz+"], { days: i.days() })
        : i.hours() > 0
          ? a.intl.formatToPlainString(t ? a.t.rhY1Rs : a.t.xCjYxK, { hours: i.hours() })
          : i.minutes() > 0
            ? a.intl.formatToPlainString(t ? a.t["XIGt+W"] : a.t.iXLF9W, { minutes: i.minutes() })
            : e > 0
              ? a.intl.formatToPlainString(t ? a.t.pyvjRp : a.t.geSp4K, { seconds: i.seconds() })
              : t
                ? a.intl.string(a.t.Yl1D84)
                : n;
}
