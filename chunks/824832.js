n(321073);
var i = n(477900),
    s = n(582128),
    l = n(192308),
    r = n(307955),
    a = n(946274),
    o = n(534606),
    c = n(693591);
async function u(e, t) {
    var s;
    let r = [];
    for (let n = 0; n < e.length; n++) {
        let i = e[n];
        try {
            let { image: e, dataURI: n } = await (async function (e) {
                    try {
                        let t = await new Promise((t, n) => {
                                if (null != e) {
                                    let i = new FileReader();
                                    ((i.onload = (e) => {
                                        "string" == typeof e.target?.result
                                            ? t(e.target.result)
                                            : n(Error("Failed to read file"));
                                    }),
                                        i.readAsDataURL(e));
                                }
                            }),
                            n = new Image();
                        return ((n.src = t), await n.decode(), { image: n, dataURI: t });
                    } catch {
                        throw o.o.WRONG_TYPE;
                    }
                })(i),
                s = i.type === c.a.MP4 ? await t(n, i) : await t(n, i, e);
            null != s && r.push({ type: s, filename: i.name });
        } catch (e) {
            r.push({ type: e, filename: i.name });
        }
    }
    r.length > 0 &&
        ((s = r),
        (0, l.mM)(async () => {
            let { default: e } = await Promise.all([n.e(223685), n.e(484981)]).then(n.bind(n, 940372));
            return (t) => (0, i.jsx)(e, { errors: s, ...t });
        }));
}
function d(e) {
    let {
            onChange: t,
            multiple: o = !0,
            disabled: c,
            className: d,
            tabIndex: m = -1,
            "aria-label": f,
            filters: E,
            setLoading: I,
            title: g,
            ref: h,
        } = e,
        p = s.useRef(null),
        [A, _] = s.useState(!1);
    return (
        s.useEffect(() => {
            A && null !== p.current && ((0, l.Oo)(p.current), (p.current = null));
        }, [A]),
        (0, i.jsx)(r.A, {
            ref: h,
            onChange: async function (e) {
                if (
                    (e.stopPropagation(),
                    e.preventDefault(),
                    e.currentTarget?.files == null || e.currentTarget?.files?.length === 0)
                )
                    return;
                let s = e.currentTarget.files;
                p.current = await (0, l.mM)(async () => {
                    let { default: e } = await Promise.all([n.e(886895), n.e(817259)]).then(n.bind(n, 897126));
                    return (n) =>
                        (0, i.jsx)(e, {
                            processFiles: () =>
                                (async function (e) {
                                    (I?.(!0), await u(e, t), _(!0), I?.(!1));
                                })(s),
                            ...n,
                        });
                });
            },
            filters: E ?? (0, a.gA)(),
            multiple: o,
            disabled: c,
            className: d,
            tabIndex: m,
            "aria-label": f,
            title: g,
        })
    );
}
((d.displayName = "ImageInputWithModals"), n.d(t, {}, { Ay: d, UD: u }));
