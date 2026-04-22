"use strict";
n.d(t, { Ay: () => p, UD: () => d }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(192308),
    r = n(817363),
    a = n(946274),
    o = n(563863),
    c = n(693591);
async function u(e) {
    try {
        let t = await new Promise((t, n) => {
                if (null != e) {
                    let i = new FileReader();
                    (i.onload = (e) => {
                        "string" == typeof e.target?.result ? t(e.target.result) : n(Error("Failed to read file"));
                    }),
                        i.readAsDataURL(e);
                }
            }),
            n = new Image();
        return (n.src = t), await n.decode(), { image: n, dataURI: t };
    } catch {
        throw o.o.WRONG_TYPE;
    }
}
async function d(e, t) {
    let n = [];
    for (let i = 0; i < e.length; i++) {
        let l = e[i];
        try {
            let { image: e, dataURI: i } = await u(l),
                s = l.type === c.a.MP4 ? await t(i, l) : await t(i, l, e);
            null != s && n.push({ type: s, filename: l.name });
        } catch (e) {
            n.push({ type: e, filename: l.name });
        }
    }
    n.length > 0 && h(n);
}
let h = (e) => {
        (0, s.openModalLazy)(async () => {
            let { default: t } = await n.e("84981").then(n.bind(n, 940372));
            return (n) => (0, i.jsx)(t, { errors: e, ...n });
        });
    },
    m = l.forwardRef((e, t) => {
        let {
                onChange: o,
                multiple: c = !0,
                disabled: u,
                className: h,
                tabIndex: m = -1,
                "aria-label": p,
                filters: f,
                setLoading: g,
                title: _,
            } = e,
            x = l.useRef(null),
            [A, C] = l.useState(!1);
        l.useEffect(() => {
            A && E();
        }, [A]);
        let E = () => {
                null !== x.current && ((0, s.closeModal)(x.current), (x.current = null));
            },
            I = async (e) => {
                g?.(!0), await d(e, o), C(!0), g?.(!1);
            },
            v = async (e) => {
                if (
                    (e.stopPropagation(),
                    e.preventDefault(),
                    e.currentTarget?.files == null || e.currentTarget?.files?.length === 0)
                )
                    return;
                let t = e.currentTarget.files;
                x.current = await (0, s.openModalLazy)(async () => {
                    let { default: e } = await n.e("17259").then(n.bind(n, 897126));
                    return (n) => (0, i.jsx)(e, { processFiles: () => I(t), ...n });
                });
            };
        return (0, i.jsx)(r.A, {
            ref: t,
            onChange: v,
            filters: f ?? (0, a.gA)(),
            multiple: c,
            disabled: u,
            className: h,
            tabIndex: m,
            "aria-label": p,
            title: _,
        });
    });
m.displayName = "ImageInputWithModals";
let p = m;
