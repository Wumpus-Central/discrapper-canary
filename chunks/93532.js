"use strict";
n.d(t, { A: () => a }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var r = n(284009),
    i = n.n(r);
async function a(e) {
    let t,
        { default: r } = await n.e("25777").then(n.t.bind(n, 293384, 19)),
        a = r.createFile(!1),
        s = new Promise((e) => {
            a.onReady = e;
        }),
        o = await e.arrayBuffer();
    for (let e of ((o.fileStart = 0),
    a.appendBuffer(o),
    a.flush(),
    await s,
    i()(null != a.boxes, "mp4boxInputFile.boxes should not be null after parsing"),
    a.boxes))
        "uuid" === e.type && (t = e.start);
    let l = e.slice(0, t, e.type),
        u = e.slice(t + 4, t + 8 + 16, e.type);
    return new Blob([l, new Uint8Array([0, 0, 0, 24]), u], { type: e.type });
}
