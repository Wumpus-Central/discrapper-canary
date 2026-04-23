"use strict";
n.d(t, { $: () => a });
var l = n(989349),
    i = n.n(l),
    s = n(985018);
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.intl.string(s.t.Yl1D84),
        l = i().duration(e, "seconds");
    return l.days() > 0
        ? s.intl.formatToPlainString(t ? s.t.GBLpQ8 : s.t["k2UNz+"], { days: l.days() })
        : l.hours() > 0
          ? s.intl.formatToPlainString(t ? s.t.rhY1Rs : s.t.xCjYxK, { hours: l.hours() })
          : l.minutes() > 0
            ? s.intl.formatToPlainString(t ? s.t["XIGt+W"] : s.t.iXLF9W, { minutes: l.minutes() })
            : e > 0
              ? s.intl.formatToPlainString(t ? s.t.pyvjRp : s.t.geSp4K, { seconds: l.seconds() })
              : t
                ? s.intl.string(s.t.Yl1D84)
                : n;
}
