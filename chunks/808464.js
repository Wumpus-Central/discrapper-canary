r.d(t, { W: () => _ });
var n = r(690889),
    a = r(390873),
    i = r(250962);
function o(e, t) {
    let r;
    return (0, n.gv)(e, (e, n) => (t.includes(n) && (r = Array.isArray(e) ? e[1] : void 0), !!r)), r;
}
function _(e, t) {
    return (r) => {
        let _ = e(r),
            s = new Map();
        function c(t, n) {
            let _ = n ? `${t}:${n}` : t,
                c = s.get(_);
            if (!c) {
                let E = (0, a.U4)(t);
                if (!E) return;
                let l = (0, i.U)(E, r.tunnel);
                (c = n
                    ? ((t) => {
                          let r = e(t);
                          return {
                              ...r,
                              send: async (e) => {
                                  let t = o(e, ["event", "transaction", "profile", "replay_event"]);
                                  return t && (t.release = n), r.send(e);
                              },
                          };
                      })({
                          ...r,
                          url: l,
                      })
                    : e({
                          ...r,
                          url: l,
                      })),
                    s.set(_, c);
            }
            return [t, c];
        }
        return {
            send: async function (e) {
                let r = t({
                        envelope: e,
                        getEvent: function (t) {
                            return o(e, t && t.length ? t : ["event"]);
                        },
                    })
                        .map((e) => ("string" == typeof e ? c(e, void 0) : c(e.dsn, e.release)))
                        .filter((e) => !!e),
                    a = r.length ? r : [["", _]];
                return (
                    await Promise.all(
                        a.map(([t, r]) =>
                            r.send(
                                (0, n.Jd)(
                                    t
                                        ? {
                                              ...e[0],
                                              dsn: t,
                                          }
                                        : e[0],
                                    e[1],
                                ),
                            ),
                        ),
                    )
                )[0];
            },
            flush: async function (e) {
                let t = [...s.values(), _];
                return (await Promise.all(t.map((t) => t.flush(e)))).every((e) => e);
            },
        };
    };
}
