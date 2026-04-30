"use strict";
n.d(t, { $: () => a });
var i = n(989349),
    r = n.n(i),
    s = n(375708);
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.intl.string(s.t.Yl1D84),
        i = r().duration(e, "seconds");
    return i.days() > 0
        ? s.intl.formatToPlainString(t ? s.t.GBLpQ8 : s.t["k2UNz+"], { days: i.days() })
        : i.hours() > 0
          ? s.intl.formatToPlainString(t ? s.t.rhY1Rs : s.t.xCjYxK, { hours: i.hours() })
          : i.minutes() > 0
            ? s.intl.formatToPlainString(t ? s.t["XIGt+W"] : s.t.iXLF9W, { minutes: i.minutes() })
            : e > 0
              ? s.intl.formatToPlainString(t ? s.t.pyvjRp : s.t.geSp4K, { seconds: i.seconds() })
              : t
                ? s.intl.string(s.t.Yl1D84)
                : n;
}
