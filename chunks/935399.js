"use strict";
n.d(t, { Ay: () => i, l0: () => s, u5: () => a });
var r = n(64700);
function i(e) {
    let t = r.useRef(e);
    r.useEffect(() => t.current(), []);
}
function a(e) {
    let t = r.useRef(e);
    r.useLayoutEffect(() => t.current(), []);
}
function s(e) {
    let t = r.useRef(e);
    r.useEffect(() => {
        t.current = e;
    }),
        r.useEffect(
            () => () => {
                t.current();
            },
            [],
        );
}
