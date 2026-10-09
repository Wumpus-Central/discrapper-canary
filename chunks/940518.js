t.d(n, { A: () => o });
var i = t(477900),
    l = t(582128),
    s = t(506774),
    a = t(192308);
let r = "HasBeenInStageChannel";
function o() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    l.useEffect(() => {
        e &&
            null == s.w.get(r) &&
            ((0, a.openModalLazy)(async () => {
                let { default: e } = await Promise.all([t.e("97186"), t.e("713085"), t.e("756016")]).then(
                    t.bind(t, 456947),
                );
                return (n) => (0, i.jsx)(e, { ...n });
            }),
            s.w.set(r, Date.now()));
    }, [e]);
}
