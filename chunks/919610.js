"use strict";
s.d(t, { Z: () => l });
var n = s(64700);
let l = (e) => {
    let [t, s] = n.useState(1);
    return {
        currentPage: t,
        handlePageChange: n.useCallback(
            (t) => {
                s(t), e.current?.scrollTo({ to: 0 });
            },
            [e, s],
        ),
    };
};
