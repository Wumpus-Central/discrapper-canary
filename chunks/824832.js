"use strict";
n.d(t, { Ay: () => E, UD: () => u }), n(321073);
var i = n(477900),
    r = n(582128),
    a = n(192308),
    s = n(780777),
    l = n(946274),
    o = n(73621),
    d = n(693591);
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
        throw o.o.WRONG_TYPE;
    }
}
async function u(e, t) {
    var r;
    let s = [];
    for (let n = 0; n < e.length; n++) {
        let i = e[n];
        try {
            let { image: e, dataURI: n } = await c(i),
                r = i.type === d.a.MP4 ? await t(n, i) : await t(n, i, e);
            null != r && s.push({ type: r, filename: i.name });
        } catch (e) {
            s.push({ type: e, filename: i.name });
        }
    }
    s.length > 0 &&
        ((r = s),
        (0, a.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("56484"), n.e("84981")]).then(n.bind(n, 940372));
            return (t) => (0, i.jsx)(e, { errors: r, ...t });
        }));
}
let _ = r.forwardRef((e, t) => {
    let {
            onChange: o,
            multiple: d = !0,
            disabled: c,
            className: _,
            tabIndex: E = -1,
            "aria-label": A,
            filters: h,
            setLoading: I,
            title: f,
        } = e,
        p = r.useRef(null),
        [T, m] = r.useState(!1);
    async function g(e) {
        I?.(!0), await u(e, o), m(!0), I?.(!1);
    }
    async function S(e) {
        if (
            (e.stopPropagation(),
            e.preventDefault(),
            e.currentTarget?.files == null || e.currentTarget?.files?.length === 0)
        )
            return;
        let t = e.currentTarget.files;
        p.current = await (0, a.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("44568"), n.e("17259")]).then(n.bind(n, 897126));
            return (n) => (0, i.jsx)(e, { processFiles: () => g(t), ...n });
        });
    }
    return (
        r.useEffect(() => {
            T && null !== p.current && ((0, a.closeModal)(p.current), (p.current = null));
        }, [T]),
        (0, i.jsx)(s.A, {
            ref: t,
            onChange: S,
            filters: h ?? (0, l.gA)(),
            multiple: d,
            disabled: c,
            className: _,
            tabIndex: E,
            "aria-label": A,
            title: f,
        })
    );
});
_.displayName = "ImageInputWithModals";
let E = _;
