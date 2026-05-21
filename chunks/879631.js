n.d(t, { $: () => a });
var s = n(989349),
    l = n.n(s),
    i = n(375708);
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.intl.string(i.t.Yl1D84),
        s = l().duration(e, "seconds");
    return s.days() > 0
        ? i.intl.formatToPlainString(t ? i.t.GBLpQ8 : i.t["k2UNz+"], { days: s.days() })
        : s.hours() > 0
          ? i.intl.formatToPlainString(t ? i.t.rhY1Rs : i.t.xCjYxK, { hours: s.hours() })
          : s.minutes() > 0
            ? i.intl.formatToPlainString(t ? i.t["XIGt+W"] : i.t.iXLF9W, { minutes: s.minutes() })
            : e > 0
              ? i.intl.formatToPlainString(t ? i.t.pyvjRp : i.t.geSp4K, { seconds: s.seconds() })
              : t
                ? i.intl.string(i.t.Yl1D84)
                : n;
}
