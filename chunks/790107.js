"use strict";
n.d(t, { c: () => _ });
var r = n(562465),
    i = n(198982),
    a = n(626584),
    s = n(430452),
    o = n(453771),
    l = n(77729),
    u = n(652215);
let c = new a.A("uploadRtcLogFiles");
function d(e, t) {
    let n = t.split("."),
        r = n.length > 1 ? n.pop() : "",
        i = n.join("."),
        a = `${i}.${r}`,
        s = 1;
    for (; e.has(a); ) (a = `${i}_${s}.${r}`), (s += 1);
    return e.add(a), a;
}
async function _(e, t) {
    let n;
    if (null == l.A.fileManager.readLogFiles) throw new i._(i.ct.GENERAL);
    let a = [];
    try {
        a = (a = await l.A.fileManager.readLogFiles(e)).map((e) => (0, o.ww)(e, "application/octet-stream"));
    } catch (e) {
        throw (c.error(`uploadDebugFiles: read error '${e}'`), new i._(i.ct.READ));
    }
    if (0 === a.length) throw new i._(i.ct.NO_FILE);
    let _ = { extraInfo: t, mediaEngineState: s.Ay.getState() },
        f = [
            ...a.map((e) => ({ name: e.name, file: e, filename: e.name })),
            {
                name: "media_engine_state.json",
                filename: "media_engine_state.json",
                file: new Blob([JSON.stringify(_, void 0, 2)]),
            },
        ],
        h = new Set();
    try {
        n = await r.Bo.post({
            url: u.Rsh.DEBUG_LOGS(u.Umv.RTC),
            attachments: [
                ...f.map((e) => {
                    let t = d(h, e.name);
                    return { name: t, file: e.file, filename: t };
                }),
            ],
            rejectWithError: !1,
        });
    } catch (e) {
        if (429 === e.status) throw new i._(i.ct.PROGRESS);
        throw (c.error(`Debug log upload error: status: ${e.status}, message: ${e.message}`), new i._(i.ct.UPLOAD));
    }
    if ("success_count" in n.body && n.body.success_count !== f.length)
        throw (
            (c.error(`Debug log upload: stored files ${n.body.success_count} !== ${f.length}`), new i._(i.ct.GENERAL))
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
