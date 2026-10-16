n.d(t, { Fp: () => E, Ls: () => m, M5: () => f });
var i = n(636537),
    s = n(73153),
    l = n(626584),
    r = n(594061),
    a = n(38405),
    o = n(182159),
    c = n(652215),
    u = n(355097);
let d = new l.A("EmojiPackActionCreators");
async function m(e) {
    o.A.getPack(e)?.available === !0 &&
        (await r.bW.updateAsync(
            "pinnedEmojiPacks",
            (t) => {
                if (t.packIds.includes(e)) return !1;
                ("FETCHED" === o.A.getFetchState() &&
                    (t.packIds = t.packIds.filter((e) => o.A.getPack(e)?.available === !0)),
                    (t.packIds = [...t.packIds, e]));
            },
            u.Sb.INFREQUENT_USER_ACTION,
            (t) => d.warn("pinEmojiPack save failed", e, t),
        ));
}
async function f(e) {
    await r.bW.updateAsync(
        "pinnedEmojiPacks",
        (t) => {
            if (!t.packIds.includes(e)) return !1;
            t.packIds = t.packIds.filter((t) => t !== e);
        },
        u.Sb.INFREQUENT_USER_ACTION,
        (t) => d.warn("unpinEmojiPack save failed", e, t),
    );
}
async function E() {
    if ("NOT_FETCHED" === o.A.getFetchState()) {
        s.h.dispatch({ type: "EMOJI_PACKS_FETCH_START" });
        try {
            let e = (await i.Bo.get({ url: c.Rsh.EMOJI_PACKS, rejectWithError: !0 })).body;
            (d.log("GET /emoji-packs response", JSON.stringify(e, null, 2)),
                s.h.dispatch({ type: "EMOJI_PACKS_FETCH_SUCCESS", packs: e }));
        } catch (e) {
            (e instanceof i.oh && 404 === e.status
                ? d.log("GET /emoji-packs returned 404: emoji packs are not enabled for this user")
                : e instanceof i.oh && e.status >= 400 && e.status < 500
                  ? d.warn(`GET /emoji-packs failed with status ${e.status}`)
                  : a.A.captureException(e),
                s.h.dispatch({ type: "EMOJI_PACKS_FETCH_FAIL" }));
        }
    }
}
