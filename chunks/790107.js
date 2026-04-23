"use strict";
n.d(t, { c: () => d });
var r = n(562465),
    i = n(198982),
    s = n(626584),
    a = n(430452),
    o = n(453771),
    l = n(77729),
    u = n(652215);
let c = new s.A("uploadRtcLogFiles");
async function d(e, t) {
    let n;
    if (null == l.A.fileManager.readLogFiles) throw new i._(i.ct.GENERAL);
    let s = [];
    try {
        s = (s = await l.A.fileManager.readLogFiles(e)).map((e) => (0, o.ww)(e, "application/octet-stream"));
    } catch (e) {
        throw (c.error(`uploadDebugFiles: read error '${e}'`), new i._(i.ct.READ));
    }
    if (0 === s.length) throw new i._(i.ct.NO_FILE);
    let d = { extraInfo: t, mediaEngineState: a.Ay.getState() },
        _ = [
            ...s.map((e) => ({ name: e.name, file: e, filename: e.name })),
            {
                name: "media_engine_state.json",
                filename: "media_engine_state.json",
                file: new Blob([JSON.stringify(d, void 0, 2)]),
            },
        ],
        f = new Set();
    try {
        n = await r.Bo.post({
            url: u.Rsh.DEBUG_LOGS(u.Umv.RTC),
            attachments: [
                ..._.map((e) => {
                    let t = (function (e, t) {
                        let n = t.split("."),
                            r = n.length > 1 ? n.pop() : "",
                            i = n.join("."),
                            s = `${i}.${r}`,
                            a = 1;
                        for (; e.has(s); ) (s = `${i}_${a}.${r}`), (a += 1);
                        return e.add(s), s;
                    })(f, e.name);
                    return { name: t, file: e.file, filename: t };
                }),
            ],
            rejectWithError: !1,
        });
    } catch (e) {
        if (429 === e.status) throw new i._(i.ct.PROGRESS);
        throw (c.error(`Debug log upload error: status: ${e.status}, message: ${e.message}`), new i._(i.ct.UPLOAD));
    }
    if ("success_count" in n.body && n.body.success_count !== _.length)
        throw (
            (c.error(`Debug log upload: stored files ${n.body.success_count} !== ${_.length}`), new i._(i.ct.GENERAL))
        );
    if (
        ("store_success" in n.body && !n.body.store_success) ||
        ("id_match" in n.body && !n.body.id_match) ||
        ("all_success" in n.body && !n.body.all_success)
    )
        throw (
            (c.error(
                `Debug log upload: store_success: ${n.body.store_success} / id_match: ${n.body.id_match} / all_success: ${n.body.all_success}`,
            ),
            new i._(i.ct.GENERAL))
        );
}
