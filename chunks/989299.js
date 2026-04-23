a.d(t, { I: () => d, O: () => A });
var n = a(562465),
    l = a(765178),
    r = a(73153),
    s = a(157559),
    i = a(198982),
    c = a(218727),
    o = a(652215),
    u = a(985018);
async function d() {
    if (c.A.shouldFetch) {
        r.h.dispatch({ type: "RECENT_AVATARS_FETCH_START" });
        try {
            let e = await n.Bo.get({ url: o.Rsh.RECENT_AVATARS, rejectWithError: !0 });
            r.h.dispatch({
                type: "RECENT_AVATARS_FETCH_SUCCESS",
                avatars: e.body.avatars.map((e) => {
                    let { storage_hash: t, ...a } = e;
                    return { ...a, storageHash: t };
                }),
            });
        } catch (e) {
            r.h.dispatch({ type: "RECENT_AVATARS_FETCH_FAILURE", error: new i.LG(e) });
        }
    }
}
async function A(e) {
    try {
        await n.Bo.del({ url: o.Rsh.RECENT_AVATARS_DELETE(e), rejectWithError: !0 }),
            await r.h.dispatch({ type: "RECENT_AVATAR_DELETE", avatarId: e }),
            l.O.announce(u.intl.string(u.t.YJPieI));
    } catch (e) {
        s.A.show({ title: u.intl.string(u.t.iufib1), body: u.intl.string(u.t["/ZNT+0"]) });
    }
}
