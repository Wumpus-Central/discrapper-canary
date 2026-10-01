(n.d(t, { Ay: () => f, UD: () => d }), n(321073));
var i = n(477900),
    s = n(582128),
    l = n(192308),
    r = n(780777),
    a = n(946274),
    o = n(73621),
    c = n(693591);
async function u(e) {
    try {
        let t = await new Promise((t, n) => {
                if (null != e) {
                    let i = new FileReader();
                    ((i.onload = (e) => {
                        "string" == typeof e.target?.result ? t(e.target.result) : n(Error("Failed to read file"));
                    }),
                        i.readAsDataURL(e));
                }
            }),
            n = new Image();
        return ((n.src = t), await n.decode(), { image: n, dataURI: t });
    } catch {
        throw o.o.WRONG_TYPE;
    }
}
async function d(e, t) {
    var s;
    let r = [];
    for (let n = 0; n < e.length; n++) {
        let i = e[n];
        try {
            let { image: e, dataURI: n } = await u(i),
                s = i.type === c.a.MP4 ? await t(n, i) : await t(n, i, e);
            null != s && r.push({ type: s, filename: i.name });
        } catch (e) {
            r.push({ type: e, filename: i.name });
        }
    }
    r.length > 0 &&
        ((s = r),
        (0, l.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("223685"), n.e("484981")]).then(n.bind(n, 940372));
            return (t) => (0, i.jsx)(e, { errors: s, ...t });
        }));
}
let m = s.forwardRef((e, t) => {
    let {
            onChange: o,
            multiple: c = !0,
            disabled: u,
            className: m,
            tabIndex: f = -1,
            "aria-label": E,
            filters: I,
            setLoading: g,
            title: h,
        } = e,
        A = s.useRef(null),
        [_, p] = s.useState(!1);
    async function N(e) {
        (g?.(!0), await d(e, o), p(!0), g?.(!1));
    }
    async function C(e) {
        if (
            (e.stopPropagation(),
            e.preventDefault(),
            e.currentTarget?.files == null || e.currentTarget?.files?.length === 0)
        )
            return;
        let t = e.currentTarget.files;
        A.current = await (0, l.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("886895"), n.e("817259")]).then(n.bind(n, 897126));
            return (n) => (0, i.jsx)(e, { processFiles: () => N(t), ...n });
        });
    }
    return (
        s.useEffect(() => {
            _ && null !== A.current && ((0, l.closeModal)(A.current), (A.current = null));
        }, [_]),
        (0, i.jsx)(r.A, {
            ref: t,
            onChange: C,
            filters: I ?? (0, a.gA)(),
            multiple: c,
            disabled: u,
            className: m,
            tabIndex: f,
            "aria-label": E,
            title: h,
        })
    );
});
m.displayName = "ImageInputWithModals";
let f = m;
