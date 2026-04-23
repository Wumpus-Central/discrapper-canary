"use strict";
n.d(t, { ZK: () => m, pF: () => E, wu: () => h }), n(323874), n(14289), n(35956), n(321073);
var r = n(64700),
    i = n(942381),
    s = n(265690),
    a = n(121894),
    o = n(506774),
    l = n(691540),
    u = n(857250),
    c = n(97483),
    d = n(87558);
let _ = "__DEBUG_PROFILE_EFFECTS_STORE",
    f = { profileEffects: o.w.get(_) ?? {} },
    p = (e) => {
        try {
            o.w.set(_, e.profileEffects);
        } catch (e) {
            console.error(e),
                (0, l.P0)(
                    (0, u.o)(
                        "This file is too large to save into localstorage. You will be able to view but not persist these changes.",
                        c.Ck.FAILURE,
                    ),
                );
        }
    },
    h = (0, s.h)((e) => ({
        ...f,
        upsertProfileEffect: (t) =>
            (0, a.r)(() => {
                e((e) => {
                    let n = { ...e };
                    return (n.profileEffects[t.skuId] = t), p(n), n;
                });
            }),
        deleteProfileEffect: (t) =>
            (0, a.r)(() => {
                e((e) => {
                    let n = { ...e };
                    return delete n.profileEffects[t], p(n), n;
                });
            }),
        clearAll: () =>
            (0, a.r)(() => {
                e(() => (o.w.remove(_), { profileEffects: {} }));
            }),
    })),
    E = () =>
        h((e) => {
            let { profileEffects: t } = e;
            return Object.values(t);
        }, i.x),
    m = (e) => {
        let t = h((t) => (null != e ? t.profileEffects[e] : null)),
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
                        let t = (0, d.fB)(e);
                        return n.current.push(t), t;
                    },
                    r = t.stillFrames,
                    i = null != r ? { ...r } : {};
                for (let t in i) {
                    let n = i[t];
                    null != n && (i[t] = { ...n, src: e(n.base64) });
                }
                return { ...t, stillFrames: i };
            }, [t])
        );
    };
