"use strict";
n.d(t, { A: () => l });
var i = n(853922),
    s = n(985018);
function l(e) {
    return {
        isApplicationRejected: e?.latestRequest?.state === i.h.REJECTED,
        requestCooldownDuration: (function (e) {
            if (null == e) return;
            let t = Date.parse(e),
                n = Date.now();
            if (isNaN(t) || t < n) return;
            let i = Math.round((t - n) / 6e4),
                l = (e) => Math.round(i / e);
            return i >= 43200
                ? s.intl.formatToPlainString(s.t.kridzK, { months: l(43200) })
                : i >= 10080
                  ? s.intl.formatToPlainString(s.t.EmoBD2, { weeks: l(10080) })
                  : i >= 1440
                    ? s.intl.formatToPlainString(s.t["k2UNz+"], { days: l(1440) })
                    : i >= 60
                      ? s.intl.formatToPlainString(s.t.xCjYxK, { hours: l(60) })
                      : s.intl.formatToPlainString(s.t.iXLF9W, { minutes: i });
        })(e?.rejection?.can_reapply_at),
    };
}
