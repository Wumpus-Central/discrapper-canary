(t(323874), t(14289), t(35956), t(321073));
var l = t(582128);
if (588245 != t.j) var o = t(462180);
var n = t(882035),
    a = t(121894),
    s = t(506774),
    i = t(858899),
    c = t(87558);
let u = "__DEBUG_PROFILE_EFFECTS_STORE",
    f = { profileEffects: s.w.get(u) ?? {} },
    p = (e) => {
        try {
            s.w.set(u, e.profileEffects);
        } catch (e) {
            (console.error(e),
                (0, i.P0)({
                    text: "This file is too large to save into localstorage. You will be able to view but not persist these changes.",
                    variant: "critical",
                }));
        }
    },
    v = (0, n.h)((e) => ({
        ...f,
        upsertProfileEffect: (r) =>
            (0, a.r)(() => {
                e((e) => {
                    let t = { ...e };
                    return ((t.profileEffects[r.skuId] = r), p(t), t);
                });
            }),
        deleteProfileEffect: (r) =>
            (0, a.r)(() => {
                e((e) => {
                    let t = { ...e };
                    return (delete t.profileEffects[r], p(t), t);
                });
            }),
        clearAll: () =>
            (0, a.r)(() => {
                e(() => (s.w.remove(u), { profileEffects: {} }));
            }),
    }));
t.d(
    r,
    {},
    {
        ZK: (e) => {
            let r = v((r) => (null != e ? r.profileEffects[e] : null)),
                t = l.useRef([]);
            return (
                l.useEffect(
                    () => () => {
                        (t.current.forEach((e) => {
                            URL.revokeObjectURL(e);
                        }),
                            (t.current = []));
                    },
                    [],
                ),
                l.useMemo(() => {
                    if (null == r) return null;
                    let e = r.stillFrames,
                        l = null != e ? { ...e } : {};
                    for (let e in l) {
                        let r = l[e];
                        null != r &&
                            (l[e] = {
                                ...r,
                                src: (function (e) {
                                    let r = (0, c.fB)(e);
                                    return (t.current.push(r), r);
                                })(r.base64),
                            });
                    }
                    return { ...r, stillFrames: l };
                }, [r])
            );
        },
        pF: function () {
            return v((e) => {
                let { profileEffects: r } = e;
                return Object.values(r);
            }, o.x);
        },
        wu: v,
    },
);
