(n.d(t, { Z: () => x }), n(415506), n(388685));
var a = n(281215),
    i = n(403044),
    o = n(938712),
    r = n(614458),
    s = n(388032);
let l = (0, a.k4)('Overview', {
        useTitle: () => s.intl.string(s.t['/dp6yc']),
        layout: [i.Z, o.Z, r.Z]
    }),
    d = (0, a.wf)('Notifs', {
        useTitle: () => s.intl.string(s.t.HcoRu7),
        layout: [l]
    });
function c(e) {
    try {
        return e();
    } catch (e) {
        if (e instanceof Error && e.message.includes(a.pe)) return;
        throw e;
    }
}
for (let e of (c(() => d.parent), d)) for (let t of e) t.type === a.Jq.TOGGLE || (t.type, a.Jq.SELECT);
let [u] = d.data.layout;
c(() => u.parent);
let [f, m, h] = u.data.layout;
(c(() => f.parent), c(() => m.parent), c(() => h.parent));
let x = d;
