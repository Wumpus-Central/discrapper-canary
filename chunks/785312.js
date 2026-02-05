"use strict";
n.d(t, { A: () => s });
var i = n(64700);
function s(e) {
    let [t, n] = i.useState(e),
        s = i.useRef(null);
    return (
        i.useEffect(() => {
            n(s.current?.offsetHeight ?? e);
        }, [e, s.current?.offsetHeight]),
        { headerHeight: t, headerRef: s }
    );
}
