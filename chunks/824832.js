"use strict";
n.d(t, { Ay: () => h, UD: () => _ }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(817363),
    o = n(946274),
    l = n(563863),
    u = n(693591);
function c(e) {
    return new Promise((t, n) => {
        if (null != e) {
            let r = new FileReader();
            (r.onload = (e) => {
                "string" == typeof e.target?.result ? t(e.target.result) : n(Error("Failed to read file"));
            }),
                r.readAsDataURL(e);
        }
    });
}
async function d(e) {
    try {
        let t = await c(e),
            n = new Image();
        return (n.src = t), await n.decode(), { image: n, dataURI: t };
    } catch {
        throw l.o.WRONG_TYPE;
    }
}
async function _(e, t) {
    let n = [];
    for (let r = 0; r < e.length; r++) {
        let i = e[r];
        try {
            let { image: e, dataURI: r } = await d(i),
                a = i.type === u.a.MP4 ? await t(r, i) : await t(r, i, e);
            null != a && n.push({ type: a, filename: i.name });
        } catch (e) {
            n.push({ type: e, filename: i.name });
        }
    }
    n.length > 0 && f(n);
}
let f = (e) => {
        (0, a.mMO)(async () => {
            let { default: t } = await n.e("84981").then(n.bind(n, 940372));
            return (n) => (0, r.jsx)(t, { errors: e, ...n });
        });
    },
    p = i.forwardRef((e, t) => {
        let {
                onChange: l,
                multiple: u = !0,
                disabled: c,
                className: d,
                tabIndex: f = -1,
                "aria-label": p,
                filters: h,
                setLoading: m,
                title: g,
            } = e,
            E = i.useRef(null),
            [A, I] = i.useState(!1);
        i.useEffect(() => {
            A && T();
        }, [A]);
        let T = () => {
                null !== E.current && ((0, a.OoC)(E.current), (E.current = null));
            },
            y = async (e) => {
                m?.(!0), await _(e, l), I(!0), m?.(!1);
            },
            S = async (e) => {
                if (
                    (e.stopPropagation(),
                    e.preventDefault(),
                    e.currentTarget?.files == null || e.currentTarget?.files?.length === 0)
                )
                    return;
                let t = e.currentTarget.files;
                E.current = await (0, a.mMO)(async () => {
                    let { default: e } = await n.e("17259").then(n.bind(n, 897126));
                    return (n) => (0, r.jsx)(e, { processFiles: () => y(t), ...n });
                });
            };
        return (0, r.jsx)(s.A, {
            ref: t,
            onChange: S,
            filters: h ?? (0, o.gA)(),
            multiple: u,
            disabled: c,
            className: d,
            tabIndex: f,
            "aria-label": p,
            title: g,
        });
    });
p.displayName = "ImageInputWithModals";
let h = p;
