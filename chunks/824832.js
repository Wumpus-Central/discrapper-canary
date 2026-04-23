"use strict";
n.d(t, { Ay: () => p, UD: () => d }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(192308),
    a = n(817363),
    o = n(946274),
    l = n(563863),
    u = n(693591);
async function c(e) {
    try {
        let t = await new Promise((t, n) => {
                if (null != e) {
                    let r = new FileReader();
                    (r.onload = (e) => {
                        "string" == typeof e.target?.result ? t(e.target.result) : n(Error("Failed to read file"));
                    }),
                        r.readAsDataURL(e);
                }
            }),
            n = new Image();
        return (n.src = t), await n.decode(), { image: n, dataURI: t };
    } catch {
        throw l.o.WRONG_TYPE;
    }
}
async function d(e, t) {
    let n = [];
    for (let r = 0; r < e.length; r++) {
        let i = e[r];
        try {
            let { image: e, dataURI: r } = await c(i),
                s = i.type === u.a.MP4 ? await t(r, i) : await t(r, i, e);
            null != s && n.push({ type: s, filename: i.name });
        } catch (e) {
            n.push({ type: e, filename: i.name });
        }
    }
    n.length > 0 && _(n);
}
let _ = (e) => {
        (0, s.openModalLazy)(async () => {
            let { default: t } = await n.e("84981").then(n.bind(n, 940372));
            return (n) => (0, r.jsx)(t, { errors: e, ...n });
        });
    },
    f = i.forwardRef((e, t) => {
        let {
                onChange: l,
                multiple: u = !0,
                disabled: c,
                className: _,
                tabIndex: f = -1,
                "aria-label": p,
                filters: h,
                setLoading: E,
                title: m,
            } = e,
            g = i.useRef(null),
            [A, I] = i.useState(!1);
        i.useEffect(() => {
            A && T();
        }, [A]);
        let T = () => {
                null !== g.current && ((0, s.closeModal)(g.current), (g.current = null));
            },
            S = async (e) => {
                E?.(!0), await d(e, l), I(!0), E?.(!1);
            },
            y = async (e) => {
                if (
                    (e.stopPropagation(),
                    e.preventDefault(),
                    e.currentTarget?.files == null || e.currentTarget?.files?.length === 0)
                )
                    return;
                let t = e.currentTarget.files;
                g.current = await (0, s.openModalLazy)(async () => {
                    let { default: e } = await n.e("17259").then(n.bind(n, 897126));
                    return (n) => (0, r.jsx)(e, { processFiles: () => S(t), ...n });
                });
            };
        return (0, r.jsx)(a.A, {
            ref: t,
            onChange: y,
            filters: h ?? (0, o.gA)(),
            multiple: u,
            disabled: c,
            className: _,
            tabIndex: f,
            "aria-label": p,
            title: m,
        });
    });
f.displayName = "ImageInputWithModals";
let p = f;
