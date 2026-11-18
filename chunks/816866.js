let l;
(t(323874), t(14289), t(35956), t(321073));
var o = t(582128);
if (588245 != t.j) var n = t(462180);
var a = t(882035),
    s = t(121894),
    i = t(506774),
    c = t(858899),
    u = t(87558);
let f = "__DEBUG_PROFILE_EFFECTS_STORE",
    p = {
        profileEffects:
            null == (l = i.w.get(f)) || "object" != typeof l || Array.isArray(l)
                ? {}
                : Object.fromEntries(
                      Object.entries(l).map((e) => {
                          let [r, t] = e;
                          return [r, { ...t, effects: Array.isArray(t?.effects) ? t.effects : [] }];
                      }),
                  ),
    },
    v = (e) => {
        try {
            i.w.set(f, e.profileEffects);
        } catch (e) {
            (console.error(e),
                (0, c.P0)({
                    text: "This file is too large to save into localstorage. You will be able to view but not persist these changes.",
                    variant: "critical",
                }));
        }
    },
    m = (0, a.h)((e) => ({
        ...p,
        upsertProfileEffect: (r) =>
            (0, s.r)(() => {
                e((e) => {
                    let t = { ...e };
                    return ((t.profileEffects[r.skuId] = r), v(t), t);
                });
            }),
        deleteProfileEffect: (r) =>
            (0, s.r)(() => {
                e((e) => {
                    let t = { ...e };
                    return (delete t.profileEffects[r], v(t), t);
                });
            }),
        clearAll: () =>
            (0, s.r)(() => {
                e(() => (i.w.remove(f), { profileEffects: {} }));
            }),
    }));
t.d(
    r,
    {},
    {
        ZK: (e) => {
            let r = m((r) => (null != e ? r.profileEffects[e] : null)),
                t = o.useRef([]);
            return (
                o.useEffect(
                    () => () => {
                        (t.current.forEach((e) => {
                            URL.revokeObjectURL(e);
                        }),
                            (t.current = []));
                    },
                    [],
                ),
                o.useMemo(() => {
                    if (null == r) return null;
                    let e = r.stillFrames,
                        l = null != e ? { ...e } : {};
                    for (let e in l) {
                        let r = l[e];
                        null != r &&
                            (l[e] = {
                                ...r,
                                src: (function (e) {
                                    let r = (0, u.fB)(e);
                                    return (t.current.push(r), r);
                                })(r.base64),
                            });
                    }
                    return { ...r, stillFrames: l };
                }, [r])
            );
        },
        pF: function () {
            return m((e) => {
                let { profileEffects: r } = e;
                return Object.values(r);
            }, n.x);
        },
        wu: m,
    },
);
