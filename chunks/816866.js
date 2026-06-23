"use strict";
n.d(t, { ZK: () => m, pF: () => E, wu: () => p }), n(323874), n(14289), n(35956), n(321073);
var i = n(64700),
    r = n(942381),
    s = n(265690),
    a = n(121894),
    o = n(506774),
    l = n(691540),
    u = n(857250),
    c = n(97483),
    d = n(87558);
let _ = "__DEBUG_PROFILE_EFFECTS_STORE",
    h = { profileEffects: o.w.get(_) ?? {} },
    f = (e) => {
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
    p = (0, s.h)((e) => ({
        ...h,
        upsertProfileEffect: (t) =>
            (0, a.r)(() => {
                e((e) => {
                    let n = { ...e };
                    return (n.profileEffects[t.skuId] = t), f(n), n;
                });
            }),
        deleteProfileEffect: (t) =>
            (0, a.r)(() => {
                e((e) => {
                    let n = { ...e };
                    return delete n.profileEffects[t], f(n), n;
                });
            }),
        clearAll: () =>
            (0, a.r)(() => {
                e(() => (o.w.remove(_), { profileEffects: {} }));
            }),
    }));
function E() {
    return p((e) => {
        let { profileEffects: t } = e;
        return Object.values(t);
    }, r.x);
}
let m = (e) => {
    let t = p((t) => (null != e ? t.profileEffects[e] : null)),
        n = i.useRef([]);
    return (
        i.useEffect(
            () => () => {
                n.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (n.current = []);
            },
            [],
        ),
        i.useMemo(() => {
            if (null == t) return null;
            let e = t.stillFrames,
                i = null != e ? { ...e } : {};
            for (let e in i) {
                let t = i[e];
                null != t &&
                    (i[e] = {
                        ...t,
                        src: (function (e) {
                            let t = (0, d.fB)(e);
                            return n.current.push(t), t;
                        })(t.base64),
                    });
            }
            return { ...t, stillFrames: i };
        }, [t])
    );
};
