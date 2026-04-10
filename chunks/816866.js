"use strict";
n.d(t, { ZK: () => h, pF: () => p, wu: () => f }), n(323874), n(14289), n(35956), n(321073);
var r = n(64700),
    i = n(942381),
    s = n(265690),
    a = n(121894),
    o = n(506774),
    l = n(397927),
    u = n(87558);
let c = "__DEBUG_PROFILE_EFFECTS_STORE",
    d = { profileEffects: o.w.get(c) ?? {} },
    _ = (e) => {
        try {
            o.w.set(c, e.profileEffects);
        } catch (e) {
            console.error(e),
                (0, l.showToast)(
                    (0, l.createToast)(
                        "This file is too large to save into localstorage. You will be able to view but not persist these changes.",
                        l.ToastType.FAILURE,
                    ),
                );
        }
    },
    f = (0, s.h)((e) => ({
        ...d,
        upsertProfileEffect: (t) =>
            (0, a.r)(() => {
                e((e) => {
                    let n = { ...e };
                    return (n.profileEffects[t.skuId] = t), _(n), n;
                });
            }),
        deleteProfileEffect: (t) =>
            (0, a.r)(() => {
                e((e) => {
                    let n = { ...e };
                    return delete n.profileEffects[t], _(n), n;
                });
            }),
        clearAll: () =>
            (0, a.r)(() => {
                e(() => (o.w.remove(c), { profileEffects: {} }));
            }),
    })),
    p = () =>
        f((e) => {
            let { profileEffects: t } = e;
            return Object.values(t);
        }, i.x),
    h = (e) => {
        let t = f((t) => (null != e ? t.profileEffects[e] : null)),
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
                    i = null != r ? { ...r } : {};
                for (let t in i) {
                    let n = i[t];
                    null != n && (i[t] = { ...n, src: e(n.base64) });
                }
                return { ...t, stillFrames: i };
            }, [t])
        );
    };
