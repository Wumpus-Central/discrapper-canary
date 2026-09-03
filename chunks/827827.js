n.d(t, { A: () => E });
var i = n(765178),
    r = n(406935),
    a = n(535586),
    s = n(594061),
    l = n(461213),
    o = n(174459),
    d = n(427262),
    c = n(146901),
    u = n(652215),
    _ = n(375708);
async function E(e) {
    let { nextStatus: t, prevStatus: n, analyticsContext: E, durationMillis: A, disableTracking: h = !1 } = e;
    null == n && (n = l.A.getStatus());
    let I = null != A ? `${Date.now() + A}` : "0";
    await s.wc.updateAsync(
        "status",
        (e) => {
            (e.status = r.hU.create({ value: t })),
                (e.statusExpiresAtMs = I),
                (e.statusCreatedAtMs =
                    n === t && null != e.statusCreatedAtMs
                        ? e.statusCreatedAtMs
                        : r.ol.create({ value: `${Date.now()}` }));
        },
        s.Sb.INFREQUENT_USER_ACTION,
    );
    let f = (function (e, t) {
        let n = (0, d.MU)(e);
        if ("0" === t) return _.intl.formatToPlainString(_.t.dO2aLi, { statusLabel: n });
        let { kind: i, dateString: r, timeString: a } = (0, c._)(t);
        return "today" === i
            ? _.intl.formatToPlainString(_.t["r50t/S"], { statusLabel: n, timeString: a })
            : _.intl.formatToPlainString(_.t["J+GJHv"], { statusLabel: n, dateString: r, timeString: a });
    })(t, I);
    if ((i.O.announce(f), h)) return;
    let p = { next_status: t, prev_status: n, ...a.A.getGlobalStats() };
    null != A && (p = { ...p, expire_duration_minutes: null != A ? A / 6e4 : null }),
        null != E && (p = { ...p, ...E }),
        o.default.track(u.HAw.USER_STATUS_UPDATED, p);
}
