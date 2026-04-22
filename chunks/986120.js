"use strict";
let r;
n.d(t, { E: () => h, T: () => E });
var i = n(562465),
    s = n(73153),
    a = n(626584),
    o = n(606076),
    l = n(961350),
    u = n(194871),
    d = n(674378),
    c = n(723702),
    _ = n(837921),
    f = n(652215);
async function E() {
    null != r ||
        (c.isPlatformEmbedded && ((0, c.isMac)() || ((0, c.isWindows)() && "arm64" !== _.Ay.architecture))
            ? (await _.Ay.ensureModule("discord_cloudsync"),
              (r = new (_.Ay.getCloudSync())()).on("state", (e) =>
                  s.h.dispatch({ type: "GAME_CLOUD_SYNC_UPDATE", state: e }),
              ))
            : new a.A("CloudSyncUtils").warn("CloudSync is not supported on this platform"));
}
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (!u.A.supportsCloudSync(e, t)) return Promise.resolve({ type: f.R_U.NONE });
    let s = (function () {
            if (null == r) throw Error("Initialize cloud sync module before syncing.");
            return r;
        })(),
        a = u.A.getState(e, t);
    if (null == a) throw Error(`No dispatch state for ${e}:${t}`);
    let c = a.storage ?? {},
        _ = (0, d.gW)(e, t),
        E = l.default.getToken();
    if (null == E) throw Error("Cannot use cloud sync when not authenticated.");
    let h = null != a.installPath ? (0, o.A)(a.installPath) : null;
    if (null == h) throw Error(`No install path for ${e}:${t}`);
    let p = l.default.getId(),
        m = {
            forceHash: n,
            manifestPath: f.gkb.STORAGE_MANIFEST(h, p),
            roots:
                null != c.roots
                    ? c.roots
                    : [
                          {
                              id: f.gkb.ROOT_ID,
                              paths: Object.keys(f.gkb.ROOT_PLATFORMS).map((e) => ({
                                  platform: e,
                                  path: f.gkb.ROOT_STORAGE_PATH(h, p),
                              })),
                              patterns: f.gkb.ROOT_PATTERN,
                          },
                      ],
            storage: { baseURL: `${(0, i.TP)()}${f.Rsh.APPLICATION_STORAGE(e, t)}`, token: E },
            replacements: { INSTALLDIR: f.gkb.INSTALL_DIR(h), USERID: p, BRANCHID: t },
        };
    return s.sync(_, m);
}
