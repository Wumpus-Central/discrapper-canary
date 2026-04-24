"use strict";
n.d(t, { ZK: () => g, pF: () => f, wu: () => h }), n(323874), n(14289), n(35956), n(321073);
var a = n(64700),
    r = n(942381),
    i = n(265690),
    l = n(121894),
    s = n(506774),
    o = n(691540),
    c = n(857250),
    d = n(97483),
    u = n(87558);
let _ = "__DEBUG_PROFILE_EFFECTS_STORE",
    p = { profileEffects: s.w.get(_) ?? {} },
    m = (e) => {
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
    h = (0, i.h)((e) => ({
        ...p,
        upsertProfileEffect: (t) =>
            (0, l.r)(() => {
                e((e) => {
                    let n = { ...e };
                    return (n.profileEffects[t.skuId] = t), m(n), n;
                });
            }),
        deleteProfileEffect: (t) =>
            (0, l.r)(() => {
                e((e) => {
                    let n = { ...e };
                    return delete n.profileEffects[t], m(n), n;
                });
            }),
        clearAll: () =>
            (0, l.r)(() => {
                e(() => (s.w.remove(_), { profileEffects: {} }));
            }),
    })),
    f = () =>
        h((e) => {
            let { profileEffects: t } = e;
            return Object.values(t);
        }, r.x),
    g = (e) => {
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
                    r = null != a ? { ...a } : {};
                for (let t in r) {
                    let n = r[t];
                    null != n && (r[t] = { ...n, src: e(n.base64) });
                }
                return { ...t, stillFrames: r };
            }, [t])
        );
    };
