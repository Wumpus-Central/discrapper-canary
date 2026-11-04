var i = d(41851),
    e = d(528239);
let c = [];
async function a(l) {
    try {
        await i.t.post(e.t.deviceStats, l);
    } catch {
        return;
    }
}
d.d(
    t,
    {},
    {
        n: function () {
            if ((0, i.r)()) for (let l of c.splice(0)) a(l);
        },
        r: function () {
            c.length = 0;
        },
        t: async function (l) {
            (0, i.r)() ? await a(l) : c.push(l);
        },
    },
);
