"use strict";
n.d(t, { A: () => s });
var i = n(64700);
let s = () => {
    let e = i.useRef(!0);
    return (
        i.useEffect(
            () => () => {
                e.current = !1;
            },
            [],
        ),
        i.useCallback(() => e.current, [])
    );
};
