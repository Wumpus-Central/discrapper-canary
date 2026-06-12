"use strict";
n.d(t, { Ay: () => f, UD: () => d }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(192308),
    a = n(780777),
    o = n(946274),
    l = n(73621),
    u = n(693591);
async function c(e) {
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
        throw l.o.WRONG_TYPE;
    }
}
async function d(e, t) {
    let n = [];
    for (let i = 0; i < e.length; i++) {
        let r = e[i];
        try {
            let { image: e, dataURI: i } = await c(r),
                s = r.type === u.a.MP4 ? await t(i, r) : await t(i, r, e);
            null != s && n.push({ type: s, filename: r.name });
        } catch (e) {
            n.push({ type: e, filename: r.name });
        }
    }
    n.length > 0 && _(n);
}
let _ = (e) => {
        (0, s.openModalLazy)(async () => {
            let { default: t } = await Promise.all([n.e("80620"), n.e("84981")]).then(n.bind(n, 940372));
            return (n) => (0, i.jsx)(t, { errors: e, ...n });
        });
    },
    h = r.forwardRef((e, t) => {
        let {
                onChange: l,
                multiple: u = !0,
                disabled: c,
                className: _,
                tabIndex: h = -1,
                "aria-label": f,
                filters: p,
                setLoading: E,
                title: m,
            } = e,
            g = r.useRef(null),
            [A, I] = r.useState(!1);
        r.useEffect(() => {
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
                    let { default: e } = await Promise.all([n.e("54368"), n.e("17259")]).then(n.bind(n, 897126));
                    return (n) => (0, i.jsx)(e, { processFiles: () => S(t), ...n });
                });
            };
        return (0, i.jsx)(a.A, {
            ref: t,
            onChange: y,
            filters: p ?? (0, o.gA)(),
            multiple: u,
            disabled: c,
            className: _,
            tabIndex: h,
            "aria-label": f,
            title: m,
        });
    });
h.displayName = "ImageInputWithModals";
let f = h;
