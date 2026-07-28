"use strict";
n.d(t, { Ay: () => r, l0: () => s, u5: () => a });
var i = n(582128);
function r(e) {
    let t = i.useRef(e);
    i.useEffect(() => t.current(), []);
}
function a(e) {
    let t = i.useRef(e);
    i.useLayoutEffect(() => t.current(), []);
}
function s(e) {
    let t = i.useRef(e);
    i.useEffect(() => {
        t.current = e;
    }),
        i.useEffect(
            () => () => {
                t.current();
            },
            [],
        );
}
