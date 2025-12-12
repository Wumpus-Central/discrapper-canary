n.d(t, { W: () => _ });
var r = n(690889),
    i = n(390873),
    a = n(250962);
function o(e, t) {
    let n;
    return (0, r.gv)(e, (e, r) => (t.includes(r) && (n = Array.isArray(e) ? e[1] : void 0), !!n)), n;
}
function _(e, t) {
    return (n) => {
        let _ = e(n),
            s = new Map();
        function c(t, r) {
            let _ = r ? `${t}:${r}` : t,
                c = s.get(_);
            if (!c) {
                let E = (0, i.U4)(t);
                if (!E) return;
                let l = (0, a.U)(E, n.tunnel);
                (c = r
                    ? ((t) => {
                          let n = e(t);
                          return {
                              ...n,
                              send: async (e) => {
                                  let t = o(e, ["event", "transaction", "profile", "replay_event"]);
                                  return t && (t.release = r), n.send(e);
                              },
                          };
                      })({
                          ...n,
                          url: l,
                      })
                    : e({
                          ...n,
                          url: l,
                      })),
                    s.set(_, c);
            }
            return [t, c];
        }
        return {
            send: async function (e) {
                let n = t({
                        envelope: e,
                        getEvent: function (t) {
                            return o(e, t && t.length ? t : ["event"]);
                        },
                    })
                        .map((e) => ("string" == typeof e ? c(e, void 0) : c(e.dsn, e.release)))
                        .filter((e) => !!e),
                    i = n.length ? n : [["", _]];
                return (
                    await Promise.all(
                        i.map(([t, n]) =>
                            n.send(
                                (0, r.Jd)(
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
