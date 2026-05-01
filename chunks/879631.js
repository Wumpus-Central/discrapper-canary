n.d(t, { $: () => a });
var l = n(989349),
    s = n.n(l),
    i = n(985018);
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.intl.string(i.t.Yl1D84),
        l = s().duration(e, "seconds");
    return l.days() > 0
        ? i.intl.formatToPlainString(t ? i.t.GBLpQ8 : i.t["k2UNz+"], { days: l.days() })
        : l.hours() > 0
          ? i.intl.formatToPlainString(t ? i.t.rhY1Rs : i.t.xCjYxK, { hours: l.hours() })
          : l.minutes() > 0
            ? i.intl.formatToPlainString(t ? i.t["XIGt+W"] : i.t.iXLF9W, { minutes: l.minutes() })
            : e > 0
              ? i.intl.formatToPlainString(t ? i.t.pyvjRp : i.t.geSp4K, { seconds: l.seconds() })
              : t
                ? i.intl.string(i.t.Yl1D84)
                : n;
}
