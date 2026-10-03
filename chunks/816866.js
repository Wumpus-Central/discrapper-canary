(t.d(r, { ZK: () => w, pF: () => E, wu: () => h }), t(323874), t(14289), t(35956), t(321073));
var n = t(582128);
if (588245 != t.j) var o = t(462180);
var l = t(882035),
    a = t(121894),
    i = t(506774),
    f = t(739187),
    u = t(857250),
    s = t(97483),
    c = t(87558);
let p = "__DEBUG_PROFILE_EFFECTS_STORE",
    d = { profileEffects: i.w.get(p) ?? {} },
    m = (e) => {
        try {
            i.w.set(p, e.profileEffects);
        } catch (e) {
            (console.error(e),
                (0, f.P)(
                    (0, u.o)(
                        "This file is too large to save into localstorage. You will be able to view but not persist these changes.",
                        s.Ck.FAILURE,
                    ),
                ));
        }
    },
    h = (0, l.h)((e) => ({
        ...d,
        upsertProfileEffect: (r) =>
            (0, a.r)(() => {
                e((e) => {
                    let t = { ...e };
                    return ((t.profileEffects[r.skuId] = r), m(t), t);
                });
            }),
        deleteProfileEffect: (r) =>
            (0, a.r)(() => {
                e((e) => {
                    let t = { ...e };
                    return (delete t.profileEffects[r], m(t), t);
                });
            }),
        clearAll: () =>
            (0, a.r)(() => {
                e(() => (i.w.remove(p), { profileEffects: {} }));
            }),
    }));
function E() {
    return h((e) => {
        let { profileEffects: r } = e;
        return Object.values(r);
    }, o.x);
}
let w = (e) => {
    let r = h((r) => (null != e ? r.profileEffects[e] : null)),
        t = n.useRef([]);
    return (
        n.useEffect(
            () => () => {
                (t.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (t.current = []));
            },
            [],
        ),
        n.useMemo(() => {
            if (null == r) return null;
            let e = r.stillFrames,
                n = null != e ? { ...e } : {};
            for (let e in n) {
                let r = n[e];
                null != r &&
                    (n[e] = {
                        ...r,
                        src: (function (e) {
                            let r = (0, c.fB)(e);
                            return (t.current.push(r), r);
                        })(r.base64),
                    });
            }
            return { ...r, stillFrames: n };
        }, [r])
    );
};
