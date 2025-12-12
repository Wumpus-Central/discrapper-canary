n.d(t, { v: () => l });
var r = n(82255),
    i = n(509440),
    a = n(343573),
    o = n(98076),
    _ = n(431660),
    s = n(549040),
    c = n(889929),
    E = n(556127);
function l(e) {
    let t;
    (0, E.x5)(e) && (t = 1000 * (0, a.ph)());
    let n = (0, E.Ei)();
    if (!n) return;
    s.X && o.kg.log(`[Profiling] started profiling span: ${((0, r.XU))(e).description}`);
    let l = (0, _.DM)();
    async function u() {
        if (e && n)
            return n
                .stop()
                .then((t) => {
                    if (
                        (d && (c.m9.clearTimeout(d), (d = void 0)),
                        s.X && o.kg.log(`[Profiling] stopped profiling of span: ${((0, r.XU))(e).description}`),
                        !t)
                    ) {
                        s.X &&
                            o.kg.log(
                                `[Profiling] profiler returned null profile for: ${((0, r.XU))(e).description}`,
                                "this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started",
                            );
                        return;
                    }
                    (0, E.dz)(l, t);
                })
                .catch((e) => {
                    s.X && o.kg.log("[Profiling] error while stopping profiler:", e);
                });
    }
    (0, i.nZ)().setContext("profile", {
        profile_id: l,
        start_timestamp: t,
    });
    let d = c.m9.setTimeout(() => {
            s.X &&
                o.kg.log("[Profiling] max profile duration elapsed, stopping profiling for:", (0, r.XU)(e).description),
                u();
        }, E.WU),
        p = e.end.bind(e);
    e.end = function () {
        return e
            ? (u().then(
                  () => {
                      p();
                  },
                  () => {
                      p();
                  },
              ),
              e)
            : p();
    };
}
