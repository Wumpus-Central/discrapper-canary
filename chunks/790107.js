n.d(t, { c: () => f }), n(747238), n(896048), n(457529);
var r = n(562465),
    i = n(198982),
    a = n(626584),
    s = n(430452),
    o = n(453771),
    l = n(77729),
    c = n(652215);
let u = new a.A("uploadRtcLogFiles");
function d(e, t) {
    let n = t.split("."),
        r = n.length > 1 ? n.pop() : "",
        i = n.join("."),
        a = "".concat(i, ".").concat(r),
        s = 1;
    for (; e.has(a); ) (a = "".concat(i, "_").concat(s, ".").concat(r)), (s += 1);
    return e.add(a), a;
}
async function f(e, t) {
    let n;
    if (null == l.A.fileManager.readLogFiles) throw new i._(i.ct.GENERAL);
    let a = [];
    try {
        a = (a = await l.A.fileManager.readLogFiles(e)).map((e) => (0, o.ww)(e, "application/octet-stream"));
    } catch (e) {
        throw (u.error("uploadDebugFiles: read error '".concat(e, "'")), new i._(i.ct.READ));
    }
    if (0 === a.length) throw new i._(i.ct.NO_FILE);
    let f = {
            extraInfo: t,
            mediaEngineState: s.A.getState(),
        },
        p = [
            ...a.map((e) => ({
                name: e.name,
                file: e,
                filename: e.name,
            })),
            {
                name: "media_engine_state.json",
                filename: "media_engine_state.json",
                file: new Blob([JSON.stringify(f, void 0, 2)]),
            },
        ],
        _ = new Set();
    try {
        n = await r.Bo.post({
            url: c.Rsh.DEBUG_LOGS(c.Umv.RTC),
            attachments: [
                ...p.map((e) => {
                    let t = d(_, e.name);
                    return {
                        name: t,
                        file: e.file,
                        filename: t,
                    };
                }),
            ],
            rejectWithError: !1,
        });
    } catch (e) {
        if (429 === e.status) throw new i._(i.ct.PROGRESS);
        throw (
            (u.error("Debug log upload error: status: ".concat(e.status, ", message: ").concat(e.message)),
            new i._(i.ct.UPLOAD))
        );
    }
    if ("success_count" in n.body && n.body.success_count !== p.length)
        throw (
            (u.error("Debug log upload: stored files ".concat(n.body.success_count, " !== ").concat(p.length)),
            new i._(i.ct.GENERAL))
        );
    if (
        ("store_success" in n.body && !n.body.store_success) ||
        ("id_match" in n.body && !n.body.id_match) ||
        ("all_success" in n.body && !n.body.all_success)
    )
        throw (
            (u.error(
                "Debug log upload: store_success: ".concat(n.body.store_success, " / ") +
                    "id_match: ".concat(n.body.id_match, " / ") +
                    "all_success: ".concat(n.body.all_success),
            ),
            new i._(i.ct.GENERAL))
        );
}
