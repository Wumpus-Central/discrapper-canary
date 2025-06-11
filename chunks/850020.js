n.d(t, { K: () => i });
var r = n(73800);
function i(e) {
    let { user: t } = e;
    return (0, r.useMemo)(() => {
        if ((null == t ? void 0 : t.nameplate) != null) return t.nameplate;
    }, [t]);
}
