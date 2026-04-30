"use strict";
n.d(t, { A: () => s }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var i = n(284009),
    r = n.n(i);
async function s(e) {
    let t,
        { default: i } = await n.e("25777").then(n.t.bind(n, 293384, 19)),
        s = i.createFile(!1),
        a = new Promise((e) => {
            s.onReady = e;
        }),
        o = await e.arrayBuffer();
    for (let e of ((o.fileStart = 0),
    s.appendBuffer(o),
    s.flush(),
    await a,
    r()(null != s.boxes, "mp4boxInputFile.boxes should not be null after parsing"),
    s.boxes))
        "uuid" === e.type && (t = e.start);
    let l = e.slice(0, t, e.type),
        _ = e.slice(t + 4, t + 8 + 16, e.type);
    return new Blob([l, new Uint8Array([0, 0, 0, 24]), _], { type: e.type });
}
