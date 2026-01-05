n.d(t, { ZP: () => c });
var r = n(544891),
    i = n(570140),
    a = n(594174),
    o = n(960048),
    s = n(535834),
    l = n(981631);
let c = {
    connect: async (e) => {
        try {
            let t = await r.tn.post({
                url: l.ANM.HAVEN_CONNECT(e),
                rejectWithError: !0,
            });
            return (
                i.Z.dispatch({
                    type: "HAVEN_CONNECT",
                    room: (0, s.CK)(t.body),
                }),
                t
            );
        } catch (e) {
            o.Z.captureException(e);
        }
    },
    disconnect: async (e) => {
        try {
            await r.tn.post({
                url: l.ANM.HAVEN_DISCONNECT(e),
                rejectWithError: !0,
            });
        } catch (t) {
            if ((null == t ? void 0 : t.status) === 404) {
                let t = a.default.getCurrentUser();
                null != t &&
                    i.Z.dispatch({
                        type: "HAVEN_DISCONNECT",
                        roomId: e,
                        userId: t.id,
                    });
            }
            o.Z.captureException(t);
        }
    },
    update: async (e, t) => {
        let { position: n, avatar: i, seat: a } = t;
        try {
            await r.tn.post({
                url: l.ANM.HAVEN_UPDATE(e),
                body: {
                    position: n,
                    avatar: i,
                    seat: a,
                },
                rejectWithError: !0,
            });
        } catch (e) {
            o.Z.captureException(e);
        }
    },
    getAssets: async () => {
        try {
            return await r.tn.get({
                url: l.ANM.HAVEN_GET_ASSETS,
                rejectWithError: !0,
            });
        } catch (e) {
            return o.Z.captureException(e), null;
        }
    },
};
