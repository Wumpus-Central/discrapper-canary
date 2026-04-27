"use strict";
r.d(t, { ZK: () => g, pF: () => h, wu: () => m }), r(323874), r(14289), r(35956), r(321073);
var n = r(64700),
    i = r(942381),
    a = r(265690),
    s = r(121894),
    l = r(506774),
    o = r(691540),
    c = r(857250),
    d = r(97483),
    u = r(87558);
let _ = "__DEBUG_PROFILE_EFFECTS_STORE",
    p = { profileEffects: l.w.get(_) ?? {} },
    f = (e) => {
        try {
            l.w.set(_, e.profileEffects);
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
    m = (0, a.h)((e) => ({
        ...p,
        upsertProfileEffect: (t) =>
            (0, s.r)(() => {
                e((e) => {
                    let r = { ...e };
                    return (r.profileEffects[t.skuId] = t), f(r), r;
                });
            }),
        deleteProfileEffect: (t) =>
            (0, s.r)(() => {
                e((e) => {
                    let r = { ...e };
                    return delete r.profileEffects[t], f(r), r;
                });
            }),
        clearAll: () =>
            (0, s.r)(() => {
                e(() => (l.w.remove(_), { profileEffects: {} }));
            }),
    })),
    h = () =>
        m((e) => {
            let { profileEffects: t } = e;
            return Object.values(t);
        }, i.x),
    g = (e) => {
        let t = m((t) => (null != e ? t.profileEffects[e] : null)),
            r = n.useRef([]);
        return (
            n.useEffect(
                () => () => {
                    r.current.forEach((e) => {
                        URL.revokeObjectURL(e);
                    }),
                        (r.current = []);
                },
                [],
            ),
            n.useMemo(() => {
                if (null == t) return null;
                let e = (e) => {
                        let t = (0, u.fB)(e);
                        return r.current.push(t), t;
                    },
                    n = t.stillFrames,
                    i = null != n ? { ...n } : {};
                for (let t in i) {
                    let r = i[t];
                    null != r && (i[t] = { ...r, src: e(r.base64) });
                }
                return { ...t, stillFrames: i };
            }, [t])
        );
    };
