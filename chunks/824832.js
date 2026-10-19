(n.d(t, { Ay: () => f, UD: () => d }), n(321073));
var i = n(477900),
    s = n(582128),
    r = n(192308),
    l = n(780777),
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
    let l = [];
    for (let n = 0; n < e.length; n++) {
        let i = e[n];
        try {
            let { image: e, dataURI: n } = await u(i),
                s = i.type === c.a.MP4 ? await t(n, i) : await t(n, i, e);
            null != s && l.push({ type: s, filename: i.name });
        } catch (e) {
            l.push({ type: e, filename: i.name });
        }
    }
    l.length > 0 &&
        ((s = l),
        (0, r.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("223685"), n.e("484981")]).then(n.bind(n, 940372));
            return (t) => (0, i.jsx)(e, { errors: s, ...t });
        }));
}
function m(e) {
    let {
            onChange: t,
            multiple: o = !0,
            disabled: c,
            className: u,
            tabIndex: m = -1,
            "aria-label": f,
            filters: E,
            setLoading: I,
            title: g,
            ref: h,
        } = e,
        p = s.useRef(null),
        [A, _] = s.useState(!1);
    async function N(e) {
        (I?.(!0), await d(e, t), _(!0), I?.(!1));
    }
    async function C(e) {
        if (
            (e.stopPropagation(),
            e.preventDefault(),
            e.currentTarget?.files == null || e.currentTarget?.files?.length === 0)
        )
            return;
        let t = e.currentTarget.files;
        p.current = await (0, r.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("886895"), n.e("817259")]).then(n.bind(n, 897126));
            return (n) => (0, i.jsx)(e, { processFiles: () => N(t), ...n });
        });
    }
    return (
        s.useEffect(() => {
            A && null !== p.current && ((0, r.closeModal)(p.current), (p.current = null));
        }, [A]),
        (0, i.jsx)(l.A, {
            ref: h,
            onChange: C,
            filters: E ?? (0, a.gA)(),
            multiple: o,
            disabled: c,
            className: u,
            tabIndex: m,
            "aria-label": f,
            title: g,
        })
    );
}
m.displayName = "ImageInputWithModals";
let f = m;
