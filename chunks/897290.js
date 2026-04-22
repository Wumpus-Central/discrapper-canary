n.d(t, { A: () => s });
var i = n(853922),
    l = n(985018);
function s(e) {
    return {
        isApplicationRejected: e?.latestRequest?.state === i.h.REJECTED,
        requestCooldownDuration: (function (e) {
            if (null == e) return;
            let t = Date.parse(e),
                n = Date.now();
            if (isNaN(t) || t < n) return;
            let i = Math.round((t - n) / 6e4),
                s = (e) => Math.round(i / e);
            return i >= 43200
                ? l.intl.formatToPlainString(l.t.kridzK, { months: s(43200) })
                : i >= 10080
                  ? l.intl.formatToPlainString(l.t.EmoBD2, { weeks: s(10080) })
                  : i >= 1440
                    ? l.intl.formatToPlainString(l.t["k2UNz+"], { days: s(1440) })
                    : i >= 60
                      ? l.intl.formatToPlainString(l.t.xCjYxK, { hours: s(60) })
                      : l.intl.formatToPlainString(l.t.iXLF9W, { minutes: i });
        })(e?.rejection?.can_reapply_at),
    };
}
