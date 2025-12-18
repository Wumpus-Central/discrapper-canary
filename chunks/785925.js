n.d(t, { ZP: () => s });
var i = n(544891),
    r = n(570140),
    l = n(960048),
    a = n(535834),
    o = n(981631);
let s = {
    connect: async (e) => {
        try {
            let t = await i.tn.post({
                url: o.ANM.HAVEN_CONNECT(e),
                rejectWithError: !0,
            });
            return (
                r.Z.dispatch({
                    type: "HAVEN_CONNECT",
                    room: (0, a.CK)(t.body),
                }),
                t
            );
        } catch (e) {
            l.Z.captureException(e);
        }
    },
    disconnect: async (e) => {
        try {
            await i.tn.post({
                url: o.ANM.HAVEN_DISCONNECT(e),
                rejectWithError: !0,
            });
        } catch (e) {
            l.Z.captureException(e);
        }
    },
    update: async (e, t) => {
        let { position: n, avatar: r, seat: a } = t;
        try {
            await i.tn.post({
                url: o.ANM.HAVEN_UPDATE(e),
                body: {
                    position: n,
                    avatar: r,
                    seat: a,
                },
                rejectWithError: !0,
            });
        } catch (e) {
            l.Z.captureException(e);
        }
    },
    getAssets: async () => {
        try {
            return await i.tn.get({
                url: o.ANM.HAVEN_GET_ASSETS,
                rejectWithError: !0,
            });
        } catch (e) {
            return l.Z.captureException(e), null;
        }
    },
};
