n.d(t, {
    A: () => E,
});
var r = n(349941),
    i = n(406935),
    a = n(535586),
    s = n(594061),
    o = n(461213),
    l = n(954571),
    c = n(427262),
    u = n(146901),
    d = n(652215),
    f = n(985018);

function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}

function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function g(e, t) {
    let n = (0, c.MU)(e);
    if ("0" === t)
        return f.intl.formatToPlainString(f.t.dO2aLi, {
            statusLabel: n,
        });
    let { kind: r, dateString: i, timeString: a } = (0, u._)(t);
    return "today" === r
        ? f.intl.formatToPlainString(f.t["r50t/S"], {
              statusLabel: n,
              timeString: a,
          })
        : f.intl.formatToPlainString(f.t["J+GJHv"], {
              statusLabel: n,
              dateString: i,
              timeString: a,
          });
}
async function E(e) {
    let { nextStatus: t, prevStatus: n, analyticsContext: c, durationMillis: u, disableTracking: f = !1 } = e;
    null == n && (n = o.A.getStatus());
    let p = null != u ? "".concat(Date.now() + u) : "0";
    await s.wc.updateAsync(
        "status",
        (e) => {
            (e.status = i.hU.create({
                value: t,
            })),
                (e.statusExpiresAtMs = p),
                (e.statusCreatedAtMs =
                    n === t && null != e.statusCreatedAtMs
                        ? e.statusCreatedAtMs
                        : i.ol.create({
                              value: "".concat(Date.now()),
                          }));
        },
        s.Sb.INFREQUENT_USER_ACTION,
    );
    let h = g(t, p);
    if ((r.OR.announce(h), f)) return;
    let E = _(
        {
            next_status: t,
            prev_status: n,
        },
        a.A.getGlobalStats(),
    );
    null != u &&
        (E = m(_({}, E), {
            expire_duration_minutes: null != u ? u / 6e4 : null,
        })),
        null != c && (E = _({}, E, c)),
        l.default.track(d.HAw.USER_STATUS_UPDATED, E);
}
