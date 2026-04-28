"use strict";
n.d(t, { Ay: () => p, UD: () => d }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(192308),
    a = n(780777),
    r = n(946274),
    o = n(73621),
    c = n(693591);
async function u(e) {
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
    let n = [];
    for (let l = 0; l < e.length; l++) {
        let i = e[l];
        try {
            let { image: e, dataURI: l } = await u(i),
                s = i.type === c.a.MP4 ? await t(l, i) : await t(l, i, e);
            null != s && n.push({ type: s, filename: i.name });
        } catch (e) {
            n.push({ type: e, filename: i.name });
        }
    }
    n.length > 0 && h(n);
}
let h = (e) => {
        (0, s.openModalLazy)(async () => {
            let { default: t } = await n.e("84981").then(n.bind(n, 940372));
            return (n) => (0, l.jsx)(t, { errors: e, ...n });
        });
    },
    m = i.forwardRef((e, t) => {
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
            x = i.useRef(null),
            [C, A] = i.useState(!1);
        i.useEffect(() => {
            C && E();
        }, [C]);
        let E = () => {
                null !== x.current && ((0, s.closeModal)(x.current), (x.current = null));
            },
            I = async (e) => {
                g?.(!0), await d(e, o), A(!0), g?.(!1);
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
                    return (n) => (0, l.jsx)(e, { processFiles: () => I(t), ...n });
                });
            };
        return (0, l.jsx)(a.A, {
            ref: t,
            onChange: v,
            filters: f ?? (0, r.gA)(),
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
