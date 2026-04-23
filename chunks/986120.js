"use strict";
let i;
n.d(t, { E: () => m, T: () => h });
var r = n(636537),
    s = n(228366),
    a = n(626584),
    o = n(606076),
    l = n(495544),
    d = n(340829),
    _ = n(674378),
    u = n(723702),
    c = n(19575),
    E = n(652215);
async function h() {
    null != i ||
        (u.isPlatformEmbedded && ((0, u.isMac)() || ((0, u.isWindows)() && "arm64" !== c.Ay.architecture))
            ? (await c.Ay.ensureModule("discord_cloudsync"),
              (i = new (c.Ay.getCloudSync())()).on("state", (e) =>
                  s.h.dispatch({ type: "GAME_CLOUD_SYNC_UPDATE", state: e }),
              ))
            : new a.A("CloudSyncUtils").warn("CloudSync is not supported on this platform"));
}
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (!d.A.supportsCloudSync(e, t)) return Promise.resolve({ type: E.R_U.NONE });
    let s = (function () {
            if (null == i) throw Error("Initialize cloud sync module before syncing.");
            return i;
        })(),
        a = d.A.getState(e, t);
    if (null == a) throw Error(`No dispatch state for ${e}:${t}`);
    let u = a.storage ?? {},
        c = (0, _.gW)(e, t),
        h = l.default.getToken();
    if (null == h) throw Error("Cannot use cloud sync when not authenticated.");
    let m = null != a.installPath ? (0, o.A)(a.installPath) : null;
    if (null == m) throw Error(`No install path for ${e}:${t}`);
    let f = l.default.getId(),
        g = {
            forceHash: n,
            manifestPath: E.gkb.STORAGE_MANIFEST(m, f),
            roots:
                null != u.roots
                    ? u.roots
                    : [
                          {
                              id: E.gkb.ROOT_ID,
                              paths: Object.keys(E.gkb.ROOT_PLATFORMS).map((e) => ({
                                  platform: e,
                                  path: E.gkb.ROOT_STORAGE_PATH(m, f),
                              })),
                              patterns: E.gkb.ROOT_PATTERN,
                          },
                      ],
            storage: { baseURL: `${(0, r.TP)()}${E.Rsh.APPLICATION_STORAGE(e, t)}`, token: h },
            replacements: { INSTALLDIR: E.gkb.INSTALL_DIR(m), USERID: f, BRANCHID: t },
        };
    return s.sync(c, g);
}
