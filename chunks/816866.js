"use strict";
n.d(t, { ZK: () => f, pF: () => g, wu: () => h }), n(323874), n(14289), n(35956), n(321073);
var a = n(64700),
    i = n(942381),
    r = n(265690),
    l = n(121894),
    s = n(506774),
    d = n(691540),
    o = n(857250),
    c = n(97483),
    u = n(87558);
let _ = "__DEBUG_PROFILE_EFFECTS_STORE",
    m = { profileEffects: s.w.get(_) ?? {} },
    p = (e) => {
        try {
            s.w.set(_, e.profileEffects);
        } catch (e) {
            console.error(e),
                (0, d.P0)(
                    (0, o.o)(
                        "This file is too large to save into localstorage. You will be able to view but not persist these changes.",
                        c.Ck.FAILURE,
                    ),
                );
        }
    },
    h = (0, r.h)((e) => ({
        ...m,
        upsertProfileEffect: (t) =>
            (0, l.r)(() => {
                e((e) => {
                    let n = { ...e };
                    return (n.profileEffects[t.skuId] = t), p(n), n;
                });
            }),
        deleteProfileEffect: (t) =>
            (0, l.r)(() => {
                e((e) => {
                    let n = { ...e };
                    return delete n.profileEffects[t], p(n), n;
                });
            }),
        clearAll: () =>
            (0, l.r)(() => {
                e(() => (s.w.remove(_), { profileEffects: {} }));
            }),
    })),
    g = () =>
        h((e) => {
            let { profileEffects: t } = e;
            return Object.values(t);
        }, i.x),
    f = (e) => {
        let t = h((t) => (null != e ? t.profileEffects[e] : null)),
            n = a.useRef([]);
        return (
            a.useEffect(
                () => () => {
                    n.current.forEach((e) => {
                        URL.revokeObjectURL(e);
                    }),
                        (n.current = []);
                },
                [],
            ),
            a.useMemo(() => {
                if (null == t) return null;
                let e = (e) => {
                        let t = (0, u.fB)(e);
                        return n.current.push(t), t;
                    },
                    a = t.stillFrames,
                    i = null != a ? { ...a } : {};
                for (let t in i) {
                    let n = i[t];
                    null != n && (i[t] = { ...n, src: e(n.base64) });
                }
                return { ...t, stillFrames: i };
            }, [t])
        );
    };
