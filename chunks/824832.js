"use strict";
n.d(t, { Ay: () => h, UD: () => u }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(192308),
    a = n(780777),
    o = n(946274),
    l = n(73621),
    d = n(693591);
async function _(e) {
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
async function u(e, t) {
    let n = [];
    for (let i = 0; i < e.length; i++) {
        let r = e[i];
        try {
            let { image: e, dataURI: i } = await _(r),
                s = r.type === d.a.MP4 ? await t(i, r) : await t(i, r, e);
            null != s && n.push({ type: s, filename: r.name });
        } catch (e) {
            n.push({ type: e, filename: r.name });
        }
    }
    n.length > 0 && c(n);
}
let c = (e) => {
        (0, s.openModalLazy)(async () => {
            let { default: t } = await n.e("84981").then(n.bind(n, 940372));
            return (n) => (0, i.jsx)(t, { errors: e, ...n });
        });
    },
    E = r.forwardRef((e, t) => {
        let {
                onChange: l,
                multiple: d = !0,
                disabled: _,
                className: c,
                tabIndex: E = -1,
                "aria-label": h,
                filters: m,
                setLoading: f,
                title: g,
            } = e,
            p = r.useRef(null),
            [A, I] = r.useState(!1);
        r.useEffect(() => {
            A && T();
        }, [A]);
        let T = () => {
                null !== p.current && ((0, s.closeModal)(p.current), (p.current = null));
            },
            S = async (e) => {
                f?.(!0), await u(e, l), I(!0), f?.(!1);
            },
            N = async (e) => {
                if (
                    (e.stopPropagation(),
                    e.preventDefault(),
                    e.currentTarget?.files == null || e.currentTarget?.files?.length === 0)
                )
                    return;
                let t = e.currentTarget.files;
                p.current = await (0, s.openModalLazy)(async () => {
                    let { default: e } = await n.e("17259").then(n.bind(n, 897126));
                    return (n) => (0, i.jsx)(e, { processFiles: () => S(t), ...n });
                });
            };
        return (0, i.jsx)(a.A, {
            ref: t,
            onChange: N,
            filters: m ?? (0, o.gA)(),
            multiple: d,
            disabled: _,
            className: c,
            tabIndex: E,
            "aria-label": h,
            title: g,
        });
    });
E.displayName = "ImageInputWithModals";
let h = E;
