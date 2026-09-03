n.d(t, { Ay: () => m, UD: () => d }), n(321073);
var l = n(477900),
    i = n(582128),
    s = n(192308),
    r = n(780777),
    a = n(946274),
    o = n(73621),
    u = n(693591);
async function c(e) {
    try {
        let t = await new Promise((t, n) => {
                if (null != e) {
                    let l = new FileReader();
                    (l.onload = (e) => {
                        "string" == typeof e.target?.result ? t(e.target.result) : n(Error("Failed to read file"));
                    }),
                        l.readAsDataURL(e);
                }
            }),
            n = new Image();
        return (n.src = t), await n.decode(), { image: n, dataURI: t };
    } catch {
        throw o.o.WRONG_TYPE;
    }
}
async function d(e, t) {
    var i;
    let r = [];
    for (let n = 0; n < e.length; n++) {
        let l = e[n];
        try {
            let { image: e, dataURI: n } = await c(l),
                i = l.type === u.a.MP4 ? await t(n, l) : await t(n, l, e);
            null != i && r.push({ type: i, filename: l.name });
        } catch (e) {
            r.push({ type: e, filename: l.name });
        }
    }
    r.length > 0 &&
        ((i = r),
        (0, s.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("223685"), n.e("484981")]).then(n.bind(n, 940372));
            return (t) => (0, l.jsx)(e, { errors: i, ...t });
        }));
}
let h = i.forwardRef((e, t) => {
    let {
            onChange: o,
            multiple: u = !0,
            disabled: c,
            className: h,
            tabIndex: m = -1,
            "aria-label": f,
            filters: p,
            setLoading: g,
            title: x,
        } = e,
        A = i.useRef(null),
        [C, E] = i.useState(!1);
    async function I(e) {
        g?.(!0), await d(e, o), E(!0), g?.(!1);
    }
    async function y(e) {
        if (
            (e.stopPropagation(),
            e.preventDefault(),
            e.currentTarget?.files == null || e.currentTarget?.files?.length === 0)
        )
            return;
        let t = e.currentTarget.files;
        A.current = await (0, s.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("886895"), n.e("817259")]).then(n.bind(n, 897126));
            return (n) => (0, l.jsx)(e, { processFiles: () => I(t), ...n });
        });
    }
    return (
        i.useEffect(() => {
            C && null !== A.current && ((0, s.closeModal)(A.current), (A.current = null));
        }, [C]),
        (0, l.jsx)(r.A, {
            ref: t,
            onChange: y,
            filters: p ?? (0, a.gA)(),
            multiple: u,
            disabled: c,
            className: h,
            tabIndex: m,
            "aria-label": f,
            title: x,
        })
    );
});
h.displayName = "ImageInputWithModals";
let m = h;
