"use strict";
n.d(t, { ZK: () => g, pF: () => h, wu: () => m }), n(323874), n(14289), n(35956), n(321073);
var r = n(64700),
    a = n(942381),
    i = n(265690),
    l = n(121894),
    s = n(506774),
    o = n(691540),
    c = n(857250),
    d = n(97483),
    u = n(87558);
let _ = "__DEBUG_PROFILE_EFFECTS_STORE",
    p = { profileEffects: s.w.get(_) ?? {} },
    f = (e) => {
        try {
            s.w.set(_, e.profileEffects);
        } catch (e) {
            console.error(e),
                (0, o.P0)(
                    (0, c.o)(
                        "This file is too large to save into localstorage. You will be able to view but not persist these changes.",
                        d.Ck.FAILURE,
                    ),
                );
        }
    },
    m = (0, i.h)((e) => ({
        ...p,
        upsertProfileEffect: (t) =>
            (0, l.r)(() => {
                e((e) => {
                    let n = { ...e };
                    return (n.profileEffects[t.skuId] = t), f(n), n;
                });
            }),
        deleteProfileEffect: (t) =>
            (0, l.r)(() => {
                e((e) => {
                    let n = { ...e };
                    return delete n.profileEffects[t], f(n), n;
                });
            }),
        clearAll: () =>
            (0, l.r)(() => {
                e(() => (s.w.remove(_), { profileEffects: {} }));
            }),
    })),
    h = () =>
        m((e) => {
            let { profileEffects: t } = e;
            return Object.values(t);
        }, a.x),
    g = (e) => {
        let t = m((t) => (null != e ? t.profileEffects[e] : null)),
            n = r.useRef([]);
        return (
            r.useEffect(
                () => () => {
                    n.current.forEach((e) => {
                        URL.revokeObjectURL(e);
                    }),
                        (n.current = []);
                },
                [],
            ),
            r.useMemo(() => {
                if (null == t) return null;
                let e = (e) => {
                        let t = (0, u.fB)(e);
                        return n.current.push(t), t;
                    },
                    r = t.stillFrames,
                    a = null != r ? { ...r } : {};
                for (let t in a) {
                    let n = a[t];
                    null != n && (a[t] = { ...n, src: e(n.base64) });
                }
                return { ...t, stillFrames: a };
            }, [t])
        );
    };
