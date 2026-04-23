"use strict";
let r;
n.d(t, { E: () => h, T: () => p });
var i = n(562465),
    s = n(73153),
    a = n(626584),
    o = n(606076),
    l = n(961350),
    u = n(194871),
    c = n(674378),
    d = n(723702),
    _ = n(837921),
    f = n(652215);
async function p() {
    null != r ||
        (d.isPlatformEmbedded && ((0, d.isMac)() || ((0, d.isWindows)() && "arm64" !== _.Ay.architecture))
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
    let d = a.storage ?? {},
        _ = (0, c.gW)(e, t),
        p = l.default.getToken();
    if (null == p) throw Error("Cannot use cloud sync when not authenticated.");
    let h = null != a.installPath ? (0, o.A)(a.installPath) : null;
    if (null == h) throw Error(`No install path for ${e}:${t}`);
    let E = l.default.getId(),
        m = {
            forceHash: n,
            manifestPath: f.gkb.STORAGE_MANIFEST(h, E),
            roots:
                null != d.roots
                    ? d.roots
                    : [
                          {
                              id: f.gkb.ROOT_ID,
                              paths: Object.keys(f.gkb.ROOT_PLATFORMS).map((e) => ({
                                  platform: e,
                                  path: f.gkb.ROOT_STORAGE_PATH(h, E),
                              })),
                              patterns: f.gkb.ROOT_PATTERN,
                          },
                      ],
            storage: { baseURL: `${(0, i.TP)()}${f.Rsh.APPLICATION_STORAGE(e, t)}`, token: p },
            replacements: { INSTALLDIR: f.gkb.INSTALL_DIR(h), USERID: E, BRANCHID: t },
        };
    return s.sync(_, m);
}
