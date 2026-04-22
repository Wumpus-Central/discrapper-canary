"use strict";
a.d(t, { ZK: () => g, pF: () => b, wu: () => m }), a(323874), a(14289), a(35956), a(321073);
var r = a(64700),
    l = a(942381),
    n = a(265690),
    i = a(121894),
    s = a(506774),
    o = a(691540),
    d = a(857250),
    c = a(97483),
    u = a(87558);
let h = "__DEBUG_PROFILE_EFFECTS_STORE",
    p = { profileEffects: s.w.get(h) ?? {} },
    _ = (e) => {
        try {
            s.w.set(h, e.profileEffects);
        } catch (e) {
            console.error(e),
                (0, o.P0)(
                    (0, d.o)(
                        "This file is too large to save into localstorage. You will be able to view but not persist these changes.",
                        c.Ck.FAILURE,
                    ),
                );
        }
    },
    m = (0, n.h)((e) => ({
        ...p,
        upsertProfileEffect: (t) =>
            (0, i.r)(() => {
                e((e) => {
                    let a = { ...e };
                    return (a.profileEffects[t.skuId] = t), _(a), a;
                });
            }),
        deleteProfileEffect: (t) =>
            (0, i.r)(() => {
                e((e) => {
                    let a = { ...e };
                    return delete a.profileEffects[t], _(a), a;
                });
            }),
        clearAll: () =>
            (0, i.r)(() => {
                e(() => (s.w.remove(h), { profileEffects: {} }));
            }),
    })),
    b = () =>
        m((e) => {
            let { profileEffects: t } = e;
            return Object.values(t);
        }, l.x),
    g = (e) => {
        let t = m((t) => (null != e ? t.profileEffects[e] : null)),
            a = r.useRef([]);
        return (
            r.useEffect(
                () => () => {
                    a.current.forEach((e) => {
                        URL.revokeObjectURL(e);
                    }),
                        (a.current = []);
                },
                [],
            ),
            r.useMemo(() => {
                if (null == t) return null;
                let e = (e) => {
                        let t = (0, u.fB)(e);
                        return a.current.push(t), t;
                    },
                    r = t.stillFrames,
                    l = null != r ? { ...r } : {};
                for (let t in l) {
                    let a = l[t];
                    null != a && (l[t] = { ...a, src: e(a.base64) });
                }
                return { ...t, stillFrames: l };
            }, [t])
        );
    };
