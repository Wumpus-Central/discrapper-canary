n.d(t, { $: () => s });
var l = n(989349),
    i = n.n(l),
    r = n(985018);
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.intl.string(r.t.Yl1D84),
        l = i().duration(e, "seconds");
    return l.days() > 0
        ? r.intl.formatToPlainString(t ? r.t.GBLpQ8 : r.t["k2UNz+"], { days: l.days() })
        : l.hours() > 0
          ? r.intl.formatToPlainString(t ? r.t.rhY1Rs : r.t.xCjYxK, { hours: l.hours() })
          : l.minutes() > 0
            ? r.intl.formatToPlainString(t ? r.t["XIGt+W"] : r.t.iXLF9W, { minutes: l.minutes() })
            : e > 0
              ? r.intl.formatToPlainString(t ? r.t.pyvjRp : r.t.geSp4K, { seconds: l.seconds() })
              : t
                ? r.intl.string(r.t.Yl1D84)
                : n;
}
