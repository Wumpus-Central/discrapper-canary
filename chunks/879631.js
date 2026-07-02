n.d(t, { $: () => a });
var i = n(989349),
    s = n.n(i),
    l = n(375708);
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.intl.string(l.t.Yl1D84),
        i = s().duration(e, "seconds");
    return i.days() > 0
        ? l.intl.formatToPlainString(t ? l.t.GBLpQ8 : l.t["k2UNz+"], { days: i.days() })
        : i.hours() > 0
          ? l.intl.formatToPlainString(t ? l.t.rhY1Rs : l.t.xCjYxK, { hours: i.hours() })
          : i.minutes() > 0
            ? l.intl.formatToPlainString(t ? l.t["XIGt+W"] : l.t.iXLF9W, { minutes: i.minutes() })
            : e > 0
              ? l.intl.formatToPlainString(t ? l.t.pyvjRp : l.t.geSp4K, { seconds: i.seconds() })
              : t
                ? l.intl.string(l.t.Yl1D84)
                : n;
}
