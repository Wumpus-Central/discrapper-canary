"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    s = n(695825);
function l(e) {
    let [t, n] = i.useState(!0),
        [l, r] = i.useState(),
        [a, o] = i.useState(),
        d = i.useCallback(async (e) => {
            n(!0), r(void 0);
            try {
                let t = await s.zW(e);
                o(t);
            } catch (e) {
                r(e);
            } finally {
                n(!1);
            }
        }, []);
    return (
        i.useEffect(() => {
            d(e);
        }, [e, d]),
        { isLoading: t, error: l, highlightedCreatorDetails: a }
    );
}
