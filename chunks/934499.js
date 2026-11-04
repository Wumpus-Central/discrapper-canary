var i = n(620632),
    s = n(73153),
    l = n(626584),
    r = n(594061),
    a = n(856383),
    o = n(186280),
    c = n(956396),
    u = n(652215),
    d = n(355097);
let m = new l.A("EmojiPackActionCreators");
n.d(
    t,
    {},
    {
        Fp: async function () {
            if ("NOT_FETCHED" === c.A.getFetchState()) {
                s.h.dispatch({ type: "EMOJI_PACKS_FETCH_START" });
                try {
                    let e = (await i.Bo.get({ url: u.Rsh.EMOJI_PACKS, rejectWithError: !0 })).body;
                    s.h.dispatch({ type: "EMOJI_PACKS_FETCH_SUCCESS", packs: e });
                } catch (e) {
                    if (e instanceof i.oh && 404 === e.status) {
                        (m.log("GET /emoji-packs returned 404: emoji packs are not enabled for this user"),
                            s.h.dispatch({ type: "EMOJI_PACKS_FETCH_SUCCESS", packs: [] }));
                        return;
                    }
                    (e instanceof i.oh && e.status >= 400 && e.status < 500
                        ? m.warn(`GET /emoji-packs failed with status ${e.status}`)
                        : a.A.captureException(e),
                        s.h.dispatch({ type: "EMOJI_PACKS_FETCH_FAIL" }));
                }
            }
        },
        Ls: async function (e) {
            c.A.getPack(e)?.available === !0 &&
                (await r.bW.updateAsync(
                    "pinnedEmojiPacks",
                    (t) => {
                        if (t.packIds.includes(e)) return !1;
                        ("FETCHED" === c.A.getFetchState() &&
                            (t.packIds = t.packIds.filter((e) => c.A.getPack(e)?.available === !0)),
                            (t.packIds = [...t.packIds, e]),
                            (0, o.$q)(e));
                    },
                    d.Sb.INFREQUENT_USER_ACTION,
                    (t) => m.warn("pinEmojiPack save failed", e, t),
                ));
        },
        M5: async function (e) {
            await r.bW.updateAsync(
                "pinnedEmojiPacks",
                (t) => {
                    if (!t.packIds.includes(e)) return !1;
                    ((t.packIds = t.packIds.filter((t) => t !== e)), (0, o.nj)(e));
                },
                d.Sb.INFREQUENT_USER_ACTION,
                (t) => m.warn("unpinEmojiPack save failed", e, t),
            );
        },
    },
);
