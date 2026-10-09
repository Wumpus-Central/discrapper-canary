(r.d(t, { ZK: () => h, pF: () => m, wu: () => d }), r(323874), r(14289), r(35956), r(321073));
var n = r(582128);
if (588245 != r.j) var o = r(462180);
var l = r(882035),
    a = r(121894),
    i = r(506774),
    f = r(858899),
    u = r(87558);
let s = "__DEBUG_PROFILE_EFFECTS_STORE",
    c = { profileEffects: i.w.get(s) ?? {} },
    p = (e) => {
        try {
            i.w.set(s, e.profileEffects);
        } catch (e) {
            (console.error(e),
                (0, f.P0)({
                    text: "This file is too large to save into localstorage. You will be able to view but not persist these changes.",
                    variant: "critical",
                }));
        }
    },
    d = (0, l.h)((e) => ({
        ...c,
        upsertProfileEffect: (t) =>
            (0, a.r)(() => {
                e((e) => {
                    let r = { ...e };
                    return ((r.profileEffects[t.skuId] = t), p(r), r);
                });
            }),
        deleteProfileEffect: (t) =>
            (0, a.r)(() => {
                e((e) => {
                    let r = { ...e };
                    return (delete r.profileEffects[t], p(r), r);
                });
            }),
        clearAll: () =>
            (0, a.r)(() => {
                e(() => (i.w.remove(s), { profileEffects: {} }));
            }),
    }));
function m() {
    return d((e) => {
        let { profileEffects: t } = e;
        return Object.values(t);
    }, o.x);
}
let h = (e) => {
    let t = d((t) => (null != e ? t.profileEffects[e] : null)),
        r = n.useRef([]);
    return (
        n.useEffect(
            () => () => {
                (r.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (r.current = []));
            },
            [],
        ),
        n.useMemo(() => {
            if (null == t) return null;
            let e = t.stillFrames,
                n = null != e ? { ...e } : {};
            for (let e in n) {
                let t = n[e];
                null != t &&
                    (n[e] = {
                        ...t,
                        src: (function (e) {
                            let t = (0, u.fB)(e);
                            return (r.current.push(t), t);
                        })(t.base64),
                    });
            }
            return { ...t, stillFrames: n };
        }, [t])
    );
};
